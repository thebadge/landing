import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "TheBadge is Part of Avalanche’s CodeBase Incubation Program",
    paragraph:
      "TheBadge has been selected to join Avalanche’s CodeBase incubation program. This collaboration is a noteworthy step for TheBadge, placing it at the heart of innovation in the tokenization of Real World Assets. ",
    image:
      "https://miro.medium.com/v2/resize:fit:720/format:webp/1*RrrjmDEeWPUOKbtzlOHl_g.png",
    url: "https://medium.com/@TheBadge/thebadge-is-part-of-avalanches-codebase-incubation-program-f0054e2f1eea",
    author: {
      name: "Agustin Lombardi",
      image: "/avatars/agulom.webp",
      designation: "Business Developer",
    },
    tags: ["Incubation"],
    publishDate: "Mar 28, 2024",
  },
  {
    id: 2,
    title: "TheBadge Welcomes 2024",
    paragraph:
      "As we bid farewell to the remarkable year that was 2023, TheBadge reflects on the journey that unfolded, an astonishing tapestry woven with dedication, hard work, and a pace that transcends the conventional. It was not just about the tasks at hand; it was about laying the foundation for a future destined for success.",
    image:
      "https://miro.medium.com/v2/resize:fit:720/format:webp/1*PejhY1KAXkI50PX2i8RR-g.png",
    author: {
      name: "Agustin Pane",
      image: "/avatars/agu.webp",
      designation: "Co-founder, CEO",
    },
    url: "https://medium.com/@TheBadge/thebadge-welcomes-2024-253a98f1fb11",
    tags: ["Review"],
    publishDate: "Jan 4, 2024",
  },
  {
    id: 3,
    title: "TheBadge Announces Attackathon: Week-Long Audit Competition.",
    paragraph:
      "The Badge is partnering with WorkPod and TalentLayer to host a week-long audit competition before we go live on mainnet. Win up to $500 in bounties. Participate December 4 — December 11, 2023! Follow us on Twitter and join our Discord to participate.",
    image:
      "https://miro.medium.com/v2/resize:fit:720/format:webp/1*UEPkJUIuA22geRRAt7FNEQ.jpeg",
    author: {
      name: "Agustin Lombardi",
      image: "/avatars/agulom.webp",
      designation: "Business Developer",
    },
    url: "https://medium.com/@TheBadge/thebadge-announces-attackathon-week-long-audit-competition-866e3fe50c31",
    tags: ["Attackathon"],
    publishDate: "Nov 17, 2023",
  },
];
export default blogData;
