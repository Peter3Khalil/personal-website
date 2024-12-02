import animationData from '@/aboutMe.json';
import { cn } from '@/lib/utils';
import React, { FC } from 'react';
import Lottie, { Options } from 'react-lottie';

const AboutMe: FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  const defaultOptions: Options = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      className: 'size-full',
    },
  };
  return (
    <section
      className={cn(
        'container flex flex-col gap-8 border-t border-muted-foreground/20 md:gap-16 lg:flex-row',
        className,
      )}
      {...props}
    >
      <div className="border md:h-[500px]" style={{ transform: 'scaleX(-1)' }}>
        <Lottie options={defaultOptions} />
      </div>
      <article className="flex-1 md:max-w-[700px]">
        <h2 className="section-title">About Me</h2>
        <div className="mt-8 flex flex-col gap-4 text-muted-foreground md:gap-6 md:text-lg">
          <p>
            I’m a passionate <b>frontend developer</b> with a love for creating
            seamless, responsive, and user-friendly designs. Crafting intuitive
            user experiences and breathing life into pixels through code is what
            excites me every day.
          </p>
          <p>
            I specialize in <b>web development</b>, focusing on{' '}
            <b>responsive design</b> and ensuring every interface is not only
            functional but delightful to use. My work revolves around blending
            creativity with functionality to deliver clean, modern, and
            impactful web solutions.
          </p>
          <p>
            I’m always eager to learn new technologies and frameworks to enhance
            my skills and stay up-to-date with the latest trends in the frontend
            development world. I’m currently exploring the world of <b>React</b>{' '}
            and <b>Next.js</b> to build fast, dynamic, and{' '}
            <b>high-performing</b> web applications.
          </p>
        </div>
      </article>
    </section>
  );
};

export default AboutMe;
