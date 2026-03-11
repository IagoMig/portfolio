import React from 'react';
import { Reveal } from './ui/Reveal';
import { ArrowUpRightIcon } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Sistema de Pedidos · Los Potatos',
    category: 'Aplicação Full Stack',
    tech: ['React', 'Node.js', 'PostgreSQL'],
    description:
      'Sistema completo de pedidos online, com gerenciamento de produtos, acompanhamento em tempo real e painel administrativo.',
    link: 'https://los-potatos.vercel.app',
    image: '/projects/los-potatos.jpg'
  },
  {
    id: 2,
    title: 'Site & Blog · Estética Automotiva',
    category: 'Website Institucional',
    tech: ['React', 'Tailwind', 'SEO'],
    description:
      'Site institucional com blog integrado, desenvolvido para fortalecer a presença digital da marca e melhorar o posicionamento nos buscadores.',
    link: 'https://www.lideresteticaautomotiva.com.br',
    image: '/projects/lider-estetica.jpg'
  },
  {
    id: 3,
    title: 'EG Mídia Digital',
    category: 'Website Corporativo',
    tech: ['React', 'TypeScript', 'Tailwind'],
    description:
      'Website corporativo criado para agência digital, com foco em apresentação de serviços, identidade visual moderna e conversão de leads.',
    link: 'https://egmidiagitial.com.br',
    image: '/projects/eg-midia.jpg'
  },
  {
    id: 4,
    title: 'AlarSeg',
    category: 'Website Institucional',
    tech: ['React', 'JavaScript', 'Tailwind'],
    description:
      'Site institucional para empresa de segurança, com comunicação objetiva, layout profissional e navegação clara.',
    link: 'https://alarseg.vercel.app',
    image: '/projects/alarseg.jpg'
  },
  {
    id: 5,
    title: 'Cardápio Digital · Pizzaria Fornalha',
    category: 'Aplicação Web',
    tech: ['React', 'CSS', 'UX/UI'],
    description:
      'Cardápio digital interativo desenvolvido para facilitar a visualização dos produtos, preços e melhorar a experiência do cliente.',
    link: 'https://fornalha.vercel.app',
    image: '/projects/fornalha.jpg'
  }
];

export function Projects() {
  return (
    <section
      id="projects"
      className="py-24 md:py-32 px-6 border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="flex flex-col md:flex-row items-baseline justify-between mb-16 md:mb-24">
            <h2 className="text-7xl md:text-8xl font-bold text-white">
              PROJETOS
            </h2>
            <span className="text-gray-500 uppercase tracking-widest mt-4 md:mt-0">
              Trabalhos Selecionados
            </span>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.1}>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-gray-900/20 border border-white/10 hover:border-white/40 transition-all duration-500 h-full flex flex-col"
              >
                {/* IMAGEM DO PROJETO */}
                <div className="w-full aspect-video overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />

                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500" />

                  <div className="absolute top-4 right-4">
                    <ArrowUpRightIcon className="w-5 h-5 text-white opacity-70 group-hover:opacity-100 transition-opacity" />
                  </div>

                  <div className="absolute bottom-4 left-4 text-6xl font-bold text-black/30 select-none">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>

                {/* CONTEÚDO */}
                <div className="p-8 flex-1 flex flex-col">
                  <span className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">
                    {project.category}
                  </span>

                  <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-gray-200 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 font-light mb-8 flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs border border-white/10 px-3 py-1 text-gray-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}