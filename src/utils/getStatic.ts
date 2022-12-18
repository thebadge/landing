import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { AppContext } from 'next/app';
import i18nextConfig from '../../next-i18next.config';

export const getI18nPaths = () =>
  i18nextConfig.i18n.locales.map((lng: string) => ({
    params: {
      locale: lng,
    },
  }));

export const getStaticPaths = () => ({
  fallback: false,
  paths: getI18nPaths(),
});

export async function getI18nProps(ctx: AppContext, ns = ['landing']) {
  // @ts-ignore
  const locale = ctx?.params?.locale || 'en';
  const serverSideTranslationsProps = await serverSideTranslations(locale, ns);
  let props = {
    ...serverSideTranslationsProps,
  };
  return props;
}

export function makeStaticProps(ns = ['landing']) {
  return async function getStaticProps(ctx: AppContext) {
    return {
      props: await getI18nProps(ctx, ns),
    };
  };
}
