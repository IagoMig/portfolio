import React from 'react';
import { Reveal } from './ui/Reveal';
export function Experience() {
  return (
    <section
      id="experience"
      className="py-24 md:py-32 px-6 border-b border-white/5">

      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="flex flex-col md:flex-row items-baseline justify-between mb-16 md:mb-24">
            <h2 className="text-7xl md:text-8xl font-bold text-white">
              CARREIRA
            </h2>
            <span className="text-gray-500 uppercase tracking-widest mt-4 md:mt-0">
              Trajetória Profissional
            </span>
          </div>
        </Reveal>

        <div className="space-y-0">
          {/* Experience Item */}
          <div className="group border-t border-white/10 py-12 transition-colors hover:bg-white/5">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-3">
                <Reveal delay={0.1}>
                  <span className="text-5xl md:text-6xl font-bold text-gray-800 group-hover:text-white transition-colors duration-500">
                    01
                  </span>
                </Reveal>
              </div>

              <div className="md:col-span-5">
                <Reveal delay={0.2}>
                  <h3 className="text-3xl font-bold text-white mb-2">
                    EG Mídia Digital
                  </h3>
                  <p className="text-gray-400 text-lg">
                    Desenvolvedor Web (PJ)
                  </p>
                </Reveal>
              </div>

              <div className="md:col-span-4 flex flex-col md:items-end">
                <Reveal delay={0.3}>
                  <span className="text-sm uppercase tracking-widest text-gray-500 mb-4 block">
                    2025 — 2026
                  </span>
                  <p className="text-gray-400 font-light text-sm md:text-right max-w-xs">
                    Desenvolvimento e manutenção de aplicações web para clientes
                    de marketing digital. Interfaces responsivas, integração de
                    APIs e soluções full-stack com frameworks JavaScript
                    modernos.
                  </p>
                </Reveal>
              </div>
            </div>
          </div>

          {/* Placeholder */}
          <div className="border-t border-white/10 py-12 opacity-30">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-3">
                <span className="text-5xl md:text-6xl font-bold text-gray-800">
                  02
                </span>
              </div>
              <div className="md:col-span-5">
                <h3 className="text-3xl font-bold text-white mb-2">
                  Próximo Capítulo
                </h3>
                <p className="text-gray-400 text-lg">Aberto a Oportunidades</p>
              </div>
              <div className="md:col-span-4 flex flex-col md:items-end">
                <span className="text-sm uppercase tracking-widest text-gray-500 mb-4 block">
                  2026 — Futuro
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}