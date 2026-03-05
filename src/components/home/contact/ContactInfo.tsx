import { FadeLeftToRight } from '@/components/common/animations/FadeLeftToRight';
import { SubTitleKey, TitleKey } from '@/types/i18n/keys';
import { Title } from '@/components/ui/Title';
import { SubTitle } from '@/components/ui/SubTitle';
import { AnimatedInfoIcons } from './AnimatedInfoIcons';

export const ContactInfo = () => {
  return (
    <FadeLeftToRight delay={0.1} className="items-start md:col-span-3 md:mt-20 xl:col-span-4">
      <div className="flex flex-col gap-2">
        <>
          <Title testId="contact-title" variant="secondary" i18nKey={TitleKey.CONTACT} underline />
          <SubTitle testId="contact-subtitle" variant="secondary" i18nKey={SubTitleKey.CONTACT} />
        </>
        <AnimatedInfoIcons />
      </div>
    </FadeLeftToRight>
  );
};
