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
    location: "Cilacap, Jawa Tengah",
    date: "Jan 2026 - Sekarang",
    company: "Elunive ID ( Pribadi )",
    description: [
      "Mengembangkan aplikasi web modern dan responsif menggunakan Laravel dan JavaScript",
      "Membangun antarmuka pengguna dengan React.js, Tailwind CSS, dan Blade",
      "Mengelola database dan logika aplikasi menggunakan MySQL dan Laravel",
      "Menggunakan Git dan GitHub untuk version control dan kolaborasi tim",
      "Membuat dan mengimplementasikan desain UI/UX dari Figma menjadi website fungsional",
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
    title: "Programmer",
    location: "Banguntapan, Yogyakarta",
    date: "Jul 2025 - Jan 2026",
    company: "Seven Inc",
    description: [
      "Mengembangkan project website dalam tim menggunakan Laravel dan JavaScript",
      "Berkontribusi dalam pengembangan fitur, debugging, dan pengujian aplikasi",
      "Menggunakan Git untuk version control dalam workflow tim",
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
