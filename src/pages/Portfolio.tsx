import React from 'react';
import { Nav } from '../components/Nav';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Experience } from '../components/Experience';
import { Projects } from '../components/Projects';
import { Skills } from '../components/Skills';
import { Contact } from '../components/Contact';
export function Portfolio() {
  return (
    <div className="bg-black min-h-screen text-white selection:bg-white selection:text-black">
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>);

}