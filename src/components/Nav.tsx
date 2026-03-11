import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MenuIcon, XIcon } from 'lucide-react';
const links = [
{
  name: 'Sobre',
  href: '#about'
},
{
  name: 'Experiência',
  href: '#experience'
},
{
  name: 'Projetos',
  href: '#projects'
},
{
  name: 'Contato',
  href: '#contact'
}];

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.nav
      initial={{
        opacity: 0,
        y: -20
      }}
      animate={{
        opacity: 1,
        y: 0
      }}
      transition={{
        duration: 0.8,
        ease: 'easeOut'
      }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">

      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a
          href="#"
          className="text-3xl font-bold tracking-tighter hover:text-gray-300 transition-colors">

          IM.
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-12">
          {links.map((link) =>
          <a
            key={link.name}
            href={link.href}
            className="text-sm uppercase tracking-widest text-gray-400 hover:text-white transition-colors">

              {link.name}
            </a>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}>

          {isOpen ? <XIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen &&
      <motion.div
        initial={{
          opacity: 0,
          height: 0
        }}
        animate={{
          opacity: 1,
          height: 'auto'
        }}
        exit={{
          opacity: 0,
          height: 0
        }}
        className="md:hidden bg-black border-b border-white/10">

          <div className="flex flex-col p-6 space-y-6">
            {links.map((link) =>
          <a
            key={link.name}
            href={link.href}
            className="text-2xl font-bold uppercase tracking-wider text-gray-400 hover:text-white transition-colors"
            onClick={() => setIsOpen(false)}>

                {link.name}
              </a>
          )}
          </div>
        </motion.div>
      }
    </motion.nav>);

}