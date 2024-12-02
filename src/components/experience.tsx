import { EXPERIENCES } from '@/constants/data';
import { cn } from '@/lib/utils';
import React, { FC } from 'react';

const Experience: FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <section className={cn('dark-container', className)} {...props}>
      <h2 className="section-title text-center">My Experience</h2>
      <ul className="mt-12 flex flex-col gap-4">
        {EXPERIENCES.map(({ date, description, icon: Icon, title }, index) => (
          <li
            key={index}
            className="mx-auto w-full max-w-[1000px] rounded border border-muted-foreground/20 bg-muted-foreground/30 px-6 py-8 dark:bg-muted/80"
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-7">
                {Icon && (
                  <Icon className="size-8 shrink-0 fill-background dark:fill-foreground" />
                )}
                <h3 className="text-lg font-semibold md:text-xl">{title}</h3>
              </div>
              <span className="text-sm font-medium text-muted/80 dark:text-muted-foreground">
                {date}
              </span>
            </div>
            <ul className="mt-6 flex list-inside list-disc flex-col gap-2 text-sm text-muted/80 dark:text-muted-foreground">
              {description.map((desc, index) => (
                <li
                  key={index}
                  dangerouslySetInnerHTML={{
                    __html: desc.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>'),
                  }}
                ></li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Experience;
