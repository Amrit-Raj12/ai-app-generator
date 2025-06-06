import React, { useState, useEffect, useCallback } from 'react';

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  rotation: number;
  velocity: { x: number; y: number };
  life: number;
  maxLife: number;
}

interface ClickSparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  rotation: number;
  velocity: { x: number; y: number };
  life: number;
  maxLife: number;
  color: string;
}

interface CursorTrailProps {
  className?: string;
  enabled?: boolean;
  sparkleCount?: number;
  sparkleSize?: number;
  colors?: string[];
  trailLength?: number;
}

const CursorTrailV2: React.FC<CursorTrailProps> = ({ 
  className = "",
  enabled = true,
  sparkleCount = 3,
  sparkleSize = 6,
  colors = ['#8B5CF6', '#A855F7', '#C084FC', '#DDD6FE'],
  trailLength = 60
}) => {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const [clickSparkles, setClickSparkles] = useState<ClickSparkle[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  const createSparkle = useCallback((x: number, y: number): Sparkle => {
    return {
      id: Math.random(),
      x: x + (Math.random() - 0.5) * 25,
      y: y + (Math.random() - 0.5) * 25,
      size: Math.random() * sparkleSize + 3,
      opacity: 1,
      rotation: Math.random() * 360,
      velocity: {
        x: (Math.random() - 0.5) * 2,
        y: (Math.random() - 0.5) * 2,
      },
      life: 0,
      maxLife: trailLength + Math.random() * 30,
    };
  }, [sparkleSize, trailLength]);

  const createClickSparkle = useCallback((x: number, y: number): ClickSparkle => {
    return {
      id: Math.random(),
      x: x + (Math.random() - 0.5) * 15,
      y: y + (Math.random() - 0.5) * 15,
      size: Math.random() * (sparkleSize * 1.5) + 6,
      opacity: 1,
      rotation: Math.random() * 360,
      velocity: {
        x: (Math.random() - 0.5) * 8,
        y: (Math.random() - 0.5) * 8,
      },
      life: 0,
      maxLife: 50 + Math.random() * 25,
      color: colors[Math.floor(Math.random() * colors.length)],
    };
  }, [sparkleSize, colors]);

  useEffect(() => {
    if (!enabled) return;

    const handleMouseMove = (e: MouseEvent) => {
      setIsVisible(true);
      
      // Create multiple sparkles for dense trail
      const newSparkles:Sparkle[] = [];
      for (let i = 0; i < sparkleCount; i++) {
        if (Math.random() < 0.9) {
          newSparkles.push(createSparkle(e.clientX, e.clientY));
        }
      }
      if (newSparkles.length > 0) {
        setSparkles(prev => [...prev, ...newSparkles]);
      }
    };

    const handleClick = (e: MouseEvent) => {
      if (!enabled) return;
      
      // Create burst of click sparkles
      const burstCount = 8 + Math.floor(Math.random() * 8);
      const newClickSparkles = Array.from({ length: burstCount }, () => 
        createClickSparkle(e.clientX, e.clientY)
      );
      setClickSparkles(prev => [...prev, ...newClickSparkles]);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('click', handleClick);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('click', handleClick);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [enabled, sparkleCount, createSparkle, createClickSparkle]);

  useEffect(() => {
    if (!enabled) return;

    const animationFrame = setInterval(() => {
      // Update trail sparkles
      setSparkles(prev => 
        prev
          .map(sparkle => ({
            ...sparkle,
            x: sparkle.x + sparkle.velocity.x,
            y: sparkle.y + sparkle.velocity.y,
            rotation: sparkle.rotation + 4,
            life: sparkle.life + 1,
            opacity: Math.max(0, 1 - (sparkle.life / sparkle.maxLife) * 1.2),
            velocity: {
              x: sparkle.velocity.x * 0.99,
              y: sparkle.velocity.y * 0.99,
            },
          }))
          .filter(sparkle => sparkle.life < sparkle.maxLife)
      );

      // Update click sparkles
      setClickSparkles(prev =>
        prev
          .map(sparkle => ({
            ...sparkle,
            x: sparkle.x + sparkle.velocity.x,
            y: sparkle.y + sparkle.velocity.y,
            rotation: sparkle.rotation + 8,
            life: sparkle.life + 1,
            opacity: Math.max(0, 1 - sparkle.life / sparkle.maxLife),
            velocity: {
              x: sparkle.velocity.x * 0.96,
              y: sparkle.velocity.y * 0.96 + 0.1, // slight gravity
            },
          }))
          .filter(sparkle => sparkle.life < sparkle.maxLife)
      );
    }, 16);

    return () => clearInterval(animationFrame);
  }, [enabled]);

  if (!enabled || (!isVisible && sparkles.length === 0 && clickSparkles.length === 0)) {
    return null;
  }

  return (
    <div className={`fixed inset-0 pointer-events-none z-50 overflow-hidden ${className}`}>
      {/* Trail Sparkles */}
      {sparkles.map(sparkle => (
        <div
          key={sparkle.id}
          className="absolute rounded-full"
          style={{
            left: sparkle.x - sparkle.size / 2,
            top: sparkle.y - sparkle.size / 2,
            width: sparkle.size,
            height: sparkle.size,
            opacity: sparkle.opacity,
            transform: `rotate(${sparkle.rotation}deg)`,
            background: `radial-gradient(circle, ${colors[0]} 0%, ${colors[1]} 50%, transparent 80%)`,
            boxShadow: `0 0 ${sparkle.size * 2}px ${colors[0]}88`,
          }}
        />
      ))}

      {/* Click Sparkles */}
      {clickSparkles.map(sparkle => (
        <div
          key={sparkle.id}
          className="absolute rounded-full"
          style={{
            left: sparkle.x - sparkle.size / 2,
            top: sparkle.y - sparkle.size / 2,
            width: sparkle.size,
            height: sparkle.size,
            opacity: sparkle.opacity,
            transform: `rotate(${sparkle.rotation}deg)`,
            background: `radial-gradient(circle, ${sparkle.color} 0%, ${sparkle.color}80 40%, transparent 70%)`,
            boxShadow: `0 0 ${sparkle.size * 3}px ${sparkle.color}aa`,
          }}
        />
      ))}
    </div>
  );
};

export default CursorTrailV2;