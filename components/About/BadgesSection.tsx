import CommunitySection from "@/components/About/CommunitySection";
import ThirdPartySection from "@/components/About/ThirdPartySection";

export default function BadgesSection() {
  return (
    <section id="badgeTypes" className="pt-16 md:pt-20 lg:pt-28">
      <div className=" container grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="flex-1 col-span-1 h-full">
          <CommunitySection />
        </div>
        <div className="flex-1 col-span-1 h-full">
          <ThirdPartySection />
        </div>
      </div>
    </section>
  );
}
