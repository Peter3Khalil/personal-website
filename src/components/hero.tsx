'use client';
import { GithubIcon, GmailIcon, LinkedinIcon } from '@/components/shared/icons';
import DotPattern from '@/components/ui/dot-pattern';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';
import animationData from '@/userInterface.json';
import React, { FC, useEffect, useRef, useState } from 'react';
import Lottie, { Options } from 'react-lottie';

const SOCIAL_LINKS = [
  {
    title: 'Github account',
    icon: GithubIcon,
    href: 'https://github.com/Peter3Khalil',
  },
  {
    title: 'Linkedin account',
    icon: LinkedinIcon,
    href: 'https://www.linkedin.com/in/peter-khalil-frontend-developer',
  },
  {
    title: 'Gmail account',
    icon: GmailIcon,
    href: 'mailto:peter.khalil.fahmy@gmail.com',
  },
];

const Hero: FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  const [isSvgLoaded, setIsSvgLoaded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const defaultOptions: Options = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      className: 'size-full',
    },
  };

  useEffect(() => {
    if (ref.current?.innerHTML) {
      setIsSvgLoaded(true);
    }
  }, []);
  return (
    <main
      className={cn(
        'container relative flex flex-col-reverse items-center justify-between gap-4 bg-accent py-8 lg:flex-row',
        className,
      )}
      {...props}
    >
      <section className="flex w-full flex-col sm:items-center lg:items-start">
        <div className="flex max-w-lg flex-col sm:text-center lg:max-w-full lg:text-start">
          <span className="text-3xl lg:text-5xl">
            Hi, I&apos;m <b>Peter</b>.
          </span>
          <b className="text-3xl lg:text-5xl">Software Engineer</b>
          <span className="text-3xl font-normal lg:text-5xl">
            I build{' '}
            <strong className="text-nowrap capitalize text-primary dark:text-primary-foreground">
              web apps
            </strong>
            .
          </span>
          <p className="mt-8 text-muted-foreground md:text-lg">
            I&apos;m a software engineer with a passion for building
            user-friendly interfaces. I have experience in building applications
            using modern technologies like <b>Typescript</b>, <b>React</b>,{' '}
            <b>Next.js</b>, and <b>Tailwind CSS</b>.
          </p>
        </div>
        <ul className="mt-12 flex flex-wrap items-center gap-4">
          {SOCIAL_LINKS.map(({ href, title, icon: Icon }, index) => (
            <li
              key={index}
              className="group size-8 rounded border-2 border-foreground duration-200 hover:bg-foreground"
            >
              <a
                href={href}
                target="_blank"
                title={title}
                className="block size-full p-1"
              >
                <Icon className="fill-foreground group-hover:fill-background" />
              </a>
            </li>
          ))}
        </ul>
      </section>
      <section className="relative h-[300px] w-full sm:h-[70vh] md:max-w-[800px] lg:h-[90vh]">
        <div ref={ref} className="size-full">
          <Lottie options={defaultOptions} />
        </div>
        {!isSvgLoaded && (
          <Skeleton className="absolute left-0 top-0 z-10 size-full bg-accent-foreground/10" />
        )}
      </section>
      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        r={1}
        className={cn(
          '[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]',
        )}
      />
    </main>
  );
};

export default Hero;
