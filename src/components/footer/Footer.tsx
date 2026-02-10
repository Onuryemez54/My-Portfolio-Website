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

          <ul className="font-body flex flex-col items-center justify-center gap-3 pt-4 sm:items-start">
            <ListItem i18nKey={ListItemKey.CONTACT} variant="title" />
            <ListItem i18nKey={ListItemKey.EMAIL} variant="small" />
            <ListItem i18nKey={ListItemKey.PHONE} variant="small" />
          </ul>
          <ul className="font-body flex flex-col items-center gap-3 pt-4">
            <ListItem i18nKey={ListItemKey.FOLLOW_ME} variant="title" />
            <div className="flex items-center gap-4">
              <ListItem
                i18nKey={ListItemKey.MAIL_TO}
                variant="link"
                href="mailto:onuryemez.is@gmail.com"
              />
              <ListItem
                i18nKey={ListItemKey.LINKED_IN}
                variant="link"
                href="https://www.linkedin.com/in/onur-yemez"
              />
            </div>
          </ul>
        </div>
      </div>
    </footer>
  );
};
