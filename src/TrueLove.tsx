import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TrueLove: React.FC = () => {
  const [showMain, setShowMain] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-stone-950 text-white flex items-center justify-center overflow-hidden selection:bg-red-900">
      <AnimatePresence mode="wait">
        {!showMain ? (
          <motion.div
            key="intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 1 }}
            className="text-center cursor-pointer p-6"
            onClick={() => setShowMain(true)}
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-serif italic text-amber-500"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              Conoce el verdadero amor...
            </motion.h1>
            <p className="mt-8 text-stone-500 tracking-[0.4em] text-xs uppercase animate-pulse">
              Haz clic para descubrirlo
            </p>
          </motion.div>
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="flex flex-col items-center max-w-lg w-full p-4 md:p-0"
          >
            <span className="text-red-600 font-bold tracking-widest text-sm mb-6 uppercase">
              Ministerio de Adolescentes
            </span>

            <motion.div 
              className="relative rounded-lg shadow-[0_0_60px_rgba(185,28,28,0.2)] border border-stone-800 overflow-hidden"
              whileHover={{ scale: 1.01 }}
            >
              <img 
                src="/imagen-cristo.jpeg" 
                alt="El verdadero amor es Cristo" 
                className="w-full h-auto"
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-8 text-center px-4"
            >
              <h2 className="text-3xl font-bold text-amber-500 uppercase tracking-tighter">Cristo Jesús</h2>
              <p className="mt-4 italic text-stone-300 text-lg leading-relaxed border-l-2 border-amber-700 pl-4 text-balance">
                "Nadie tiene mayor amor que este, que uno ponga su vida por sus amigos."
              </p>
              <p className="mt-2 text-amber-600 font-bold tracking-widest">Juan 15:13</p>
            </motion.div>
            
            <button 
              onClick={() => setShowMain(false)}
              className="mt-10 text-[10px] text-stone-600 uppercase tracking-widest hover:text-stone-400 transition-colors"
            >
              Volver al inicio
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(120,24,24,0.1),transparent)] pointer-events-none -z-10" />
    </div>
  );
};

export default TrueLove;