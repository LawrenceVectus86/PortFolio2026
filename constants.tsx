
import { Project, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Quantum Dashboard",
    description: "A high-performance analytics platform with real-time data visualization and neural network integration.",
    tags: ["React", "TypeScript", "D3.js", "Tailwind"],
    imageUrl: "https://picsum.photos/seed/dashboard/800/600",
    link: "#"
  },
  {
    id: 2,
    title: "EcoSphere AI",
    description: "Environmental monitoring system using satellite imagery and machine learning to predict climate shifts.",
    tags: ["Next.js", "Python", "TensorFlow", "Three.js"],
    imageUrl: "https://picsum.photos/seed/eco/800/600",
    link: "#"
  },
  {
    id: 3,
    title: "Lumina Marketplace",
    description: "Digital asset marketplace focused on NFT art and high-fidelity 3D models with secure blockchain verification.",
    tags: ["Solidity", "React", "Ethers.js", "Framer Motion"],
    imageUrl: "https://picsum.photos/seed/market/800/600",
    link: "#"
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
