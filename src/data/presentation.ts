type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "jorgeochipinti97@gmail.com",
  title: "Hi, I’m Jorge Ochipinti 👋",
  profile: "/jorge.webp",
  description:
    "I am a self-taught web programmer, an AI engineering student, and an entrepreneur. I am known for my obsession with efficiency and my passion for innovation, which I bring to both my programming projects and entrepreneurial endeavors.",
  socials: [
    {
      label: "Instagram",
      link: "https://instagram.com/jorgeochipinti_",
    },
    {
      label: "Whatsapp",
      link: "https://wa.me/541154950338?text=hi%20",
    },
  ],
};

export default presentation;
