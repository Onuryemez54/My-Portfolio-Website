'use client';
import { useEffect, useRef, useState } from 'react';
import { MousePointer2 } from 'lucide-react';

export const Cursor = () => {
  const [isTouch, setIsTouch] = useState<boolean | null>(null);

  const cursorRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<SVGSVGElement>(null);

  const mouse = useRef({ x: 0, y: 0 });
  const position = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const touchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    if (touchDevice) {
      setIsTouch(true);
      return;
    }

    setIsTouch(false);

    let animationFrameId: number;

    const move = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      const target = e.target as HTMLElement;

      const isHovering =
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[role="button"]') ||
        target.classList.contains('cursor-pointer');

      if (iconRef.current) {
        iconRef.current.style.color = isHovering
          ? 'var(--color-cursor-hover-text)'
          : 'var(--color-cursor-text)';
      }
    };

    window.addEventListener('mousemove', move);

    const animate = () => {
      position.current.x += (mouse.current.x - position.current.x) * 0.2;
      position.current.y += (mouse.current.y - position.current.y) * 0.2;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `
          translate3d(${position.current.x}px, ${position.current.y}px, 0)
          translate(-50%, -50%)
        `;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', move);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (isTouch === null) return null;

  if (isTouch) return null;

  return (
    <div ref={cursorRef} className="pointer-events-none fixed top-0 left-0 z-9999">
      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-transparent backdrop-blur-2xl transition-all duration-400 lg:h-7 lg:w-7">
        <MousePointer2
          ref={iconRef}
          className="text-cursor-text h-4 w-4 transition-colors duration-400 lg:h-5 lg:w-5 xl:h-6 xl:w-6"
        />
      </div>
    </div>
  );
};
