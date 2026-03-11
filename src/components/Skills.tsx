import React from 'react';
import { Reveal } from './ui/Reveal';
const hardSkills = [
{
  category: 'Linguagens',
  items: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript']
},
{
  category: 'Frontend',
  items: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion']
},
{
  category: 'Backend & BD',
  items: ['Node.js', 'Express', 'PostgreSQL', 'MySQL']
},
{
  category: 'DevOps & Ferramentas',
  items: ['Git', 'GitHub', 'AWS', 'Docker']
}];

const softSkills = [
{
  category: 'Comunicação',
  items: [
  'Comunicação clara e objetiva',
  'Inglês fluente',
  'Documentação técnica']

},
{
  category: 'Colaboração',
  items: ['Trabalho em equipe', 'Code review', 'Metodologias ágeis (Scrum)']
},
{
  category: 'Mentalidade',
  items: ['Aprendizado contínuo', 'Proatividade', 'Atenção a detalhes']
},
{
  category: 'Gestão',
  items: [
  'Organização de tarefas',
  'Cumprimento de prazos',
  'Resolução de problemas']

}];

export function Skills() {
  return (
    <section className="py-24 md:py-32 px-6 border-b border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Hard Skills */}
        <Reveal>
          <div className="flex flex-col md:flex-row items-baseline justify-between mb-16 md:mb-24">
            <h2 className="text-7xl md:text-8xl font-bold text-white">
              SKILLS
            </h2>
            <span className="text-gray-500 uppercase tracking-widest mt-4 md:mt-0">
              Arsenal Técnico
            </span>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
          {hardSkills.map((skillGroup, index) =>
          <Reveal key={skillGroup.category} delay={index * 0.1}>
              <div>
                <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4 inline-block w-full">
                  {skillGroup.category}
                </h3>
                <ul className="space-y-4">
                  {skillGroup.items.map((item) =>
                <li
                  key={item}
                  className="text-gray-400 flex items-center group">

                      <span className="w-1.5 h-1.5 bg-gray-600 mr-3 group-hover:bg-white transition-colors duration-300 flex-shrink-0" />
                      <span className="group-hover:text-white transition-colors duration-300">
                        {item}
                      </span>
                    </li>
                )}
                </ul>
              </div>
            </Reveal>
          )}
        </div>

        {/* Soft Skills */}
        <Reveal>
          <div className="flex flex-col md:flex-row items-baseline justify-between mb-16 border-t border-white/10 pt-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white">
              SOFT SKILLS
            </h2>
            <span className="text-gray-500 uppercase tracking-widest mt-4 md:mt-0">
              Habilidades Interpessoais
            </span>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {softSkills.map((skillGroup, index) =>
          <Reveal key={skillGroup.category} delay={index * 0.1}>
              <div>
                <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4 inline-block w-full">
                  {skillGroup.category}
                </h3>
                <ul className="space-y-4">
                  {skillGroup.items.map((item) =>
                <li
                  key={item}
                  className="text-gray-400 flex items-center group">

                      <span className="w-1.5 h-1.5 bg-gray-600 mr-3 group-hover:bg-white transition-colors duration-300 flex-shrink-0" />
                      <span className="group-hover:text-white transition-colors duration-300 text-sm">
                        {item}
                      </span>
                    </li>
                )}
                </ul>
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>);

}