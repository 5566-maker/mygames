/**
 * Kids Arcade (小小游戏厅) - Unified Game Shell Script
 * Zero-dependency Web Audio Sound Engine & Child-Friendly UI Controls
 */

(function () {
  'use strict';

  // Prevent double tap zoom and gesture interference
  document.addEventListener('gesturestart', (e) => e.preventDefault(), { passive: false });
  document.addEventListener('gesturechange', (e) => e.preventDefault(), { passive: false });
  document.addEventListener('gestureend', (e) => e.preventDefault(), { passive: false });

  // Web Audio Synthesizer
  class SoundEngine {
    constructor() {
      this.ctx = null;
      this.enabled = localStorage.getItem('kids_arcade_sound') !== 'false';
      this.isUnlocked = false;

      // Unlock Web Audio on first user interaction
      const unlockAudio = () => {
        if (!this.ctx) {
          const AudioContext = window.AudioContext || window.webkitAudioContext;
          if (AudioContext) {
            this.ctx = new AudioContext();
          }
        }
        if (this.ctx && this.ctx.state === 'suspended') {
          this.ctx.resume();
        }
        this.isUnlocked = true;
        ['touchstart', 'touchend', 'mousedown', 'pointerdown', 'keydown'].forEach((ev) => {
          document.removeEventListener(ev, unlockAudio);
        });
      };

      ['touchstart', 'touchend', 'mousedown', 'pointerdown', 'keydown'].forEach((ev) => {
        document.addEventListener(ev, unlockAudio, { passive: true });
      });
    }

    setEnabled(val) {
      this.enabled = !!val;
      localStorage.setItem('kids_arcade_sound', this.enabled ? 'true' : 'false');
      window.dispatchEvent(new CustomEvent('arcade-sound-change', { detail: { enabled: this.enabled } }));
    }

    toggle() {
      this.setEnabled(!this.enabled);
      if (this.enabled) this.playTap();
      return this.enabled;
    }

    _playTone(freqStart, freqEnd, type, duration, volStart = 0.25, volEnd = 0.001) {
      if (!this.enabled) return;
      try {
        if (!this.ctx) {
          const AudioContext = window.AudioContext || window.webkitAudioContext;
          if (AudioContext) this.ctx = new AudioContext();
        }
        if (this.ctx && this.ctx.state === 'suspended') {
          this.ctx.resume();
        }
        if (!this.ctx) return;

        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const now = this.ctx.currentTime;

        osc.type = type || 'sine';
        osc.frequency.setValueAtTime(freqStart, now);
        if (freqEnd && freqEnd !== freqStart) {
          osc.frequency.exponentialRampToValueAtTime(Math.max(10, freqEnd), now + duration);
        }

        gain.gain.setValueAtTime(volStart, now);
        gain.gain.exponentialRampToValueAtTime(volEnd, now + duration);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now);
        osc.stop(now + duration);
      } catch (err) {
        // Audio error silently caught
      }
    }

    playTap() {
      this._playTone(480, 720, 'sine', 0.08, 0.2);
    }

    playJump() {
      this._playTone(220, 580, 'sine', 0.16, 0.25);
    }

    playCoin() {
      this._playTone(659, 659, 'triangle', 0.08, 0.25);
      setTimeout(() => {
        this._playTone(987, 987, 'triangle', 0.15, 0.25);
      }, 70);
    }

    playHit() {
      this._playTone(180, 60, 'sawtooth', 0.14, 0.3);
    }

    playLaser() {
      this._playTone(880, 140, 'sawtooth', 0.12, 0.2);
    }

    playBonk() {
      this._playTone(320, 140, 'triangle', 0.12, 0.35);
    }

    playPowerup() {
      const notes = [440, 554, 659, 880];
      notes.forEach((freq, idx) => {
        setTimeout(() => this._playTone(freq, freq, 'sine', 0.1, 0.2), idx * 60);
      });
    }

    playWin() {
      const chord = [523.25, 659.25, 783.99, 1046.50]; // C E G C
      chord.forEach((freq, idx) => {
        setTimeout(() => this._playTone(freq, freq, 'triangle', 0.3, 0.25), idx * 80);
      });
    }

    playLose() {
      const notes = [440, 415, 392, 349];
      notes.forEach((freq, idx) => {
        setTimeout(() => this._playTone(freq, freq * 0.95, 'sine', 0.18, 0.2), idx * 100);
      });
    }
  }

  const KidAudio = new SoundEngine();
  window.KidAudio = KidAudio;

  // Storage Helper
  const KidStorage = {
    getScore(gameKey) {
      return parseInt(localStorage.getItem(`arcade_score_${gameKey}`) || '0', 10);
    },
    saveScore(gameKey, score) {
      const best = this.getScore(gameKey);
      if (score > best) {
        localStorage.setItem(`arcade_score_${gameKey}`, score.toString());
        return true; // New record
      }
      return false;
    },
    getStars(gameKey) {
      return parseInt(localStorage.getItem(`arcade_stars_${gameKey}`) || '0', 10);
    },
    addStars(gameKey, count) {
      const total = this.getStars(gameKey) + count;
      localStorage.setItem(`arcade_stars_${gameKey}`, total.toString());
      return total;
    }
  };
  window.KidStorage = KidStorage;

  // Shell Controller
  class ArcadeShell {
    constructor() {
      this.gameKey = window.KID_GAME_ID || 'game';
      this.onPauseCallbacks = [];
      this.onResumeCallbacks = [];
      this.isPaused = false;

      this.initDom();
    }

    initDom() {
      document.addEventListener('DOMContentLoaded', () => {
        this.renderTopBar();
        this.renderModals();
      });
      if (document.readyState === 'interactive' || document.readyState === 'complete') {
        this.renderTopBar();
        this.renderModals();
      }
    }

    renderTopBar() {
      if (document.getElementById('arcade-shell-bar')) return;

      const bar = document.createElement('div');
      bar.id = 'arcade-shell-bar';
      bar.className = 'arcade-shell-bar';

      // Big Back Button (>= 44px touch area)
      const homeBtn = document.createElement('a');
      homeBtn.href = '/';
      homeBtn.className = 'arcade-btn arcade-btn-home';
      homeBtn.innerHTML = '<span>🏠</span><span>返回大厅</span>';
      homeBtn.setAttribute('aria-label', '返回游戏大厅');
      homeBtn.onclick = (e) => {
        KidAudio.playTap();
      };

      // Right controls container
      const rightControls = document.createElement('div');
      rightControls.className = 'arcade-right-controls';

      // Pause button
      const pauseBtn = document.createElement('button');
      pauseBtn.className = 'arcade-btn arcade-btn-pause';
      pauseBtn.innerHTML = '<span>⏸️</span>';
      pauseBtn.setAttribute('aria-label', '暂停游戏');
      pauseBtn.onclick = () => {
        KidAudio.playTap();
        this.togglePause();
      };

      // Sound button
      const soundBtn = document.createElement('button');
      soundBtn.id = 'arcade-sound-btn';
      soundBtn.className = 'arcade-btn arcade-btn-sound';
      soundBtn.innerHTML = KidAudio.enabled ? '🔊' : '🔇';
      soundBtn.setAttribute('aria-label', '开关声音');
      soundBtn.onclick = () => {
        const enabled = KidAudio.toggle();
        soundBtn.innerHTML = enabled ? '🔊' : '🔇';
      };

      window.addEventListener('arcade-sound-change', (e) => {
        soundBtn.innerHTML = e.detail.enabled ? '🔊' : '🔇';
      });

      rightControls.appendChild(pauseBtn);
      rightControls.appendChild(soundBtn);

      bar.appendChild(homeBtn);
      bar.appendChild(rightControls);
      document.body.appendChild(bar);
    }

    renderModals() {
      if (document.getElementById('arcade-modal')) return;

      const modal = document.createElement('div');
      modal.id = 'arcade-modal';
      modal.className = 'arcade-modal';
      modal.innerHTML = `
        <div class="arcade-dialog" id="arcade-dialog">
          <div class="arcade-dialog-stars" id="arcade-stars">⭐⭐⭐</div>
          <h2 class="arcade-dialog-title" id="arcade-modal-title">太棒了！</h2>
          <p class="arcade-dialog-desc" id="arcade-modal-desc">得分：100</p>
          <div class="arcade-dialog-actions" id="arcade-modal-actions">
            <button class="arcade-action-btn primary" id="arcade-btn-continue">
              <span>▶️</span><span>继续玩</span>
            </button>
            <a href="/" class="arcade-action-btn secondary" id="arcade-btn-leave">
              <span>🏠</span><span>回大厅</span>
            </a>
          </div>
        </div>
      `;
      document.body.appendChild(modal);

      document.getElementById('arcade-btn-leave')?.addEventListener('click', () => {
        KidAudio.playTap();
      });
    }

    togglePause() {
      if (this.isPaused) {
        this.resume();
      } else {
        this.pause();
      }
    }

    pause() {
      this.isPaused = true;
      this.onPauseCallbacks.forEach(fn => fn());
      this.showCustomModal({
        stars: '⏸️',
        title: '游戏暂停啦',
        desc: '休息一下眼睛，准备好了就继续吧！',
        btnText: '▶️ 继续游戏',
        onBtnClick: () => this.resume()
      });
    }

    resume() {
      this.isPaused = false;
      this.hideModal();
      this.onResumeCallbacks.forEach(fn => fn());
    }

    showWin({ score, stars = 3, message = '太棒啦！闯关成功！', onRestart }) {
      KidAudio.playWin();
      KidStorage.saveScore(this.gameKey, score);
      KidStorage.addStars(this.gameKey, stars);

      const starStr = '⭐'.repeat(Math.max(1, Math.min(3, stars)));
      this.showCustomModal({
        stars: starStr,
        title: '🎉 太棒了！',
        desc: `${message}<br><strong style="font-size:24px;color:#FF6B6B">得分: ${score}</strong>`,
        btnText: '🔄 再玩一次',
        onBtnClick: () => {
          this.hideModal();
          if (onRestart) onRestart();
        }
      });
    }

    showGameOver({ score, message = '加油！差一点点就通关了！', onRestart }) {
      KidAudio.playLose();
      KidStorage.saveScore(this.gameKey, score);

      this.showCustomModal({
        stars: '🌈',
        title: '再试一次吧！',
        desc: `${message}<br><strong style="font-size:22px;color:#FF9F43">本次得分: ${score}</strong>`,
        btnText: '🔄 重新开始',
        onBtnClick: () => {
          this.hideModal();
          if (onRestart) onRestart();
        }
      });
    }

    showCustomModal({ stars, title, desc, btnText, onBtnClick }) {
      const modal = document.getElementById('arcade-modal');
      if (!modal) return;

      document.getElementById('arcade-stars').innerHTML = stars || '⭐';
      document.getElementById('arcade-modal-title').textContent = title || '';
      document.getElementById('arcade-modal-desc').innerHTML = desc || '';

      const continueBtn = document.getElementById('arcade-btn-continue');
      if (continueBtn) {
        continueBtn.innerHTML = `<span>${btnText}</span>`;
        continueBtn.onclick = () => {
          KidAudio.playTap();
          if (onBtnClick) onBtnClick();
        };
      }

      modal.classList.add('active');
    }

    hideModal() {
      const modal = document.getElementById('arcade-modal');
      if (modal) modal.classList.remove('active');
    }

    onPause(fn) {
      if (typeof fn === 'function') this.onPauseCallbacks.push(fn);
    }

    onResume(fn) {
      if (typeof fn === 'function') this.onResumeCallbacks.push(fn);
    }
  }

  window.KidShell = new ArcadeShell();
})();
