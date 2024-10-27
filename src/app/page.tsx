'use client';
import React from 'react';
import Header from '@/components/header';
import Hero from '@/components/hero';
import Skills from '@/components/skills';
import Experience from '@/components/experience';

const Home = () => {
  return (
    <div className="h-svh overflow-auto">
      <Header />
      <Hero />
      <Skills />
      <Experience />
    </div>
  );
};

export default Home;
