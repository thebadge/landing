import { useLocale } from "next-intl";
import Image from "next/image";

const BADGES: { [key: string]: Array<any> } = {
  en: [
    "/assets/badges/en/diploma-cert.webp",
    "/assets/badges/en/iso-cert.webp",
    "/assets/badges/en/howey-test.webp",
  ],
  es: [
    "/assets/badges/es/diploma-cert.webp",
    "/assets/badges/es/iso-cert.webp",
    "/assets/badges/es/howey-test.webp",
  ],
  de: [
    "/assets/badges/de/diploma-cert.webp",
    "/assets/badges/de/iso-cert.webp",
    "/assets/badges/de/howey-test.webp",
  ],
};

export default function BadgesImages() {
  const locale = useLocale() || "en";
  return (
    <div className="-mx-4 m-auto flex flex-1 relative justify-center content-center multiBadgePreview">
      {BADGES[locale].map((badgeSrc, i) => (
        <Image
          key={i}
          width={300}
          height={186}
          src={badgeSrc}
          alt="shape"
          className={`w-[186px] h-[300px] animate-glow multiBadgePreview__badge multiBadgePreview__badge--animated`}
        />
      ))}
    </div>
  );
}
