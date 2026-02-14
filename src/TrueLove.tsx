import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TrueLove: React.FC = () => {
  const [showMain, setShowMain] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-stone-950 text-white flex flex-col items-center overflow-x-hidden selection:bg-red-900 selection:text-white">
      <AnimatePresence mode="wait">
        {!showMain ? (
          <motion.div
            key="intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 1.2 }}
            className="flex flex-col items-center justify-center min-h-screen text-center p-6 cursor-pointer"
            onClick={() => setShowMain(true)}
          >
            <motion.h1 
              className="text-4xl md:text-7xl font-serif italic text-amber-500 mb-4"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ repeat: Infinity, duration: 4 }}
            >
              Conoce el verdadero amor...
            </motion.h1>
            <p className="text-stone-500 tracking-[0.5em] text-xs uppercase animate-pulse mt-4">
              Haz clic para descubrirlo
            </p>
          </motion.div>
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="max-w-4xl w-full p-4 md:p-6 md:py-12 flex flex-col items-center"
          >
            <motion.span 
              initial={{ y: -20 }} animate={{ y: 0 }}
              className="text-red-600 font-bold tracking-[0.3em] text-sm mb-8 uppercase"
            >
              Ministerio de Adolescentes
            </motion.span>

            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="relative rounded-2xl shadow-[0_0_50px_rgba(185,28,28,0.2)] border border-stone-800 overflow-hidden mb-10 w-full"
            >
              <img 
                src="/Imagen.jpg" 
                alt="El verdadero amor es Jesús" 
                className="w-full h-auto object-contain"
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6 text-center"
            >
              <h2 className="text-4xl font-bold text-amber-500 font-serif">El Verdadero Amor es Jesús</h2>
              
              <div className="text-lg text-stone-300 leading-relaxed space-y-4 text-pretty">
                <p>
                  Hoy muchas personas celebran el amor con flores, regalos y palabras bonitas. 
                  Pero el verdadero amor no comenzó en una tienda ni en una fecha especial. 
                  <strong> El verdadero amor se demostró en una cruz.</strong>
                </p>
                
                <p className="bg-stone-900/50 p-4 rounded-lg italic border-l-4 border-amber-600">
                  "En esto conocemos el amor: en que Jesucristo puso su vida por nosotros." <br/>
                  <span className="text-amber-500 font-bold not-italic">— 1 Juan 3:16</span>
                </p>

                <p>
                  Jesús no murió por obligación, ni por error, ni porque lo forzaron. Él decidió dar su vida por amor a nosotros. 
                  Cuando estábamos lejos de Dios, Él tomó nuestro lugar. Llevó nuestro pecado, nuestro dolor y nuestra culpa.
                </p>

                <p className="text-amber-100 font-medium">
                  Y no solo murió… resucitó, venciendo la muerte para darnos vida eterna.
                </p>

                <p>
                  Hoy puedes aceptar ese amor. Jesús te ama, dio su vida por ti y quiere darte una nueva oportunidad.
                </p>

                <h3 className="text-2xl font-semibold text-red-500 pt-4">
                  El verdadero amor tiene nombre: <br className="md:hidden"/> Jesús nuestro salvador.
                </h3>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="mt-16 w-full border-t border-stone-800 pt-10 text-center"
            >
              <p className="text-amber-500 font-bold text-xl mb-2">Te esperamos todos los Sábados</p>
              <p className="text-white text-2xl font-serif mb-8">Iglesia SALEM 🫰🏻</p>

              <div className="bg-red-950/20 p-6 rounded-2xl border border-red-900/30">
                <p className="text-sm uppercase tracking-widest text-stone-400 mb-4">¡Comparte tu obsequio!</p>
                <p className="text-stone-300 mb-6">Etiquétanos en nuestras redes sociales:</p>
                
                <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                  <a href="https://www.instagram.com/ministerio_de_adolescente?igsh=MWhzbmVrZ2V4M2Z1dg==" target="_blank" className="bg-gradient-to-tr from-yellow-500 via-red-500 to-purple-500 px-6 py-2 rounded-full font-bold hover:scale-105 transition-transform">
                    Instagram
                  </a>
                  <a href="https://www.facebook.com/share/1HDNvzzCnZ/" target="_blank" className="bg-blue-700 px-6 py-2 rounded-full font-bold hover:scale-105 transition-transform">
                    Facebook
                  </a>
                </div>
              </div>
            </motion.div>

            <button 
              onClick={() => { window.scrollTo(0,0); setShowMain(false); }}
              className="my-12 text-xs text-stone-600 hover:text-stone-400 uppercase tracking-widest transition-colors"
            >
              Volver al inicio
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(185,28,28,0.08),transparent)] pointer-events-none -z-10" />
    </div>
  );
};

export default TrueLove;