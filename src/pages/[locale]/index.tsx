import { getStaticPaths, makeStaticProps } from '@/src/utils/getStatic';
import Home from '..';

const getStaticProps = makeStaticProps(['landing']);
export { getStaticPaths, getStaticProps };

export default function TranslatedHome(props: any) {
  return <Home {...props} />;
}
