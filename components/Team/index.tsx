import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import TeamMember from "./TeamMember";
import { TEAM_MEMBERS } from "@/components/Team/teamMemberData";
import { useTranslations } from "next-intl";

export default function Team() {
  const t = useTranslations("team");
  return (
    <div className="container my-24 mx-auto md:px-6">
      <section id="team" className="mb-32 text-center">
        <h2 className="mb-12 text-3xl font-bold">{t("title")}</h2>

        <Carousel className="mx-8">
          <CarouselContent>
            {TEAM_MEMBERS.map((member, i) => {
              return (
                <CarouselItem
                  key={i}
                  className="w-full pl-6 basis-1/1 sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                >
                  <TeamMember member={member} />
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious variant="outline" />
          <CarouselNext variant="outline" />
        </Carousel>
      </section>
    </div>
  );
}
