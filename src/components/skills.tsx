import React, { FC } from 'react';
import {
  BootstrapIcon,
  CssIcon,
  GithubIcon,
  GitIcon,
  HtmlIcon,
  JavascriptIcon,
  JestIcon,
  NextIcon,
  NodeIcon,
  NpmIcon,
  ReactIcon,
  ReduxIcon,
  SassIcon,
  TailwindIcon,
  TypescriptIcon,
} from '@/components/shared/icons';
import { cn } from '@/lib/utils';

const SKILLS = [
  {
    icon: TypescriptIcon,
    name: 'Typescript',
  },
  {
    icon: JavascriptIcon,
    name: 'Javascript',
  },
  {
    icon: ReactIcon,
    name: 'React',
  },
  {
    icon: NextIcon,
    name: 'Next.js',
  },
  {
    icon: NodeIcon,
    name: 'Node.js',
  },
  {
    icon: HtmlIcon,
    name: 'HTML',
  },
  {
    icon: CssIcon,
    name: 'CSS',
  },
  {
    icon: SassIcon,
    name: 'SASS',
  },
  {
    icon: BootstrapIcon,
    name: 'bootstrap',
  },
  {
    icon: TailwindIcon,
    name: 'Tailwind',
  },
  {
    icon: ReduxIcon,
    name: 'redux',
  },
  {
    icon: GitIcon,
    name: 'Git',
  },
  {
    icon: GithubIcon,
    name: 'Github',
  },
  {
    icon: NpmIcon,
    name: 'Npm',
  },
  {
    icon: JestIcon,
    name: 'Jest',
  },
];

const Skills: FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <section className={cn('container', className)} {...props}>
      <h2 className="text-center text-3xl font-bold lg:text-4xl">My Skills</h2>
      <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 md:gap-x-10 lg:grid-cols-6">
        {SKILLS.map(({ icon: Icon, name }, index) => (
          <li
            key={index}
            className="group flex h-32 flex-col items-center justify-center gap-4 rounded border-2 border-foreground p-4 duration-200 hover:bg-foreground hover:text-background dark:border-input"
          >
            <Icon className="h-10 fill-foreground group-hover:fill-background" />
            <b className="capitalize">{name}</b>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
