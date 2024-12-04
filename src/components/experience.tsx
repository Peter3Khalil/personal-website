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
        {EXPERIENCES.map(({ date, description, title }, index) => (
          <li
            key={index}
            className="mx-auto w-full max-w-[1000px] rounded border border-muted-foreground/20 bg-muted-foreground/30 px-6 py-8 dark:bg-muted/80"
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <h3 className="text-lg font-semibold md:text-xl">{title}</h3>
              <span className="text-sm font-medium text-muted/80 dark:text-muted-foreground">
                {date}
              </span>
            </div>
            <ul className="mt-6 flex flex-col gap-2 text-sm text-muted/80 dark:text-muted-foreground">
              {description.map((desc, index) => (
                <li
                  key={index}
                  className="relative flex items-start gap-2 pl-4"
                >
                  <span className="absolute left-0 top-2 size-[6px] shrink-0 rounded-full bg-white"></span>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: desc.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>'),
                    }}
                  ></p>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Experience;
