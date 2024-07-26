import { MouseTracingCapture, MouseTracingOverlay } from "@/components/ui/glow";
import FormBox from "@/components/Waitlist/agro/FormBox";

export default async function WaitList() {
  let waitListCount = { count: 0 };
  if (process.env.SITE_URL) {
    waitListCount = await fetch(`${process.env.SITE_URL}/api/waitlist`, {
      next: { tags: ["waitlist"] },
    })
      .then((r) => r.json())
      .catch((e) => {
        console.error("[WaitList] Error fetching waitlist data - ", e.message);
        return { count: 0 };
      });
  }

  return (
    <section id="waitlist" className="container">
      <div className="py-20 md:py-40 lg:py-50 px-4 md:px-6">
        <div className="grid gap-6 items-center cursor-default">
          <div className="flex flex-col justify-center space-y-4 text-center">
            <div className="space-y-2">
              <MouseTracingCapture>
                <h1 className="text-[58px] mb:text-[76px] lg:text-[98px] font-extrabold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-secondary-500 to-primary-300">
                  Join to our waitlist
                </h1>
                <MouseTracingOverlay glowColor="#FFF" />
              </MouseTracingCapture>
              <p className="max-w-[600px] md:text-xl  mx-auto">
                Get early access to one of Argentina&apos;s first
                blockchain-based agro financing platform.
              </p>
            </div>
            <div className="w-full max-w-md space-y-2 mx-auto">
              <FormBox waitListCount={waitListCount.count} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
