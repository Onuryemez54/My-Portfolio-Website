import { Container } from '@/components/ui/Container';
import { FadeUp } from '@/components/common/animations/FadeUp';
import { SubTitle } from '@/components/ui/SubTitle';
import { SubTitleKey, TitleKey } from '@/types/i18n/keys';
import { Title } from '@/components/ui/Title';
import { AvatarCodeRing } from './AvatarCodeRing';
import { SectionKey } from '@/types/sectionTypes';
import { HeroButtons } from './HeroButtons';

export const Hero = () => {
  return (
    <Container id={SectionKey.HOME}>
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-6 lg:grid-cols-8">
        <AvatarCodeRing />
        <FadeUp className="md:col-span-4 lg:col-span-5">
          <div className="min-w-0">
            <Title variant="primary" i18nKey={TitleKey.HERO} />
            <Title variant="primary" i18nKey={TitleKey.HERO_TECH_STACK} className="my-2" />
            <SubTitle variant="primary" i18nKey={SubTitleKey.HERO} />

            <HeroButtons />
          </div>
        </FadeUp>
      </div>
    </Container>
  );
};
