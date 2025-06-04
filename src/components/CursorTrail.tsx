'use client';

import { useEffect, useRef } from 'react';

interface TrailPoint {
  x: number;
  y: number;
  opacity: number;
  size: number;
}

interface Sparkle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  opacity: number;
  size: number;
  life: number;
  maxLife: number;
  color: string;
}

const CursorTrail = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const trailPoints = useRef<TrailPoint[]>([]);
  const sparkles = useRef<Sparkle[]>([]);
  const animationRef = useRef<number>(0);
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createSparkles = (x: number, y: number) => {
      const sparkleCount = 12 + Math.random() * 8; // 12-20 sparkles
      const colors = [
        'rgba(160, 32, 240, ',   // purple
        'rgba(186, 85, 211, ',   // medium orchid
        'rgba(221, 160, 221, ',  // plum
        'rgba(147, 112, 219, ',  // medium purple
        'rgba(138, 43, 226, '    // blue violet
      ];

      for (let i = 0; i < sparkleCount; i++) {
        const angle = (Math.PI * 2 * i) / sparkleCount + Math.random() * 0.5;
        const velocity = 2 + Math.random() * 4;
        const life = 30 + Math.random() * 20;

        sparkles.current.push({
          x,
          y,
          vx: Math.cos(angle) * velocity,
          vy: Math.sin(angle) * velocity,
          opacity: 1,
          size: 2 + Math.random() * 3,
          life,
          maxLife: life,
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }
    };

    const handleMouseClick = (e: MouseEvent) => {
      createSparkles(e.clientX, e.clientY);

      // Add extra bright flash at click point
      trailPoints.current.push({
        x: e.clientX,
        y: e.clientY,
        opacity: 1.5,
        size: 15
      });
    };
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };

      // Add new trail point
      trailPoints.current.push({
        x: e.clientX,
        y: e.clientY,
        opacity: 1,
        size: Math.random() * 8 + 4
      });

      // Limit trail length
      if (trailPoints.current.length > 15) {
        trailPoints.current.shift();
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw trail points
      trailPoints.current = trailPoints.current.map((point, index) => ({
        ...point,
        opacity: point.opacity * 0.92,
        size: point.size * 0.96
      })).filter(point => point.opacity > 0.01);

      // Update sparkles
      sparkles.current = sparkles.current.map(sparkle => ({
        ...sparkle,
        x: sparkle.x + sparkle.vx,
        y: sparkle.y + sparkle.vy,
        vy: sparkle.vy + 0.1, // gravity
        vx: sparkle.vx * 0.99, // air resistance
        life: sparkle.life - 1,
        opacity: sparkle.life / sparkle.maxLife,
        size: sparkle.size * 0.98
      })).filter(sparkle => sparkle.life > 0);

      // Draw trail with glow effect
      trailPoints.current.forEach((point, index) => {
        const gradient = ctx.createRadialGradient(
          point.x, point.y, 0,
          point.x, point.y, point.size * 2
        );

        gradient.addColorStop(0, `rgba(255, 255, 255, ${point.opacity})`);
        gradient.addColorStop(0.3, `rgba(255, 255, 255, ${point.opacity * 0.6})`);
        gradient.addColorStop(0.6, `rgba(200, 230, 255, ${point.opacity * 0.3})`);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

        ctx.save();
        ctx.globalCompositeOperation = 'screen';
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(point.x, point.y, point.size * 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // Inner bright core
        ctx.save();
        ctx.globalCompositeOperation = 'screen';
        ctx.fillStyle = `rgba(255, 255, 255, ${point.opacity * 0.8})`;
        ctx.beginPath();
        ctx.arc(point.x, point.y, point.size * 0.3, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      // Draw sparkles
      sparkles.current.forEach(sparkle => {
        // Outer glow
        const gradient = ctx.createRadialGradient(
          sparkle.x, sparkle.y, 0,
          sparkle.x, sparkle.y, sparkle.size * 3
        );

        gradient.addColorStop(0, `${sparkle.color}${sparkle.opacity})`);
        gradient.addColorStop(0.5, `${sparkle.color}${sparkle.opacity * 0.5})`);
        gradient.addColorStop(1, `${sparkle.color}0)`);

        ctx.save();
        ctx.globalCompositeOperation = 'screen';
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(sparkle.x, sparkle.y, sparkle.size * 3, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // Bright center
        ctx.save();
        ctx.globalCompositeOperation = 'screen';
        ctx.fillStyle = `rgba(255, 255, 255, ${sparkle.opacity * 0.9})`;
        ctx.beginPath();
        ctx.arc(sparkle.x, sparkle.y, sparkle.size * 0.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // Star-like sparkle effect
        if (sparkle.opacity > 0.5) {
          ctx.save();
          ctx.globalCompositeOperation = 'screen';
          ctx.strokeStyle = `rgba(255, 255, 255, ${sparkle.opacity * 0.7})`;
          ctx.lineWidth = 1;
          ctx.beginPath();

          // Horizontal line
          ctx.moveTo(sparkle.x - sparkle.size * 2, sparkle.y);
          ctx.lineTo(sparkle.x + sparkle.size * 2, sparkle.y);

          // Vertical line
          ctx.moveTo(sparkle.x, sparkle.y - sparkle.size * 2);
          ctx.lineTo(sparkle.x, sparkle.y + sparkle.size * 2);

          ctx.stroke();
          ctx.restore();
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleMouseClick);
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleMouseClick);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default CursorTrail;