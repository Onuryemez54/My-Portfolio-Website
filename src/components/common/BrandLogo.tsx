'use client';
import { useActiveSectionContext } from '@/context/ActiveSectionContext';
import { SectionKey } from '@/types/sectionTypes';
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/utils/cn';
import Image from 'next/image';

interface BrandLogoProps {
  setIsOpen?: (isOpen: boolean) => void;
  isAnimated?: boolean;
}

export const BrandLogo = ({ setIsOpen, isAnimated }: BrandLogoProps) => {
  const { scrollTo } = useActiveSectionContext();

  const [trigger, setTrigger] = useState(false);
  const mounted = useRef(false);

  useEffect(() => {
    if (mounted.current) return;
    mounted.current = true;
  }, []);

  useEffect(() => {
    if (!isAnimated) return;

    const interval = setInterval(() => {
      setTrigger(true);

      setTimeout(() => {
        setTrigger(false);
      }, 1000);
    }, 20000);

    return () => clearInterval(interval);
  }, [isAnimated]);

  return (
    <div
      onClick={() => {
        setIsOpen?.(false);
        scrollTo(SectionKey.HOME);
      }}
      className={cn(
        'relative flex h-14 w-14 items-center justify-center md:h-16 md:w-16',
        isAnimated && !mounted.current ? 'animate-in zoom-in duration-300' : '',
        trigger ? 'logo-bounce' : ''
      )}
    >
      <Image
        src="/logo/logo.png"
        alt="Brand Logo"
        fill
        priority
        sizes="(max-width: 768px) 3.5rem, (max-width: 1024px) 4rem, 4.5rem"
        className="mt-1 scale-200 object-contain"
      />
    </div>
  );
};
