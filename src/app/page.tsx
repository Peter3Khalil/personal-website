'use client';
import Header from '@/components/header';
import Hero from '@/components/hero';
import {
  BootstrapIcon,
  CssIcon,
  GithubIcon,
  GitIcon,
  JavascriptIcon,
  NpmIcon,
  ReactIcon,
  ReduxIcon,
  TailwindIcon,
  TypescriptIcon,
} from '@/components/shared/icons';

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
    icon: CssIcon,
    name: 'Css',
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
    icon: ReactIcon,
    name: 'React',
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
];

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <section className="container py-8">
        <h2 className="text-center text-3xl font-bold">My Skills</h2>
        <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7">
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
    </div>
  );
};

export default Home;
