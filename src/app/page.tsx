'use client';
import Header from '@/components/header';
import Lottie, { Options } from 'react-lottie';
import animationData from '@/animation3.json';
import { useEffect, useRef, useState } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
const Home = () => {
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
    <div>
      <Header />
      <main className="container flex flex-col-reverse items-center justify-between gap-4 py-8 lg:flex-row">
        <div className="w-full">
          <div className="flex flex-col md:items-center lg:items-start">
            <span className="text-3xl font-bold lg:text-5xl">
              Hi, I&apos;m Peter.
            </span>
            <span className="text-3xl font-bold lg:text-5xl">
              <strong className="underline underline-offset-8">Software</strong>{' '}
              <span className="text-stroke">Engineer</span>
            </span>
            <span className="text-3xl font-normal lg:text-5xl">
              I build <strong className="text-nowrap">web applications</strong>.
            </span>
            <p className="mt-8 text-muted-foreground md:mx-0 md:mx-auto md:max-w-[80%] md:text-center md:text-lg lg:mx-0 lg:max-w-full lg:text-start">
              I&apos;m a software engineer with a passion for building
              user-friendly interfaces. I have experience in building
              applications using modern technologies like React, Next.js, and
              Tailwind CSS.
            </p>
          </div>
        </div>
        <div className="relative h-[300px] w-full md:h-[50vh] md:max-w-[800px] lg:h-[90vh]">
          <div ref={ref} className="size-full">
            <Lottie options={defaultOptions} />
          </div>
          {!isSvgLoaded && (
            <Skeleton className="absolute left-0 top-0 z-10 size-full" />
          )}
        </div>
      </main>
    </div>
  );
};

export default Home;
