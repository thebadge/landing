import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import languageDetector from '../../utils/lenguajeDetector';

type LanguageSwitchLinkProps = LinkProps & {
  locale: string;
};

const LanguageSwitchLink = ({ locale, ...rest }: LanguageSwitchLinkProps) => {
  const router = useRouter();

  let href = rest.href || router.asPath;
  let pName = router.pathname;

  Object.keys(router.query).forEach((k) => {
    if (k === 'locale') {
      pName = pName.replace(`[${k}]`, locale);
      return;
    }

    const rQuery = router.query[k];
    if (rQuery) {
      pName = pName.replace(
        `[${k}]`,
        Array.isArray(rQuery) ? rQuery.join(',') : rQuery,
      );
    }
  });

  if (locale) {
    href = rest.href ? `/${locale}${rest.href}` : pName;
  }

  const onClickHandler = () => {
    if (languageDetector?.cache) {
      languageDetector.cache(locale);
    }
  };

  return (
    <Link href={href} onClick={onClickHandler}>
      <button style={{ fontSize: 'small' }}>{locale}</button>
    </Link>
  );
};

export default LanguageSwitchLink;
