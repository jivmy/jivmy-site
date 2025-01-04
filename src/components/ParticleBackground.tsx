import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number>();

  const isMobileDevice = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Calculate particle count based on viewport width
    const getParticleCount = (width: number) => {
      const baseCount = 65;
      const minCount = 25;
      
      if (width > 1200) return baseCount;
      return Math.max(minCount, Math.floor(baseCount * (width / 1200)));
    };

    // Initialize particles
    const initParticles = () => {
      const particleCount = getParticleCount(window.innerWidth);
      const particleSpeed = 0.6;
      particlesRef.current = [];

      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * particleSpeed,
          vy: (Math.random() - 0.5) * particleSpeed,
          radius: 4
        });
      }
    };

    // Set canvas size
    const setCanvasSize = () => {
      if (isMobileDevice()) return; // Skip resize on mobile devices
      
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    // Initial setup
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initParticles();

    // Only add resize listener for non-mobile devices
    if (!isMobileDevice()) {
      window.addEventListener('resize', setCanvasSize);
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const connectionDistance = 150;

      particlesRef.current.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 252, 232, 0.15)';
        ctx.fill();

        particlesRef.current.forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            const opacity = (1 - distance / connectionDistance) * 0.1;
            ctx.strokeStyle = `rgba(255, 252, 232, ${opacity})`;
            ctx.lineWidth = 2;
            ctx.stroke();
          }
        });
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (!isMobileDevice()) {
        window.removeEventListener('resize', setCanvasSize);
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        background: 'transparent'
      }}
    />
  );
};

export default ParticleBackground; 