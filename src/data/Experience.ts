type Experience = {
  title?: string;
  location?: string;
  date?: string;
  company?: string;
  description?: string[];
  techStack?: string[];
};

export const Experiences: Experience[] = [
  {
    title: "Web Developer",
    location: "Cilacap, Central Java",
    date: "Jan 2026 - Present",
    company: "Elunive",
    description: [
      "Developed modern and responsive web applications using Laravel and JavaScript",
      "Built user interfaces with React.js, Tailwind CSS, and Blade",
      "Managed databases and application logic using MySQL and Laravel",
      "Used Git and GitHub for version control and team collaboration",
      "Translated UI/UX designs from Figma into functional web applications",
    ],
    techStack: [
      "laravel",
      "express js",
      "mysql",
      "tailwindcss",
      "react js",
      "blade",
      "figma",
      "github",
    ],
  },
  {
    title: "Web Developer",
    location: "Banguntapan, Yogyakarta",
    date: "Jul 2025 - Jan 2026",
    company: "Seven Inc",
    description: [
      "Developed web applications collaboratively using Laravel and JavaScript",
      "Contributed to feature development, debugging, and application testing",
      "Used Git for version control within a collaborative development workflow",
    ],
    techStack: [
      "laravel",
      "javascript",
      "blade",
      "mysql",
      "tailwindcss",
      "github",
    ],
  },
];
