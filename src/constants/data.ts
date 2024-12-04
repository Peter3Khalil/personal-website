import * as Icons from '@/components/shared/icons';
export type ProjectType = {
  title: string;
  imgSrc: string;
  index?: number;
  description: string;
  skills: string[];
  previewLink: string;
  sourceCodeLink?: string;
};

export const SKILLS = [
  {
    icon: Icons.TypescriptIcon,
    name: 'Typescript',
  },
  {
    icon: Icons.JavascriptIcon,
    name: 'Javascript',
  },
  {
    icon: Icons.ReactIcon,
    name: 'React',
  },
  {
    icon: Icons.NextIcon,
    name: 'Next.js',
  },
  {
    icon: Icons.NodeIcon,
    name: 'Node.js',
  },
  {
    icon: Icons.HtmlIcon,
    name: 'HTML',
  },
  {
    icon: Icons.CssIcon,
    name: 'CSS',
  },
  {
    icon: Icons.SassIcon,
    name: 'SASS',
  },
  {
    icon: Icons.BootstrapIcon,
    name: 'bootstrap',
  },
  {
    icon: Icons.TailwindIcon,
    name: 'Tailwind',
  },
  {
    icon: Icons.ReduxIcon,
    name: 'redux',
  },
  {
    icon: Icons.GitIcon,
    name: 'Git',
  },
  {
    icon: Icons.GithubIcon,
    name: 'Github',
  },
  {
    icon: Icons.NpmIcon,
    name: 'Npm',
  },
  {
    icon: Icons.JestIcon,
    name: 'Jest',
  },
];

export const EXPERIENCES = [
  {
    title: 'Frontend Developer at RVE',
    date: 'Aug 2024 - Present',
    description: [
      '**Improved** website visibility and search engine rankings through optimization strategies.',
      '**Implemented** additional features to enhance functionality and usability of the existing admin dashboard.',
      '**Collaborated** with UI/UX designers and backend developers to deliver seamless and user-centric features.',
    ],
  },
  {
    title: 'Freelancer Frontend Developer',
    date: 'Mar 2024 - Present',
    description: [
      '**Transformed** Figma designs into fully interactive and responsive websites, ensuring seamless user experiences and pixel-perfect accuracy.',
      '**Implemented** efficient animations to enhance user experience while maintaining high performance and responsiveness.',
      '**Assisted** clients in achieving top search engine rankings through effective SEO strategies and optimization techniques.',
    ],
  },
];

export const SOCIAL_LINKS = [
  {
    title: 'Github account',
    icon: Icons.GithubIcon,
    href: 'https://github.com/Peter3Khalil',
  },
  {
    title: 'Linkedin account',
    icon: Icons.LinkedinIcon,
    href: 'https://www.linkedin.com/in/peter-khalil-frontend-developer',
  },
  {
    title: 'Gmail account',
    icon: Icons.GmailIcon,
    href: 'mailto:peter.khalil.fahmy@gmail.com',
  },
];

export const PROJECTS: ProjectType[] = [
  {
    title: 'Admin Dashboard',
    imgSrc: 'dashboard.webp',
    description:
      'A responsive admin dashboard featuring multiple themes, designed for managing users, events, and categories. It supports comprehensive CRUD operations along with authentication and authorization.',
    skills: [
      'react',
      'nextjs',
      'typescript',
      'tailwindcss',
      'react-query',
      'react-hook-form',
      'shadcnui',
    ],
    previewLink: 'https://eventownadmin.netlify.app',
    sourceCodeLink: 'https://github.com/Peter3Khalil/event-town-dashboard',
  },
  {
    title: 'Portfolio Website for a Company',
    imgSrc: 'dynamic.webp',
    description:
      "A professional portfolio website for showcasing a company's projects and services. It includes sections for about, services, projects, and contact, with a modern and responsive design. The website also supports multiple language.",
    skills: [
      'react',
      'next.js',
      'typescript',
      'tailwindcss',
      'shadcnui',
      'framer-motion',
    ],
    previewLink: 'https://dynamicsa.co/en',
  },
  {
    title: 'Landing Page for a architectural contracting company',
    imgSrc: 'basamat.webp',
    description: `A modern and responsive landing page for an architectural contracting company. The website includes sections for about, services, and projects, with a clean and professional design.`,
    skills: [
      'react',
      'next.js',
      'typescript',
      'tailwindcss',
      'shadcnui',
      'framer-motion',
    ],
    previewLink: 'https://basmatalwosta.com',
  },
];
