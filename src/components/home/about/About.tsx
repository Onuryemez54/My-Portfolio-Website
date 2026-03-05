import { Container } from '@/components/ui/Container';
import { SectionKey } from '@/types/sectionTypes';
import { FadeLeftToRight } from '@/components/common/animations/FadeLeftToRight';
import { SubTitleKey, TitleKey } from '@/types/i18n/keys';
import { SubTitle } from '@/components/ui/SubTitle';
import { Title } from '@/components/ui/Title';
import { FadeScale } from '@/components/common/animations/FadeScale';
import { Expertise } from './Expertise';
import Image from 'next/image';

export const About = () => {
  return (
    <Container id={SectionKey.ABOUT}>
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-14">
        <div className="grid items-center gap-16 md:grid-cols-7">
          <FadeLeftToRight delay={0.2} className="md:col-span-4">
            <Title testId="about-title" variant="secondary" i18nKey={TitleKey.ABOUT_ME} underline />
            <SubTitle testId="about-subtitle" variant="secondary" i18nKey={SubTitleKey.ABOUT_ME} />
          </FadeLeftToRight>
          <FadeScale delay={0.2} className="relative hidden justify-center md:col-span-3 md:block">
            <div className="relative aspect-4/5 w-full max-w-105 overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="/avatar/my-desk.webp"
                alt="Profile"
                fill
                sizes="(max-width: 768px) 100vw, 450px"
                className="object-cover transition-transform duration-500 hover:scale-105"
                priority
              />
            </div>
          </FadeScale>
        </div>
        <Expertise />
      </div>
    </Container>
  );
};
