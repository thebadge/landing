import { useLanguageQuery } from 'next-export-i18n';
import Link from 'next/link';
import React from 'react';

export default function LinkWithTranslation({
  children,
  pathname,
}: {
  children: React.ReactNode;
  pathname: string;
}) {
  const [query] = useLanguageQuery();

  return <Link href={{ pathname: pathname, query: query }}>{children}</Link>;
}
