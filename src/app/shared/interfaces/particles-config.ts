export function initParticles() {
  if (typeof window !== 'undefined') {
    // Configuração simples de partículas
    const canvas = document.createElement('canvas');
    canvas.id = 'particles-canvas';
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';

    const container = document.querySelector('.particles-container');
    if (container) {
      container.appendChild(canvas);

      const ctx = canvas.getContext('2d');
      if (ctx) {
        canvas.width = container.clientWidth;
        canvas.height = container.clientHeight;

        const particles: any[] = [];
        const particleCount = 50;

        for (let i = 0; i < particleCount; i++) {
          particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 2 + 1,
            speed: Math.random() * 1 + 0.5,
            direction: Math.random() * Math.PI * 2,
          });
        }

        const animate = () => {
          ctx.clearRect(0, 0, canvas.width, canvas.height);

          particles.forEach((particle) => {
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
            ctx.fill();

            particle.x += Math.cos(particle.direction) * particle.speed;
            particle.y += Math.sin(particle.direction) * particle.speed;

            if (particle.x < 0 || particle.x > canvas.width)
              particle.direction = Math.PI - particle.direction;
            if (particle.y < 0 || particle.y > canvas.height)
              particle.direction = -particle.direction;
          });

          requestAnimationFrame(animate);
        };

        animate();

        window.addEventListener('resize', () => {
          canvas.width = container.clientWidth;
          canvas.height = container.clientHeight;
        });
      }
    }
  }
}
