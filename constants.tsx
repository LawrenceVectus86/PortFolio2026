
import { Project, Skill } from './types';
import Gambar1 from "./components/img/p1.png";
import Gambar2 from "./components/img/p2.png";

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "PBPI Sulawesi Selatan",
    description: "PBPI Sulsel adalah situs resmi Perkumpulan Besar Padel Indonesia – Pengprov Sulawesi Selatan, organisasi yang bertugas membina, mengembangkan, dan mempromosikan olahraga padel di wilayah Sulawesi Selatan.",
    tags: ["React", "TypeScript", "D3.js", "Tailwind"],
    imageUrl: Gambar1,
    link: "https://pbpisulsel.id/"
  },
  {
    id: 2,
    title: "Magang Start Up Design",
    description: "Mempunyai Pengalaman Bekerja Remote Bersama Team Start Up di Jakarta Bernama Deborah Design",
    tags: ["Next.js", "React"],
    imageUrl: Gambar2,
    link: "https://github.com/LawrenceVectus86/deborah-design"
  }
];

export const SKILLS: Skill[] = [
  { name: "React", level: 95, category: 'frontend' },
  { name: "TypeScript", level: 90, category: 'frontend' },
  { name: "Tailwind CSS", level: 98, category: 'frontend' },
  { name: "Three.js", level: 85, category: 'frontend' },
  { name: "Node.js", level: 88, category: 'backend' },
  { name: "PostgreSQL", level: 82, category: 'backend' },
  { name: "UI/UX Design", level: 92, category: 'design' },
  { name: "Figma", level: 90, category: 'design' }
];

export const SYSTEM_INSTRUCTION = `
You are the personal AI assistant for Calvin Lawrence, a world-class senior software engineer and designer working at Tech Global Corp.
Calvin is known for building high-performance, visually stunning web applications with 3D and AI features.
Your goal is to answer questions about Calvin's portfolio, skills, projects, and professional background.
Be professional, helpful, and slightly futuristic in your tone.
If someone asks about Calvin's contact details, direct them to the contact form on the website.
Calvin specializes in React, TypeScript, 3D web experiences, and AI integration.
Keep your responses concise and engaging.
`;
