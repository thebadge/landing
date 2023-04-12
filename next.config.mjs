import withBundleAnalyzer from '@next/bundle-analyzer';
import mdx from '@next/mdx'
import remarkGfm from 'remark-gfm'
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

const withMDX = mdx({
    extension: /\.(md|mdx)$/,
    options: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [],
    },
})

export default withBundleAnalyzerWrapper(withMDX(
  defineNextConfig({
    reactStrictMode: true,
    swcMinify: false,
    compiler: {
      styledComponents: true,
    },
    images: {
      unoptimized: true,
    },
    transpilePackages: ['@mui/material', 'thebadge-ui-library'],
  }),
));
