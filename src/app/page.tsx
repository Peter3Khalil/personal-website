'use client';
import AboutMe from '@/components/about-me';
import Contact from '@/components/contact';
import Experience from '@/components/experience';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Hero from '@/components/hero';
import Projects from '@/components/projects';
import Skills from '@/components/skills';

const Home = () => {
  return (
    <div className="h-svh overflow-auto">
      <Header />
      <Hero id="home" />
      <Skills id="skills" />
      <Experience id="experience" />
      <AboutMe id="about" />
      <Projects id="projects" />
      <Contact id="contact" />
      <Footer />
    </div>
  );
};

export default Home;
