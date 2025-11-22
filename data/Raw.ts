import { FaGithub, FaLinkedin } from "react-icons/fa";


// TECH LOGOS
export interface TechLogo {
  id: number;
  src: string;
  alt: string;
  delay: number;
}
export const Logos:TechLogo[] = [
  { id: 1, src: "/images/Nextjs.png", alt: "Nextjs", delay: 1 },
  { id: 2, src: "/images/CSS.webp", alt: "CSS", delay: 2 },
  { id: 3, src: "/images/Daisyui.jpeg", alt: "DaisyUI", delay: 3 },
  { id: 4, src: "/images/Expressjs.png", alt: "ExpressJS", delay: 4 },
  { id: 5, src: "/images/figma.png", alt: "Figma", delay: 5 },
  { id: 6, src: "/images/insomnia.jpeg", alt: "Insomnia", delay: 6 },
  { id: 7, src: "/images/Javascript.png", alt: "JavaScript", delay: 1 },
  { id: 8, src: "/images/MongoDB.png", alt: "MongoDB", delay: 2 },
  { id: 9, src: "/images/Nodejs.png", alt: "Node.js", delay: 3 },
  { id: 10, src: "/images/Photoshop.png", alt: "Photoshop", delay: 4 },
  { id: 11, src: "/images/React.png", alt: "React", delay: 5 },
  { id: 12, src: "/images/Shadcn.png", alt: "ShadCN", delay: 6 },
  { id: 13, src: "/images/Tailwind.png", alt: "Tailwind", delay: 1 },
];

// PROJECT IMAGES
 export const ProjectImages = {
    nslImages:["/projects/nsl1.png", "/projects/nsl2.png"],
    shamanismImages:[
    "/projects/shamanism1.png",
    "/projects/shamanism2.png",
    ]
  }

// NAV & SOCIAL LINKS
   export const NAV_LINK = [
    { href: "home", label: "Home" },
    { href: "skill", label: "Skill" },
    { href: "project", label: "Project" },
    { href: "contact", label: "Contact" },
  ];

  export const SOCIAL_LINKS = [
    {href:'https://github.com/CodexCos',label:"GitHub",icon:FaGithub},
    {href:'https://www.linkedin.com/in/saurav-kc-9a35a5288',label:"LinkedIn",icon:FaLinkedin}
  ]

   export const SOCIAL_LINKS2 = [
    {href:'https://github.com/CodexCos',label:"GITHUB"},
    {href:'https://www.linkedin.com/in/saurav-kc-9a35a5288',label:"LINKEDIN"}
  ]