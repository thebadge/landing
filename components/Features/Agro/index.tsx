import { useTranslations } from "next-intl";

const Features = () => {
  const t = useTranslations("whatIsTheBadge");

  return (
    <>
      <section id="#benefits" className="container relative">
        <div className="py-10">
          <h2 className="text-5xl mb:text-6xl lg:text-7xl">User Benefits</h2>
        </div>
      </section>
    </>
  );
};

export default Features;
