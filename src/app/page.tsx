'use client';
import AboutMe from '@/components/about-me';
import Experience from '@/components/experience';
import Header from '@/components/header';
import Hero from '@/components/hero';
import Projects from '@/components/projects';
import Skills from '@/components/skills';

const Home = () => {
  return (
    <div className="h-svh overflow-auto">
      <Header />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <AboutMe />
    </div>
  );
};

export default Home;
