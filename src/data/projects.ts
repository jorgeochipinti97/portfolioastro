export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Developer & Growth partner | Dublin SRL",
    techs: ["Astro", "Tailwindcss",],
    link: "#", isComingSoon: true
  },
  {
    title: "Developer & Founder | AI secret project",
    techs: ["NextJs", "OpenaiAPI", 'Tailwindcss', 'NextUI', 'GSAP'],
    link: "#", isComingSoon: true
  },
  {
    title: "Founder & developer | Guinti LLC",
    techs: ["ReactJS (NextJS)", "Tailwindcss", "NextUI", 'GSAP'],
    link: "https://www.guinti.com",
  },
  {
    title: "Founder & developer | Royer LLC Store",
    techs: ["ReactJS (NextJS)", "MongoDB", "MaterialUI", "Stripe", 'GSAP'],
    link: "https://www.royer.store",
  },
];

export default projects;
