import React, { useState, useEffect } from 'react';

interface Tilt {
  x: number; // -1 to 1
  y: number; // -1 to 1
}

interface Props {
  children: React.ReactNode;
}

export default function AnimatedLottieWrapper({ children }: Props) {
  const [tilt, setTilt] = useState<Tilt>({ x: 0, y: 0 });

  useEffect(() => {
    // Handle mouse move
    const handleMouseMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const x = (e.clientX - centerX) / centerX; // -1 to 1
      const y = (e.clientY - centerY) / centerY;
      setTilt({ x, y });
    };

    // Handle device orientation (for mobile tilt)
    const handleDeviceOrientation = (e: DeviceOrientationEvent) => {
      if (e.gamma == null || e.beta == null) return;
      // gamma: left-right tilt [-90,90], beta: front-back tilt [-180,180]
      const maxTilt = 30; // degrees max to normalize
      let x = Math.min(Math.max(e.gamma, -maxTilt), maxTilt) / maxTilt;
      let y = Math.min(Math.max(e.beta, -maxTilt), maxTilt) / maxTilt;
      // Invert y if you want opposite effect
      setTilt({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('deviceorientation', handleDeviceOrientation, true);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('deviceorientation', handleDeviceOrientation);
    };
  }, []);

  // Optional: limit max tilt degrees to 8 for smooth effect
  const maxRotate = 8;
  const rotateX = tilt.y * maxRotate; // vertical tilt controls rotateX
  const rotateY = tilt.x * maxRotate; // horizontal tilt controls rotateY

  return (
    <div
      style={{
        transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: 'transform 0.1s ease-out',
        willChange: 'transform',
        perspective: 1000,
        display: 'inline-block',
        cursor: 'default',
      }}
      aria-label="Interactive 3D animated content"
    >
      {children}
    </div>
  );
}
