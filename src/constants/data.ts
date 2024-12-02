import * as Icons from '@/components/shared/icons';
export type ProjectType = {
  title: string;
  imgSrc: string;
  index?: number;
  description: string;
  skills: string[];
  previewLink: string;
  sourceCodeLink: string;
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
    icon: Icons.GithubIcon,
    title: 'Software Engineer at Github',
    date: '2019 - Present',
    description: [
      "**Played** a pivotal role in developing innovative solutions for Google's core search algorithms.",
      '**Collaborated** with a dynamic team of engineers to enhance search accuracy and efficiency.',
      '**Optimized** user experiences for millions of users worldwide.',
    ],
  },
  {
    title: 'Software Engineer at Github',
    date: '2019 - Present',
    description: [
      "**Played** a pivotal role in developing innovative solutions for Google's core search algorithms.",
      '**Collaborated** with a dynamic team of engineers to enhance search accuracy and efficiency.',
      '**Optimized** user experiences for millions of users worldwide.',
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
      'typescript',
      'tailwindcss',
      'react-query',
      'react-hook-form',
      'shadcnui',
    ],
    previewLink: 'https://eventownadmin.netlify.app',
    sourceCodeLink: 'https://github.com/Peter3Khalil/event-town-dashboard',
  },
];
