'use client';
import { Container } from '../ui/Container';
import { FadeUp } from '../common/animations/FadeUp';
import { SubTitle } from '../ui/SubTitle';
import { ButtonKey, SubTitleKey, TitleKey } from '@/types/i18n/keys';
import { Title } from '../ui/Title';
import { AvatarCodeRing } from './AvatarCodeRing';
import { Button } from '../ui/Button';
import { SectionKey } from '@/types/section';
import { useActiveSectionContext } from '@/context/ActiveSectionContext';

export const Hero = () => {
  const { scrollTo } = useActiveSectionContext();
  return (
    <Container id={SectionKey.HOME}>
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-6 lg:grid-cols-8">
        <AvatarCodeRing />
        <FadeUp className="md:col-span-4 lg:col-span-5">
          <div className="min-w-0">
            <Title variant="primary" i18nKey={TitleKey.HERO} />
            <Title variant="primary" i18nKey={TitleKey.HERO_TECH_STACK} className="my-2" />
            <SubTitle variant="primary" i18nKey={SubTitleKey.HERO} />

            <div className="flex flex-wrap items-center justify-between gap-2 px-4 sm:px-16 md:justify-start md:px-0">
              <Button
                variant="primary"
                onAction={() => scrollTo(SectionKey.CONTACT)}
                i18nKey={ButtonKey.GET_IN_TOUCH}
              />
              <Button
                as="link"
                href="/CV/Onur_Ahmet_Yemez_CV.pdf"
                download
                variant="secondary"
                i18nKey={ButtonKey.VIEW_CV}
              />
            </div>
          </div>
        </FadeUp>
      </div>
    </Container>
  );
};
