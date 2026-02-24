'use client';
import { ReactNode } from 'react';
import { SectionKey } from '@/types/sectionTypes';
import { useActiveSectionContext } from '@/context/ActiveSectionContext';
import { ScrollReveal } from '../common/animations/ScrollReveal';
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
  const isAboutSection = id === SectionKey.ABOUT;
  const isProjectsSection = id === SectionKey.PROJECTS;
  const sectionStyles = isHeroSection
    ? 'py-24 sm:py-32 '
    : isProjectsSection
      ? 'py-6  xl:py-8'
      : 'py-8 sm:py-12 md:py-14 lg:py-16';

  if (isHeroSection || isAboutSection || isProjectsSection) {
    return (
      <section
        id={id}
        ref={registerSection(id)}
        className={cn(baseStyles, sectionStyles, className)}
      >
        {children}
      </section>
    );
  }

  return (
    <ScrollReveal delay={0.2}>
      <section
        id={id}
        ref={registerSection(id)}
        className={cn(baseStyles, sectionStyles, className)}
      >
        {children}
      </section>
    </ScrollReveal>
  );
};
