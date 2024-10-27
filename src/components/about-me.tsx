import { AboutMeSvg } from '@/components/shared/svgs';
import { cn } from '@/lib/utils';
import React, { FC } from 'react';

const AboutMe: FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <section
      className={cn(
        'container flex flex-col gap-8 border-t border-muted-foreground/20 md:flex-row md:gap-16',
        className,
      )}
      {...props}
    >
      <AboutMeSvg />
      <article className="flex-1">
        <h2 className="text-3xl lg:text-4xl">
          About <b>Me</b>
        </h2>
        <div className="mt-8 flex flex-col gap-4 text-muted-foreground md:gap-6 md:text-lg">
          {Array.from({ length: 3 }).map((_, i) => (
            <p key={i}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
              omnis nam! Vel voluptatum recusandae commodi repellendus rerum
              saepe! Dolorum illo blanditiis natus ducimus neque modi possimus
              dolor repudiandae error nam. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Ratione, omnis nam! Vel voluptatum
              recusandae commodi repellendus rerum
            </p>
          ))}
        </div>
      </article>
    </section>
  );
};

export default AboutMe;
