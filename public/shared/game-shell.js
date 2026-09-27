/**
 * Unified Modern Game Shell Script - Self-hosted Web Game Arcade
 * Handles: Back Navigation, Auto-hiding Toolbar, Fullscreen, Audio Synchronization,
 * Orientation Guard, Gamepad Detection, and Legacy Compatibility.
 */
(function () {
  'use strict';

  // Universal Audio State Manager
  class SoundManager {
    constructor() {
      this.enabled = localStorage.getItem('arcade_sound_enabled') !== 'false';
      this.ctx = null;
      this._initListener();
    }

    _initListener() {
      const unlock = () => {
        if (!this.ctx) {
          const AudioContext = window.AudioContext || window.webkitAudioContext;
          if (AudioContext) this.ctx = new AudioContext();
        }
        if (this.ctx && this.ctx.state === 'suspended') {
          this.ctx.resume();
        }
        ['pointerdown', 'keydown', 'touchstart'].forEach(ev => {
          document.removeEventListener(ev, unlock);
        });
      };
      ['pointerdown', 'keydown', 'touchstart'].forEach(ev => {
        document.addEventListener(ev, unlock, { passive: true });
      });
    }

    toggle() {
      this.enabled = !this.enabled;
      localStorage.setItem('arcade_sound_enabled', this.enabled ? 'true' : 'false');
      localStorage.setItem('kids_arcade_sound', this.enabled ? 'true' : 'false');
      window.dispatchEvent(new CustomEvent('arcade-sound-change', { detail: { enabled: this.enabled } }));
      if (this.enabled) this.playTap();
      return this.enabled;
    }

    playTone(fStart, fEnd, type, dur, vStart = 0.15, vEnd = 0.001) {
      if (!this.enabled) return;
      try {
        if (!this.ctx) {
          const AudioContext = window.AudioContext || window.webkitAudioContext;
          if (AudioContext) this.ctx = new AudioContext();
        }
        if (!this.ctx || this.ctx.state === 'suspended') return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(fStart, this.ctx.currentTime);
        if (fEnd !== fStart) {
          osc.frequency.exponentialRampToValueAtTime(Math.max(10, fEnd), this.ctx.currentTime + dur);
        }
        gain.gain.setValueAtTime(vStart, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(vEnd, this.ctx.currentTime + dur);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + dur);
      } catch (e) {}
    }

    playTap() { this.playTone(600, 400, 'sine', 0.08, 0.12); }
    playWin() {
      this.playTone(300, 600, 'triangle', 0.15);
      setTimeout(() => this.playTone(600, 1000, 'triangle', 0.25), 120);
    }
    playHit() { this.playTone(180, 60, 'sawtooth', 0.15, 0.2); }
    playCoin() { this.playTone(987.77, 1318.51, 'sine', 0.12, 0.15); }
    playPowerup() { this.playTone(400, 880, 'triangle', 0.25, 0.18); }
    playLaser() { this.playTone(880, 220, 'sawtooth', 0.12, 0.15); }
    playBonk() { this.playTone(240, 100, 'square', 0.1, 0.18); }
    playJump() { this.playTone(200, 450, 'sine', 0.14, 0.15); }
  }

  const Sound = new SoundManager();
  const safeSoundProxy = new Proxy(Sound, {
    get(target, prop) {
      if (prop in target) {
        const val = target[prop];
        return typeof val === 'function' ? val.bind(target) : val;
      }
      if (typeof prop === 'string' && prop.startsWith('play')) {
        return () => target.playTap();
      }
      return undefined;
    }
  });

  window.ArcadeSound = safeSoundProxy;
  // Legacy aliases
  window.KidAudio = safeSoundProxy;

  // Modern Unified Shell Class
  class GameShell {
    constructor() {
      this.hideTimer = null;
      this.isBarHidden = false;
      this.gameTitle = document.title || 'Game';
      this.config = null;
      this.isPaused = false;

      this.init();
    }

    async init() {
      // Try to load game.config.json from current directory
      try {
        const res = await fetch('game.config.json');
        if (res.ok) {
          this.config = await res.json();
          if (this.config.title) this.gameTitle = this.config.title;
        }
      } catch (e) {}

      this.render();
      this.setupAutoFade();
      this.setupFullscreen();
      this.setupOrientationGuard();
      this.setupGamepadListener();
      this.setupKeyboardShortcuts();
    }

    render() {
      if (document.getElementById('arcade-shell-bar')) return;

      // Top Sensor zone
      const sensor = document.createElement('div');
      sensor.className = 'arcade-shell-sensor';
      document.body.appendChild(sensor);

      // Top Bar
      const bar = document.createElement('header');
      bar.id = 'arcade-shell-bar';
      bar.className = 'arcade-shell-bar';

      // Left controls: Back
      const left = document.createElement('div');
      left.className = 'arcade-shell-left';

      const backBtn = document.createElement('a');
      backBtn.href = '/';
      backBtn.className = 'arcade-shell-btn back-btn';
      backBtn.setAttribute('aria-label', '返回大厅 (Return to Arcade)');
      backBtn.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
        <span>返回大厅</span>
      `;
      backBtn.onclick = () => Sound.playTap();

      left.appendChild(backBtn);

      // Center title & badge
      const center = document.createElement('div');
      center.className = 'arcade-shell-title';
      center.innerHTML = `
        <span>${this.gameTitle}</span>
        ${this.config?.category ? `<span class="arcade-shell-badge">${this.config.category}</span>` : ''}
      `;

      // Right controls: Sound & Fullscreen
      const right = document.createElement('div');
      right.className = 'arcade-shell-right';

      const soundBtn = document.createElement('button');
      soundBtn.id = 'shell-sound-btn';
      soundBtn.className = 'arcade-shell-btn arcade-icon-btn';
      soundBtn.setAttribute('aria-label', '声音开关 (Mute / Unmute)');
      soundBtn.innerHTML = Sound.enabled ? '🔊' : '🔇';
      soundBtn.onclick = () => {
        const en = Sound.toggle();
        soundBtn.innerHTML = en ? '🔊' : '🔇';
        this.showToast(en ? '声音已开启' : '已静音');
      };

      const fsBtn = document.createElement('button');
      fsBtn.id = 'shell-fs-btn';
      fsBtn.className = 'arcade-shell-btn arcade-icon-btn';
      fsBtn.setAttribute('aria-label', '全屏模式 (Fullscreen)');
      fsBtn.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>
        </svg>
      `;
      fsBtn.onclick = () => this.toggleFullscreen();

      right.appendChild(soundBtn);
      right.appendChild(fsBtn);

      bar.appendChild(left);
      bar.appendChild(center);
      bar.appendChild(right);
      document.body.appendChild(bar);

      // Toast container
      const toast = document.createElement('div');
      toast.id = 'arcade-shell-toast';
      toast.className = 'arcade-shell-toast';
      document.body.appendChild(toast);
    }

    showToast(message, duration = 2000) {
      const toast = document.getElementById('arcade-shell-toast');
      if (!toast) return;
      toast.textContent = message;
      toast.classList.add('show');
      clearTimeout(this._toastTimer);
      this._toastTimer = setTimeout(() => {
        toast.classList.remove('show');
      }, duration);
    }

    setupAutoFade() {
      const bar = document.getElementById('arcade-shell-bar');
      const resetFade = () => {
        if (!bar) return;
        bar.classList.remove('shell-hidden');
        clearTimeout(this.hideTimer);
        this.hideTimer = setTimeout(() => {
          // Do not hide if hover or modal open
          bar.classList.add('shell-hidden');
        }, 2800);
      };

      ['mousemove', 'pointerdown', 'touchstart', 'keydown'].forEach(ev => {
        window.addEventListener(ev, resetFade, { passive: true });
      });

      // Mouseenter sensor reveals bar instantly
      document.querySelector('.arcade-shell-sensor')?.addEventListener('mouseenter', () => {
        if (bar) bar.classList.remove('shell-hidden');
      });

      resetFade();
    }

    setupFullscreen() {
      document.addEventListener('fullscreenchange', () => {
        const isFs = !!document.fullscreenElement;
        const btn = document.getElementById('shell-fs-btn');
        if (btn) {
          btn.style.color = isFs ? '#38BDF8' : '#F1F5F9';
        }
      });
    }

    toggleFullscreen() {
      Sound.playTap();
      if (!document.fullscreenElement) {
        const elem = document.documentElement;
        if (elem.requestFullscreen) elem.requestFullscreen().catch(() => {});
        else if (elem.webkitRequestFullscreen) elem.webkitRequestFullscreen();
      } else {
        if (document.exitFullscreen) document.exitFullscreen().catch(() => {});
      }
    }

    setupOrientationGuard() {
      if (this.config?.orientation === 'landscape') {
        const warning = document.createElement('div');
        warning.className = 'arcade-orientation-warning';
        warning.innerHTML = `
          <div class="orientation-icon">📱</div>
          <div class="orientation-title">建议横屏游玩</div>
          <div class="orientation-desc">为了获得最佳画质与视界，请旋转您的手机或平板到横屏。</div>
          <button class="orientation-dismiss">继续竖屏进入</button>
        `;
        document.body.appendChild(warning);

        warning.querySelector('.orientation-dismiss').onclick = () => {
          warning.classList.remove('active');
        };

        const checkOrientation = () => {
          const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
          const isPortrait = window.innerHeight > window.innerWidth;
          if (isMobile && isPortrait) {
            warning.classList.add('active');
          } else {
            warning.classList.remove('active');
          }
        };

        window.addEventListener('resize', checkOrientation);
        window.addEventListener('orientationchange', checkOrientation);
        setTimeout(checkOrientation, 500);
      }
    }

    setupGamepadListener() {
      window.addEventListener('gamepadconnected', (e) => {
        const name = e.gamepad.id || '控制器';
        this.showToast(`🎮 手柄已连接: ${name.slice(0, 24)}`, 3500);
      });
      window.addEventListener('gamepaddisconnected', () => {
        this.showToast('🎮 手柄已断开连接', 2500);
      });
    }

    setupKeyboardShortcuts() {
      window.addEventListener('keydown', (e) => {
        // Press F11 or 'F' key outside inputs for fullscreen
        if (e.key === 'f' || e.key === 'F') {
          if (!['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) {
            this.toggleFullscreen();
          }
        }
        // Press 'M' for mute toggle
        if (e.key === 'm' || e.key === 'M') {
          if (!['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) {
            Sound.toggle();
            const btn = document.getElementById('shell-sound-btn');
            if (btn) btn.innerHTML = Sound.enabled ? '🔊' : '🔇';
            this.showToast(Sound.enabled ? '声音已开启' : '已静音');
          }
        }
      });
    }

    // Legacy method stubs for compatibility with classic games
    showWin(opts = {}) {
      Sound.playWin();
      this.showToast(`🏆 恭喜通关！得分：${opts.score || 0}`, 4000);
    }
    showGameOver(opts = {}) {
      Sound.playHit();
      this.showToast(`💥 游戏结束！得分：${opts.score || 0}`, 4000);
    }
    togglePause() {
      this.isPaused = !this.isPaused;
      this.showToast(this.isPaused ? '⏸️ 游戏已暂停' : '▶️ 游戏继续');
    }
  }

  // Storage helper
  window.KidStorage = {
    getScore: (id) => parseInt(localStorage.getItem(`arcade_score_${id}`) || '0', 10),
    saveScore: (id, score) => {
      const cur = parseInt(localStorage.getItem(`arcade_score_${id}`) || '0', 10);
      if (score > cur) localStorage.setItem(`arcade_score_${id}`, score.toString());
    },
    getStars: (id) => parseInt(localStorage.getItem(`arcade_stars_${id}`) || '0', 10),
    saveStars: (id, stars) => {
      const cur = parseInt(localStorage.getItem(`arcade_stars_${id}`) || '0', 10);
      if (stars > cur) localStorage.setItem(`arcade_stars_${id}`, stars.toString());
    }
  };

  // Immediate safe fallback to prevent race condition before DOMContentLoaded
  const defaultShell = {
    isPaused: false,
    showWin(opts = {}) {
      Sound.playWin();
      if (window.ArcadeShell?.showToast) {
        window.ArcadeShell.showToast(`🏆 恭喜通关！得分：${opts.score || 0}`, 4000);
      }
    },
    showGameOver(opts = {}) {
      Sound.playHit();
      if (window.ArcadeShell?.showToast) {
        window.ArcadeShell.showToast(`💥 游戏结束！得分：${opts.score || 0}`, 4000);
      }
    },
    togglePause() {
      if (window.ArcadeShell?.togglePause) {
        window.ArcadeShell.togglePause();
      } else {
        this.isPaused = !this.isPaused;
      }
    }
  };

  window.KidShell = defaultShell;
  window.ArcadeShell = defaultShell;

  function initShell() {
    if (window._arcadeShellInitialized) return;
    window._arcadeShellInitialized = true;
    const shell = new GameShell();
    window.ArcadeShell = shell;
    window.KidShell = shell;
  }

  if (document.readyState === 'interactive' || document.readyState === 'complete') {
    initShell();
  } else {
    document.addEventListener('DOMContentLoaded', initShell);
  }
})();
