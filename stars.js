(() => {
  const canvas = document.getElementById('stars-canvas');
  const ctx = canvas.getContext('2d');
  let w, h, cx, cy;

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
    cx = w / 2;
    cy = h / 2;
  }
  resize();
  window.addEventListener('resize', resize);

  const STAR_COUNT = 280;
  const MAX_Z = 1000;
  const SPEED = 0.4;

  function resetStar(s) {
    s.x = (Math.random() - 0.5) * 1600;
    s.y = (Math.random() - 0.5) * 1600;
    s.z = Math.random() * MAX_Z;
    s.twinkleSpeed = 0.001 + Math.random() * 0.003;
    s.twinklePhase = Math.random() * Math.PI * 2;
  }

  const stars = Array.from({ length: STAR_COUNT }, () => {
    const s = {};
    resetStar(s);
    return s;
  });

  function draw(now) {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.15)';
    ctx.fillRect(0, 0, w, h);

    for (const s of stars) {
      s.z -= SPEED;

      if (s.z <= 1) {
        resetStar(s);
        s.z = MAX_Z;
      }

      const scale = 300 / s.z;
      const sx = cx + s.x * scale;
      const sy = cy + s.y * scale;

      if (sx < -20 || sx > w + 20 || sy < -20 || sy > h + 20) {
        resetStar(s);
        s.z = MAX_Z;
        continue;
      }

      const life = 1 - s.z / MAX_Z;
      const radius = 0.3 + life * 2;
      const twinkle = 0.5 + 0.5 * Math.sin(now * s.twinkleSpeed + s.twinklePhase);
      const alpha = (0.15 + life * 0.85) * (0.6 + twinkle * 0.4);

      ctx.beginPath();
      ctx.arc(sx, sy, radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 245, ${alpha})`;
      ctx.fill();
    }

    requestAnimationFrame(draw);
  }
  requestAnimationFrame(draw);
})();
