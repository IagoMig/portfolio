import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownIcon } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 pt-20 overflow-hidden">
  
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'grayscale(100%) contrast(1.2) brightness(0.25)'
        }} />

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black z-0" />
      <div className="absolute inset-0 z-0 bg-black" />

      <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '128px 128px'
        }} />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-gray-400 uppercase tracking-[0.2em] text-sm md:text-base mb-4">
            São Paulo · Brasil
          </p>
        </motion.div>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{
              duration: 1,
              ease: [0.33, 1, 0.68, 1],
              delay: 0.3
            }}
            className="text-[15vw] leading-[0.85] font-bold text-white tracking-tighter"
          >
            IAGO
          </motion.h1>
        </div>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{
              duration: 1,
              ease: [0.33, 1, 0.68, 1],
              delay: 0.45
            }}
            className="text-[15vw] leading-[0.85] font-bold text-gray-300 tracking-tighter"
          >
            OLIVEIRA
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-12 flex flex-col md:flex-row md:items-end justify-between border-t border-white/20 pt-8"
        >
          <div className="max-w-md">
            <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed">
              Desenvolvedor Full Stack focado em criar experiências digitais
              sólidas, modernas e com identidade.
            </p>
          </div>

          <div className="mt-8 md:mt-0">
            <p className="text-sm text-gray-400 uppercase tracking-widest">
              Aberto a projetos e freelances!
            </p>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400">
          Role para explorar
        </span>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: 'easeInOut'
          }}
        >
          <ArrowDownIcon className="w-4 h-4 text-white" />
        </motion.div>
      </motion.div>
    </section>
  );
}