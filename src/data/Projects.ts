type Project = {
  title: string;
  demoURL: string;
  features: string[];
  techStack: string[];
};

export const Projects: Project[] = [
  {
    title: "Absensi Karyawan",
    demoURL: "",
    features: [
      "Mengembangkan sistem absensi karyawan berbasis face recognition dan live livenes",
      "Mengimplementasikan fitur absensi, manajemen izin/cuti, pengajuan karyawan serta laporan",
      "Membangun dashboard dan antarmuka pengguna yang responsif untuk admin",
      "Berkolaborasi dalam pengembangan aplikasi dan maintenance sistem",
    ],
    techStack: ["laravel", "tailwindcss", "mysql", "javascript", "Mediapipe"],
  },
  {
    title: "Portal Kerja ( areakerja.com )",
    demoURL: "https://areakerja.com",
    features: [
      "Mengembangkan website portal lowongan kerja menggunakan Laravel",
      "Mengimplementasikan sistem autentikasi dan otorisasi multi-role (Pelamar, Perusahaan, Admin, Super Admin, Finance)",
      "Berkolaborasi dalam pengembangan aplikasi dan debugging bersama tim",
    ],
    techStack: ["laravel", "mysql", "jquery", "tailwindcss", "flowbite"],
  },
  {
    title: "Bimbel Cerdas",
    demoURL: "",
    features: [
      "Mengembangkan website bimbingan belajar berbasis Laravel",
      "Berkolaborasi dalam pengembangan aplikasi dan debugging bersama tim",
      "Mengimplementasikan sistem pencarian jarak terdekat antara pengguna dan pengajar",
    ],
    techStack: ["laravel", "mysql", "jquery", "tailwindcss"],
  },
  {
    title: "Sending Love Self Development",
    demoURL: "",
    features: [
      "Mengimplementasikan sistem analisis mood harian berdasarkan perbandingan dengan hari sebelumnya",
      "Berkolaborasi dalam pengembangan website bertema self development",
    ],
    techStack: ["laravel", "mysql", "javascript", "tailwindcss"],
  },
  {
    title: "Stokify",
    demoURL: "",
    features: [
      "Mengembangkan sistem manajemen inventaris untuk pencatatan barang masuk dan keluar",
      "Mengimplementasikan fitur monitoring stok untuk meningkatkan efisiensi pengelolaan inventaris",
      "Berkolaborasi dalam pengembangan aplikasi dan debugging bersama tim",
    ],
    techStack: ["laravel", "mysql", "flowbite", "tailwindcss", "chart js"],
  },
  {
    title: "ChatPRD",
    demoURL: "https://chat-prd-alpha.vercel.app/",
    features: [
      "Mengembangkan aplikasi web berbasis AI dengan fitur Generate PRD menggunakan Gemini API",
      "Membangun antarmuka pengguna yang responsif dan interaktif menggunakan React.js dan Tailwind CSS",
    ],
    techStack: ["react js", "gemini api", "tailwindcss"],
  },
];
