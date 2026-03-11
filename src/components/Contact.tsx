import React from 'react';
import { Reveal } from './ui/Reveal';
import { GithubIcon, LinkedinIcon, MailIcon } from 'lucide-react';
export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <Reveal width="100%">
          <h2 className="text-[12vw] leading-[0.8] font-bold text-white mb-8 tracking-tighter">
            VAMOS CONVERSAR
          </h2>
        </Reveal>

        <Reveal width="100%" delay={0.2}>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-16 font-light">
            Disponível para novos projetos e colaborações. <br />
            Vamos construir algo incrível juntos.
          </p>
        </Reveal>

        <Reveal width="100%" delay={0.4}>
          <a
            href="mailto:contato@iagooliveira.dev"
            className="inline-block border border-white px-12 py-4 text-white text-lg tracking-widest hover:bg-white hover:text-black transition-all duration-300 mb-24">

            ENTRAR EM CONTATO
          </a>
        </Reveal>

        <div className="flex justify-center space-x-12 border-t border-white/10 pt-12">
          <a
            href="#"
            className="text-gray-500 hover:text-white transition-colors duration-300">

            <GithubIcon className="w-8 h-8" />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-white transition-colors duration-300">

            <LinkedinIcon className="w-8 h-8" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a
            href="mailto:contato@iagooliveira.dev"
            className="text-gray-500 hover:text-white transition-colors duration-300">

            <MailIcon className="w-8 h-8" />
            <span className="sr-only">E-mail</span>
          </a>
        </div>

        <div className="mt-12 text-gray-600 text-sm uppercase tracking-widest">
          © 2026 Iago Oliveira. Todos os direitos reservados.
        </div>
      </div>
    </section>);

}