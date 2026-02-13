import { BrandLogo } from '../common/BrandLogo';
import { ListItemKey } from '@/types/i18n/keys';
import { ListItem } from '../ui/ListItem';

export const Footer = () => {
  return (
    <footer className="bg-primary-900/80 text-footer-foreground/70 border-border/80 w-full border-t py-6 lg:py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:items-start md:gap-0 md:text-left">
          <ul className="font-body flex flex-col items-center gap-3 md:items-start">
            <BrandLogo />
            <>
              <ListItem i18nKey={ListItemKey.DESIGNED} variant="small" />
              <ListItem i18nKey={ListItemKey.RIGHTS} variant="small" />
            </>
          </ul>

          <ul className="font-body flex flex-col items-center justify-center gap-4 pt-1 sm:items-start sm:pt-5">
            <ListItem i18nKey={ListItemKey.CONTACT} variant="title" className="sm:mb-2" />
            <ListItem i18nKey={ListItemKey.EMAIL} variant="small" />
            <ListItem i18nKey={ListItemKey.PHONE} variant="small" />
          </ul>
          <ul className="font-body flex flex-col items-center gap-4 pt-1 sm:pt-5">
            <ListItem i18nKey={ListItemKey.FOLLOW_ME} variant="title" className="sm:mb-2" />
            <div className="flex items-center gap-4">
              <ListItem
                i18nKey={ListItemKey.MAIL_TO}
                variant="link"
                href="mailto:onuryemez.is@gmail.com"
                className="transition-all duration-400 hover:translate-y-1"
              />
              <ListItem
                i18nKey={ListItemKey.LINKED_IN}
                variant="link"
                href="https://www.linkedin.com/in/onur-yemez"
                className="transition-all duration-400 hover:translate-y-1"
              />
            </div>
          </ul>
        </div>
      </div>
    </footer>
  );
};
