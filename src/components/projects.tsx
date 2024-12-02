import { Button } from '@/components/ui/button';
import { PROJECTS, ProjectType } from '@/constants/data';
import { cn } from '@/lib/utils';
import React, { FC } from 'react';

const Projects: FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <section className={cn('dark-container', className)} {...props}>
      <h2 className="section-title text-center">My Projects</h2>
      <ul className="mt-12 flex flex-col gap-5 md:gap-24 lg:gap-28">
        {PROJECTS.map((project, index) => (
          <li key={index}>
            <Project
              project={{ ...project, index }}
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
      <figure className="group relative flex-1 rounded-lg border border-input/40 dark:border-input md:max-w-[600px]">
        <img
          src={'/projects/' + imgSrc}
          alt={title}
          loading="lazy"
          className="w-full rounded-lg object-cover"
        />
        <div className="absolute left-0 top-0 flex size-full items-center justify-center gap-4 rounded-lg bg-accent-foreground/50 opacity-0 duration-300 group-hover:opacity-100 dark:bg-accent/50">
          <Button asChild>
            <a href={previewLink} target="_blank" rel="noreferrer">
              View
            </a>
          </Button>
        </div>
      </figure>
      <article className="max-w-[600px] flex-1 space-y-6">
        <span className="block text-2xl font-semibold leading-none">
          {String(index + 1).padStart(2, '0')}
        </span>
        <h3 className="text-2xl font-semibold leading-none hover:underline">
          <a href={previewLink} target="_blank" rel="noreferrer">
            {title}
          </a>
        </h3>
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
        <menu className="flex gap-4">
          <Button asChild>
            <a href={previewLink} target="_blank" rel="noreferrer">
              View
            </a>
          </Button>
          {sourceCodeLink && (
            <Button
              variant="secondary"
              className="bg-accent/20 text-secondary hover:bg-accent/15 dark:bg-secondary dark:text-secondary-foreground dark:hover:bg-secondary/80"
              asChild
            >
              <a href={sourceCodeLink} target="_blank" rel="noreferrer">
                Source Code
              </a>
            </Button>
          )}
        </menu>
      </article>
    </div>
  );
};

export default Projects;
