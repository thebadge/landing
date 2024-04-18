import { Brand } from "@/types/brand";
import { useTranslations } from "next-intl";
import Image from "next/image";

const brandsData: Brand[] = [
  {
    id: 1,
    image: "/assets/avalanche_red.png",
    href: "https://www.avax.network/",
    name: "Avalanche",
  },
  {
    id: 2,
    image: "/assets/klerosLogo.png",
    href: "https://kleros.io/",
    name: "Kleros",
  },
  {
    id: 3,
    image: "/assets/ethlatam.png",
    href: "https://ethlatam.org/",
    name: "ETH Latam",
  },
  {
    id: 4,
    image: "/assets/openvino.png",
    href: "https://openvino.org/",
    name: "OpenVino",
  },
  {
    id: 5,
    image: "/assets/austral.png",
    href: "https://www.austral.edu.ar/",
    name: "Universidad Austral",
  },
  {
    id: 6,
    image: "/assets/talentlayer.png",
    href: "https://www.talentlayer.org/",
    name: "TalentLayer",
  },
  /*{
  id: 1,
    image: '/assets/idriss.png',
    href: 'https://www.idriss.xyz/',
    name: 'Idriss',
  },*/
  {
    id: 7,
    image: "/assets/metavisa.png",
    href: "https://www.metavisa.com/",
    name: "Metavisa",
  },
  {
    id: 8,
    image: "/assets/3vo.png",
    href: "https://3vo.me/",
    name: "3vo",
  },
  {
    id: 9,
    image: "/assets/accountant-logo.png",
    href: "https://www.theaccountantquits.com/",
    name: "Accountant quits",
  },
];

const Brands = () => {
  const t = useTranslations("backedBy");
  return (
    <section id="partners" className="pt-16">
      <div className="container">
        <div className="-mx-4 flex flex-wrap gap-4">
          <h4 className="text-black dark:text-white text-center m-auto font-bold text-3xl !leading-tight sm:text-2xl md:text-[35px]">
            {t("title")}
          </h4>
          <div className="w-full px-4">
            <div
              className="wow fadeInUp gap-4 flex flex-wrap items-center justify-center rounded-md bg-[#b7c5d9] py-8 px-8 dark:bg-primary-500 dark:bg-opacity-5 sm:px-10 md:py-[40px] md:px-[50px] xl:p-[50px] 2xl:py-[60px] 2xl:px-[70px]"
              data-wow-delay=".1s"
            >
              {brandsData.map((brand) => (
                <SingleBrand key={brand.id} brand={brand} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { href, image, name } = brand;

  return (
    <div className="mx-3 aspect-[1] flex w-full max-w-[120px] sm:max-w-[140px] items-center justify-center py-[15px] sm:mx-4 lg:max-w-[130px] xl:mx-6 xl:max-w-[150px] 2xl:mx-8 2xl:max-w-[160px]">
      <a
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        className="relative h-10 w-full opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0 dark:opacity-60 dark:hover:opacity-100"
      >
        <img
          loading="lazy"
          src={image}
          alt={name}
          style={{
            maxWidth: "150px",
            maxHeight: "70px",
            height: "auto",
            margin: "auto",
          }}
        />
      </a>
    </div>
  );
};
