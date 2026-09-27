export interface Env {
  ASSETS: Fetcher;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    // Let Cloudflare Workers Static Assets serve the static files
    const response = await env.ASSETS.fetch(request);

    // If 404 and looking for a clean HTML file without .html extension
    if (response.status === 404 && !url.pathname.includes(".")) {
      const cleanUrl = new URL(url);
      cleanUrl.pathname = url.pathname.endsWith("/")
        ? `${url.pathname}index.html`
        : `${url.pathname}/index.html`;
      const fallbackResponse = await env.ASSETS.fetch(new Request(cleanUrl.toString(), request));
      if (fallbackResponse.status === 200) {
        return applySecurityHeaders(fallbackResponse);
      }
    }

    return applySecurityHeaders(response);
  },
};

function applySecurityHeaders(response: Response): Response {
  // If redirect (3xx) or null-body status (101, 204, 205, 304), return directly
  if ([101, 204, 205, 304].includes(response.status) || (response.status >= 300 && response.status < 400)) {
    return response;
  }

  const newHeaders = new Headers(response.headers);
  // Child privacy & safety headers
  newHeaders.set("X-Content-Type-Options", "nosniff");
  newHeaders.set("X-Frame-Options", "DENY");
  newHeaders.set("Referrer-Policy", "no-referrer");
  newHeaders.set("Permissions-Policy", "camera=(), microphone=(), geolocation=(), payment=()");
  // Strict CSP: Zero external analytics, zero ads, zero trackers
  newHeaders.set(
    "Content-Security-Policy",
    "default-src 'self' 'unsafe-inline' 'unsafe-eval' data: blob:; img-src 'self' data: blob:; media-src 'self' data: blob:; connect-src 'self';"
  );

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: newHeaders,
  });
}
