import React, { useEffect, useRef } from 'react';

const AnimatedDotsBackground = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas size to match container
    const setCanvasSize = () => {
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Create dots with random positions and velocities
    const dots = [];
    const dotCount = 8;
    const colors = ['#7A1F12', '#C24533', '#8B2D1E', '#A5362A', '#943028'];

    for (let i = 0; i < dotCount; i++) {
      dots.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 40 + 15, // 15-55px radius
        vx: (Math.random() - 0.5) * 0.3, // Slow velocity
        vy: (Math.random() - 0.5) * 0.3,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.4 + 0.3 // 0.3-0.7 opacity
      });
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      dots.forEach(dot => {
        // Update position
        dot.x += dot.vx;
        dot.y += dot.vy;

        // Bounce off edges
        if (dot.x + dot.radius > canvas.width || dot.x - dot.radius < 0) {
          dot.vx *= -1;
        }
        if (dot.y + dot.radius > canvas.height || dot.y - dot.radius < 0) {
          dot.vy *= -1;
        }

        // Draw dot
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
        ctx.fillStyle = dot.color;
        ctx.globalAlpha = dot.opacity;
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full bg-white">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
};

export default AnimatedDotsBackground;