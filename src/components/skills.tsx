import { SKILLS } from '@/constants/data';
import { cn } from '@/lib/utils';
import React, { FC } from 'react';

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
            className="group flex h-32 flex-col items-center justify-center gap-4 rounded border-2 border-muted-foreground/20 bg-accent/40 p-4 duration-200 hover:bg-foreground hover:text-background"
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
