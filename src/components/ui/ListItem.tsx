'use client';
import { cn } from '@/utils/cn';
import { ReactNode } from 'react';
import { Phone, Mail, Linkedin, Github } from 'lucide-react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { ListItemKey } from '@/types/i18n/keys';

type Variant = 'title' | 'small' | 'large' | 'link';

type i18nKey = ListItemKey;

interface Props {
  className?: string;
  variant?: Variant;
  wrap?: boolean;
  i18nKey?: i18nKey;
  href?: string;
}

const variantStyles: Record<Variant, string> = {
  title: 'text-sm sm:text-base lg:text-lg  font-bold',
  small: 'text-xs md:text-sm',
  large: 'text-sm sm:text-base text-primary-300',
  link: 'hover:text-accent-400 transition',
};

export const ListItem = ({ variant = 'large', wrap = false, i18nKey, className, href }: Props) => {
  const iconClass = 'text-primary-500 group-hover:text-accent-400 h-4 w-4 transition';
  let icon: ReactNode = null;
  let content: ReactNode = null;
  let keys: string[] = [];

  switch (i18nKey) {
    case ListItemKey.EMAIL:
      icon = <Mail className={iconClass} />;
      content = (
        <Link href="mailto:onuryemez.is@gmail.com" className="hover:underline">
          onuryemez.is@gmail.com
        </Link>
      );
      break;
    case ListItemKey.PHONE:
      icon = <Phone className={iconClass} />;
      content = (
        <Link href="tel:+905375582845" className="hover:underline">
          +90 537 558 2845
        </Link>
      );
      break;
    case ListItemKey.MAIL_TO:
      icon = <Mail size={20} />;
      break;
    case ListItemKey.LINKED_IN:
      icon = <Linkedin size={20} />;
      break;
    case ListItemKey.GITHUB:
      icon = <Github size={20} />;
      break;
    case ListItemKey.DESIGNED:
      keys = [ListItemKey.DESIGNED];
      break;
    case ListItemKey.RIGHTS:
      keys = [ListItemKey.RIGHTS];
      break;
    case ListItemKey.CONTACT:
      keys = [ListItemKey.CONTACT];
      break;
    case ListItemKey.FOLLOW_ME:
      keys = [ListItemKey.FOLLOW_ME];
      break;
    default:
      break;
  }

  if (content) {
    return (
      <li
        className={cn('font-body group flex items-center gap-3', variantStyles[variant], className)}
      >
        {icon}
        {content}
      </li>
    );
  }

  if (href) {
    return (
      <Link
        href={href}
        target="_blank"
        className={cn(variantStyles[variant], className, 'inline-flex p-2 2xl:p-3')}
      >
        {icon}
      </Link>
    );
  }

  const t = useTranslations(ListItemKey.TITLE);

  const renderText = () => {
    const items: ReactNode[] = [];

    keys.forEach((key, index) => {
      let text = t(key);

      items.push(
        <span key={key} className={cn(index > 0 ? 'mx-1' : '', 'inline-block')}>
          {text}
        </span>
      );

      if (i18nKey === ListItemKey.RIGHTS) {
        items.unshift(
          <span className="mr-4" key="copyright">
            &copy; 2026
          </span>
        );
      }
    });

    return items;
  };

  return (
    <li
      className={cn(
        'font-body group flex items-center gap-2 text-center sm:text-left',
        variantStyles[variant],
        className
      )}
    >
      {icon && icon}

      <span className={cn('flex items-center', wrap ? 'flex-wrap' : 'flex-nowrap')}>
        {renderText()}
      </span>
    </li>
  );
};
