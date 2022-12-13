import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

type LinkComponentProps = LinkProps & {
  children: React.ReactNode;
  skipLocaleHandling: boolean;
  href: string;
};

/**
 * Replace for Next/Link, this LinkComponent use translation redirect
 * @param param0
 * @returns
 */
const LinkComponent = ({
  children,
  skipLocaleHandling,
  ...rest
}: LinkComponentProps) => {
  const router = useRouter();
  let queryLocale;
  if (Array.isArray(router.query.locale)) {
    queryLocale = router.query.locale[0];
  } else {
    queryLocale = router.query.locale;
  }
  const locale = rest.locale || queryLocale || '';

  let href = rest.href || router.asPath;
  if (href.indexOf('http') === 0) skipLocaleHandling = true;
  if (locale && !skipLocaleHandling) {
    href = href
      ? `/${locale}${href}`
      : router.pathname.replace('[locale]', locale);
  }

  return (
    <>
      <Link href={href}>
        <a {...rest}>{children}</a>
      </Link>
    </>
  );
};

export default LinkComponent;
