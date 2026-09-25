      // Simulateur visuel de débruitage (démonstration pédagogique, pas un vrai modèle)
      (function () {
        const canvas = document.getElementById('denoise-canvas');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const SIZE = 320;
        canvas.width = SIZE;
        canvas.height = SIZE;

        const slider = document.getElementById('denoise-slider');
        const stepLabel = document.getElementById('denoise-step-label');
        const phaseLabel = document.getElementById('denoise-phase-label');
        const noisePct = document.getElementById('denoise-noise-pct');
        const etaLabel = document.getElementById('denoise-eta');
        const playBtn = document.getElementById('denoise-play');
        const resetBtn = document.getElementById('denoise-reset');
        const shapeBtn = document.getElementById('denoise-shape');

        const IMAGES = [
          { key: 'cat', label: 'un chat', src: '{{inline:assets/denoise-cat.jpg}}' },
          { key: 'house', label: 'une maison', src: '{{inline:assets/denoise-house.jpg}}' },
          { key: 'landscape', label: 'un paysage de montagne', src: '{{inline:assets/denoise-landscape.jpg}}' }
        ];

        let shapeIndex = 0;
        let targetData = null;
        const loadedImages = new Array(IMAGES.length).fill(null);

        const offCanvas = document.createElement('canvas');
        offCanvas.width = SIZE;
        offCanvas.height = SIZE;
        const octx = offCanvas.getContext('2d');

        function loadImage(idx) {
          return new Promise((resolve) => {
            if (loadedImages[idx]) {
              resolve(loadedImages[idx]);
              return;
            }
            const img = new Image();
            img.onload = () => {
              loadedImages[idx] = img;
              resolve(img);
            };
            img.src = IMAGES[idx].src;
          });
        }

        async function setTargetImage(idx) {
          const img = await loadImage(idx);
          octx.clearRect(0, 0, SIZE, SIZE);
          octx.drawImage(img, 0, 0, SIZE, SIZE);
          targetData = octx.getImageData(0, 0, SIZE, SIZE);
        }

        function noiseValueSeeded(x, y, seedOffset) {
          const s = Math.sin((x * 12.9898 + y * 78.233 + seedOffset) * 43758.5453) * 43758.5453;
          return s - Math.floor(s);
        }

        function render(t) {
          if (!targetData) return;
          const alpha = 1 - t / 1000; // 0 = full noise, 1 = clean image
          const grain = t / 1000; // amount of residual noise
          const out = ctx.createImageData(SIZE, SIZE);
          for (let y = 0; y < SIZE; y++) {
            for (let x = 0; x < SIZE; x++) {
              const idx = (y * SIZE + x) * 4;
              const n = noiseValueSeeded(x, y, shapeIndex * 7.0);
              const noiseVal = Math.floor(n * 255);
              for (let ch = 0; ch < 3; ch++) {
                const targetVal = targetData.data[idx + ch];
                const blended = targetVal * alpha + noiseVal * grain;
                const jitter = (noiseValueSeeded(x + ch, y - ch, t * 0.001 + shapeIndex) - 0.5) * 60 * grain;
                out.data[idx + ch] = Math.max(0, Math.min(255, blended + jitter));
              }
              out.data[idx + 3] = 255;
            }
          }
          ctx.putImageData(out, 0, 0);

          stepLabel.textContent = String(t);
          noisePct.textContent = Math.round(grain * 100) + '%';
          slider.value = String(t);

          if (t > 800) {
            phaseLabel.textContent = 'Bruit pur';
          } else if (t > 500) {
            phaseLabel.textContent = 'Grandes structures';
          } else if (t > 150) {
            phaseLabel.textContent = 'Détails intermédiaires';
          } else if (t > 0) {
            phaseLabel.textContent = 'Raffinement final';
          } else {
            phaseLabel.textContent = 'Image générée (' + IMAGES[shapeIndex].label + ')';
          }
        }

        let currentT = 1000;

        slider.addEventListener('input', () => {
          currentT = parseInt(slider.value, 10);
          render(currentT);
        });

        let playing = false;
        let rafId = null;
        function step() {
          if (!playing) return;
          currentT = Math.max(0, currentT - 8);
          render(currentT);
          if (currentT <= 0) {
            playing = false;
            playBtn.textContent = '▶ Lancer le débruitage';
            return;
          }
          rafId = requestAnimationFrame(step);
        }

        playBtn.addEventListener('click', () => {
          if (playing) {
            playing = false;
            playBtn.textContent = '▶ Lancer le débruitage';
            if (rafId) cancelAnimationFrame(rafId);
            return;
          }
          if (currentT <= 0) currentT = 1000;
          playing = true;
          playBtn.textContent = '⏸ Pause';
          step();
        });

        resetBtn.addEventListener('click', () => {
          playing = false;
          if (rafId) cancelAnimationFrame(rafId);
          playBtn.textContent = '▶ Lancer le débruitage';
          currentT = 1000;
          render(currentT);
        });

        shapeBtn.addEventListener('click', async () => {
          shapeIndex = (shapeIndex + 1) % IMAGES.length;
          await setTargetImage(shapeIndex);
          render(currentT);
        });

        etaLabel.textContent = 'η fixe, 125 pas visuels';

        setTargetImage(0).then(() => render(currentT));
      })();
