import Link from "next/link";
import { useParams } from "next/navigation";

export default function LanguageToggler() {
  const { locale } = useParams<{ locale: string | undefined }>();
  if (!locale) return null;
  return (
    <div className="md:flex gap-2 ">
      <Link
        className={`hover:text-primary-500 dark:hover:text-primary-500 ${
          locale === "en"
            ? "text-black dark:text-white underline underline-offset-2 decoration-primary-500"
            : "text-body-color dark:text-gray-500"
        }`}
        href="/en"
      >
        en
      </Link>
      {"|"}
      <Link
        className={`hover:text-primary-500 dark:hover:text-primary-500 ${
          locale === "de"
            ? "text-black dark:text-white underline underline-offset-2 decoration-primary-500"
            : "text-body-color dark:text-gray-500"
        }`}
        href="/de"
      >
        de
      </Link>
      {"|"}
      <Link
        className={`hover:text-primary-500 dark:hover:text-primary-500 ${
          locale === "es"
            ? "text-black dark:text-white underline underline-offset-2 decoration-primary-500"
            : "text-body-color dark:text-gray-500"
        }`}
        href="/es"
      >
        es
      </Link>
    </div>
  );
}
