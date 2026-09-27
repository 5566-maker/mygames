(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`attached`,t=1e3,n=1001,r=1002,i=1003,a=1004,o=1005,s=1006,c=1007,l=1008,u=1009,d=1010,f=1011,p=1012,m=1013,h=1014,g=1015,_=1016,v=1017,y=1018,b=1020,x=35902,S=35899,C=1021,w=1022,T=1023,E=1026,D=1027,O=1028,ee=1029,k=1030,te=1031,ne=1033,re=33776,A=33777,ie=33778,j=33779,ae=35840,oe=35841,se=35842,ce=35843,le=36196,ue=37492,de=37496,M=37488,fe=37489,pe=37490,me=37491,he=37808,ge=37809,_e=37810,ve=37811,ye=37812,be=37813,xe=37814,Se=37815,Ce=37816,we=37817,Te=37818,Ee=37819,De=37820,Oe=37821,ke=36492,Ae=36494,je=36495,Me=36283,Ne=36284,Pe=36285,Fe=36286,N=2300,Ie=2301,Le=2302,Re=2303,P=2400,ze=2401,F=2402,Be=3200,Ve=`srgb`,He=`srgb-linear`,Ue=`linear`,We=`srgb`,Ge=7680,Ke=35044,qe=35048,Je=2e3;function Ye(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Xe(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Ze(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function Qe(){let e=Ze(`canvas`);return e.style.display=`block`,e}var $e={};function et(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function tt(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function I(...e){e=tt(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function L(...e){e=tt(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function nt(...e){let t=e.join(` `);t in $e||($e[t]=!0,I(...e))}function rt(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var it={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},at=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},ot=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),st=1234567,ct=Math.PI/180,lt=180/Math.PI;function ut(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(ot[e&255]+ot[e>>8&255]+ot[e>>16&255]+ot[e>>24&255]+`-`+ot[t&255]+ot[t>>8&255]+`-`+ot[t>>16&15|64]+ot[t>>24&255]+`-`+ot[n&63|128]+ot[n>>8&255]+`-`+ot[n>>16&255]+ot[n>>24&255]+ot[r&255]+ot[r>>8&255]+ot[r>>16&255]+ot[r>>24&255]).toLowerCase()}function R(e,t,n){return Math.max(t,Math.min(n,e))}function dt(e,t){return(e%t+t)%t}function ft(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function pt(e,t,n){return e===t?0:(n-e)/(t-e)}function mt(e,t,n){return(1-n)*e+n*t}function ht(e,t,n,r){return mt(e,t,1-Math.exp(-n*r))}function gt(e,t=1){return t-Math.abs(dt(e,t*2)-t)}function _t(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function vt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function yt(e,t){return e+Math.floor(Math.random()*(t-e+1))}function bt(e,t){return e+Math.random()*(t-e)}function xt(e){return e*(.5-Math.random())}function St(e){e!==void 0&&(st=e);let t=st+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ct(e){return e*ct}function wt(e){return e*lt}function Tt(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function Et(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function Dt(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function Ot(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:I(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function kt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function At(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var jt={DEG2RAD:ct,RAD2DEG:lt,generateUUID:ut,clamp:R,euclideanModulo:dt,mapLinear:ft,inverseLerp:pt,lerp:mt,damp:ht,pingpong:gt,smoothstep:_t,smootherstep:vt,randInt:yt,randFloat:bt,randFloatSpread:xt,seededRandom:St,degToRad:Ct,radToDeg:wt,isPowerOfTwo:Tt,ceilPowerOfTwo:Et,floorPowerOfTwo:Dt,setQuaternionFromProperEuler:Ot,normalize:At,denormalize:kt},z=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=R(this.x,e.x,t.x),this.y=R(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=R(this.x,e,t),this.y=R(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(R(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(R(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Mt=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:I(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(R(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},B=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Pt.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Pt.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=R(this.x,e.x,t.x),this.y=R(this.y,e.y,t.y),this.z=R(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=R(this.x,e,t),this.y=R(this.y,e,t),this.z=R(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(R(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Nt.copy(this).projectOnVector(e),this.sub(Nt)}reflect(e){return this.sub(Nt.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(R(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Nt=new B,Pt=new Mt,V=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return nt(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(Ft.makeScale(e,t)),this}rotate(e){return nt(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(Ft.makeRotation(-e)),this}translate(e,t){return nt(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(Ft.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ft=new V,It=new V().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Lt=new V().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Rt(){let e={enabled:!0,workingColorSpace:He,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n?e:(this.spaces[t].transfer===`srgb`&&(e.r=zt(e.r),e.g=zt(e.g),e.b=zt(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=Bt(e.r),e.g=Bt(e.g),e.b=Bt(e.b)),e)},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Ue:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return nt(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return nt(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[He]:{primaries:t,whitePoint:r,transfer:Ue,toXYZ:It,fromXYZ:Lt,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Ve},outputColorSpaceConfig:{drawingBufferColorSpace:Ve}},[Ve]:{primaries:t,whitePoint:r,transfer:We,toXYZ:It,fromXYZ:Lt,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Ve}}}),e}var H=Rt();function zt(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Bt(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Vt,Ht=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Vt===void 0&&(Vt=Ze(`canvas`)),Vt.width=e.width,Vt.height=e.height;let t=Vt.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Vt}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Ze(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=zt(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(zt(t[e]/255)*255):t[e]=zt(t[e]);return{data:t,width:e.width,height:e.height}}return I(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Ut=0,Wt=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Ut++}),this.uuid=ut(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Gt(r[t].image)):e.push(Gt(r[t]))}else e=Gt(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Gt(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Ht.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(I(`Texture: Unable to serialize Texture.`),{})}var Kt=0,qt=new B,Jt=class e extends at{constructor(t=e.DEFAULT_IMAGE,r=e.DEFAULT_MAPPING,i=n,a=n,o=s,c=l,d=T,f=u,p=e.DEFAULT_ANISOTROPY,m=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kt++}),this.uuid=ut(),this.name=``,this.source=new Wt(t),this.mipmaps=[],this.mapping=r,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=o,this.minFilter=c,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=f,this.offset=new z(0,0),this.repeat=new z(1,1),this.center=new z(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new V,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(qt).x}get height(){return this.source.getSize(qt).y}get depth(){return this.source.getSize(qt).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){I(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){I(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case t:e.x-=Math.floor(e.x);break;case n:e.x=e.x<0?0:1;break;case r:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case t:e.y-=Math.floor(e.y);break;case n:e.y=e.y<0?0:1;break;case r:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Jt.DEFAULT_IMAGE=null,Jt.DEFAULT_MAPPING=300,Jt.DEFAULT_ANISOTROPY=1;var Yt=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=R(this.x,e.x,t.x),this.y=R(this.y,e.y,t.y),this.z=R(this.z,e.z,t.z),this.w=R(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=R(this.x,e,t),this.y=R(this.y,e,t),this.z=R(this.z,e,t),this.w=R(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(R(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Xt=class extends at{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:s,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Yt(0,0,e,t),this.scissorTest=!1,this.viewport=new Yt(0,0,e,t),this.textures=[];let r=new Jt({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:s,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Wt(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},Zt=class extends Xt{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Qt=class extends Jt{constructor(e=null,t=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=i,this.minFilter=i,this.wrapR=n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},$t=class extends Jt{constructor(e=null,t=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=i,this.minFilter=i,this.wrapR=n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},U=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/en.setFromMatrixColumn(e,0).length(),i=1/en.setFromMatrixColumn(e,1).length(),a=1/en.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(nn,e,rn)}lookAt(e,t,n){let r=this.elements;return sn.subVectors(e,t),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),an.crossVectors(n,sn),an.lengthSq()===0&&(Math.abs(n.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),an.crossVectors(n,sn)),an.normalize(),on.crossVectors(sn,an),r[0]=an.x,r[4]=on.x,r[8]=sn.x,r[1]=an.y,r[5]=on.y,r[9]=sn.y,r[2]=an.z,r[6]=on.z,r[10]=sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],ee=r[2],k=r[6],te=r[10],ne=r[14],re=r[3],A=r[7],ie=r[11],j=r[15];return i[0]=a*x+o*T+s*ee+c*re,i[4]=a*S+o*E+s*k+c*A,i[8]=a*C+o*D+s*te+c*ie,i[12]=a*w+o*O+s*ne+c*j,i[1]=l*x+u*T+d*ee+f*re,i[5]=l*S+u*E+d*k+f*A,i[9]=l*C+u*D+d*te+f*ie,i[13]=l*w+u*O+d*ne+f*j,i[2]=p*x+m*T+h*ee+g*re,i[6]=p*S+m*E+h*k+g*A,i[10]=p*C+m*D+h*te+g*ie,i[14]=p*w+m*O+h*ne+g*j,i[3]=_*x+v*T+y*ee+b*re,i[7]=_*S+v*E+y*k+b*A,i[11]=_*C+v*D+y*te+b*ie,i[15]=_*w+v*O+y*ne+b*j,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,ee=_*O-v*D+y*E+b*T-x*w+S*C;if(ee===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/ee;return e[0]=(o*O-s*D+c*E)*k,e[1]=(r*D-n*O-i*E)*k,e[2]=(m*S-h*x+g*b)*k,e[3]=(d*x-u*S-f*b)*k,e[4]=(s*T-a*O-c*w)*k,e[5]=(t*O-r*T+i*w)*k,e[6]=(h*y-p*S-g*v)*k,e[7]=(l*S-d*y+f*v)*k,e[8]=(a*D-o*T+c*C)*k,e[9]=(n*T-t*D-i*C)*k,e[10]=(p*x-m*y+g*_)*k,e[11]=(u*y-l*x-f*_)*k,e[12]=(o*w-a*E-s*C)*k,e[13]=(t*E-n*w+r*C)*k,e[14]=(m*v-p*b-h*_)*k,e[15]=(l*b-u*v+d*_)*k,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=en.set(r[0],r[1],r[2]).length(),o=en.set(r[4],r[5],r[6]).length(),s=en.set(r[8],r[9],r[10]).length();i<0&&(a=-a),tn.copy(this);let c=1/a,l=1/o,u=1/s;return tn.elements[0]*=c,tn.elements[1]*=c,tn.elements[2]*=c,tn.elements[4]*=l,tn.elements[5]*=l,tn.elements[6]*=l,tn.elements[8]*=u,tn.elements[9]*=u,tn.elements[10]*=u,t.setFromRotationMatrix(tn),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=Je,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=Je,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},en=new B,tn=new U,nn=new B(0,0,0),rn=new B(1,1,1),an=new B,on=new B,sn=new B,cn=new U,ln=new Mt,un=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(R(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-R(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(R(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-R(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(R(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-R(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:I(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return cn.makeRotationFromQuaternion(e),this.setFromRotationMatrix(cn,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ln.setFromEuler(this),this.setFromQuaternion(ln,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};un.DEFAULT_ORDER=`XYZ`;var dn=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&(1<<e|0))}},fn=0,pn=new B,mn=new Mt,hn=new U,gn=new B,_n=new B,vn=new B,yn=new Mt,bn=new B(1,0,0),xn=new B(0,1,0),Sn=new B(0,0,1),Cn={type:`added`},wn={type:`removed`},Tn={type:`childadded`,child:null},En={type:`childremoved`,child:null},Dn=class e extends at{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fn++}),this.uuid=ut(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new B,n=new un,r=new Mt,i=new B(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new U},normalMatrix:{value:new V}}),this.matrix=new U,this.matrixWorld=new U,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return mn.setFromAxisAngle(e,t),this.quaternion.multiply(mn),this}rotateOnWorldAxis(e,t){return mn.setFromAxisAngle(e,t),this.quaternion.premultiply(mn),this}rotateX(e){return this.rotateOnAxis(bn,e)}rotateY(e){return this.rotateOnAxis(xn,e)}rotateZ(e){return this.rotateOnAxis(Sn,e)}translateOnAxis(e,t){return pn.copy(e).applyQuaternion(this.quaternion),this.position.add(pn.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(bn,e)}translateY(e){return this.translateOnAxis(xn,e)}translateZ(e){return this.translateOnAxis(Sn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?gn.copy(e):gn.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),_n.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hn.lookAt(_n,gn,this.up):hn.lookAt(gn,_n,this.up),this.quaternion.setFromRotationMatrix(hn),r&&(hn.extractRotation(r.matrixWorld),mn.setFromRotationMatrix(hn),this.quaternion.premultiply(mn.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(L(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Cn),Tn.child=e,this.dispatchEvent(Tn),Tn.child=null):L(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(wn),En.child=e,this.dispatchEvent(En),En.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),hn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hn.multiply(e.parent.matrixWorld)),e.applyMatrix4(hn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Cn),Tn.child=e,this.dispatchEvent(Tn),Tn.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_n,e,vn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_n,yn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};Dn.DEFAULT_UP=new B(0,1,0),Dn.DEFAULT_MATRIX_AUTO_UPDATE=!0,Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var On=class extends Dn{constructor(){super(),this.isGroup=!0,this.type=`Group`}},kn={type:`move`},An=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new On,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new On,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new On,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(kn)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new On;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},jn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mn={h:0,s:0,l:0},Nn={h:0,s:0,l:0};function Pn(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var W=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ve){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,H.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=H.workingColorSpace){return this.r=e,this.g=t,this.b=n,H.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=H.workingColorSpace){if(e=dt(e,1),t=R(t,0,1),n=R(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=Pn(i,r,e+1/3),this.g=Pn(i,r,e),this.b=Pn(i,r,e-1/3)}return H.colorSpaceToWorking(this,r),this}setStyle(e,t=Ve){function n(t){t!==void 0&&parseFloat(t)<1&&I(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:I(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);I(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ve){let n=jn[e.toLowerCase()];return n===void 0?I(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zt(e.r),this.g=zt(e.g),this.b=zt(e.b),this}copyLinearToSRGB(e){return this.r=Bt(e.r),this.g=Bt(e.g),this.b=Bt(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ve){return H.workingToColorSpace(Fn.copy(this),e),Math.round(R(Fn.r*255,0,255))*65536+Math.round(R(Fn.g*255,0,255))*256+Math.round(R(Fn.b*255,0,255))}getHexString(e=Ve){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=H.workingColorSpace){H.workingToColorSpace(Fn.copy(this),t);let n=Fn.r,r=Fn.g,i=Fn.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=H.workingColorSpace){return H.workingToColorSpace(Fn.copy(this),t),e.r=Fn.r,e.g=Fn.g,e.b=Fn.b,e}getStyle(e=Ve){H.workingToColorSpace(Fn.copy(this),e);let t=Fn.r,n=Fn.g,r=Fn.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(Mn),this.setHSL(Mn.h+e,Mn.s+t,Mn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Mn),e.getHSL(Nn);let n=mt(Mn.h,Nn.h,t),r=mt(Mn.s,Nn.s,t),i=mt(Mn.l,Nn.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Fn=new W;W.NAMES=jn;var In=class e{constructor(e,t=25e-5){this.isFogExp2=!0,this.name=``,this.color=new W(e),this.density=t}clone(){return new e(this.color,this.density)}toJSON(){return{type:`FogExp2`,name:this.name,color:this.color.getHex(),density:this.density}}},Ln=class extends Dn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new un,this.environmentIntensity=1,this.environmentRotation=new un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Rn=new B,zn=new B,Bn=new B,Vn=new B,Hn=new B,Un=new B,Wn=new B,Gn=new B,Kn=new B,qn=new B,Jn=new Yt,Yn=new Yt,Xn=new Yt,Zn=class e{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Rn.subVectors(e,t),r.cross(Rn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Rn.subVectors(r,t),zn.subVectors(n,t),Bn.subVectors(e,t);let a=Rn.dot(Rn),o=Rn.dot(zn),s=Rn.dot(Bn),c=zn.dot(zn),l=zn.dot(Bn),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Vn)!==null&&Vn.x>=0&&Vn.y>=0&&Vn.x+Vn.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Vn)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Vn.x),s.addScaledVector(a,Vn.y),s.addScaledVector(o,Vn.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return Jn.setScalar(0),Yn.setScalar(0),Xn.setScalar(0),Jn.fromBufferAttribute(e,t),Yn.fromBufferAttribute(e,n),Xn.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Jn,i.x),a.addScaledVector(Yn,i.y),a.addScaledVector(Xn,i.z),a}static isFrontFacing(e,t,n,r){return Rn.subVectors(n,t),zn.subVectors(e,t),Rn.cross(zn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Rn.subVectors(this.c,this.b),zn.subVectors(this.a,this.b),Rn.cross(zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Hn.subVectors(r,n),Un.subVectors(i,n),Gn.subVectors(e,n);let s=Hn.dot(Gn),c=Un.dot(Gn);if(s<=0&&c<=0)return t.copy(n);Kn.subVectors(e,r);let l=Hn.dot(Kn),u=Un.dot(Kn);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(Hn,a);qn.subVectors(e,i);let f=Hn.dot(qn),p=Un.dot(qn);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Un,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Wn.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Wn,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Hn,a).addScaledVector(Un,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Qn=class{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(er.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(er.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=er.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,er):er.fromBufferAttribute(r,t),er.applyMatrix4(e.matrixWorld),this.expandByPoint(er);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),tr.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),tr.copy(e.boundingBox)),tr.applyMatrix4(e.matrixWorld),this.union(tr)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,er),er.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(cr),lr.subVectors(this.max,cr),nr.subVectors(e.a,cr),rr.subVectors(e.b,cr),ir.subVectors(e.c,cr),ar.subVectors(rr,nr),or.subVectors(ir,rr),sr.subVectors(nr,ir);let t=[0,-ar.z,ar.y,0,-or.z,or.y,0,-sr.z,sr.y,ar.z,0,-ar.x,or.z,0,-or.x,sr.z,0,-sr.x,-ar.y,ar.x,0,-or.y,or.x,0,-sr.y,sr.x,0];return!fr(t,nr,rr,ir,lr)||(t=[1,0,0,0,1,0,0,0,1],!fr(t,nr,rr,ir,lr))?!1:(ur.crossVectors(ar,or),t=[ur.x,ur.y,ur.z],fr(t,nr,rr,ir,lr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,er).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(er).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($n),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},$n=[new B,new B,new B,new B,new B,new B,new B,new B],er=new B,tr=new Qn,nr=new B,rr=new B,ir=new B,ar=new B,or=new B,sr=new B,cr=new B,lr=new B,ur=new B,dr=new B;function fr(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){dr.fromArray(e,a);let o=i.x*Math.abs(dr.x)+i.y*Math.abs(dr.y)+i.z*Math.abs(dr.z),s=t.dot(dr),c=n.dot(dr),l=r.dot(dr);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var pr=new B,mr=new z,hr=0,gr=class extends at{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:hr++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=Ke,this.updateRanges=[],this.gpuType=g,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)mr.fromBufferAttribute(this,t),mr.applyMatrix3(e),this.setXY(t,mr.x,mr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)pr.fromBufferAttribute(this,t),pr.applyMatrix3(e),this.setXYZ(t,pr.x,pr.y,pr.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)pr.fromBufferAttribute(this,t),pr.applyMatrix4(e),this.setXYZ(t,pr.x,pr.y,pr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)pr.fromBufferAttribute(this,t),pr.applyNormalMatrix(e),this.setXYZ(t,pr.x,pr.y,pr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)pr.fromBufferAttribute(this,t),pr.transformDirection(e),this.setXYZ(t,pr.x,pr.y,pr.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=kt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=At(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=kt(t,this.array)),t}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=kt(t,this.array)),t}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=kt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=kt(t,this.array)),t}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array),r=At(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array),r=At(r,this.array),i=At(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}},_r=class extends gr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},vr=class extends gr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},G=class extends gr{constructor(e,t,n){super(new Float32Array(e),t,n)}},yr=new Qn,br=new B,xr=new B,Sr=class{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?yr.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;br.subVectors(e,this.center);let t=br.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(br,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(br.copy(e.center).add(xr)),this.expandByPoint(br.copy(e.center).sub(xr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Cr=0,wr=new U,Tr=new Dn,Er=new B,Dr=new Qn,Or=new Qn,kr=new B,Ar=class e extends at{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cr++}),this.uuid=ut(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(Ye(e)?vr:_r)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new V().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return wr.makeRotationFromQuaternion(e),this.applyMatrix4(wr),this}rotateX(e){return wr.makeRotationX(e),this.applyMatrix4(wr),this}rotateY(e){return wr.makeRotationY(e),this.applyMatrix4(wr),this}rotateZ(e){return wr.makeRotationZ(e),this.applyMatrix4(wr),this}translate(e,t,n){return wr.makeTranslation(e,t,n),this.applyMatrix4(wr),this}scale(e,t,n){return wr.makeScale(e,t,n),this.applyMatrix4(wr),this}lookAt(e){return Tr.lookAt(e),Tr.updateMatrix(),this.applyMatrix4(Tr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Er).negate(),this.translate(Er.x,Er.y,Er.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new G(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&I(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){L(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Dr.setFromBufferAttribute(n),this.morphTargetsRelative?(kr.addVectors(this.boundingBox.min,Dr.min),this.boundingBox.expandByPoint(kr),kr.addVectors(this.boundingBox.max,Dr.max),this.boundingBox.expandByPoint(kr)):(this.boundingBox.expandByPoint(Dr.min),this.boundingBox.expandByPoint(Dr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&L(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){L(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new B,1/0);return}if(e){let n=this.boundingSphere.center;if(Dr.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Or.setFromBufferAttribute(n),this.morphTargetsRelative?(kr.addVectors(Dr.min,Or.min),Dr.expandByPoint(kr),kr.addVectors(Dr.max,Or.max),Dr.expandByPoint(kr)):(Dr.expandByPoint(Or.min),Dr.expandByPoint(Or.max))}Dr.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)kr.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(kr));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)kr.fromBufferAttribute(a,t),o&&(Er.fromBufferAttribute(e,t),kr.add(Er)),r=Math.max(r,n.distanceToSquared(kr))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&L(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){L(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new gr(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new B,s[e]=new B;let c=new B,l=new B,u=new B,d=new z,f=new z,p=new z,m=new B,h=new B;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new B,y=new B,b=new B,x=new B;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new gr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new B,i=new B,a=new B,o=new B,s=new B,c=new B,l=new B,u=new B;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)kr.fromBufferAttribute(e,t),kr.normalize(),e.setXYZ(t,kr.x,kr.y,kr.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new gr(a,r,i)}if(this.index===null)return I(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},jr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=Ke,this.updateRanges=[],this.version=0,this.uuid=ut()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ut()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ut()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},Mr=new B,Nr=class e{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Mr.fromBufferAttribute(this,t),Mr.applyMatrix4(e),this.setXYZ(t,Mr.x,Mr.y,Mr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Mr.fromBufferAttribute(this,t),Mr.applyNormalMatrix(e),this.setXYZ(t,Mr.x,Mr.y,Mr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Mr.fromBufferAttribute(this,t),Mr.transformDirection(e),this.setXYZ(t,Mr.x,Mr.y,Mr.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=kt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=At(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=kt(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=kt(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=kt(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=kt(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=At(t,this.array),n=At(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=At(t,this.array),n=At(n,this.array),r=At(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=At(t,this.array),n=At(n,this.array),r=At(r,this.array),i=At(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(t){if(t===void 0){et(`InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new gr(new this.array.constructor(e),this.itemSize,this.normalized)}return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){et(`InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Pr=new B,Fr=new B,Ir=new V,Lr=class{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Pr.subVectors(n,t).cross(Fr.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Pr),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Ir.getNormalMatrix(e),r=this.coplanarPoint(Pr).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Rr=0,zr=class extends at{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Rr++}),this.uuid=ut(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new W(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ge,this.stencilZFail=Ge,this.stencilZPass=Ge,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){I(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){I(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new W().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new Lr().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new z().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new z().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Br=class extends zr{constructor(e){super(),this.isSpriteMaterial=!0,this.type=`SpriteMaterial`,this.color=new W(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Vr,Hr=new B,Ur=new B,Wr=new B,Gr=new z,Kr=new z,qr=new U,Jr=new B,Yr=new B,Xr=new B,Zr=new z,Qr=new z,$r=new z,ei=class extends Dn{constructor(e=new Br){if(super(),this.isSprite=!0,this.type=`Sprite`,Vr===void 0){Vr=new Ar;let e=new jr(new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),5);Vr.setIndex([0,1,2,0,2,3]),Vr.setAttribute(`position`,new Nr(e,3,0,!1)),Vr.setAttribute(`uv`,new Nr(e,2,3,!1))}this.geometry=Vr,this.material=e,this.center=new z(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&L(`Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.`),Ur.setFromMatrixScale(this.matrixWorld),qr.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Wr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ur.multiplyScalar(-Wr.z);let n=this.material.rotation,r,i;n!==0&&(i=Math.cos(n),r=Math.sin(n));let a=this.center;ti(Jr.set(-.5,-.5,0),Wr,a,Ur,r,i),ti(Yr.set(.5,-.5,0),Wr,a,Ur,r,i),ti(Xr.set(.5,.5,0),Wr,a,Ur,r,i),Zr.set(0,0),Qr.set(1,0),$r.set(1,1);let o=e.ray.intersectTriangle(Jr,Yr,Xr,!1,Hr);if(o===null&&(ti(Yr.set(-.5,.5,0),Wr,a,Ur,r,i),Qr.set(0,1),o=e.ray.intersectTriangle(Jr,Xr,Yr,!1,Hr),o===null))return;let s=e.ray.origin.distanceTo(Hr);s<e.near||s>e.far||t.push({distance:s,point:Hr.clone(),uv:Zn.getInterpolation(Hr,Jr,Yr,Xr,Zr,Qr,$r,new z),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function ti(e,t,n,r,i,a){Gr.subVectors(e,n).addScalar(.5).multiply(r),i===void 0?Kr.copy(Gr):(Kr.x=a*Gr.x-i*Gr.y,Kr.y=i*Gr.x+a*Gr.y),e.copy(t),e.x+=Kr.x,e.y+=Kr.y,e.applyMatrix4(qr)}var ni=new B,ri=new B,ii=new B,ai=new B,oi=class{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ni)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ni.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ni.copy(this.origin).addScaledVector(this.direction,t),ni.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ri.copy(e).add(t).multiplyScalar(.5),ii.copy(t).sub(e).normalize(),ai.copy(this.origin).sub(ri);let i=e.distanceTo(t)*.5,a=-this.direction.dot(ii),o=ai.dot(this.direction),s=-ai.dot(ii),c=ai.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(ri).addScaledVector(ii,d),f}intersectSphere(e,t){if(e.radius<0)return null;ni.subVectors(e.center,this.origin);let n=ni.dot(this.direction),r=ni.dot(ni)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,ni)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,ee,k,te,ne,re;if(y>=b&&y>=x?(w=s,D=u,k=p,re=g,s>=0?(S=c,C=l,T=d,E=f,O=m,ee=h,te=_,ne=v):(S=l,C=c,T=f,E=d,O=h,ee=m,te=v,ne=_)):b>=x?(w=c,D=d,k=m,re=_,c>=0?(S=l,C=s,T=f,E=u,O=h,ee=p,te=v,ne=g):(S=s,C=l,T=u,E=f,O=p,ee=h,te=g,ne=v)):(w=l,D=f,k=h,re=v,l>=0?(S=s,C=c,T=u,E=d,O=p,ee=m,te=g,ne=_):(S=c,C=s,T=d,E=u,O=m,ee=p,te=_,ne=g)),w===0)return null;let A=S/w,ie=C/w,j=1/w,ae=T-A*D,oe=E-ie*D,se=O-A*k,ce=ee-ie*k,le=te-A*re,ue=ne-ie*re,de=le*ce-ue*se,M=ae*ue-oe*le,fe=se*oe-ce*ae;if(r){if(de<0||M<0||fe<0)return null}else if((de<0||M<0||fe<0)&&(de>0||M>0||fe>0))return null;let pe=de+M+fe;if(pe===0)return null;let me=j*(de*D+M*k+fe*re);return(pe>0?me<0:me>0)?null:this.at(me/pe,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},si=class extends zr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new W(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},ci=new U,li=new oi,ui=new Sr,di=new B,fi=new B,pi=new B,mi=new B,hi=new B,gi=new B,_i=new B,vi=new B,K=class extends Dn{constructor(e=new Ar,t=new si){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){gi.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(hi.fromBufferAttribute(s,e),a?gi.addScaledVector(hi,r):gi.addScaledVector(hi.sub(t),r))}t.add(gi)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ui.copy(n.boundingSphere),ui.applyMatrix4(i),li.copy(e.ray).recast(e.near),!(ui.containsPoint(li.origin)===!1&&(li.intersectSphere(ui,di)===null||li.origin.distanceToSquared(di)>(e.far-e.near)**2))&&(ci.copy(i).invert(),li.copy(e.ray).applyMatrix4(ci),(n.boundingBox===null||li.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,li)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=bi(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=bi(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=bi(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=bi(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function yi(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;vi.copy(s),vi.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(vi);return l<n.near||l>n.far?null:{distance:l,point:vi.clone(),object:e}}function bi(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,fi),e.getVertexPosition(c,pi),e.getVertexPosition(l,mi);let u=yi(e,t,n,r,fi,pi,mi,_i);if(u){let e=new B;Zn.getBarycoord(_i,fi,pi,mi,e),i&&(u.uv=Zn.getInterpolatedAttribute(i,s,c,l,e,new z)),a&&(u.uv1=Zn.getInterpolatedAttribute(a,s,c,l,e,new z)),o&&(u.normal=Zn.getInterpolatedAttribute(o,s,c,l,e,new B),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new B,materialIndex:0};Zn.getNormal(fi,pi,mi,t.normal),u.face=t,u.barycoord=e}return u}var xi=new Yt,Si=new Yt,Ci=new Yt,wi=new Yt,Ti=new U,Ei=new B,Di=new Sr,Oi=new U,ki=new oi,Ai=class extends K{constructor(t,n){super(t,n),this.isSkinnedMesh=!0,this.type=`SkinnedMesh`,this.bindMode=e,this.bindMatrix=new U,this.bindMatrixInverse=new U,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Qn),this.boundingBox.makeEmpty();let t=e.getAttribute(`position`);for(let e=0;e<t.count;e++)this.getVertexPosition(e,Ei),this.boundingBox.expandByPoint(Ei)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Sr),this.boundingSphere.makeEmpty();let t=e.getAttribute(`position`);for(let e=0;e<t.count;e++)this.getVertexPosition(e,Ei),this.boundingSphere.expandByPoint(Ei)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Di.copy(this.boundingSphere),Di.applyMatrix4(r),e.ray.intersectsSphere(Di)!==!1&&(Oi.copy(r).invert(),ki.copy(e.ray).applyMatrix4(Oi),(this.boundingBox===null||ki.intersectsBox(this.boundingBox)!==!1)&&this._computeIntersections(e,t,ki)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Yt,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r===1/0?e.set(1,0,0,0):e.multiplyScalar(r),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===`attached`?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===`detached`?this.bindMatrixInverse.copy(this.bindMatrix).invert():I(`SkinnedMesh: Unrecognized bindMode: `+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,r=this.geometry;Si.fromBufferAttribute(r.attributes.skinIndex,e),Ci.fromBufferAttribute(r.attributes.skinWeight,e),t.isVector4?(xi.copy(t),t.set(0,0,0,0)):(xi.set(...t,1),t.set(0,0,0)),xi.applyMatrix4(this.bindMatrix);for(let e=0;e<4;e++){let r=Ci.getComponent(e);if(r!==0){let i=Si.getComponent(e);Ti.multiplyMatrices(n.bones[i].matrixWorld,n.boneInverses[i]),t.addScaledVector(wi.copy(xi).applyMatrix4(Ti),r)}}return t.isVector4&&(t.w=xi.w),t.applyMatrix4(this.bindMatrixInverse)}},ji=class extends Dn{constructor(){super(),this.isBone=!0,this.type=`Bone`}},Mi=class extends Jt{constructor(e=null,t=1,n=1,r,a,o,s,c,l=i,u=i,d,f){super(null,o,s,c,l,u,r,a,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Ni=new U,Pi=new U,Fi=class e{constructor(e=[],t=[]){this.uuid=ut(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){I(`Skeleton: Number of inverse bone matrices does not match amount of bones.`),this.boneInverses=[];for(let e=0,t=this.bones.length;e<t;e++)this.boneInverses.push(new U)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let t=new U;this.bones[e]&&t.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(t)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let t=this.bones[e];t&&t.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let t=this.bones[e];t&&(t.parent&&t.parent.isBone?(t.matrix.copy(t.parent.matrixWorld).invert(),t.matrix.multiply(t.matrixWorld)):t.matrix.copy(t.matrixWorld),t.matrix.decompose(t.position,t.quaternion,t.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let r=0,i=e.length;r<i;r++){let i=e[r]?e[r].matrixWorld:Pi;Ni.multiplyMatrices(i,t[r]),Ni.toArray(n,r*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new e(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Mi(t,e,e,T,g);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let n=this.bones[t];if(n.name===e)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){let r=e.bones[n],i=t[r];i===void 0&&(I(`Skeleton: No bone found with UUID:`,r),i=new ji),this.bones.push(i),this.boneInverses.push(new U().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:`Skeleton`,generator:`Skeleton.toJSON`},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let r=0,i=t.length;r<i;r++){let i=t[r];e.bones.push(i.uuid);let a=n[r];e.boneInverses.push(a.toArray())}return e}},Ii=class extends gr{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Li=new U,Ri=new U,zi=[],Bi=new Qn,Vi=new U,Hi=new K,Ui=new Sr,Wi=class extends K{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ii(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,Vi)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Qn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Li),Bi.copy(e.boundingBox).applyMatrix4(Li),this.boundingBox.union(Bi)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Sr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Li),Ui.copy(e.boundingSphere).applyMatrix4(Li),this.boundingSphere.union(Ui)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(Hi.geometry=this.geometry,Hi.material=this.material,Hi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ui.copy(this.boundingSphere),Ui.applyMatrix4(n),e.ray.intersectsSphere(Ui)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,Li),Ri.multiplyMatrices(n,Li),Hi.matrixWorld=Ri,Hi.raycast(e,zi);for(let e=0,n=zi.length;e<n;e++){let n=zi[e];n.instanceId=i,n.object=this,t.push(n)}zi.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Ii(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Mi(new Float32Array(r*this.count),r,this.count,O,g));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Gi=new Sr,Ki=new z(.5,.5),qi=new B,Ji=class{constructor(e=new Lr,t=new Lr,n=new Lr,r=new Lr,i=new Lr,a=new Lr){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Je,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Gi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gi)}intersectsSprite(e){return Gi.center.set(0,0,0),Gi.radius=.7071067811865476+Ki.distanceTo(e.center),Gi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gi)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(qi.x=r.normal.x>0?e.max.x:e.min.x,qi.y=r.normal.y>0?e.max.y:e.min.y,qi.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(qi)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Yi=class extends zr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new W(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Xi=new B,Zi=new B,Qi=new U,$i=new oi,ea=new Sr,ta=new B,na=new B,ra=class extends Dn{constructor(e=new Ar,t=new Yi){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)Xi.fromBufferAttribute(t,e-1),Zi.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=Xi.distanceTo(Zi);e.setAttribute(`lineDistance`,new G(n,1))}else I(`Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ea.copy(n.boundingSphere),ea.applyMatrix4(r),ea.radius+=i,e.ray.intersectsSphere(ea)===!1)return;Qi.copy(r).invert(),$i.copy(e.ray).applyMatrix4(Qi);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=ia(this,e,$i,s,n,r,i);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=ia(this,e,$i,s,i,a,r-1);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=ia(this,e,$i,s,i,i+1,i);n&&t.push(n)}if(this.isLineLoop){let i=ia(this,e,$i,s,r-1,n,r-1);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function ia(e,t,n,r,i,a,o){let s=e.geometry.attributes.position;if(Xi.fromBufferAttribute(s,i),Zi.fromBufferAttribute(s,a),n.distanceSqToSegment(Xi,Zi,ta,na)>r)return;ta.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(ta);if(!(c<t.near||c>t.far))return{distance:c,point:na.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var aa=new B,oa=new B,sa=class extends ra{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let e=0,r=t.count;e<r;e+=2)aa.fromBufferAttribute(t,e),oa.fromBufferAttribute(t,e+1),n[e]=e===0?0:n[e-1],n[e+1]=n[e]+aa.distanceTo(oa);e.setAttribute(`lineDistance`,new G(n,1))}else I(`LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}},ca=class extends zr{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new W(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},la=new U,ua=new oi,da=new Sr,fa=new B,pa=class extends Dn{constructor(e=new Ar,t=new ca){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),da.copy(n.boundingSphere),da.applyMatrix4(r),da.radius+=i,e.ray.intersectsSphere(da)===!1)return;la.copy(r).invert(),ua.copy(e.ray).applyMatrix4(la);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);fa.fromBufferAttribute(l,n),ma(fa,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)fa.fromBufferAttribute(l,a),ma(fa,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function ma(e,t,n,r,i,a,o){let s=ua.distanceSqToPoint(e);if(s<n){let n=new B;ua.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var ha=class extends Jt{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ga=class extends Jt{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},_a=class extends Jt{constructor(e,t,n=h,r,a,o,s=i,c=i,l,u=E,d=1){if(u!==1026&&u!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:d},r,a,o,s,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Wt(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},va=class extends _a{constructor(e,t=h,n=301,r,a,o=i,s=i,c,l=E){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,r,a,o,s,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ya=class extends Jt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},q=class e extends Ar{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new G(c,3)),this.setAttribute(`normal`,new G(l,3)),this.setAttribute(`uv`,new G(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new B;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},ba=class e extends Ar{constructor(e=1,t=1,n=4,r=8,i=1){super(),this.type=`CapsuleGeometry`,this.parameters={radius:e,height:t,capSegments:n,radialSegments:r,heightSegments:i},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),r=Math.max(3,Math.floor(r)),i=Math.max(1,Math.floor(i));let a=[],o=[],s=[],c=[],l=t/2,u=Math.PI/2*e,d=t,f=2*u+d,p=n*2+i,m=r+1,h=new B,g=new B;for(let _=0;_<=p;_++){let v=0,y=0,b=0,x=0;if(_<=n){let t=_/n,r=t*Math.PI/2;y=-l-e*Math.cos(r),b=e*Math.sin(r),x=-e*Math.cos(r),v=t*u}else if(_<=n+i){let r=(_-n)/i;y=-l+r*t,b=e,x=0,v=u+r*d}else{let t=(_-n-i)/n,r=t*Math.PI/2;y=l+e*Math.sin(r),b=e*Math.cos(r),x=e*Math.sin(r),v=u+d+t*u}let S=Math.max(0,Math.min(1,v/f)),C=0;_===0?C=.5/r:_===p&&(C=-.5/r);for(let e=0;e<=r;e++){let t=e/r,n=t*Math.PI*2,i=Math.sin(n),a=Math.cos(n);g.x=-b*a,g.y=y,g.z=b*i,o.push(g.x,g.y,g.z),h.set(-b*a,x,b*i),h.normalize(),s.push(h.x,h.y,h.z),c.push(t+C,S)}if(_>0){let e=(_-1)*m;for(let t=0;t<r;t++){let n=e+t,r=e+t+1,i=_*m+t,o=_*m+t+1;a.push(n,r,i),a.push(r,o,i)}}}this.setIndex(a),this.setAttribute(`position`,new G(o,3)),this.setAttribute(`normal`,new G(s,3)),this.setAttribute(`uv`,new G(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},xa=class e extends Ar{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new B,l=new z;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new G(a,3)),this.setAttribute(`normal`,new G(o,3)),this.setAttribute(`uv`,new G(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Sa=class e extends Ar{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new G(u,3)),this.setAttribute(`normal`,new G(d,3)),this.setAttribute(`uv`,new G(f,2));function _(){let a=new B,_=new B,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new z,m=new B,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ca=class e extends Sa{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},wa=class e extends Ar{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new G(i,3)),this.setAttribute(`normal`,new G(i.slice(),3)),this.setAttribute(`uv`,new G(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new B,r=new B,i=new B;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new B;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new B;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new B,t=new B,n=new B,r=new B,o=new z,s=new z,c=new z;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}},Ta=class e extends wa{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=1/n,i=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-n,0,-r,n,0,r,-n,0,r,n,-r,-n,0,-r,n,0,r,-n,0,r,n,0,-n,0,-r,n,0,-r,-n,0,r,n,0,r];super(i,[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type=`DodecahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},Ea=class e extends wa{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1];super(r,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type=`IcosahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},Da=class e extends Ar{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new G(p,3)),this.setAttribute(`normal`,new G(m,3)),this.setAttribute(`uv`,new G(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},Oa=class e extends Ar{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new B,d=new B,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new G(p,3)),this.setAttribute(`normal`,new G(m,3)),this.setAttribute(`uv`,new G(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},ka=class e extends Ar{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2,a=0,o=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let s=[],c=[],l=[],u=[],d=new B,f=new B,p=new B;for(let s=0;s<=n;s++){let m=a+s/n*o;for(let a=0;a<=r;a++){let o=a/r*i;f.x=(e+t*Math.cos(m))*Math.cos(o),f.y=(e+t*Math.cos(m))*Math.sin(o),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(o),d.y=e*Math.sin(o),p.subVectors(f,d).normalize(),l.push(p.x,p.y,p.z),u.push(a/r),u.push(s/n)}}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,a=(r+1)*(e-1)+t,o=(r+1)*e+t;s.push(n,i,o),s.push(i,a,o)}this.setIndex(s),this.setAttribute(`position`,new G(c,3)),this.setAttribute(`normal`,new G(l,3)),this.setAttribute(`uv`,new G(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function Aa(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(Ma(i))i.isRenderTargetTexture?(I(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(Ma(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function ja(e){let t={};for(let n=0;n<e.length;n++){let r=Aa(e[n]);for(let e in r)t[e]=r[e]}return t}function Ma(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Na(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Pa(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:H.workingColorSpace}var Fa={clone:Aa,merge:ja},Ia=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,La=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ra=class extends zr{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ia,this.fragmentShader=La,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Aa(e.uniforms),this.uniformsGroups=Na(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new W().setHex(r.value);break;case`v2`:this.uniforms[n].value=new z().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new B().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new Yt().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new V().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new U().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},za=class extends Ra{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},Ba=class extends zr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new W(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new W(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Va=class extends zr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Be,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ha=class extends zr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ua(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function Wa(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var Ga=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},Ka=class extends Ga{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:P,endingEnd:P}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case ze:i=e,o=2*t-n;break;case F:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case ze:a=e,s=2*n-t;break;case F:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},qa=class extends Ga{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Ja=class extends Ga{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Ya=class extends Ga{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=Qa(n,t,g,y,r);i[p]=Xa(x,o,_,b,m)}return i}};function Xa(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function Za(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function Qa(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=Xa(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=Za(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var $a=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Ua(t,this.TimeBufferType),this.values=Ua(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ua(e.times,Array),values:Ua(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),Wa(e.settings)&&(n.settings={inTangents:Ua(e.settings.inTangents,Array),outTangents:Ua(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ja(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new qa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ka(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ya(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case N:t=this.InterpolantFactoryMethodDiscrete;break;case Ie:t=this.InterpolantFactoryMethodLinear;break;case Le:t=this.InterpolantFactoryMethodSmooth;break;case Re:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return I(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return N;case this.InterpolantFactoryMethodLinear:return Ie;case this.InterpolantFactoryMethodSmooth:return Le;case this.InterpolantFactoryMethodBezier:return Re}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;Wa(this.settings)&&(eo(this.settings.inTangents,e),eo(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(L(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(L(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){L(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){L(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&Xe(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){L(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Le,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,Wa(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function eo(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}$a.prototype.ValueTypeName=``,$a.prototype.TimeBufferType=Float32Array,$a.prototype.ValueBufferType=Float32Array,$a.prototype.DefaultInterpolation=Ie;var to=class extends $a{constructor(e,t,n){super(e,t,n)}};to.prototype.ValueTypeName=`bool`,to.prototype.ValueBufferType=Array,to.prototype.DefaultInterpolation=N,to.prototype.InterpolantFactoryMethodLinear=void 0,to.prototype.InterpolantFactoryMethodSmooth=void 0;var no=class extends $a{constructor(e,t,n,r){super(e,t,n,r)}};no.prototype.ValueTypeName=`color`;var ro=class extends $a{constructor(e,t,n,r){super(e,t,n,r)}};ro.prototype.ValueTypeName=`number`;var io=class extends Ga{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Mt.slerpFlat(i,0,a,c-o,a,c,s);return i}},ao=class extends $a{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new io(this.times,this.values,this.getValueSize(),e)}};ao.prototype.ValueTypeName=`quaternion`,ao.prototype.InterpolantFactoryMethodSmooth=void 0;var oo=class extends $a{constructor(e,t,n){super(e,t,n)}};oo.prototype.ValueTypeName=`string`,oo.prototype.ValueBufferType=Array,oo.prototype.DefaultInterpolation=N,oo.prototype.InterpolantFactoryMethodLinear=void 0,oo.prototype.InterpolantFactoryMethodSmooth=void 0;var so=class extends $a{constructor(e,t,n,r){super(e,t,n,r)}};so.prototype.ValueTypeName=`vector`;var co=class extends Dn{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new W(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},lo=class extends co{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(Dn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new W(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},uo=new U,fo=new B,po=new B,mo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new z(512,512),this.mapType=u,this.map=null,this.mapPass=null,this.matrix=new U,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ji,this._frameExtents=new z(1,1),this._viewportCount=1,this._viewports=[new Yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;fo.setFromMatrixPosition(e.matrixWorld),t.position.copy(fo),po.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(po),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){uo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(uo,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(uo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ho=new B,go=new Mt,_o=new B,vo=class extends Dn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new U,this.projectionMatrix=new U,this.projectionMatrixInverse=new U,this.coordinateSystem=Je,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ho,go,_o),_o.x===1&&_o.y===1&&_o.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ho,go,_o.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(ho,go,_o),_o.x===1&&_o.y===1&&_o.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ho,go,_o.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},yo=new B,bo=new z,xo=new z,So=class extends vo{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=lt*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ct*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return lt*2*Math.atan(Math.tan(ct*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){yo.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(yo.x,yo.y).multiplyScalar(-e/yo.z),yo.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(yo.x,yo.y).multiplyScalar(-e/yo.z)}getViewSize(e,t){return this.getViewBounds(e,bo,xo),t.subVectors(xo,bo)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ct*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Co=class extends mo{constructor(){super(new So(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=lt*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,i=e.distance||t.far;(n!==t.fov||r!==t.aspect||i!==t.far)&&(t.fov=n,t.aspect=r,t.far=i,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},wo=class extends co{constructor(e,t,n=0,r=Math.PI/3,i=0,a=2){super(e,t),this.isSpotLight=!0,this.type=`SpotLight`,this.position.copy(Dn.DEFAULT_UP),this.updateMatrix(),this.target=new Dn,this.distance=n,this.angle=r,this.penumbra=i,this.decay=a,this.map=null,this.shadow=new Co}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},To=class extends mo{constructor(){super(new So(90,1,.5,500)),this.isPointLightShadow=!0}},Eo=class extends co{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new To}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Do=class extends vo{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Oo=class extends mo{constructor(){super(new Do(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ko=class extends co{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(Dn.DEFAULT_UP),this.updateMatrix(),this.target=new Dn,this.shadow=new Oo}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Ao=class extends co{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type=`AmbientLight`}},jo=-90,Mo=1,No=class extends Dn{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new So(jo,Mo,e,t);r.layers=this.layers,this.add(r);let i=new So(jo,Mo,e,t);i.layers=this.layers,this.add(i);let a=new So(jo,Mo,e,t);a.layers=this.layers,this.add(a);let o=new So(jo,Mo,e,t);o.layers=this.layers,this.add(o);let s=new So(jo,Mo,e,t);s.layers=this.layers,this.add(s);let c=new So(jo,Mo,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Po=class extends So{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Fo=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Io.bind(this),e.addEventListener(`visibilitychange`,this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener(`visibilitychange`,this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e===void 0?performance.now():e)-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Io(){this._document.hidden===!1&&this.reset()}var Lo=`\\[\\]\\.:\\/`,Ro=RegExp(`[\\[\\]\\.:\\/]`,`g`),zo=`[^\\[\\]\\.:\\/]`,Bo=`[^`+Lo.replace(`\\.`,``)+`]`,Vo=`((?:WC+[\\/:])*)`.replace(`WC`,zo),Ho=`(WCOD+)?`.replace(`WCOD`,Bo),Uo=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,zo),Wo=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,zo),Go=RegExp(`^`+Vo+Ho+Uo+Wo+`$`),Ko=[`material`,`materials`,`bones`,`map`],qo=class{constructor(e,t,n){let r=n||Jo.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Jo=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(Ro,``)}static parseTrackName(e){let t=Go.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Ko.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){I(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){L(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){L(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){L(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){L(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){L(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){L(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){L(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;L(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){L(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){L(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Jo.Composite=qo,Jo.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Jo.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Jo.prototype.GetterByBindingType=[Jo.prototype._getValue_direct,Jo.prototype._getValue_array,Jo.prototype._getValue_arrayElement,Jo.prototype._getValue_toArray],Jo.prototype.SetterByBindingTypeAndVersioning=[[Jo.prototype._setValue_direct,Jo.prototype._setValue_direct_setNeedsUpdate,Jo.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Jo.prototype._setValue_array,Jo.prototype._setValue_array_setNeedsUpdate,Jo.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Jo.prototype._setValue_arrayElement,Jo.prototype._setValue_arrayElement_setNeedsUpdate,Jo.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Jo.prototype._setValue_fromArray,Jo.prototype._setValue_fromArray_setNeedsUpdate,Jo.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]],class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}};function Yo(e,t,n,r){let i=Xo(r);switch(n){case C:return e*t;case O:return e*t/i.components*i.byteLength;case ee:return e*t/i.components*i.byteLength;case k:return e*t*2/i.components*i.byteLength;case te:return e*t*2/i.components*i.byteLength;case w:return e*t*3/i.components*i.byteLength;case T:return e*t*4/i.components*i.byteLength;case ne:return e*t*4/i.components*i.byteLength;case re:case A:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ie:case j:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case oe:case ce:return Math.max(e,16)*Math.max(t,8)/4;case ae:case se:return Math.max(e,8)*Math.max(t,8)/2;case le:case ue:case M:case fe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case de:case pe:case me:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case he:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ge:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case _e:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case ve:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case ye:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case be:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case xe:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Se:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Ce:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case we:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Te:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Ee:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case De:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Oe:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case ke:case Ae:case je:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Me:case Ne:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Pe:case Fe:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Xo(e){switch(e){case u:case d:return{byteLength:1,components:1};case p:case f:case _:return{byteLength:2,components:1};case v:case y:return{byteLength:2,components:4};case h:case m:case g:return{byteLength:4,components:1};case x:case S:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`186`}})),typeof window<`u`&&(window.__THREE__?I(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`186`);function Zo(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Qo(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var J={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},Y={common:{diffuse:{value:new W(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new V},alphaMap:{value:null},alphaMapTransform:{value:new V},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new V}},envmap:{envMap:{value:null},envMapRotation:{value:new V},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new V}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new V}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new V},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new V},normalScale:{value:new z(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new V},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new V}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new V}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new V}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new W(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new B},probesMax:{value:new B},probesResolution:{value:new B}},points:{diffuse:{value:new W(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new V},alphaTest:{value:0},uvTransform:{value:new V}},sprite:{diffuse:{value:new W(16777215)},opacity:{value:1},center:{value:new z(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new V},alphaMap:{value:null},alphaMapTransform:{value:new V},alphaTest:{value:0}}},$o={basic:{uniforms:ja([Y.common,Y.specularmap,Y.envmap,Y.aomap,Y.lightmap,Y.fog]),vertexShader:J.meshbasic_vert,fragmentShader:J.meshbasic_frag},lambert:{uniforms:ja([Y.common,Y.specularmap,Y.envmap,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.fog,Y.lights,{emissive:{value:new W(0)},envMapIntensity:{value:1}}]),vertexShader:J.meshlambert_vert,fragmentShader:J.meshlambert_frag},phong:{uniforms:ja([Y.common,Y.specularmap,Y.envmap,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.fog,Y.lights,{emissive:{value:new W(0)},specular:{value:new W(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:J.meshphong_vert,fragmentShader:J.meshphong_frag},standard:{uniforms:ja([Y.common,Y.envmap,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.roughnessmap,Y.metalnessmap,Y.fog,Y.lights,{emissive:{value:new W(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:J.meshphysical_vert,fragmentShader:J.meshphysical_frag},toon:{uniforms:ja([Y.common,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.gradientmap,Y.fog,Y.lights,{emissive:{value:new W(0)}}]),vertexShader:J.meshtoon_vert,fragmentShader:J.meshtoon_frag},matcap:{uniforms:ja([Y.common,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.fog,{matcap:{value:null}}]),vertexShader:J.meshmatcap_vert,fragmentShader:J.meshmatcap_frag},points:{uniforms:ja([Y.points,Y.fog]),vertexShader:J.points_vert,fragmentShader:J.points_frag},dashed:{uniforms:ja([Y.common,Y.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:J.linedashed_vert,fragmentShader:J.linedashed_frag},depth:{uniforms:ja([Y.common,Y.displacementmap]),vertexShader:J.depth_vert,fragmentShader:J.depth_frag},normal:{uniforms:ja([Y.common,Y.bumpmap,Y.normalmap,Y.displacementmap,{opacity:{value:1}}]),vertexShader:J.meshnormal_vert,fragmentShader:J.meshnormal_frag},sprite:{uniforms:ja([Y.sprite,Y.fog]),vertexShader:J.sprite_vert,fragmentShader:J.sprite_frag},background:{uniforms:{uvTransform:{value:new V},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:J.background_vert,fragmentShader:J.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new V}},vertexShader:J.backgroundCube_vert,fragmentShader:J.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:J.cube_vert,fragmentShader:J.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:J.equirect_vert,fragmentShader:J.equirect_frag},distance:{uniforms:ja([Y.common,Y.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:J.distance_vert,fragmentShader:J.distance_frag},shadow:{uniforms:ja([Y.lights,Y.fog,{color:{value:new W(0)},opacity:{value:1}}]),vertexShader:J.shadow_vert,fragmentShader:J.shadow_frag}};$o.physical={uniforms:ja([$o.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new V},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new V},clearcoatNormalScale:{value:new z(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new V},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new V},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new V},sheen:{value:0},sheenColor:{value:new W(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new V},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new V},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new V},transmissionSamplerSize:{value:new z},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new V},attenuationDistance:{value:0},attenuationColor:{value:new W(0)},specularColor:{value:new W(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new V},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new V},anisotropyVector:{value:new z},anisotropyMap:{value:null},anisotropyMapTransform:{value:new V}}]),vertexShader:J.meshphysical_vert,fragmentShader:J.meshphysical_frag};var es={r:0,b:0,g:0},ts=new U,ns=new V;ns.set(-1,0,0,0,1,0,0,0,1);function rs(e,t,n,r,i,a){let o=new W(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new K(new q(1,1,1),new Ra({name:`BackgroundCubeMaterial`,uniforms:Aa($o.backgroundCube.uniforms),vertexShader:$o.backgroundCube.vertexShader,fragmentShader:$o.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(ts.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(ns),l.material.toneMapped=H.getTransfer(i.colorSpace)!==We,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new K(new Da(2,2),new Ra({name:`BackgroundMaterial`,uniforms:Aa($o.background.uniforms),vertexShader:$o.background.vertexShader,fragmentShader:$o.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=H.getTransfer(i.colorSpace)!==We,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(es,Pa(e)),n.buffers.color.setClear(es.r,es.g,es.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function is(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function as(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function os(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(I(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&I(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function ss(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Lr,s=new V,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var cs=4,ls=6,us=20,ds=256,fs=new Do,ps=new W,ms=null,hs=0,gs=0,_s=!1,vs=new B,ys=new B,bs=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=vs}=i;ms=this._renderer.getRenderTarget(),hs=this._renderer.getActiveCubeFace(),gs=this._renderer.getActiveMipmapLevel(),_s=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ds(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Es(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ms,hs,gs),this._renderer.xr.enabled=_s,e.scissorTest=!1,Cs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ms=this._renderer.getRenderTarget(),hs=this._renderer.getActiveCubeFace(),gs=this._renderer.getActiveMipmapLevel(),_s=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:s,minFilter:s,generateMipmaps:!1,type:_,format:T,colorSpace:He,depthBuffer:!1},r=Ss(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ss(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=xs(r)),this._blurMaterial=Ts(r,e,t),this._ggxMaterial=ws(r,e,t)}return r}_compileMaterial(e){let t=new K(new Ar,e);this._renderer.compile(t,fs)}_sceneToCubeUV(e,t,n,r,i){let a=new So(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(ps),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new K(new q,new si({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(ps),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;Cs(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ds()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Es());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;Cs(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,fs)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-cs?n-d+cs:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,Cs(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,fs),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,Cs(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,fs)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];Cs(t,3*l*(r>this._lodMax-cs?r-this._lodMax+cs:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,fs)}};function xs(e){let t=[],n=[],r=e,i=e-cs+1+ls;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?ys.set(1,r,n):e===1?ys.set(-n,1,-r):e===2?ys.set(-n,r,1):e===3?ys.set(-1,r,-n):e===4?ys.set(-n,-1,r):ys.set(n,r,-1),ys.toArray(l,(e*6+t)*3)}}let u=new Ar;u.setAttribute(`position`,new gr(c,3)),u.setAttribute(`outputDirection`,new gr(l,3)),n.push(new K(u,null)),r>cs&&r--}return{lodMeshes:n,sizeLods:t}}function Ss(e,t,n){let r=new Zt(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function Cs(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function ws(e,t,n){return new Ra({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:ds,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Os(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ts(e,t,n){return new Ra({name:`SphericalGaussianBlur`,defines:{SAMPLES:us,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Os(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Es(){return new Ra({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:Os(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ds(){return new Ra({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Os(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Os(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var ks=class extends Zt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new ha(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new q(5,5,5),i=new Ra({name:`CubemapFromEquirect`,uniforms:Aa(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new K(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=s),new No(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function As(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new ks(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new bs(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new bs(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function js(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&nt(`WebGLRenderer: `+e+` extension not supported.`),t}}}function Ms(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0?t:(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++,t)}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?vr:_r)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function Ns(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Ps(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:L(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Fs(e,t,n){let r=new WeakMap,i=new Yt;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),_=new Qt(h,p,m,u);_.type=g,_.needsUpdate=!0;let v=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*v;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:_,size:new z(p,m)},r.set(o,d);function y(){_.dispose(),r.delete(o),o.removeEventListener(`dispose`,y)}o.addEventListener(`dispose`,y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function Is(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var Ls={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function Rs(e,t,n,r,i,a){let o=new Zt(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new Ar;l.setAttribute(`position`,new G([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new G([0,2,0,0,2,0],2));let u=new za({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new K(l,u),f=new Do(-1,1,1,-1,0,1),p=null,m=null,h=!1,g,v=null,y=[],b=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<y.length;n++){let r=y[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){y=e,b=y.length>0&&y[0].isRenderPass===!0;let t=o.width,n=o.height;y.length>0&&s===null&&(s=new Zt(t,n,{type:_,depthBuffer:!1,stencilBuffer:!1}),c=new Zt(t,n,{type:_,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<y.length;e++){let r=y[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(h||e.toneMapping===0&&y.length===0)return!1;if(v=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return b===!1&&e.setRenderTarget(o),g=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return b},this.end=function(e,t){e.toneMapping=g,h=!0;let n=o,r=s;for(let i=0;i<y.length;i++){let a=y[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},H.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=Ls[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(v),e.render(d,f),v=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var zs=new Jt,Bs=new _a(1,1),Vs=new Qt,Hs=new $t,Us=new ha,Ws=[],Gs=[],Ks=new Float32Array(16),qs=new Float32Array(9),Js=new Float32Array(4);function Ys(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Ws[i];if(a===void 0&&(a=new Float32Array(i),Ws[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Xs(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Zs(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Qs(e,t){let n=Gs[t];n===void 0&&(n=new Int32Array(t),Gs[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function $s(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function ec(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Xs(n,t))return;e.uniform2fv(this.addr,t),Zs(n,t)}}function tc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Xs(n,t))return;e.uniform3fv(this.addr,t),Zs(n,t)}}function nc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Xs(n,t))return;e.uniform4fv(this.addr,t),Zs(n,t)}}function rc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Xs(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Zs(n,t)}else{if(Xs(n,r))return;Js.set(r),e.uniformMatrix2fv(this.addr,!1,Js),Zs(n,r)}}function ic(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Xs(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Zs(n,t)}else{if(Xs(n,r))return;qs.set(r),e.uniformMatrix3fv(this.addr,!1,qs),Zs(n,r)}}function ac(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Xs(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Zs(n,t)}else{if(Xs(n,r))return;Ks.set(r),e.uniformMatrix4fv(this.addr,!1,Ks),Zs(n,r)}}function oc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function sc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Xs(n,t))return;e.uniform2iv(this.addr,t),Zs(n,t)}}function cc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Xs(n,t))return;e.uniform3iv(this.addr,t),Zs(n,t)}}function lc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Xs(n,t))return;e.uniform4iv(this.addr,t),Zs(n,t)}}function uc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function dc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Xs(n,t))return;e.uniform2uiv(this.addr,t),Zs(n,t)}}function fc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Xs(n,t))return;e.uniform3uiv(this.addr,t),Zs(n,t)}}function pc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Xs(n,t))return;e.uniform4uiv(this.addr,t),Zs(n,t)}}function mc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(Bs.compareFunction=n.isReversedDepthBuffer()?518:515,a=Bs):a=zs,n.setTexture2D(t||a,i)}function hc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Hs,i)}function gc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||Us,i)}function _c(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Vs,i)}function vc(e){switch(e){case 5126:return $s;case 35664:return ec;case 35665:return tc;case 35666:return nc;case 35674:return rc;case 35675:return ic;case 35676:return ac;case 5124:case 35670:return oc;case 35667:case 35671:return sc;case 35668:case 35672:return cc;case 35669:case 35673:return lc;case 5125:return uc;case 36294:return dc;case 36295:return fc;case 36296:return pc;case 35678:case 36198:case 36298:case 36306:case 35682:return mc;case 35679:case 36299:case 36307:return hc;case 35680:case 36300:case 36308:case 36293:return gc;case 36289:case 36303:case 36311:case 36292:return _c}}function yc(e,t){e.uniform1fv(this.addr,t)}function bc(e,t){let n=Ys(t,this.size,2);e.uniform2fv(this.addr,n)}function xc(e,t){let n=Ys(t,this.size,3);e.uniform3fv(this.addr,n)}function Sc(e,t){let n=Ys(t,this.size,4);e.uniform4fv(this.addr,n)}function Cc(e,t){let n=Ys(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function wc(e,t){let n=Ys(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Tc(e,t){let n=Ys(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Ec(e,t){e.uniform1iv(this.addr,t)}function Dc(e,t){e.uniform2iv(this.addr,t)}function Oc(e,t){e.uniform3iv(this.addr,t)}function kc(e,t){e.uniform4iv(this.addr,t)}function Ac(e,t){e.uniform1uiv(this.addr,t)}function jc(e,t){e.uniform2uiv(this.addr,t)}function Mc(e,t){e.uniform3uiv(this.addr,t)}function Nc(e,t){e.uniform4uiv(this.addr,t)}function Pc(e,t,n){let r=this.cache,i=t.length,a=Qs(n,i);Xs(r,a)||(e.uniform1iv(this.addr,a),Zs(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?Bs:zs;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function Fc(e,t,n){let r=this.cache,i=t.length,a=Qs(n,i);Xs(r,a)||(e.uniform1iv(this.addr,a),Zs(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Hs,a[e])}function Ic(e,t,n){let r=this.cache,i=t.length,a=Qs(n,i);Xs(r,a)||(e.uniform1iv(this.addr,a),Zs(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||Us,a[e])}function Lc(e,t,n){let r=this.cache,i=t.length,a=Qs(n,i);Xs(r,a)||(e.uniform1iv(this.addr,a),Zs(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Vs,a[e])}function Rc(e){switch(e){case 5126:return yc;case 35664:return bc;case 35665:return xc;case 35666:return Sc;case 35674:return Cc;case 35675:return wc;case 35676:return Tc;case 5124:case 35670:return Ec;case 35667:case 35671:return Dc;case 35668:case 35672:return Oc;case 35669:case 35673:return kc;case 5125:return Ac;case 36294:return jc;case 36295:return Mc;case 36296:return Nc;case 35678:case 36198:case 36298:case 36306:case 35682:return Pc;case 35679:case 36299:case 36307:return Fc;case 35680:case 36300:case 36308:case 36293:return Ic;case 36289:case 36303:case 36311:case 36292:return Lc}}var zc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=vc(t.type)}},Bc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Rc(t.type)}},Vc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Hc=/(\w+)(\])?(\[|\.)?/g;function Uc(e,t){e.seq.push(t),e.map[t.id]=t}function Wc(e,t,n){let r=e.name,i=r.length;for(Hc.lastIndex=0;;){let a=Hc.exec(r),o=Hc.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Uc(n,l===void 0?new zc(s,e,t):new Bc(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Vc(s),Uc(n,e)),n=e}}}var Gc=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Wc(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Kc(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var qc=37297,Jc=0;function Yc(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Xc=new V;function Zc(e){H._getMatrix(Xc,H.workingColorSpace,e);let t=`mat3( ${Xc.elements.map(e=>e.toFixed(4))} )`;switch(H.getTransfer(e)){case Ue:return[t,`LinearTransferOETF`];case We:return[t,`sRGBTransferOETF`];default:return I(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Qc(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Yc(e.getShaderSource(t),r)}return i}function $c(e,t){let n=Zc(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var el={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function tl(e,t){let n=el[t];return n===void 0?(I(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var nl=new B;function rl(){return H.getLuminanceCoefficients(nl),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${nl.x.toFixed(4)}, ${nl.y.toFixed(4)}, ${nl.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function il(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(sl).join(`
`)}function al(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function ol(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function sl(e){return e!==``}function cl(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ll(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var ul=/^[ \t]*#include +<([\w\d./]+)>/gm;function dl(e){return e.replace(ul,pl)}var fl=new Map;function pl(e,t){let n=J[t];if(n===void 0){let e=fl.get(t);if(e!==void 0)n=J[e],I(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return dl(n)}var ml=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hl(e){return e.replace(ml,gl)}function gl(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function _l(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var vl={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function yl(e){return vl[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var bl={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function xl(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:bl[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var Sl={302:`ENVMAP_MODE_REFRACTION`};function Cl(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:Sl[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var wl={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function Tl(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:wl[e.combine]||`ENVMAP_BLENDING_NONE`}function El(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function Dl(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=yl(n),l=xl(n),u=Cl(n),d=Tl(n),f=El(n),p=il(n),m=al(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(sl).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(sl).join(`
`),_.length>0&&(_+=`
`)):(g=[_l(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(sl).join(`
`),_=[_l(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:J.tonemapping_pars_fragment,n.toneMapping===0?``:tl(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,J.colorspace_pars_fragment,$c(`linearToOutputTexel`,n.outputColorSpace),rl(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(sl).join(`
`)),o=dl(o),o=cl(o,n),o=ll(o,n),s=dl(s),s=cl(s,n),s=ll(s,n),o=hl(o),s=hl(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=Kc(i,i.VERTEX_SHADER,y),S=Kc(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=Qc(i,x,`vertex`),n=Qc(i,S,`fragment`);L(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):I(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new Gc(i,h),T=ol(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,qc)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Jc++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var Ol=0,kl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Al(e),t.set(e,n)),n}},Al=class{constructor(e){this.id=Ol++,this.code=e,this.usedTimes=0}};function jl(e){return e===1030||e===37490||e===36285}function Ml(e,t,n,r,i,a){let o=new dn,s=new kl,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&I(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,ee,k;if(C){let e=$o[C];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),ee=e.id,k=t.id}let te=e.getRenderTarget(),ne=e.state.buffers.depth.getReversed(),re=h.isInstancedMesh===!0,A=h.isBatchedMesh===!0,ie=!!i.map,j=!!i.matcap,ae=!!x,oe=!!i.aoMap,se=!!i.lightMap,ce=!!i.bumpMap&&i.wireframe===!1,le=!!i.normalMap,ue=!!i.displacementMap,de=!!i.emissiveMap,M=!!i.metalnessMap,fe=!!i.roughnessMap,pe=i.anisotropy>0,me=i.clearcoat>0,he=i.dispersion>0,ge=i.retroreflectivity>0,_e=i.iridescence>0,ve=i.sheen>0,ye=i.transmission>0,be=pe&&!!i.anisotropyMap,xe=me&&!!i.clearcoatMap,Se=me&&!!i.clearcoatNormalMap,Ce=me&&!!i.clearcoatRoughnessMap,we=_e&&!!i.iridescenceMap,Te=_e&&!!i.iridescenceThicknessMap,Ee=ve&&!!i.sheenColorMap,De=ve&&!!i.sheenRoughnessMap,Oe=!!i.specularMap,ke=!!i.specularColorMap,Ae=!!i.specularIntensityMap,je=ye&&!!i.transmissionMap,Me=ye&&!!i.thicknessMap,Ne=!!i.gradientMap,Pe=!!i.alphaMap,Fe=i.alphaTest>0,N=!!i.alphaHash,Ie=!!i.extensions,Le=0;i.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Le=e.toneMapping);let Re={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:ee,customFragmentShaderID:k,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:A,batchingColor:A&&h._colorsTexture!==null,instancing:re,instancingColor:re&&h.instanceColor!==null,instancingMorph:re&&h.morphTexture!==null,outputColorSpace:te===null?e.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:H.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:ie,matcap:j,envMap:ae,envMapMode:ae&&x.mapping,envMapCubeUVHeight:S,aoMap:oe,lightMap:se,bumpMap:ce,normalMap:le,displacementMap:ue,emissiveMap:de,normalMapObjectSpace:le&&i.normalMapType===1,normalMapTangentSpace:le&&i.normalMapType===0,packedNormalMap:le&&i.normalMapType===0&&jl(i.normalMap.format),metalnessMap:M,roughnessMap:fe,anisotropy:pe,anisotropyMap:be,clearcoat:me,clearcoatMap:xe,clearcoatNormalMap:Se,clearcoatRoughnessMap:Ce,dispersion:he,retroreflection:ge,iridescence:_e,iridescenceMap:we,iridescenceThicknessMap:Te,sheen:ve,sheenColorMap:Ee,sheenRoughnessMap:De,specularMap:Oe,specularColorMap:ke,specularIntensityMap:Ae,transmission:ye,transmissionMap:je,thicknessMap:Me,gradientMap:Ne,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Pe,alphaTest:Fe,alphaHash:N,combine:i.combine,mapUv:ie&&m(i.map.channel),aoMapUv:oe&&m(i.aoMap.channel),lightMapUv:se&&m(i.lightMap.channel),bumpMapUv:ce&&m(i.bumpMap.channel),normalMapUv:le&&m(i.normalMap.channel),displacementMapUv:ue&&m(i.displacementMap.channel),emissiveMapUv:de&&m(i.emissiveMap.channel),metalnessMapUv:M&&m(i.metalnessMap.channel),roughnessMapUv:fe&&m(i.roughnessMap.channel),anisotropyMapUv:be&&m(i.anisotropyMap.channel),clearcoatMapUv:xe&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:Se&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:De&&m(i.sheenRoughnessMap.channel),specularMapUv:Oe&&m(i.specularMap.channel),specularColorMapUv:ke&&m(i.specularColorMap.channel),specularIntensityMapUv:Ae&&m(i.specularIntensityMap.channel),transmissionMapUv:je&&m(i.transmissionMap.channel),thicknessMapUv:Me&&m(i.thicknessMap.channel),alphaMapUv:Pe&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(le||pe),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(ie||Pe),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&le===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ne,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Le,decodeVideoTexture:ie&&i.map.isVideoTexture===!0&&H.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:de&&i.emissiveMap.isVideoTexture===!0&&H.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Ie&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Ie&&i.extensions.multiDraw===!0||A)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Re.vertexUv1s=c.has(1),Re.vertexUv2s=c.has(2),Re.vertexUv3s=c.has(3),c.clear(),Re}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=$o[t];n=Fa.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new Dl(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function Nl(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Pl(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Fl(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Il(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||Pl),r.length>1&&r.sort(t||Fl),i.length>1&&i.sort(t||Fl)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function Ll(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Il,e.set(t,[i])):n>=r.length?(i=new Il,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Rl(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new B,color:new W};break;case`SpotLight`:n={position:new B,direction:new B,color:new W,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new B,color:new W,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new B,skyColor:new W,groundColor:new W};break;case`RectAreaLight`:n={color:new W,position:new B,halfWidth:new B,halfHeight:new B}}return e[t.id]=n,n}}}function zl(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new z};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new z};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new z,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var Bl=0;function Vl(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Hl(e){let t=new Rl,n=zl(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new B);let i=new B,a=new U,o=new U;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(Vl);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=Y.LTC_FLOAT_1,r.rectAreaLTC2=Y.LTC_FLOAT_2):(r.rectAreaLTC1=Y.LTC_HALF_1,r.rectAreaLTC2=Y.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=Bl++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function Ul(e){let t=new Hl(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function Wl(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Ul(e),t.set(n,[a])):r>=i.length?(a=new Ul(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Gl=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Kl=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,ql=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],Jl=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],Yl=new U,Xl=new B,Zl=new B;function Ql(e,t,n){let r=new Ji,a=new z,o=new z,c=new Yt,l=new Va,u=new Ha,d={},f=n.maxTextureSize,p={0:1,1:0,2:2},m=new Ra({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new z},radius:{value:4}},vertexShader:Gl,fragmentShader:Kl}),v=m.clone();v.defines.HORIZONTAL_PASS=1;let y=new Ar;y.setAttribute(`position`,new gr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new K(y,m),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let S=this.type;this.render=function(t,n,l){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||t.length===0)return;this.type===2&&(I(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.state;m.setBlending(0),m.buffers.depth.getReversed()===!0?m.buffers.color.setClear(0,0,0,0):m.buffers.color.setClear(1,1,1,1),m.buffers.depth.setTest(!0),m.setScissorTest(!1);let v=S!==this.type;v&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let u=0,d=t.length;u<d;u++){let d=t[u],p=d.shadow;if(p===void 0){I(`WebGLShadowMap:`,d,`has no shadow.`);continue}if(p.autoUpdate===!1&&p.needsUpdate===!1)continue;a.copy(p.mapSize);let y=p.getFrameExtents();a.multiply(y),o.copy(p.mapSize),(a.x>f||a.y>f)&&(a.x>f&&(o.x=Math.floor(f/y.x),a.x=o.x*y.x,p.mapSize.x=o.x),a.y>f&&(o.y=Math.floor(f/y.y),a.y=o.y*y.y,p.mapSize.y=o.y));let b=e.state.buffers.depth.getReversed();if(p.camera._reversedDepth=b,p.map===null||v===!0){if(p.map!==null&&(p.map.depthTexture!==null&&(p.map.depthTexture.dispose(),p.map.depthTexture=null),p.map.dispose()),this.type===3){if(d.isPointLight){I(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}p.map=new Zt(a.x,a.y,{format:k,type:_,minFilter:s,magFilter:s,generateMipmaps:!1}),p.map.texture.name=d.name+`.shadowMap`,p.map.depthTexture=new _a(a.x,a.y,g),p.map.depthTexture.name=d.name+`.shadowMapDepth`,p.map.depthTexture.format=E,p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=i,p.map.depthTexture.magFilter=i}else d.isPointLight?(p.map=new ks(a.x),p.map.depthTexture=new va(a.x,h)):(p.map=new Zt(a.x,a.y),p.map.depthTexture=new _a(a.x,a.y,h)),p.map.depthTexture.name=d.name+`.shadowMap`,p.map.depthTexture.format=E,this.type===1?(p.map.depthTexture.compareFunction=b?518:515,p.map.depthTexture.minFilter=s,p.map.depthTexture.magFilter=s):(p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=i,p.map.depthTexture.magFilter=i);p.camera.updateProjectionMatrix()}p.map.isWebGLCubeRenderTarget!==!0&&(p.map.width!==a.x||p.map.height!==a.y)&&p.map.setSize(a.x,a.y);let x=p.map.isWebGLCubeRenderTarget?6:p.getViewportCount();d.isPointLight!==!0&&p.updateMatrices(d,l);for(let t=0;t<x;t++){let i=p.getCamera(t);if(d.isPointLight){let e=p.camera,n=p.matrix,r=d.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Xl.setFromMatrixPosition(d.matrixWorld),e.position.copy(Xl),Zl.copy(e.position),Zl.add(ql[t]),e.up.copy(Jl[t]),e.lookAt(Zl),e.updateMatrixWorld(),n.makeTranslation(-Xl.x,-Xl.y,-Xl.z),Yl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),p._frustum.setFromProjectionMatrix(Yl,e.coordinateSystem,e.reversedDepth)}if(p.map.isWebGLCubeRenderTarget)e.setRenderTarget(p.map,t),e.clear();else{t===0&&(e.setRenderTarget(p.map),e.clear());let n=p.getViewport(t);c.set(o.x*n.x,o.y*n.y,o.x*n.z,o.y*n.w),m.viewport(c)}r=p.getFrustum(t),T(n,l,i,d,this.type)}p.isPointLightShadow!==!0&&this.type===3&&C(p,l),p.needsUpdate=!1}S=this.type,x.needsUpdate=!1,e.setRenderTarget(u,d,p)};function C(n,r){let i=t.update(b);m.defines.VSM_SAMPLES!==n.blurSamples&&(m.defines.VSM_SAMPLES=n.blurSamples,v.defines.VSM_SAMPLES=n.blurSamples,m.needsUpdate=!0,v.needsUpdate=!0),n.mapPass===null?n.mapPass=new Zt(a.x,a.y,{format:k,type:_}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),m.uniforms.shadow_pass.value=n.map.depthTexture,m.uniforms.resolution.value.set(n.map.width,n.map.height),m.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,i,m,b,null),v.uniforms.shadow_pass.value=n.mapPass.texture,v.uniforms.resolution.value.set(n.map.width,n.map.height),v.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,i,v,b,null)}function w(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?u:l,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=d[e];r===void 0&&(r={},d[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,D)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?p[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function T(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=w(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=w(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)T(c[e],i,a,o,s)}function D(e){e.target.removeEventListener(`dispose`,D);for(let t in d){let n=d[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function $l(e,t){function n(){let t=!1,n=new Yt,r=null,i=new Yt(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?M(e.DEPTH_TEST):fe(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=it[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?M(e.STENCIL_TEST):fe(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new W(0,0,0),T=0,E=!1,D=null,O=null,ee=null,k=null,te=null,ne=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),re=!1,A=0,ie=e.getParameter(e.VERSION);ie.indexOf(`WebGL`)===-1?ie.indexOf(`OpenGL ES`)!==-1&&(A=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),re=A>=2):(A=parseFloat(/^WebGL (\d)/.exec(ie)[1]),re=A>=1);let j=null,ae={},oe=e.getParameter(e.SCISSOR_BOX),se=e.getParameter(e.VIEWPORT),ce=new Yt().fromArray(oe),le=new Yt().fromArray(se);function ue(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let de={};de[e.TEXTURE_2D]=ue(e.TEXTURE_2D,e.TEXTURE_2D,1),de[e.TEXTURE_CUBE_MAP]=ue(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[e.TEXTURE_2D_ARRAY]=ue(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),de[e.TEXTURE_3D]=ue(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),M(e.DEPTH_TEST),o.setFunc(3),be(!1),xe(1),M(e.CULL_FACE),ve(0);function M(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function fe(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function pe(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function me(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function he(t){return h!==t&&(e.useProgram(t),h=t,!0)}let ge={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};ge[103]=e.MIN,ge[104]=e.MAX;let _e={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function ve(t,n,r,i,a,o,s,c,l,u){if(t===0){g===!0&&(fe(e.BLEND),g=!1);return}if(g===!1&&(M(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:L(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:L(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:L(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:L(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}return}a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(ge[n],ge[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(_e[r],_e[i],_e[o],_e[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function ye(t,n){t.side===2?fe(e.CULL_FACE):M(e.CULL_FACE);let r=t.side===1;n&&(r=!r),be(r),t.blending===1&&t.transparent===!1?ve(0):ve(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),Ce(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?M(e.SAMPLE_ALPHA_TO_COVERAGE):fe(e.SAMPLE_ALPHA_TO_COVERAGE)}function be(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function xe(t){t===0?fe(e.CULL_FACE):(M(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function Se(t){t!==ee&&(re&&e.lineWidth(t),ee=t)}function Ce(t,n,r){t?(M(e.POLYGON_OFFSET_FILL),(k!==n||te!==r)&&(k=n,te=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):fe(e.POLYGON_OFFSET_FILL)}function we(t){t?M(e.SCISSOR_TEST):fe(e.SCISSOR_TEST)}function Te(t){t===void 0&&(t=e.TEXTURE0+ne-1),j!==t&&(e.activeTexture(t),j=t)}function Ee(t,n,r){r===void 0&&(r=j===null?e.TEXTURE0+ne-1:j);let i=ae[r];i===void 0&&(i={type:void 0,texture:void 0},ae[r]=i),(i.type!==t||i.texture!==n)&&(j!==r&&(e.activeTexture(r),j=r),e.bindTexture(t,n||de[t]),i.type=t,i.texture=n)}function De(){let t=ae[j];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Oe(){try{e.compressedTexImage2D(...arguments)}catch(e){L(`WebGLState:`,e)}}function ke(){try{e.compressedTexImage3D(...arguments)}catch(e){L(`WebGLState:`,e)}}function Ae(){try{e.texSubImage2D(...arguments)}catch(e){L(`WebGLState:`,e)}}function je(){try{e.texSubImage3D(...arguments)}catch(e){L(`WebGLState:`,e)}}function Me(){try{e.compressedTexSubImage2D(...arguments)}catch(e){L(`WebGLState:`,e)}}function Ne(){try{e.compressedTexSubImage3D(...arguments)}catch(e){L(`WebGLState:`,e)}}function Pe(){try{e.texStorage2D(...arguments)}catch(e){L(`WebGLState:`,e)}}function Fe(){try{e.texStorage3D(...arguments)}catch(e){L(`WebGLState:`,e)}}function N(){try{e.texImage2D(...arguments)}catch(e){L(`WebGLState:`,e)}}function Ie(){try{e.texImage3D(...arguments)}catch(e){L(`WebGLState:`,e)}}function Le(t){return d[t]===void 0?e.getParameter(t):d[t]}function Re(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function P(t){ce.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ce.copy(t))}function ze(t){le.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),le.copy(t))}function F(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Be(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Ve(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},j=null,ae={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new W(0,0,0),T=0,E=!1,D=null,O=null,ee=null,k=null,te=null,ce.set(0,0,e.canvas.width,e.canvas.height),le.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:M,disable:fe,bindFramebuffer:pe,drawBuffers:me,useProgram:he,setBlending:ve,setMaterial:ye,setFlipSided:be,setCullFace:xe,setLineWidth:Se,setPolygonOffset:Ce,setScissorTest:we,activeTexture:Te,bindTexture:Ee,unbindTexture:De,compressedTexImage2D:Oe,compressedTexImage3D:ke,texImage2D:N,texImage3D:Ie,pixelStorei:Re,getParameter:Le,updateUBOMapping:F,uniformBlockBinding:Be,texStorage2D:Pe,texStorage3D:Fe,texSubImage2D:Ae,texSubImage3D:je,compressedTexSubImage2D:Me,compressedTexSubImage3D:Ne,scissor:P,viewport:ze,reset:Ve}}function eu(e,u,d,f,p,m,h){let g=u.has(`WEBGL_multisampled_render_to_texture`)?u.get(`WEBGL_multisampled_render_to_texture`):null,_=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new z,y=new WeakMap,b=new Set,x,S=new WeakMap,C=!1;try{C=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function w(e,t){return C?new OffscreenCanvas(e,t):Ze(`canvas`)}function T(e,t,n){let r=1,i=Le(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);x===void 0&&(x=w(n,a));let o=t?w(n,a):x;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),I(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&I(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function E(e){return e.generateMipmaps}function O(t){e.generateMipmap(t)}function ee(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function k(t,n,r,i,a,o=!1){if(t!==null){if(e[t]!==void 0)return e[t];I(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+t+`'`)}let s;i&&(s=u.get(`EXT_texture_norm16`),s||I(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let c=n;if(n===e.RED&&(r===e.FLOAT&&(c=e.R32F),r===e.HALF_FLOAT&&(c=e.R16F),r===e.UNSIGNED_BYTE&&(c=e.R8),r===e.UNSIGNED_SHORT&&s&&(c=s.R16_EXT),r===e.SHORT&&s&&(c=s.R16_SNORM_EXT)),n===e.RED_INTEGER&&(r===e.UNSIGNED_BYTE&&(c=e.R8UI),r===e.UNSIGNED_SHORT&&(c=e.R16UI),r===e.UNSIGNED_INT&&(c=e.R32UI),r===e.BYTE&&(c=e.R8I),r===e.SHORT&&(c=e.R16I),r===e.INT&&(c=e.R32I)),n===e.RG&&(r===e.FLOAT&&(c=e.RG32F),r===e.HALF_FLOAT&&(c=e.RG16F),r===e.UNSIGNED_BYTE&&(c=e.RG8),r===e.UNSIGNED_SHORT&&s&&(c=s.RG16_EXT),r===e.SHORT&&s&&(c=s.RG16_SNORM_EXT)),n===e.RG_INTEGER&&(r===e.UNSIGNED_BYTE&&(c=e.RG8UI),r===e.UNSIGNED_SHORT&&(c=e.RG16UI),r===e.UNSIGNED_INT&&(c=e.RG32UI),r===e.BYTE&&(c=e.RG8I),r===e.SHORT&&(c=e.RG16I),r===e.INT&&(c=e.RG32I)),n===e.RGB_INTEGER&&(r===e.UNSIGNED_BYTE&&(c=e.RGB8UI),r===e.UNSIGNED_SHORT&&(c=e.RGB16UI),r===e.UNSIGNED_INT&&(c=e.RGB32UI),r===e.BYTE&&(c=e.RGB8I),r===e.SHORT&&(c=e.RGB16I),r===e.INT&&(c=e.RGB32I)),n===e.RGBA_INTEGER&&(r===e.UNSIGNED_BYTE&&(c=e.RGBA8UI),r===e.UNSIGNED_SHORT&&(c=e.RGBA16UI),r===e.UNSIGNED_INT&&(c=e.RGBA32UI),r===e.BYTE&&(c=e.RGBA8I),r===e.SHORT&&(c=e.RGBA16I),r===e.INT&&(c=e.RGBA32I)),n===e.RGB&&(r===e.UNSIGNED_SHORT&&s&&(c=s.RGB16_EXT),r===e.SHORT&&s&&(c=s.RGB16_SNORM_EXT),r===e.UNSIGNED_INT_5_9_9_9_REV&&(c=e.RGB9_E5),r===e.UNSIGNED_INT_10F_11F_11F_REV&&(c=e.R11F_G11F_B10F)),n===e.RGBA){let t=o?Ue:H.getTransfer(a);r===e.FLOAT&&(c=e.RGBA32F),r===e.HALF_FLOAT&&(c=e.RGBA16F),r===e.UNSIGNED_BYTE&&(c=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),r===e.UNSIGNED_SHORT&&s&&(c=s.RGBA16_EXT),r===e.SHORT&&s&&(c=s.RGBA16_SNORM_EXT),r===e.UNSIGNED_SHORT_4_4_4_4&&(c=e.RGBA4),r===e.UNSIGNED_SHORT_5_5_5_1&&(c=e.RGB5_A1)}return(c===e.R16F||c===e.R32F||c===e.RG16F||c===e.RG32F||c===e.RGBA16F||c===e.RGBA32F)&&u.get(`EXT_color_buffer_float`),c}function te(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,I(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function ne(e,t){return E(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function re(e){let t=e.target;t.removeEventListener(`dispose`,re),ie(t),t.isVideoTexture&&y.delete(t),t.isHTMLTexture&&b.delete(t)}function A(e){let t=e.target;t.removeEventListener(`dispose`,A),ae(t)}function ie(e){let t=f.get(e);if(t.__webglInit===void 0)return;let n=e.source,r=S.get(n);if(r){let i=r[t.__cacheKey];i.usedTimes--,i.usedTimes===0&&j(e),Object.keys(r).length===0&&S.delete(n)}f.remove(e)}function j(t){let n=f.get(t);e.deleteTexture(n.__webglTexture);let r=t.source,i=S.get(r);delete i[n.__cacheKey],h.memory.textures--}function ae(t){let n=f.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),f.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let r=t.textures;for(let t=0,n=r.length;t<n;t++){let n=f.get(r[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),h.memory.textures--),f.remove(r[t])}f.remove(t)}let oe=0;function se(){oe=0}function ce(){return oe}function le(e){oe=e}function ue(){let e=oe;return e>=p.maxTextures&&I(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+p.maxTextures),oe+=1,e}function de(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function M(t,n){let r=f.get(t);if(t.isVideoTexture&&N(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&r.__version!==t.version){let e=t.image;if(e===null)I(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)I(`WebGLRenderer: Texture marked for update but image is incomplete`);else{Se(r,t,n);return}}else t.isExternalTexture&&(r.__webglTexture=t.sourceTexture?t.sourceTexture:null);d.bindTexture(e.TEXTURE_2D,r.__webglTexture,e.TEXTURE0+n)}function fe(t,n){let r=f.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&r.__version!==t.version){Se(r,t,n);return}t.isExternalTexture&&(r.__webglTexture=t.sourceTexture?t.sourceTexture:null),d.bindTexture(e.TEXTURE_2D_ARRAY,r.__webglTexture,e.TEXTURE0+n)}function pe(t,n){let r=f.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&r.__version!==t.version){Se(r,t,n);return}d.bindTexture(e.TEXTURE_3D,r.__webglTexture,e.TEXTURE0+n)}function me(t,n){let r=f.get(t);if(t.isCubeDepthTexture!==!0&&t.version>0&&r.__version!==t.version){Ce(r,t,n);return}d.bindTexture(e.TEXTURE_CUBE_MAP,r.__webglTexture,e.TEXTURE0+n)}let he={[t]:e.REPEAT,[n]:e.CLAMP_TO_EDGE,[r]:e.MIRRORED_REPEAT},ge={[i]:e.NEAREST,[a]:e.NEAREST_MIPMAP_NEAREST,[o]:e.NEAREST_MIPMAP_LINEAR,[s]:e.LINEAR,[c]:e.LINEAR_MIPMAP_NEAREST,[l]:e.LINEAR_MIPMAP_LINEAR},_e={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function ve(t,n){if(n.type===1015&&u.has(`OES_texture_float_linear`)===!1&&(n.magFilter===1006||n.magFilter===1007||n.magFilter===1005||n.magFilter===1008||n.minFilter===1006||n.minFilter===1007||n.minFilter===1005||n.minFilter===1008)&&I(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(t,e.TEXTURE_WRAP_S,he[n.wrapS]),e.texParameteri(t,e.TEXTURE_WRAP_T,he[n.wrapT]),(t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY)&&e.texParameteri(t,e.TEXTURE_WRAP_R,he[n.wrapR]),e.texParameteri(t,e.TEXTURE_MAG_FILTER,ge[n.magFilter]),e.texParameteri(t,e.TEXTURE_MIN_FILTER,ge[n.minFilter]),n.compareFunction&&(e.texParameteri(t,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(t,e.TEXTURE_COMPARE_FUNC,_e[n.compareFunction])),u.has(`EXT_texture_filter_anisotropic`)===!0){if(n.magFilter===1003||n.minFilter!==1005&&n.minFilter!==1008||n.type===1015&&u.has(`OES_texture_float_linear`)===!1)return;if(n.anisotropy>1||f.get(n).__currentAnisotropy){let r=u.get(`EXT_texture_filter_anisotropic`);e.texParameterf(t,r.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(n.anisotropy,p.getMaxAnisotropy())),f.get(n).__currentAnisotropy=n.anisotropy}}}function ye(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,re));let i=n.source,a=S.get(i);a===void 0&&(a={},S.set(i,a));let o=de(n);if(o!==t.__cacheKey){a[o]===void 0&&(a[o]={texture:e.createTexture(),usedTimes:0},h.memory.textures++,r=!0),a[o].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&j(n)),t.__cacheKey=o,t.__webglTexture=a[o].texture}return r}function be(e,t,n){return Math.floor(Math.floor(e/n)/t)}function xe(t,n,r,i){let a=t.updateRanges;if(a.length===0)d.texSubImage2D(e.TEXTURE_2D,0,0,0,n.width,n.height,r,i,n.data);else{a.sort((e,t)=>e.start-t.start);let o=0;for(let e=1;e<a.length;e++){let t=a[o],r=a[e],i=t.start+t.count,s=be(r.start,n.width,4),c=be(t.start,n.width,4);r.start<=i+1&&s===c&&be(r.start+r.count-1,n.width,4)===s?t.count=Math.max(t.count,r.start+r.count-t.start):(++o,a[o]=r)}a.length=o+1;let s=d.getParameter(e.UNPACK_ROW_LENGTH),c=d.getParameter(e.UNPACK_SKIP_PIXELS),l=d.getParameter(e.UNPACK_SKIP_ROWS);d.pixelStorei(e.UNPACK_ROW_LENGTH,n.width);for(let t=0,o=a.length;t<o;t++){let o=a[t],s=Math.floor(o.start/4),c=Math.ceil(o.count/4),l=s%n.width,u=Math.floor(s/n.width),f=c;d.pixelStorei(e.UNPACK_SKIP_PIXELS,l),d.pixelStorei(e.UNPACK_SKIP_ROWS,u),d.texSubImage2D(e.TEXTURE_2D,0,l,u,f,1,r,i,n.data)}t.clearUpdateRanges(),d.pixelStorei(e.UNPACK_ROW_LENGTH,s),d.pixelStorei(e.UNPACK_SKIP_PIXELS,c),d.pixelStorei(e.UNPACK_SKIP_ROWS,l)}}function Se(t,n,r){let i=e.TEXTURE_2D;(n.isDataArrayTexture||n.isCompressedArrayTexture)&&(i=e.TEXTURE_2D_ARRAY),n.isData3DTexture&&(i=e.TEXTURE_3D);let a=ye(t,n),o=n.source;d.bindTexture(i,t.__webglTexture,e.TEXTURE0+r);let s=f.get(o);if(o.version!==s.__version||a===!0){if(d.activeTexture(e.TEXTURE0+r),!(typeof ImageBitmap<`u`&&n.image instanceof ImageBitmap)){let t=H.getPrimaries(H.workingColorSpace),r=n.colorSpace===``?null:H.getPrimaries(n.colorSpace),i=n.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;d.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,n.flipY),d.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.premultiplyAlpha),d.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}d.pixelStorei(e.UNPACK_ALIGNMENT,n.unpackAlignment);let t=T(n.image,!1,p.maxTextureSize);t=Ie(n,t);let c=m.convert(n.format,n.colorSpace),l=m.convert(n.type),u=k(n.internalFormat,c,l,n.normalized,n.colorSpace,n.isVideoTexture);ve(i,n);let f,h=n.mipmaps,g=n.isVideoTexture!==!0,_=s.__version===void 0||a===!0,v=o.dataReady,y=ne(n,t);if(n.isDepthTexture)u=te(n.format===D,n.type),_&&(g?d.texStorage2D(e.TEXTURE_2D,1,u,t.width,t.height):d.texImage2D(e.TEXTURE_2D,0,u,t.width,t.height,0,c,l,null));else if(n.isDataTexture){if(h.length>0){g&&_&&d.texStorage2D(e.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let t=0,n=h.length;t<n;t++)f=h[t],g?v&&d.texSubImage2D(e.TEXTURE_2D,t,0,0,f.width,f.height,c,l,f.data):d.texImage2D(e.TEXTURE_2D,t,u,f.width,f.height,0,c,l,f.data);n.generateMipmaps=!1}else g?(_&&d.texStorage2D(e.TEXTURE_2D,y,u,t.width,t.height),v&&xe(n,t,c,l)):d.texImage2D(e.TEXTURE_2D,0,u,t.width,t.height,0,c,l,t.data)}else if(n.isCompressedTexture){if(n.isCompressedArrayTexture){g&&_&&d.texStorage3D(e.TEXTURE_2D_ARRAY,y,u,h[0].width,h[0].height,t.depth);for(let r=0,i=h.length;r<i;r++)if(f=h[r],n.format!==1023){if(c!==null){if(g){if(v){if(n.layerUpdates.size>0){let t=Yo(f.width,f.height,n.format,n.type);for(let i of n.layerUpdates){let n=f.data.subarray(i*t/f.data.BYTES_PER_ELEMENT,(i+1)*t/f.data.BYTES_PER_ELEMENT);d.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,r,0,0,i,f.width,f.height,1,c,n)}}else d.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,r,0,0,0,f.width,f.height,t.depth,c,f.data)}}else d.compressedTexImage3D(e.TEXTURE_2D_ARRAY,r,u,f.width,f.height,t.depth,0,f.data,0,0)}else I(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else g?v&&d.texSubImage3D(e.TEXTURE_2D_ARRAY,r,0,0,0,f.width,f.height,t.depth,c,l,f.data):d.texImage3D(e.TEXTURE_2D_ARRAY,r,u,f.width,f.height,t.depth,0,c,l,f.data);n.layerUpdates.size>0&&n.clearLayerUpdates()}else{g&&_&&d.texStorage2D(e.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let t=0,r=h.length;t<r;t++)f=h[t],n.format===1023?g?v&&d.texSubImage2D(e.TEXTURE_2D,t,0,0,f.width,f.height,c,l,f.data):d.texImage2D(e.TEXTURE_2D,t,u,f.width,f.height,0,c,l,f.data):c===null?I(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):g?v&&d.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,f.width,f.height,c,f.data):d.compressedTexImage2D(e.TEXTURE_2D,t,u,f.width,f.height,0,f.data)}}else if(n.isDataArrayTexture){if(g){if(_&&d.texStorage3D(e.TEXTURE_2D_ARRAY,y,u,t.width,t.height,t.depth),v){if(n.layerUpdates.size>0){let r=Yo(t.width,t.height,n.format,n.type);for(let i of n.layerUpdates){let n=t.data.subarray(i*r/t.data.BYTES_PER_ELEMENT,(i+1)*r/t.data.BYTES_PER_ELEMENT);d.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,i,t.width,t.height,1,c,l,n)}n.clearLayerUpdates()}else d.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,c,l,t.data)}}else d.texImage3D(e.TEXTURE_2D_ARRAY,0,u,t.width,t.height,t.depth,0,c,l,t.data)}else if(n.isData3DTexture)g?(_&&d.texStorage3D(e.TEXTURE_3D,y,u,t.width,t.height,t.depth),v&&d.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,c,l,t.data)):d.texImage3D(e.TEXTURE_3D,0,u,t.width,t.height,t.depth,0,c,l,t.data);else if(n.isFramebufferTexture){if(_){if(g)d.texStorage2D(e.TEXTURE_2D,y,u,t.width,t.height);else{let n=t.width,r=t.height;for(let t=0;t<y;t++)d.texImage2D(e.TEXTURE_2D,t,u,n,r,0,c,l,null),n>>=1,r>>=1}}}else if(n.isHTMLTexture){if(`texElementImage2D`in e){let r=e.canvas;if(r.hasAttribute(`layoutsubtree`)||r.setAttribute(`layoutsubtree`,`true`),t.parentNode!==r){r.appendChild(t),b.add(n),r.onpaint=e=>{let t=e.changedElements;for(let e of b)t.includes(e.image)&&(e.needsUpdate=!0)},r.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(h.length>0){if(g&&_){let t=Le(h[0]);d.texStorage2D(e.TEXTURE_2D,y,u,t.width,t.height)}for(let t=0,n=h.length;t<n;t++)f=h[t],g?v&&d.texSubImage2D(e.TEXTURE_2D,t,0,0,c,l,f):d.texImage2D(e.TEXTURE_2D,t,u,c,l,f);n.generateMipmaps=!1}else if(g){if(_){let n=Le(t);d.texStorage2D(e.TEXTURE_2D,y,u,n.width,n.height)}v&&d.texSubImage2D(e.TEXTURE_2D,0,0,0,c,l,t)}else d.texImage2D(e.TEXTURE_2D,0,u,c,l,t);E(n)&&O(i),s.__version=o.version,n.onUpdate&&n.onUpdate(n)}t.__version=n.version}function Ce(t,n,r){if(n.image.length!==6)return;let i=ye(t,n),a=n.source;d.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+r);let o=f.get(a);if(a.version!==o.__version||i===!0){d.activeTexture(e.TEXTURE0+r);let t=H.getPrimaries(H.workingColorSpace),s=n.colorSpace===``?null:H.getPrimaries(n.colorSpace),c=n.colorSpace===``||t===s?e.NONE:e.BROWSER_DEFAULT_WEBGL;d.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,n.flipY),d.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.premultiplyAlpha),d.pixelStorei(e.UNPACK_ALIGNMENT,n.unpackAlignment),d.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,c);let l=n.isCompressedTexture||n.image[0].isCompressedTexture,u=n.image[0]&&n.image[0].isDataTexture,f=[];for(let e=0;e<6;e++)!l&&!u?f[e]=T(n.image[e],!0,p.maxCubemapSize):f[e]=u?n.image[e].image:n.image[e],f[e]=Ie(n,f[e]);let h=f[0],g=m.convert(n.format,n.colorSpace),_=m.convert(n.type),v=k(n.internalFormat,g,_,n.normalized,n.colorSpace),y=n.isVideoTexture!==!0,b=o.__version===void 0||i===!0,x=a.dataReady,S=ne(n,h);ve(e.TEXTURE_CUBE_MAP,n);let C;if(l){y&&b&&d.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let t=0;t<6;t++){C=f[t].mipmaps;for(let r=0;r<C.length;r++){let i=C[r];n.format===1023?y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,_,i.data):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,g,_,i.data):g===null?I(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&d.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,i.data):d.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,i.data)}}}else{if(C=n.mipmaps,y&&b){C.length>0&&S++;let t=Le(f[0]);d.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,t.width,t.height)}for(let t=0;t<6;t++)if(u){y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,f[t].width,f[t].height,g,_,f[t].data):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,f[t].width,f[t].height,0,g,_,f[t].data);for(let n=0;n<C.length;n++){let r=C[n].image[t].image;y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,0,0,r.width,r.height,g,_,r.data):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,v,r.width,r.height,0,g,_,r.data)}}else{y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,f[t]):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,g,_,f[t]);for(let n=0;n<C.length;n++){let r=C[n];y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,0,0,g,_,r.image[t]):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,v,g,_,r.image[t])}}}E(n)&&O(e.TEXTURE_CUBE_MAP),o.__version=a.version,n.onUpdate&&n.onUpdate(n)}t.__version=n.version}function we(t,n,r,i,a,o){let s=m.convert(r.format,r.colorSpace),c=m.convert(r.type),l=k(r.internalFormat,s,c,r.normalized,r.colorSpace),u=f.get(n),p=f.get(r);if(p.__renderTarget=n,!u.__hasExternalTextures){let t=Math.max(1,n.width>>o),r=Math.max(1,n.height>>o);a===e.TEXTURE_3D||a===e.TEXTURE_2D_ARRAY?d.texImage3D(a,o,l,t,r,n.depth,0,s,c,null):d.texImage2D(a,o,l,t,r,0,s,c,null)}d.bindFramebuffer(e.FRAMEBUFFER,t),Fe(n)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,i,a,p.__webglTexture,0,Pe(n)):(a===e.TEXTURE_2D||a>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&a<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,i,a,p.__webglTexture,o),d.bindFramebuffer(e.FRAMEBUFFER,null)}function Te(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=te(n.stencilBuffer,a),s=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Fe(n)?g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Pe(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Pe(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,s,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let a=t[i],o=m.convert(a.format,a.colorSpace),s=m.convert(a.type),c=k(a.internalFormat,o,s,a.normalized,a.colorSpace);Fe(n)?g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Pe(n),c,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Pe(n),c,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,c,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Ee(t,n,r){let i=n.isWebGLCubeRenderTarget===!0;if(d.bindFramebuffer(e.FRAMEBUFFER,t),!(n.depthTexture&&n.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let a=f.get(n.depthTexture);if(a.__renderTarget=n,(!a.__webglTexture||n.depthTexture.image.width!==n.width||n.depthTexture.image.height!==n.height)&&(n.depthTexture.image.width=n.width,n.depthTexture.image.height=n.height,n.depthTexture.needsUpdate=!0),i){if(a.__webglInit===void 0&&(a.__webglInit=!0,n.depthTexture.addEventListener(`dispose`,re)),a.__webglTexture===void 0){a.__webglTexture=e.createTexture(),d.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture),ve(e.TEXTURE_CUBE_MAP,n.depthTexture);let t=m.convert(n.depthTexture.format),r=m.convert(n.depthTexture.type),i;n.depthTexture.format===1026?i=e.DEPTH_COMPONENT24:n.depthTexture.format===1027&&(i=e.DEPTH24_STENCIL8);for(let a=0;a<6;a++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+a,0,i,n.width,n.height,0,t,r,null)}}else M(n.depthTexture,0);let o=a.__webglTexture,s=Pe(n),c=i?e.TEXTURE_CUBE_MAP_POSITIVE_X+r:e.TEXTURE_2D,l=n.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(n.depthTexture.format===1026)Fe(n)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,l,c,o,0,s):e.framebufferTexture2D(e.FRAMEBUFFER,l,c,o,0);else if(n.depthTexture.format===1027)Fe(n)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,l,c,o,0,s):e.framebufferTexture2D(e.FRAMEBUFFER,l,c,o,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function De(t){let n=f.get(t),r=t.isWebGLCubeRenderTarget===!0;if(n.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(n.__depthDisposeCallback&&n.__depthDisposeCallback(),e){let t=()=>{delete n.__boundDepthTexture,delete n.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),n.__depthDisposeCallback=t}n.__boundDepthTexture=e}if(t.depthTexture&&!n.__autoAllocateDepthBuffer){if(r)for(let e=0;e<6;e++)Ee(n.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?Ee(n.__webglFramebuffer[0],t,0):Ee(n.__webglFramebuffer,t,0)}}else if(r){n.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(d.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer[r]),n.__webglDepthbuffer[r]===void 0)n.__webglDepthbuffer[r]=e.createRenderbuffer(),Te(n.__webglDepthbuffer[r],t,!1);else{let i=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=n.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,i,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?d.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer[0]):d.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer),n.__webglDepthbuffer===void 0)n.__webglDepthbuffer=e.createRenderbuffer(),Te(n.__webglDepthbuffer,t,!1);else{let r=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,i=n.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,i),e.framebufferRenderbuffer(e.FRAMEBUFFER,r,e.RENDERBUFFER,i)}}d.bindFramebuffer(e.FRAMEBUFFER,null)}function Oe(t,n,r){let i=f.get(t);n!==void 0&&we(i.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),r!==void 0&&De(t)}function ke(t){let n=t.texture,r=f.get(t),i=f.get(n);t.addEventListener(`dispose`,A);let a=t.textures,o=t.isWebGLCubeRenderTarget===!0,s=a.length>1;if(s||(i.__webglTexture===void 0&&(i.__webglTexture=e.createTexture()),i.__version=n.version,h.memory.textures++),o){r.__webglFramebuffer=[];for(let t=0;t<6;t++)if(n.mipmaps&&n.mipmaps.length>0){r.__webglFramebuffer[t]=[];for(let i=0;i<n.mipmaps.length;i++)r.__webglFramebuffer[t][i]=e.createFramebuffer()}else r.__webglFramebuffer[t]=e.createFramebuffer()}else{if(n.mipmaps&&n.mipmaps.length>0){r.__webglFramebuffer=[];for(let t=0;t<n.mipmaps.length;t++)r.__webglFramebuffer[t]=e.createFramebuffer()}else r.__webglFramebuffer=e.createFramebuffer();if(s)for(let t=0,n=a.length;t<n;t++){let n=f.get(a[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),h.memory.textures++)}if(t.samples>0&&Fe(t)===!1){r.__webglMultisampledFramebuffer=e.createFramebuffer(),r.__webglColorRenderbuffer=[],d.bindFramebuffer(e.FRAMEBUFFER,r.__webglMultisampledFramebuffer);for(let n=0;n<a.length;n++){let i=a[n];r.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,r.__webglColorRenderbuffer[n]);let o=m.convert(i.format,i.colorSpace),s=m.convert(i.type),c=k(i.internalFormat,o,s,i.normalized,i.colorSpace,t.isXRRenderTarget===!0),l=Pe(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,l,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,r.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(r.__webglDepthRenderbuffer=e.createRenderbuffer(),Te(r.__webglDepthRenderbuffer,t,!0)),d.bindFramebuffer(e.FRAMEBUFFER,null)}}if(o){d.bindTexture(e.TEXTURE_CUBE_MAP,i.__webglTexture),ve(e.TEXTURE_CUBE_MAP,n);for(let i=0;i<6;i++)if(n.mipmaps&&n.mipmaps.length>0)for(let a=0;a<n.mipmaps.length;a++)we(r.__webglFramebuffer[i][a],t,n,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+i,a);else we(r.__webglFramebuffer[i],t,n,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+i,0);E(n)&&O(e.TEXTURE_CUBE_MAP),d.unbindTexture()}else if(s){for(let n=0,i=a.length;n<i;n++){let i=a[n],o=f.get(i),s=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(s=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),d.bindTexture(s,o.__webglTexture),ve(s,i),we(r.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0+n,s,0),E(i)&&O(s)}d.unbindTexture()}else{let a=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(a=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),d.bindTexture(a,i.__webglTexture),ve(a,n),n.mipmaps&&n.mipmaps.length>0)for(let i=0;i<n.mipmaps.length;i++)we(r.__webglFramebuffer[i],t,n,e.COLOR_ATTACHMENT0,a,i);else we(r.__webglFramebuffer,t,n,e.COLOR_ATTACHMENT0,a,0);E(n)&&O(a),d.unbindTexture()}t.depthBuffer&&De(t)}function Ae(e){let t=e.textures;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(E(r)){let t=ee(e),n=f.get(r).__webglTexture;d.bindTexture(t,n),O(t),d.unbindTexture()}}}let je=[],Me=[];function Ne(t){if(t.samples>0){if(Fe(t)===!1){let n=t.textures,r=t.width,i=t.height,a=e.COLOR_BUFFER_BIT,o=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,s=f.get(t),c=n.length>1;if(c)for(let t=0;t<n.length;t++)d.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),d.bindFramebuffer(e.FRAMEBUFFER,s.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);d.bindFramebuffer(e.READ_FRAMEBUFFER,s.__webglMultisampledFramebuffer);let l=t.texture.mipmaps;l&&l.length>0?d.bindFramebuffer(e.DRAW_FRAMEBUFFER,s.__webglFramebuffer[0]):d.bindFramebuffer(e.DRAW_FRAMEBUFFER,s.__webglFramebuffer);for(let l=0;l<n.length;l++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(a|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(a|=e.STENCIL_BUFFER_BIT)),c){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,s.__webglColorRenderbuffer[l]);let t=f.get(n[l]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,r,i,0,0,r,i,a,e.NEAREST),_===!0&&(je.length=0,Me.length=0,je.push(e.COLOR_ATTACHMENT0+l),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&(je.push(o),Me.push(o),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Me)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,je))}if(d.bindFramebuffer(e.READ_FRAMEBUFFER,null),d.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),c)for(let t=0;t<n.length;t++){d.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,s.__webglColorRenderbuffer[t]);let r=f.get(n[t]).__webglTexture;d.bindFramebuffer(e.FRAMEBUFFER,s.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,r,0)}d.bindFramebuffer(e.DRAW_FRAMEBUFFER,s.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&_){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Pe(e){return Math.min(p.maxSamples,e.samples)}function Fe(e){let t=f.get(e);return e.samples>0&&u.has(`WEBGL_multisampled_render_to_texture`)===!0&&t.__useRenderToTexture!==!1}function N(e){let t=h.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function Ie(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(H.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&I(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):L(`WebGLTextures: Unsupported texture color space:`,n)),t}function Le(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=ue,this.resetTextureUnits=se,this.getTextureUnits=ce,this.setTextureUnits=le,this.setTexture2D=M,this.setTexture2DArray=fe,this.setTexture3D=pe,this.setTextureCube=me,this.rebindTextures=Oe,this.setupRenderTarget=ke,this.updateRenderTargetMipmap=Ae,this.updateMultisampleRenderTarget=Ne,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=we,this.useMultisampledRTT=Fe,this.isReversedDepthBuffer=function(){return d.buffers.depth.getReversed()}}function tu(e,t){function n(n,r=``){let i,a=H.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var nu=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ru=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,iu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ya(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Ra({vertexShader:nu,fragmentShader:ru,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new K(new Da(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},au=class extends at{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,d=null,f=null,p=null,m=null,g=typeof XRWebGLBinding<`u`,_=new iu,v={},y=t.getContextAttributes(),x=null,S=null,C=[],w=[],O=new z,ee=null,k=null,te=new So;te.viewport=new Yt;let ne=new So;ne.viewport=new Yt;let re=[te,ne],A=new Po,ie=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=C[e];return t===void 0&&(t=new An,C[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=C[e];return t===void 0&&(t=new An,C[e]=t),t.getGripSpace()},this.getHand=function(e){let t=C[e];return t===void 0&&(t=new An,C[e]=t),t.getHandSpace()};function ae(e){let t=w.indexOf(e.inputSource);if(t===-1)return;let n=C[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function oe(){r.removeEventListener(`select`,ae),r.removeEventListener(`selectstart`,ae),r.removeEventListener(`selectend`,ae),r.removeEventListener(`squeeze`,ae),r.removeEventListener(`squeezestart`,ae),r.removeEventListener(`squeezeend`,ae),r.removeEventListener(`end`,oe),r.removeEventListener(`inputsourceschange`,se);for(let e=0;e<C.length;e++){let t=w[e];t!==null&&(w[e]=null,C[e].disconnect(t))}ie=null,j=null,_.reset();for(let e in v)delete v[e];if(e.setRenderTarget(x),p=null,f=null,d=null,r=null,S=null,me.stop(),n.isPresenting=!1,e.setPixelRatio(ee),e.setSize(O.width,O.height,!1),k!==null){let e=k.camera;e.fov=k.fov,e.zoom=k.zoom,e.updateProjectionMatrix(),k=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&I(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&I(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return f===null?p:f},this.getBinding=function(){return d===null&&g&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(x=e.getRenderTarget(),r.addEventListener(`select`,ae),r.addEventListener(`selectstart`,ae),r.addEventListener(`selectend`,ae),r.addEventListener(`squeeze`,ae),r.addEventListener(`squeezestart`,ae),r.addEventListener(`squeezeend`,ae),r.addEventListener(`end`,oe),r.addEventListener(`inputsourceschange`,se),y.xrCompatible!==!0&&await t.makeXRCompatible(),ee=e.getPixelRatio(),e.getSize(O),g&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;y.depth&&(o=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=y.stencil?D:E,a=y.stencil?b:h);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};d=this.getBinding(),f=d.createProjectionLayer(s),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new Zt(f.textureWidth,f.textureHeight,{format:T,type:u,depthTexture:new _a(f.textureWidth,f.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let n={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:i};p=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Zt(p.framebufferWidth,p.framebufferHeight,{format:T,type:u,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),me.setContext(r),me.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function se(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=w.indexOf(n);r>=0&&(w[r]=null,C[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=w.indexOf(n);if(r===-1){for(let e=0;e<C.length;e++)if(e>=w.length){w.push(n),r=e;break}else if(w[e]===null){w[e]=n,r=e;break}if(r===-1)break}let i=C[r];i&&i.connect(n)}}let ce=new B,le=new B;function ue(e,t,n){ce.setFromMatrixPosition(t.matrixWorld),le.setFromMatrixPosition(n.matrixWorld);let r=ce.distanceTo(le),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function de(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;_.texture!==null&&(_.depthNear>0&&(t=_.depthNear),_.depthFar>0&&(n=_.depthFar)),A.near=ne.near=te.near=t,A.far=ne.far=te.far=n,(ie!==A.near||j!==A.far)&&(r.updateRenderState({depthNear:A.near,depthFar:A.far}),ie=A.near,j=A.far),A.layers.mask=e.layers.mask|6,te.layers.mask=A.layers.mask&-5,ne.layers.mask=A.layers.mask&-3;let i=e.parent,a=A.cameras;de(A,i);for(let e=0;e<a.length;e++)de(a[e],i);a.length===2?ue(A,te,ne):A.projectionMatrix.copy(te.projectionMatrix),k===null&&e.isPerspectiveCamera&&(k={camera:e,fov:e.fov,zoom:e.zoom}),M(e,A,i)};function M(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=lt*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(f!==null||p!==null)return s},this.setFoveation=function(e){s=e,f!==null&&(f.fixedFoveation=e),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=e)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(A)},this.getCameraTexture=function(e){return v[e]};let fe=null;function pe(t,i){if(l=i.getViewerPose(c||a),m=i,l!==null){let t=l.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let i=!1;t.length!==A.cameras.length&&(A.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(p!==null)a=p.getViewport(r);else{let t=d.getViewSubImage(f,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(S,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(S))}let o=re[n];o===void 0&&(o=new So,o.layers.enable(n),o.viewport=new Yt,re[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(A.matrix.copy(o.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),i===!0&&A.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&g){d=n.getBinding();let e=d.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&_.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&g){e.state.unbindTexture(),d=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=v[n];e||(e=new ya,v[n]=e);let t=d.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<C.length;e++){let t=w[e],n=C[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}fe&&fe(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),m=null}let me=new Zo;me.setAnimationLoop(pe),this.setAnimationLoop=function(e){fe=e},this.dispose=function(){}}},ou=new U,su=new V;su.set(-1,0,0,0,1,0,0,0,1);function cu(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Pa(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(ou.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(su),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function lu(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return L(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?I(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):I(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var uu=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),du=null;function fu(){return du===null&&(du=new Mi(uu,16,16,k,_),du.name=`DFG_LUT`,du.minFilter=s,du.magFilter=s,du.wrapS=n,du.wrapT=n,du.generateMipmaps=!1,du.needsUpdate=!0),du}var pu=class{constructor(e={}){let{canvas:t=Qe(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:d=`default`,failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:m=!1,outputBufferType:g=u}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);x=n.getContextAttributes().alpha}else x=a;let S=g,C=new Set([ne,te,ee]),w=new Set([u,h,p,b,v,y]),T=new Uint32Array(4),E=new Int32Array(4),D=new B,O=null,k=null,re=[],A=[],ie=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let j=this,ae=!1,oe=null,se=null,ce=null,le=null;this._outputColorSpace=Ve;let ue=0,de=0,M=null,fe=-1,pe=null,me=new Yt,he=new Yt,ge=null,_e=new W(0),ve=0,ye=t.width,be=t.height,xe=1,Se=null,Ce=null,we=new Yt(0,0,ye,be),Te=new Yt(0,0,ye,be),Ee=!1,De=new Ji,Oe=!1,ke=!1,Ae=new U,je=new B,Me=new Yt,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Pe=!1;function Fe(){return M===null?xe:1}let N=n;function Ie(e,n){return t.getContext(e,n)}let Le,Re,P,ze,F,Be,He,Ue,We,Ge,Ke,qe,Ye,Xe,Ze,$e,tt,nt,it,at,ot,st,ct;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,R,!1),t.addEventListener(`webglcontextrestored`,dt,!1),t.addEventListener(`webglcontextcreationerror`,ft,!1),N===null){let t=`webgl2`;if(N=Ie(t,e),N===null)throw Ie(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}lt()}catch(e){throw t.removeEventListener(`webglcontextlost`,R,!1),t.removeEventListener(`webglcontextrestored`,dt,!1),t.removeEventListener(`webglcontextcreationerror`,ft,!1),L(`WebGLRenderer: `+e.message),e}function lt(){Le=new js(N),Le.init(),ot=new tu(N,Le),Re=new os(N,Le,e,ot),P=new $l(N,Le),Re.reversedDepthBuffer&&m&&P.buffers.depth.setReversed(!0),se=N.createFramebuffer(),ce=N.createFramebuffer(),le=N.createFramebuffer(),ze=new Ps(N),F=new Nl,Be=new eu(N,Le,P,F,Re,ot,ze),He=new As(j),Ue=new Qo(N),st=new is(N,Ue),We=new Ms(N,Ue,ze,st),Ge=new Is(N,We,Ue,st,ze),nt=new Fs(N,Re,Be),Ze=new ss(F),Ke=new Ml(j,He,Le,Re,st,Ze),qe=new cu(j,F),Ye=new Ll,Xe=new Wl(Le),tt=new rs(j,He,P,Ge,x,s),$e=new Ql(j,Ge,Re),ct=new lu(N,ze,Re,P),it=new as(N,Le,ze),at=new Ns(N,Le,ze),ze.programs=Ke.programs,j.capabilities=Re,j.extensions=Le,j.properties=F,j.renderLists=Ye,j.shadowMap=$e,j.state=P,j.info=ze}S!==1009&&(ie=new Rs(S,t.width,t.height,o,r,i));let ut=new au(j,N);this.xr=ut,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let e=Le.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Le.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return xe},this.setPixelRatio=function(e){e!==void 0&&(xe=e,this.setSize(ye,be,!1))},this.getSize=function(e){return e.set(ye,be)},this.setSize=function(e,n,r=!0){if(ut.isPresenting){I(`WebGLRenderer: Can't change size while VR device is presenting.`);return}ye=e,be=n,t.width=Math.floor(e*xe),t.height=Math.floor(n*xe),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),ie!==null&&ie.setSize(t.width,t.height),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e.set(ye*xe,be*xe).floor()},this.setDrawingBufferSize=function(e,n,r){ye=e,be=n,xe=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(S===1009){L(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);return}if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){I(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}ie.setEffects(e||[])},this.getCurrentViewport=function(e){return e.copy(me)},this.getViewport=function(e){return e.copy(we)},this.setViewport=function(e,t,n,r){e.isVector4?we.set(e.x,e.y,e.z,e.w):we.set(e,t,n,r),P.viewport(me.copy(we).multiplyScalar(xe).round())},this.getScissor=function(e){return e.copy(Te)},this.setScissor=function(e,t,n,r){e.isVector4?Te.set(e.x,e.y,e.z,e.w):Te.set(e,t,n,r),P.scissor(he.copy(Te).multiplyScalar(xe).round())},this.getScissorTest=function(){return Ee},this.setScissorTest=function(e){P.setScissorTest(Ee=e)},this.setOpaqueSort=function(e){Se=e},this.setTransparentSort=function(e){Ce=e},this.getClearColor=function(e){return e.copy(tt.getClearColor())},this.setClearColor=function(){tt.setClearColor(...arguments)},this.getClearAlpha=function(){return tt.getClearAlpha()},this.setClearAlpha=function(){tt.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(M!==null){let t=M.texture.format;e=C.has(t)}if(e){let e=M.texture.type,t=w.has(e),n=tt.getClearColor(),r=tt.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(T[0]=i,T[1]=a,T[2]=o,T[3]=r,N.clearBufferuiv(N.COLOR,0,T)):(E[0]=i,E[1]=a,E[2]=o,E[3]=r,N.clearBufferiv(N.COLOR,0,E))}else r|=N.COLOR_BUFFER_BIT}t&&(r|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&N.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),oe=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,R,!1),t.removeEventListener(`webglcontextrestored`,dt,!1),t.removeEventListener(`webglcontextcreationerror`,ft,!1),tt.dispose(),Ye.dispose(),Xe.dispose(),F.dispose(),He.dispose(),Ge.dispose(),st.dispose(),ct.dispose(),Ke.dispose(),ut.dispose(),ut.removeEventListener(`sessionstart`,yt),ut.removeEventListener(`sessionend`,bt),xt.stop()};function R(e){e.preventDefault(),et(`WebGLRenderer: Context Lost.`),ae=!0}function dt(){et(`WebGLRenderer: Context Restored.`),ae=!1;let e=ze.autoReset,t=$e.enabled,n=$e.autoUpdate,r=$e.needsUpdate,i=$e.type;lt(),ze.autoReset=e,$e.enabled=t,$e.autoUpdate=n,$e.needsUpdate=r,$e.type=i}function ft(e){L(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function pt(e){let t=e.target;t.removeEventListener(`dispose`,pt),mt(t)}function mt(e){ht(e),F.remove(e)}function ht(e){let t=F.get(e).programs;t!==void 0&&(t.forEach(function(e){Ke.releaseProgram(e)}),e.isShaderMaterial&&Ke.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Ne);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=jt(e,t,n,r,i);P.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=We.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;st.setup(i,r,s,n,c);let h,g=it;if(c!==null&&(h=Ue.get(c),g=at,g.setIndex(h)),i.isMesh)r.wireframe===!0?(P.setLineWidth(r.wireframeLinewidth*Fe()),g.setMode(N.LINES)):g.setMode(N.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),P.setLineWidth(e*Fe()),i.isLineSegments?g.setMode(N.LINES):i.isLineLoop?g.setMode(N.LINE_LOOP):g.setMode(N.LINE_STRIP)}else i.isPoints?g.setMode(N.POINTS):i.isSprite&&g.setMode(N.TRIANGLES);if(i.isBatchedMesh){if(Le.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Ue.get(c).bytesPerElement:1,o=F.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(N,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function gt(e,t,n,r){oe!==null&&e.isNodeMaterial&&oe.setObject(r,e),Oe===!0&&Ze.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,Dt(e,t,r),e.side=0,e.needsUpdate=!0,Dt(e,t,r),e.side=2):Dt(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),oe!==null&&oe.renderStart(e,t,n),k=Xe.get(n),k.init(t),A.push(k),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(k.pushLight(e),e.castShadow&&k.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(k.pushLight(e),e.castShadow&&k.pushShadow(e))}),k.setupLights(),oe!==null&&oe.updateLights(k.state.lightsArray),ke=this.localClippingEnabled,Oe=Ze.init(this.clippingPlanes,ke),Oe===!0&&Ze.setGlobalState(this.clippingPlanes,t),oe!==null&&$e.render(k.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];gt(o,n,t,e),r.add(o)}else gt(i,n,t,e),r.add(i)}}),k=A.pop(),oe!==null&&oe.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){let t=F.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}Le.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let _t=null;function vt(e){_t&&_t(e)}function yt(){xt.stop()}function bt(){xt.start()}let xt=new Zo;xt.setAnimationLoop(vt),typeof self<`u`&&xt.setContext(self),this.setAnimationLoop=function(e){_t=e,ut.setAnimationLoop(e),e===null?xt.stop():xt.start()},ut.addEventListener(`sessionstart`,yt),ut.addEventListener(`sessionend`,bt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){L(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(ae===!0)return;oe!==null&&oe.renderStart(e,t);let n=ut.enabled===!0&&ut.isPresenting===!0,r=ie!==null&&(M===null||n)&&ie.begin(j,M);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(ie===null||ie.isCompositing()===!1)&&(ut.cameraAutoUpdate===!0&&ut.updateCamera(t),t=ut.getCamera()),e.isScene===!0&&e.onBeforeRender(j,e,t,M),k=Xe.get(e,A.length),k.init(t),k.state.textureUnits=Be.getTextureUnits(),A.push(k),Ae.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),De.setFromProjectionMatrix(Ae,Je,t.reversedDepth),ke=this.localClippingEnabled,Oe=Ze.init(this.clippingPlanes,ke),O=Ye.get(e,re.length),O.init(),re.push(O),ut.enabled===!0&&ut.isPresenting===!0){let e=j.xr.getDepthSensingMesh();e!==null&&St(e,t,-1/0,j.sortObjects)}St(e,t,0,j.sortObjects),O.finish(),oe!==null&&oe.updateLights(k.state.lightsArray),j.sortObjects===!0&&O.sort(Se,Ce),Pe=ut.enabled===!1||ut.isPresenting===!1||ut.hasDepthSensing()===!1,Pe&&tt.addToRenderList(O,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Oe===!0&&Ze.beginShadows();let i=k.state.shadowsArray;if($e.render(i,e,t),Oe===!0&&Ze.endShadows(),(r&&ie.hasRenderPass())===!1){let n=O.opaque,r=O.transmissive;if(k.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];wt(n,r,e,a)}Pe&&tt.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];Ct(O,e,n,n.viewport)}}else r.length>0&&wt(n,r,e,t),Pe&&tt.render(e),Ct(O,e,t)}M!==null&&de===0&&(Be.updateMultisampleRenderTarget(M),Be.updateRenderTargetMipmap(M)),r&&ie.end(j),e.isScene===!0&&e.onAfterRender(j,e,t),st.resetDefaultState(),fe=-1,pe=null,A.pop(),A.length>0?(k=A[A.length-1],Be.setTextureUnits(k.state.textureUnits),Oe===!0&&Ze.setGlobalState(j.clippingPlanes,k.state.camera)):k=null,re.pop(),O=re.length>0?re[re.length-1]:null,oe!==null&&oe.renderEnd()};function St(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)k.pushLightProbeGrid(e);else if(e.isLight)k.pushLight(e),e.castShadow&&k.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(De)){r&&Me.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Ae);let i=Ge.update(e),a=e.material;a.visible&&O.push(e,i,a,n,Me.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(De))){let i=Ge.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),Me.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Me.copy(e.boundingSphere.center)),Me.applyMatrix4(e.matrixWorld).applyMatrix4(Ae)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&O.push(e,i,c,n,Me.z,s,t)}}else a.visible&&O.push(e,i,a,n,Me.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)St(i[e],t,n,r)}function Ct(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;k.setupLightsView(n),Oe===!0&&Ze.setGlobalState(j.clippingPlanes,n),r&&P.viewport(me.copy(r)),i.length>0&&Tt(i,t,n),a.length>0&&Tt(a,t,n),o.length>0&&Tt(o,t,n),P.buffers.depth.setTest(!0),P.buffers.depth.setMask(!0),P.buffers.color.setMask(!0),P.setPolygonOffset(!1)}function wt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(k.state.transmissionRenderTarget[r.id]===void 0){let e=Le.has(`EXT_color_buffer_half_float`)||Le.has(`EXT_color_buffer_float`);k.state.transmissionRenderTarget[r.id]=new Zt(1,1,{generateMipmaps:!0,type:e?_:u,minFilter:l,samples:Math.max(4,Re.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:H.workingColorSpace})}let a=k.state.transmissionRenderTarget[r.id],o=r.viewport||me;a.setSize(o.z*j.transmissionResolutionScale,o.w*j.transmissionResolutionScale);let s=j.getRenderTarget(),c=j.getActiveCubeFace(),d=j.getActiveMipmapLevel();j.setRenderTarget(a),j.getClearColor(_e),ve=j.getClearAlpha(),ve<1&&j.setClearColor(16777215,.5),j.clear(),Pe&&tt.render(n);let f=j.toneMapping;j.toneMapping=0;let p=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),k.setupLightsView(r),Oe===!0&&Ze.setGlobalState(j.clippingPlanes,r),Tt(e,n,r),Be.updateMultisampleRenderTarget(a),Be.updateRenderTargetMipmap(a),Le.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,Et(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(Be.updateMultisampleRenderTarget(a),Be.updateRenderTargetMipmap(a))}j.setRenderTarget(s,c,d),j.setClearColor(_e,ve),p!==void 0&&(r.viewport=p),j.toneMapping=f}function Tt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&Et(o,t,n,s,l,c)}}function Et(e,t,n,r,i,a){oe!==null&&i.isNodeMaterial&&oe.setObject(e,i),e.onBeforeRender(j,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(j,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,j.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,j.renderBufferDirect(n,t,r,i,e,a),i.side=2):j.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(j,t,n,r,i,a)}function Dt(e,t,n){t.isScene!==!0&&(t=Ne);let r=F.get(e),i=k.state.lights,a=k.state.shadowsArray,o=i.state.version,s=Ke.getParameters(e,i.state,a,t,n,k.state.lightProbeGridArray),c=Ke.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=He.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,pt),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return kt(e,s),d}else s.uniforms=Ke.getUniforms(e),oe!==null&&e.isNodeMaterial&&oe.build(e,n,s),e.onBeforeCompile(s,j),d=Ke.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Ze.uniform),kt(e,s),r.needsLights=Mt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=k.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function Ot(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Gc.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function kt(e,t){let n=F.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function At(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];D.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(D))return n}return null}function jt(e,t,n,r,i){t.isScene!==!0&&(t=Ne),Be.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=M===null?j.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:H.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=He.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(h=j.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=F.get(r),y=k.state.lights;if(Oe===!0&&(ke===!0||e!==pe)){let t=e===pe&&r.id===fe;Ze.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Ze.numPlanes||v.numIntersection!==Ze.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=k.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let x=v.currentProgram;b===!0&&(x=Dt(r,t,i),oe&&r.isNodeMaterial&&oe.onUpdateProgram(r,x,v));let S=!1,C=!1,w=!1,T=x.getUniforms(),E=v.uniforms;if(P.useProgram(x.program)&&(S=!0,C=!0,w=!0),r.id!==fe&&(fe=r.id,C=!0),v.needsLights){let e=At(k.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,C=!0)}if(S||pe!==e){P.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),T.setValue(N,`projectionMatrix`,e.projectionMatrix),T.setValue(N,`viewMatrix`,e.matrixWorldInverse);let t=T.map.cameraPosition;t!==void 0&&t.setValue(N,je.setFromMatrixPosition(e.matrixWorld)),Re.logarithmicDepthBuffer&&T.setValue(N,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&T.setValue(N,`isOrthographic`,e.isOrthographicCamera===!0),pe!==e&&(pe=e,C=!0,w=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&T.setValue(N,`sunShadowMap`,y.state.sunShadowMap,Be),y.state.directionalShadowMap.length>0&&T.setValue(N,`directionalShadowMap`,y.state.directionalShadowMap,Be),y.state.spotShadowMap.length>0&&T.setValue(N,`spotShadowMap`,y.state.spotShadowMap,Be),y.state.pointShadowMap.length>0&&T.setValue(N,`pointShadowMap`,y.state.pointShadowMap,Be)),i.isSkinnedMesh){T.setOptional(N,i,`bindMatrix`),T.setOptional(N,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),T.setValue(N,`boneTexture`,e.boneTexture,Be))}i.isBatchedMesh&&(T.setOptional(N,i,`batchingTexture`),T.setValue(N,`batchingTexture`,i._matricesTexture,Be),T.setOptional(N,i,`batchingIdTexture`),T.setValue(N,`batchingIdTexture`,i._indirectTexture,Be),T.setOptional(N,i,`batchingColorTexture`),i._colorsTexture!==null&&T.setValue(N,`batchingColorTexture`,i._colorsTexture,Be));let D=n.morphAttributes;if((D.position!==void 0||D.normal!==void 0||D.color!==void 0)&&nt.update(i,n,x),(C||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,T.setValue(N,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(E.envMapIntensity.value=t.environmentIntensity),E.dfgLUT!==void 0&&(E.dfgLUT.value=fu()),C){if(T.setValue(N,`toneMappingExposure`,j.toneMappingExposure),v.needsLights&&z(E,w),a&&r.fog===!0&&qe.refreshFogUniforms(E,a),qe.refreshMaterialUniforms(E,r,xe,be,k.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;E.probesSH.value=e.texture,E.probesMin.value.copy(e.boundingBox.min),E.probesMax.value.copy(e.boundingBox.max),E.probesResolution.value.copy(e.resolution)}Gc.upload(N,Ot(v),E,Be)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Gc.upload(N,Ot(v),E,Be),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&T.setValue(N,`center`,i.center),T.setValue(N,`modelViewMatrix`,i.modelViewMatrix),T.setValue(N,`normalMatrix`,i.normalMatrix),T.setValue(N,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];ct.update(n,x),ct.bind(n,x)}}return x}function z(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function Mt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return ue},this.getActiveMipmapLevel=function(){return de},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(e,t,n){let r=F.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),F.get(e.texture).__webglTexture=t,F.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=F.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){M=e,ue=t,de=n;let r=null,i=!1,a=!1;if(e){let o=F.get(e);if(o.__useDefaultFramebuffer!==void 0){P.bindFramebuffer(N.FRAMEBUFFER,o.__webglFramebuffer),me.copy(e.viewport),he.copy(e.scissor),ge=e.scissorTest,P.viewport(me),P.scissor(he),P.setScissorTest(ge),fe=-1;return}if(o.__webglFramebuffer===void 0)Be.setupRenderTarget(e);else if(o.__hasExternalTextures)Be.rebindTextures(e,F.get(e.texture).__webglTexture,F.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&F.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);Be.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=F.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&Be.useMultisampledRTT(e)===!1?F.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,me.copy(e.viewport),he.copy(e.scissor),ge=e.scissorTest}else me.copy(we).multiplyScalar(xe).floor(),he.copy(Te).multiplyScalar(xe).floor(),ge=Ee;if(n!==0&&(r=se),P.bindFramebuffer(N.FRAMEBUFFER,r)&&P.drawBuffers(e,r),P.viewport(me),P.scissor(he),P.setScissorTest(ge),i){let r=F.get(e.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=F.get(e.textures[t]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=F.get(e.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,t.__webglTexture,n)}fe=-1};function Nt(e){let t=F.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Re.textureFormatReadable(e.format),t.__typeReadable=Re.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){L(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=F.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){P.bindFramebuffer(N.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+s);let u=Nt(o);if(u.__formatReadable===!1){L(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){L(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&N.readPixels(t,n,r,i,ot.convert(c),ot.convert(l),a)}finally{let e=M===null?null:F.get(M).__webglFramebuffer;P.bindFramebuffer(N.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=F.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){P.bindFramebuffer(N.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+s);let d=Nt(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,f),N.bufferData(N.PIXEL_PACK_BUFFER,a.byteLength,N.STREAM_READ),N.readPixels(t,n,r,i,ot.convert(l),ot.convert(u),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);let p=M===null?null:F.get(M).__webglFramebuffer;P.bindFramebuffer(N.FRAMEBUFFER,p);let m=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await rt(N,m,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,f),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,a),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(f),N.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;Be.setTexture2D(e,0),N.copyTexSubImage2D(N.TEXTURE_2D,n,0,0,o,s,i,a),P.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=ot.convert(t.format),_=ot.convert(t.type),v;t.isData3DTexture?(Be.setTexture3D(t,0),v=N.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(Be.setTexture2DArray(t,0),v=N.TEXTURE_2D_ARRAY):(Be.setTexture2D(t,0),v=N.TEXTURE_2D),P.activeTexture(N.TEXTURE0),P.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,t.flipY),P.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),P.pixelStorei(N.UNPACK_ALIGNMENT,t.unpackAlignment);let y=P.getParameter(N.UNPACK_ROW_LENGTH),b=P.getParameter(N.UNPACK_IMAGE_HEIGHT),x=P.getParameter(N.UNPACK_SKIP_PIXELS),S=P.getParameter(N.UNPACK_SKIP_ROWS),C=P.getParameter(N.UNPACK_SKIP_IMAGES);P.pixelStorei(N.UNPACK_ROW_LENGTH,h.width),P.pixelStorei(N.UNPACK_IMAGE_HEIGHT,h.height),P.pixelStorei(N.UNPACK_SKIP_PIXELS,l),P.pixelStorei(N.UNPACK_SKIP_ROWS,u),P.pixelStorei(N.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=F.get(e),r=F.get(t),h=F.get(n.__renderTarget),g=F.get(r.__renderTarget);P.bindFramebuffer(N.READ_FRAMEBUFFER,h.__webglFramebuffer),P.bindFramebuffer(N.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,F.get(e).__webglTexture,i,d+n),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,F.get(t).__webglTexture,a,m+n)),N.blitFramebuffer(l,u,o,s,f,p,o,s,N.DEPTH_BUFFER_BIT,N.NEAREST);P.bindFramebuffer(N.READ_FRAMEBUFFER,null),P.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||F.has(e)){let n=F.get(e),r=F.get(t);P.bindFramebuffer(N.READ_FRAMEBUFFER,ce),P.bindFramebuffer(N.DRAW_FRAMEBUFFER,le);for(let e=0;e<c;e++)w?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,n.__webglTexture,i),T?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,r.__webglTexture,a),i===0?T?N.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):N.copyTexSubImage2D(v,a,f,p,l,u,o,s):N.blitFramebuffer(l,u,o,s,f,p,o,s,N.COLOR_BUFFER_BIT,N.NEAREST);P.bindFramebuffer(N.READ_FRAMEBUFFER,null),P.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?N.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?N.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):N.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):N.texSubImage2D(N.TEXTURE_2D,a,f,p,o,s,g,_,h);P.pixelStorei(N.UNPACK_ROW_LENGTH,y),P.pixelStorei(N.UNPACK_IMAGE_HEIGHT,b),P.pixelStorei(N.UNPACK_SKIP_PIXELS,x),P.pixelStorei(N.UNPACK_SKIP_ROWS,S),P.pixelStorei(N.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&N.generateMipmap(v),P.unbindTexture()},this.initRenderTarget=function(e){F.get(e).__webglFramebuffer===void 0&&Be.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?Be.setTextureCube(e,0):e.isData3DTexture?Be.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?Be.setTexture2DArray(e,0):Be.setTexture2D(e,0),P.unbindTexture()},this.resetState=function(){ue=0,de=0,M=null,P.reset(),st.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Je}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=H._getDrawingBufferColorSpace(e),t.unpackColorSpace=H._getUnpackColorSpace()}},mu=1/60,hu=.1,gu={minX:-70,maxX:70,minZ:-110,maxZ:100,gravity:17},X={radius:.3,standHeight:1.75,crouchHeight:1.1,eyeOffset:.12,walkSpeed:4.6,sprintSpeed:7.1,crouchSpeed:2.3,adsSpeed:2.9,groundAccel:55,airAccel:9,friction:10,jumpVelocity:5.4,stepHeight:.45,maxHealth:100,healthRegenDelay:4.5,healthRegenRate:22,maxStamina:100,staminaDrain:17,staminaRegen:26,staminaRegenDelay:1,staminaMinToSprint:22,plateArmor:50,maxArmorPlates:3,maxPlateInventory:5,plateApplyTime:1.25,maxGrenades:4,startPlatesInVest:2,startPlateInventory:2,startGrenades:2,startCash:500},_u={rifle:{id:`rifle`,name:`KR-7 KESTREL`,shortName:`KESTREL`,auto:!0,damage:32,headMult:2.2,pellets:1,rpm:720,magSize:30,reserveMax:210,startReserve:150,reloadTime:2.1,hipSpread:2.4,adsSpread:.35,moveSpread:1.8,rangeNear:30,rangeFar:75,minDamageMult:.65,recoilPitch:.55,recoilYaw:.28,recoilRecover:9,adsTime:.22,adsZoom:.72,switchTime:.45,cost:0},pistol:{id:`pistol`,name:`P-19 WARDEN`,shortName:`WARDEN`,auto:!1,damage:44,headMult:2.4,pellets:1,rpm:420,magSize:12,reserveMax:96,startReserve:60,reloadTime:1.35,hipSpread:1.5,adsSpread:.4,moveSpread:1,rangeNear:18,rangeFar:45,minDamageMult:.6,recoilPitch:1.3,recoilYaw:.35,recoilRecover:12,adsTime:.15,adsZoom:.82,switchTime:.3,cost:0},shotgun:{id:`shotgun`,name:`HB-12 HULLBREAKER`,shortName:`HULLBREAKER`,auto:!1,damage:21,headMult:1.6,pellets:9,rpm:72,magSize:6,reserveMax:42,startReserve:30,reloadTime:0,shellReload:{start:.35,perShell:.48,end:.4},hipSpread:5.2,adsSpread:3.6,moveSpread:.8,rangeNear:7,rangeFar:22,minDamageMult:.3,recoilPitch:4.2,recoilYaw:.8,recoilRecover:14,adsTime:.26,adsZoom:.85,switchTime:.5,cost:1500}},vu=[{name:`STOCK`,damageMult:1,magMult:1,reloadMult:1,rpmMult:1,spreadMult:1,cost:0},{name:`TIER I`,damageMult:1.65,magMult:1.25,reloadMult:.85,rpmMult:1.08,spreadMult:.85,cost:2500},{name:`TIER II`,damageMult:2.5,magMult:1.5,reloadMult:.7,rpmMult:1.15,spreadMult:.7,cost:5e3}],yu={shambler:{hp:110,speed:[1.35,2],damage:20,attackRange:1.45,windup:.5,attackCooldown:1.2,reward:40,scale:1,helmetHp:0,bodyArmorMult:1,staggerThreshold:60},runner:{hp:85,speed:[4.3,5.1],damage:14,attackRange:1.4,windup:.34,attackCooldown:.95,reward:55,scale:.97,helmetHp:0,bodyArmorMult:1,staggerThreshold:50},armored:{hp:300,speed:[1.8,2.2],damage:30,attackRange:1.55,windup:.6,attackCooldown:1.4,reward:130,scale:1.08,helmetHp:140,bodyArmorMult:.55,staggerThreshold:140},elite:{hp:3400,speed:[2.7,2.9],damage:42,attackRange:2.3,windup:.8,attackCooldown:1.7,reward:0,scale:1.4,helmetHp:400,bodyArmorMult:.7,staggerThreshold:99999}},bu={low:{id:`low`,label:`CHECKPOINT DISTRICT`,threat:`LOW THREAT`,hpMult:1,damageMult:1,rewardMult:1,maxAlive:10,spawnInterval:3.2,weights:{shambler:.82,runner:.18,armored:0},initialPopulation:7,color:`#8fb573`},medium:{id:`medium`,label:`KESSLER FREIGHT DEPOT`,threat:`MEDIUM THREAT`,hpMult:1.35,damageMult:1.25,rewardMult:1.6,maxAlive:18,spawnInterval:1.9,weights:{shambler:.52,runner:.36,armored:.12},initialPopulation:11,color:`#d8a64a`},high:{id:`high`,label:`HALCYON RESEARCH COMPOUND`,threat:`HIGH THREAT`,hpMult:1.8,damageMult:1.5,rewardMult:2.4,maxAlive:26,spawnInterval:1.15,weights:{shambler:.3,runner:.42,armored:.28},initialPopulation:13,color:`#d0473c`}},xu={lowMinZ:50,mediumMinZ:-26};function Su(e){return e>xu.lowMinZ?`low`:e>xu.mediumMinZ?`medium`:`high`}var Cu={globalCap:38,hordeCap:28,spawnMinDist:22,spawnMaxDist:58,corpseLifetime:7,maxCorpses:14,separationRadius:.75,sightRange:26,hearingRange:48,flowFieldInterval:.2,losCheckInterval:.3,ammoDropChance:.07,headshotBonus:20},wu={ammoCost:400,plateCost:250,grenadeCost:250,shotgunCost:_u.shotgun.cost,plateOverflowCash:100},Tu={deadline:900,finalPhaseWindow:330,forcedFinalPhaseAt:600,defenseHoldTime:60,defenseRadius:9,defenseDecay:.004,defenseReward:1500,huntReward:2e3,extractionCountdown:75,heliVisibleAt:28,boardRadius:3.2,radioRadius:2.6,contaminationDps:9,contaminationStartRadius:22},Eu={fuse:2.4,throwSpeed:14,radius:7.5,maxDamage:380,playerDamageMult:.35,bounce:.38},Du={maxDecals:90,maxParticles:900,maxTracers:24,maxAudioVoices:36},Ou=class{ctx=null;master;sfx;amb;noiseBuf;brownBuf;voices=0;listener={x:0,y:0,z:0,yaw:0};heli=null;ambNodes=[];heartbeatT=0;sirenT=20;volume=.8;available=!0;init(){if(this.ctx){this.ctx.state===`suspended`&&this.ctx.resume();return}try{let e=window.AudioContext||window.webkitAudioContext;if(!e){this.available=!1;return}this.ctx=new e}catch{this.available=!1;return}let e=this.ctx,t=e.createDynamicsCompressor();t.threshold.value=-14,t.knee.value=10,t.ratio.value=5,t.attack.value=.003,t.release.value=.2,t.connect(e.destination),this.master=e.createGain(),this.master.gain.value=this.volume,this.master.connect(t),this.sfx=e.createGain(),this.sfx.connect(this.master),this.amb=e.createGain(),this.amb.gain.value=.5,this.amb.connect(this.master);let n=e.sampleRate*2;this.noiseBuf=e.createBuffer(1,n,e.sampleRate);let r=this.noiseBuf.getChannelData(0);for(let e=0;e<n;e++)r[e]=Math.random()*2-1;this.brownBuf=e.createBuffer(1,n,e.sampleRate);let i=this.brownBuf.getChannelData(0),a=0;for(let e=0;e<n;e++)a=(a+.02*(Math.random()*2-1))/1.02,i[e]=a*3.5}setVolume(e){this.volume=e,this.ctx&&this.master.gain.setTargetAtTime(e,this.ctx.currentTime,.05)}suspend(){this.ctx&&this.ctx.state===`running`&&this.ctx.suspend()}resume(){this.ctx&&this.ctx.state===`suspended`&&this.ctx.resume()}setListener(e,t,n,r){this.listener.x=e,this.listener.y=t,this.listener.z=n,this.listener.yaw=r}ok(e=!1){return!(!this.ctx||this.ctx.state!==`running`||!e&&this.voices>=Du.maxAudioVoices)}out(e,t,n,r=6){let i=this.ctx,a=t,o=0;if(e){let t=e.x-this.listener.x,n=e.z-this.listener.z,i=Math.hypot(t,n);if(a*=r/Math.max(r,i),a<.01)return null;let s=Math.sin(this.listener.yaw),c=t*Math.cos(this.listener.yaw)-n*s;o=Math.max(-1,Math.min(1,i>.5?c/i:0))*.85}let s=i.createGain();s.gain.value=a;let c=i.createStereoPanner();return c.pan.value=o,s.connect(c),c.connect(this.sfx),this.voices++,window.setTimeout(()=>{this.voices--;try{c.disconnect()}catch{}},(n+.1)*1e3),s}noise(e,t,n,r){let i=this.ctx,a=i.createBufferSource();a.buffer=r.brown?this.brownBuf:this.noiseBuf;let o=i.createBiquadFilter();o.type=r.type??`bandpass`,o.frequency.setValueAtTime(r.freq,t),r.freqEnd&&o.frequency.exponentialRampToValueAtTime(Math.max(20,r.freqEnd),t+n),o.Q.value=r.q??1;let s=i.createGain(),c=r.attack??.002;s.gain.setValueAtTime(1e-4,t),s.gain.exponentialRampToValueAtTime(r.gain??1,t+c),s.gain.exponentialRampToValueAtTime(1e-4,t+n),a.connect(o),o.connect(s),s.connect(e),a.start(t,Math.random()*1.5),a.stop(t+n+.05)}tone(e,t,n,r){let i=this.ctx,a=i.createOscillator();a.type=r.type??`sine`,a.frequency.setValueAtTime(r.freq,t),r.freqEnd&&a.frequency.exponentialRampToValueAtTime(Math.max(10,r.freqEnd),t+n);let o=i.createGain();o.gain.setValueAtTime(1e-4,t),o.gain.exponentialRampToValueAtTime(r.gain??1,t+(r.attack??.004)),o.gain.exponentialRampToValueAtTime(1e-4,t+n),a.connect(o),o.connect(e),a.start(t),a.stop(t+n+.05)}shot(e,t){if(!this.ok(!0))return;let n=this.ctx.currentTime,r=.94+Math.random()*.12,i=this.out(null,.9,.8);e===`rifle`?(this.noise(i,n,.09,{type:`bandpass`,freq:2400*r,q:.7,gain:.9}),this.noise(i,n,.32,{type:`lowpass`,freq:1400*r,freqEnd:300,gain:.55}),this.tone(i,n,.11,{freq:150*r,freqEnd:45,gain:.9}),this.noise(i,n+.02,.5,{type:`lowpass`,freq:500,freqEnd:120,gain:.18,brown:!0,attack:.02})):e===`pistol`?(this.noise(i,n,.06,{type:`highpass`,freq:2200*r,gain:.8}),this.noise(i,n,.22,{type:`bandpass`,freq:1100*r,q:.8,freqEnd:400,gain:.5}),this.tone(i,n,.08,{freq:220*r,freqEnd:70,gain:.6}),this.tone(i,n+.07,.04,{type:`square`,freq:1800,gain:.04})):(this.noise(i,n,.12,{type:`bandpass`,freq:1500*r,q:.5,gain:1}),this.noise(i,n,.7,{type:`lowpass`,freq:1800*r,freqEnd:150,gain:.8}),this.tone(i,n,.25,{freq:95*r,freqEnd:32,gain:1.1}),this.noise(i,n+.03,.9,{type:`lowpass`,freq:400,freqEnd:80,gain:.3,brown:!0,attack:.03}),this.mech(n+.38,900,.3),this.mech(n+.52,700,.35)),t>0&&this.tone(i,n,.18,{type:`sawtooth`,freq:t===1?880:1320,freqEnd:t===1?440:520,gain:.05})}mech(e,t,n){let r=this.out(null,n,.2);r&&(this.noise(r,e,.05,{type:`bandpass`,freq:t,q:3,gain:1}),this.tone(r,e,.03,{type:`square`,freq:t*2.2,gain:.15}))}reloadPart(e){if(!this.ok())return;let t=this.ctx.currentTime;switch(e){case`magOut`:this.mech(t,700,.25),this.mech(t+.05,1100,.12);break;case`magIn`:this.mech(t,1300,.35),this.mech(t+.03,500,.25);break;case`bolt`:this.mech(t,1600,.35),this.mech(t+.12,900,.4);break;case`shell`:this.mech(t,1900,.2),this.mech(t+.04,600,.25);break;case`pump`:this.mech(t,900,.35),this.mech(t+.14,700,.4);break;case`slide`:this.mech(t,2e3,.3),this.mech(t+.08,1200,.35)}}empty(){if(!this.ok())return;let e=this.ctx.currentTime,t=this.out(null,.3,.1);this.tone(t,e,.03,{type:`square`,freq:2400,gain:.3}),this.noise(t,e,.03,{type:`highpass`,freq:3e3,gain:.4})}weaponSwitch(){if(!this.ok())return;let e=this.ctx.currentTime;this.mech(e,500,.2),this.mech(e+.1,1200,.15)}hitmarker(e){if(!this.ok(!0))return;let t=this.ctx.currentTime,n=this.out(null,.35,.3);e===`head`?(this.tone(n,t,.14,{type:`triangle`,freq:2600,freqEnd:2200,gain:.5}),this.tone(n,t,.1,{type:`sine`,freq:5200,gain:.15})):e===`kill`?(this.tone(n,t,.09,{type:`triangle`,freq:1500,gain:.35}),this.noise(n,t,.12,{type:`lowpass`,freq:600,gain:.5})):e===`armor`?this.tone(n,t,.12,{type:`square`,freq:3100,freqEnd:2800,gain:.12}):this.noise(n,t,.04,{type:`bandpass`,freq:3500,q:2,gain:.35})}impact(e,t){if(!this.ok())return;let n=this.ctx.currentTime,r=this.out(t,.35,.3,4);if(r)switch(e){case`metal`:this.tone(r,n,.15,{type:`triangle`,freq:1800+Math.random()*1500,freqEnd:900,gain:.25}),this.noise(r,n,.05,{type:`highpass`,freq:3e3,gain:.3});break;case`flesh`:this.noise(r,n,.08,{type:`lowpass`,freq:700,gain:.8}),this.tone(r,n,.06,{freq:120,freqEnd:60,gain:.5});break;case`wood`:this.noise(r,n,.07,{type:`bandpass`,freq:900,q:2,gain:.6});break;case`glass`:this.noise(r,n,.25,{type:`highpass`,freq:4e3,gain:.4});break;default:this.noise(r,n,.06,{type:`bandpass`,freq:1600,q:1.2,gain:.5})}}explosion(e){if(!this.ok(!0))return;let t=this.ctx.currentTime,n=this.out(e,1.3,2.2,14);if(n){this.tone(n,t,.8,{freq:70,freqEnd:22,gain:1.2}),this.noise(n,t,.25,{type:`lowpass`,freq:3e3,freqEnd:500,gain:1}),this.noise(n,t,2,{type:`lowpass`,freq:600,freqEnd:60,gain:.8,brown:!0,attack:.01});for(let e=0;e<5;e++)this.noise(n,t+.2+Math.random()*.8,.08,{type:`highpass`,freq:2500,gain:.15})}}grenadeBounce(e){if(!this.ok())return;let t=this.ctx.currentTime,n=this.out(e,.25,.2,4);n&&this.tone(n,t,.08,{type:`triangle`,freq:900+Math.random()*300,gain:.4})}grenadePin(){if(!this.ok())return;let e=this.ctx.currentTime;this.mech(e,2400,.25),this.mech(e+.15,1500,.15)}footstep(e,t,n){if(!this.ok())return;let r=this.ctx.currentTime,i=n?.08:t?.3:.2,a=this.out(null,i,.25),o=e===`metal`?2200:e===`wood`?700:e===`dirt`?500:1100;this.noise(a,r,.09,{type:`bandpass`,freq:o*(.85+Math.random()*.3),q:1.3,gain:.9}),this.noise(a,r+.02,.07,{type:`lowpass`,freq:300,gain:.6}),e===`metal`&&this.tone(a,r,.1,{type:`triangle`,freq:400+Math.random()*200,gain:.08})}land(){if(!this.ok())return;let e=this.ctx.currentTime,t=this.out(null,.35,.3);this.noise(t,e,.15,{type:`lowpass`,freq:500,gain:1}),this.mech(e+.02,800,.1)}hurt(e){if(!this.ok(!0))return;let t=this.ctx.currentTime,n=this.out(null,e?.6:.4,.4);this.noise(n,t,.18,{type:`lowpass`,freq:400,gain:1}),this.tone(n,t,.2,{freq:90,freqEnd:50,gain:.6})}armorBreak(){if(!this.ok(!0))return;let e=this.ctx.currentTime,t=this.out(null,.5,.5);this.noise(t,e,.3,{type:`highpass`,freq:2500,gain:.8}),this.tone(t,e,.35,{type:`square`,freq:700,freqEnd:180,gain:.12})}plate(e){if(!this.ok())return;let t=this.ctx.currentTime,n=this.out(null,.4,.4);e===`start`?this.noise(n,t,.2,{type:`bandpass`,freq:600,q:1.5,gain:.6}):(this.mech(t,1100,.4),this.noise(n,t,.15,{type:`bandpass`,freq:2e3,q:2,gain:.3}))}heartbeat(e,t){if(t<=0||(this.heartbeatT-=e,this.heartbeatT>0||!this.ok()))return;this.heartbeatT=.9-t*.35;let n=this.ctx.currentTime,r=this.out(null,.4*t,.5);this.tone(r,n,.12,{freq:60,freqEnd:40,gain:1}),this.tone(r,n+.18,.1,{freq:55,freqEnd:38,gain:.7})}zombieVoice(e,t,n=1){if(!this.ok(t===`elite`))return;let r=this.ctx,i=r.currentTime,a=t===`groan`?.9+Math.random()*.8:t===`scream`?.9:t===`attack`?.4:t===`elite`?1.8:.7,o=this.out(e,t===`elite`?1.1:t===`scream`?.5:.4,a,t===`elite`?12:5);if(!o)return;let s=(t===`scream`?280:t===`elite`?55:t===`attack`?170:105)*n*(.85+Math.random()*.3),c=r.createOscillator();c.type=`sawtooth`,c.frequency.setValueAtTime(s,i),t===`scream`?(c.frequency.exponentialRampToValueAtTime(s*1.6,i+.25),c.frequency.exponentialRampToValueAtTime(s*.8,i+a)):t===`death`?c.frequency.exponentialRampToValueAtTime(s*.5,i+a):c.frequency.linearRampToValueAtTime(s*(.8+Math.random()*.4),i+a);let l=r.createOscillator();l.frequency.value=5+Math.random()*6;let u=r.createGain();u.gain.value=s*.06,l.connect(u),u.connect(c.frequency);let d=r.createBiquadFilter();d.type=`bandpass`,d.frequency.value=t===`elite`?300:550+Math.random()*200,d.Q.value=5;let f=r.createBiquadFilter();f.type=`bandpass`,f.frequency.value=t===`elite`?700:1100+Math.random()*400,f.Q.value=6;let p=r.createGain();p.gain.setValueAtTime(1e-4,i),p.gain.exponentialRampToValueAtTime(1,i+.08),p.gain.setValueAtTime(1,i+a*.6),p.gain.exponentialRampToValueAtTime(1e-4,i+a),c.connect(d),c.connect(f),d.connect(p),f.connect(p),p.connect(o),c.start(i),l.start(i),c.stop(i+a+.05),l.stop(i+a+.05),this.noise(o,i,a*.8,{type:`bandpass`,freq:900,q:.7,gain:t===`attack`?.6:.25,attack:.05}),t===`elite`&&this.tone(o,i,a,{freq:38,freqEnd:30,gain:.9,attack:.1})}zombieSwipe(e){if(!this.ok())return;let t=this.ctx.currentTime,n=this.out(e,.4,.3,4);n&&this.noise(n,t,.18,{type:`bandpass`,freq:500,freqEnd:2e3,q:1,gain:.6,attack:.05})}eliteSlam(e){if(!this.ok(!0))return;let t=this.ctx.currentTime,n=this.out(e,1,1.2,10);n&&(this.tone(n,t,.6,{freq:55,freqEnd:25,gain:1}),this.noise(n,t,.8,{type:`lowpass`,freq:800,freqEnd:80,gain:.9,brown:!0}))}ui(e){if(!this.ok(!0))return;let t=this.ctx.currentTime,n=this.out(null,.35,1.6);switch(e){case`buy`:this.tone(n,t,.08,{type:`square`,freq:880,gain:.12}),this.tone(n,t+.08,.12,{type:`square`,freq:1320,gain:.12}),this.mech(t+.05,700,.3);break;case`deny`:this.tone(n,t,.12,{type:`square`,freq:180,gain:.2}),this.tone(n,t+.13,.16,{type:`square`,freq:140,gain:.2});break;case`loot`:this.mech(t,500,.4),this.noise(n,t+.05,.3,{type:`bandpass`,freq:1500,q:.8,gain:.3}),this.tone(n,t+.2,.2,{type:`triangle`,freq:1046,gain:.15});break;case`cash`:this.tone(n,t,.06,{type:`triangle`,freq:1760,gain:.08});break;case`pickup`:this.mech(t,900,.3),this.tone(n,t+.04,.1,{type:`triangle`,freq:1400,gain:.12});break;case`contract`:[523,659,784].forEach((e,r)=>this.tone(n,t+r*.12,.25,{type:`triangle`,freq:e,gain:.25}));break;case`complete`:[523,659,784,1046].forEach((e,r)=>this.tone(n,t+r*.1,.5,{type:`triangle`,freq:e,gain:.25}));break;case`alert`:for(let e=0;e<3;e++)this.tone(n,t+e*.35,.25,{type:`sawtooth`,freq:440,freqEnd:330,gain:.12});break;case`radio`:this.noise(n,t,.6,{type:`bandpass`,freq:1800,q:1.5,gain:.25});for(let e=0;e<4;e++)this.tone(n,t+.1+e*.1,.06,{type:`square`,freq:1200+e%2*400,gain:.08});break;case`upgrade`:this.tone(n,t,1.2,{type:`sawtooth`,freq:110,freqEnd:880,gain:.12}),this.noise(n,t,1.2,{type:`bandpass`,freq:400,freqEnd:4e3,q:2,gain:.3}),this.tone(n,t+1.1,.4,{type:`triangle`,freq:1760,gain:.25});break;case`click`:this.tone(n,t,.03,{type:`square`,freq:1400,gain:.08})}}startAmbience(){if(!this.ctx||this.ambNodes.length)return;let e=this.ctx,t=e.createBufferSource();t.buffer=this.brownBuf,t.loop=!0;let n=e.createBiquadFilter();n.type=`lowpass`,n.frequency.value=380;let r=e.createOscillator();r.frequency.value=.07;let i=e.createGain();i.gain.value=220,r.connect(i),i.connect(n.frequency);let a=e.createGain();a.gain.value=.55,t.connect(n),n.connect(a),a.connect(this.amb);let o=e.createOscillator();o.type=`sawtooth`,o.frequency.value=43;let s=e.createOscillator();s.type=`sine`,s.frequency.value=64.3;let c=e.createBiquadFilter();c.type=`lowpass`,c.frequency.value=140;let l=e.createGain();l.gain.value=.07,o.connect(c),s.connect(c),c.connect(l),l.connect(this.amb);let u=e.createOscillator();u.type=`square`,u.frequency.value=60;let d=e.createBiquadFilter();d.type=`bandpass`,d.frequency.value=120,d.Q.value=8;let f=e.createGain();f.gain.value=.012,u.connect(d),d.connect(f),f.connect(this.amb),t.start(),r.start(),o.start(),s.start(),u.start(),this.ambNodes=[t,r,o,s,u,a,l,f]}stopAmbience(){for(let e of this.ambNodes){try{e.stop?.()}catch{}try{e.disconnect()}catch{}}this.ambNodes=[]}updateAmbience(e){if(!this.ok()||(this.sirenT-=e,this.sirenT>0))return;this.sirenT=18+Math.random()*25;let t=this.ctx.currentTime,n=this.out({x:this.listener.x+(Math.random()-.5)*300,z:this.listener.z+(Math.random()-.5)*300},1.4,6,60);if(n){if(Math.random()<.5){let e=this.ctx.createOscillator();e.type=`triangle`;let r=this.ctx.createGain();r.gain.setValueAtTime(1e-4,t),r.gain.exponentialRampToValueAtTime(.08,t+.8),r.gain.exponentialRampToValueAtTime(1e-4,t+5.5);for(let n=0;n<5;n++)e.frequency.setValueAtTime(600,t+n*1.1),e.frequency.linearRampToValueAtTime(900,t+n*1.1+.55),e.frequency.linearRampToValueAtTime(600,t+n*1.1+1.1);e.connect(r),r.connect(n),e.start(t),e.stop(t+5.6)}else this.tone(n,t,2.5,{type:`sawtooth`,freq:70,freqEnd:40,gain:.08,attack:.3}),this.noise(n,t,2.2,{type:`bandpass`,freq:300,q:4,gain:.15,attack:.4})}}startHeli(){if(!this.ctx||this.heli)return;let e=this.ctx,t=e.createBufferSource();t.buffer=this.noiseBuf,t.loop=!0;let n=e.createBiquadFilter();n.type=`lowpass`,n.frequency.value=700;let r=e.createGain();r.gain.value=.5;let i=e.createOscillator();i.type=`square`,i.frequency.value=15;let a=e.createGain();a.gain.value=.45,i.connect(a),a.connect(r.gain);let o=e.createOscillator();o.type=`sawtooth`,o.frequency.value=90;let s=e.createBiquadFilter();s.type=`lowpass`,s.frequency.value=300;let c=e.createGain();c.gain.value=.08;let l=e.createGain();l.gain.value=0;let u=e.createStereoPanner();t.connect(n),n.connect(r),r.connect(l),o.connect(s),s.connect(c),c.connect(l),l.connect(u),u.connect(this.sfx),t.start(),i.start(),o.start(),this.heli={gain:l,chop:r,lfo:i,src:t,hum:o,pan:u}}updateHeli(e,t){if(!this.heli||!this.ctx)return;let n=this.ctx.currentTime;if(!e){this.heli.gain.gain.setTargetAtTime(0,n,.3);return}let r=e.x-this.listener.x,i=e.z-this.listener.z,a=e.y-this.listener.y,o=Math.min(1.2,30/Math.max(15,Math.hypot(r,i,a)))*t;this.heli.gain.gain.setTargetAtTime(o,n,.1),this.heli.lfo.frequency.setTargetAtTime(9+t*7,n,.2);let s=Math.sin(this.listener.yaw),c=r*Math.cos(this.listener.yaw)-i*s;this.heli.pan.pan.setTargetAtTime(Math.max(-.8,Math.min(.8,c/Math.max(1,Math.hypot(r,i)))),n,.1)}stopHeli(){if(!this.heli)return;let e=this.heli;try{e.src.stop(),e.lfo.stop(),e.hum.stop(),e.gain.disconnect()}catch{}this.heli=null}stopAll(){this.stopHeli()}};function ku(e,t=!1){let n=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),i=new Set(Object.keys(e[0].morphAttributes)),a={},o={},s=e[0].morphTargetsRelative,c=new Ar,l=0;for(let u=0;u<e.length;++u){let d=e[u],f=0;if(n!==(d.index!==null))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`),null;for(let e in d.attributes){if(!r.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure "`+e+`" attribute exists among all geometries, or in none of them.`),null;a[e]===void 0&&(a[e]=[]),a[e].push(d.attributes[e]),f++}if(f!==r.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of attributes.`),null;if(s!==d.morphTargetsRelative)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. .morphTargetsRelative must be consistent throughout all geometries.`),null;for(let e in d.morphAttributes){if(!i.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`.  .morphAttributes must be consistent throughout all geometries.`),null;o[e]===void 0&&(o[e]=[]),o[e].push(d.morphAttributes[e])}if(t){let e;if(n)e=d.index.count;else if(d.attributes.position!==void 0)e=d.attributes.position.count;else return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. The geometry must have either an index or a position attribute`),null;c.addGroup(l,e,u),l+=e}}if(n){let t=0,n=[];for(let r=0;r<e.length;++r){let i=e[r].index;for(let e=0;e<i.count;++e)n.push(i.getX(e)+t);t+=e[r].attributes.position.count}c.setIndex(n)}for(let e in a){let t=Au(a[e]);if(!t)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` attribute.`),null;c.setAttribute(e,t)}for(let e in o){let t=o[e][0].length;if(t!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[e]=[];for(let n=0;n<t;++n){let t=[];for(let r=0;r<o[e].length;++r)t.push(o[e][r][n]);let r=Au(t);if(!r)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` morphAttribute.`),null;c.morphAttributes[e].push(r)}}}return c}function Au(e){let t,n,r,i=-1,a=0;for(let o=0;o<e.length;++o){let s=e[o];if(t===void 0&&(t=s.array.constructor),t!==s.array.constructor)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`),null;if(n===void 0&&(n=s.itemSize),n!==s.itemSize)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`),null;if(r===void 0&&(r=s.normalized),r!==s.normalized)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`),null;if(i===-1&&(i=s.gpuType),i!==s.gpuType)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`),null;a+=s.count*n}let o=new t(a),s=new gr(o,n,r),c=0;for(let t=0;t<e.length;++t){let r=e[t];if(r.isInterleavedBufferAttribute){let e=c/n;for(let t=0,i=r.count;t<i;t++)for(let i=0;i<n;i++){let n=r.getComponent(t,i);s.setComponent(t+e,i,n)}}else o.set(r.array,c);c+=r.count*n}return i!==void 0&&(s.gpuType=i),s}var ju=class{s;constructor(e){this.s=e>>>0}next(){let e=this.s+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}range(e,t){return e+(t-e)*this.next()}int(e,t){return Math.floor(this.range(e,t+1))}pick(e){return e[Math.floor(this.next()*e.length)]}chance(e){return this.next()<e}},Z={hips:0,spine:1,chest:2,neck:3,head:4,armL:5,foreL:6,armR:7,foreR:8,thighL:9,shinL:10,thighR:11,shinR:12,jaw:13},Mu=[[Z.hips,-1,[0,.95,0]],[Z.spine,Z.hips,[0,.13,0]],[Z.chest,Z.spine,[0,.2,0]],[Z.neck,Z.chest,[0,.22,0]],[Z.head,Z.neck,[0,.08,0]],[Z.armL,Z.chest,[.21,.16,0]],[Z.foreL,Z.armL,[0,-.28,0]],[Z.armR,Z.chest,[-.21,.16,0]],[Z.foreR,Z.armR,[0,-.28,0]],[Z.thighL,Z.hips,[.1,-.06,0]],[Z.shinL,Z.thighL,[0,-.43,0]],[Z.thighR,Z.hips,[-.1,-.06,0]],[Z.shinR,Z.thighR,[0,-.43,0]],[Z.jaw,Z.head,[0,-.02,.03]]];function Nu(){let e=[];for(let[t,n,r]of Mu)e[t]=new B(...r).add(n>=0?e[n]:new B);return e}var Pu=class{bodyMat;eyeMat;eliteEyeMat;helmetMat;eliteHelmetMat;variants;rng=new ju(4242);constructor(e){this.bodyMat=new Ba({vertexColors:!0,roughness:.88,metalness:.02,map:e.grime}),this.eyeMat=new si({color:new W(16761418).multiplyScalar(2.5)}),this.eliteEyeMat=new si({color:new W(16722458).multiplyScalar(4)}),this.helmetMat=new Ba({color:3883060,roughness:.55,metalness:.5,map:e.grime}),this.eliteHelmetMat=new Ba({color:2763308,roughness:.4,metalness:.75,map:e.grime,emissive:3147776,emissiveIntensity:.6}),this.variants={shambler:[],runner:[],armored:[],elite:[]};for(let e=0;e<6;e++)this.variants.shambler.push(this.build(`shambler`,e));for(let e=0;e<4;e++)this.variants.runner.push(this.build(`runner`,e));for(let e=0;e<3;e++)this.variants.armored.push(this.build(`armored`,e));this.variants.elite.push(this.build(`elite`,0))}palette(e){let t=this.rng,n=[5922662,7031354,4016732,8025190,4872762,9079428,6041130,3028024],r=[2895928,3814440,4868676,2303272,3951194],i=[9083526,10133648,8029300,10527892,8816762];return e===`armored`?{shirt:new W(4870712),pants:new W(3817520),skin:new W(t.pick(i)),shoes:new W(1710616)}:e===`elite`?{shirt:new W(2763818),pants:new W(2237472),skin:new W(6978146),shoes:new W(1184274)}:e===`shambler`&&t.chance(.2)?{shirt:new W(12098090),pants:new W(11045412),skin:new W(t.pick(i)),shoes:new W(1710616)}:{shirt:new W(t.pick(n)),pants:new W(t.pick(r)),skin:new W(t.pick(i)),shoes:new W(1841688)}}build(e,t){let n=Nu(),r=this.palette(e),i=this.rng,a=[],o=[],s=new W(4853258),c=e===`armored`||e===`elite`,l=e===`runner`,u=c?1.18:l?.92:1+i.range(-.05,.08),d=e===`shambler`&&i.chance(.3)?1.18:1,f=l||i.chance(.25),p=(e,t,n,r,a,o,c={})=>{let l=new U().compose(new B(r,a,o),new Mt().setFromEuler(new un(c.rx??0,c.ry??0,c.rz??0)),new B(c.sx??1,c.sy??1,c.sz??1)),u=e.index?e.toNonIndexed():e;u.applyMatrix4(l);for(let e of Object.keys(u.attributes))[`position`,`normal`,`uv`].includes(e)||u.deleteAttribute(e);let d=u.attributes.position.count,f=new Float32Array(d*3),p=new Uint16Array(d*4),m=new Float32Array(d*4),h=new W,g=u.attributes.position;for(let e=0;e<d;e++){h.copy(n);let r=1-i.range(0,c.grime??.25);h.multiplyScalar(r),c.bloodChance&&g.getZ(e)>o&&i.chance(c.bloodChance)&&h.lerp(s,i.range(.5,.9)),f[e*3]=h.r,f[e*3+1]=h.g,f[e*3+2]=h.b,p[e*4]=t,m[e*4]=1}return u.setAttribute(`color`,new gr(f,3)),u.setAttribute(`skinIndex`,new _r(p,4)),u.setAttribute(`skinWeight`,new gr(m,4)),u=u.index?u.toNonIndexed():u,u};a.push(p(new q(.34*d,.2,.21),Z.hips,r.pants,0,.94,0)),a.push(p(new q(.31*d,.22,.2*d),Z.spine,r.shirt,0,1.1,.005,{bloodChance:.15})),a.push(p(new q(.4*u,.27,.23),Z.chest,r.shirt,0,1.32,0,{bloodChance:.2})),a.push(p(new q(.46*u,.09,.19),Z.chest,r.shirt,0,1.465,-.005)),l&&a.push(p(new q(.2,.14,.02),Z.chest,r.skin,.04,1.28,.118,{bloodChance:.5})),a.push(p(new Sa(.052,.06,.12,8),Z.neck,r.skin,0,1.53,0));let m=new Oa(.11,12,10);a.push(p(m,Z.head,r.skin,0,1.665,.01,{sx:.95,sy:1.12,sz:1.05,grime:.35})),a.push(p(new q(.15,.035,.05),Z.head,r.skin.clone().multiplyScalar(.8),0,1.71,.09)),a.push(p(new q(.03,.05,.04),Z.head,r.skin,0,1.665,.115)),a.push(p(new q(.1,.02,.02),Z.head,new W(1706504),0,1.69,.1)),a.push(p(new q(.12,.05,.1),Z.jaw,r.skin,0,1.575,.04,{bloodChance:.6})),a.push(p(new q(.09,.012,.02),Z.jaw,new W(13156512),0,1.6,.09)),!c&&i.chance(.5)&&a.push(p(new Oa(.115,10,6,0,Math.PI*2,0,Math.PI/2.2),Z.head,new W(i.pick([1709072,3811866,5918792,2236962])),0,1.68,-.005,{sy:1.05}));for(let e of[-1,1])o.push(p(new Oa(.016,6,4),Z.head,new W(1,1,1),e*.038,1.69,.1,{grime:0}));for(let e of[1,-1]){let t=e>0?Z.armL:Z.armR,i=e>0?Z.foreL:Z.foreR,o=e*.22*u,s=f?r.skin:r.shirt;a.push(p(new ba(c?.06:.048,.19,3,8),t,s,o,n[t].y-.14,0)),a.push(p(new ba(c?.05:.04,.2,3,8),i,r.skin,o,n[i].y-.12,0,{bloodChance:.15})),a.push(p(new q(.06,.1,.035),i,r.skin.clone().multiplyScalar(.85),o,n[i].y-.3,.01)),a.push(p(new q(.05,.06,.03),i,r.skin.clone().multiplyScalar(.8),o,n[i].y-.37,.03,{rx:.4}))}for(let e of[1,-1]){let t=e>0?Z.thighL:Z.thighR,i=e>0?Z.shinL:Z.shinR,o=e*.1;a.push(p(new ba(c?.08:.068,.3,3,8),t,r.pants,o,n[t].y-.21,0)),a.push(p(new ba(c?.065:.055,.32,3,8),i,r.pants,o,n[i].y-.2,0)),a.push(p(new q(.1,.07,.25),i,r.shoes,o,.04,.045))}if(c){let t=e===`elite`?new W(2763822):new W(5067840);a.push(p(new q(.46*u,.32,.29),Z.chest,t,0,1.3,.005,{grime:.35})),a.push(p(new q(.36,.14,.26),Z.spine,t.clone().multiplyScalar(.85),0,1.1,0));for(let e of[1,-1]){let r=e>0?Z.armL:Z.armR,i=e>0?Z.thighL:Z.thighR,o=e>0?Z.shinL:Z.shinR;a.push(p(new Oa(.1,8,6,0,Math.PI*2,0,Math.PI/2),r,t,e*.25*u,n[r].y-.02,0,{sy:.8})),a.push(p(new q(.15,.2,.08),i,t,e*.1,n[i].y-.2,.07)),a.push(p(new q(.12,.2,.06),o,t,e*.1,n[o].y-.16,.065))}if(a.push(p(new q(.1,.08,.06),Z.spine,new W(3815978),.12,1.06,.14)),a.push(p(new q(.1,.08,.06),Z.spine,new W(3815978),-.12,1.06,.14)),e===`elite`){a.push(p(new Sa(.2,.26,.12,10),Z.chest,t,0,1.5,-.01)),a.push(p(new Sa(.09,.09,.4,10),Z.chest,new W(3815994),0,1.3,-.2)),o.push(p(new Sa(.05,.05,.3,8),Z.chest,new W(1,1,1),0,1.3,-.26,{grime:0}));for(let e=0;e<4;e++)a.push(p(new Ca(.03,.14,5),Z.chest,new W(5921370),-.18+e*.12,1.5,-.1,{rx:-.6}))}}let h=ku([ku(a,!1),ku(o,!1)],!0);h.computeBoundingSphere();let g=null;return c&&(g=ku([new Oa(.135,14,8,0,Math.PI*2,0,Math.PI/1.85),new Sa(.145,.15,.03,14).translate(0,0,0),new q(.2,.06,.04).translate(0,-.02,.12)].map(e=>{let t=e.toNonIndexed();for(let e of Object.keys(t.attributes))[`position`,`normal`,`uv`].includes(e)||t.deleteAttribute(e);return t}),!1)),{key:`${e}${t}`,type:e,geo:h,helmet:g}}instantiate(e){let t=[];for(let[e,n,r]of Mu){let i=new ji;i.position.set(...r),t[e]=i,n>=0&&t[n].add(i)}let n=e.type===`elite`?this.eliteEyeMat:this.eyeMat,r=new Ai(e.geo,[this.bodyMat,n]);r.add(t[Z.hips]),r.updateMatrixWorld(!0),r.bind(new Fi(t)),r.castShadow=!0,r.receiveShadow=!1,r.boundingSphere=new Sr(new B(0,1,0),2.2);let i=null;if(e.helmet&&(i=new K(e.helmet,e.type===`elite`?this.eliteHelmetMat:this.helmetMat),i.position.set(0,.095,.005),i.castShadow=!0,t[Z.head].add(i),e.type===`elite`)){let e=new K(new q(.17,.025,.02),this.eliteEyeMat);e.position.set(0,-.02,.14),i.add(e)}return{mesh:r,bones:t,helmet:i}}},Fu=class{type=`shambler`;def=yu.shambler;region=`low`;variant;mesh;bones;helmet=null;pos={x:0,y:0,z:0};vel={x:0,z:0};vy=0;yaw=0;hp=100;maxHp=100;helmetHp=0;state=`idle`;stateT=0;speed=1.5;scale=1;attackCD=0;attackResolved=!1;losT=0;hasLOS=!1;navT=0;dirX=0;dirZ=0;wanderX=0;wanderZ=0;wanderT=0;phase=0;seed=0;gait=0;staggerDir=0;flinch=0;flinchV=0;deathT=0;fallDir=1;voiceT=0;stuckT=0;lastX=0;lastZ=0;sideStepT=0;sideSign=1;alive=!1;active=!1;elite=!1;headPos=new B;damageMult=1;reward=0;grounded=!0;lastDamageFromPlayer=!1;spawn(e,t,n,r,i,a){this.type=e,this.def=yu[e],this.region=t;let o=bu[t];this.elite=e===`elite`,this.maxHp=this.def.hp*(this.elite?1:o.hpMult),this.hp=this.maxHp,this.helmetHp=this.def.helmetHp*(this.elite?1:o.hpMult),this.damageMult=this.elite?1:o.damageMult,this.reward=this.def.reward*o.rewardMult,this.pos={x:n,y:i,z:r},this.vel={x:0,z:0},this.vy=0,this.seed=a;let s=Iu(a*12.9898);this.speed=this.def.speed[0]+(this.def.speed[1]-this.def.speed[0])*s,this.scale=this.def.scale*(.95+Iu(a*7.13)*.1),this.gait=e===`shambler`?Math.floor(Iu(a*3.7)*3):0,this.phase=Iu(a*5.1)*Math.PI*2,this.state=`idle`,this.stateT=0,this.attackCD=0,this.losT=Iu(a*2.3)*.3,this.navT=0,this.hasLOS=!1,this.deathT=0,this.flinch=this.flinchV=0,this.voiceT=2+Iu(a*9.1)*6,this.stuckT=0,this.sideStepT=0,this.wanderT=0,this.yaw=Iu(a*1.7)*Math.PI*2,this.alive=!0,this.active=!0,this.lastX=n,this.lastZ=r,this.helmet&&(this.helmet.visible=!0),this.mesh.visible=!0,this.mesh.rotation.set(0,this.yaw,0),this.mesh.scale.setScalar(this.scale),this.mesh.position.set(n,i,r)}setState(e){this.state!==`dead`&&(this.state=e,this.stateT=0,e===`attack`&&(this.attackResolved=!1))}get height(){return 1.75*this.scale}get radius(){return(this.elite?.45:.28)*Math.min(1.2,this.scale)}animate(e,t){let n=this.bones,r=this.seed,i=Math.hypot(this.vel.x,this.vel.z),a=this.type===`runner`,o=this.type===`armored`||this.elite,s=a?2:o?1.35:1.1;this.phase+=i/s*Math.PI*e+e*.3;let c=this.phase,l=Math.min(1,i/(a?4:1.6));this.flinchV+=(-120*this.flinch-14*this.flinchV)*e,this.flinch+=this.flinchV*e;for(let e of n)e.rotation.set(0,0,0);if(n[Z.hips].position.y=.95,this.state===`dead`){this.animateDeath(e);return}let u=this.gait===1?.45:1,d=(a?.85:o?.5:.42)*l;n[Z.thighL].rotation.x=-Math.sin(c)*d*u,n[Z.thighR].rotation.x=Math.sin(c)*d,n[Z.shinL].rotation.x=Math.max(0,Math.sin(c+1.3))*d*1.5*u+.05,n[Z.shinR].rotation.x=Math.max(0,Math.sin(c+1.3+Math.PI))*d*1.5+.05,n[Z.hips].position.y=.95-Math.abs(Math.sin(c))*.035*l-(a?.04*l:0),n[Z.hips].rotation.y=Math.sin(c)*.12*l,n[Z.hips].rotation.z=this.gait===1?Math.sin(c)*.12*l+.05:Math.sin(c)*.04*l;let f=a?.42:o?.12:.22+Iu(r*3.3)*.12;if(n[Z.spine].rotation.x=f*(.5+l*.5)+this.flinch*-.6,n[Z.spine].rotation.y=this.flinch*.4*this.staggerDir,n[Z.chest].rotation.y=-Math.sin(c)*(a?.2:.1)*l,n[Z.chest].rotation.z=Math.sin(t*.7+r)*.04,n[Z.head].rotation.x=-f*.6+Math.sin(t*1.3+r*4)*.08+Iu(r*7.7)*.2-.1,n[Z.head].rotation.z=(Iu(r*5.5)-.5)*.5+Math.sin(t*.9+r)*.06,n[Z.jaw].rotation.x=.1+Math.max(0,Math.sin(t*2.1+r*3))*.15,a)n[Z.armL].rotation.x=Math.sin(c)*1*l-.4,n[Z.armR].rotation.x=-Math.sin(c)*1*l-.4,n[Z.foreL].rotation.x=-1.3,n[Z.foreR].rotation.x=-1.3,n[Z.armL].rotation.z=.25,n[Z.armR].rotation.z=-.25;else if(o)n[Z.armL].rotation.x=-.35+Math.sin(c)*.35*l,n[Z.armR].rotation.x=-.35-Math.sin(c)*.35*l,n[Z.foreL].rotation.x=-.6,n[Z.foreR].rotation.x=-.6,n[Z.armL].rotation.z=.3,n[Z.armR].rotation.z=-.3;else{let e=-1.25-Iu(r*2.1)*.25,i=Math.sin(t*1.7+r)*.1;n[Z.armL].rotation.x=e+i+Math.sin(c)*.1,n[Z.armR].rotation.x=this.gait===2?.1+Math.sin(c)*.15:e-i-Math.sin(c)*.1,n[Z.foreL].rotation.x=-.25,n[Z.foreR].rotation.x=this.gait===2?0:-.3,n[Z.armL].rotation.z=.12,n[Z.armR].rotation.z=-.12}if(this.state===`idle`){let e=Math.sin(t*.8+r*2);n[Z.spine].rotation.x=.3,n[Z.spine].rotation.z=e*.08,n[Z.head].rotation.x=.35,!a&&!o&&l<.3&&(n[Z.armL].rotation.x=-.3+e*.1,n[Z.armR].rotation.x=-.2-e*.1)}else if(this.state===`alert`){let e=Math.min(1,this.stateT/.25);n[Z.spine].rotation.x=-.2*e,n[Z.head].rotation.x=-.4*e,n[Z.jaw].rotation.x=.55*e,n[Z.armL].rotation.x=-.6,n[Z.armL].rotation.z=.8*e,n[Z.armR].rotation.x=-.6,n[Z.armR].rotation.z=-.8*e}else if(this.state===`attack`){let e=this.def.windup,t=this.stateT,r=Math.min(1,t/e),i=t>e?Math.min(1,(t-e)/.14):0,a=-2.7*Lu(r)+2.2*Lu(i);n[Z.armL].rotation.x=a,n[Z.armR].rotation.x=this.gait===2&&!this.elite?0:a+(this.elite?0:.25),n[Z.foreL].rotation.x=-.4*(1-i),n[Z.foreR].rotation.x=-.4*(1-i),n[Z.armL].rotation.z=.25,n[Z.armR].rotation.z=-.25,n[Z.spine].rotation.x=-.25*r+.75*i,n[Z.head].rotation.x=-.3*r+.2*i,n[Z.jaw].rotation.x=.6}else this.state===`stagger`&&(n[Z.spine].rotation.x=-.5*Math.max(0,1-this.stateT/.45),n[Z.armL].rotation.x=-.4,n[Z.armR].rotation.x=.1);this.mesh.position.set(this.pos.x,this.pos.y,this.pos.z),this.mesh.rotation.set(0,this.yaw,0)}animateDeath(e){this.deathT+=e;let t=this.bones,n=Math.min(1,this.deathT/.75),r=n*n;t[Z.shinL].rotation.x=.8*(1-r)+.1,t[Z.shinR].rotation.x=.4*(1-r)+.15,t[Z.thighL].rotation.x=-.4*Math.sin(n*Math.PI),t[Z.armL].rotation.x=-1.2*(1-n)-2.6*r*(this.fallDir<0?1:.3),t[Z.armR].rotation.x=-.6*(1-n)-2.4*r*(this.fallDir<0?.6:.2),t[Z.armL].rotation.z=.8*r,t[Z.armR].rotation.z=-.9*r,t[Z.head].rotation.x=.5*this.fallDir*r,t[Z.head].rotation.z=.6*r*(Iu(this.seed)>.5?1:-1),t[Z.jaw].rotation.x=.5,t[Z.spine].rotation.x=.3*this.fallDir*r;let i=Math.PI/2*this.fallDir*r,a=this.deathT>7?(this.deathT-7)*.35:0;this.mesh.position.set(this.pos.x,this.pos.y+Math.abs(Math.sin(i))*.14*this.scale-a,this.pos.z),this.mesh.rotation.set(0,this.yaw,0),this.mesh.rotateX(i)}updateHeadPos(){this.bones[Z.head].getWorldPosition(this.headPos),this.headPos.y+=.07*this.scale}};function Iu(e){return e-Math.floor(e)?Math.abs(Math.sin(e*43758.5453))%1:.5}function Lu(e){return 1-(1-e)*(1-e)}var Ru=class{level;fx;audio;events;group=new On;models;zombies=[];pool=new Map;flowT=0;lastFlowCell=-1;hash=new Map;seedCounter=1;time=0;dir={x:0,z:0};elite=null;eliteAggro=!1;alertLevel=0;constructor(e,t,n,r,i){this.level=t,this.fx=n,this.audio=r,this.events=i,this.models=new Pu(e)}get aliveCount(){let e=0;for(let t of this.zombies)t.alive&&!t.elite&&e++;return e}countInRegion(e){let t=0;for(let n of this.zombies)n.alive&&!n.elite&&n.region===e&&t++;return t}reset(){for(let e of this.zombies)this.release(e);this.zombies.length=0,this.elite=null,this.eliteAggro=!1,this.lastFlowCell=-1,this.flowT=0}acquire(e){let t=this.models.variants[e],n=t[Math.floor(Math.random()*t.length)],r=this.pool.get(n.key)?.pop();if(!r){r=new Fu;let e=this.models.instantiate(n);r.variant=n,r.mesh=e.mesh,r.bones=e.bones,r.helmet=e.helmet}return this.group.add(r.mesh),r}release(e){e.active=!1,e.alive=!1,e.mesh.visible=!1,this.group.remove(e.mesh);let t=this.pool.get(e.variant.key);t||this.pool.set(e.variant.key,t=[]),t.push(e)}spawn(e,t,n,r,i=`chase`){let a=this.acquire(e),o=this.level.world.groundHeight(n,r,.3,3);return a.spawn(e,t,n,r,o,this.seedCounter++*.6180339+Math.random()),i===`chase`&&a.setState(`chase`),this.zombies.push(a),e===`elite`&&(this.elite=a),a}noise(e,t,n){let r=n*n;for(let n of this.zombies){if(!n.alive||n.state!==`idle`)continue;let i=n.pos.x-e,a=n.pos.z-t;i*i+a*a<r&&n.setState(n.type===`runner`||n.elite?`alert`:`chase`)}}update(e,t){this.time+=e;let n=this.level.nav,r=this.level.world;this.flowT-=e;let i=n.cellOf(t.x,t.z);(this.flowT<=0||i!==this.lastFlowCell&&this.flowT<Cu.flowFieldInterval*.5)&&(n.computeFlow(t.x,t.z),this.lastFlowCell=i,this.flowT=Cu.flowFieldInterval),this.hash.clear();for(let e of this.zombies){if(!e.alive)continue;let t=zu(e.pos.x,e.pos.z),n=this.hash.get(t);n||this.hash.set(t,n=[]),n.push(e)}let a=0,o=0;for(let n=this.zombies.length-1;n>=0;n--){let i=this.zombies[n];if(!i.alive){o++,(i.deathT>Cu.corpseLifetime+1.8||o>Cu.maxCorpses&&i.deathT>1)&&(this.release(i),this.zombies.splice(n,1));continue}this.think(i,e,t),(i.state===`chase`||i.state===`attack`)&&a++,this.moveZombie(i,e,r)}this.alertLevel=a}think(e,t,n){e.stateT+=t,e.attackCD=Math.max(0,e.attackCD-t);let r=n.x-e.pos.x,i=n.z-e.pos.z,a=Math.hypot(r,i),o=this.level.world,s=this.level.nav,c=0,l=0,u=0;if(e.losT-=t,e.losT<=0){e.losT=Cu.losCheckInterval+Math.random()*.1;let t=e.pos.y+1.55*e.scale;e.hasLOS=a<60&&!o.segmentBlocked(e.pos.x,t,e.pos.z,n.x,n.eyeY,n.z)}switch(e.voiceT-=t,e.voiceT<=0&&(e.voiceT=3+Math.random()*6,a<35&&this.audio.zombieVoice(e.pos,e.elite?`elite`:`groan`,e.type===`runner`?1.3:e.type===`armored`?.8:1)),e.state){case`idle`:{if(e.wanderT-=t,e.wanderT<=0){e.wanderT=3+Math.random()*5;let t=Math.random()*Math.PI*2;e.wanderX=e.pos.x+Math.cos(t)*4,e.wanderZ=e.pos.z+Math.sin(t)*4,(!s.isWalkable(e.wanderX,e.wanderZ)||Math.random()<.4)&&(e.wanderX=e.pos.x,e.wanderZ=e.pos.z)}let r=e.wanderX-e.pos.x,i=e.wanderZ-e.pos.z,o=Math.hypot(r,i);o>.5&&(l=r/o,u=i/o,c=.5);let d=e.elite?30:Cu.sightRange;n.alive&&(a<6||a<d&&e.hasLOS)&&(e.setState(e.type===`runner`||e.elite?`alert`:`chase`),e.elite&&(this.eliteAggro=!0,this.audio.zombieVoice(e.pos,`elite`)));break}case`alert`:l=r/(a||1),u=i/(a||1),(e.stateT===t||e.stateT<t*1.5)&&this.audio.zombieVoice(e.pos,e.elite?`elite`:`scream`,e.type===`runner`?1.2:1),e.stateT>(e.elite?1.1:.55)&&e.setState(`chase`);break;case`chase`:{if(!n.alive){e.setState(`idle`);break}let o=e.def.attackRange,d=Math.abs(n.y-e.pos.y);if(a<o&&d<1.9&&e.attackCD<=0&&e.hasLOS){e.setState(`attack`),this.audio.zombieVoice(e.pos,e.elite?`elite`:`attack`,e.type===`runner`?1.2:1);break}if(a<28&&e.hasLOS&&(a<3||s.walkLine(e.pos.x,e.pos.z,n.x,n.z))?(l=r/(a||1),u=i/(a||1)):s.flowDir(e.pos.x,e.pos.z,this.dir)?(l=this.dir.x,u=this.dir.z):(l=r/(a||1),u=i/(a||1)),e.stuckT+=t,e.stuckT>1.2&&(Math.hypot(e.pos.x-e.lastX,e.pos.z-e.lastZ)<.35&&a>o+.5&&(e.sideStepT=.6,e.sideSign=Math.random()<.5?-1:1),e.lastX=e.pos.x,e.lastZ=e.pos.z,e.stuckT=0),e.sideStepT>0){e.sideStepT-=t;let n=-u*e.sideSign,r=l*e.sideSign;l=l*.3+n,u=u*.3+r;let i=Math.hypot(l,u)||1;l/=i,u/=i}c=e.speed*(a<o+.3?.2:1),e.elite&&e.hasLOS&&a>6&&a<16&&(c=5.2);break}case`attack`:{let t=e.def.windup;e.stateT<t&&(l=r/(a||1),u=i/(a||1),c=e.type===`runner`?1.5:.4),!e.attackResolved&&e.stateT>=t&&(e.attackResolved=!0,this.resolveAttack(e,n)),e.stateT>=t+.4&&(e.attackCD=e.def.attackCooldown*(.85+Math.random()*.3),e.setState(`chase`));break}case`stagger`:c=0,e.stateT>.45&&e.setState(`chase`)}if(l!==0||u!==0){let n=Math.atan2(l,u)-e.yaw;n=Math.atan2(Math.sin(n),Math.cos(n)),e.yaw+=n*Math.min(1,t*(e.state===`attack`?5:8))}let d=l*c,f=u*c,p=Math.min(1,t*(e.type===`runner`?8:5));e.vel.x+=(d-e.vel.x)*p,e.vel.z+=(f-e.vel.z)*p}resolveAttack(e,t){if(!t.alive)return;let n=this.level.world,r=t.x-e.pos.x,i=t.z-e.pos.z,a=Math.hypot(r,i),o=e.def.attackRange+(e.elite?1:.45),s=Math.abs(t.y-e.pos.y);if(this.audio.zombieSwipe(e.pos),e.elite&&(this.audio.eliteSlam(e.pos),this.fx.explosion(e.pos.x+Math.sin(e.yaw)*1.2,0,e.pos.z+Math.cos(e.yaw)*1.2,!0)),a>o||s>1.9)return;if(!e.elite){let t=Math.sin(e.yaw),n=Math.cos(e.yaw);if((r*t+i*n)/(a||1)<.35)return}let c=e.pos.y+1.2*e.scale;n.segmentBlocked(e.pos.x,c,e.pos.z,t.x,t.y+1.2,t.z)||this.events.onPlayerHit(e.def.damage*e.damageMult,e.pos.x,e.pos.z,e.elite||e.type===`armored`)}moveZombie(e,t,n){let r=0,i=0,a=Math.floor(e.pos.x/2),o=Math.floor(e.pos.z/2);for(let t=-1;t<=1;t++)for(let n=-1;n<=1;n++){let s=this.hash.get(a+t&65535|(o+n&65535)<<16);if(s)for(let t of s){if(t===e)continue;let n=e.pos.x-t.pos.x,a=e.pos.z-t.pos.z,o=e.radius+t.radius+.15,s=n*n+a*a;if(s<o*o&&s>1e-6){let e=Math.sqrt(s),t=(o-e)/o;r+=n/e*t,i+=a/e*t}}}let s=3.2,c=e.vel.x+r*s,l=e.vel.z+i*s;e.vy-=20*t;let u=n.move(e.pos,e.radius,e.height*.95,c*t,e.vy*t,l*t,.5,e.grounded);u.grounded&&(e.vy=0),e.grounded=u.grounded,u.blockedX&&(e.vel.x*=.5),u.blockedZ&&(e.vel.z*=.5)}animate(e,t,n){for(let r of this.zombies){if(Math.hypot(r.pos.x-t,r.pos.z-n)>70&&r.alive){r.mesh.position.set(r.pos.x,r.pos.y,r.pos.z),r.mesh.rotation.set(0,r.yaw,0);continue}r.animate(e,this.time)}this.group.updateMatrixWorld(!0);for(let e of this.zombies)e.alive&&e.updateHeadPos()}raycast(e,t,n,r,i,a,o){let s=null,c=o;for(let o of this.zombies){if(!o.alive)continue;let l=o.pos.x-e,u=o.pos.z-n,d=l*r+u*a;if(d<-1||d>c+1.5)continue;let f=.14*o.scale,p=o.headPos,m=Bu(e,t,n,r,i,a,p.x,p.y,p.z,f);m!==null&&m<c&&(c=m,s={z:o,dist:m,head:!0,x:e+r*m,y:t+i*m,z_:n+a*m});let h=o.elite?.42:.27*o.scale,g=o.pos.y+(p.y-o.pos.y)-f*.9,_=Vu(e,t,n,r,i,a,o.pos.x-h,o.pos.y,o.pos.z-h,o.pos.x+h,g,o.pos.z+h);_!==null&&_<c-1e-4&&(c=_,s={z:o,dist:_,head:!1,x:e+r*_,y:t+i*_,z_:n+a*_})}return s}damage(e,t,n,r,i,a,o,s){let c={killed:!1,head:n,armor:!1,dealt:0};if(!e.alive)return c;let l=t;return n?e.helmetHp>0?(e.helmetHp-=t,l=t*.3,c.armor=!0,e.helmetHp<=0&&e.helmet?(e.helmet.visible=!1,this.fx.sparkBurst(r,i,a,16,[1,.8,.4]),this.audio.impact(`metal`,{x:r,z:a})):this.fx.sparkBurst(r,i,a,5,[1,.85,.5])):l=t*this.headMultFor():(l=t*e.def.bodyArmorMult,e.def.bodyArmorMult<1&&Math.random()<.4&&this.fx.sparkBurst(r,i,a,3,[1,.8,.5])),e.hp-=l,c.dealt=l,this.fx.bloodHit(r,i,a,o,s,n&&!c.armor),e.state===`idle`&&(e.setState(e.type===`runner`||e.elite?`alert`:`chase`),e.elite&&(this.eliteAggro=!0)),e.flinchV+=Math.min(6,l/25)*(e.elite?.3:1),e.staggerDir=Math.random()<.5?-1:1,e.hp<=0?(this.kill(e,o,s,n&&!c.armor),c.killed=!0):(l>=e.def.staggerThreshold&&e.state!==`attack`||l>=e.def.staggerThreshold&&e.state===`attack`&&e.type!==`armored`&&!e.elite)&&e.setState(`stagger`),c}headMultFor(){return 1}kill(e,t,n,r){e.alive=!1,e.state=`dead`,e.deathT=0;let i=Math.sin(e.yaw),a=Math.cos(e.yaw);e.fallDir=t*i+n*a>0?1:-1,e.vel.x=e.vel.z=0,this.audio.zombieVoice(e.pos,`death`,e.elite?.5:1),this.fx.deathPuff(e.pos.x,e.pos.y+.8,e.pos.z),this.fx.bloodPool(e.pos.x+t*.8,e.pos.z+n*.8,e.elite?2:1),this.events.onKill(e,r)}radiusDamage(e,t,n,r,i){let a=this.level.world,o=0,s=0;for(let c of this.zombies){if(!c.alive)continue;let l=c.pos.x-e,u=c.pos.z-n,d=Math.hypot(l,u,c.pos.y+.9-t);if(d>r)continue;let f=a.segmentBlocked(e,t+.3,n,c.pos.x,c.pos.y+1,c.pos.z),p=a.segmentBlocked(e,t+.3,n,c.headPos.x,c.headPos.y,c.headPos.z);if(f&&p)continue;let m=i*(1-(d/r)**1.4)*(c.elite?.6:1),h=Math.hypot(l,u)||1,g=this.damage(c,m,!1,c.pos.x,c.pos.y+1,c.pos.z,l/h,u/h);s++,g.killed?o++:!c.elite&&m>40&&c.setState(`stagger`)}return{kills:o,hits:s}}nearestAlive(e,t){let n=1/0;for(let r of this.zombies)r.alive&&(n=Math.min(n,Math.hypot(r.pos.x-e,r.pos.z-t)));return n}};function zu(e,t){return Math.floor(e/2)&65535|(Math.floor(t/2)&65535)<<16}function Bu(e,t,n,r,i,a,o,s,c,l){let u=o-e,d=s-t,f=c-n,p=u*r+d*i+f*a;if(p<0)return null;let m=u*u+d*d+f*f-p*p;return m>l*l?null:p-Math.sqrt(l*l-m)}function Vu(e,t,n,r,i,a,o,s,c,l,u,d){let f=0,p=1/0,m=[[e,r,o,l],[t,i,s,u],[n,a,c,d]];for(let[e,t,n,r]of m){if(Math.abs(t)<1e-9){if(e<n||e>r)return null;continue}let i=(n-e)/t,a=(r-e)/t;if(i>a){let e=i;i=a,a=e}if(f=Math.max(f,i),p=Math.min(p,a),f>p)return null}return f}var Hu=class{level;enemies;timer=3;defenseTimer=0;hordeTimer=0;constructor(e,t){this.level=e,this.enemies=t}reset(){this.timer=4,this.defenseTimer=0,this.hordeTimer=0}populate(){let e=this.level.nav,t=this.level.poi.playerSpawn,n={x:0,z:0};for(let r of Object.keys(bu)){let i=bu[r],a=0,o=0;for(;a<i.initialPopulation&&o++<800;){let o=Math.floor(Math.random()*e.walk.length);e.walk[o]&&(e.cellCenter(o,n),Su(n.z)===r&&(Math.hypot(n.x-t.x,n.z-t.z)<38||e.height[o]>.2||(this.enemies.spawn(Wu(i.weights),r,n.x,n.z,`idle`),a++)))}}let r=this.level.poi.eliteSpawn;this.enemies.spawn(`elite`,`high`,r.x,r.z,`idle`);for(let e=0;e<3;e++)this.enemies.spawn(e===0?`armored`:`runner`,`high`,r.x+(e-1)*2.5,r.z+3,`idle`)}update(e,t){let n=Su(t.pz),r=bu[n],i=this.enemies.aliveCount,a=Math.min(Cu.globalCap,Math.round(r.maxAlive*t.pressure)+(t.defenseActive?8:0));if(this.timer-=e,this.timer<=0&&(this.timer=r.spawnInterval/t.pressure*(.7+Math.random()*.6),i<a)){let e=n===`low`?1:Math.random()<.35?2:1;for(let i=0;i<e&&this.enemies.aliveCount<a;i++)this.spawnNear(t,n,Wu(r.weights))}t.defenseActive&&(this.defenseTimer-=e,this.defenseTimer<=0&&(this.defenseTimer=2.4/t.pressure,this.enemies.aliveCount<Cu.globalCap&&this.spawnNear(t,`medium`,Wu(bu.medium.weights),18,42))),t.finalHorde&&(this.hordeTimer-=e,this.hordeTimer<=0&&(this.hordeTimer=1.25,this.enemies.aliveCount<Cu.hordeCap&&this.spawnNear(t,`medium`,Wu(bu.medium.weights),20,45,!0)))}spawnNear(e,t,n,r=Cu.spawnMinDist,i=Cu.spawnMaxDist,a=!1){let o=this.level.nav,s=this.level.world,c=[],l=a?[`low`,`medium`,`high`]:Uu(t);for(let e of l)c.push(...this.level.poi.spawns[e]);let u=[],d=[];for(let t of c){let n=Math.hypot(t.x-e.px,t.z-e.pz);if(n<r)continue;let a=o.pathDist(t.x,t.z);if(!isFinite(a)||a>i*1.6||n>i)continue;let c=(t.x-e.px)/n,l=(t.z-e.pz)/n,f=c*e.fx+l*e.fz;s.segmentBlocked(e.px,e.eyeY,e.pz,t.x,1.4,t.z)||f<-.2?u.push(t):n>38&&d.push(t)}let f=u.length?u:d;if(!f.length)return!1;let p=f[Math.floor(Math.random()*f.length)];for(let e=0;e<6;e++){let e=p.x+(Math.random()-.5)*3,r=p.z+(Math.random()-.5)*3;if(o.isWalkable(e,r)&&isFinite(o.pathDist(e,r)))return this.enemies.spawn(n,t,e,r,`chase`),!0}return this.enemies.spawn(n,t,p.x,p.z,`chase`),!0}};function Uu(e){return e===`low`?[`low`]:e===`medium`?[`medium`,`low`]:[`high`,`medium`]}function Wu(e){let t=e.shambler+e.runner+e.armored,n=Math.random()*t;return(n-=e.shambler)<0?`shambler`:(n-=e.runner)<0?`runner`:`armored`}var Gu=`
  attribute float aSize;
  attribute float aAlpha;
  attribute vec3 aColor;
  attribute float aRot;
  uniform float uScale;
  varying float vAlpha;
  varying vec3 vColor;
  varying float vRot;
  #include <fog_pars_vertex>
  void main() {
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mvPosition;
    gl_PointSize = aSize * uScale / max(0.1, -mvPosition.z);
    vAlpha = aAlpha;
    vColor = aColor;
    vRot = aRot;
    #include <fog_vertex>
  }
`,Ku=`
  uniform sampler2D uMap;
  varying float vAlpha;
  varying vec3 vColor;
  varying float vRot;
  #include <fog_pars_fragment>
  void main() {
    vec2 uv = gl_PointCoord - 0.5;
    float c = cos(vRot), s = sin(vRot);
    uv = vec2(c * uv.x - s * uv.y, s * uv.x + c * uv.y) + 0.5;
    vec4 t = texture2D(uMap, uv);
    gl_FragColor = vec4(vColor * t.rgb, t.a * vAlpha);
    if (gl_FragColor.a < 0.003) discard;
    #include <fog_fragment>
  }
`,qu=class{cap;points;ps=[];geo;pos;size;alpha;color;rot;mat;constructor(e,t,n){this.cap=e,this.geo=new Ar,this.pos=new Float32Array(e*3),this.size=new Float32Array(e),this.alpha=new Float32Array(e),this.color=new Float32Array(e*3),this.rot=new Float32Array(e),this.geo.setAttribute(`position`,new gr(this.pos,3).setUsage(qe)),this.geo.setAttribute(`aSize`,new gr(this.size,1).setUsage(qe)),this.geo.setAttribute(`aAlpha`,new gr(this.alpha,1).setUsage(qe)),this.geo.setAttribute(`aColor`,new gr(this.color,3).setUsage(qe)),this.geo.setAttribute(`aRot`,new gr(this.rot,1).setUsage(qe)),this.geo.setDrawRange(0,0),this.mat=new Ra({uniforms:Fa.merge([Y.fog,{uMap:{value:t},uScale:{value:400}}]),vertexShader:Gu,fragmentShader:Ku,transparent:!0,depthWrite:!1,blending:n?2:1,fog:!0}),this.mat.uniforms.uMap.value=t,this.points=new pa(this.geo,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=n?3:2}spawn(e){this.ps.length>=this.cap&&this.ps.shift(),this.ps.push({...e,max:e.life})}clear(){this.ps.length=0,this.geo.setDrawRange(0,0)}update(e){let t=0,n=this.ps;for(let r=0;r<n.length;r++){let i=n[r];if(i.life-=e,i.life<=0)continue;i.vy-=i.grav*e;let a=Math.max(0,1-i.drag*e);i.vx*=a,i.vy*=a,i.vz*=a,i.x+=i.vx*e,i.y+=i.vy*e,i.z+=i.vz*e,i.y<.02&&i.grav>0&&(i.y=.02,i.vy*=-.3,i.vx*=.6,i.vz*=.6),i.rot+=i.spin*e,n[t++]=i}n.length=t;for(let e=0;e<t;e++){let t=n[e],r=1-t.life/t.max;this.pos[e*3]=t.x,this.pos[e*3+1]=t.y,this.pos[e*3+2]=t.z,this.size[e]=t.size0+(t.size1-t.size0)*r,this.alpha[e]=t.alpha*(r<.1?r/.1:1-(r-.1)/.9),this.color[e*3]=t.r,this.color[e*3+1]=t.g,this.color[e*3+2]=t.b,this.rot[e]=t.rot}this.geo.setDrawRange(0,t);for(let e of[`position`,`aSize`,`aAlpha`,`aColor`,`aRot`])this.geo.attributes[e].needsUpdate=!0}},Ju=class{group=new On;additive;smoke;blood;decals;bloodDecals;decalIdx=0;bloodIdx=0;tracers=[];tracerGeo;tracerPos;tracerCol;muzzleLight;muzzleT=0;blastLight;blastT=0;tmpM=new U;tmpQ=new Mt;tmpV=new B;up=new B(0,0,1);shake=0;constructor(e){let t=Math.floor(Du.maxParticles/3);this.additive=new qu(t,e.spark,!0),this.smoke=new qu(t,e.smoke,!1),this.blood=new qu(t,e.smoke,!1),this.group.add(this.additive.points,this.smoke.points,this.blood.points);let n=new si({map:e.decal,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,opacity:.9});this.decals=new Wi(new Da(.16,.16),n,Du.maxDecals),this.decals.count=0,this.decals.frustumCulled=!1;let r=new si({map:e.blood,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,color:10132122});this.bloodDecals=new Wi(new Da(1.4,1.4),r,40),this.bloodDecals.count=0,this.bloodDecals.frustumCulled=!1,this.group.add(this.decals,this.bloodDecals),this.tracerGeo=new Ar,this.tracerPos=new Float32Array(Du.maxTracers*6),this.tracerCol=new Float32Array(Du.maxTracers*6),this.tracerGeo.setAttribute(`position`,new gr(this.tracerPos,3).setUsage(qe)),this.tracerGeo.setAttribute(`color`,new gr(this.tracerCol,3).setUsage(qe));let i=new sa(this.tracerGeo,new Yi({vertexColors:!0,transparent:!0,blending:2,depthWrite:!1}));i.frustumCulled=!1,this.group.add(i),this.muzzleLight=new Eo(16757850,0,14,2),this.blastLight=new Eo(16747066,0,26,1.6),this.group.add(this.muzzleLight,this.blastLight)}setScale(e,t){let n=e/(2*Math.tan(t*Math.PI/360));for(let e of[this.additive,this.smoke,this.blood])e.mat.uniforms.uScale.value=n}reset(){this.additive.clear(),this.smoke.clear(),this.blood.clear(),this.decals.count=0,this.decalIdx=0,this.bloodDecals.count=0,this.bloodIdx=0,this.tracers.length=0,this.muzzleLight.intensity=0,this.blastLight.intensity=0,this.shake=0}muzzle(e,t,n,r){this.muzzleLight.position.set(e,t,n),this.muzzleLight.intensity=6*r,this.muzzleT=.05,this.smoke.spawn({x:e,y:t,z:n,vx:Q(-.2,.2),vy:.4,vz:Q(-.2,.2),life:.6,size0:.1,size1:.5,alpha:.12*r,r:.8,g:.8,b:.8,grav:-.2,drag:2,rot:Q(0,6),spin:.5})}tracer(e,t,n,r,i,a,o){this.tracers.length>=Du.maxTracers&&this.tracers.shift(),this.tracers.push({ax:e,ay:t,az:n,bx:r,by:i,bz:a,life:.07,r:o.r,g:o.g,b:o.b})}impact(e,t,n,r,i,a,o){let s=o===`metal`?7:2;for(let o=0;o<s;o++)this.additive.spawn({x:e,y:t,z:n,vx:r*3+Q(-3,3),vy:i*3+Q(0,3.5),vz:a*3+Q(-3,3),life:Q(.15,.35),size0:.05,size1:.02,alpha:1,r:1,g:.75,b:.4,grav:12,drag:1,rot:0,spin:0});let c=o===`metal`?1:3,l=o===`wood`?[.55,.45,.35]:o===`dirt`?[.45,.4,.33]:[.62,.62,.6];for(let o=0;o<c;o++)this.smoke.spawn({x:e+r*.05,y:t+i*.05,z:n+a*.05,vx:r*Q(.5,1.6)+Q(-.3,.3),vy:i*Q(.5,1.6)+Q(0,.5),vz:a*Q(.5,1.6)+Q(-.3,.3),life:Q(.5,.9),size0:.12,size1:.6,alpha:.4,r:l[0],g:l[1],b:l[2],grav:.3,drag:3,rot:Q(0,6),spin:Q(-1,1)});this.decal(e,t,n,r,i,a)}decal(e,t,n,r,i,a){this.tmpV.set(r,i,a),this.tmpQ.setFromUnitVectors(this.up,this.tmpV);let o=new Mt().setFromAxisAngle(this.up,Q(0,Math.PI*2));this.tmpQ.multiply(o);let s=Q(.8,1.3);this.tmpM.compose(new B(e+r*.01,t+i*.01,n+a*.01),this.tmpQ,new B(s,s,s)),this.decals.setMatrixAt(this.decalIdx,this.tmpM),this.decalIdx=(this.decalIdx+1)%Du.maxDecals,this.decals.count=Math.min(Du.maxDecals,this.decals.count+1),this.decals.instanceMatrix.needsUpdate=!0}bloodHit(e,t,n,r,i,a){let o=a?7:4;for(let s=0;s<o;s++)this.blood.spawn({x:e,y:t,z:n,vx:r*Q(.5,2.5)+Q(-.8,.8),vy:Q(-.2,1.4),vz:i*Q(.5,2.5)+Q(-.8,.8),life:Q(.3,.6),size0:a?.25:.18,size1:a?.9:.55,alpha:.75,r:.35,g:.03,b:.02,grav:3,drag:3,rot:Q(0,6),spin:0});for(let o=0;o<(a?5:2);o++)this.blood.spawn({x:e,y:t,z:n,vx:r*3+Q(-1,1),vy:Q(1,3),vz:i*3+Q(-1,1),life:.7,size0:.05,size1:.04,alpha:1,r:.3,g:.02,b:.02,grav:14,drag:.5,rot:0,spin:0})}bloodPool(e,t,n=1){this.tmpQ.setFromEuler(new un(-Math.PI/2,0,Q(0,6))),this.tmpM.compose(new B(e,.04+this.bloodIdx*4e-4,t),this.tmpQ,new B(n,n,n)),this.bloodDecals.setMatrixAt(this.bloodIdx,this.tmpM),this.bloodIdx=(this.bloodIdx+1)%40,this.bloodDecals.count=Math.min(40,this.bloodDecals.count+1),this.bloodDecals.instanceMatrix.needsUpdate=!0}explosion(e,t,n,r){this.blastLight.position.set(e,t+1,n),this.blastLight.intensity=60,this.blastT=.35;for(let r=0;r<26;r++){let r=Q(0,Math.PI*2),i=Q(.1,1.2),a=Q(2,9);this.additive.spawn({x:e,y:t+.3,z:n,vx:Math.cos(r)*Math.cos(i)*a,vy:Math.sin(i)*a,vz:Math.sin(r)*Math.cos(i)*a,life:Q(.25,.55),size0:Q(1.2,2.2),size1:.3,alpha:.9,r:1,g:Q(.45,.7),b:.15,grav:-1,drag:4,rot:Q(0,6),spin:Q(-2,2)})}for(let r=0;r<30;r++){let r=Q(0,Math.PI*2),i=Q(6,16);this.additive.spawn({x:e,y:t+.2,z:n,vx:Math.cos(r)*i,vy:Q(3,10),vz:Math.sin(r)*i,life:Q(.4,.9),size0:.08,size1:.03,alpha:1,r:1,g:.8,b:.4,grav:14,drag:.8,rot:0,spin:0})}for(let r=0;r<16;r++){let r=Q(0,Math.PI*2),i=Q(.5,3);this.smoke.spawn({x:e+Q(-.5,.5),y:t+Q(.2,1.2),z:n+Q(-.5,.5),vx:Math.cos(r)*i,vy:Q(.8,2.2),vz:Math.sin(r)*i,life:Q(2,3.5),size0:1.2,size1:4.5,alpha:.5,r:.2,g:.2,b:.2,grav:-.2,drag:1.2,rot:Q(0,6),spin:Q(-.4,.4)})}this.shake=Math.max(this.shake,r?.15:.6)}downwash(e,t,n){if(Math.random()>n)return;let r=Q(0,Math.PI*2),i=Q(2,6);this.smoke.spawn({x:e+Math.cos(r)*i,y:.2,z:t+Math.sin(r)*i,vx:Math.cos(r)*Q(4,8),vy:Q(.2,1),vz:Math.sin(r)*Q(4,8),life:Q(1,1.8),size0:.8,size1:3.5,alpha:.28,r:.55,g:.53,b:.5,grav:0,drag:1.5,rot:Q(0,6),spin:Q(-1,1)})}flare(e,t,n){this.additive.spawn({x:e+Q(-.05,.05),y:t,z:n+Q(-.05,.05),vx:Q(-.2,.2),vy:Q(.5,1.5),vz:Q(-.2,.2),life:Q(.3,.6),size0:.5,size1:.1,alpha:1,r:1,g:.2,b:.1,grav:-.5,drag:1,rot:0,spin:0}),Math.random()<.3&&this.smoke.spawn({x:e,y:t+.3,z:n,vx:Q(-.3,.3),vy:Q(1,2),vz:Q(-.3,.3),life:3,size0:.4,size1:3,alpha:.35,r:.8,g:.25,b:.2,grav:-.2,drag:.6,rot:Q(0,6),spin:.2})}sparkBurst(e,t,n,r,i){for(let a=0;a<r;a++)this.additive.spawn({x:e,y:t,z:n,vx:Q(-3,3),vy:Q(0,4),vz:Q(-3,3),life:Q(.2,.5),size0:.1,size1:.02,alpha:1,r:i[0],g:i[1],b:i[2],grav:9,drag:1,rot:0,spin:0})}deathPuff(e,t,n){for(let r=0;r<5;r++)this.smoke.spawn({x:e+Q(-.3,.3),y:t+Q(0,.5),z:n+Q(-.3,.3),vx:Q(-.4,.4),vy:Q(.2,.6),vz:Q(-.4,.4),life:Q(.8,1.4),size0:.4,size1:1.4,alpha:.3,r:.35,g:.38,b:.3,grav:0,drag:1,rot:Q(0,6),spin:.3})}update(e){this.additive.update(e),this.smoke.update(e),this.blood.update(e),this.muzzleT>0&&(this.muzzleT-=e,this.muzzleT<=0&&(this.muzzleLight.intensity=0)),this.blastT>0&&(this.blastT-=e,this.blastLight.intensity=Math.max(0,this.blastT/.35*60)),this.shake=Math.max(0,this.shake-e*1.8);let t=0;for(let n of this.tracers)n.life-=e,!(n.life<=0)&&(this.tracers[t++]=n);this.tracers.length=t;for(let e=0;e<Du.maxTracers;e++){let t=this.tracers[e],n=e*6;if(!t){this.tracerPos.fill(0,n,n+6),this.tracerCol.fill(0,n,n+6);continue}let r=t.life/.07;this.tracerPos[n]=t.ax,this.tracerPos[n+1]=t.ay,this.tracerPos[n+2]=t.az,this.tracerPos[n+3]=t.bx,this.tracerPos[n+4]=t.by,this.tracerPos[n+5]=t.bz,this.tracerCol[n]=0,this.tracerCol[n+1]=0,this.tracerCol[n+2]=0,this.tracerCol[n+3]=t.r*r,this.tracerCol[n+4]=t.g*r,this.tracerCol[n+5]=t.b*r}this.tracerGeo.attributes.position.needsUpdate=!0,this.tracerGeo.attributes.color.needsUpdate=!0}};function Q(e,t){return e+Math.random()*(t-e)}function Yu(e,t){let n=_u[e],r=vu[Math.max(0,Math.min(vu.length-1,t))];return{damage:n.damage*r.damageMult,magSize:Math.round(n.magSize*r.magMult),reserveMax:Math.round(n.reserveMax*r.magMult),reloadTime:n.reloadTime*r.reloadMult,fireInterval:60/(n.rpm*r.rpmMult),spreadMult:r.spreadMult,shell:n.shellReload?{start:n.shellReload.start*r.reloadMult,perShell:n.shellReload.perShell*r.reloadMult,end:n.shellReload.end*r.reloadMult}:void 0}}function Xu(e,t=0){let n=Yu(e,t);return{id:e,tier:t,mag:n.magSize,reserve:Math.min(_u[e].startReserve,n.reserveMax),cooldown:0,reloadPhase:`none`,reloadT:0,shellsInserted:0}}function Zu(e){return e.reloadPhase!==`none`}function Qu(e){return!(e.cooldown>0||e.mag<=0||e.reloadPhase===`mag`)}function $u(e){return Qu(e)?(e.reloadPhase!==`none`&&(e.reloadPhase=`none`,e.reloadT=0),--e.mag,e.cooldown=Yu(e.id,e.tier).fireInterval,!0):!1}function ed(e){return e.mag<Yu(e.id,e.tier).magSize&&e.reserve>0}function td(e){if(e.reloadPhase!==`none`||!ed(e))return!1;let t=Yu(e.id,e.tier);return e.reloadT=0,e.shellsInserted=0,e.reloadPhase=t.shell?`shellStart`:`mag`,!0}function nd(e){e.reloadPhase=`none`,e.reloadT=0}function rd(e,t){if(e.cooldown>0&&(e.cooldown=Math.max(0,e.cooldown-t)),e.reloadPhase===`none`)return`none`;let n=Yu(e.id,e.tier);e.reloadT+=t;let r=`none`;if(e.reloadPhase===`mag`){if(e.reloadT>=n.reloadTime){let t=n.magSize-e.mag,i=Math.min(t,e.reserve);e.mag+=i,e.reserve-=i,e.reloadPhase=`none`,e.reloadT=0,r=`magComplete`}return r}let i=n.shell;for(let t=0;t<32;t++)if(e.reloadPhase===`shellStart`){if(e.reloadT<i.start)break;e.reloadT-=i.start,e.reloadPhase=`shellLoop`}else if(e.reloadPhase===`shellLoop`){if(e.mag>=n.magSize||e.reserve<=0){e.reloadPhase=`shellEnd`;continue}if(e.reloadT<i.perShell)break;e.reloadT-=i.perShell,e.mag+=1,--e.reserve,e.shellsInserted+=1,r=`shellInserted`}else if(e.reloadPhase===`shellEnd`){if(e.reloadT<i.end)break;e.reloadPhase=`none`,e.reloadT=0,r=`shellDone`;break}else break;return r}function id(e){return e.reloadPhase===`mag`?Math.min(1,e.reloadT/Yu(e.id,e.tier).reloadTime):0}function ad(e,t){let n=Yu(e.id,e.tier).reserveMax,r=Math.max(0,Math.min(t,n-e.reserve));return e.reserve+=r,r}function od(e){if(e.tier>=vu.length-1)return!1;nd(e),e.tier+=1;let t=Yu(e.id,e.tier);return e.mag=t.magSize,e.reserve=t.reserveMax,!0}function sd(e,t,n){let r=_u[e];return n<=r.rangeNear?t:n>=r.rangeFar?t*r.minDamageMult:t*(1-(n-r.rangeNear)/(r.rangeFar-r.rangeNear)*(1-r.minDamageMult))}function cd(e){return!e||e.tier>=vu.length-1?null:vu[e.tier+1].cost}function ld(e,t){return e.slots.some(e=>e?.id===t)}function ud(e,t){switch(t){case`ammo`:return wu.ammoCost;case`plate`:return wu.plateCost;case`grenade`:return wu.grenadeCost;case`shotgun`:return wu.shotgunCost;case`upgrade0`:return cd(e.slots[0]);case`upgrade1`:return cd(e.slots[1])}}function dd(e,t,n){let r=ud(e,n);if(r===null)return{ok:!1,reason:`MAX TIER`,cost:0};if(!t.alive)return{ok:!1,reason:`UNAVAILABLE`,cost:r};switch(n){case`ammo`:if(e.slots.every(e=>!e||e.reserve>=Yu(e.id,e.tier).reserveMax))return{ok:!1,reason:`AMMO FULL`,cost:r};break;case`plate`:if(t.plates>=X.maxPlateInventory)return{ok:!1,reason:`PLATES FULL`,cost:r};break;case`grenade`:if(e.grenades>=X.maxGrenades)return{ok:!1,reason:`GRENADES FULL`,cost:r};break;case`shotgun`:if(ld(e,`shotgun`))return{ok:!1,reason:`OWNED`,cost:r}}return e.cash<r?{ok:!1,reason:`INSUFFICIENT SALVAGE`,cost:r}:{ok:!0,cost:r}}function fd(e,t,n){let r=dd(e,t,n);if(!r.ok)return r;switch(e.cash-=r.cost,n){case`ammo`:for(let t of e.slots)t&&ad(t,1/0);break;case`plate`:t.plates+=1;break;case`grenade`:e.grenades+=1;break;case`shotgun`:{let t=Xu(`shotgun`);e.slots[1]?e.slots[e.active]=t:(e.slots[1]=t,e.active=1);break}case`upgrade0`:od(e.slots[0]);break;case`upgrade1`:od(e.slots[1])}return r}function pd(e,t){e.cash=Math.max(0,e.cash+Math.round(t))}var md=class{group=new On;rotor=new On;tailRotor=new On;blur;spot;cone;navR;navG;strobe;rotorRate=0;start=new B(150,60,160);ctrl=new B(80,45,90);hover;land;departT=0;constructor(e,t,n){this.land=new B(t,0,n),this.hover=new B(t,14,n);let r=new Ba({color:8029792,roughness:.6,metalness:.15,map:e.tex.grime,envMapIntensity:1.4}),i=new Ba({color:3817014,roughness:.6,metalness:.3}),a=new Ba({color:1713712,roughness:.05,metalness:.6,envMapIntensity:2}),o=(e,t,n,r,i,a=0,o=0,s=0,c=this.group)=>{let l=new K(e,t);return l.position.set(n,r,i),l.rotation.set(a,o,s),l.castShadow=!0,c.add(l),l};o(new ba(1.15,3.6,6,14),r,0,1.9,0,Math.PI/2),o(new q(2.2,1.6,3.2),r,0,1.75,-.4),o(new Oa(1.05,14,10,0,Math.PI*2,0,Math.PI/2),a,0,2,2.3,Math.PI/2+.5),o(new q(.06,1.3,1.9),i,-1.12,1.8,-.2),o(new q(1.9,.1,2.6),i,0,1,-.3),o(new q(1.4,.6,1.6),r,0,2.95,-.3),o(new Sa(.28,.55,5.6,10),r,0,2.3,-4.6,Math.PI/2+.06),o(new q(.12,1.6,1),r,0,3.1,-7.2,.2),o(new q(1.8,.08,.6),r,0,2.5,-6.6);for(let e of[-1,1])o(new Sa(.06,.06,4.2,8),i,e*1.15,.08,0,Math.PI/2),o(new Sa(.05,.05,1,6),i,e*1.05,.5,1.1,0,0,e*.3),o(new Sa(.05,.05,1,6),i,e*1.05,.5,-1.1,0,0,e*.3);this.rotor.position.set(0,3.45,-.3),this.group.add(this.rotor),o(new Sa(.12,.16,.5,8),i,0,-.2,0,0,0,0,this.rotor);for(let e=0;e<4;e++){let t=new On;t.rotation.y=e*Math.PI/2,this.rotor.add(t),o(new q(.32,.05,6.2),i,0,0,3.1,0,0,0,t)}this.blur=new K(new xa(6.3,40),new si({color:1118481,transparent:!0,opacity:0,depthWrite:!1,side:2})),this.blur.rotation.x=-Math.PI/2,this.rotor.add(this.blur),this.tailRotor.position.set(.12,3.1,-7.3),this.group.add(this.tailRotor);for(let e=0;e<2;e++)o(new q(.04,1.6,.14),i,0,0,0,e*Math.PI/2,0,0,this.tailRotor);this.spot=new wo(15266047,0,60,.45,.5,1.2),this.spot.position.set(0,1,1.8),this.spot.target.position.set(0,-10,6),this.group.add(this.spot,this.spot.target),this.cone=new K(new Ca(4,16,20,1,!0),new si({color:13623551,transparent:!0,opacity:.06,blending:2,depthWrite:!1,side:2})),this.cone.position.set(0,-7,4.5),this.cone.rotation.x=-.35,this.group.add(this.cone),this.navR=new ei(e.glowRed.clone()),this.navR.position.set(-1.2,1.6,.8),this.navR.scale.setScalar(.5),this.navG=new ei(new Br({map:e.tex.glow,color:3211104,blending:2,depthWrite:!1,transparent:!0})),this.navG.position.set(1.2,1.6,.8),this.navG.scale.setScalar(.5),this.strobe=new ei(e.glowCold.clone()),this.strobe.position.set(0,3.2,-7.6),this.strobe.scale.setScalar(1.4),this.group.add(this.navR,this.navG,this.strobe),this.group.position.set(t,-200,n),this.group.rotation.y=-Math.PI/2}reset(){this.group.position.set(this.land.x,-200,this.land.z),this.rotorRate=0,this.departT=0,this.spot.intensity=0}updateApproach(e,t,n,r){if(!t){this.group.position.set(this.land.x,-200,this.land.z),this.spot.intensity=0,this.rotorRate=0;return}let i=new B;if(e<.72){let t=hd(e/.72);i.copy(this.start).multiplyScalar((1-t)*(1-t)).addScaledVector(this.ctrl,2*(1-t)*t).addScaledVector(this.hover,t*t);let n=new B().copy(this.ctrl).sub(this.start).multiplyScalar(2*(1-t)).addScaledVector(new B().copy(this.hover).sub(this.ctrl),2*t),r=Math.atan2(n.x,n.z),a=gd(e,.55,.72);this.group.rotation.set(.12*(1-a),_d(r,-Math.PI/2,a),0)}else{let t=hd((e-.72)/.28);i.lerpVectors(this.hover,this.land,t),this.group.rotation.set(0,-Math.PI/2,Math.sin(n*1.3)*.02*(1-t))}e>=1&&i.copy(this.land),i.y+=e>=1?0:Math.sin(n*1.7)*.15,this.group.position.copy(i),this.rotorRate=1,this.spin(r,n),this.spot.intensity=e>.4?180:0,this.cone.visible=e>.4&&e<1}updateDepart(e,t){this.departT+=e;let n=this.departT,r=Math.min(1,n/2.5);this.group.position.set(this.land.x-Math.max(0,n-2)*Math.max(0,n-2)*2.2,hd(r)*14+Math.max(0,n-2)*4,this.land.z-Math.max(0,n-2)*3),this.group.rotation.set(n>2?-.18:0,-Math.PI/2-Math.min(.3,Math.max(0,n-2)*.1),0),this.spin(e,t),this.cone.visible=!1}spin(e,t){this.rotor.rotation.y+=e*28*this.rotorRate,this.tailRotor.rotation.x+=e*50*this.rotorRate,this.blur.material.opacity=.18*this.rotorRate;let n=Math.sin(t*6)>.6;this.navR.visible=this.navG.visible=!0,this.strobe.visible=n}get position(){return this.group.position}};function hd(e){return e=Math.max(0,Math.min(1,e)),e<.5?2*e*e:1-(-2*e+2)**2/2}function gd(e,t,n){let r=Math.max(0,Math.min(1,(e-t)/(n-t)));return r*r*(3-2*r)}function _d(e,t,n){return e+Math.atan2(Math.sin(t-e),Math.cos(t-e))*n}function vd(e,t=e){let n=document.createElement(`canvas`);return n.width=e,n.height=t,[n,n.getContext(`2d`)]}var yd=class{n;p;constructor(e,t){this.n=e,this.p=new Float32Array(e*e);for(let e=0;e<this.p.length;e++)this.p[e]=t.next()}v(e,t,n){let r=this.n;return e=(e%n+n)%n%r,t=(t%n+n)%n%r,this.p[t*r+e]}sample(e,t,n=4096){let r=Math.floor(e),i=Math.floor(t),a=e-r,o=t-i,s=a*a*(3-2*a),c=o*o*(3-2*o),l=this.v(r,i,n),u=this.v(r+1,i,n),d=this.v(r,i+1,n),f=this.v(r+1,i+1,n);return l+(u-l)*s+(d-l)*c+(l-u-d+f)*s*c}fbm(e,t,n,r,i=4){let a=.5,o=0,s=0,c=r;for(let r=0;r<i;r++)o+=a*this.sample(e/n*c,t/n*c,Math.max(1,Math.round(c))),s+=a,a*=.5,c*=2;return o/s}};function bd(e,t,n){let[r,i]=vd(t),a=i.createImageData(t,t),o=a.data;for(let r=0;r<t;r++)for(let i=0;i<t;i++){let a=e[r*t+(i-1+t)%t],s=e[r*t+(i+1)%t],c=e[(r-1+t)%t*t+i],l=e[(r+1)%t*t+i],u=(a-s)*n,d=(c-l)*n,f=Math.hypot(u,d,1);u/=f,d/=f;let p=(r*t+i)*4;o[p]=(u*.5+.5)*255,o[p+1]=(d*.5+.5)*255,o[p+2]=(1/f*.5+.5)*255,o[p+3]=255}return i.putImageData(a,0,0),r}function xd(e,n=!0){let r=new ga(e);return r.wrapS=r.wrapT=t,r.anisotropy=8,n&&(r.colorSpace=Ve),r.needsUpdate=!0,r}function Sd(e,t,n,r){let[i,a]=vd(e),o=a.createImageData(e,e),s=new Float32Array(e*e),c=r?new Uint8ClampedArray(e*e*4):null;for(let n=0;n<e;n++)for(let i=0;i<e;i++){let[a,l,u,d]=t(i,n),f=(n*e+i)*4;if(o.data[f]=a,o.data[f+1]=l,o.data[f+2]=u,o.data[f+3]=255,s[n*e+i]=d,c){let e=r(i,n,d)*255;c[f]=e,c[f+1]=e,c[f+2]=e,c[f+3]=255}}a.putImageData(o,0,0);let l={map:xd(i)};if(n>0&&(l.normal=xd(bd(s,e,n),!1)),c){let[t,n]=vd(e);n.putImageData(new ImageData(c,e,e),0,0),l.rough=xd(t,!1)}return l}var Cd=class{asphalt;concrete;sidewalk;brick;corrugated;metalPanel;dirt;wood;plaster;grime;fence;lightPool;glow;flash;smoke;spark;decal;blood;ring;window;build(){let e=new ju(1337),t=new yd(64,e),n=new yd(64,new ju(99));this.asphalt=Sd(512,(r,i)=>{let a=t.fbm(r,i,512,8,5),o=n.fbm(r,i,512,64,2),s=e.next()<.04?18:0,c=Math.abs(t.fbm(r+300,i,512,4,3)-.5)<.006?-30:0,l=38+a*26+o*16+s+c;return[l*.95,l*.97,l*1.02,a*.6+o*.4+(c?-.4:0)]},3.5,(e,t)=>{let r=n.fbm(e,t,512,4,3);return r>.55?.22:.78-r*.4}),this.concrete=Sd(512,(e,r)=>{let i=t.fbm(e,r,512,6,5),a=Math.max(0,n.fbm(e,r+100,512,3,4)-.55)*160,o=e%256<2||r%256<2?-25:0,s=104+i*40-a+o;return[s,s*.99,s*.96,i+(o?-.3:0)]},2.2),this.sidewalk=Sd(512,(e,n)=>{let r=t.fbm(e,n,512,10,4),i=e%128<2||n%128<2?-30:0,a=96+r*34+i;return[a,a*.98,a*.95,r*.5+(i?-.5:0)]},3,(e,t)=>n.fbm(e,t,512,5,2)>.6?.35:.85),this.brick=Sd(512,(e,r)=>{let i=Math.floor(r/32),a=i%2?32:0,o=(e+a)%64,s=r%32,c=o<4||s<4,l=((Math.floor((e+a)/64)*7+i*13)*9301+49297)%233280/233280,u=t.fbm(e,r,512,16,3),d=Math.max(0,n.fbm(e,r,512,2,4)-.5)*120;if(c){let e=92+u*20-d*.5;return[e,e*.97,e*.92,0]}return[110+l*40+u*25-d,64+l*18+u*14-d*.8,52+u*12-d*.7,.6+u*.4]},4),this.corrugated=Sd(512,(e,r)=>{let i=Math.sin(e/512*Math.PI*2*24)*.5+.5,a=t.fbm(e,r,512,8,4),o=Math.max(0,n.fbm(e,r*.3,512,6,4)-.5)*2.2,s=Math.max(0,t.fbm(e,0,512,32,2)-.55)*(r/512)*2,c=120+i*50+a*30,l=o+s;return[c*(1-l*.2)+l*60,c*(1-l*.45)+l*20,c*(1-l*.65),i]},2.5,e=>.45+(Math.sin(e/512*Math.PI*48)*.5+.5)*.25),this.metalPanel=Sd(512,(e,r)=>{let i=e%256,a=r%256,o=i<3||a<3,s=(i-14)**2+(a-14)**2<18||(i-242)**2+(a-14)**2<18||(i-14)**2+(a-242)**2<18||(i-242)**2+(a-242)**2<18,c=t.fbm(e,r,512,12,4),l=n.sample(e*.5,r*.02)>.8?25:0,u=88+c*30+l+(o?-30:0)+(s?30:0);return[u,u*1.01,u*1.04,(o?-.5:0)+ +!!s+c*.3]},3,(e,n)=>.4+t.fbm(e,n,512,8,2)*.4),this.dirt=Sd(512,(e,r)=>{let i=t.fbm(e,r,512,6,5),a=n.fbm(e,r,512,48,2),o=58+i*40+(a>.62?30:0);return[o*1.02,o*.95,o*.82,i*.6+(a>.62?.5:0)]},3,(e,n)=>t.fbm(e,n,512,3,3)>.58?.3:.92),this.wood=Sd(512,(e,n)=>{let r=Math.floor(n/64),i=Math.sin(e/512*40+t.fbm(e,n,512,8,3)*12+r*3)*.5+.5,a=n%64<3,o=a?30:88+i*30+r*37%20;return[o*1.05,o*.82,o*.6,a?0:.5+i*.3]},3),this.plaster=Sd(512,(e,r)=>{let i=t.fbm(e,r,512,8,5),a=Math.max(0,n.fbm(e,r*.15,512,10,3)-.52)*150*(r/512),o=128+i*30-a;return[o*.98,o,o*.97,i]},1.5),this.window=Sd(256,(e,n)=>{let r=e%128,i=n%128;if(r<10||r>118||i<10||i>118||r>60&&r<68){let r=70+t.sample(e*.1,n*.1)*20;return[r,r,r*1.05,1]}let a=18+(r+i)/256*30;return[a*.9,a,a*1.2,0]},2);{let[e,r]=vd(256),i=r.createImageData(256,256);for(let e=0;e<256;e++)for(let r=0;r<256;r++){let a=t.fbm(r,e,256,8,4),o=n.fbm(r,e,256,4,3)>.6?.55:1,s=(.62+a*.45)*o*255,c=(e*256+r)*4;i.data[c]=s,i.data[c+1]=s*.97,i.data[c+2]=s*.94,i.data[c+3]=255}r.putImageData(i,0,0),this.grime=xd(e)}{let[e,t]=vd(128);t.clearRect(0,0,128,128),t.strokeStyle=`rgba(170,175,180,1)`,t.lineWidth=3;for(let e=-128;e<256;e+=32)t.beginPath(),t.moveTo(e,0),t.lineTo(e+128,128),t.stroke(),t.beginPath(),t.moveTo(e+128,0),t.lineTo(e,128),t.stroke();this.fence=xd(e)}this.lightPool=wd(256,[[0,`rgba(255,255,255,1)`],[.35,`rgba(255,255,255,0.45)`],[1,`rgba(255,255,255,0)`]]),this.glow=wd(128,[[0,`rgba(255,255,255,1)`],[.2,`rgba(255,255,255,0.6)`],[.5,`rgba(255,255,255,0.12)`],[1,`rgba(255,255,255,0)`]]),this.smoke=(()=>{let[e,n]=vd(128),r=n.createImageData(128,128);for(let e=0;e<128;e++)for(let n=0;n<128;n++){let i=Math.hypot(n-64,e-64)/64,a=t.fbm(n,e,128,4,4),o=Math.max(0,1-i)**1.5*(.4+a*.8),s=(e*128+n)*4;r.data[s]=r.data[s+1]=r.data[s+2]=255,r.data[s+3]=Math.min(255,o*255)}return n.putImageData(r,0,0),xd(e)})(),this.flash=(()=>{let[t,n]=vd(128),r=n.createRadialGradient(64,64,0,64,64,64);r.addColorStop(0,`rgba(255,250,230,1)`),r.addColorStop(.25,`rgba(255,200,110,0.9)`),r.addColorStop(1,`rgba(255,120,30,0)`),n.fillStyle=r,n.translate(64,64);for(let t=0;t<7;t++)n.rotate(Math.PI*2/7+e.range(-.2,.2)),n.beginPath(),n.moveTo(0,-6),n.lineTo(64*e.range(.6,1),0),n.lineTo(0,6),n.fill();return n.beginPath(),n.arc(0,0,26,0,Math.PI*2),n.fill(),xd(t)})(),this.spark=wd(32,[[0,`rgba(255,255,255,1)`],[.4,`rgba(255,220,150,0.8)`],[1,`rgba(255,150,50,0)`]]),this.decal=(()=>{let[e,t]=vd(64),n=t.createRadialGradient(32,32,0,32,32,32);return n.addColorStop(0,`rgba(0,0,0,1)`),n.addColorStop(.18,`rgba(10,10,10,0.95)`),n.addColorStop(.3,`rgba(40,38,35,0.6)`),n.addColorStop(1,`rgba(40,38,35,0)`),t.fillStyle=n,t.fillRect(0,0,64,64),xd(e)})(),this.blood=(()=>{let[t,n]=vd(128);for(let t=0;t<26;t++){let r=e.range(3,18)*(t===0?2.5:1),i=e.range(0,Math.PI*2),a=t===0?0:e.range(10,50);n.fillStyle=`rgba(${70+e.int(0,30)},${6+e.int(0,8)},6,${e.range(.6,.95)})`,n.beginPath(),n.arc(64+Math.cos(i)*a,64+Math.sin(i)*a,r,0,Math.PI*2),n.fill()}return xd(t)})(),this.ring=(()=>{let[e,t]=vd(256);return t.strokeStyle=`rgba(255,255,255,1)`,t.lineWidth=6,t.beginPath(),t.arc(128,128,120,0,Math.PI*2),t.stroke(),t.lineWidth=2,t.setLineDash([10,12]),t.beginPath(),t.arc(128,128,108,0,Math.PI*2),t.stroke(),xd(e)})()}};function wd(e,t){let[n,r]=vd(e),i=r.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);for(let[e,n]of t)i.addColorStop(e,n);return r.fillStyle=i,r.fillRect(0,0,e,e),xd(n)}function Td(e,t){let n=t.w??512,r=t.h??256,[i,a]=vd(n,r);if(a.fillStyle=t.bg,a.fillRect(0,0,n,r),t.hazard){a.save(),a.fillStyle=`#111`;for(let e=-r;e<n+r;e+=40)a.beginPath(),a.moveTo(e,0),a.lineTo(e+20,0),a.lineTo(e+20-r*.1,r*.1),a.lineTo(e-r*.1,r*.1),a.fill(),a.beginPath(),a.moveTo(e,r),a.lineTo(e+20,r),a.lineTo(e+20+r*.1,r*.9),a.lineTo(e+r*.1,r*.9),a.fill();a.restore()}t.border&&(a.strokeStyle=t.border,a.lineWidth=10,a.strokeRect(12,12,n-24,r-24));let o=n/2;t.symbol===`bio`&&(Ed(a,r*.5,r/2,r*.3,t.fg),o=n/2+r*.3),a.fillStyle=t.fg,a.textAlign=`center`,a.textBaseline=`middle`;let s=r*.62/e.length;e.forEach((i,c)=>{let l=c===0?s*.8:s*.55;a.font=`bold ${l}px ${t.font??`"DIN Alternate","Arial Narrow",Arial,sans-serif`}`;let u=r/2+(c-(e.length-1)/2)*s;a.fillText(i,o,u,n*.8-(o-n/2))});let c=new ju(e.join(``).length*31);for(let e=0;e<90;e++)a.fillStyle=`rgba(30,25,20,${c.range(.05,.25)})`,a.fillRect(c.range(0,n),c.range(0,r),c.range(2,30),c.range(1,6));return xd(i)}function Ed(e,t,n,r,i){e.save(),e.translate(t,n),e.fillStyle=i;for(let t=0;t<3;t++)e.rotate(Math.PI*2/3),e.beginPath(),e.arc(0,-r*.5,r*.5,0,Math.PI*2),e.arc(0,-r*.62,r*.36,0,Math.PI*2,!0),e.fill();e.beginPath(),e.arc(0,0,r*.18,0,Math.PI*2),e.fill(),e.lineWidth=r*.08,e.strokeStyle=i,e.beginPath(),e.arc(0,0,r*.62,0,Math.PI*2),e.stroke(),e.restore()}function Dd(e,t=Math.random){return e===`low`?{cash:150+Math.round(t()*150),plates:+(t()<.45),grenades:+(t()<.25),ammoMags:2}:e===`medium`?{cash:320+Math.round(t()*230),plates:+(t()<.7),grenades:+(t()<.4),ammoMags:3}:{cash:650+Math.round(t()*300),plates:2,grenades:+(t()<.6),ammoMags:4}}var Od=class{M;group=new On;crates=[];drops=[];dropTpl;stripOn;stripOff;constructor(e,t,n){this.M=e,this.stripOn=new si({color:new W(16760896).multiplyScalar(2.2)}),this.stripOff=new si({color:2236962});for(let e of t)this.crates.push(this.buildCrate(e));for(let e of n)this.group.add(e.kind===`buy`?this.buildBuyStation(e):this.buildUpgradeBench(e));this.dropTpl=new On;let r=new K(new q(.4,.22,.26),e.olive);r.castShadow=!0,this.dropTpl.add(r);let i=new K(new q(.41,.05,.27),new si({color:new W(6340863).multiplyScalar(2)}));this.dropTpl.add(i)}reset(){for(let e of this.crates)e.opened=!1,e.openT=0,e.lid.rotation.x=0,e.strip.material=this.stripOn,e.glow.visible=!0;for(let e of this.drops)this.group.remove(e.mesh);this.drops.length=0}buildCrate(e){let t=this.M,n=new On;n.position.set(e.x,e.y,e.z);let r=e.region===`high`?t.hazardYellow:e.region===`medium`?t.olive:t.oliveDark,i=new K(new q(1.1,.45,.7),r);i.position.y=.225,i.castShadow=i.receiveShadow=!0,n.add(i);for(let e of[-.45,.45]){let r=new K(new q(.06,.08,.72),t.metalDark);r.position.set(e,.3,0),n.add(r)}let a=new On;a.position.set(0,.45,-.35);let o=new K(new q(1.12,.14,.72),r);o.position.set(0,.07,.35),o.castShadow=!0,a.add(o),n.add(a);let s=new K(new q(.9,.035,.02),this.stripOn);s.position.set(0,.36,.355),n.add(s);let c=s.clone();c.position.z=-.355,n.add(c);let l=new ei(t.glowWarm);return l.scale.set(1.6,1,1),l.position.set(0,.6,0),n.add(l),this.group.add(n),{spot:e,group:n,lid:a,strip:s,glow:l,opened:!1,openT:0}}buildBuyStation(e){let t=this.M,n=new On;n.position.set(e.x,0,e.z),n.rotation.y=e.yaw;let r=new K(new q(1.3,1.55,.7),t.olive);r.position.y=.775,r.castShadow=r.receiveShadow=!0,n.add(r);let i=new K(new q(1.4,.12,.85),t.oliveDark);i.position.set(0,1.6,.06),n.add(i);let a=Td([`QUARTERMASTER`,`AMMO · ARMOR · ARMS`],{bg:`#06140c`,fg:`#58ffa0`,w:512,h:320}),o=new K(new Da(.9,.56),new si({map:a,color:new W(1.6,1.6,1.6)}));o.position.set(0,1.12,.356),n.add(o);let s=new K(new q(.6,.12,.2),t.metalDark);s.position.set(0,.72,.42),s.rotation.x=.4,n.add(s);let c=new ei(this.M.glowCold);c.position.set(0,1.12,.6),c.scale.set(1.8,1.2,1),n.add(c);let l=new K(new Sa(.08,.08,.14,10),t.screenGreen);l.position.set(.5,1.75,0),n.add(l);for(let e=0;e<3;e++){let r=new K(new q(.3,.2,.18),t.oliveDark);r.position.set(.82,.1+e*.2,.1),r.castShadow=!0,n.add(r)}return n}buildUpgradeBench(e){let t=this.M,n=new On;n.position.set(e.x,0,e.z),n.rotation.y=e.yaw;let r=new K(new q(2.2,.1,1),t.metal);r.position.y=.95,r.castShadow=r.receiveShadow=!0,n.add(r);let i=new K(new q(2,.9,.9),t.metalDark);i.position.y=.45,n.add(i);let a=new K(new q(2.2,1.2,.06),t.metalDark);a.position.set(0,1.7,-.47),n.add(a);let o=Td([`ARMORY UPGRADE`,`CALIBRATION BENCH`],{bg:`#061220`,fg:`#6ac8ff`,w:512,h:256}),s=new K(new Da(1.2,.6),new si({map:o,color:new W(1.5,1.5,1.5)}));s.position.set(0,1.75,-.43),n.add(s);let c=new K(new q(.25,.2,.2),t.steel);c.position.set(-.7,1.1,0),n.add(c);let l=new K(new q(.6,.08,.1),t.metalDark);l.position.set(.1,1.04,.1),n.add(l);let u=new K(new q(2.1,.03,.03),new si({color:new W(4237567).multiplyScalar(2.5)}));u.position.set(0,1.01,.5),n.add(u);let d=new ei(t.glowCold);return d.position.set(0,1.4,.3),d.scale.set(2.6,1.4,1),n.add(d),n}spawnDrop(e,t){let n=this.dropTpl.clone();n.position.set(e,.12,t),this.group.add(n),this.drops.push({mesh:n,x:e,z:t,life:30})}update(e,t){for(let t of this.crates)t.opened&&t.openT<1&&(t.openT=Math.min(1,t.openT+e*3),t.lid.rotation.x=-1.9*(1-(1-t.openT)**3));for(let n=this.drops.length-1;n>=0;n--){let r=this.drops[n];r.life-=e,r.mesh.rotation.y+=e*2,r.mesh.position.y=.2+Math.sin(t*3+n)*.05,r.life<=0&&(this.group.remove(r.mesh),this.drops.splice(n,1))}}open(e){if(e.opened)return!1;e.opened=!0,e.strip.material=this.stripOff;for(let t of e.group.children)t.material===this.stripOn&&(t.material=this.stripOff);return e.glow.visible=!1,!0}collectDrops(e,t){let n=0;for(let r=this.drops.length-1;r>=0;r--){let i=this.drops[r];Math.hypot(i.x-e,i.z-t)<1.4&&(this.group.remove(i.mesh),this.drops.splice(r,1),n++)}return n}},kd=class{status=`inactive`;progress=0;inZone=!1;rewarded=!1;activate(){return this.status===`inactive`&&(this.status=`active`,!0)}update(e,t){return this.inZone=t,this.status===`active`&&(t?this.progress+=e/Tu.defenseHoldTime:this.progress=Math.max(0,this.progress-Tu.defenseDecay*e),this.progress>=1&&(this.progress=1,this.status=`complete`,!this.rewarded)&&(this.rewarded=!0,!0))}},Ad=class{status=`tracking`;rewarded=!1;onTargetKilled(){return!this.rewarded&&(this.rewarded=!0,this.status=`complete`,!0)}};function jd(e,t){return e.status===`complete`&&t.status===`complete`}var Md=class{radioPos;boardPos;state=`locked`;countdown=0;constructor(e,t){this.radioPos=e,this.boardPos=t}unlock(){this.state===`locked`&&(this.state=`available`)}canCall(e){return this.state===`available`&&Nd(e,this.radioPos)<=Tu.radioRadius}call(e){return this.canCall(e)?(this.state=`called`,this.countdown=Tu.extractionCountdown,!0):!1}approach(){return this.state===`landed`||this.state===`boarded`?1:this.state===`called`?Math.max(0,Math.min(1,1-this.countdown/Tu.heliVisibleAt)):0}heliVisible(){return this.state===`called`&&this.countdown<=Tu.heliVisibleAt||this.state===`landed`||this.state===`boarded`}canBoard(e,t){return this.state===`landed`&&t&&Nd(e,this.boardPos)<=Tu.boardRadius}board(e,t){return this.canBoard(e,t)?(this.state=`boarded`,!0):!1}update(e){return this.state===`called`?(this.countdown=Math.max(0,this.countdown-e),this.countdown<=0?(this.state=`landed`,`landed`):`none`):`none`}fail(){this.state!==`boarded`&&(this.state=`failed`)}get finished(){return this.state===`boarded`||this.state===`failed`}};function Nd(e,t){return Math.hypot(e.x-t.x,e.z-t.z)}var Pd=class{center;lz;time=0;deadline=Tu.deadline;finalPhase=!1;finalStart=0;defense=new kd;hunt=new Ad;extraction;contaminationRadius=0;contamStartR=Tu.contaminationStartRadius;contamEndR=0;stats={kills:0,headshots:0,salvageEarned:0,cratesLooted:0,platesUsed:0,shots:0,hits:0};outcome=`active`;unlockedAnnounced=!1;constructor(e,t,n,r){this.center=e,this.lz=t,this.extraction=new Md(n,r),this.contamEndR=Math.hypot(t.x-e.x,t.z-e.z)+8}get remaining(){return Math.max(0,this.deadline-this.time)}get pressure(){let e=1+Math.min(1,this.time/600)*.45;return this.defense.status===`complete`&&(e+=.12),this.hunt.status===`complete`&&(e+=.12),this.finalPhase&&(e+=.25),e}inContamination(e,t){return this.finalPhase&&Math.hypot(e-this.center.x,t-this.center.z)<this.contaminationRadius}startFinal(e,t){this.finalPhase||(this.finalPhase=!0,this.finalStart=this.time,this.deadline=Math.min(this.deadline,this.time+Tu.finalPhaseWindow),t.push({type:`finalPhase`,forced:e}))}update(e,t,n){let r=[];if(this.outcome!==`active`)return r;this.time+=e;let i=n&&Math.hypot(t.x-this.defenseCenter.x,t.z-this.defenseCenter.z)<=Tu.defenseRadius;if(this.defense.update(e,i)&&r.push({type:`defenseComplete`}),jd(this.defense,this.hunt)&&!this.unlockedAnnounced&&(this.unlockedAnnounced=!0,this.extraction.unlock(),r.push({type:`extractionUnlocked`}),this.startFinal(!1,r)),!this.finalPhase&&this.time>=Tu.forcedFinalPhaseAt&&this.startFinal(!0,r),this.finalPhase){let e=Math.max(1,this.deadline-this.finalStart),t=Math.min(1,(this.time-this.finalStart)/e);this.contaminationRadius=this.contamStartR+(this.contamEndR-this.contamStartR)*t**1.15}return this.extraction.update(e)===`landed`&&r.push({type:`heliLanded`}),this.time>=this.deadline&&!this.extraction.finished&&(this.extraction.fail(),this.outcome=`timeout`,r.push({type:`deadline`})),r}defenseCenter={x:0,z:0};onEliteKilled(){return this.hunt.onTargetKilled()}get contractsDone(){return+(this.defense.status===`complete`)+ +(this.hunt.status===`complete`)}};function Fd(){return{health:X.maxHealth,armor:X.startPlatesInVest*X.plateArmor,plates:X.startPlateInventory,stamina:X.maxStamina,exhausted:!1,sinceDamage:99,sinceSprint:99,plateT:0,alive:!0}}var Id=()=>X.maxArmorPlates*X.plateArmor;function Ld(e,t,n=!1){let r={armorDamage:0,healthDamage:0,armorBroke:!1,killed:!1};if(!e.alive||t<=0)return r;let i=t;if(!n&&e.armor>0){let t=e.armor,n=Math.min(e.armor,i);e.armor-=n,i-=n,r.armorDamage=n,r.armorBroke=Math.ceil(e.armor/X.plateArmor)<Math.ceil(t/X.plateArmor)}if(i>0){let t=Math.min(e.health,i);e.health-=t,r.healthDamage=t}return e.sinceDamage=0,e.health<=0&&(e.health=0,e.alive=!1,r.killed=!0),r}function Rd(e){return e.alive&&e.plateT<=0&&e.plates>0&&e.armor<Id()}function zd(e){return Rd(e)?(e.plateT=X.plateApplyTime,!0):!1}function Bd(e){e.plateT=0}function Vd(e,t,n){if(!e.alive)return!1;if(e.sinceDamage+=t,e.sinceDamage>=X.healthRegenDelay&&e.health<X.maxHealth&&(e.health=Math.min(X.maxHealth,e.health+X.healthRegenRate*t)),n?(e.stamina=Math.max(0,e.stamina-X.staminaDrain*t),e.sinceSprint=0,e.stamina<=0&&(e.exhausted=!0)):(e.sinceSprint+=t,e.sinceSprint>=X.staminaRegenDelay&&(e.stamina=Math.min(X.maxStamina,e.stamina+X.staminaRegen*t)),e.exhausted&&e.stamina>=X.staminaMinToSprint&&(e.exhausted=!1)),e.plateT>0&&(e.plateT-=t,e.plateT<=0&&(e.plateT=0,e.plates>0&&e.armor<Id()))){--e.plates;let t=Math.floor(e.armor/X.plateArmor);return e.armor=Math.min(Id(),(t+1)*X.plateArmor),!0}return!1}function Hd(e){return e.alive&&!e.exhausted&&e.stamina>0}var Ud=class{pos={x:0,y:0,z:0};vel={x:0,y:0,z:0};yaw=0;pitch=0;height=X.standHeight;crouched=!1;grounded=!0;sprinting=!1;moving=!1;speed2d=0;vitals=Fd();stepPhase=0;recoilPitch=0;recoilYaw=0;aiming=!1;adsT=0;stepDist=0;airTime=0;reset(e,t,n){this.pos={x:e,y:0,z:t},this.vel={x:0,y:0,z:0},this.yaw=n,this.pitch=0,this.height=X.standHeight,this.crouched=!1,this.grounded=!0,this.sprinting=!1,this.vitals=Fd(),this.recoilPitch=this.recoilYaw=0,this.stepDist=0,this.adsT=0}get eyeY(){return this.pos.y+this.height-X.eyeOffset}look(e,t,n){let r=.0022*n*(1-this.adsT*.35);this.yaw-=e*r,this.pitch-=t*r;let i=Math.PI/2-.02;this.pitch=Math.max(-i,Math.min(i,this.pitch))}update(e,t,n,r){let i={footstep:!1,landed:0,jumped:!1},a=this.vitals;t.consume(`crouch`)&&(this.crouched?n.overlaps(this.pos.x,this.pos.y+.02,this.pos.z,X.radius,X.standHeight-.02)||(this.crouched=!1):this.crouched=!0);let o=0,s=0;t.isHeld(`forward`)&&(o+=1),t.isHeld(`back`)&&--o,t.isHeld(`right`)&&(s+=1),t.isHeld(`left`)&&--s;let c=t.isHeld(`sprint`)&&o>0&&r.canSprintExtra;c&&this.crouched&&!n.overlaps(this.pos.x,this.pos.y+.02,this.pos.z,X.radius,X.standHeight-.02)&&(this.crouched=!1),this.sprinting=c&&!this.crouched&&this.grounded&&Hd(a)&&!this.aiming,this.sprinting&&!Hd(a)&&(this.sprinting=!1);let l=this.crouched?X.crouchHeight:X.standHeight;if(l>this.height){let t=Math.min(l,this.height+e*6);n.overlaps(this.pos.x,this.pos.y+.02,this.pos.z,X.radius,t-.02)?this.crouched=!0:this.height=t}else this.height=Math.max(l,this.height-e*7);let u=X.walkSpeed;this.crouched?u=X.crouchSpeed:this.sprinting&&(u=X.sprintSpeed),this.aiming&&(u=Math.min(u,X.adsSpeed)),o<0&&(u*=.85),u*=r.speedMult;let d=Math.hypot(o,s),f=0,p=0;if(d>0){let e=o/d,t=s/d,n=Math.sin(this.yaw),r=Math.cos(this.yaw);f=-n*e+r*t,p=-r*e-n*t}let m=this.grounded?X.groundAccel:X.airAccel,h=f*u,g=p*u;if(this.grounded&&d===0){let t=Math.max(0,1-X.friction*e);this.vel.x*=t,this.vel.z*=t}let _=h-this.vel.x,v=g-this.vel.z,y=Math.hypot(_,v);if(y>0&&(d>0||this.grounded)){let t=Math.min(y,m*e);this.vel.x+=_/y*t,this.vel.z+=v/y*t}t.consume(`jump`)&&this.grounded&&!this.crouched&&(this.vel.y=X.jumpVelocity,this.grounded=!1,i.jumped=!0),this.vel.y-=gu.gravity*e,this.vel.y<-30&&(this.vel.y=-30);let b=this.vel.y,x=this.pos.x,S=this.pos.z,C=n.move(this.pos,X.radius,this.height,this.vel.x*e,this.vel.y*e,this.vel.z*e,this.grounded?X.stepHeight:.05,this.grounded);C.blockedX&&(this.vel.x=0),C.blockedZ&&(this.vel.z=0),C.hitCeiling&&this.vel.y>0&&(this.vel.y=0),C.grounded?(!this.grounded&&this.airTime>.15&&(i.landed=-b),this.vel.y=0,this.airTime=0):this.airTime+=e,this.grounded=C.grounded,this.pos.x=Math.max(gu.minX+1,Math.min(gu.maxX-1,this.pos.x)),this.pos.z=Math.max(gu.minZ+1,Math.min(gu.maxZ-1,this.pos.z));let w=Math.hypot(this.pos.x-x,this.pos.z-S);if(this.speed2d=w/e,this.moving=this.speed2d>.5&&this.grounded,this.moving){this.stepDist+=w,this.stepPhase+=w*(this.sprinting?1.25:1.6);let e=this.sprinting?2.3:this.crouched?1.3:1.85;this.stepDist>=e&&(this.stepDist-=e,i.footstep=!this.crouched||this.stepDist>0)}return i}pushOut(e,t,n,r){let i=this.pos.x-e,a=this.pos.z-t,o=Math.hypot(i,a),s=n+X.radius;if(o>=s||o<1e-4)return;let c=(s-o)*.5;r.move(this.pos,X.radius,this.height,i/o*c,0,a/o*c,0,!1)}applyRecoil(e,t){this.recoilPitch+=e*Math.PI/180,this.recoilYaw+=t*Math.PI/180}recoverRecoil(e,t){let n=t*Math.PI/180*e,r=Math.min(this.recoilPitch,n);this.recoilPitch-=r,this.pitch-=r*.6;let i=Math.sign(this.recoilYaw)*Math.min(Math.abs(this.recoilYaw),n*.5);this.recoilYaw-=i}kickView(e,t){this.pitch=Math.min(Math.PI/2-.02,this.pitch+e),this.yaw+=t}};function Wd(e,t,n=.85,r=0,i={}){let a=new Ba({color:t,roughness:n,metalness:r,...i});return e&&(a.map=e.map,e.normal&&(a.normalMap=e.normal,a.normalScale.set(.9,.9)),e.rough&&(a.roughnessMap=e.rough)),a}var Gd=class{tex;asphalt;concrete;concreteDark;sidewalk;brick;brickDark;plaster;plasterBlue;corrugated;corrugatedGreen;metal;metalDark;steel;rust;dirt;wood;olive;oliveDark;tarp;sandbag;rubber;glass;windowFacade;windowLit;hazardYellow;hazardStripe;white;red;fence;containers;carPaints;burnt;lampWarm;lampCold;beaconRed;toxicGlow;screenGreen;screenAmber;laneLine;laneYellow;puddle;grimeDecal;lightPoolWarm;lightPoolRed;lightPoolToxic;lightPoolCold;glowWarm;glowRed;glowToxic;glowCold;cable;constructor(e){this.tex=e;let t=e;this.asphalt=Wd(t.asphalt,16777215,1,0,{envMapIntensity:1.3}),this.concrete=Wd(t.concrete,14210768,.92),this.concreteDark=Wd(t.concrete,9079432,.95),this.sidewalk=Wd(t.sidewalk,14342354,1,0,{envMapIntensity:1.1}),this.brick=Wd(t.brick,16777215,.9),this.brickDark=Wd(t.brick,10129552,.92),this.plaster=Wd(t.plaster,12170408,.95),this.plasterBlue=Wd(t.plaster,8623264,.95),this.corrugated=Wd(t.corrugated,12106944,1,.35),this.corrugatedGreen=Wd(t.corrugated,7307376,1,.3),this.metal=Wd(t.metalPanel,10791084,1,.5),this.metalDark=Wd(t.metalPanel,5593438,1,.55),this.steel=Wd(null,7830658,.45,.8),this.rust=Wd(t.corrugated,9067068,.95,.3),this.dirt=Wd(t.dirt,16777215,1),this.wood=Wd(t.wood,13154464,.9),this.olive=Wd(t.metalPanel,9081952,.8,.15),this.oliveDark=Wd(t.metalPanel,6054984,.85,.15),this.tarp=Wd(t.plaster,8422495,.95),this.sandbag=Wd(t.dirt,11574648,1),this.rubber=Wd(null,1776412,.9),this.glass=new Ba({color:1844524,roughness:.08,metalness:.4,envMapIntensity:1.6}),this.windowFacade=Wd(t.window,16777215,.3,.3,{envMapIntensity:1.4}),this.windowLit=new Ba({color:3154968,emissive:16755021,emissiveIntensity:.9,map:t.window.map,emissiveMap:t.window.map}),this.hazardYellow=Wd(t.metalPanel,13214247,.7,.3),this.hazardStripe=Wd(null,1579034,.8),this.white=Wd(t.plaster,14212316,.8),this.red=Wd(t.metalPanel,9052960,.7,.3),this.fence=new Ba({map:t.fence,alphaTest:.5,side:2,color:11580600,metalness:.6,roughness:.5}),this.containers=[8007460,3100011,5003831,9071146,6053731,2973018].map(e=>Wd(t.corrugated,e,.9,.35)),this.carPaints=[5970972,2767692,9211014,2303530,4016698,6969920].map(e=>new Ba({color:e,roughness:.42,metalness:.35,map:t.grime,envMapIntensity:1.6})),this.burnt=Wd(t.corrugated,2761760,1,.4),this.lampWarm=new si({color:new W(16761466).multiplyScalar(3)}),this.lampCold=new si({color:new W(13624319).multiplyScalar(3)}),this.beaconRed=new si({color:new W(16722458).multiplyScalar(4)}),this.toxicGlow=new si({color:new W(8257370).multiplyScalar(2.2)}),this.screenGreen=new si({color:new W(5111706).multiplyScalar(1.6)}),this.screenAmber=new si({color:new W(16757581).multiplyScalar(1.6)}),this.laneLine=new Ba({color:13158592,roughness:.7,map:t.grime,polygonOffset:!0,polygonOffsetFactor:-2}),this.laneYellow=new Ba({color:12096810,roughness:.7,map:t.grime,polygonOffset:!0,polygonOffsetFactor:-2}),this.puddle=new Ba({color:790291,roughness:.04,metalness:.2,envMapIntensity:2.2,transparent:!0,opacity:.85,polygonOffset:!0,polygonOffsetFactor:-3}),this.grimeDecal=new si({map:t.smoke,color:0,transparent:!0,opacity:.55,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2});let n=(e,n)=>new si({map:t.lightPool,color:e,transparent:!0,opacity:n,blending:2,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4});this.lightPoolWarm=n(16752720,.42),this.lightPoolRed=n(16719888,.45),this.lightPoolToxic=n(6356800,.35),this.lightPoolCold=n(10470655,.3);let r=(e,n=1)=>new Br({map:t.glow,color:e,transparent:!0,opacity:n,blending:2,depthWrite:!1});this.glowWarm=r(16756832,.9),this.glowRed=r(16722458),this.glowToxic=r(8453968,.8),this.glowCold=r(12572927,.8),this.cable=new Yi({color:789516})}},Kd={name:`CopyShader`,uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`},qd=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error(`THREE.Pass: .render() must be implemented in derived pass.`)}dispose(){}},Jd=new Do(-1,1,1,-1,0,1),Yd=new class extends Ar{constructor(){super(),this.setAttribute(`position`,new G([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute(`uv`,new G([0,2,0,0,2,0],2))}},Xd=class{constructor(e){this._mesh=new K(Yd,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Jd)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},Zd=class extends qd{constructor(e,t=`tDiffuse`){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Ra?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Fa.clone(e.uniforms),this.material=new Ra({name:e.name===void 0?`unspecified`:e.name,defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Xd(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},Qd=class extends qd{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),i=e.state;i.buffers.color.setMask(!1),i.buffers.depth.setMask(!1),i.buffers.color.setLocked(!0),i.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),i.buffers.stencil.setTest(!0),i.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),i.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),i.buffers.stencil.setClear(o),i.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),i.buffers.color.setLocked(!1),i.buffers.depth.setLocked(!1),i.buffers.color.setMask(!0),i.buffers.depth.setMask(!0),i.buffers.stencil.setLocked(!1),i.buffers.stencil.setFunc(r.EQUAL,1,4294967295),i.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),i.buffers.stencil.setLocked(!0)}},$d=class extends qd{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}},ef=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new z);this._width=n.width,this._height=n.height,t=new Zt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:_}),t.texture.name=`EffectComposer.rt1`}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name=`EffectComposer.rt2`,this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Zd(Kd),this.copyPass.material.blending=0,this.timer=new Fo}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let t=0,r=this.passes.length;t<r;t++){let r=this.passes[t];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){let t=this.renderer.getContext(),n=this.renderer.state.buffers.stencil;n.setFunc(t.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),n.setFunc(t.EQUAL,1,4294967295)}this.swapBuffers()}Qd!==void 0&&(r instanceof Qd?n=!0:r instanceof $d&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new z);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}},tf=class extends qd{constructor(e,t,n=null,r=null,i=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=i,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new W}render(e,t,n){let r=e.autoClear;e.autoClear=!1;let i,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(i=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==1&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(i),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}},nf={name:`LuminosityHighPassShader`,uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new W(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`},rf=class e extends qd{constructor(e,t=1,n,r){super(),this.strength=t,this.radius=n,this.threshold=r,this.resolution=e===void 0?new z(256,256):new z(e.x,e.y),this.clearColor=new W(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Zt(i,a,{type:_,depthBuffer:!1}),this.renderTargetBright.texture.name=`UnrealBloomPass.bright`,this.renderTargetBright.texture.generateMipmaps=!1;for(let e=0;e<this.nMips;e++){let t=new Zt(i,a,{type:_,depthBuffer:!1});t.texture.name=`UnrealBloomPass.h`+e,t.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(t);let n=new Zt(i,a,{type:_,depthBuffer:!1});n.texture.name=`UnrealBloomPass.v`+e,n.texture.generateMipmaps=!1,this.renderTargetsVertical.push(n),i=Math.round(i/2),a=Math.round(a/2)}let o=nf;this.highPassUniforms=Fa.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ra({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let s=[6,10,14,18,22];i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let e=0;e<this.nMips;e++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(s[e])),this.separableBlurMaterials[e].uniforms.invSize.value=new z(1/i,1/a),i=Math.round(i/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new B(1,1,1),new B(1,1,1),new B(1,1,1),new B(1,1,1),new B(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Fa.clone(Kd.uniforms),this.blendMaterial=new Ra({uniforms:this.copyUniforms,vertexShader:Kd.vertexShader,fragmentShader:Kd.fragmentShader,premultipliedAlpha:!0,blending:2,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new W,this._oldClearAlpha=1,this._basic=new si,this._fsQuad=new Xd(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let e=0;e<this.nMips;e++)this.renderTargetsHorizontal[e].setSize(n,r),this.renderTargetsVertical[e].setSize(n,r),this.separableBlurMaterials[e].uniforms.invSize.value=new z(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(t,n,r,i,a){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),a&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=r.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let s=this.renderTargetBright;for(let n=0;n<this.nMips;n++)this._fsQuad.material=this.separableBlurMaterials[n],this.separableBlurMaterials[n].uniforms.colorTexture.value=s.texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[n]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[n].uniforms.colorTexture.value=this.renderTargetsHorizontal[n].texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[n]),t.clear(),this._fsQuad.render(t),s=this.renderTargetsVertical[n];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(r),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(n*n))/n);let r=[],i=[];for(let n=1;n<e;n+=2){let a=t[n],o=n+1<e?t[n+1]:0,s=a+o;r.push((n*a+(n+1)*o)/s),i.push(s)}return new Ra({defines:{KERNEL_PAIRS:r.length},uniforms:{colorTexture:{value:null},invSize:{value:new z(.5,.5)},direction:{value:new z(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:r},gaussianWeights:{value:i}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new Ra({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};rf.BlurDirectionX=new z(1,0),rf.BlurDirectionY=new z(0,1);var af={name:`OutputShader`,uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`},of=class extends qd{constructor(){super(),this.isOutputPass=!0,this.uniforms=Fa.clone(af.uniforms),this.material=new za({name:af.name,uniforms:this.uniforms,vertexShader:af.vertexShader,fragmentShader:af.fragmentShader}),this._fsQuad=new Xd(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},H.getTransfer(this._outputColorSpace)===`srgb`&&(this.material.defines.SRGB_TRANSFER=``),this._toneMapping===1?this.material.defines.LINEAR_TONE_MAPPING=``:this._toneMapping===2?this.material.defines.REINHARD_TONE_MAPPING=``:this._toneMapping===3?this.material.defines.CINEON_TONE_MAPPING=``:this._toneMapping===4?this.material.defines.ACES_FILMIC_TONE_MAPPING=``:this._toneMapping===6?this.material.defines.AGX_TONE_MAPPING=``:this._toneMapping===7?this.material.defines.NEUTRAL_TONE_MAPPING=``:this._toneMapping===5&&(this.material.defines.CUSTOM_TONE_MAPPING=``),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},sf={uniforms:{tDiffuse:{value:null},uTime:{value:0},uDamage:{value:0},uToxic:{value:0},uLowHealth:{value:0},uVignette:{value:.38},uGrain:{value:.035}},vertexShader:`
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float uTime, uDamage, uToxic, uLowHealth, uVignette, uGrain;
    varying vec2 vUv;
    float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
    void main() {
      vec4 c = texture2D(tDiffuse, vUv);
      vec2 d = vUv - 0.5;
      float r = length(d * vec2(1.0, 0.8));
      // Low health desaturation
      float lum = dot(c.rgb, vec3(0.299, 0.587, 0.114));
      c.rgb = mix(c.rgb, vec3(lum), uLowHealth * 0.6);
      // Vignette
      c.rgb *= 1.0 - smoothstep(0.35, 0.95, r) * uVignette;
      // Damage: red edges
      float edge = smoothstep(0.25, 0.8, r);
      c.rgb = mix(c.rgb, vec3(0.55, 0.02, 0.0), edge * uDamage * 0.75);
      // Contamination: sickly green tint and pulsing edges
      float pulse = 0.75 + 0.25 * sin(uTime * 4.0);
      c.rgb = mix(c.rgb, c.rgb * vec3(0.7, 1.15, 0.6) + vec3(0.02, 0.07, 0.0), uToxic * 0.7);
      c.rgb = mix(c.rgb, vec3(0.2, 0.55, 0.05), edge * uToxic * 0.45 * pulse);
      // Film grain
      c.rgb += (hash(vUv * 1000.0 + uTime) - 0.5) * uGrain;
      gl_FragColor = c;
    }
  `},cf=class{renderer;scene=new Ln;camera;sun;hemi;composer;bloom;viewPass;grade;quality=`high`;renderScale=1;sky;constructor(e){this.renderer=new pu({antialias:!0,powerPreference:`high-performance`,stencil:!1}),this.renderer.outputColorSpace=Ve,this.renderer.toneMapping=4,this.renderer.toneMappingExposure=1.15,this.renderer.info.autoReset=!1,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=1,this.renderer.domElement.id=`game-canvas`,e.appendChild(this.renderer.domElement),this.camera=new So(78,window.innerWidth/window.innerHeight,.05,700),this.scene.add(this.camera);let t=new W(2765892);this.scene.fog=new In(t.getHex(),.0105),this.scene.background=t,this.hemi=new lo(7636648,2762274,1.55),this.scene.add(this.hemi);let n=new Ao(3818584,.55);this.scene.add(n),this.sun=new ko(11124191,1.55),this.sun.position.set(40,60,25),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(2048,2048);let r=this.sun.shadow.camera;r.left=-48,r.right=48,r.top=48,r.bottom=-48,r.near=1,r.far=180,this.sun.shadow.bias=-6e-4,this.sun.shadow.normalBias=.04,this.scene.add(this.sun),this.scene.add(this.sun.target),this.sky=this.buildSky(t),this.scene.add(this.sky),this.buildEnvironment(),this.composer=new ef(this.renderer),this.composer.addPass(new tf(this.scene,this.camera)),this.viewPass=new tf(this.scene,this.camera),this.viewPass.clear=!1,this.viewPass.clearDepth=!0,this.composer.addPass(this.viewPass),this.bloom=new rf(new z(window.innerWidth,window.innerHeight),.42,.55,.88),this.composer.addPass(this.bloom),this.composer.addPass(new of),this.grade=new Zd(sf),this.composer.addPass(this.grade),this.resize()}setViewModel(e,t){this.viewPass.scene=e,this.viewPass.camera=t,e.environment=this.scene.environment,e.environmentIntensity=.9}showViewModel(e){this.viewPass.enabled=e}buildSky(e){let t=new Ra({side:1,depthWrite:!1,fog:!1,uniforms:{uFog:{value:e}},vertexShader:`
        varying vec3 vDir;
        void main() { vDir = normalize(position); vec4 p = modelViewMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * p; gl_Position.z = gl_Position.w; }
      `,fragmentShader:`
        uniform vec3 uFog;
        varying vec3 vDir;
        float hash(vec3 p) { return fract(sin(dot(p, vec3(127.1, 311.7, 74.7))) * 43758.5453); }
        void main() {
          float h = vDir.y;
          vec3 zenith = vec3(0.035, 0.06, 0.13);
          vec3 mid = vec3(0.12, 0.17, 0.28);
          // Warm residual glow low in the west (-X)
          float west = pow(max(0.0, dot(normalize(vec3(vDir.x, 0.0, vDir.z)), normalize(vec3(-1.0, 0.0, 0.35)))), 3.0);
          vec3 horizon = mix(uFog * 1.05, vec3(0.42, 0.3, 0.26), west * 0.55);
          vec3 c = mix(horizon, mid, smoothstep(0.0, 0.18, h));
          c = mix(c, zenith, smoothstep(0.18, 0.7, h));
          // Faint stars near the zenith
          vec3 q = floor(vDir * 420.0);
          float s = step(0.9975, hash(q)) * smoothstep(0.25, 0.7, h);
          c += vec3(s) * 0.6;
          // Contamination glow on the northern horizon (-Z)
          float north = pow(max(0.0, -vDir.z), 6.0) * (1.0 - smoothstep(0.0, 0.25, h));
          c += vec3(0.05, 0.12, 0.03) * north;
          if (h < 0.0) c = uFog;
          gl_FragColor = vec4(c, 1.0);
        }
      `}),n=new K(new Oa(600,32,16),t);return n.renderOrder=-1,n.frustumCulled=!1,n}buildEnvironment(){let e=new bs(this.renderer),t=new Ln;t.add(this.sky.clone());let n=new si({color:new W(16754784).multiplyScalar(4),side:2});for(let e=0;e<6;e++){let r=new K(new Da(20,4),n),i=e/6*Math.PI*2;r.position.set(Math.cos(i)*120,8,Math.sin(i)*120),r.lookAt(0,8,0),t.add(r)}let r=new K(new Da(40,10),new si({color:new W(6356800).multiplyScalar(1.5),side:2}));r.position.set(0,10,-150),t.add(r);let i=e.fromScene(t,.02);this.scene.environment=i.texture,this.scene.environmentIntensity=.55,e.dispose()}setQuality(e,t){this.quality=e,this.renderScale=t;let n=window.devicePixelRatio||1,r=e===`high`?2:e===`medium`?1.25:1;this.renderer.setPixelRatio(Math.min(n,r)*t);let i=e!==`low`;this.renderer.shadowMap.enabled!==i&&(this.renderer.shadowMap.enabled=i,this.scene.traverse(e=>{let t=e.material;t&&(Array.isArray(t)?t:[t]).forEach(e=>{e.needsUpdate=!0})}));let a=e===`high`?2048:1024;this.sun.shadow.mapSize.x!==a&&(this.sun.shadow.mapSize.set(a,a),this.sun.shadow.map?.dispose(),this.sun.shadow.map=null),this.bloom.enabled=e!==`low`,this.resize()}resize(){let e=window.innerWidth,t=window.innerHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t),this.composer.setPixelRatio(this.renderer.getPixelRatio()),this.composer.setSize(e,t),this.bloom.resolution.set(e,t)}get pixelHeight(){return this.renderer.domElement.height}followShadow(e,t){let n=96/this.sun.shadow.mapSize.x,r=Math.round(e/n)*n,i=Math.round(t/n)*n;this.sun.position.set(r+40,60,i+25),this.sun.target.position.set(r,0,i),this.sun.target.updateMatrixWorld()}render(e){this.sky.position.copy(this.camera.position),this.grade.uniforms.uTime.value=e,this.renderer.info.reset(),this.composer.render()}get qualityLevel(){return this.quality}get scale(){return this.renderScale}},lf=e=>document.getElementById(e),uf=class{map;cache=new Map;hitT=0;dmgDirs=[];cashShown=0;deltaT=0;hintT=22;mini;tac;wpEls=new Map;tmp=new B;hitVignette=0;stationFlash=null;constructor(e){this.map=e,this.mini=lf(`minimap`).getContext(`2d`),this.tac=lf(`tacmap-canvas`)}reset(){this.cache.clear(),lf(`toasts`).innerHTML=``,lf(`dmg-dirs`).innerHTML=``,this.dmgDirs=[],this.hintT=22,lf(`controls-hint`).style.opacity=`1`,this.cashShown=-1,this.hitVignette=0,lf(`center-msg`).classList.add(`hidden`),this.setStation(null,``)}show(e){lf(`hud`).classList.toggle(`hidden`,!e)}set(e,t,n){let r=e+`:`+t;if(this.cache.get(r)===n)return;this.cache.set(r,n);let i=lf(e);i&&(t===`text`?i.textContent=n:t===`html`?i.innerHTML=n:t===`class`?i.className=n:t===`width`?i.style.width=n:t===`display`&&i.classList.toggle(`hidden`,n===`none`))}toast(e,t=``,n=``,r=2.8){let i=document.createElement(`div`);if(i.className=`toast `+t,i.textContent=e,n){let e=document.createElement(`span`);e.className=`small`,e.textContent=n,i.appendChild(e)}let a=lf(`toasts`);for(a.appendChild(i);a.children.length>4;)a.removeChild(a.firstChild);window.setTimeout(()=>i.remove(),r*1e3)}centerMessage(e){e===null?this.set(`center-msg`,`display`,`none`):(this.set(`center-msg`,`display`,`block`),this.set(`center-msg`,`text`,e))}hit(e){let t=lf(`hitmarker`);t.className=e,t.style.opacity=`1`,this.hitT=e===`kill`?.28:.16}damageFrom(e,t,n){let r=document.createElement(`div`);r.className=`dmg-dir`,lf(`dmg-dirs`).appendChild(r),this.dmgDirs.push({el:r,x:e,z:t,t:n?1.4:1}),this.hitVignette=Math.min(1,this.hitVignette+(n?.6:.35))}get damageVignette(){return this.hitVignette}setStation(e,t){if(!e){this.set(`station`,`display`,`none`);return}this.set(`station`,`display`,`block`),this.set(`station-title`,`text`,t);let n=e.map((e,t)=>`<div class="station-item ${e.enabled?``:`off`} ${this.stationFlash&&this.stationFlash.idx===t?this.stationFlash.ok?`flash`:`deny`:``}">
      <kbd>${e.key}</kbd><div><div class="nm">${e.name}</div><div class="ds">${e.desc}</div></div><div class="pr">${e.price}</div></div>`).join(``);this.set(`station-items`,`html`,n)}flashStation(e,t){this.stationFlash={idx:e,ok:t,t:.35}}updateWaypoints(e,t,n,r){let i=lf(`waypoints`),a=new Set,o=window.innerWidth,s=window.innerHeight;for(let c of e){let e=c.kind+c.label;a.add(e);let l=this.wpEls.get(e);l||(l=document.createElement(`div`),l.className=`wp `+c.kind,l.innerHTML=`<div class="ico"><span>${c.icon}</span></div><div class="dist"></div><div class="lbl">${c.label}</div>`,i.appendChild(l),this.wpEls.set(e,l)),this.tmp.set(c.x,c.y,c.z).project(t);let u=this.tmp.z>1,d=(this.tmp.x*.5+.5)*o,f=(-this.tmp.y*.5+.5)*s;u&&(d=this.tmp.x>0?40:o-40,f=s*.5),d=Math.max(40,Math.min(o-40,d)),f=Math.max(d<380||d>o-260?330:90,Math.min(s-170,f)),l.style.left=d+`px`,l.style.top=f+`px`;let p=Math.round(Math.hypot(c.x-n,c.z-r));l.children[1].textContent=p+`m`;let m=Math.hypot(d-o/2,f-s/2);l.style.opacity=String(Math.max(.25,Math.min(1,m/180)))}for(let[e,t]of this.wpEls)a.has(e)||(t.remove(),this.wpEls.delete(e))}drawMaps(e,t){if(this.map.drawMini(this.mini,200,e),t){let t=this.tac.getBoundingClientRect(),n=Math.min(2,window.devicePixelRatio||1),r=Math.max(1,Math.floor(t.width*n)),i=Math.max(1,Math.floor(t.height*n));(this.tac.width!==r||this.tac.height!==i)&&(this.tac.width=r,this.tac.height=i),this.map.drawFull(this.tac.getContext(`2d`),r,i,e)}}update(e,t){let n=Math.ceil(t.remaining),r=Math.floor(n/60),i=n%60;this.set(`timer`,`text`,`${String(r).padStart(2,`0`)}:${String(i).padStart(2,`0`)}`),this.set(`timer`,`class`,t.finalPhase||t.remaining<90?`urgent`:``),this.set(`timer-label`,`text`,t.timerLabel),this.set(`phase-banner`,`display`,t.finalPhase?`block`:`none`),this.set(`phase-banner`,`text`,t.toxic?`CONTAMINATED · GET OUT`:`CONTAMINATION SPREADING`),this.set(`contracts`,`html`,t.contracts.map(e=>`<div class="contract ${e.state===`done`?`done`:e.state===`locked`?`locked`:``}">
      <div class="c-title"><span>${e.title}</span><span class="tag">${e.tag}</span></div>
      <div class="c-sub ${e.warn?`warn`:``}">${e.sub}</div>
      ${e.progress===void 0?``:`<div class="c-bar"><i style="width:${Math.round(e.progress*100)}%"></i></div>`}</div>`).join(``));let a=bu[t.region];this.set(`region-name`,`text`,a.label),this.set(`region-threat`,`text`,a.threat),this.set(`region-threat`,`class`,`threat `+t.region),this.set(`health-fill`,`width`,`${Math.max(0,t.health)}%`),this.set(`health-fill`,`class`,t.health<35?`low`:``),this.set(`health-num`,`text`,String(Math.ceil(t.health)));let o=lf(`armor-row`).children;for(let e=0;e<3;e++){let n=Math.max(0,Math.min(1,(t.armor-e*50)/50)),r=o[e].firstElementChild,i=`${Math.round(n*100)}%`;r.style.width!==i&&(r.style.width=i)}if(this.set(`plates`,`text`,String(t.plates)),this.set(`grenades`,`text`,String(t.grenades)),this.cashShown<0&&(this.cashShown=t.cash),t.cash!==this.cashShown){let e=t.cash-this.cashShown,n=lf(`cash-delta`);n.textContent=(e>0?`+`:``)+e,n.style.color=e>0?`var(--green)`:`var(--red)`,n.style.opacity=`1`,this.deltaT=1.2,this.cashShown=t.cash}this.deltaT>0&&(this.deltaT-=e,this.deltaT<=0&&(lf(`cash-delta`).style.opacity=`0`)),this.set(`cash`,`text`,t.cash.toLocaleString(`en-US`)),this.set(`weapon-name`,`text`,t.weaponName),this.set(`weapon-tier`,`text`,t.tier===0?``:t.tier===1?`TIER I`:`TIER II`),this.set(`weapon-tier`,`class`,t.tier===0?`tier hidden`:`tier t${t.tier}`),this.set(`ammo-mag`,`text`,String(t.mag)),this.set(`ammo-mag`,`class`,t.mag<=Math.ceil(t.magSize*.25)?`low`:``),this.set(`ammo-res`,`text`,String(t.reserve)),this.set(`weapon-secondary`,`text`,t.secondary),this.set(`reload-hint`,`display`,!t.reloading&&t.mag<=Math.ceil(t.magSize*.25)&&t.reserve>0?`block`:`none`),this.set(`reload-hint`,`text`,t.mag===0?`RELOAD  [R]`:`LOW AMMO  [R]`);let s=lf(`crosshair`),c=String(Math.max(0,1-t.adsT*2.5)*(t.sprinting?.25:1));s.style.opacity!==c&&(s.style.opacity=c);let l=Math.round(4+t.spreadPx),u=String(l);this.cache.get(`gap`)!==u&&(this.cache.set(`gap`,u),s.children[0].style.top=`${-l-9}px`,s.children[1].style.top=`${l}px`,s.children[2].style.left=`${-l-9}px`,s.children[3].style.left=`${l}px`);let d=lf(`stamina`),f=t.stamina<99;d.style.opacity=f?`1`:`0`,d.classList.toggle(`exhausted`,t.exhausted),this.set(`stamina-fill`,`width`,`${Math.round(t.stamina)}%`),this.set(`plate-bar`,`display`,t.plateProgress>0?`block`:`none`),this.set(`plate-fill`,`width`,`${Math.round(t.plateProgress*100)}%`),this.set(`boss`,`display`,t.eliteHp===null?`none`:`block`),t.eliteHp!==null&&this.set(`boss-fill`,`width`,`${Math.max(0,t.eliteHp*100).toFixed(1)}%`),this.set(`prompt`,`display`,t.prompt?`block`:`none`),t.prompt&&this.set(`prompt`,`html`,t.prompt),this.set(`fps`,`display`,t.fps?`block`:`none`),t.fps&&this.set(`fps`,`text`,t.fps),this.hitT>0&&(this.hitT-=e,this.hitT<=0&&(lf(`hitmarker`).style.opacity=`0`));for(let n=this.dmgDirs.length-1;n>=0;n--){let r=this.dmgDirs[n];if(r.t-=e,r.t<=0){r.el.remove(),this.dmgDirs.splice(n,1);continue}let i=r.x-t.px,a=r.z-t.pz,o=-Math.sin(t.yaw),s=-Math.cos(t.yaw),c=Math.cos(t.yaw),l=-Math.sin(t.yaw),u=Math.atan2(i*c+a*l,i*o+a*s);r.el.style.transform=`rotate(${u}rad)`,r.el.style.opacity=String(Math.min(1,r.t))}this.hitVignette=Math.max(0,this.hitVignette-e*.9),this.hintT>0&&(this.hintT-=e,this.hintT<=0&&(lf(`controls-hint`).style.opacity=`0`)),this.stationFlash&&(this.stationFlash.t-=e,this.stationFlash.t<=0&&(this.stationFlash=null))}},df=3,ff={road:`#2b3036`,sidewalk:`#3a3f44`,lot:`#2f3439`,yard:`#35332c`,compound:`#2c3330`,building:`#6b7178`,interior:`#8c949b`,container:`#6f5a48`,prop:`#575d63`,wall:`#9aa0a6`,fence:`#7d8a94`},pf=class{base;w;h;constructor(e){this.w=(gu.maxX-gu.minX)*df,this.h=(gu.maxZ-gu.minZ)*df,this.base=document.createElement(`canvas`),this.base.width=this.w,this.base.height=this.h;let t=this.base.getContext(`2d`);t.fillStyle=`#1b1f22`,t.fillRect(0,0,this.w,this.h);let n=(e,n,r)=>{t.fillStyle=r,t.fillRect(0,this.toY(e),this.w,this.toY(n)-this.toY(e))};n(gu.minZ,xu.mediumMinZ,`rgba(180,50,40,0.22)`),n(xu.mediumMinZ,xu.lowMinZ,`rgba(210,160,60,0.16)`),n(xu.lowMinZ,gu.maxZ,`rgba(120,180,100,0.14)`);let r=[`compound`,`yard`,`lot`,`road`,`sidewalk`,`prop`,`container`,`fence`,`building`,`interior`,`wall`],i=e.regionShapes();for(let e of r){t.fillStyle=ff[e];for(let n of i){if(n.kind!==e)continue;let r=this.toX(Math.min(n.x0,n.x1)),i=this.toY(Math.min(n.z0,n.z1)),a=Math.abs(n.x1-n.x0)*df,o=Math.abs(n.z1-n.z0)*df;t.fillRect(r,i,Math.max(1,a),Math.max(1,o)),e===`interior`&&(t.strokeStyle=`#c3cad0`,t.lineWidth=2,t.strokeRect(r+1,i+1,a-2,o-2))}}n(gu.minZ,xu.mediumMinZ,`rgba(200,60,45,0.14)`),n(xu.mediumMinZ,xu.lowMinZ,`rgba(220,170,60,0.09)`),n(xu.lowMinZ,gu.maxZ,`rgba(120,190,100,0.08)`);let a=e.poi.reactor;t.fillStyle=`#4a7a3a`,t.beginPath(),t.arc(this.toX(a.x),this.toY(a.z),27,0,Math.PI*2),t.fill(),t.font=`bold 22px "DIN Alternate","Arial Narrow",sans-serif`,t.fillStyle=`rgba(230,230,220,0.35)`,t.textAlign=`center`,t.fillText(`HALCYON COMPOUND`,this.toX(0),this.toY(-100)),t.fillText(`KESSLER DEPOT`,this.toX(-40),this.toY(-18.5)+8),t.fillText(`CHECKPOINT 7`,this.toX(0),this.toY(96))}toX(e){return(e-gu.minX)*df}toY(e){return(e-gu.minZ)*df}drawMini(e,t,n,r=45){let i=t/(r*2);e.save(),e.clearRect(0,0,t,t),e.beginPath(),e.rect(0,0,t,t),e.clip(),e.fillStyle=`#12161a`,e.fillRect(0,0,t,t),e.translate(t/2,t/2),e.rotate(n.yaw),e.scale(i/df,i/df),e.translate(-this.toX(n.px),-this.toY(n.pz)),e.globalAlpha=.95,e.drawImage(this.base,0,0),e.globalAlpha=1,this.overlays(e,n,df,1/(i/df)),e.restore(),e.save(),e.translate(t/2,t/2),e.fillStyle=`#f4f1e6`,e.beginPath(),e.moveTo(0,-8),e.lineTo(6,7),e.lineTo(0,3),e.lineTo(-6,7),e.closePath(),e.fill(),e.restore(),e.save(),e.translate(t/2,t/2),e.rotate(n.yaw),e.fillStyle=`#e8c35a`,e.font=`bold 12px "DIN Alternate",sans-serif`,e.textAlign=`center`,e.fillText(`N`,0,-t/2+13),e.restore()}drawFull(e,t,n,r){let i=Math.min(t/this.w,n/this.h)*.95,a=(t-this.w*i)/2,o=(n-this.h*i)/2;e.clearRect(0,0,t,n),e.save(),e.translate(a,o),e.scale(i,i),e.drawImage(this.base,0,0),this.overlays(e,r,df,1/i,!0),e.translate(this.toX(r.px),this.toY(r.pz)),e.rotate(-r.yaw),e.scale(1/i,1/i),e.fillStyle=`#ffffff`,e.strokeStyle=`#000`,e.lineWidth=2,e.beginPath(),e.moveTo(0,-12),e.lineTo(9,10),e.lineTo(0,5),e.lineTo(-9,10),e.closePath(),e.stroke(),e.fill(),e.restore()}overlays(e,t,n,r,i=!1){if(t.contamination){let i=t.contamination;e.fillStyle=`rgba(90,255,60,0.16)`,e.strokeStyle=`rgba(120,255,80,0.8)`,e.lineWidth=3*r,e.beginPath(),e.arc(this.toX(i.x),this.toY(i.z),i.r*n,0,Math.PI*2),e.fill(),e.stroke()}if(t.defenseRing){let i=t.defenseRing;e.strokeStyle=`rgba(255,170,60,0.9)`,e.setLineDash([6*r,5*r]),e.lineWidth=2*r,e.beginPath(),e.arc(this.toX(i.x),this.toY(i.z),i.r*n,0,Math.PI*2),e.stroke(),e.setLineDash([])}let a=r;for(let n of t.markers){let r=this.toX(n.x),o=this.toY(n.z);e.save(),e.translate(r,o),i||e.rotate(-t.yaw),e.scale(a,a),mf(e,n.kind,i),e.restore()}}};function mf(e,t,n){let r=n?1.35:1;switch(e.scale(r,r),e.lineWidth=2,e.textAlign=`center`,e.textBaseline=`middle`,t){case`zombie`:e.fillStyle=`#e0473a`,e.beginPath(),e.arc(0,0,3,0,Math.PI*2),e.fill();break;case`crate`:e.fillStyle=`#e8b940`,e.fillRect(-4,-3,8,6),e.strokeStyle=`#1a1a1a`,e.lineWidth=1,e.strokeRect(-4,-3,8,6);break;case`drop`:e.fillStyle=`#60c0ff`,e.fillRect(-3,-2,6,4);break;case`buy`:case`upgrade`:e.fillStyle=t===`buy`?`#3ecf7a`:`#48a8ff`,e.fillRect(-8,-8,16,16),e.fillStyle=`#0b0f10`,e.font=`bold 12px "DIN Alternate",sans-serif`,e.fillText(t===`buy`?`$`:`U`,0,1);break;case`contract`:case`contractDone`:e.fillStyle=t===`contract`?`#ffb040`:`#7a7a70`,e.beginPath(),e.moveTo(0,-10),e.lineTo(10,0),e.lineTo(0,10),e.lineTo(-10,0),e.closePath(),e.fill(),e.fillStyle=`#111`,e.font=`bold 11px "DIN Alternate",sans-serif`,e.fillText(`D`,0,1);break;case`lz`:case`lzLocked`:e.fillStyle=t===`lz`?`#f2e36a`:`#6a6a60`,e.beginPath(),e.arc(0,0,10,0,Math.PI*2),e.fill(),e.fillStyle=`#111`,e.font=`bold 13px "DIN Alternate",sans-serif`,e.fillText(`H`,0,1);break;case`elite`:e.fillStyle=`#ff3a2a`,e.beginPath(),e.moveTo(0,-11),e.lineTo(9,7),e.lineTo(-9,7),e.closePath(),e.fill(),e.fillStyle=`#111`,e.font=`bold 11px "DIN Alternate",sans-serif`,e.fillText(`!`,0,2);break;case`eliteArea`:e.strokeStyle=`rgba(255,70,50,0.9)`,e.fillStyle=`rgba(255,70,50,0.15)`,e.beginPath(),e.arc(0,0,n?40:30,0,Math.PI*2),e.fill(),e.stroke()}}var hf=e=>document.getElementById(e),gf=class{game;settingsReturn=`title`;constructor(e){this.game=e,hf(`btn-deploy`).addEventListener(`click`,()=>void this.game.deploy()),hf(`btn-settings`).addEventListener(`click`,()=>this.openSettings(`title`)),hf(`btn-resume`).addEventListener(`click`,()=>void this.game.resume()),hf(`btn-pause-settings`).addEventListener(`click`,()=>this.openSettings(`pause`)),hf(`btn-restart`).addEventListener(`click`,()=>this.game.restart()),hf(`btn-quit`).addEventListener(`click`,()=>this.game.quitToTitle()),hf(`btn-again`).addEventListener(`click`,()=>this.game.restart()),hf(`btn-menu`).addEventListener(`click`,()=>this.game.quitToTitle()),hf(`btn-settings-back`).addEventListener(`click`,()=>this.showScreen(this.settingsReturn)),this.bindSettings(),this.renderBest()}showScreen(e,t=``){for(let t of[`title`,`pause`,`settings`,`results`])hf(t).classList.toggle(`hidden`,t!==e);e===`pause`&&this.setResumeNote(t),e===`title`&&this.renderBest()}setResumeNote(e){hf(`resume-note`).textContent=e}showMap(e){hf(`tacmap`).classList.toggle(`hidden`,!e)}openSettings(e){this.settingsReturn=e,this.syncSettingsUI(),this.showScreen(`settings`)}bindSettings(){let e=this.game,t=(t,n,r)=>hf(t).addEventListener(n,t=>{r(t.target),e.applySettings(),this.syncSettingsUI()});t(`set-sens`,`input`,t=>{e.settings.sensitivity=+t.value}),t(`set-fov`,`input`,t=>{e.settings.fov=+t.value}),t(`set-vol`,`input`,t=>{e.settings.volume=+t.value}),t(`set-quality`,`change`,t=>{e.settings.quality=t.value}),t(`set-scale`,`change`,t=>{e.settings.renderScale=+t.value}),t(`set-motion`,`change`,t=>{e.settings.reducedMotion=t.checked}),t(`set-fps`,`change`,t=>{e.settings.showFps=t.checked})}syncSettingsUI(){let e=this.game.settings;hf(`set-sens`).value=String(e.sensitivity),hf(`out-sens`).textContent=e.sensitivity.toFixed(2),hf(`set-fov`).value=String(e.fov),hf(`out-fov`).textContent=String(e.fov),hf(`set-vol`).value=String(e.volume),hf(`out-vol`).textContent=`${Math.round(e.volume*100)}%`,hf(`set-quality`).value=e.quality,hf(`set-scale`).value=String(e.renderScale),hf(`out-scale`).textContent=`${Math.round(e.renderScale*100)}%`,hf(`set-motion`).checked=e.reducedMotion,hf(`set-fps`).checked=e.showFps}renderBest(){let e=this.game.bestRun;hf(`best-run`).textContent=e?`BEST EXTRACTION  ${_f(e.time)}  ·  ${e.kills} KILLS  ·  ${e.headshots} HEADSHOTS`:``}showResults(e,t,n,r){let i=hf(`result-title`);i.textContent=e===`victory`?`EXTRACTED`:e===`dead`?`KILLED IN ACTION`:`ZONE LOST`,i.className=e===`victory`?`win`:`lose`,hf(`result-kicker`).textContent=e===`victory`?`MISSION REPORT · SUCCESS`:`MISSION REPORT · FAILURE`,hf(`result-sub`).textContent=e===`victory`?`RAVEN 2-1 cleared the district with you aboard. The uplink data and the WARDEN-9 confirmation made it out.`:e===`dead`?`Your signal went dark inside the exclusion zone. Recovery teams will not be sent.`:`The contamination front swallowed the landing zone before you could get out.`;let a=[[`OUTCOME`,e===`victory`?`SUCCESS`:`FAILED`],[`SURVIVAL TIME`,_f(t.time)],[`CONTRACTS`,`${t.contracts} / 2`],[`KILLS`,String(t.kills)],[`HEADSHOTS`,String(t.headshots)],[`ACCURACY`,`${Math.round(t.accuracy*100)}%`],[`SALVAGE EARNED`,`$${t.salvage.toLocaleString(`en-US`)}`],[`CACHES LOOTED`,String(t.caches)],[`EXTRACTED`,e===`victory`?`YES`:`NO`]];hf(`result-stats`).replaceChildren(...a.map(([e,t])=>{let n=document.createElement(`div`);n.className=`stat`;let r=document.createElement(`div`);r.className=`v`,r.textContent=t;let i=document.createElement(`div`);return i.className=`k2`,i.textContent=e,n.append(r,i),n})),hf(`result-best`).textContent=n?`NEW BEST EXTRACTION TIME`:r?`BEST EXTRACTION  ${_f(r.time)}`:``,this.showScreen(`results`)}};function _f(e){let t=Math.floor(e);return`${Math.floor(t/60)}:${String(t%60).padStart(2,`0`)}`}var vf=class{group=new On;list=[];geo;mat;blink;constructor(){let e=new Oa(.06,10,8);e.scale(1,1.25,1),this.geo=e,this.mat=new Ba({color:4146738,roughness:.6,metalness:.3}),this.blink=new si({color:new W(16724e3).multiplyScalar(3)})}reset(){for(let e of this.list)this.group.remove(e.mesh);this.list.length=0}throw(e,t,n,r,i,a,o,s){let c=new K(this.geo,this.mat),l=new K(new Oa(.015,6,4),this.blink);l.position.y=.08,c.add(l),c.castShadow=!0;let u=new B(r,i+.28,a).normalize().multiplyScalar(Eu.throwSpeed);u.x+=o*.6,u.z+=s*.6;let d={mesh:c,pos:new B(e,t,n),vel:u,fuse:Eu.fuse,spin:new B(Math.random()*10,Math.random()*10,0),lastBounce:0};c.position.copy(d.pos),this.group.add(c),this.list.push(d)}update(e,t,n){let r=[];for(let i=this.list.length-1;i>=0;i--){let a=this.list[i];a.fuse-=e,a.lastBounce+=e,a.vel.y-=18*e;let o=a.vel.length()*e,s=0;for(;o>1e-4&&s++<3;){let e=a.vel.length();if(e<1e-4)break;let r=a.vel.x/e,i=a.vel.y/e,s=a.vel.z/e,c=t.raycast(a.pos.x,a.pos.y,a.pos.z,r,i,s,o+.06,!1);if(c&&c.dist<=o+.06){let e=Math.max(0,c.dist-.06);a.pos.x+=r*e,a.pos.y+=i*e,a.pos.z+=s*e,o-=e;let t=a.vel.x*c.nx+a.vel.y*c.ny+a.vel.z*c.nz;a.vel.x-=2*t*c.nx,a.vel.y-=2*t*c.ny,a.vel.z-=2*t*c.nz,a.vel.multiplyScalar(Eu.bounce),c.ny>.7&&(a.vel.x*=.7,a.vel.z*=.7),Math.abs(t)>2&&a.lastBounce>.08&&(n(a.pos.x,a.pos.z),a.lastBounce=0),a.spin.multiplyScalar(.6),a.vel.length()<.5&&(a.vel.set(0,0,0),o=0)}else a.pos.x+=r*o,a.pos.y+=i*o,a.pos.z+=s*o,o=0}a.pos.y<.06&&(a.pos.y=.06,a.vel.y<0&&(a.vel.y=0),a.vel.x*=.9,a.vel.z*=.9),a.mesh.position.copy(a.pos),a.mesh.rotation.x+=a.spin.x*e,a.mesh.rotation.z+=a.spin.y*e,a.mesh.children[0].visible=Math.sin(a.fuse*(a.fuse<1?40:18))>0,a.fuse<=0&&(r.push({x:a.pos.x,y:a.pos.y,z:a.pos.z}),this.group.remove(a.mesh),this.list.splice(i,1))}return r}},yf=[{accent:2763822,emissive:0,ei:0,body:4869714},{accent:1858186,emissive:2795775,ei:1.6,body:3820124},{accent:9058844,emissive:16734746,ei:2.2,body:4863026}],bf=class{scene=new Ln;camera;rig=new On;models=new Map;current=null;plate;flashLight;flashT=0;kick=0;kickV=0;kickRot=0;kickRotV=0;swayX=0;swayY=0;tiltZ=0;gloveMat;sleeveMat;skinMat;metal;polymer;wood;tex;tmp=new B;constructor(e){this.tex=e,this.camera=new So(52,1,.01,10),this.scene.add(this.camera),this.camera.add(this.rig),this.scene.add(new lo(10466260,3814962,2));let t=new ko(13162224,2.2);t.position.set(-1,2,1),this.scene.add(t);let n=new ko(16756848,.6);n.position.set(2,.5,-1),this.scene.add(n),this.flashLight=new Eo(16757850,0,2,1.5),this.camera.add(this.flashLight),this.flashLight.position.set(.1,-.05,-.7),this.gloveMat=new Ba({color:4868674,roughness:.85,map:e.grime}),this.sleeveMat=new Ba({color:7305296,roughness:.95,map:e.grime}),this.skinMat=new Ba({color:10189410,roughness:.7}),this.metal=new Ba({color:6975090,roughness:.38,metalness:.7,map:e.grime}),this.polymer=new Ba({color:3422010,roughness:.7,metalness:.1,map:e.grime}),this.wood=new Ba({color:9067062,roughness:.6,map:e.wood.map}),this.models.set(`rifle`,this.buildRifle()),this.models.set(`pistol`,this.buildPistol()),this.models.set(`shotgun`,this.buildShotgun());for(let e of this.models.values())e.root.visible=!1,this.rig.add(e.root);this.plate=new K(new q(.22,.28,.025),new Ba({color:4014648,roughness:.6,metalness:.4,map:e.grime})),this.plate.visible=!1,this.camera.add(this.plate),this.setTier(`rifle`,0),this.setTier(`pistol`,0),this.setTier(`shotgun`,0),this.traverseNoCull()}traverseNoCull(){this.scene.traverse(e=>{e.frustumCulled=!1})}resize(e){this.camera.aspect=e,this.camera.updateProjectionMatrix()}box(e,t,n,r,i,a,o,s,c=0,l=0,u=0){let d=new K(new q(n,r,i),t);return d.position.set(a,o,s),d.rotation.set(c,l,u),e.add(d),d}cyl(e,t,n,r,i,a,o,s=12,c=n){let l=new K(new Sa(n,c,r,s),t);return l.rotation.x=Math.PI/2,l.position.set(i,a,o),e.add(l),l}hand(e,t,n,r,i){let a=new On;a.position.copy(t),e.add(a),this.box(a,this.gloveMat,.05,.075,.085,r*.028,-.005,0);for(let e=0;e<4;e++){let t=i===`under`?-.02:.025-e*.021,n=i===`under`?-.03+e*.021:-.03,o=this.box(a,this.gloveMat,.056,.018,.02,-r*.006,t,n);i===`under`&&(o.position.y=-.03,o.position.x=-r*.018,o.rotation.z=r*.4)}this.box(a,this.polymer,.02,.07,.03,r*.05,0,-.02);let o=this.box(a,this.gloveMat,.018,.018,.06,-r*.02,.035,-.02,.2,r*.3,0);i===`pistol`&&o.position.set(-r*.03,.03,-.02);let s=new B(r*.035,-.02,.05),c=n.clone().sub(t).sub(s),l=c.length(),u=new On;u.position.copy(s),a.add(u),u.quaternion.setFromUnitVectors(new B(0,0,1),c.clone().normalize());let d=new K(new Sa(.036,.038,.05,10),this.gloveMat);d.rotation.x=Math.PI/2,d.position.z=.02,u.add(d);let f=new K(new Sa(.043,.05,l,10),this.sleeveMat);f.rotation.x=Math.PI/2,f.position.z=l/2+.03,u.add(f);let p=new K(new Sa(.052,.052,.04,10),this.sleeveMat);if(p.rotation.x=Math.PI/2,p.position.z=.09,u.add(p),r<0){let e=new K(new q(.03,.012,.03),this.polymer);e.position.set(0,.04,.05),u.add(e);let t=new K(new q(.016,.002,.016),new si({color:1731130}));t.position.set(0,.047,.05),u.add(t)}return this.skinMat,a}flashSprite(e){let t=new ei(new Br({map:this.tex.flash,color:16767136,blending:2,depthWrite:!1,transparent:!0}));return t.scale.set(.2,.2,1),t.visible=!1,e.add(t),t}tierMats(){return{accents:new Ba({color:1711134,roughness:.4,metalness:.6}),body:new Ba({color:2895667,roughness:.5,metalness:.5,map:this.tex.grime})}}buildRifle(){let e=new On,{accents:t,body:n}=this.tierMats();this.box(e,n,.058,.07,.3,0,.02,-.07),this.box(e,n,.052,.035,.34,0,.068,-.09),this.box(e,this.metal,.03,.012,.36,0,.09,-.1);for(let t=0;t<12;t++)this.box(e,this.metal,.034,.006,.012,0,.098,-.26+t*.03);this.box(e,this.metal,.004,.022,.05,.03,.045,-.04),this.box(e,this.metal,.02,.012,.03,.03,.07,.05),this.box(e,this.polymer,.064,.066,.3,0,.035,-.4);for(let n=0;n<5;n++)this.box(e,t,.066,.012,.035,0,.035,-.3-n*.05);this.box(e,this.metal,.028,.01,.28,0,.073,-.4),this.cyl(e,this.metal,.012,.2,0,.035,-.62),this.cyl(e,this.metal,.02,.075,0,.035,-.745,8);for(let t=0;t<3;t++)this.box(e,this.polymer,.042,.004,.008,0,.035,-.73-t*.015);let r=new Dn;r.position.set(0,.035,-.8),e.add(r);let i=new On;i.position.set(0,-.02,-.12),e.add(i),this.box(i,this.polymer,.032,.1,.07,0,-.05,0,.12),this.box(i,this.polymer,.032,.08,.066,0,-.13,.018,.32),this.box(i,t,.034,.012,.072,0,-.17,.03,.32),this.box(e,n,.05,.03,.09,0,-.01,-.12),this.box(e,this.polymer,.034,.11,.045,0,-.05,.035,-.32),this.box(e,this.metal,.008,.004,.06,0,-.03,-.02),this.box(e,this.polymer,.04,.05,.16,0,.03,.16),this.box(e,this.polymer,.046,.075,.1,0,.018,.27),this.box(e,this.gloveMat,.05,.115,.025,0,.01,.33),this.box(e,this.metal,.03,.018,.05,0,.105,-.07);let a=new K(new Sa(.019,.019,.06,20,1,!0),new Ba({color:2764080,roughness:.5,metalness:.6,side:2}));a.rotation.x=Math.PI/2,a.position.set(0,.13,-.07),e.add(a);for(let t of[-.1,-.04]){let n=new K(new ka(.02,.003,6,20),this.metal);n.position.set(0,.13,t),e.add(n)}let o=new K(new xa(.018,20),new Ba({color:5933690,roughness:.05,metalness:.2,transparent:!0,opacity:.12,depthWrite:!1}));o.position.set(0,.13,-.1),e.add(o);let s=new K(new xa(.0011,10),new si({color:new W(4,.3,.2)}));s.position.set(0,.13,-.104),e.add(s),this.box(e,this.polymer,.03,.075,.035,0,-.03,-.42);let c=this.box(e,this.metal,.024,.012,.02,-.03,.07,.04);this.hand(e,new B(0,-.045,.045),new B(.14,-.2,.38),1,`pistol`);let l=this.hand(e,new B(0,-.035,-.42),new B(-.17,-.22,-.08),-1,`vertical`);return{id:`rifle`,root:e,mag:i,magHome:i.position.clone(),mover:c,moverHome:c.position.clone(),muzzle:r,sight:new B(0,.13,-.03),adsDist:.3,hip:new B(.15,-.2,-.36),leftHand:l,leftHome:l.position.clone(),leftHomeRot:l.rotation.clone(),flash:this.flashSprite(r),accents:t,body:n}}buildPistol(){let e=new On,{accents:t,body:n}=this.tierMats(),r=new On;e.add(r),this.box(r,n,.03,.034,.19,0,.035,-.06);for(let e=0;e<6;e++)this.box(r,this.metal,.032,.026,.004,0,.035,0+e*.008);this.box(r,this.metal,.006,.01,.006,0,.056,-.145),this.box(r,this.metal,.024,.01,.006,0,.056,.02),this.box(r,new si({color:10157978}),.003,.003,.002,0,.058,-.149),this.box(r,t,.031,.006,.12,0,.051,-.07),this.box(e,this.polymer,.028,.024,.16,0,.008,-.05),this.box(e,this.metal,.024,.004,.05,0,-.012,-.03),this.box(e,this.polymer,.03,.115,.048,0,-.05,.02,-.25),this.cyl(e,this.metal,.009,.02,0,.035,-.158);let i=new Dn;i.position.set(0,.035,-.17),e.add(i);let a=new On;a.position.set(0,-.06,.03),a.rotation.x=-.25,e.add(a),this.box(a,this.metal,.024,.1,.036,0,-.02,0),this.box(a,t,.028,.012,.042,0,-.07,0),this.hand(e,new B(0,-.05,.03),new B(.12,-.22,.34),1,`pistol`);let o=this.hand(e,new B(-.022,-.065,.02),new B(-.15,-.24,.3),-1,`under`);return{id:`pistol`,root:e,mag:a,magHome:a.position.clone(),mover:r,moverHome:r.position.clone(),muzzle:i,sight:new B(0,.058,.03),adsDist:.44,hip:new B(.12,-.15,-.34),leftHand:o,leftHome:o.position.clone(),leftHomeRot:o.rotation.clone(),flash:this.flashSprite(i),accents:t,body:n}}buildShotgun(){let e=new On,{accents:t,body:n}=this.tierMats();this.box(e,n,.056,.08,.26,0,.02,-.06),this.box(e,this.metal,.004,.03,.08,.029,.03,-.06),this.cyl(e,this.metal,.015,.56,0,.045,-.47),this.cyl(e,this.metal,.015,.46,0,.012,-.42),this.cyl(e,this.metal,.018,.03,0,.012,-.66),this.box(e,this.metal,.012,.012,.44,0,.068,-.4),this.box(e,new si({color:16769184}),.005,.005,.005,0,.078,-.74);let r=new Dn;r.position.set(0,.045,-.76),e.add(r);let i=new On;i.position.set(0,.012,-.36),e.add(i),this.cyl(i,this.wood,.032,.17,0,0,0,12,.03);for(let e=0;e<5;e++)this.cyl(i,t,.0335,.008,0,0,-.06+e*.03,12);this.box(e,this.wood,.036,.1,.05,0,-.04,.09,-.4),this.box(e,this.wood,.044,.07,.2,0,0,.2,.1),this.box(e,this.wood,.048,.12,.08,0,-.02,.33,.1),this.box(e,this.gloveMat,.05,.13,.025,0,-.03,.38,.1),this.box(e,this.metal,.008,.004,.07,0,-.025,0);for(let t=0;t<4;t++)this.cyl(e,new Ba({color:9050644,roughness:.5}),.008,.045,-.034,0+t*.018,-.07,8).rotation.set(0,0,Math.PI/2);let a=new Dn;e.add(a);let o=new On;this.cyl(o,new Ba({color:10099220,roughness:.5}),.01,.055,0,0,0,8),this.cyl(o,new Ba({color:13148224,metalness:.8,roughness:.3}),.0105,.012,0,0,.03,8),this.hand(e,new B(0,-.04,.085),new B(.14,-.21,.4),1,`pistol`);let s=this.hand(i,new B(0,-.025,0),new B(-.17,-.22,.28),-1,`under`);return s.add(o),o.position.set(0,.04,-.03),o.visible=!1,{id:`shotgun`,root:e,mag:a,magHome:a.position.clone(),mover:i,moverHome:i.position.clone(),muzzle:r,sight:new B(0,.078,0),adsDist:.26,hip:new B(.15,-.2,-.34),leftHand:s,leftHome:s.position.clone(),leftHomeRot:s.rotation.clone(),flash:this.flashSprite(r),accents:t,body:n,shell:o}}setWeapon(e){for(let e of this.models.values())e.root.visible=!1;this.current=e?this.models.get(e):null,this.current&&(this.current.root.visible=!0)}setTier(e,t){let n=this.models.get(e),r=yf[Math.min(2,t)];n.accents.color.setHex(r.accent),n.accents.emissive.setHex(r.emissive),n.accents.emissiveIntensity=r.ei,n.body.color.setHex(r.body)}fire(e){if(!this.current)return;this.kickV+=.9*e,this.kickRotV+=1.6*e;let t=this.current.flash;t.visible=!0,t.material.rotation=Math.random()*Math.PI*2;let n=(this.current.id===`shotgun`?.32:this.current.id===`pistol`?.16:.22)*(.8+Math.random()*.4);t.scale.set(n,n,1),this.flashT=.045,this.flashLight.intensity=3}muzzleCameraSpace(e){return this.current?(this.rig.updateMatrixWorld(!0),this.current.muzzle.getWorldPosition(e),this.camera.worldToLocal(e),e):e.set(.1,-.1,-.6)}update(e,t){let n=this.current;if(!n)return;this.kickV+=(-170*this.kick-20*this.kickV)*e,this.kick+=this.kickV*e,this.kickRotV+=(-170*this.kickRot-20*this.kickRotV)*e,this.kickRot+=this.kickRotV*e;let r=t.reducedMotion?.35:1,i=jt.clamp(-t.lookDX*9e-4,-.06,.06)*r,a=jt.clamp(-t.lookDY*9e-4,-.06,.06)*r;this.swayX+=(i-this.swayX)*Math.min(1,e*8),this.swayY+=(a-this.swayY)*Math.min(1,e*8);let o=t.adsT,s=n.hip,c=this.tmp.set(-n.sight.x,-n.sight.y,-n.sight.z-n.adsDist),l=new B().lerpVectors(s,c,Sf(o)),u=new un(0,0,0),d=Math.min(1,t.speed/5)*(1-o*.85)*r*(t.grounded?1:.2),f=t.bobPhase;l.x+=Math.sin(f)*.011*d,l.y+=-Math.abs(Math.cos(f))*.011*d+t.jumpOffset*.02*r,u.z+=Math.sin(f)*.02*d;let p=performance.now()/1e3;l.y+=Math.sin(p*1.6)*.0022*(1-o*.8),l.x+=Math.cos(p*.8)*.0012*(1-o*.8);let m=+!!t.sprinting;if(this.tiltZ+=(m-this.tiltZ)*Math.min(1,e*9),l.x+=-.04*this.tiltZ,l.y+=-.05*this.tiltZ,u.y+=.75*this.tiltZ,u.x+=-.25*this.tiltZ,u.z+=.2*this.tiltZ,t.crouched&&(l.y-=.006,u.z-=.04*(1-o)),u.y+=this.swayX*(1-o*.6),u.x+=this.swayY*(1-o*.6),l.x+=this.swayX*.12*(1-o*.7),l.z+=this.kick*.045*(1-o*.4),u.x+=this.kickRot*.06*(1-o*.5),l.y+=this.kickRot*.004,n.mag.position.copy(n.magHome),n.mag.visible=!0,n.mover.position.copy(n.moverHome),n.leftHand.position.copy(n.leftHome),n.leftHand.rotation.copy(n.leftHomeRot),n.shell&&(n.shell.visible=!1),t.reloadPhase===`mag`){let r=t.reloadP,i=xf(r,0,.15)*(1-xf(r,.85,1));u.z+=.55*i,u.x+=.18*i,l.y-=.02*i,l.x-=.02*i;let a=xf(r,.15,.32),o=xf(r,.45,.66),s=a*(1-o);n.mag.position.y=n.magHome.y-.28*s,n.mag.position.z=n.magHome.z+.05*s,n.mag.visible=!(a>.95&&o<.05);let c=xf(r,.12,.3)*(1-xf(r,.62,.75));n.leftHand.position.lerp(new B(n.magHome.x-.02,n.magHome.y-.12,n.magHome.z+.02),c),n.leftHand.rotation.x+=c*.5,r>.66&&r<.72&&(this.kickRotV-=.4*e*60);let d=xf(r,.72,.8)*(1-xf(r,.8,.86));n.mover.position.z=n.moverHome.z+(n.id===`pistol`?.03:.07)*d}if(t.reloadPhase===`shellStart`||t.reloadPhase===`shellLoop`||t.reloadPhase===`shellEnd`){let e=t.reloadPhase===`shellStart`?xf(t.shellT,0,t.shellPer*.7):t.reloadPhase===`shellEnd`?1-xf(t.shellT,0,t.shellPer*.8):1;if(u.z-=.5*e,u.x+=.22*e,l.x-=.03*e,l.y-=.01*e,t.reloadPhase===`shellLoop`){let e=t.shellT/t.shellPer%1,r=Math.sin(e*Math.PI);n.leftHand.position.y+=-.06+.04*r,n.leftHand.position.z+=.24-.03*r,n.leftHand.position.x+=.02,n.shell&&(n.shell.visible=e<.75),u.z-=r*.03}}if(n.id===`shotgun`&&t.sinceShot<.7){let e=xf(t.sinceShot,.28,.42)*(1-xf(t.sinceShot,.46,.6));n.mover.position.z=n.moverHome.z+.09*e,u.x-=e*.05}if(n.id===`pistol`&&t.sinceShot<.1&&(n.mover.position.z=n.moverHome.z+.03*(1-t.sinceShot/.1)),t.switchT>0){let e=Sf(t.switchT);l.y-=.28*e,u.x-=.9*e,u.z+=.2*e}if(t.plateT>0){let e=xf(t.plateT,0,.2)*(1-xf(t.plateT,.85,1));l.y-=.22*e,u.x-=.6*e,this.plate.visible=!0;let n=t.plateT,r=xf(n,.05,.35),i=xf(n,.55,.7);this.plate.position.set(-.05+.03*i,-.45+.2*r-.12*i,-.42+.1*i),this.plate.rotation.set(-.9+.5*r-.9*i,.2,.1)}else this.plate.visible=!1;this.rig.position.copy(l),this.rig.rotation.copy(u),this.flashT>0&&(this.flashT-=e,this.flashT<=0&&(n.flash.visible=!1,this.flashLight.intensity=0))}};function xf(e,t,n){let r=Math.max(0,Math.min(1,(e-t)/(n-t)));return r*r*(3-2*r)}function Sf(e){return e<.5?2*e*e:1-(-2*e+2)**2/2}var Cf=[new W(1,.75,.4),new W(.4,.8,1.6),new W(1.6,.5,.2)],wf=class{vm;audio;fx;cb;loadout;adsT=0;switchT=0;switchDir=0;switchTarget=0;sinceShot=10;semiBuffer=0;bloom=0;lastReloadP=0;emptyClicked=!1;throwT=0;stats={shots:0,hits:0,headshots:0};tmp=new B;camQ=new Mt;constructor(e,t,n,r,i){this.vm=t,this.audio=n,this.fx=r,this.cb=i,this.loadout=e}get active(){return this.loadout.slots[this.loadout.active]}get switching(){return this.switchDir!==0}reset(e){this.loadout=e,this.adsT=0,this.switchT=0,this.switchDir=0,this.sinceShot=10,this.semiBuffer=0,this.bloom=0,this.throwT=0,this.emptyClicked=!1,this.stats={shots:0,hits:0,headshots:0},this.syncModel()}syncModel(){let e=this.active;this.vm.setWeapon(e?e.id:null);for(let e of this.loadout.slots)e&&this.vm.setTier(e.id,e.tier)}requestSwitch(e){if(e===this.loadout.active&&this.switchDir===0||!this.loadout.slots[e])return;let t=this.active;t&&nd(t),this.switchTarget=e,this.switchDir=1,this.audio.weaponSwitch()}update(e,t,n,r,i,a,o,s){let c=this.active;this.sinceShot+=e,this.semiBuffer=Math.max(0,this.semiBuffer-e),this.bloom=Math.max(0,this.bloom-e*6),this.throwT>0&&(this.throwT=Math.max(0,this.throwT-e));for(let t of this.loadout.slots){if(!t)continue;let n=rd(t,e);t===c&&(n===`shellInserted`&&this.audio.reloadPart(`shell`),n===`shellDone`&&this.audio.reloadPart(`pump`))}if(c&&c.reloadPhase===`mag`){let e=id(c),t=t=>this.lastReloadP<t&&e>=t;t(.18)&&this.audio.reloadPart(`magOut`),t(.64)&&this.audio.reloadPart(`magIn`),t(.76)&&this.audio.reloadPart(c.id===`pistol`?`slide`:`bolt`),this.lastReloadP=e}else this.lastReloadP=0;if(this.switchDir!==0){let t=1/((c?_u[c.id]:_u.pistol).switchTime*.5);this.switchT+=this.switchDir*t*e,this.switchDir===1&&this.switchT>=1?(this.switchT=1,this.loadout.active=this.switchTarget,this.syncModel(),this.switchDir=-1):this.switchDir===-1&&this.switchT<=0&&(this.switchT=0,this.switchDir=0)}if(!r.plating&&!r.menu?(t.consume(`weapon1`)&&this.requestSwitch(0),t.consume(`weapon2`)&&this.requestSwitch(1),t.wheel!==0&&this.requestSwitch(+(this.loadout.active===0))):(t.consume(`weapon1`),t.consume(`weapon2`)),!c)return;let l=_u[c.id],u=Yu(c.id,c.tier),d=t.aimHeld&&!n.sprinting&&!r.plating&&this.switchDir===0&&this.throwT<=0&&c.reloadPhase!==`mag`?1:0,f=e/l.adsTime;this.adsT=d>this.adsT?Math.min(1,this.adsT+f):Math.max(0,this.adsT-f*1.3),n.aiming=this.adsT>.5,n.adsT=this.adsT,t.consume(`reload`)&&!r.plating&&this.switchDir===0&&td(c)&&this.onReloadStart(c);let p=r.plating||r.menu||this.switchDir!==0||this.throwT>0,m=!1;l.auto?m=t.canFire:(t.consumeFire()&&(this.semiBuffer=.15),m=this.semiBuffer>0),t.fireHeld||(this.emptyClicked=!1),m&&!p&&(c.mag<=0?(this.emptyClicked||=(this.audio.empty(),!0),!Zu(c)&&td(c)&&this.onReloadStart(c),this.semiBuffer=0):Qu(c)&&!n.sprinting&&($u(c),this.semiBuffer=0,this.shoot(c,n,i,a,o,s,u.damage,u.spreadMult))),t.fireHeld&&n.sprinting&&(n.sprinting=!1),n.recoverRecoil(e,l.recoilRecover)}onReloadStart(e){this.lastReloadP=0,e.id===`shotgun`&&this.audio.reloadPart(`shell`)}shoot(e,t,n,r,i,a,o,s){let c=_u[e.id];this.sinceShot=0,this.stats.shots++;let l=this.adsT,u=Math.min(1,t.speed2d/X.walkSpeed),d=(c.hipSpread+(c.adsSpread-c.hipSpread)*l)*s;d+=c.moveSpread*u*(1-l*.7),t.grounded||(d+=2.5),t.crouched&&(d*=.8),d+=this.bloom*(1-l*.6),c.auto&&(this.bloom=Math.min(2.2,this.bloom+.35));let f=d*Math.PI/180;this.camQ.copy(a);let p=new B(0,0,-1).applyQuaternion(this.camQ),m=new B(1,0,0).applyQuaternion(this.camQ),h=new B(0,1,0).applyQuaternion(this.camQ),g=this.vm.muzzleCameraSpace(this.tmp),_=new B(g.x,g.y,g.z).applyQuaternion(this.camQ).add(i);this.fx.muzzle(_.x,_.y,_.z,e.id===`shotgun`?1.5:1);let v=Cf[Math.min(2,e.tier)],y=new Map;for(let t=0;t<c.pellets;t++){let a=f*Math.sqrt(Math.random()),s=Math.random()*Math.PI*2,l=p.clone().addScaledVector(m,Math.tan(a)*Math.cos(s)).addScaledVector(h,Math.tan(a)*Math.sin(s)).normalize(),u=n.raycast(i.x,i.y,i.z,l.x,l.y,l.z,220),d=u?u.dist:220,g=r.raycast(i.x,i.y,i.z,l.x,l.y,l.z,d),b=d;if(g){b=g.dist;let t=sd(e.id,o,g.dist);g.head&&(t*=c.headMult);let n=y.get(g.z);n?(n.dmg+=t,n.head=n.head||g.head):y.set(g.z,{dmg:t,head:g.head,x:g.x,y:g.y,z:g.z_,dx:l.x,dz:l.z}),this.audio.impact(`flesh`,{x:g.x,z:g.z_})}else if(u){let e=i.x+l.x*u.dist,n=i.y+l.y*u.dist,r=i.z+l.z*u.dist;this.fx.impact(e,n,r,u.nx,u.ny,u.nz,u.box?u.box.surface:`concrete`),t%3==0&&this.audio.impact(u.box?u.box.surface:`concrete`,{x:e,z:r})}if(e.id!==`shotgun`||t%3==0){let e=i.x+l.x*b,t=i.y+l.y*b,n=i.z+l.z*b,r=_.x+(e-_.x)*.05,a=_.y+(t-_.y)*.05,o=_.z+(n-_.z)*.05;this.fx.tracer(r,a,o,e,t,n,v)}}let b=null,x={body:0,armor:1,head:2,kill:3};for(let[e,t]of y){let n=r.damage(e,t.dmg,t.head,t.x,t.y,t.z,t.dx,t.dz);this.stats.hits++,t.head&&!n.armor&&this.stats.headshots++;let i=n.killed?`kill`:n.armor?`armor`:t.head?`head`:`body`;(b===null||x[i]>x[b])&&(b=i)}b&&this.cb.onHit({kind:b});let S=1-l*.45,C=t.crouched?.8:1,w=c.recoilPitch*S*C,T=(Math.random()-.5)*2*c.recoilYaw*S;t.kickView(w*Math.PI/180,T*Math.PI/180),t.applyRecoil(w,T),this.vm.fire(e.id===`shotgun`?1.6:e.id===`pistol`?.9:.7),this.audio.shot(e.id,e.tier),r.noise(i.x,i.z,45),this.cb.onShot()}currentSpread(e){let t=this.active;if(!t)return 0;let n=_u[t.id],r=Yu(t.id,t.tier),i=Math.min(1,e.speed2d/X.walkSpeed),a=(n.hipSpread+(n.adsSpread-n.hipSpread)*this.adsT)*r.spreadMult+n.moveSpread*i*(1-this.adsT);return e.grounded||(a+=2.5),a+this.bloom}weaponName(e){return _u[e].name}};function Tf(e,t,n,r,i,a,o=2,s={}){let c=[],l=[],u=[],d=[],f=(e,t,n)=>{let r=c.length/3;for(let r=0;r<4;r++)c.push(...e[r]),l.push(...t),u.push(n[r][0]/o,n[r][1]/o);d.push(r,r+1,r+2,r,r+2,r+3)};f([[r,t,a],[r,t,n],[r,i,n],[r,i,a]],[1,0,0],[[-a,t],[-n,t],[-n,i],[-a,i]]),f([[e,t,n],[e,t,a],[e,i,a],[e,i,n]],[-1,0,0],[[n,t],[a,t],[a,i],[n,i]]),f([[e,t,a],[r,t,a],[r,i,a],[e,i,a]],[0,0,1],[[e,t],[r,t],[r,i],[e,i]]),f([[r,t,n],[e,t,n],[e,i,n],[r,i,n]],[0,0,-1],[[-r,t],[-e,t],[-e,i],[-r,i]]),s.top||f([[e,i,a],[r,i,a],[r,i,n],[e,i,n]],[0,1,0],[[e,-a],[r,-a],[r,-n],[e,-n]]),s.bottom||f([[e,t,n],[r,t,n],[r,t,a],[e,t,a]],[0,-1,0],[[e,n],[r,n],[r,a],[e,a]]);let p=new Ar;return p.setAttribute(`position`,new G(c,3)),p.setAttribute(`normal`,new G(l,3)),p.setAttribute(`uv`,new G(u,2)),p.setIndex(d),p}function Ef(e,t,n,r,i,a=2){let o=new Ar;return o.setAttribute(`position`,new G([e,i,r,n,i,r,n,i,t,e,i,t],3)),o.setAttribute(`normal`,new G([0,1,0,0,1,0,0,1,0,0,1,0],3)),o.setAttribute(`uv`,new G([e/a,-r/a,n/a,-r/a,n/a,-t/a,e/a,-t/a],2)),o.setIndex([0,1,2,0,2,3]),o}function Df(e){let t=(e.index,e);if(!t.index){let e=t.attributes.position.count,n=[];for(let t=0;t<e;t++)n.push(t);t.setIndex(n)}for(let e of Object.keys(t.attributes))e!==`position`&&e!==`normal`&&e!==`uv`&&t.deleteAttribute(e);if(!t.attributes.uv){let e=t.attributes.position.count;t.setAttribute(`uv`,new G(new Float32Array(e*2),2))}return t.attributes.normal||t.computeVertexNormals(),t=t.toNonIndexed(),t}var Of=class{groups=new Map;add(e,t,n){let r=Df(t);n&&r.applyMatrix4(n);let i=this.groups.get(e);i||this.groups.set(e,i=[]),i.push(r)}build(e,t={}){let n=[];for(let[r,i]of this.groups){for(let a=0;a<i.length;a+=400){let o=ku(i.slice(a,a+400),!1);if(!o)continue;o.computeBoundingSphere();let s=new K(o,r);s.castShadow=t.castShadow??!0,s.receiveShadow=t.receiveShadow??!0,s.matrixAutoUpdate=!1,e.add(s),n.push(s)}for(let e of i)e.dispose()}return this.groups.clear(),n}},$=class{parts=[];pending=new Map;bounds=new Qn;castShadow=!0;add(e,t,n=0,r=0,i=0,a=0,o=0,s=0,c=1,l=1,u=1){let d=Df(t),f=new U().compose(new B(n,r,i),new Mt().setFromEuler(new un(a,o,s)),new B(c,l,u));d.applyMatrix4(f);let p=this.pending.get(e);return p||this.pending.set(e,p=[]),p.push(d),this}box(e,t,n,r,i,a,o,s=0,c=0,l=0){return this.add(e,new q(t,n,r),i,a,o,s,c,l)}cyl(e,t,n,r,i,a,o,s,c=0,l=0,u=0){return this.add(e,new Sa(t,n,r,i),a,o,s,c,l,u)}finish(){for(let[e,t]of this.pending){let n=ku(t,!1);n.computeBoundingBox(),n.computeBoundingSphere(),this.bounds.union(n.boundingBox),this.parts.push({mat:e,geo:n})}return this.pending.clear(),this}},kf=class{placements=new Map;place(e,t,n,r,i=0,a=1){let o=new U().compose(new B(t,n,r),new Mt().setFromAxisAngle(new B(0,1,0),i),new B(a,a,a)),s=this.placements.get(e);return s||this.placements.set(e,s=[]),s.push(o),o}build(e){for(let[t,n]of this.placements)for(let r of t.parts){let i=new Wi(r.geo,r.mat,n.length);n.forEach((e,t)=>i.setMatrixAt(t,e)),i.instanceMatrix.needsUpdate=!0,i.castShadow=t.castShadow,i.receiveShadow=!0,i.computeBoundingSphere(),e.add(i)}this.placements.clear()}},Af=1e-4,jf=class{minX;minZ;maxX;maxZ;boxes=[];cell=4;cols=0;rows=0;ox=0;oz=0;grid=[];stampCounter=1;scratch=[];constructor(e,t,n,r){this.minX=e,this.minZ=t,this.maxX=n,this.maxZ=r,this.ox=e-8,this.oz=t-8,this.cols=Math.ceil((n-e+16)/this.cell),this.rows=Math.ceil((r-t+16)/this.cell);for(let e=0;e<this.cols*this.rows;e++)this.grid.push([])}add(e,t,n,r,i,a,o={}){let s={minX:Math.min(e,r),minY:Math.min(t,i),minZ:Math.min(n,a),maxX:Math.max(e,r),maxY:Math.max(t,i),maxZ:Math.max(n,a),surface:o.surface??`concrete`,floor:o.floor??!1,solid:o.solid??!0,stamp:0},c=this.boxes.length;this.boxes.push(s);let l=this.cx(s.minX),u=this.cx(s.maxX),d=this.cz(s.minZ),f=this.cz(s.maxZ);for(let e=d;e<=f;e++)for(let t=l;t<=u;t++)this.grid[e*this.cols+t].push(c);return s}cx(e){return Math.max(0,Math.min(this.cols-1,Math.floor((e-this.ox)/this.cell)))}cz(e){return Math.max(0,Math.min(this.rows-1,Math.floor((e-this.oz)/this.cell)))}query(e,t,n,r){let i=this.scratch;i.length=0;let a=++this.stampCounter,o=this.cx(e),s=this.cx(n),c=this.cz(t),l=this.cz(r);for(let u=c;u<=l;u++)for(let c=o;c<=s;c++){let o=this.grid[u*this.cols+c];for(let s=0;s<o.length;s++){let c=this.boxes[o[s]];c.stamp!==a&&(c.stamp=a,c.maxX>e&&c.minX<n&&c.maxZ>t&&c.minZ<r&&i.push(c))}}return i}overlaps(e,t,n,r,i){let a=this.query(e-r,n-r,e+r,n+r);for(let o of a)if(t+i>o.minY+Af&&t<o.maxY-Af&&e+r>o.minX+Af&&e-r<o.maxX-Af&&n+r>o.minZ+Af&&n-r<o.maxZ-Af)return!0;return!1}move(e,t,n,r,i,a,o,s){let c={grounded:!1,hitCeiling:!1,blockedX:!1,blockedZ:!1},l=Math.max(1,Math.ceil(Math.max(Math.abs(r),Math.abs(a))/(t*.9)));for(let i=0;i<l;i++)this.moveHoriz(e,t,n,r/l,0,o,s)&&(c.blockedX=!0),this.moveHoriz(e,t,n,0,a/l,o,s)&&(c.blockedZ=!0);e.y+=i;let u=this.query(e.x-t,e.z-t,e.x+t,e.z+t);for(let r of u)e.x+t>r.minX+Af&&e.x-t<r.maxX-Af&&e.z+t>r.minZ+Af&&e.z-t<r.maxZ-Af&&e.y+n>r.minY+Af&&e.y<r.maxY-Af&&(i<=0?(e.y=r.maxY,c.grounded=!0):(e.y=r.minY-n,c.hitCeiling=!0));if(e.y<=0&&(e.y=0,c.grounded=!0),!c.grounded&&s&&i<=0){let n=this.groundHeight(e.x,e.z,t,e.y+Af);e.y-n<=o+.05&&(e.y=n,c.grounded=!0)}return c}moveHoriz(e,t,n,r,i,a,o){if(r===0&&i===0)return!1;e.x+=r,e.z+=i;let s=this.query(e.x-t,e.z-t,e.x+t,e.z+t),c=!1,l=-1/0;for(let u of s)if(e.y+n>u.minY+Af&&e.y<u.maxY-Af&&e.x+t>u.minX+Af&&e.x-t<u.maxX-Af&&e.z+t>u.minZ+Af&&e.z-t<u.maxZ-Af){if(o&&u.maxY-e.y<=a){l=Math.max(l,u.maxY);continue}c=!0,r>0?e.x=Math.min(e.x,u.minX-t-Af):r<0&&(e.x=Math.max(e.x,u.maxX+t+Af)),i>0?e.z=Math.min(e.z,u.minZ-t-Af):i<0&&(e.z=Math.max(e.z,u.maxZ+t+Af))}return l>-1/0&&(this.overlaps(e.x,l+Af,e.z,t,n)?(e.x-=r,e.z-=i,c=!0):e.y=l),c}groundHeight(e,t,n,r){let i=0,a=this.query(e-n,t-n,e+n,t+n);for(let o of a)o.maxY<=r+Af&&o.maxY>i&&e+n>o.minX&&e-n<o.maxX&&t+n>o.minZ&&t-n<o.maxZ&&(i=o.maxY);return i}raycast(e,t,n,r,i,a,o,s=!0){let c=o,l=null;if(i<-1e-6){let e=-t/i;e>=0&&e<c&&(c=e,l={dist:e,nx:0,ny:1,nz:0,box:null})}let u=++this.stampCounter,d=this.cell,f=Math.floor((e-this.ox)/d),p=Math.floor((n-this.oz)/d),m=r>0?1:-1,h=a>0?1:-1,g=Math.abs(r)>1e-9?d/Math.abs(r):1/0,_=Math.abs(a)>1e-9?d/Math.abs(a):1/0,v=this.ox+(f+ +(r>0))*d,y=this.oz+(p+ +(a>0))*d,b=Math.abs(r)>1e-9?(v-e)/r:1/0,x=Math.abs(a)>1e-9?(y-n)/a:1/0,S=0;for(let d=0;d<256;d++){if(f>=0&&f<this.cols&&p>=0&&p<this.rows){let o=this.grid[p*this.cols+f];for(let d=0;d<o.length;d++){let f=this.boxes[o[d]];if(f.stamp===u||(f.stamp=u,s&&!f.solid))continue;let p=Mf(e,t,n,r,i,a,f,c);p&&(c=p.dist,l=p,l.box=f)}}if(S>c||(b<x?(S=b,b+=g,f+=m):(S=x,x+=_,p+=h),S>c||S>o))break}return l}segmentBlocked(e,t,n,r,i,a){let o=r-e,s=i-t,c=a-n,l=Math.hypot(o,s,c);if(l<1e-4)return!1;let u=this.raycast(e,t,n,o/l,s/l,c/l,l);return!!u&&u.dist<l-.05}};function Mf(e,t,n,r,i,a,o,s){let c=0,l=s,u=-1,d=0;if(Math.abs(r)<1e-9){if(e<o.minX||e>o.maxX)return null}else{let t=1/r,n=(o.minX-e)*t,i=(o.maxX-e)*t,a=-1;if(n>i){let e=n;n=i,i=e,a=1}if(n>c&&(c=n,u=0,d=a),i<l&&(l=i),c>l)return null}if(Math.abs(i)<1e-9){if(t<o.minY||t>o.maxY)return null}else{let e=1/i,n=(o.minY-t)*e,r=(o.maxY-t)*e,a=-1;if(n>r){let e=n;n=r,r=e,a=1}if(n>c&&(c=n,u=1,d=a),r<l&&(l=r),c>l)return null}if(Math.abs(a)<1e-9){if(n<o.minZ||n>o.maxZ)return null}else{let e=1/a,t=(o.minZ-n)*e,r=(o.maxZ-n)*e,i=-1;if(t>r){let e=t;t=r,r=e,i=1}if(t>c&&(c=t,u=2,d=i),r<l&&(l=r),c>l)return null}return u<0?null:{dist:c,nx:u===0?d:0,ny:u===1?d:0,nz:u===2?d:0,box:o}}var Nf=.5,Pf=.32,Ff=class{ox;oz;w;h;size=1;height;walk;dist;heap;heapKey;heapLen=0;targetCell=-1;constructor(e,t,n,r){this.ox=e,this.oz=t,this.w=Math.ceil(n-e),this.h=Math.ceil(r-t);let i=this.w*this.h;this.height=new Float32Array(i),this.walk=new Uint8Array(i),this.dist=new Float32Array(i).fill(1/0),this.heap=new Int32Array(i*8),this.heapKey=new Float32Array(i*8)}build(e){for(let t=0;t<this.h;t++)for(let n=0;n<this.w;n++){let r=t*this.w+n,i=this.ox+n+.5,a=this.oz+t+.5,o=0,s=e.query(i-Pf,a-Pf,i+Pf,a+Pf);for(let e of s)e.floor&&e.maxY<=3&&i>=e.minX&&i<=e.maxX&&a>=e.minZ&&a<=e.maxZ&&(o=Math.max(o,e.maxY));let c=!1;for(let e of s)if(!(e.floor&&e.maxY<=o+.01)&&e.maxY>o+.46&&e.minY<o+1.7){c=!0;break}this.height[r]=o,this.walk[r]=+!c}for(let e=0;e<this.w;e++)this.walk[e]=0,this.walk[(this.h-1)*this.w+e]=0;for(let e=0;e<this.h;e++)this.walk[e*this.w]=0,this.walk[e*this.w+this.w-1]=0}cellOf(e,t){let n=Math.floor(e-this.ox),r=Math.floor(t-this.oz);return n<0||r<0||n>=this.w||r>=this.h?-1:r*this.w+n}cellCenter(e,t){t.x=this.ox+e%this.w+.5,t.z=this.oz+Math.floor(e/this.w)+.5}isWalkable(e,t){let n=this.cellOf(e,t);return n>=0&&this.walk[n]===1}nearestWalkable(e,t,n=6){let r=Math.floor(e-this.ox),i=Math.floor(t-this.oz);for(let e=0;e<=n;e++){let t=-1,n=1/0;for(let a=-e;a<=e;a++)for(let o=-e;o<=e;o++){if(Math.max(Math.abs(a),Math.abs(o))!==e)continue;let s=r+o,c=i+a;if(s<0||c<0||s>=this.w||c>=this.h)continue;let l=c*this.w+s;if(!this.walk[l])continue;let u=o*o+a*a;u<n&&(n=u,t=l)}if(t>=0)return t}return-1}computeFlow(e,t){let n=this.cellOf(e,t);if((n<0||!this.walk[n])&&(n=this.nearestWalkable(e,t)),this.targetCell=n,this.dist.fill(1/0),n<0)return;this.heapLen=0,this.dist[n]=0,this.push(n,0);let r=this.w;for(;this.heapLen>0;){let e=this.heapKey[0],t=this.pop();if(e>this.dist[t])continue;let n=t%r,i=(t-n)/r,a=this.height[t];for(let t=0;t<8;t++){let o=If[t],s=Lf[t],c=n+o,l=i+s;if(c<0||l<0||c>=r||l>=this.h)continue;let u=l*r+c;if(!this.walk[u]||Math.abs(this.height[u]-a)>Nf||o!==0&&s!==0&&(!this.walk[i*r+c]||!this.walk[l*r+n]))continue;let d=e+Rf[t];d<this.dist[u]&&(this.dist[u]=d,this.push(u,d))}}}flowDir(e,t,n){let r=this.cellOf(e,t);if(r<0)return!1;if(!isFinite(this.dist[r])){let i=this.nearestWalkable(e,t,2);if(i<0||!isFinite(this.dist[i]))return!1;r=i;let a={x:0,z:0};this.cellCenter(r,a);let o=a.x-e,s=a.z-t,c=Math.hypot(o,s)||1;return n.x=o/c,n.z=s/c,!0}let i=this.w,a=r%i,o=(r-a)/i,s=this.dist[r],c=-1;for(let e=0;e<8;e++){let t=a+If[e],n=o+Lf[e];if(t<0||n<0||t>=i||n>=this.h)continue;let r=n*i+t;(If[e]===0||Lf[e]===0||this.walk[o*i+t]&&this.walk[n*i+a])&&this.dist[r]<s&&(s=this.dist[r],c=r)}if(c<0)return!1;let l=this.ox+c%i+.5,u=this.oz+Math.floor(c/i)+.5,d=l-e,f=u-t,p=Math.hypot(d,f)||1;return n.x=d/p,n.z=f/p,!0}pathDist(e,t){let n=this.cellOf(e,t);return n<0?1/0:this.dist[n]}walkLine(e,t,n,r){let i=n-e,a=r-t,o=Math.ceil(Math.hypot(i,a)/.5),s=-1;for(let n=0;n<=o;n++){let r=o===0?0:n/o,c=this.cellOf(e+i*r,t+a*r);if(c<0||!this.walk[c])return!1;let l=this.height[c];if(s>=0&&Math.abs(l-s)>Nf)return!1;s=l}return!0}push(e,t){let n=this.heapLen++,r=this.heap,i=this.heapKey;for(;n>0;){let e=n-1>>1;if(i[e]<=t)break;r[n]=r[e],i[n]=i[e],n=e}r[n]=e,i[n]=t}pop(){let e=this.heap,t=this.heapKey,n=e[0],r=--this.heapLen;if(r>0){let n=e[r],i=t[r],a=0;for(;;){let n=a*2+1;if(n>=r||(n+1<r&&t[n+1]<t[n]&&n++,t[n]>=i))break;e[a]=e[n],t[a]=t[n],a=n}e[a]=n,t[a]=i}return n}},If=[1,-1,0,0,1,1,-1,-1],Lf=[0,0,1,-1,1,-1,1,-1],Rf=[1,1,1,1,Math.SQRT2,Math.SQRT2,Math.SQRT2,Math.SQRT2];function zf(e){let t={},n=(e,n,r,i,a={})=>{t[e]={tpl:n.finish(),colliders:r,surface:i,...a}},r=(t,n=!1)=>{let r=new $,i=n?e.burnt:t;r.box(i,1.82,.62,4.5,0,.62,0),r.box(i,1.7,.1,1.2,0,.98,1.5),r.box(i,1.72,.12,.9,0,.96,-1.75),r.add(i,new q(1.62,.55,2.2),0,1.2,-.25),n?r.box(e.rust,1.5,.05,1.8,0,.9,-.25):(r.box(e.glass,1.64,.42,.06,0,1.2,.87,-.5),r.box(e.glass,1.64,.4,.06,0,1.2,-1.37,.5),r.box(e.glass,1.64,.36,1.9,0,1.22,-.25),r.box(e.lampWarm,.3,.1,.04,.62,.78,2.25),r.box(e.lampWarm,.3,.1,.04,-.62,.78,2.25),r.box(e.red,.34,.1,.04,.62,.8,-2.25),r.box(e.red,.34,.1,.04,-.62,.8,-2.25)),r.box(e.rubber,1.86,.16,.18,0,.42,2.28),r.box(e.rubber,1.86,.16,.18,0,.42,-2.28);for(let[t,i]of[[.82,1.4],[-.82,1.4],[.82,-1.45],[-.82,-1.45]])r.cyl(e.rubber,.34,.34,.24,14,t,.34,i,0,0,Math.PI/2),r.cyl(n?e.rust:e.steel,.2,.2,.26,10,t,.34,i,0,0,Math.PI/2);return r},i=[[-.92,0,-2.3,.92,.95,2.3],[-.82,.95,-1.4,.82,1.48,.9]];e.carPaints.slice(0,4).forEach((e,t)=>n(`sedan${t}`,r(e),i,`metal`)),n(`sedanBurnt`,r(e.burnt,!0),i,`metal`);{let t=new $;t.box(e.white,2,1.9,5,0,1.35,-.2),t.box(e.white,1.95,1,1,0,.9,2.55),t.box(e.glass,1.8,.7,.06,0,1.75,2.26,-.35),t.box(e.red,2.02,.25,3.6,0,1.6,-.6),t.box(e.rubber,2.04,.2,.2,0,.45,3.05);for(let[n,r]of[[.9,1.9],[-.9,1.9],[.9,-1.8],[-.9,-1.8]])t.cyl(e.rubber,.38,.38,.26,14,n,.38,r,0,0,Math.PI/2);n(`van`,t,[[-1.02,0,-2.75,1.02,2.3,3.1]],`metal`)}{let t=new $;t.box(e.oliveDark,2.3,.35,7.2,0,.95,0),t.box(e.olive,2.35,1.5,1.9,0,1.85,2.55),t.box(e.olive,2.2,.8,1.2,0,1.4,3.9),t.box(e.glass,2,.6,.06,0,2.25,3.52),t.box(e.olive,2.4,.6,4.7,0,1.45,-1.2),t.box(e.tarp,2.45,1.6,4.6,0,2.55,-1.2);for(let n=0;n<4;n++)t.box(e.oliveDark,2.5,.08,.1,0,3.36,-3.3+n*1.4);t.box(e.metalDark,2.4,.3,.2,0,1,4.52),t.box(e.lampCold,.25,.2,.05,.85,1.55,4.52),t.box(e.lampCold,.25,.2,.05,-.85,1.55,4.52);for(let n of[3.1,-1,-2.5])for(let r of[1.05,-1.05])t.cyl(e.rubber,.55,.55,.42,16,r,.55,n,0,0,Math.PI/2),t.cyl(e.oliveDark,.28,.28,.44,10,r,.55,n,0,0,Math.PI/2);n(`truck`,t,[[-1.25,0,-3.6,1.25,3.4,3.5],[-1.15,0,3.5,1.15,1.9,4.6]],`metal`)}{let t=new $;t.box(e.olive,2.2,.9,4.7,0,.95,0),t.box(e.olive,2,.75,2.3,0,1.75,-.4),t.box(e.glass,1.8,.5,.06,0,1.8,.76,-.2),t.box(e.oliveDark,2.1,.12,1.6,0,1.44,1.5),t.cyl(e.oliveDark,.35,.45,.4,10,0,2.3,-.6),t.box(e.metalDark,.12,.12,1.1,0,2.55,-.1),t.box(e.metalDark,1,.5,.08,0,2.6,-.5);for(let[n,r]of[[1,1.5],[-1,1.5],[1,-1.5],[-1,-1.5]])t.cyl(e.rubber,.46,.46,.38,14,n,.46,r,0,0,Math.PI/2);n(`humvee`,t,[[-1.18,0,-2.4,1.18,2.15,2.4]],`metal`)}e.containers.forEach((t,r)=>{let i=new $;i.add(t,new q(2.44,2.59,6.06),0,1.295,0);for(let t of[-1.2,1.2])for(let n of[-3,3])i.box(e.metalDark,.14,2.6,.14,t,1.3,n);for(let t of[.05,2.55])for(let n of[-1.2,1.2])i.box(e.metalDark,.12,.12,6.1,n,t,0);i.box(e.metalDark,.05,2.3,.05,.4,1.3,3.05),i.box(e.metalDark,.05,2.3,.05,-.4,1.3,3.05),i.box(e.steel,.9,.06,.06,0,1.3,3.06),n(`container${r}`,i,[[-1.22,0,-3.05,1.22,2.6,3.05]],`metal`)});{let t=new $;t.box(e.concrete,3,.3,.62,0,.15,0),t.box(e.concrete,3,.45,.42,0,.52,0),t.box(e.concrete,3,.3,.24,0,.9,0),t.box(e.hazardYellow,3.02,.08,.26,0,.98,0),n(`jersey`,t,[[-1.5,0,-.31,1.5,1.05,.31]],`concrete`)}{let t=new $;t.box(e.concreteDark,2,1.2,1,0,.6,0),t.box(e.hazardStripe,2.02,.2,1.02,0,.9,0),n(`barrier`,t,`bounds`,`concrete`)}{let t=new $;for(let n=0;n<4;n++){let r=n%2?.25:0;for(let i=0;i<4;i++){let a=-.75+i*.5+r;a>.9||t.add(e.sandbag,new ba(.13,.26,3,8),a,.14+n*.24,0,0,0,Math.PI/2,1,1,1.9)}}n(`sandbags`,t,[[-1,0,-.3,1,1,.3]],`dirt`)}{let t=new $;t.cyl(e.rust,.3,.3,.9,14,0,.45,0),t.cyl(e.metalDark,.31,.31,.04,14,0,.3,0),t.cyl(e.metalDark,.31,.31,.04,14,0,.62,0),n(`barrel`,t,[[-.3,0,-.3,.3,.9,.3]],`metal`);let r=new $;r.cyl(e.hazardYellow,.3,.3,.9,14,0,.45,0),r.cyl(e.hazardStripe,.305,.305,.12,14,0,.55,0),r.cyl(e.toxicGlow,.22,.22,.02,10,0,.91,0),n(`hazBarrel`,r,[[-.3,0,-.3,.3,.92,.3]],`metal`)}{let t=new $;t.box(e.wood,1.2,1,1.2,0,.5,0);for(let n of[-1,1])t.box(e.oliveDark,1.22,.1,.1,0,.5,n*.6),t.box(e.oliveDark,.1,.1,1.22,n*.6,.5,0);n(`crate`,t,`bounds`,`wood`);let r=new $;r.box(e.olive,.9,.5,.6,0,.25,0),r.box(e.oliveDark,.92,.06,.62,0,.45,0),n(`crateSmall`,r,`bounds`,`metal`);let i=new $;i.box(e.wood,1.2,.14,1,0,.07,0),i.box(e.tarp,1.1,.9,.9,0,.6,0),i.box(e.wood,1.2,.14,1,0,1.12,0),i.box(e.plaster,1,.6,.8,0,1.5,0),n(`pallets`,i,`bounds`,`wood`)}{let t=new $;t.cyl(e.metalDark,.09,.13,7.2,8,0,3.6,0),t.cyl(e.metalDark,.2,.25,.5,8,0,.25,0),t.box(e.metalDark,.1,.1,1.8,0,7.1,.85),t.box(e.metalDark,.35,.16,.7,0,7.05,1.75),t.box(e.lampWarm,.28,.04,.6,0,6.96,1.75),n(`streetlight`,t,[[-.18,0,-.18,.18,7.2,.18]],`metal`)}{let t=new $;t.cyl(e.wood,.14,.18,9.5,8,0,4.75,0),t.box(e.wood,2.2,.14,.14,0,8.8,0),t.cyl(e.metalDark,.25,.25,.7,8,.4,7.8,.2),n(`pole`,t,[[-.2,0,-.2,.2,9.5,.2]],`wood`)}{let t=new $,r=new Ea(.35,1);t.add(e.rubber,r,0,.3,0,0,0,0,1,.8,1),t.add(e.rubber,r,.5,.25,.2,0,1,0,.9,.7,1),t.add(e.rubber,r,.15,.25,-.45,0,2,0,.8,.7,.9),t.castShadow=!0,n(`trash`,t,`none`,`dirt`);let i=new $;i.box(e.corrugatedGreen,1.9,1.3,1.2,0,.75,0),i.box(e.metalDark,2,.1,1.3,0,1.45,.05,.12);for(let t of[-.8,.8])for(let n of[-.45,.45])i.cyl(e.rubber,.08,.08,.12,8,t,.08,n,0,0,Math.PI/2);n(`dumpster`,i,[[-.95,0,-.6,.95,1.5,.6]],`metal`)}{let t=new $,r=new Sa(2.6,2.6,6,3,1);t.add(e.tarp,r,0,1.3,0,Math.PI/2,0,0,1,1,1),t.box(e.oliveDark,.08,2.5,.08,0,1.25,3),n(`tent`,t,[[-2.2,0,-3,2.2,2.4,3]],`dirt`);let i=new $;i.add(e.white,new Sa(2.3,2.3,5,3,1),0,1.15,0,Math.PI/2,0,0),i.box(e.hazardYellow,.1,.4,5.02,0,2.1,0),n(`deconTent`,i,[[-2,0,-2.5,2,2.3,2.5]],`dirt`)}{let t=new $,r=new Ta(1,0);t.add(e.concreteDark,r,0,.35,0,.3,.5,.1,1.4,.55,1.1),t.add(e.concrete,r,.9,.25,.5,.8,1,.3,.8,.45,.7),t.add(e.brickDark,r,-.8,.2,-.4,.1,2,.6,.7,.35,.8),t.box(e.steel,.05,.05,2.2,.3,.6,.2,.3,.6,.2),n(`rubble`,t,[[-1.4,0,-1.1,1.5,.75,1.1]],`concrete`);let i=new $;i.add(e.concreteDark,r,0,1.2,0,.3,.2,.1,3.6,1.6,2.6),i.add(e.concrete,r,2.4,.8,1,.8,1,.3,2,1.2,1.8),i.add(e.brickDark,r,-2.2,.9,-.8,.1,2,.6,2.2,1.3,1.6),i.add(e.concrete,new q(4,.4,2.4),.5,2.2,.3,.2,.4,.35),i.box(e.steel,.06,.06,4.2,1,2,.3,.3,.6,.2),i.box(e.steel,.06,.06,3.6,-.6,2.3,-.2,.5,-.4,.1),n(`rubbleBig`,i,[[-3.8,0,-2.4,4.2,2.6,2.6]],`concrete`)}{let t=new $;t.box(e.hazardYellow,1.4,.9,2.2,0,.65,0);for(let n of[-.6,.6])t.cyl(e.rubber,.3,.3,.2,10,n,.3,.6,0,0,Math.PI/2);t.cyl(e.metalDark,.07,.09,6.2,8,0,4.1,-.6),t.box(e.metalDark,1.8,.1,.1,0,7.1,-.6);for(let n of[-.65,0,.65])t.box(e.metalDark,.5,.45,.25,n,7.35,-.5,-.4),t.box(e.lampCold,.42,.36,.02,n,7.3,-.36,-.4);n(`floodlight`,t,[[-.7,0,-1.1,.7,1.1,1.1],[-.12,0,-.72,.12,7.2,-.48]],`metal`)}{let t=new $;t.box(e.olive,1.8,1.2,1.1,0,.7,0),t.box(e.metalDark,1.84,.12,1.14,0,1.32,0),t.box(e.metalDark,.5,.5,.02,.4,.8,.56),t.cyl(e.metalDark,.05,.05,.5,6,-.6,1.6,.2),t.box(e.screenAmber,.2,.1,.02,-.3,.95,.56),n(`generator`,t,`bounds`,`metal`)}{let t=new $;t.cyl(e.wood,.7,.7,.1,16,0,.7,.45,Math.PI/2),t.cyl(e.wood,.7,.7,.1,16,0,.7,-.45,Math.PI/2),t.cyl(e.rubber,.45,.45,.8,16,0,.7,0,Math.PI/2),n(`spool`,t,[[-.7,0,-.5,.7,1.4,.5]],`wood`)}{let t=new $;t.cyl(new Ba({color:13784604,roughness:.7}),.03,.17,.7,10,0,.35,0),t.box(e.rubber,.4,.04,.4,0,.02,0),t.castShadow=!1,n(`cone`,t,`none`,`dirt`)}{let t=new $;t.box(e.metal,1.1,.8,.7,0,.4,0),t.cyl(e.metalDark,.3,.3,.05,14,0,.4,.36,Math.PI/2),n(`acUnit`,t,`bounds`,`metal`)}{let t=new $;for(let n=0;n<=4;n++)for(let r of[-.55,.55])t.box(e.hazardYellow,.1,4.6,.1,-4+n*2,2.3,r);for(let n of[.15,1.6,3.1,4.5])for(let r of[-.55,.55])t.box(e.red,8,.12,.08,0,n,r);for(let n of[.25,1.7,3.2])for(let r=0;r<4;r++){let i=-3+r*2;t.box(e.wood,1.6,.12,1,i,n,0),(r+n*3)%3<2&&t.box(r%2?e.plaster:e.tarp,1.4,1,.9,i,n+.56,0)}n(`rack`,t,[[-4.05,0,-.6,4.05,4.6,.6]],`metal`)}{let t=new $;t.box(e.hazardYellow,1.2,1.1,2.2,0,.75,0),t.box(e.metalDark,1.1,.1,1.1,0,2.3,-.2);for(let n of[-.5,.5])t.box(e.metalDark,.08,1.9,.08,n,1.3,.4);for(let n of[-.3,.3])t.box(e.metalDark,.12,2.6,.12,n,1.3,1.15);for(let n of[-.3,.3])t.box(e.steel,.12,.05,1.1,n,.1,1.8);for(let[n,r]of[[.55,.6],[-.55,.6],[.55,-.7],[-.55,-.7]])t.cyl(e.rubber,.28,.28,.2,10,n,.28,r,0,0,Math.PI/2);n(`forklift`,t,[[-.62,0,-1.1,.62,2.35,1.25]],`metal`)}{let t=new $;t.box(e.metalDark,1.8,.08,.9,0,.9,0);for(let n of[-.8,.8])for(let r of[-.38,.38])t.box(e.steel,.06,.9,.06,n,.45,r);t.box(e.metal,.4,.3,.3,-.4,1.09,0),t.box(e.screenGreen,.35,.22,.02,.4,1.12,-.1,-.3),n(`labTable`,t,[[-.9,0,-.45,.9,1,.45]],`metal`);let r=new $;r.cyl(e.metalDark,.6,.6,.3,16,0,.15,0),r.add(new Ba({color:5963642,emissive:2787898,emissiveIntensity:1.2,transparent:!0,opacity:.55,roughness:.1}),new Sa(.5,.5,2,16,1,!0),0,1.3,0),r.cyl(e.metalDark,.6,.6,.3,16,0,2.45,0),n(`tube`,r,[[-.6,0,-.6,.6,2.6,.6]],`glass`);let i=new $;i.box(e.metal,.9,1.9,.5,0,.95,0);for(let t of[-.22,.22])i.box(e.metalDark,.02,.2,.01,t,1.6,.26);n(`locker`,i,`bounds`,`metal`);let a=new $;a.box(e.metal,2.4,.06,.6,0,.3,0),a.box(e.metal,2.4,.06,.6,0,1,0),a.box(e.metal,2.4,.06,.6,0,1.7,0);for(let t of[-1.18,1.18])a.box(e.metalDark,.05,1.9,.6,t,.95,0);a.box(e.white,2.2,.3,.45,0,1.2,0),a.box(e.plaster,2,.3,.45,0,.5,0),n(`shelf`,a,`bounds`,`metal`);let o=new $;o.box(e.wood,3,1,.8,0,.5,0),o.box(e.plaster,3.1,.06,.9,0,1.03,0),n(`counter`,o,`bounds`,`wood`);let s=new $;s.box(e.wood,1.6,.06,.8,0,.75,0);for(let t of[-.75,.75])s.box(e.metalDark,.05,.75,.75,t,.37,0);s.box(e.metalDark,.5,.35,.05,0,.95,-.2),n(`desk`,s,[[-.8,0,-.4,.8,.8,.4]],`wood`);let c=new $;c.box(e.steel,2.2,.08,.9,0,.95,0),c.box(e.metalDark,2,.9,.8,0,.45,0),n(`bench`,c,`bounds`,`metal`)}{let t=new $;for(let n=0;n<3;n++){let r=[[.6,0,0],[0,0,.6],[.6,Math.PI/2,0]][n];t.box(e.rust,.14,1.8,.14,0,.8,0,r[0],r[1],r[2]),t.box(e.rust,.14,1.8,.14,0,.8,0,-r[0],r[1],-r[2])}n(`hedgehog`,t,[[-.6,0,-.6,.6,1.4,.6]],`metal`)}{let t=new $,r=new Da(3,2.6),i=r.attributes.uv;for(let e=0;e<i.count;e++)i.setXY(e,i.getX(e)*6,i.getY(e)*5.2);t.add(e.fence,r,0,1.3,0),t.cyl(e.steel,.04,.04,2.7,6,-1.5,1.35,0),t.cyl(e.steel,.03,.03,3,6,0,2.6,0,0,0,Math.PI/2),t.castShadow=!1,n(`fencePanel`,t,[[-1.5,0,-.06,1.5,2.7,.06]],`metal`,{solid:!1})}{let t=new $;for(let n of[-2.9,2.9])t.box(e.metalDark,.3,5.2,.3,n,2.6,0);t.box(e.metalDark,6.2,.3,.6,0,5.1,0);for(let[n,r,i]of[[5.6,-.2,.3],[5.55,.45,.22],[5.7,0,.18]])t.cyl(e.steel,i,i,6.2,12,0,n,r,0,0,Math.PI/2);n(`pipeRack`,t,[[-3.05,0,-.15,-2.75,5.2,.15],[2.75,0,-.15,3.05,5.2,.15]],`metal`)}return t}var Bf=class{M;root=new On;world=new jf(gu.minX,gu.minZ,gu.maxX,gu.maxZ);nav=new Ff(gu.minX,gu.minZ,gu.maxX,gu.maxZ);shapes=[];lights=[];beacons=[];poi;defenseRing;transmitterBeacon;lzMarker;spores;sporeBase;batch=new Of;noShadowBatch=new Of;inst=new kf;P;rng=new ju(20260922);constructor(e){this.M=e,this.P=zf(e),this.poi={playerSpawn:{x:0,z:93,yaw:0},transmitter:{x:40,z:6},lzPad:{x:40,z:46},radio:{x:30.5,z:46},heliLand:{x:41,z:46},boardPoint:{x:41,z:43.2},stations:[{x:9.3,z:88,yaw:-Math.PI/2,kind:`buy`},{x:13.2,z:10,yaw:-Math.PI/2,kind:`buy`},{x:-58.9,z:13,yaw:Math.PI/2,kind:`upgrade`}],crates:[],spawns:{low:[],medium:[],high:[]},eliteSpawn:{x:16,z:-60},compoundCenter:{x:0,z:-72},reactor:{x:0,z:-72}},this.buildGround(),this.buildBoundary(),this.buildLowDistrict(),this.buildDepot(),this.buildCompound(),this.buildLZ(),this.buildSkyline(),this.buildStationsColliders(),this.buildCrateSpots(),this.batch.build(this.root,{castShadow:!0,receiveShadow:!0}),this.noShadowBatch.build(this.root,{castShadow:!1,receiveShadow:!0}),this.inst.build(this.root),this.nav.build(this.world),this.buildSpawnPoints()}solid(e,t,n,r,i,a,o,s=2,c={}){(c.shadow===!1?this.noShadowBatch:this.batch).add(o,Tf(e,t,n,r,i,a,s)),this.world.add(e,t,n,r,i,a,{surface:c.surface??Uf(o,this.M),floor:c.floor,solid:c.solid})}vis(e,t,n,r,i,a,o,s=2,c=!0){(c?this.batch:this.noShadowBatch).add(o,Tf(e,t,n,r,i,a,s))}quad(e,t,n,r,i,a,o=4){this.noShadowBatch.add(a,Ef(e,t,n,r,i,o))}prop(e,t,n,r=0,i=0,a=!1){let o=this.P[e],s=Math.PI/2*r;this.inst.place(o.tpl,t,i,n,s);let c=o.colliders===`bounds`?[[o.tpl.bounds.min.x,o.tpl.bounds.min.y,o.tpl.bounds.min.z,o.tpl.bounds.max.x,o.tpl.bounds.max.y,o.tpl.bounds.max.z]]:o.colliders===`none`?[]:o.colliders;for(let s of c){let[c,l]=Vf(s[0],s[2],r),[u,d]=Vf(s[3],s[5],r);this.world.add(t+Math.min(c,u),i+s[1],n+Math.min(l,d),t+Math.max(c,u),i+s[4],n+Math.max(l,d),{surface:o.surface,solid:o.solid??!0,floor:o.floor}),a&&this.shapes.push({x0:t+Math.min(c,u),z0:n+Math.min(l,d),x1:t+Math.max(c,u),z1:n+Math.max(l,d),kind:e.startsWith(`container`)?`container`:`prop`})}}deco(e,t,n,r,i=0){this.inst.place(this.P[e].tpl,t,i,n,r)}wallX(e,t,n,r,i,a,o=[],s=0){let c=Hf(t,n,o);for(let[t,n]of c)this.solid(t,s,e-i/2,n,r,e+i/2,a,2.5);for(let t of o)this.solid(t.a,t.h,e-i/2,t.b,r,e+i/2,a,2.5),this.vis(t.a-.12,0,e-i/2-.04,t.a,t.h+.12,e+i/2+.04,this.M.metalDark,1),this.vis(t.b,0,e-i/2-.04,t.b+.12,t.h+.12,e+i/2+.04,this.M.metalDark,1),this.vis(t.a,t.h,e-i/2-.04,t.b,t.h+.12,e+i/2+.04,this.M.metalDark,1)}wallZ(e,t,n,r,i,a,o=[],s=0){let c=Hf(t,n,o);for(let[t,n]of c)this.solid(e-i/2,s,t,e+i/2,r,n,a,2.5);for(let t of o)this.solid(e-i/2,t.h,t.a,e+i/2,r,t.b,a,2.5),this.vis(e-i/2-.04,0,t.a-.12,e+i/2+.04,t.h+.12,t.a,this.M.metalDark,1),this.vis(e-i/2-.04,0,t.b,e+i/2+.04,t.h+.12,t.b+.12,this.M.metalDark,1),this.vis(e-i/2-.04,t.h,t.a,e+i/2+.04,t.h+.12,t.b,this.M.metalDark,1)}sign(e,t,n,r,i,a,o,s){let c=Td(e,{bg:s.bg,fg:s.fg,hazard:s.hazard,symbol:s.symbol,border:s.border,w:512,h:Math.round(o/a*512)}),l=new Ba({map:c,roughness:.7,metalness:.1});s.glow&&(l.emissive=new W(16777215),l.emissiveMap=c,l.emissiveIntensity=.55);let u=new K(new Da(a,o),l);return u.position.set(t,n,r),u.rotation.y=i,this.root.add(u),u}building(e){let{x0:t,z0:n,x1:r,z1:i,h:a}=e,o=this.M,s=.3;if(this.shapes.push({x0:t,z0:n,x1:r,z1:i,kind:e.enterable?`interior`:`building`}),e.enterable){let c=e.interiorH??3.4,l=e.doors??[],u=e=>l.filter(t=>t.side===e).map(e=>({a:e.a,b:e.b,h:e.h}));this.wallX(n+s/2,t,r,a,s,e.wall,u(`n`)),this.wallX(i-s/2,t,r,a,s,e.wall,u(`s`)),this.wallZ(t+s/2,n+s,i-s,a,s,e.wall,u(`w`)),this.wallZ(r-s/2,n+s,i-s,a,s,e.wall,u(`e`)),this.solid(t+s,0,n+s,r-s,.12,i-s,e.floorMat??o.concreteDark,3,{floor:!0,shadow:!1}),this.solid(t+s,c,n+s,r-s,c+.25,i-s,e.interiorWall??o.plaster,3);let d=e.interiorWall??o.plaster;this.vis(t+s,.12,n+s,r-s,c,n+s+.02,d,2.5,!1),this.vis(t+s,.12,i-s-.02,r-s,c,i-s,d,2.5,!1),this.vis(t+s,.12,n+s,t+s+.02,c,i-s,d,2.5,!1),this.vis(r-s-.02,.12,n+s,r-s,c,i-s,d,2.5,!1),this.vis(t,a,n,r,a+.3,i,o.concreteDark,3)}else this.solid(t,0,n,r,a,i,e.wall,2.5),this.vis(t,a,n,r,a+.25,i,o.concreteDark,3);let c=.25;if(this.vis(t-.1,a,n-.1,r+.1,a+.7,n+c,e.trim??o.concrete,2),this.vis(t-.1,a,i-c,r+.1,a+.7,i+.1,e.trim??o.concrete,2),this.vis(t-.1,a,n,t+c,a+.7,i,e.trim??o.concrete,2),this.vis(r-c,a,n,r+.1,a+.7,i,e.trim??o.concrete,2),this.vis(t-.06,0,n-.06,r+.06,.5,n+.1,o.concreteDark,2),this.vis(t-.06,0,i-.1,r+.06,.5,i+.06,o.concreteDark,2),this.vis(t-.06,0,n,t+.1,.5,i,o.concreteDark,2),this.vis(r-.1,0,n,r+.06,.5,i,o.concreteDark,2),e.windows!==!1&&this.windows(e),e.roofClutter){let e=(t+r)/2,s=(n+i)/2;this.deco(`acUnit`,e-2,s,0,a),this.deco(`acUnit`,e+3,s+1.5,Math.PI/2,a),this.vis(e+4,a,s-3,e+5.2,a+2.2,s-1.8,o.metalDark,1)}if(e.sign){let a=e.sign,o=a.w??6,s=o*.28,c=a.y??4.2,l=(t+r)/2,u=(n+i)/2,d=.08,[f,p,m]={n:[l,n-d,Math.PI],s:[l,i+d,0],e:[r+d,u,Math.PI/2],w:[t-d,u,-Math.PI/2]}[a.side];this.sign(a.text,f,c,p,m,o,s,{bg:a.bg,fg:a.fg,glow:a.glow})}}windows(e){let{x0:t,z0:n,x1:r,z1:i,h:a}=e,o=Math.floor((a-1)/3.3),s=e.doors??[],c=e.lit??.06,l=l=>{let u=l===`n`||l===`s`,d=u?t:n,f=(u?r:i)-d,p=Math.floor((f-1.5)/3.2);if(p<=0)return;let m=f/p;for(let f=0;f<o;f++){let o=1.1+f*3.3;if(!(o+1.7>a-.4))for(let a=0;a<p;a++){let p=d+m*(a+.5);if(f===0&&s.some(e=>e.side===l&&p>e.a-1.2&&p<e.b+1.2)||f===0&&e.enterable&&this.rng.chance(.3))continue;let h=this.rng.chance(.18),g=!h&&this.rng.chance(c)?this.M.windowLit:this.M.windowFacade,_=1.4,v=.05,y,b,x,S;if(u){let e=l===`n`?n-v:i;y=p-_/2,b=p+_/2,x=e,S=e+v}else{let e=l===`w`?t-v:r;x=p-_/2,S=p+_/2,y=e,b=e+v}if(this.vis(y,o,x,b,o+1.7,S,g,1.4,!1),u?this.vis(y-.1,o-.12,l===`n`?n-.15:i,b+.1,o,l===`n`?n:i+.15,this.M.concrete,1,!1):this.vis(l===`w`?t-.15:r,o-.12,x-.1,l===`w`?t:r+.15,o,S+.1,this.M.concrete,1,!1),h)for(let e=0;e<3;e++){let t=o+.3+e*.5;u?this.vis(y-.1,t,l===`n`?x-.04:S,b+.1,t+.22,l===`n`?x:S+.04,this.M.wood,1,!1):this.vis(l===`w`?y-.04:b,t,x-.1,l===`w`?y:b+.04,t+.22,S+.1,this.M.wood,1,!1)}}}};l(`n`),l(`s`),l(`e`),l(`w`)}streetlight(e,t,n,r=!1){this.prop(`streetlight`,e,t,n);let[i,a]=Vf(0,1.75,n),o=e+i,s=t+a,c=new K(new Da(10,10),this.M.lightPoolWarm);c.rotation.x=-Math.PI/2,c.position.set(o,.05,s),this.root.add(c);let l=new ei(this.M.glowWarm);l.position.set(o,6.9,s),l.scale.set(2.4,2.4,1),this.root.add(l),r&&this.addLight(16756848,22,20,o,6.5,s,`steady`)}addLight(e,t,n,r,i,a,o){t*=4;let s=new Eo(e,t,n*1.3,1.6);return s.position.set(r,i,a),this.root.add(s),this.lights.push({light:s,base:t,mode:o,phase:this.rng.range(0,10)}),s}beacon(e,t,n,r,i=1.6){let a=new ei(r.clone());return a.position.set(e,t,n),a.scale.set(i,i,1),a.userData.phase=this.rng.range(0,6),this.root.add(a),this.beacons.push(a),a}buildGround(){let e=this.M;this.quad(-90,-130,90,120,0,e.concreteDark,6);let t=(t,n,r,i)=>{this.quad(t,n,r,i,.015,e.asphalt,7),this.shapes.push({x0:t,z0:n,x1:r,z1:i,kind:`road`})};t(-7,-27,7,100),t(-70,58,70,70),t(-69,-24,69,-13),t(-66,31,7,37.5);for(let t=-25;t<98;t+=6)t>56&&t<72||this.quad(-.1,t,.1,t+3,.025,e.laneYellow,1);for(let t=-68;t<68;t+=6)t>-9&&t<9||this.quad(t,63.9,t+3,64.1,.025,e.laneLine,1);for(let t=-66;t<66;t+=6)t>-9&&t<9||this.quad(t,-18.6,t+3,-18.4,.025,e.laneLine,1);for(let t=0;t<7;t++){let n=-6+t*2;this.quad(n,71.2,n+1,74,.025,e.laneLine,1),this.quad(n,54,n+1,56.8,.025,e.laneLine,1)}let n=(t,n,r,i)=>{this.solid(t,0,n,r,.15,i,e.sidewalk,3,{floor:!0,shadow:!1}),this.vis(t,0,n,r,.16,n+.12,e.concrete,1,!1),this.shapes.push({x0:t,z0:n,x1:r,z1:i,kind:`sidewalk`})};n(-12,73,-7,99),n(7,73,12,99),n(-70,70,-12,73),n(12,70,69,73),n(-69,55,-7,58),n(7,55,69,58),n(-12,40,-7,55),n(7,38,12,55);for(let[t,n,r,i]of[[-3,80,2.6,1.6],[4,66,3.4,1.8],[-5,40,2.2,1.4],[2,20,3,2],[-2,-6,3.6,2.2],[20,62,4,2],[-40,64,3,1.5],[-20,-18,4,2.5],[30,-20,3,1.8],[-4,-40,3,2],[18,-70,3.5,2.2],[45,48,3,1.6],[-30,34,3,1.6]]){let a=new K(new xa(1,20),e.puddle);a.rotation.x=-Math.PI/2,a.position.set(t,.03,n),a.scale.set(r,i,1),a.rotation.z=this.rng.range(0,3),this.root.add(a)}}buildBoundary(){let e=this.M;this.solid(-71,0,99.2,71,6,101,e.concreteDark,3),this.solid(-71,0,-111,71,6,-109.2,e.concreteDark,3),this.solid(-71,0,-111,-69.2,6,101,e.concreteDark,3),this.solid(69.2,0,-111,71,6,101,e.concreteDark,3),this.shapes.push({x0:-71,z0:99.2,x1:71,z1:101,kind:`wall`},{x0:-71,z0:-111,x1:71,z1:-109.2,kind:`wall`},{x0:-71,z0:-111,x1:-69.2,z1:101,kind:`wall`},{x0:69.2,z0:-111,x1:71,z1:101,kind:`wall`});let t=(e,t,n,r)=>{let i=Math.hypot(n-e,r-t),a=Math.floor(i/3);for(let i=0;i<a;i++){let o=(i+.5)/a;this.deco(`fencePanel`,e+(n-e)*o,t+(r-t)*o,Math.abs(n-e)>1?0:Math.PI/2,6)}};t(-69,100,69,100),t(-69,-110,69,-110),t(-70,-108,-70,98),t(70,-108,70,98);let n=[`QUARANTINE ZONE`,`NO ENTRY - LETHAL FORCE AUTHORISED`];for(let e of[-80,-40,10,45,85])this.sign(n,-69.15,3,e,Math.PI/2,4,1.4,{bg:`#c9a227`,fg:`#111`,hazard:!0}),this.sign(n,69.15,3,e+7,-Math.PI/2,4,1.4,{bg:`#c9a227`,fg:`#111`,hazard:!0});for(let e of[-1,1]){let t=e*66;this.prop(`rubbleBig`,t-e*.5,61,1),this.prop(`container1`,t,66.5,0),this.prop(`jersey`,t-e*4.5,60,1),this.prop(`jersey`,t-e*4.5,63.4,1),this.prop(`hedgehog`,t-e*7,68,0),this.deco(`rubble`,t-e*5,68.5,.7)}for(let e of[-1,1])this.prop(`rubbleBig`,e*65.5,-18.5,1),this.prop(`jersey`,e*61,-22,1),this.prop(`hedgehog`,e*61,-15,0);this.solid(-8,0,98.6,8,5,99.2,e.metalDark,2);for(let t=0;t<8;t++)this.vis(-7.6+t*2,.3,98.4,-7.2+t*2,4.8,98.6,e.hazardYellow,1);this.sign([`QUARANTINE CHECKPOINT 7`,`JOINT TASK FORCE ARGUS`],0,4.1,98.35,Math.PI,7,1.6,{bg:`#1b1f1c`,fg:`#e8e2cf`,border:`#c9a227`})}buildLowDistrict(){let e=this.M;this.building({x0:-28,z0:76,x1:-12,z1:92,h:7.5,wall:e.brick,trim:e.concrete,enterable:!0,interiorH:3.4,doors:[{side:`e`,a:82,b:84.6,h:2.6},{side:`n`,a:-21,b:-19,h:2.5}],sign:{text:[`PHARMACY`,`24 HR`],side:`e`,bg:`#1c3b2f`,fg:`#7dffb0`,y:3.3,w:5,glow:!0},lit:.1,roofClutter:!0}),this.prop(`shelf`,-24,80,0),this.prop(`shelf`,-24,84,0),this.prop(`shelf`,-18,80,0),this.prop(`counter`,-16,88.5,0),this.prop(`shelf`,-26.9,88,1),this.deco(`trash`,-19,85,1),this.deco(`crateSmall`,-21.5,88.5,.4),this.addLight(16763024,9,12,-20,3,84,`flicker`),this.building({x0:12,z0:76,x1:30,z1:94,h:6.5,wall:e.plasterBlue,trim:e.concreteDark,enterable:!0,interiorH:4.2,doors:[{side:`w`,a:80,b:88,h:3.6},{side:`n`,a:24,b:26,h:2.4}],sign:{text:[`MERIDIAN AUTO`,`REPAIR · TIRES`],side:`w`,bg:`#2a2d31`,fg:`#f0b04a`,y:4.8,w:6},lit:.05}),this.solid(24,1.25,75.95,26,2.4,76.35,e.corrugated,1,{surface:`metal`}),this.vis(23.9,1.2,75.8,26.1,1.3,75.95,e.metalDark,1),this.prop(`sedan2`,20,85,0),this.prop(`locker`,29.2,80,3),this.prop(`locker`,29.2,81,3),this.prop(`bench`,16,92.5,0),this.prop(`barrel`,28.5,92.5,0),this.deco(`spool`,26,88,0),this.building({x0:-64,z0:76,x1:-32,z1:98,h:12,wall:e.brickDark,trim:e.concrete,lit:.08,roofClutter:!0}),this.building({x0:36,z0:78,x1:66,z1:98,h:10,wall:e.plaster,trim:e.concreteDark,lit:.07,roofClutter:!0,sign:{text:[`HOTEL VANTAGE`],side:`w`,bg:`#401d1d`,fg:`#ffcf8a`,y:7,w:7,glow:!0}}),this.building({x0:-64,z0:40,x1:-42,z1:54,h:9,wall:e.brick,trim:e.concrete,lit:.05}),this.building({x0:-36,z0:40,x1:-12,z1:54,h:11,wall:e.plaster,trim:e.concreteDark,lit:.08,roofClutter:!0,sign:{text:[`CIVIC RECORDS`],side:`s`,bg:`#23282c`,fg:`#d8d4c8`,y:4.5,w:6}}),this.prop(`humvee`,-4,87,0),this.prop(`truck`,5.5,93.5,2),this.prop(`tent`,-8.5,95,0),this.prop(`sandbags`,-3,80.5,0),this.prop(`sandbags`,-1,80.5,0),this.prop(`sandbags`,3,80.5,0),this.prop(`sandbags`,5,80.5,0),this.prop(`sandbags`,-5.3,81.5,1),this.prop(`crate`,9.5,91.5,0),this.prop(`crateSmall`,10,85,1),this.prop(`crateSmall`,8.2,97.5,0),this.prop(`floodlight`,-3.5,96.8,0),this.prop(`generator`,1.5,97.5,0),this.addLight(14214911,28,28,-6,7,93,`steady`);let t=new K(new Da(16,16),e.lightPoolCold);t.rotation.x=-Math.PI/2,t.position.set(-4,.05,88),this.root.add(t),this.prop(`jersey`,-4.5,77.5,0),this.prop(`jersey`,4.5,77.5,0),this.streetlight(-8.2,84,1,!1),this.streetlight(8.2,71.8,3,!0),this.streetlight(-8.2,48,1),this.streetlight(8.2,26,3),this.streetlight(-8.2,6,1,!0),this.streetlight(-30,71.5,2),this.streetlight(34,56.5,0),this.streetlight(-52,56.5,0),this.streetlight(56,71.5,2),this.prop(`sedan0`,-4,66,1),this.prop(`sedanBurnt`,3.5,60.5,0),this.prop(`sedan1`,-24,61,1),this.prop(`van`,22,67,1),this.prop(`sedan3`,44,60.5,1),this.prop(`sedanBurnt`,-46,66,1),this.prop(`sedan2`,4.5,45,0),this.prop(`sedan0`,-4.5,29,2),this.prop(`sedanBurnt`,3.8,8,0),this.prop(`dumpster`,-31,94,1),this.prop(`dumpster`,-39,43,1),this.prop(`dumpster`,33,80,1),this.deco(`trash`,-30.5,90,.4),this.deco(`trash`,32.5,88,2),this.deco(`trash`,-10.8,76,1),this.deco(`trash`,10.8,60,2),this.deco(`trash`,-38,50,.2),this.deco(`trash`,10.5,40,1.5),this.prop(`pole`,-11.2,56.5,0),this.prop(`pole`,11.2,42,0),this.prop(`pole`,-11.2,20,0),this.prop(`barrier`,-3,72,0),this.prop(`barrier`,36,64,1),this.prop(`cone`,-1,58.5,0),this.deco(`cone`,1.2,57.8,.4),this.deco(`cone`,5.6,71.2,0),this.prop(`rubble`,-18,64.5,0),this.prop(`rubble`,50,66.5,1),this.prop(`sandbags`,12,57,0),this.prop(`sandbags`,14,57,0),this.cables([[-11.2,8.8,56.5],[11.2,8.8,42],[-11.2,8.8,20]])}cables(e){let t=[];for(let n=0;n<e.length-1;n++)for(let r of[-.9,.9]){let i=e[n],a=e[n+1];for(let e=0;e<16;e++){let n=e/16,o=(e+1)/16,s=e=>-Math.sin(e*Math.PI)*1.4;t.push(i[0]+(a[0]-i[0])*n+r,i[1]+s(n),i[2]+(a[2]-i[2])*n),t.push(i[0]+(a[0]-i[0])*o+r,i[1]+s(o),i[2]+(a[2]-i[2])*o)}}let n=new Ar;n.setAttribute(`position`,new G(t,3)),this.root.add(new sa(n,this.M.cable))}buildDepot(){let e=this.M;this.building({x0:-60,z0:-8,x1:-20,z1:26,h:10,wall:e.corrugated,trim:e.metalDark,enterable:!0,interiorH:8.6,doors:[{side:`e`,a:4,b:12,h:5.2},{side:`n`,a:-42,b:-39.6,h:2.5},{side:`s`,a:-32,b:-29.6,h:2.5}],windows:!1,interiorWall:e.corrugatedGreen,floorMat:e.concrete,sign:{text:[`KESSLER FREIGHT`,`DEPOT 4`],side:`e`,bg:`#1e2a36`,fg:`#e3e0d6`,y:7.2,w:9}}),this.vis(-19.9,5.2,3.8,-19.5,6.2,12.2,e.corrugated,1),this.vis(-19.9,0,3.6,-19.4,5.4,4,e.hazardYellow,1),this.vis(-19.9,0,12,-19.4,5.4,12.4,e.hazardYellow,1);for(let t=-54;t<=-26;t+=7)this.vis(t-.2,8.3,-4,t+.2,8.4,22,e.lampCold,1,!1);this.addLight(13163775,40,34,-44,7.5,5,`steady`),this.addLight(13163775,30,28,-30,7.5,16,`steady`),this.prop(`rack`,-50,1.6,0),this.prop(`rack`,-42,1.6,0),this.prop(`rack`,-34,1.6,0),this.prop(`rack`,-50,10.6,0),this.prop(`rack`,-42,10.6,0),this.prop(`rack`,-46,18.6,0),this.prop(`rack`,-38,18.6,0),this.prop(`rack`,-30,18.6,0),this.prop(`forklift`,-26,17,1),this.prop(`pallets`,-25,-4,0),this.prop(`pallets`,-27,-5.8,0),this.prop(`crate`,-23.2,-6,0),this.prop(`pallets`,-56,22.5,0),this.prop(`barrel`,-57.5,24.5,0),this.prop(`barrel`,-58.5,23.7,0),this.prop(`bench`,-58.5,6.5,1),this.prop(`locker`,-59.2,17.5,1),this.prop(`locker`,-59.2,18.5,1),this.solid(-58,0,26,-40,1.2,30.5,e.concrete,2,{floor:!0});for(let t=0;t<3;t++)this.solid(-40+t*.8,0,26.6,-40+(t+1)*.8,1.2-.3*(t+1),29.6,e.concrete,1,{floor:!0});this.vis(-58,1.2,30.2,-40,1.26,30.5,e.hazardYellow,1);for(let t of[-55,-49,-43])this.vis(t-1.8,1.2,25.8,t+1.8,4.6,26,e.corrugated,1),this.vis(t-1.9,.3,30.5,t-1.5,1,30.8,e.rubber,1),this.vis(t+1.5,.3,30.5,t+1.9,1,30.8,e.rubber,1);this.solid(-58,1.2,26,-57.8,2.2,30.5,e.hazardYellow,1,{surface:`metal`}),this.shapes.push({x0:-58,z0:26,x1:-40,z1:30.5,kind:`prop`}),this.prop(`truck`,-50,34.9,0),this.prop(`crateSmall`,-46,27.5,0,1.2),this.prop(`pallets`,-44,28,0,1.2),this.prop(`sedan1`,-30,34,1),this.shapes.push({x0:12,z0:-10,x1:66,z1:28,kind:`yard`}),this.quad(12,-12,69,29,.012,e.dirt,6);let t=(e,t,n,r,i=1)=>{this.prop(`container${e}`,t,n,r,0,!0),i>1&&this.prop(`container${(e+2)%6}`,t,n,r,2.6)};t(0,19,-6,1,1),t(1,25.2,-6,1,2),t(3,47,-6,1,1),t(4,53.2,-6,1,2),t(2,18.5,23.5,1,2),t(5,24.7,23.5,1,1),t(0,50,23.5,1,1),t(1,56.2,23.5,1,2),t(3,62.4,23.5,1,1),t(4,63,2,0,2),t(2,63,11,0,1),t(5,28,8,0,1),t(3,52,12,0,2),t(1,35.5,17,1,1);for(let[t,n]of[[30,-1],[30,17],[50,-1],[50,17]])this.solid(t-.5,0,n-.5,t+.5,13,n+.5,e.hazardYellow,2,{surface:`metal`});this.vis(29.5,13,-1.5,30.5,14.2,17.5,e.hazardYellow,2),this.vis(49.5,13,-1.5,50.5,14.2,17.5,e.hazardYellow,2),this.vis(29,14.2,3,51,15.4,5,e.hazardYellow,2),this.vis(29,14.2,11,51,15.4,13,e.hazardYellow,2),this.vis(37,12.5,2.6,41,14.2,5.4,e.metalDark,1),this.beacon(30,15.8,4,e.glowRed,1.2),this.beacon(50,15.8,12,e.glowRed,1.2);let n=this.poi.transmitter;this.solid(n.x-3,0,n.z-3,n.x+3,.3,n.z+3,e.concrete,2,{floor:!0,shadow:!1}),this.solid(n.x-.6,.3,n.z-.6,n.x+.6,16,n.z+.6,e.metalDark,1,{surface:`metal`});for(let t=1.3;t<16;t+=1.4)this.vis(n.x-.75,t,n.z-.75,n.x+.75,t+.08,n.z+.75,e.steel,1);this.vis(n.x-.05,16,n.z-.05,n.x+.05,19,n.z+.05,e.steel,1);for(let[t,r]of[[1,0],[-1,0],[0,1]])this.vis(n.x+t*.6-.35,12,n.z+r*.6-.35,n.x+t*.6+.35,13.4,n.z+r*.6+.35,e.white,1);this.prop(`generator`,n.x+2.6,n.z-1.4,1,.3),this.solid(n.x-2.4,.3,n.z+1.2,n.x-1.2,1.5,n.z+2.2,e.olive,1,{surface:`metal`}),this.vis(n.x-2.3,1.1,n.z+2.21,n.x-1.3,1.4,n.z+2.24,e.screenAmber,1,!1),this.transmitterBeacon=this.beacon(n.x,19.3,n.z,e.glowRed,2.2),this.addLight(16724e3,10,18,n.x,4,n.z,`pulse`);let r=new K(new Da(18,18),new si({map:e.tex.ring,color:16752704,transparent:!0,opacity:.5,depthWrite:!1,blending:2}));r.rotation.x=-Math.PI/2,r.position.set(n.x,.35,n.z),r.visible=!1,this.root.add(r),this.defenseRing=r,this.sign([`UPLINK RELAY 03`,`ARGUS SIGNALS`],n.x-1.8,2.4,n.z+2.25,0,1.8,.6,{bg:`#20262a`,fg:`#ffb34d`}),this.prop(`forklift`,40,20,0),this.prop(`spool`,22,14,0),this.prop(`spool`,45,0,1),this.prop(`pallets`,58,-1,0),this.prop(`barrel`,36,-2.5,0),this.prop(`barrel`,36.8,-1.8,0),this.prop(`floodlight`,16,-1,1),this.prop(`crate`,57,17,0),this.prop(`crate`,58.3,17.5,0),this.prop(`jersey`,14,30,0),this.prop(`jersey`,60,30,0);for(let e=18;e<58;e+=3)(e<34||e>44)&&this.prop(`fencePanel`,e,30.5,0);this.shapes.push({x0:16.5,z0:30.4,x1:33.5,z1:30.6,kind:`fence`},{x0:44.5,z0:30.4,x1:57.5,z1:30.6,kind:`fence`}),this.prop(`sedanBurnt`,-30,-20,1),this.prop(`truck`,26,-18.5,1),this.prop(`barrier`,-48,-15,0),this.prop(`sedan3`,52,-21,1),this.prop(`rubble`,-10,-14.5,0),this.streetlight(-24,-12.4,0),this.streetlight(40,-12.4,0)}buildCompound(){let e=this.M,t=4.6;this.solid(-69.2,0,-27,-6,t,-26,e.concrete,2),this.solid(6,0,-27,44,t,-26,e.concrete,2),this.solid(50,0,-27,69.2,t,-26,e.concrete,2),this.shapes.push({x0:-69.2,z0:-27,x1:-6,z1:-26,kind:`wall`},{x0:6,z0:-27,x1:44,z1:-26,kind:`wall`},{x0:50,z0:-27,x1:69.2,z1:-26,kind:`wall`});for(let e=-67.5;e<68;e+=3)e>-7&&e<7||e>43&&e<51||this.deco(`fencePanel`,e,-26.5,0,t);let n=new Wi(new ka(.35,.02,4,10),e.steel,180),r=0,i=new Dn;for(let e=-68;e<68&&r<180;e+=.8)e>-6&&e<6||e>44&&e<50||(i.position.set(e,7.3999999999999995,-26.5),i.rotation.set(0,Math.PI/2,0),i.updateMatrix(),n.setMatrixAt(r++,i.matrix));n.count=r,this.root.add(n),this.prop(`rubble`,43,-24,0),this.prop(`rubble`,51,-29,1),this.deco(`rubble`,47,-26.5,.4),this.vis(44,0,-27.3,45.2,2.2,-25.8,e.concreteDark,1),this.vis(48.8,0,-27.2,50,3,-25.7,e.concreteDark,1),this.solid(6.5,0,-32,9.5,2.8,-29,e.white,2),this.vis(6.4,2.8,-32.1,9.6,3,-28.9,e.metalDark,1),this.vis(6.45,1.2,-31,6.5,2.2,-29.6,e.glass,1,!1),this.vis(-6,1,-26.6,.5,1.12,-26.4,e.red,1),this.vis(-.5,1,-26.6,0,1.12,-26.4,e.white,1),this.solid(-6.4,0,-26.8,-5.8,1.2,-26.2,e.metalDark,1),this.solid(5.8,0,-26.8,6.4,1.2,-26.2,e.metalDark,1),this.sign([`HALCYON BIOTECHNICA`,`RESTRICTED · BIOHAZARD LEVEL 4`],0,5.2,-25.9,0,9,1.8,{bg:`#e6e6e0`,fg:`#8a1a14`,symbol:`bio`}),this.vis(-6,4.3,-26.8,6,6.2,-26.2,e.metalDark,1);for(let e of[-30,25,60])this.sign([`BIOHAZARD`,`CONTAMINATION BEYOND`],e,2.5,-25.95,0,3,1.2,{bg:`#c9a227`,fg:`#111`,symbol:`bio`});this.shapes.push({x0:-69,z0:-109,x1:69,z1:-27,kind:`compound`}),this.quad(-69,-109,69,-27,.012,e.concrete,5),this.quad(-5,-70,5,-27,.02,e.asphalt,7);let a=this.poi.reactor,o=new On;o.position.set(a.x,0,a.z);let s=new K(new Sa(7.2,9,26,32,1,!0),e.concreteDark);s.position.y=13,s.castShadow=s.receiveShadow=!0,o.add(s);let c=new K(new Sa(7.4,7.4,1.2,32),e.metalDark);c.position.y=26.4,o.add(c);for(let t=0;t<6;t++){let n=new K(new Sa(9.15-t*.33,9.15-t*.33,.4,32,1,!0),e.metalDark);n.position.y=2.2+t*4.2,o.add(n)}for(let t=0;t<8;t++){let n=t/8*Math.PI*2,r=new K(new q(1.6,.9,.2),e.toxicGlow);r.position.set(Math.cos(n)*8.85,3.5,Math.sin(n)*8.85),r.lookAt(Math.cos(n)*20,3.5,Math.sin(n)*20),o.add(r);let i=new K(new q(1.2,.3,.2),e.toxicGlow);i.position.set(Math.cos(n)*7.5,22,Math.sin(n)*7.5),i.lookAt(Math.cos(n)*20,22,Math.sin(n)*20),o.add(i)}let l=new K(new q(.8,24,.3),e.steel);l.position.set(0,13,8.4),l.rotation.x=-.075,o.add(l),this.root.add(o),this.beacon(a.x,27.8,a.z,e.glowRed,3.5),this.beacon(a.x+7,26.5,a.z,e.glowRed,1.6),this.beacon(a.x-7,26.5,a.z,e.glowRed,1.6);let u=new K(new Da(34,34),e.lightPoolToxic);u.rotation.x=-Math.PI/2,u.position.set(a.x,.06,a.z),this.root.add(u),this.addLight(7012170,30,34,a.x,5,a.z+12,`pulse`),this.world.add(a.x-9,0,a.z-3.7,a.x+9,26,a.z+3.7,{surface:`concrete`}),this.world.add(a.x-3.7,0,a.z-9,a.x+3.7,26,a.z+9,{surface:`concrete`}),this.world.add(a.x-6.5,0,a.z-6.5,a.x+6.5,26,a.z+6.5,{surface:`concrete`}),this.shapes.push({x0:a.x-9,z0:a.z-9,x1:a.x+9,z1:a.z+9,kind:`building`}),this.prop(`pipeRack`,-14,-63,1),this.prop(`pipeRack`,-20,-58.5,0),this.prop(`pipeRack`,-26,-58.5,0),this.vis(-29.5,5.35,-59.1,-9,5.8,-58.6,e.steel,1),this.building({x0:-58,z0:-68,x1:-30,z1:-44,h:7.5,wall:e.white,trim:e.metalDark,enterable:!0,interiorH:3.6,doors:[{side:`e`,a:-57,b:-54.4,h:2.6},{side:`s`,a:-47,b:-44.4,h:2.6},{side:`n`,a:-40,b:-37.6,h:2.6}],interiorWall:e.white,floorMat:e.metal,lit:.12,sign:{text:[`HALCYON LAB B`,`VECTOR ANALYSIS`],side:`s`,bg:`#dfe3e3`,fg:`#1d3a4a`,y:4.3,w:6}}),this.wallZ(-44,-67.7,-44.3,3.6,.2,e.white,[{a:-59,b:-56.6,h:2.4},{a:-51,b:-49,h:2.4}]),this.prop(`labTable`,-52,-64,0),this.prop(`labTable`,-52,-60,0),this.prop(`labTable`,-37,-64,0),this.prop(`tube`,-35,-48.5,0),this.prop(`tube`,-38,-48.5,0),this.prop(`tube`,-41,-48.5,0),this.prop(`desk`,-33,-60,1),this.prop(`locker`,-57.2,-47,1),this.prop(`locker`,-57.2,-48,1),this.prop(`shelf`,-48.5,-66.9,0),this.addLight(10158016,8,14,-44,3,-56,`flicker`),this.prop(`deconTent`,24,-40,0),this.prop(`deconTent`,31,-40,0),this.prop(`humvee`,16,-48,0),this.prop(`sandbags`,20,-34,0),this.prop(`sandbags`,22,-34,0),this.prop(`hazBarrel`,28,-46,0),this.prop(`hazBarrel`,28.7,-46.6,0),this.prop(`hazBarrel`,27.4,-46.8,0),this.prop(`floodlight`,-20,-38,3),this.prop(`floodlight`,26,-96,0),this.prop(`crateSmall`,34,-46,0),this.prop(`crateSmall`,35,-45,1);let d=new On;d.position.set(42,0,-82),d.rotation.set(.12,.6,-.3);let f=new K(new ba(1.4,4.2,4,10),e.burnt);f.rotation.x=Math.PI/2,f.position.y=1.4,f.castShadow=!0,d.add(f);let p=new K(new Sa(.35,.6,5,8),e.burnt);p.rotation.x=Math.PI/2-.2,p.position.set(0,1.9,-5),p.castShadow=!0,d.add(p);for(let t=0;t<3;t++){let n=new K(new q(.4,.06,5.5),e.metalDark);n.position.set(0,3,0),n.rotation.set(.2*t,t*2.1,.3),n.castShadow=!0,d.add(n)}this.root.add(d),this.world.add(39.5,0,-85,45,2.6,-79,{surface:`metal`}),this.world.add(38,0,-88,41,2.6,-85,{surface:`metal`}),this.shapes.push({x0:38,z0:-88,x1:45,z1:-79,kind:`prop`});let m=new ei(e.glowWarm.clone());m.position.set(42,1.5,-82),m.scale.set(4,4,1),this.root.add(m),this.beacons.push(m),m.userData.phase=0,m.userData.fire=!0,this.prop(`container2`,-50,-95,1,0,!0),this.prop(`container5`,-43.8,-95,1,0,!0),this.prop(`container0`,-50,-95,1,2.6),this.prop(`container4`,54,-60,0,0,!0),this.prop(`container1`,54,-52,0,0,!0),this.building({x0:-20,z0:-104,x1:-2,z1:-92,h:5,wall:e.concreteDark,trim:e.metalDark,windows:!1,sign:{text:[`COLD STORAGE`,`AUTHORISED PERSONNEL`],side:`s`,bg:`#3a3f44`,fg:`#e0e0da`,y:3.2,w:5}});for(let[e,t]of[[-12,-88],[-10.8,-88.6],[12,-95],[13,-94.2],[48,-40],[-60,-34],[-59.2,-34.8],[58,-100]])this.prop(`hazBarrel`,e,t,0);for(let[e,t,n]of[[-11,-86.5,3],[12.5,-93,4],[47.5,-42,3.5],[30,-60,5],[-24,-80,4]]){let r=new K(new xa(1,20),new si({color:3866426,transparent:!0,opacity:.35,blending:2,depthWrite:!1}));r.rotation.x=-Math.PI/2,r.position.set(e,.035,t),r.scale.set(n,n*.7,1),this.root.add(r)}this.prop(`jersey`,-30,-34,0),this.prop(`jersey`,-33,-34,0),this.prop(`hedgehog`,8,-40,0),this.prop(`hedgehog`,-10,-46,0),this.prop(`truck`,-8,-34,1),this.prop(`sedanBurnt`,60,-80,0),this.prop(`rubble`,20,-100,0),this.prop(`rubble`,-64,-70,1),this.prop(`barrier`,36,-64,0),this.prop(`barrier`,40,-64,0);let h=new Float32Array(1200);this.sporeBase=new Float32Array(1600);for(let e=0;e<400;e++){let t=this.rng.range(0,Math.PI*2),n=this.rng.range(9,38);this.sporeBase[e*4]=a.x+Math.cos(t)*n,this.sporeBase[e*4+1]=this.rng.range(.3,9),this.sporeBase[e*4+2]=a.z+Math.sin(t)*n,this.sporeBase[e*4+3]=this.rng.range(0,10)}let g=new Ar;g.setAttribute(`position`,new gr(h,3)),this.spores=new pa(g,new ca({color:10157930,size:.14,map:e.tex.glow,transparent:!0,opacity:.8,blending:2,depthWrite:!1})),this.spores.frustumCulled=!1,this.root.add(this.spores)}buildLZ(){let e=this.M,t=this.poi.lzPad;this.shapes.push({x0:14,z0:38,x1:64,z1:54,kind:`lot`}),this.quad(14,38,64,54,.018,e.asphalt,7);for(let t=16;t<62;t+=3)t>30&&t<52||(this.quad(t,38.5,t+.12,43,.026,e.laneLine,1),this.quad(t,49,t+.12,53.5,.026,e.laneLine,1));let n=Td([`H`],{bg:`#3b3f40`,fg:`#e8e4d8`,w:512,h:512,border:`#c9a227`,font:`Arial Black, Arial, sans-serif`}),r=new K(new xa(7,40),new Ba({map:n,roughness:.8,polygonOffset:!0,polygonOffsetFactor:-3}));r.rotation.x=-Math.PI/2,r.position.set(t.x,.03,t.z),r.receiveShadow=!0,this.root.add(r),this.lzMarker=r;for(let n=0;n<12;n++){let r=n/12*Math.PI*2,i=new K(new Sa(.12,.14,.12,8),e.screenAmber);i.position.set(t.x+Math.cos(r)*7.3,.06,t.z+Math.sin(r)*7.3),this.root.add(i)}let i=this.poi.radio;this.solid(i.x-.5,0,i.z-.4,i.x+.5,.9,i.z+.4,e.olive,1,{surface:`metal`}),this.vis(i.x-.35,.9,i.z-.25,i.x+.15,1.2,i.z+.25,e.oliveDark,1),this.vis(i.x+.3,.9,i.z-.02,i.x+.34,2.1,i.z+.02,e.steel,1),this.vis(i.x-.3,1,i.z+.26,i.x+.1,1.15,i.z+.27,e.screenGreen,1,!1),this.sign([`EXFIL LZ`,`CALL SIGN: RAVEN 2-1`],34,1.4,38.2,0,2.6,.9,{bg:`#1b1f1c`,fg:`#c9a227`}),this.solid(33,0,38,35,.9,38.15,e.metalDark,1),this.addLight(16756832,10,22,t.x,5,t.z,`steady`),this.prop(`sedan0`,18,41,0),this.prop(`sedan3`,21,51,2),this.prop(`sedanBurnt`,58,40.5,0),this.prop(`van`,60,50.5,2),this.prop(`floodlight`,16,47,1),this.prop(`jersey`,64.5,46,1),this.prop(`sandbags`,25,43,1),this.prop(`sandbags`,25,49,1),this.prop(`crate`,55,44,0),this.prop(`crateSmall`,55,46,1)}buildSkyline(){let e=this.M,t=new ju(7),n=new Ba({color:1777961,roughness:1}),r=new si({color:16756832}),i=[],a=[],o=(e,n,r,o,s)=>{i.push(new q(r,s,o).translate(e,s/2,n));for(let i=0;i<6;i++){if(!t.chance(.5))continue;let i=new Da(1.2,1.4),c=t.range(4,s-3),l=t.range(-.4,.4),u=Math.atan2(-e,-n),d=Math.sin(u),f=Math.cos(u),p=Math.min(r,o)/2+.05;i.rotateY(u),i.translate(e+d*p+f*l*r,c,n+f*p-d*l*o),a.push(i)}};for(let e=0;e<90;e++){let e=t.range(0,Math.PI*2),n=t.range(120,190),r=Math.cos(e)*n*.9,i=Math.sin(e)*n*1.1-5;Math.abs(r)<85&&i>-125&&i<115||o(r,i,t.range(10,26),t.range(10,26),t.range(14,55))}for(let t of[-40,30])i.push(new Sa(.4,1.2,60,6).translate(140,30,t)),this.beacon(140,61,t,e.glowRed,4);let s=ku(i.map(e=>Df(e)),!1);if(s&&this.root.add(new K(s,n)),a.length){let e=ku(a.map(e=>Df(e)),!1);e&&this.root.add(new K(e,r))}}buildStationsColliders(){for(let e of this.poi.stations){let t=e.kind===`upgrade`?1.1:.8,n=e.kind===`upgrade`?2.2:2,r=Math.abs(Math.sin(e.yaw))>.5,i=r?t/2:n/2,a=r?n/2:t/2;this.world.add(e.x-i,0,e.z-a,e.x+i,1.6,e.z+a,{surface:`metal`}),this.shapes.push({x0:e.x-i,z0:e.z-a,x1:e.x+i,z1:e.z+a,kind:`prop`})}}buildCrateSpots(){for(let[e,t,n,r]of[[-25.5,90.5,0,`low`],[27,90.6,0,`low`],[-30,97.3,0,`low`],[-39,47.5,0,`low`],[-66.5,44,0,`low`],[33,96.5,0,`low`],[-56,-4.5,0,`medium`],[-23.5,22.5,0,`medium`],[-55,28.3,1.2,`medium`],[62,-9.3,0,`medium`],[37,25.5,0,`medium`],[-64,-25.1,0,`medium`],[-54,-49,0,`high`],[34.5,-48.5,0,`high`],[47,-88.5,0,`high`],[-14,-90.5,0,`high`],[62,-104,0,`high`]])this.poi.crates.push({x:e,z:t,y:n,yaw:0,region:r}),this.world.add(e-.55,n,t-.35,e+.55,n+.62,t+.35,{surface:`metal`})}buildSpawnPoints(){let e={low:[[-66,64],[66,64],[-30,97],[33,98],[-39,49],[-66,47],[-20,74.5],[22,74.5],[-50,71.5],[50,71.5],[0,56]],medium:[[-66,-18],[66,-18],[-40,-6],[-62,34],[66,6],[64,28],[20,-9],[-28,20],[10,34],[-50,5],[44,32],[-16,-2]],high:[[-66,-40],[66,-40],[-50,-104],[50,-104],[0,-106],[-44,-50],[30,-62],[-20,-90],[62,-72],[-62,-80],[20,-32],[-36,-38]]},t={x:0,z:0};for(let n of Object.keys(e))for(let[r,i]of e[n]){let e=this.nav.nearestWalkable(r,i,5);e<0||(this.nav.cellCenter(e,t),this.poi.spawns[n].push({x:t.x,z:t.z}))}}update(e,t){for(let t of this.beacons){let n=t.material;n.opacity=t.userData.fire?.55+Math.sin(e*17)*.15+Math.sin(e*7.3)*.15:(e*1.1+t.userData.phase)%1.6<.35?1:.12}for(let t of this.lights)if(t.mode===`flicker`){let n=Math.sin(e*23+t.phase)*Math.sin(e*3.1+t.phase*2);t.light.intensity=n>.85?t.base*.15:t.base*(.9+Math.sin(e*40+t.phase)*.05)}else t.mode===`pulse`&&(t.light.intensity=t.base*(.75+Math.sin(e*2.2+t.phase)*.25));if(this.spores){let t=this.spores.geometry.attributes.position,n=this.sporeBase;for(let r=0;r<t.count;r++){let i=n[r*4+3]+e*.3;t.setXYZ(r,n[r*4]+Math.sin(i*1.3)*1.5,n[r*4+1]+(e*.4+i)%6,n[r*4+2]+Math.cos(i)*1.5)}t.needsUpdate=!0}}regionShapes(){return this.shapes}};function Vf(e,t,n){let r=(n%4+4)%4;return r===0?[e,t]:r===1?[t,-e]:r===2?[-e,-t]:[-t,e]}function Hf(e,t,n){let r=[],i=[...n].sort((e,t)=>e.a-t.a),a=e;for(let e of i)e.a>a&&r.push([a,e.a]),a=Math.max(a,e.b);return a<t&&r.push([a,t]),r}function Uf(e,t){return e===t.corrugated||e===t.corrugatedGreen||e===t.metal||e===t.metalDark||e===t.steel||e===t.olive||e===t.hazardYellow?`metal`:e===t.wood?`wood`:e===t.dirt||e===t.sandbag?`dirt`:`concrete`}var Wf={KeyW:`forward`,ArrowUp:`forward`,KeyS:`back`,ArrowDown:`back`,KeyA:`left`,ArrowLeft:`left`,KeyD:`right`,ArrowRight:`right`,ShiftLeft:`sprint`,ShiftRight:`sprint`,Space:`jump`,KeyC:`crouch`,ControlLeft:`crouch`,KeyR:`reload`,KeyE:`interact`,KeyF:`interact`,Digit1:`weapon1`,Digit2:`weapon2`,KeyG:`grenade`,KeyQ:`plate`,KeyM:`map`,Tab:`map`,Digit3:`buy3`,Digit4:`buy4`,Digit5:`buy5`,Digit6:`buy6`,Digit7:`buy7`},Gf=class{el;held=new Set;pressed=new Set;mouseDX=0;mouseDY=0;wheel=0;fireHeld=!1;firePressed=!1;aimHeld=!1;fireBlocked=!1;leftDown=!1;locked=!1;virtualLock=!1;onLockChange=()=>{};onFocusLost=()=>{};onEscape=()=>{};constructor(e){this.el=e,document.addEventListener(`keydown`,this.keyDown),document.addEventListener(`keyup`,this.keyUp),document.addEventListener(`mousemove`,this.mouseMove),document.addEventListener(`mousedown`,this.mouseDown),document.addEventListener(`mouseup`,this.mouseUp),document.addEventListener(`wheel`,this.onWheel,{passive:!1}),document.addEventListener(`contextmenu`,e=>{this.active&&e.preventDefault()}),document.addEventListener(`pointerlockchange`,this.lockChange),document.addEventListener(`pointerlockerror`,()=>this.onLockChange(!1)),window.addEventListener(`blur`,this.blur),document.addEventListener(`visibilitychange`,()=>{document.hidden&&this.blur()})}get active(){return this.locked||this.virtualLock}async requestLock(){if(this.virtualLock)return!0;try{let e=this.el.requestPointerLock({unadjustedMovement:!0});return e&&typeof e.then==`function`&&await e,!0}catch{try{let e=this.el.requestPointerLock();return e&&typeof e.then==`function`&&await e,!0}catch{return!1}}}releaseLock(){document.pointerLockElement&&document.exitPointerLock()}isHeld(e){return this.held.has(e)}consume(e){return this.pressed.has(e)?(this.pressed.delete(e),!0):!1}consumeFire(){let e=this.firePressed;return this.firePressed=!1,e}get canFire(){return this.fireHeld&&!this.fireBlocked}clear(e=!0){this.held.clear(),this.pressed.clear(),this.mouseDX=this.mouseDY=this.wheel=0,this.fireHeld=this.firePressed=this.aimHeld=!1,this.fireBlocked=e}endFrame(){this.mouseDX=0,this.mouseDY=0}endStep(){this.wheel=0,this.pressed.clear(),this.firePressed=!1}simulateKey(e,t){let n=Wf[e];n&&(t?(this.held.has(n)||this.pressed.add(n),this.held.add(n)):this.held.delete(n))}simulateMouse(e,t){this.handleButton(e,t)}simulateLook(e,t){this.mouseDX+=e,this.mouseDY+=t}keyDown=e=>{if(e.code===`Escape`){this.onEscape();return}let t=Wf[e.code];t&&(this.active&&e.preventDefault(),(this.active||t===`map`)&&(!e.repeat&&!this.held.has(t)&&this.pressed.add(t),this.held.add(t)))};keyUp=e=>{let t=Wf[e.code];t&&this.held.delete(t)};mouseMove=e=>{if(!this.locked)return;let t=Math.max(-300,Math.min(300,e.movementX)),n=Math.max(-300,Math.min(300,e.movementY));this.mouseDX+=t,this.mouseDY+=n};handleButton(e,t){if(e===0){if(t){if(!this.active)return;this.fireHeld=!0,this.fireBlocked||(this.firePressed=!0)}else this.fireHeld=!1,this.fireBlocked=!1}else e===2&&(this.aimHeld=t&&this.active)}mouseDown=e=>{e.button===0&&(this.leftDown=!0),this.active&&this.handleButton(e.button,!0)};mouseUp=e=>{e.button===0&&(this.leftDown=!1),this.handleButton(e.button,!1)};onWheel=e=>{this.active&&(e.preventDefault(),this.wheel+=Math.sign(e.deltaY))};lockChange=()=>{let e=this.locked;this.locked=document.pointerLockElement===this.el,this.locked!==e&&(this.clear(!this.locked||this.leftDown),this.onLockChange(this.locked))};blur=()=>{this.clear(),this.onFocusLost()}},Kf=`deadsignal.settings.v1`,qf=`deadsignal.best.v1`,Jf={sensitivity:1,fov:78,volume:.8,quality:`high`,renderScale:1,reducedMotion:!1,showFps:!1};function Yf(e){try{let t=window.localStorage.getItem(e);return t?JSON.parse(t):null}catch{return null}}function Xf(e,t){try{window.localStorage.setItem(e,JSON.stringify(t))}catch{}}function Zf(){let e=Yf(Kf)??{},t={...Jf,...e};return t.sensitivity=tp(Number(t.sensitivity)||1,.2,3),t.fov=tp(Number(t.fov)||78,60,100),t.volume=tp(Number(t.volume),0,1),t.renderScale=tp(Number(t.renderScale)||1,.5,1),[`low`,`medium`,`high`].includes(t.quality)||(t.quality=`high`),t}function Qf(e){Xf(Kf,e)}function $f(){return Yf(qf)}function ep(e){let t=$f();return!t||e.time<t.time?(Xf(qf,e),!0):!1}function tp(e,t,n){return Math.max(t,Math.min(n,isFinite(e)?e:t))}var np=class{state=`title`;renderer;input;audio=new Ou;tex=new Cd;M;level;player=new Ud;vm;fx;enemies;spawner;grenades=new vf;interact;heli;hud;menus;map;weapons;mission;loadout;settings;acc=0;last=0;simTime=0;realTime=0;station=null;mapOpen=!1;currentInteraction=null;dyingT=0;extractT=0;titleT=0;landedAnnounced=!1;eliteNotified=!1;toxicTick=0;lastBreakToast=-10;fpsFrames=0;fpsTime=0;fpsText=``;frameTimes=[];camQuat=new Mt;camEuler=new un(0,0,0,`YXZ`);lookDX=0;lookDY=0;survival=0;resultShown=!1;contamWall;timeScale=1;rafId=0;constructor(e,t){this.settings=Zf(),this.renderer=new cf(e),t(.15,`GENERATING SURFACES…`),this.tex.build(),this.M=new Gd(this.tex),t(.4,`MAPPING DISTRICT 9…`),this.level=new Bf(this.M),this.renderer.scene.add(this.level.root),t(.65,`ARMING LOADOUT…`),this.vm=new bf(this.tex),this.renderer.setViewModel(this.vm.scene,this.vm.camera),this.renderer.showViewModel(!1),this.fx=new Ju(this.tex),this.renderer.scene.add(this.fx.group),this.enemies=new Ru(this.tex,this.level,this.fx,this.audio,{onKill:(e,t)=>this.onKill(e,t),onPlayerHit:(e,t,n,r)=>this.onPlayerHit(e,t,n,r)}),this.renderer.scene.add(this.enemies.group),this.spawner=new Hu(this.level,this.enemies),this.renderer.scene.add(this.grenades.group),this.interact=new Od(this.M,this.level.poi.crates,this.level.poi.stations),this.renderer.scene.add(this.interact.group),this.heli=new md(this.M,this.level.poi.heliLand.x,this.level.poi.heliLand.z),this.renderer.scene.add(this.heli.group),this.contamWall=this.buildContaminationWall(),this.renderer.scene.add(this.contamWall),t(.85,`SYNCHRONISING…`),this.map=new pf(this.level),this.hud=new uf(this.map),this.input=new Gf(this.renderer.renderer.domElement),this.weapons=new wf(this.newLoadout(),this.vm,this.audio,this.fx,{onHit:e=>{this.hud.hit(e.kind),this.audio.hitmarker(e.kind)},onShot:()=>{this.mission.stats.shots++}}),this.menus=new gf(this),this.applySettings(),this.resetMission(),this.input.onLockChange=e=>this.onLockChange(e),this.input.onFocusLost=()=>{this.state===`playing`&&this.pause()},this.input.onEscape=()=>{this.mapOpen&&(this.mapOpen=!1,this.menus.showMap(!1)),this.state===`playing`&&this.input.virtualLock&&this.pause()},window.addEventListener(`resize`,()=>this.onResize()),this.onResize(),t(1,`READY`),this.last=performance.now(),this.rafId=requestAnimationFrame(this.loop)}newLoadout(){return{cash:X.startCash,slots:[Xu(`rifle`),Xu(`pistol`)],active:0,grenades:X.startGrenades}}resetMission(){let e=this.level.poi;this.enemies.reset(),this.spawner.reset(),this.fx.reset(),this.grenades.reset(),this.interact.reset(),this.heli.reset(),this.audio.stopHeli(),this.mission=new Pd(e.compoundCenter,e.lzPad,e.radio,e.boardPoint),this.mission.defenseCenter=e.transmitter,this.loadout=this.newLoadout(),this.weapons.reset(this.loadout),this.player.reset(e.playerSpawn.x,e.playerSpawn.z,e.playerSpawn.yaw),this.spawner.populate(),this.level.defenseRing.visible=!1,this.station=null,this.mapOpen=!1,this.menus.showMap(!1),this.hud.reset(),this.input.clear(),this.acc=0,this.simTime=0,this.survival=0,this.dyingT=0,this.extractT=0,this.landedAnnounced=!1,this.eliteNotified=!1,this.resultShown=!1,this.contamWall.visible=!1,this.renderer.grade.uniforms.uToxic.value=0,this.renderer.grade.uniforms.uDamage.value=0,this.renderer.grade.uniforms.uLowHealth.value=0,document.getElementById(`fade`).style.opacity=`0`}async deploy(){this.audio.init(),this.audio.setVolume(this.settings.volume),this.audio.startAmbience(),this.state!==`title`&&this.resetMission(),this.state=`playing`,this.menus.showScreen(`none`),this.hud.show(!0),this.renderer.showViewModel(!0),this.last=performance.now(),!await this.input.requestLock()&&!this.input.virtualLock&&this.pause(`Click RESUME to lock the mouse and continue.`)}pause(e=``){this.state===`playing`&&(this.state=`paused`,this.input.clear(),this.input.releaseLock(),this.audio.suspend(),this.menus.showScreen(`pause`,e))}async resume(){if(this.state===`paused`){if(this.audio.init(),this.audio.resume(),!await this.input.requestLock()&&!this.input.virtualLock){this.menus.setResumeNote(`The browser blocked the mouse lock — wait a moment and click RESUME again.`);return}this.input.virtualLock&&this.onLockChange(!0)}}onLockChange(e){e&&this.state===`paused`?(this.state=`playing`,this.menus.showScreen(`none`),this.audio.resume(),this.last=performance.now(),this.acc=0):!e&&this.state===`playing`&&!this.input.virtualLock&&this.pause()}quitToTitle(){this.input.releaseLock(),this.resetMission(),this.state=`title`,this.hud.show(!1),this.renderer.showViewModel(!1),this.audio.resume(),this.menus.showScreen(`title`)}restart(){this.resetMission(),this.state=`title`,this.deploy()}applySettings(){let e=this.settings;this.renderer.setQuality(e.quality,e.renderScale),this.audio.setVolume(e.volume),Qf(e),this.onResize()}onResize(){this.renderer.resize(),this.vm.resize(window.innerWidth/window.innerHeight),this.fx.setScale(this.renderer.pixelHeight,this.renderer.camera.fov)}loop=e=>{this.rafId=requestAnimationFrame(this.loop);let t=(e-this.last)/1e3;this.last=e,(!isFinite(t)||t<0)&&(t=0);let n=t;if(t=Math.min(t,hu),this.realTime+=t,this.trackFps(n),this.state===`playing`){this.lookDX=this.input.mouseDX,this.lookDY=this.input.mouseDY,this.player.look(this.lookDX,this.lookDY,this.settings.sensitivity),this.acc+=t*this.timeScale;let e=0;for(;this.acc>=.016666666666666666&&e<8&&(this.step(mu),this.input.endStep(),this.acc-=mu,e++,this.state===`playing`););e>=8&&(this.acc=0),this.input.endFrame()}else this.state===`dying`?(this.dyingT+=t,this.enemies.update(t,this.playerTarget()),this.dyingT>2.6&&!this.resultShown&&this.showResults(this.mission.outcome===`timeout`?`timeout`:`dead`)):this.state===`extracting`?(this.extractT+=t,this.heli.updateDepart(t,this.realTime),this.extractT>3.8&&(document.getElementById(`fade`).style.opacity=`1`),this.extractT>5&&!this.resultShown&&this.showResults(`victory`)):(this.lookDX=this.lookDY=0,this.input.endFrame(),this.input.endStep());this.renderFrame(t)};trackFps(e){if(this.fpsFrames++,this.fpsTime+=e,this.frameTimes.push(e*1e3),this.frameTimes.length>600&&this.frameTimes.shift(),this.fpsTime>=.5){let e=this.fpsFrames/this.fpsTime;this.fpsText=`${e.toFixed(0)} FPS · ${(1e3/e).toFixed(1)} ms · ${this.enemies.aliveCount} infected`,this.fpsFrames=0,this.fpsTime=0}}playerTarget(){let e=this.player;return{x:e.pos.x,y:e.pos.y,z:e.pos.z,eyeY:e.eyeY,alive:e.vitals.alive&&this.state===`playing`}}updateCamera(){let e=this.player,t=this.renderer.camera;t.position.set(e.pos.x,e.eyeY,e.pos.z),this.camEuler.set(e.pitch,e.yaw,0,`YXZ`),t.quaternion.setFromEuler(this.camEuler),this.camQuat.copy(t.quaternion),t.updateMatrixWorld()}step(e){this.simTime+=e,this.survival+=e;let t=this.player,n=t.vitals,r=this.input,i=this.level.world;if(r.consume(`map`)&&(this.mapOpen=!this.mapOpen,this.menus.showMap(this.mapOpen)),r.consume(`plate`)){if(zd(n)){let e=this.weapons.active;e&&nd(e),this.audio.plate(`start`)}else n.plateT<=0&&(this.hud.toast(n.plates<=0?`NO ARMOR PLATES`:n.armor>=Id()?`ARMOR FULL`:`CANNOT PLATE NOW`,`bad`,``,1.4),this.audio.ui(`deny`))}let a=n.plateT>0,o=t.update(e,r,i,{canSprintExtra:!r.fireHeld&&!a,speedMult:a?.65:1});o.footstep&&this.audio.footstep(this.surfaceUnder(),t.sprinting,t.crouched),o.landed>6&&this.audio.land();for(let e of this.enemies.zombies)e.alive&&Math.abs(e.pos.x-t.pos.x)<1.5&&Math.abs(e.pos.z-t.pos.z)<1.5&&Math.abs(e.pos.y-t.pos.y)<1.5&&t.pushOut(e.pos.x,e.pos.z,e.radius,i);if(Vd(n,e,t.sprinting)&&(this.audio.plate(`done`),this.mission.stats.platesUsed++),this.updateCamera(),this.weapons.update(e,r,t,{plating:a,menu:!1},i,this.enemies,this.renderer.camera.position,this.camQuat),r.consume(`grenade`)){if(this.loadout.grenades>0&&!a&&!this.weapons.switching&&this.weapons.throwT<=0){this.loadout.grenades--;let e=new B(0,0,-1).applyQuaternion(this.camQuat),n=this.renderer.camera.position.clone().addScaledVector(e,.4);n.y-=.1,this.grenades.throw(n.x,n.y,n.z,e.x,e.y,e.z,t.vel.x,t.vel.z),this.weapons.throwT=.5,this.audio.grenadePin()}else this.loadout.grenades<=0&&this.hud.toast(`NO GRENADES`,`bad`,``,1.2)}let s=this.grenades.update(e,i,(e,t)=>this.audio.grenadeBounce({x:e,z:t}));for(let e of s)this.explode(e.x,e.y,e.z);this.enemies.update(e,this.playerTarget());let c=new B(0,0,-1).applyQuaternion(this.camQuat),l=Math.hypot(c.x,c.z)||1;this.spawner.update(e,{px:t.pos.x,pz:t.pos.z,eyeY:t.eyeY,fx:c.x/l,fz:c.z/l,pressure:this.mission.pressure,defenseActive:this.mission.defense.status===`active`,finalHorde:this.mission.extraction.state===`called`||this.mission.extraction.state===`landed`});let u=this.mission.update(e,{x:t.pos.x,z:t.pos.z},n.alive);for(let e of u)this.onMissionEvent(e);this.mission.inContamination(t.pos.x,t.pos.z)&&n.alive&&(Ld(n,Tu.contaminationDps*e,!0),this.toxicTick-=e,this.toxicTick<=0&&(this.toxicTick=1.2,this.audio.hurt(!1)));let d=this.enemies.elite;if(d&&d.alive&&!this.eliteNotified&&(this.enemies.eliteAggro||Math.hypot(d.pos.x-t.pos.x,d.pos.z-t.pos.z)<30)&&(this.eliteNotified=!0,this.hud.toast(`WARDEN-9 SIGHTED`,`bad`,`Heavily armoured · break the helmet, then go for the head`,3.5),this.audio.ui(`alert`)),this.updateInteraction(),this.updateStation(),this.interact.collectDrops(t.pos.x,t.pos.z)>0){for(let e of this.loadout.slots)e&&ad(e,Yu(e.id,e.tier).magSize);this.audio.ui(`pickup`),this.hud.toast(`AMMO RECOVERED`,``,``,1.2)}n.alive?this.mission.outcome===`timeout`&&this.onTimeout():this.onDeath()}surfaceUnder(){let e=this.player.pos,t=this.level.world.raycast(e.x,e.y+.3,e.z,0,-1,0,.6,!1);return t&&t.box?t.box.surface:e.x>12&&e.z>-12&&e.z<29?`dirt`:`concrete`}explode(e,t,n){this.fx.explosion(e,t,n,this.settings.reducedMotion),this.audio.explosion({x:e,z:n});let r=this.enemies.radiusDamage(e,t,n,Eu.radius,Eu.maxDamage);r.hits>0&&(this.hud.hit(r.kills>0?`kill`:`body`),this.audio.hitmarker(r.kills>0?`kill`:`body`)),this.enemies.noise(e,n,40);let i=this.player,a=Math.hypot(i.pos.x-e,i.pos.z-n,i.pos.y+1-t);if(a<Eu.radius&&i.vitals.alive&&!(this.level.world.segmentBlocked(e,t+.3,n,i.pos.x,i.eyeY,i.pos.z)&&this.level.world.segmentBlocked(e,t+.3,n,i.pos.x,i.pos.y+.8,i.pos.z))){let t=Eu.maxDamage*Eu.playerDamageMult*(1-a/Eu.radius);Ld(i.vitals,t),this.hud.damageFrom(e,n,!0),this.audio.hurt(!0)}}findInteraction(){let e=this.player.pos,t=this.level.poi,n=(t,n,r,i=0)=>Math.hypot(t-e.x,n-e.z)<r&&Math.abs(e.y-i)<1.6,r=this.mission.extraction;if(r.state===`landed`&&r.canBoard({x:e.x,z:e.z},this.player.vitals.alive))return{kind:`board`};if(n(t.radio.x,t.radio.z,Tu.radioRadius))return{kind:`radio`};if(n(t.transmitter.x,t.transmitter.z,3.6,.3)&&this.mission.defense.status===`inactive`)return{kind:`transmitter`};for(let e of t.stations)if(n(e.x,e.z,2.4))return{kind:`station`,station:e.kind};let i=null,a=2;for(let t of this.interact.crates){if(t.opened)continue;let n=Math.hypot(t.spot.x-e.x,t.spot.z-e.z);n<a&&Math.abs(e.y-t.spot.y)<1.4&&(a=n,i=t)}return i?{kind:`crate`,crate:i}:null}updateInteraction(){let e=this.findInteraction();this.currentInteraction=e;let t=this.input.consume(`interact`);if(!e){t&&this.station&&(this.station=null);return}if(t)switch(e.kind){case`crate`:this.lootCrate(e.crate);break;case`station`:this.station=this.station===e.station?null:e.station,this.audio.ui(`click`);break;case`transmitter`:this.mission.defense.activate()&&(this.level.defenseRing.visible=!0,this.audio.ui(`contract`),this.hud.toast(`UPLINK RELAY ONLINE`,`big`,`Hold the marked zone while it transmits`,3.5),this.enemies.noise(this.player.pos.x,this.player.pos.z,70));break;case`radio`:{let e=this.mission.extraction;e.state===`locked`?(this.hud.toast(`EXTRACTION UNAVAILABLE`,`bad`,`Complete both contracts first`,2.2),this.audio.ui(`deny`)):e.call({x:this.player.pos.x,z:this.player.pos.z})&&(this.audio.ui(`radio`),this.audio.startHeli(),this.hud.toast(`RAVEN 2-1 INBOUND`,`big`,`Hold the LZ · ETA ${Tu.extractionCountdown}s`,4),this.enemies.noise(this.player.pos.x,this.player.pos.z,120));break}case`board`:this.mission.extraction.board({x:this.player.pos.x,z:this.player.pos.z},this.player.vitals.alive)&&this.onVictory()}}lootCrate(e){if(!this.interact.open(e))return;let t=Dd(e.spot.region),n=this.player.vitals,r=t.cash,i=0;for(let e=0;e<t.plates;e++)n.plates<X.maxPlateInventory?(n.plates++,i++):r+=100;let a=0;for(let e=0;e<t.grenades;e++)this.loadout.grenades<X.maxGrenades?(this.loadout.grenades++,a++):r+=100;for(let e of this.loadout.slots)e&&ad(e,Yu(e.id,e.tier).magSize*t.ammoMags);pd(this.loadout,r),this.mission.stats.salvageEarned+=r,this.mission.stats.cratesLooted++;let o=[`+$${r}`,`AMMO`];i&&o.push(`+${i} PLATE${i>1?`S`:``}`),a&&o.push(`+${a} FRAG`),this.hud.toast(`SUPPLY CACHE`,`good`,o.join(`  ·  `),2.6),this.audio.ui(`loot`)}stationItems(){let e=this.loadout,t=this.player.vitals,n=(n,r,i,a)=>{let o=ud(e,n),s=dd(e,t,n);return{id:n,view:{key:r,name:i,desc:a,price:o===null?`MAX`:s.ok||s.reason===`INSUFFICIENT SALVAGE`?`$${o}`:s.reason,enabled:s.ok}}};if(this.station===`buy`){let t=e.slots.some(e=>e?.id===`shotgun`);return[n(`ammo`,`3`,`AMMO RESUPPLY`,`Refill reserves for both weapons`),n(`plate`,`4`,`ARMOR PLATE`,`Carry up to ${X.maxPlateInventory} · apply with Q`),n(`grenade`,`5`,`FRAG GRENADE`,`Carry up to ${X.maxGrenades}`),n(`shotgun`,`6`,_u.shotgun.name,t?`Already equipped`:e.slots[1]?`Pump shotgun · replaces held weapon`:`Pump shotgun · 9 pellets`)]}let r=t=>{let n=e.slots[t];return n?_u[n.id].name:`EMPTY SLOT`},i=t=>{let n=e.slots[t];return n?cd(n)===null?`Fully upgraded`:`→ ${n.tier===0?`TIER I`:`TIER II`}: more damage, bigger mags, faster reloads`:``};return[n(`upgrade0`,`3`,r(0),i(0)),n(`upgrade1`,`4`,r(1),i(1))]}updateStation(){if(this.station){let e=this.currentInteraction;(!e||e.kind!==`station`||e.station!==this.station)&&(this.station=null)}if(!this.station){this.hud.setStation(null,``);return}let e=this.stationItems(),t=[`buy3`,`buy4`,`buy5`,`buy6`,`buy7`];e.forEach((e,n)=>{if(!this.input.consume(t[n]))return;let r=this.loadout.slots.map(e=>e?.id),i=fd(this.loadout,this.player.vitals,e.id);if(i.ok){if(this.hud.flashStation(n,!0),e.id===`upgrade0`||e.id===`upgrade1`){let t=e.id===`upgrade0`?0:1,n=this.loadout.slots[t];this.vm.setTier(n.id,n.tier),this.audio.ui(`upgrade`),this.fx.sparkBurst(this.player.pos.x,1.2,this.player.pos.z,20,n.tier===1?[.4,.8,1.6]:[1.6,.5,.2]),this.hud.toast(`${_u[n.id].name} UPGRADED`,`big`,n.tier===1?`TIER I · damage x1.65 · +25% magazine`:`TIER II · damage x2.5 · +50% magazine`,3)}else if(this.audio.ui(`buy`),e.id===`shotgun`){let e=r.find(e=>e&&!this.loadout.slots.some(t=>t?.id===e));this.weapons.syncModel(),this.hud.toast(`${_u.shotgun.name} ACQUIRED`,`good`,e?`Replaced ${_u[e].shortName}`:``,2.5)}}else this.hud.flashStation(n,!1),this.audio.ui(`deny`),this.hud.toast(i.reason??`UNAVAILABLE`,`bad`,``,1.2)}),this.hud.setStation(e.map(e=>e.view),this.station===`buy`?`QUARTERMASTER STATION`:`ARMORY UPGRADE BENCH`)}onKill(e,t){if(this.state!==`playing`&&this.state!==`dying`)return;if(this.mission.stats.kills++,t&&this.mission.stats.headshots++,e.elite){this.mission.onEliteKilled()&&(pd(this.loadout,Tu.huntReward),this.mission.stats.salvageEarned+=Tu.huntReward,this.player.vitals.plates=Math.min(X.maxPlateInventory,this.player.vitals.plates+2),this.hud.toast(`CONTRACT COMPLETE · WARDEN-9 ELIMINATED`,`big`,`+$${Tu.huntReward}  ·  +2 PLATES`,4),this.audio.ui(`complete`));return}let n=Math.round(e.reward+(t?Cu.headshotBonus:0));pd(this.loadout,n),this.mission.stats.salvageEarned+=n,Math.random()<Cu.ammoDropChance&&this.interact.spawnDrop(e.pos.x,e.pos.z)}onPlayerHit(e,t,n,r){if(this.state!==`playing`)return;let i=this.player.vitals,a=Ld(i,e);this.hud.damageFrom(t,n,r),a.armorBroke&&(this.audio.armorBreak(),this.realTime-this.lastBreakToast>2&&(this.lastBreakToast=this.realTime,this.hud.toast(`ARMOR PLATE BROKEN`,`bad`,``,1.2))),this.audio.hurt(r),this.settings.reducedMotion||(this.fx.shake=Math.max(this.fx.shake,r?.25:.12))}onMissionEvent(e){switch(e.type){case`defenseComplete`:pd(this.loadout,Tu.defenseReward),this.mission.stats.salvageEarned+=Tu.defenseReward;for(let e of this.loadout.slots)e&&ad(e,1/0);this.level.defenseRing.visible=!1,this.hud.toast(`CONTRACT COMPLETE · UPLINK RESTORED`,`big`,`+$${Tu.defenseReward}  ·  AMMO REFILLED`,4),this.audio.ui(`complete`);break;case`huntComplete`:break;case`extractionUnlocked`:this.hud.toast(`EXTRACTION AVAILABLE`,`big`,`Reach the LZ and signal RAVEN 2-1`,4.5),this.audio.ui(`radio`);break;case`finalPhase`:this.contamWall.visible=!0,this.hud.toast(`CONTAMINATION BREACH`,`bad`,e.forced?`The compound is venting · finish the contracts fast`:`The front is spreading from the compound · get to the LZ`,4.5),this.audio.ui(`alert`);break;case`heliLanded`:this.landedAnnounced||(this.landedAnnounced=!0,this.hud.toast(`RAVEN 2-1 ON THE GROUND`,`big`,`Get to the helicopter door and press E`,4),this.audio.ui(`radio`))}}onDeath(){this.state===`playing`&&(this.mission.outcome=this.mission.outcome===`active`?`dead`:this.mission.outcome,this.mission.extraction.fail(),this.state=`dying`,this.dyingT=0,this.station=null,this.hud.setStation(null,``),this.input.releaseLock(),this.renderer.showViewModel(!1),this.hud.centerMessage(`K.I.A.`),this.audio.hurt(!0))}onTimeout(){this.state===`playing`&&(this.state=`dying`,this.dyingT=0,this.input.releaseLock(),this.renderer.showViewModel(!1),this.hud.centerMessage(`ZONE LOST`))}onVictory(){this.mission.outcome=`victory`,this.state=`extracting`,this.extractT=0,this.input.releaseLock(),this.hud.show(!1),this.renderer.showViewModel(!1),this.audio.ui(`complete`)}showResults(e){this.resultShown=!0,this.state=`results`,this.hud.show(!1),this.audio.stopHeli();let t=this.mission.stats,n=!1;e===`victory`&&(n=ep({time:this.survival,kills:t.kills,headshots:t.headshots,salvage:t.salvageEarned})),this.menus.showResults(e,{kills:t.kills,headshots:t.headshots,contracts:this.mission.contractsDone,salvage:t.salvageEarned,caches:t.cratesLooted,time:this.survival,accuracy:this.weapons.stats.shots?this.weapons.stats.hits/this.weapons.stats.shots:0},n,$f()),document.getElementById(`fade`).style.opacity=`0`}renderFrame(e){let t=this.player,n=this.renderer.camera,r=this.settings.reducedMotion;if(this.state===`title`||this.state===`results`&&this.mission.outcome!==`victory`){this.titleT+=e;let t=this.titleT*.04;n.position.set(Math.sin(t)*3,8.5+Math.sin(t*.7)*.4,95.5),n.lookAt(Math.sin(t*.8)*5,3,10),n.fov=62,n.updateProjectionMatrix()}else if(this.state===`extracting`||this.state===`results`&&this.mission.outcome===`victory`){let t=this.heli.position;n.position.lerp(new B(24,4,60),Math.min(1,e*1.5)),n.lookAt(t.x,t.y+2,t.z),n.fov=60,n.updateProjectionMatrix()}else{if(this.updateCamera(),this.state===`dying`){let e=Math.min(1,this.dyingT/1.2);n.position.y=t.pos.y+.3+(t.eyeY-t.pos.y-.3)*(1-e*e),n.rotateZ(e*.6),n.rotateX(-e*.3)}let i=this.fx.shake*(r?.25:1);i>0&&(n.rotateX((Math.random()-.5)*i*.03),n.rotateY((Math.random()-.5)*i*.03));let a=this.weapons.active,o=a?1+(_u[a.id].adsZoom-1)*this.weapons.adsT:1,s=t.sprinting&&!r?4:0,c=(this.settings.fov+s)*o;n.fov+=(c-n.fov)*Math.min(1,e*14),n.updateProjectionMatrix(),this.vm.camera.fov=52*(1+(o-1)*.5),this.vm.camera.updateProjectionMatrix()}this.fx.setScale(this.renderer.pixelHeight,n.fov);let i=this.weapons.active;if(i&&(this.state===`playing`||this.state===`paused`)){let n=Yu(i.id,i.tier).shell;this.vm.update(this.state===`paused`?0:e,{id:i.id,tier:i.tier,adsT:this.weapons.adsT,speed:t.speed2d,sprinting:t.sprinting,grounded:t.grounded,crouched:t.crouched,bobPhase:t.stepPhase*Math.PI,lookDX:this.lookDX,lookDY:this.lookDY,reloadPhase:i.reloadPhase,reloadP:i.reloadPhase===`mag`?i.reloadT/Yu(i.id,i.tier).reloadTime:0,shellT:i.reloadT,shellPer:n?i.reloadPhase===`shellStart`?n.start:i.reloadPhase===`shellEnd`?n.end:n.perShell:1,switchT:Math.max(this.weapons.switchT,this.weapons.throwT>0?Math.sin(this.weapons.throwT/.5*Math.PI)*.6:0),plateT:t.vitals.plateT>0?1-t.vitals.plateT/X.plateApplyTime:0,sinceShot:this.weapons.sinceShot,reducedMotion:r,jumpOffset:t.grounded?0:Math.max(-1,Math.min(1,t.vel.y/5))})}let a=this.state===`paused`?0:e;if(this.state!==`paused`){if(this.enemies.animate(a,n.position.x,n.position.z),this.level.update(this.realTime,a),this.interact.update(a,this.realTime),this.fx.update(a),this.level.defenseRing.visible){let e=this.level.defenseRing.material;e.opacity=.35+Math.sin(this.realTime*4)*.15,e.color.setHex(this.mission.defense.inZone?6356864:16752704)}if(this.contamWall.visible){let e=this.mission.contaminationRadius;this.contamWall.scale.set(e,1,e),this.contamWall.material.uniforms.uTime.value=this.realTime}let e=this.mission.extraction;if(this.state===`playing`||this.state===`dying`){let t=e.heliVisible()&&this.state===`playing`;if(this.heli.updateApproach(e.approach(),t,this.realTime,a),t){let e=this.heli.position;e.y<14&&this.fx.downwash(e.x,e.z,1-e.y/14),this.audio.updateHeli({x:e.x,y:e.y,z:e.z},1)}else this.audio.updateHeli(null,0);(e.state===`called`||e.state===`landed`)&&this.fx.flare(this.level.poi.radio.x+.6,.3,this.level.poi.radio.z)}else if(this.state===`extracting`){let e=this.heli.position;this.audio.updateHeli({x:e.x,y:e.y,z:e.z},1)}}if(this.audio.setListener(n.position.x,n.position.y,n.position.z,t.yaw),this.state===`playing`){this.audio.updateAmbience(e);let n=t.vitals.health<35?1-t.vitals.health/35:0;this.audio.heartbeat(e,n)}let o=this.renderer.grade.uniforms;o.uDamage.value=this.state===`playing`||this.state===`dying`?Math.max(this.hud.damageVignette,this.state===`dying`?.8:0):0,o.uLowHealth.value=this.state===`playing`?Math.max(0,1-t.vitals.health/40):+(this.state===`dying`);let s=this.state===`playing`&&this.mission.inContamination(t.pos.x,t.pos.z);o.uToxic.value+=(+!!s-o.uToxic.value)*Math.min(1,e*3),(this.state===`playing`||this.state===`paused`)&&this.updateHud(e,s),this.renderer.followShadow(n.position.x,n.position.z),this.renderer.render(this.realTime)}updateHud(e,t){let n=this.player,r=n.vitals,i=this.mission,a=this.weapons.active,o=i.extraction,s=this.level.poi,c=[],l=i.defense;c.push({title:`DEFEND UPLINK RELAY`,tag:l.status===`complete`?`COMPLETE`:`CONTRACT`,sub:l.status===`inactive`?`Activate the relay at Kessler Depot [E]`:l.status===`complete`?`Uplink restored`:l.inZone?`Transmitting… ${Math.round(l.progress*100)}%`:`RETURN TO THE RELAY ZONE`,warn:l.status===`active`&&!l.inZone,progress:l.status===`active`?l.progress:void 0,state:l.status===`complete`?`done`:`active`}),c.push({title:`HUNT: WARDEN-9`,tag:i.hunt.status===`complete`?`COMPLETE`:`CONTRACT`,sub:i.hunt.status===`complete`?`Target eliminated`:this.enemies.eliteAggro?`Target engaged · shoot off the helmet`:`Last seen near the Halcyon reactor`,state:i.hunt.status===`complete`?`done`:`active`});let u=`Complete both contracts to unlock`,d=`locked`;o.state===`available`?(u=`Signal RAVEN 2-1 from the LZ radio [E]`,d=`active`):o.state===`called`?(u=`Helicopter ETA ${Math.ceil(o.countdown)}s · hold the LZ`,d=`active`):o.state===`landed`&&(u=`BOARD THE HELICOPTER [E]`,d=`active`),c.push({title:`EXTRACTION`,tag:o.state===`locked`?`LOCKED`:`EXFIL`,sub:u,state:d,progress:o.state===`called`?1-o.countdown/Tu.extractionCountdown:void 0});let f=null,p=this.currentInteraction;if(p)switch(p.kind){case`crate`:f=`<kbd>E</kbd> Search supply cache`;break;case`station`:f=this.station?null:p.station===`buy`?`<kbd>E</kbd> Open Quartermaster station`:`<kbd>E</kbd> Open Armory upgrade bench`;break;case`transmitter`:f=`<kbd>E</kbd> Activate uplink relay <span class="cost">CONTRACT</span>`;break;case`radio`:f=o.state===`available`?`<kbd>E</kbd> Signal extraction <span class="cost">STARTS FINAL HORDE</span>`:o.state===`locked`?`Extraction radio <span class="denied">COMPLETE BOTH CONTRACTS</span>`:null;break;case`board`:f=`<kbd>E</kbd> Board the helicopter`}let m=this.loadout.slots[+(this.loadout.active===0)],h=this.enemies.elite,g=!!h&&h.alive&&(this.enemies.eliteAggro||Math.hypot(h.pos.x-n.pos.x,h.pos.z-n.pos.z)<35),_=this.renderer.camera.fov*Math.PI/180,v=this.weapons.currentSpread(n),y=Math.tan(v*Math.PI/180)/Math.tan(_/2)*(window.innerHeight/2),b=a?Yu(a.id,a.tier):null;this.hud.update(e,{remaining:i.remaining,finalPhase:i.finalPhase,timerLabel:i.finalPhase?`EXFIL WINDOW`:`MISSION`,contracts:c,region:Su(n.pos.z),health:r.health,armor:r.armor,plates:r.plates,grenades:this.loadout.grenades,cash:this.loadout.cash,weaponName:a?_u[a.id].name:``,tier:a?.tier??0,mag:a?.mag??0,magSize:b?.magSize??1,reserve:a?.reserve??0,reloading:a?Zu(a):!1,secondary:m?`[${this.loadout.active===0?2:1}] ${_u[m.id].shortName}  ${m.mag}/${m.reserve}`:``,stamina:r.stamina,exhausted:r.exhausted,sprinting:n.sprinting,plateProgress:r.plateT>0?1-r.plateT/X.plateApplyTime:0,adsT:this.weapons.adsT,spreadPx:Math.min(60,y),eliteHp:g?h.hp/h.maxHp:null,prompt:f,toxic:t,fps:this.settings.showFps?this.fpsText:null,px:n.pos.x,pz:n.pos.z,yaw:n.yaw});let x=[];if(l.status!==`complete`&&x.push({x:s.transmitter.x,y:4,z:s.transmitter.z,kind:`contract`,icon:`D`,label:l.status===`active`?`DEFEND`:`UPLINK`}),o.state!==`locked`&&o.state!==`boarded`&&x.push({x:s.lzPad.x,y:2.5,z:s.lzPad.z,kind:`lz`,icon:`H`,label:o.state===`landed`?`BOARD`:`EXFIL`}),h&&h.alive&&i.hunt.status!==`complete`&&(g?x.push({x:h.pos.x,y:h.pos.y+2.8,z:h.pos.z,kind:`elite`,icon:`!`,label:`WARDEN-9`}):x.push({x:s.reactor.x,y:6,z:s.reactor.z+12,kind:`elite`,icon:`!`,label:`HUNT`})),this.station===null)for(let e of s.stations){let t=Math.hypot(e.x-n.pos.x,e.z-n.pos.z);t<30&&t>3&&x.push({x:e.x,y:2.4,z:e.z,kind:e.kind===`buy`?`buy`:`upgrade`,icon:e.kind===`buy`?`$`:`U`,label:e.kind===`buy`?`QUARTERMASTER`:`ARMORY`})}this.hud.updateWaypoints(x,this.renderer.camera,n.pos.x,n.pos.z);let S=[];for(let e of this.interact.crates)e.opened||S.push({x:e.spot.x,z:e.spot.z,kind:`crate`});for(let e of this.interact.drops)S.push({x:e.x,z:e.z,kind:`drop`});for(let e of s.stations)S.push({x:e.x,z:e.z,kind:e.kind===`buy`?`buy`:`upgrade`});S.push({x:s.transmitter.x,z:s.transmitter.z,kind:l.status===`complete`?`contractDone`:`contract`}),S.push({x:s.lzPad.x,z:s.lzPad.z,kind:o.state===`locked`?`lzLocked`:`lz`}),h&&h.alive&&(g?S.push({x:h.pos.x,z:h.pos.z,kind:`elite`}):S.push({x:s.reactor.x+8,z:s.reactor.z+10,kind:`eliteArea`}));for(let e of this.enemies.zombies)e.alive&&!e.elite&&Math.hypot(e.pos.x-n.pos.x,e.pos.z-n.pos.z)<32&&S.push({x:e.pos.x,z:e.pos.z,kind:`zombie`});let C={px:n.pos.x,pz:n.pos.z,yaw:n.yaw,markers:S,contamination:i.finalPhase?{x:i.center.x,z:i.center.z,r:i.contaminationRadius}:null,defenseRing:l.status===`active`?{x:s.transmitter.x,z:s.transmitter.z,r:Tu.defenseRadius}:null};this.hud.drawMaps(C,this.mapOpen)}buildContaminationWall(){let e=this.level.poi.compoundCenter,t=new Ra({transparent:!0,depthWrite:!1,side:2,blending:2,uniforms:{uTime:{value:0}},vertexShader:`
        varying vec2 vUv; varying vec3 vPos;
        void main() { vUv = uv; vPos = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
      `,fragmentShader:`
        uniform float uTime; varying vec2 vUv; varying vec3 vPos;
        float n(vec2 p) { return fract(sin(dot(p, vec2(41.3, 289.1))) * 43758.5); }
        float vn(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
          return mix(mix(n(i), n(i + vec2(1, 0)), f.x), mix(n(i + vec2(0, 1)), n(i + vec2(1, 1)), f.x), f.y); }
        void main() {
          float a = atan(vPos.z, vPos.x);
          vec2 p = vec2(a * 18.0, vUv.y * 6.0 - uTime * 0.6);
          float cloud = vn(p) * 0.6 + vn(p * 2.3 + uTime * 0.2) * 0.4;
          float fade = (1.0 - vUv.y) * smoothstep(0.0, 0.08, vUv.y);
          float bands = 0.6 + 0.4 * sin(vUv.y * 40.0 - uTime * 3.0);
          vec3 col = vec3(0.25, 0.9, 0.18) * cloud * fade * bands;
          gl_FragColor = vec4(col * 0.9, cloud * fade * 0.8);
        }
      `}),n=new K(new Sa(1,1,14,96,1,!0),t);return n.position.set(e.x,7,e.z),n.visible=!1,n.frustumCulled=!1,n.renderOrder=5,n}devApi(){return{game:this,lock:e=>{this.input.virtualLock=e},teleport:(e,t,n)=>{let r=this.level.world.groundHeight(e,t,.3,1.5);this.player.pos={x:e,y:r,z:t},this.player.vel={x:0,y:0,z:0},n!==void 0&&(this.player.yaw=n)},look:(e,t)=>{this.player.yaw=e,this.player.pitch=t},key:(e,t)=>this.input.simulateKey(e,t),mouse:(e,t)=>this.input.simulateMouse(e,t),cash:e=>pd(this.loadout,e),timeScale:e=>{this.timeScale=e},skipMission:e=>{this.mission.time+=e},state:()=>({state:this.state,pos:{...this.player.pos},yaw:this.player.yaw,pitch:this.player.pitch,health:this.player.vitals.health,armor:this.player.vitals.armor,plates:this.player.vitals.plates,cash:this.loadout.cash,grenades:this.loadout.grenades,weapon:this.weapons.active&&{...this.weapons.active},slots:this.loadout.slots.map(e=>e&&{...e}),active:this.loadout.active,crouched:this.player.crouched,height:this.player.height,grounded:this.player.grounded,stamina:this.player.vitals.stamina,defense:{status:this.mission.defense.status,progress:this.mission.defense.progress},hunt:this.mission.hunt.status,extraction:{state:this.mission.extraction.state,countdown:this.mission.extraction.countdown},mission:{time:this.mission.time,remaining:this.mission.remaining,final:this.mission.finalPhase,outcome:this.mission.outcome},zombies:this.enemies.aliveCount,stats:{...this.mission.stats},weaponStats:{...this.weapons.stats},station:this.station,interaction:this.currentInteraction?.kind??null}),zombies:()=>this.enemies.zombies.filter(e=>e.alive).map(e=>({type:e.type,x:+e.pos.x.toFixed(2),z:+e.pos.z.toFixed(2),state:e.state,hp:Math.round(e.hp),elite:e.elite})),spawnZombie:(e,t,n,r=`chase`)=>this.enemies.spawn(e,Su(n),t,n,r),clearZombies:()=>{for(let e of this.enemies.zombies)e.alive&&!e.elite&&(e.alive=!1,e.state=`dead`,e.deathT=99)},damagePlayer:e=>this.onPlayerHit(e,this.player.pos.x+1,this.player.pos.z,!1),frameStats:()=>{let e=[...this.frameTimes].sort((e,t)=>e-t);return{avgMs:+(e.reduce((e,t)=>e+t,0)/Math.max(1,e.length)).toFixed(2),p95Ms:+(e[Math.floor(e.length*.95)]??0).toFixed(2),samples:e.length,drawCalls:this.renderer.renderer.info.render.calls,triangles:this.renderer.renderer.info.render.triangles}},raycastFromEye:()=>{this.updateCamera();let e=new B(0,0,-1).applyQuaternion(this.camQuat),t=this.renderer.camera.position;return this.level.world.raycast(t.x,t.y,t.z,e.x,e.y,e.z,200)},damageElite:e=>{let t=this.enemies.elite;t&&t.alive&&this.enemies.damage(t,e,!1,t.pos.x,t.pos.y+1,t.pos.z,0,1)},heal:()=>{this.player.vitals.health=100,this.player.vitals.armor=150},elite:()=>this.enemies.elite&&{x:this.enemies.elite.pos.x,z:this.enemies.elite.pos.z,hp:this.enemies.elite.hp,helmet:this.enemies.elite.helmetHp,alive:this.enemies.elite.alive,state:this.enemies.elite.state}}}dispose(){cancelAnimationFrame(this.rafId)}get bestRun(){return $f()}cancelPlate(){Bd(this.player.vitals)}};function rp(e){document.getElementById(`loading`)?.classList.add(`hidden`);let t=document.getElementById(`error`);document.getElementById(`error-text`).textContent=e,t.classList.remove(`hidden`)}function ip(){try{let e=document.createElement(`canvas`);return!!(e.getContext(`webgl2`)||e.getContext(`webgl`))}catch{return!1}}async function ap(){if(!ip()){rp(`This game needs WebGL, which is disabled or unsupported in this browser. Enable hardware acceleration or try a current version of Chrome, Edge or Firefox on a desktop computer.`);return}if(!(`requestPointerLock`in HTMLElement.prototype)){rp(`This browser does not support mouse pointer lock, which is required for first-person controls. Please use a desktop browser.`);return}let e=document.getElementById(`load-fill`),t=document.getElementById(`load-text`),n=async(n,r)=>{e.style.width=`${Math.round(n*100)}%`,t.textContent=r};await new Promise(e=>requestAnimationFrame(()=>e(null)));let r;try{r=new np(document.getElementById(`app`),(e,t)=>void n(e,t))}catch(e){console.error(e),rp(`The game failed to start: ${e.message}`);return}document.getElementById(`loading`).classList.add(`hidden`),r.menus.showScreen(`title`)}window.addEventListener(`error`,e=>console.error(`[DEAD SIGNAL] uncaught`,e.error??e.message)),ap();