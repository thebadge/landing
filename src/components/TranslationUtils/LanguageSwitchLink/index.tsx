import { LanguageSwitcher } from 'next-export-i18n';

type LanguageSwitchLinkProps = {
  locale: string;
};

const LanguageSwitchLink = ({ locale }: LanguageSwitchLinkProps) => {
  //const [query] = useLanguageQuery();

  return (
    <LanguageSwitcher lang={locale}>
      <button style={{ fontSize: 'small' }}>{locale}</button>
    </LanguageSwitcher>
  );
};

export default LanguageSwitchLink;
