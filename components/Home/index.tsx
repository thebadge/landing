import Home from "@/components/Home/Home";
import HomeFooter from "@/components/Home/HomeFooter";
import HomeHeader from "@/components/Home/HomeHeader";

export default function MainLanding() {
  return (
    <div className="min-h-screen flex flex-col gap-8">
      <HomeHeader />
      <Home />
      <HomeFooter />
    </div>
  );
}
