type Project = {
  img?: string;
  title: string;
  slug: string;
  demoURL: string;
  features: string[];
  techStack: string[];
};

export const Projects: Project[] = [
  {
    img: "/images/projects/project_absen.png",
    title: "Absensi Karyawan",
    slug: "absensi-karyawan",
    demoURL: "",
    features: [
      "Developed an employee attendance system with face recognition and live liveness detection",
      "Implemented attendance, leave management, employee request, and reporting features",
      "Built responsive dashboards and user interfaces for administrators",
      "Collaborated with the team on application development and system maintenance",
    ],
    techStack: ["laravel", "tailwindcss", "mysql", "javascript", "Mediapipe"],
  },

  {
    img: "/images/projects/areakerja.png",
    title: "Portal Kerja ( areakerja.com )",
    slug: "portal-kerja-areakerja",
    demoURL: "https://areakerja.com",
    features: [
      "Developed a job portal website using Laravel",
      "Implemented a multi-role authentication and authorization system (Job Seeker, Company, Admin, Super Admin, Finance)",
      "Collaborated with the team on application development and debugging",
    ],
    techStack: ["laravel", "mysql", "jquery", "tailwindcss", "flowbite"],
  },
  {
    title: "Bimbel Cerdas",
    slug: "bimbel-cerdas",
    demoURL: "",
    features: [
      "Developed a tutoring platform using Laravel",
      "Collaborated with the team on application development and debugging",
      "Implemented a nearest tutor search feature based on user location",
    ],
    techStack: ["laravel", "mysql", "jquery", "tailwindcss"],
  },
  {
    title: "Sending Love Self Development",
    slug: "sending-love",
    demoURL: "",
    features: [
      "Implemented a daily mood analysis system by comparing mood trends with previous days",
      "Collaborated on the development of a self-development web application",
    ],
    techStack: ["laravel", "mysql", "javascript", "tailwindcss"],
  },
  {
    title: "Stokify",
    slug: "stokify",
    demoURL: "",
    features: [
      "Developed an inventory management system for tracking incoming and outgoing items",
      "Implemented stock monitoring features to improve inventory management efficiency",
      "Collaborated with the team on application development and debugging",
    ],
    techStack: ["laravel", "mysql", "flowbite", "tailwindcss", "chart js"],
  },
  {
    title: "ChatPRD",
    slug: "chat-prd",
    demoURL: "https://chat-prd-alpha.vercel.app/",
    features: [
      "Developed an AI-powered web application with PRD generation using the Gemini API",
      "Built a responsive and interactive user interface using React.js and Tailwind CSS",
    ],
    techStack: ["react js", "gemini api", "tailwindcss"],
  },
];
