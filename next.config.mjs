import withBundleAnalyzer from '@next/bundle-analyzer';

/**
 * Don't be scared of the generics here.
 * All they do is to give us autocompletion when using this.
 *
 * @template {import('next').NextConfig} T
 * @param {T} config - A generic parameter that flows through to the return type
 * @constraint {{import('next').NextConfig}}
 */
function defineNextConfig(config) {
  return config;
}
const withBundleAnalyzerWrapper = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

export default withBundleAnalyzerWrapper(
  defineNextConfig({
    reactStrictMode: true,
    swcMinify: true,
    compiler: {
      styledComponents: true,
    },
    i18n: {
      defaultLocale: 'en',
      locales: ['en'],
    },
  }),
);
