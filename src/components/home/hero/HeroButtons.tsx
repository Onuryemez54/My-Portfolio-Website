'use client';
import { Button } from '@/components/ui/Button';
import { useActiveSectionContext } from '@/context/ActiveSectionContext';
import { ButtonKey } from '@/types/i18n/keys';
import { SectionKey } from '@/types/sectionTypes';

export const HeroButtons = () => {
  const { scrollTo } = useActiveSectionContext();

  return (
    <div className="flex flex-wrap items-center justify-between gap-2 px-4 sm:px-16 md:justify-start md:px-0">
      <Button
        testId="hero-cta"
        variant="primary"
        onAction={() => scrollTo(SectionKey.CONTACT)}
        i18nKey={ButtonKey.GET_IN_TOUCH}
      />
      <Button
        as="link"
        href="/CV/Onur_Yemez_CV.pdf"
        download
        variant="secondary"
        i18nKey={ButtonKey.VIEW_CV}
      />
    </div>
  );
};
