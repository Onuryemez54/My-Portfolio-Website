'use client';
import { ReactNode } from 'react';
import { SectionKey } from '@/types/sectionTypes';
import { useActiveSectionContext } from '@/context/ActiveSectionContext';
import { cn } from '@/utils/cn';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  id: SectionKey;
}

const baseStyles = 'relative w-full mx-auto md:px-6 overflow-x-hidden';

export const Container = ({ children, className, id }: ContainerProps) => {
  const { registerSection } = useActiveSectionContext();

  const isHeroSection = id === SectionKey.HOME;
  const isProjectsSection = id === SectionKey.PROJECTS;
  const isContactSection = id === SectionKey.CONTACT;

  const sectionStyles = isHeroSection
    ? 'py-24 sm:py-32 '
    : isProjectsSection
      ? 'pt-6 pb-12 xl:pb-16 xl:pt-8'
      : isContactSection
        ? 'pt-8 pb-14 sm:pt-12 sm:pb-20 md:pt-14 md:pb-24 lg:pt-16 lg:pb-28'
        : 'py-8 sm:py-12 md:py-14 lg:py-16';

  return (
    <section
      id={id}
      data-testid={id}
      ref={registerSection(id)}
      className={cn(baseStyles, sectionStyles, className)}
    >
      {children}
    </section>
  );
};
