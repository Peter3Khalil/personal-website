import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import React, { FC } from 'react';
type ProjectType = {
  title: string;
  imgSrc: string;
  index?: number;
  description: string;
  skills: string[];
  previewLink: string;
  sourceCodeLink: string;
};

const sampleProject: ProjectType = {
  title: 'Project Title',
  imgSrc: 'project.png',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisi eget tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisi eget tincidunt.',
  skills: ['react', 'typescript', 'tailwindcss', 'firebase', 'vercel', 'css'],
  previewLink: '#',
  sourceCodeLink: '#',
};

const Projects: FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <section className={cn('dark-container', className)} {...props}>
      <h2 className="section-title text-center">My Projects</h2>
      <ul className="mt-12 flex flex-col gap-5 md:gap-24 lg:gap-28">
        {Array.from({ length: 5 }).map((_, index) => (
          <li key={index}>
            <Project
              project={{ ...sampleProject, index }}
              className={cn({
                'md:flex-row-reverse': index % 2 !== 0,
              })}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

type ProjectProps = React.HTMLAttributes<HTMLDivElement> & {
  project: ProjectType;
};
const Project: FC<ProjectProps> = ({
  project: {
    title,
    imgSrc,
    index = 0,
    description,
    skills,
    previewLink,
    sourceCodeLink,
  },
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        'mx-auto flex w-full max-w-[1400px] flex-col items-center gap-x-10 gap-y-7 md:flex-row md:justify-between lg:gap-x-24',
        className,
      )}
      {...props}
    >
      <figure className="relative h-[400px] flex-1 rounded-md md:max-w-[600px]">
        <img
          src={imgSrc}
          alt="Project"
          className="size-full rounded-[inherit] object-cover"
        />
      </figure>
      <article className="max-w-[600px] flex-1 space-y-6">
        <span className="block text-2xl font-semibold leading-none">
          {String(index + 1).padStart(2, '0')}
        </span>
        <h3 className="text-2xl font-semibold leading-none">{title}</h3>
        <p className="mt-4 text-muted/70 dark:text-muted-foreground">
          {description}
        </p>
        <ul className="flex flex-wrap items-center gap-4">
          {skills.map((skill, index) => (
            <li
              key={index}
              className="rounded-md bg-accent/20 px-3 py-1 text-sm capitalize text-accent dark:bg-accent-foreground/20 dark:text-accent-foreground"
            >
              {skill}
            </li>
          ))}
        </ul>
        <menu className="flex flex-col gap-4 *:flex-1 sm:flex-row">
          <Button asChild>
            <a href={previewLink}>View</a>
          </Button>
          <Button
            variant="secondary"
            className="bg-secondary-foreground text-secondary hover:bg-secondary-foreground/80 dark:bg-secondary dark:text-secondary-foreground dark:hover:bg-secondary/80"
            asChild
          >
            <a href={sourceCodeLink}>Source Code</a>
          </Button>
        </menu>
      </article>
    </div>
  );
};

export default Projects;
