import WhatIsTheBadge from "@/components/Features/WhatIsTheBadge";
import BadgesImages from "./BadgesImages";
import Circles from "./Circles";
import Presentation from "./Presentation";

export default function Hero() {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[140px] 2xl:pt-[210px] 2xl:pb-[160px]"
      >
        <div className="container flex flex-col gap-20 md:gap-0 md:flex-row">
          <Presentation />
          <BadgesImages />
        </div>
        <div className="container pt-8 md:pt-24 xl:pt-28 2xl:pt-32">
          <WhatIsTheBadge />
        </div>
        <Circles />
      </section>
    </>
  );
}
