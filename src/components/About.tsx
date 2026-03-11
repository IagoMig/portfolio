import React from 'react';
import { Reveal } from './ui/Reveal';

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 border-b border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
        <div className="md:col-span-4">
          <Reveal>
            <h2 className="text-7xl md:text-8xl font-bold text-white mb-8">
              SOBRE
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="w-full aspect-[3/4] overflow-hidden relative">
              <img
                src="/iago.png"
                alt="Iago Oliveira"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />

              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent" />
            </div>
          </Reveal>
        </div>

        <div className="md:col-span-8 flex flex-col justify-center">
          <Reveal delay={0.2}>
            <h3 className="text-3xl md:text-4xl font-light text-white mb-8 leading-tight">
              Tenho 20 anos e atuo como Desenvolvedor Full Stack em São Paulo,
              combinando domínio técnico com uma visão moderna de produto.
            </h3>
          </Reveal>

          <div className="space-y-6 text-gray-400 text-lg font-light leading-relaxed">
            <Reveal delay={0.3}>
              <p>
                Encaro o desenvolvimento como construção urbana: cada detalhe
                tem propósito, cada estrutura precisa ser sólida. Desenvolvo
                aplicações web escaláveis, performáticas e pensadas para durar.
              </p>
            </Reveal>

            <Reveal delay={0.4}>
              <p>
                Trabalho com ecossistemas modernos em React, backends robustos e
                arquiteturas em nuvem, transformando ideias complexas em soluções
                claras e bem estruturadas. Fluente em inglês e nativo em
                português, colaboro com times e projetos de diferentes contextos
                e escalas.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-2 gap-8 mt-16 border-t border-white/10 pt-8">
            <Reveal delay={0.5}>
              <div>
                <span className="block text-xs uppercase tracking-widest text-gray-500 mb-2">
                  Localização
                </span>
                <span className="text-xl text-white">São Paulo, Brasil</span>
              </div>
            </Reveal>

            <Reveal delay={0.6}>
              <div>
                <span className="block text-xs uppercase tracking-widest text-gray-500 mb-2">
                  Idiomas
                </span>
                <span className="text-xl text-white">
                  Inglês (Fluente), Português
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}