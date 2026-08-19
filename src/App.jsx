import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Heart, Sparkles, X, Gift, Star, Flower2, Quote } from 'lucide-react';

// ==========================================
// CONFIGURATION & CONTENT - EDIT THIS!
// ==========================================
const SISTER_NAME = "Pallavi";

const PHOTOS = [
  { 
    url: `${import.meta.env.BASE_URL}photo1.png`, 
    aspect: "9/16",
    widthClass: "w-[65vw] sm:w-[45vw] md:w-[28vw] lg:w-[280px]"
  },
  { 
    url: `${import.meta.env.BASE_URL}photo2.png`, 
    aspect: "16/9",
    widthClass: "w-[85vw] sm:w-[70vw] md:w-[50vw] lg:w-[500px]"
  },
  { 
    url: `${import.meta.env.BASE_URL}photo3.jpg`, 
    aspect: "3/4",
    widthClass: "w-[70vw] sm:w-[45vw] md:w-[28vw] lg:w-[300px]"
  },
  { 
    url: `${import.meta.env.BASE_URL}photo4.jpg`, 
    aspect: "3/4",
    widthClass: "w-[70vw] sm:w-[45vw] md:w-[28vw] lg:w-[300px]"
  },
  { 
    url: `${import.meta.env.BASE_URL}photo5.jpg`, 
    aspect: "3/4",
    widthClass: "w-[70vw] sm:w-[45vw] md:w-[28vw] lg:w-[300px]"
  },
  { 
    url: `${import.meta.env.BASE_URL}photo6.png`, 
    aspect: "9/16",
    widthClass: "w-[65vw] sm:w-[45vw] md:w-[28vw] lg:w-[280px]"
  },
  { 
    url: `${import.meta.env.BASE_URL}photo7.png`, 
    aspect: "9/16",
    widthClass: "w-[65vw] sm:w-[45vw] md:w-[28vw] lg:w-[280px]"
  },
  { 
    url: `${import.meta.env.BASE_URL}photo8.png`, 
    aspect: "9/16",
    widthClass: "w-[65vw] sm:w-[45vw] md:w-[28vw] lg:w-[280px]"
  }
];

const MESSAGE_HEADING = `To my wonderful sister, ${SISTER_NAME}`;
const MESSAGE_LINES = [
  "Happy Birthday to my absolute favorite person! 🌸",
  "Growing up with you has been the greatest adventure.",
  "Thank you for always being my partner in crime, my confidante, and my biggest cheerleader.",
  "I hope this year brings you as much joy and happiness as you bring to everyone around you.",
  "Never stop shining your beautiful light!"
];

const SURPRISE_MESSAGE = `Wishing you a very Happy Birthday, ${SISTER_NAME}! 🎁✨ I couldn't have asked for a better sister. Here is to many more laughs, memories, and inside jokes. Love you so much!`;
// ==========================================

const FloatingIcons = () => (
  <>
    {[...Array(15)].map((_, i) => {
      const Icon = i % 3 === 0 ? Heart : i % 3 === 1 ? Star : Flower2;
      const isFalling = i % 2 === 0;
      return (
        <motion.div
          key={i}
          className="absolute opacity-40 pointer-events-none drop-shadow-md"
          initial={{ 
            y: isFalling ? "-20vh" : "120vh", 
            x: Math.random() * 100 + "vw",
            scale: Math.random() * 0.5 + 0.5
          }}
          animate={{ 
            y: isFalling ? "120vh" : "-20vh",
            rotate: isFalling ? [0, 360] : [0, -360],
            x: `calc(${Math.random() * 100}vw + ${Math.random() * 100 - 50}px)`
          }}
          transition={{ 
            duration: Math.random() * 15 + 20,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 10
          }}
          style={{ 
            color: ['#f472b6', '#fbbf24', '#c084fc', '#fb7185', '#fbcfe8'][i % 5]
          }}
        >
          <Icon fill={i % 3 !== 2 ? "currentColor" : "none"} size={Math.random() * 20 + 24} />
        </motion.div>
      )
    })}
  </>
);

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex flex-col items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-rose-100 via-pink-50 to-white">
      <FloatingIcons />
      
      {/* Decorative Orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-rose-200/50 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-fuchsia-200/50 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />

      <motion.div 
        className="z-10 text-center px-8 md:px-16 backdrop-blur-xl bg-white/40 py-16 rounded-[3rem] shadow-[0_20px_50px_rgba(251,113,133,0.15)] border border-white/80 mx-4 max-w-4xl relative mt-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, type: "spring", bounce: 0.4 }}
      >
        <motion.div
          animate={{ rotate: [-5, 5, -5] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="absolute -top-12 -left-8 text-rose-400 drop-shadow-lg opacity-80"
        >
          <Flower2 size={80} fill="#fda4af" />
        </motion.div>

        <motion.div
          animate={{ rotate: [5, -5, 5] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          className="absolute -bottom-10 -right-6 text-fuchsia-400 drop-shadow-lg opacity-80"
        >
          <Heart size={70} fill="#f0abfc" />
        </motion.div>

        <h1 className="text-7xl md:text-8xl lg:text-9xl font-cursive font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-fuchsia-500 to-pink-500 animate-gradient-x mb-6 leading-tight py-4 drop-shadow-sm">
          Happy Birthday, <br/>
          <span className="text-rose-600 drop-shadow-md">{SISTER_NAME}</span>! 🎉
        </h1>
        
        <p className="text-xl md:text-3xl text-gray-700 font-sans tracking-widest font-light mt-4">
          A special day for a very special person 💖
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="mt-16 flex flex-col items-center gap-4 text-rose-400"
        >
          <span className="text-sm uppercase tracking-[0.3em] font-semibold opacity-70">Scroll Down</span>
          <motion.div 
            animate={{ y: [0, 10, 0] }} 
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="p-3 bg-white/50 rounded-full shadow-sm backdrop-blur-sm border border-white"
          >
            <Heart size={24} fill="currentColor" />
          </motion.div>
        </motion.div>
      </motion.div>
      
      {/* Soft gradient transition to next section */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-rose-50 to-transparent" />
    </section>
  );
};

const Gallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  // Random rotations for a scrapbook/polaroid effect
  const rotations = [-4, 3, -6, 5, -2, 4, -5, 2];

  return (
    <section className="pt-20 pb-32 px-4 md:px-12 bg-rose-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#e11d48_1.5px,transparent_1.5px)] [background-size:24px_24px]"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ scale: 0 }} 
            whileInView={{ scale: 1 }} 
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <Heart className="text-rose-400" size={48} fill="currentColor" />
          </motion.div>
          <h2 className="text-6xl md:text-7xl font-cursive font-bold text-rose-800 drop-shadow-sm">
            Beautiful Memories ✨
          </h2>
        </div>

        {/* Scrapbook Layout */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-14 pb-8 items-center">
          {PHOTOS.map((photo, index) => {
            const rot = rotations[index % rotations.length];
            return (
              <motion.div
                key={index}
                className={`relative ${photo.widthClass} flex-shrink-0 cursor-pointer group`}
                initial={{ opacity: 0, y: 80, rotate: rot - 15 }}
                whileInView={{ opacity: 1, y: 0, rotate: rot }}
                whileHover={{ scale: 1.05, rotate: 0, zIndex: 30 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ type: "spring", stiffness: 150, damping: 15 }}
                onClick={() => setSelectedPhoto(photo.url)}
                style={{ zIndex: index }}
              >
                {/* Washi Tape Effect */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-8 bg-white/40 backdrop-blur-md rotate-[-2deg] z-20 border border-white/50 shadow-sm opacity-80 mix-blend-overlay"></div>
                
                <div className="bg-white p-3 pb-12 md:p-5 md:pb-16 rounded-sm shadow-xl border border-gray-100 transform transition-all group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] relative">
                  <div className="w-full overflow-hidden rounded-sm" style={{ aspectRatio: photo.aspect }}>
                    <img 
                      src={photo.url} 
                      alt={`Memory ${index + 1}`} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="absolute bottom-4 left-0 w-full text-center flex justify-center items-center gap-2 opacity-40">
                    <Star size={12} fill="#f43f5e" className="text-rose-500" />
                    <Heart className="text-rose-500" size={16} fill="currentColor"/>
                    <Star size={12} fill="#f43f5e" className="text-rose-500" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-rose-950/90 p-4 backdrop-blur-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
          >
            <button 
              className="absolute top-6 right-6 text-rose-200 hover:text-white bg-white/10 hover:bg-white/20 p-4 rounded-full backdrop-blur-md transition-colors shadow-lg"
              onClick={() => setSelectedPhoto(null)}
            >
              <X size={32} />
            </button>
            <motion.img 
              src={selectedPhoto} 
              className="max-w-full max-h-[90vh] rounded-xl shadow-2xl border-4 border-white/20 object-contain"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", bounce: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const TypewriterText = ({ lines }) => {
  return (
    <div className="space-y-6 md:space-y-8 relative z-10">
      <Quote className="absolute -top-6 -left-6 text-rose-200 opacity-50 rotate-180" size={64} fill="currentColor" />
      {lines.map((line, lineIndex) => (
        <motion.p
          key={lineIndex}
          className="text-xl md:text-3xl text-gray-800 leading-relaxed font-sans font-light text-center px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: lineIndex * 0.4 }}
        >
          {line}
        </motion.p>
      ))}
      <Quote className="absolute -bottom-10 -right-2 text-rose-200 opacity-50" size={64} fill="currentColor" />
    </div>
  );
};

const MessageSection = () => {
  return (
    <section className="py-24 px-4 md:px-12 flex items-center justify-center bg-white relative overflow-hidden">
      {/* Decorative blurred blobs */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-rose-50 to-white pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-pink-100 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-pulse-slow" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-rose-100 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-pulse-slow" style={{ animationDelay: '2s' }} />

      <motion.div 
        className="relative z-10 max-w-4xl w-full bg-rose-50/60 backdrop-blur-2xl p-12 md:p-20 rounded-[3rem] shadow-2xl border border-rose-100/50"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white px-8 py-3 rounded-full shadow-lg border border-rose-100 flex items-center gap-3">
          <Star className="text-yellow-400" size={24} fill="currentColor"/>
          <span className="font-semibold text-rose-600 uppercase tracking-[0.2em] text-sm md:text-base">A Letter For You</span>
          <Star className="text-yellow-400" size={24} fill="currentColor"/>
        </div>

        <h3 className="text-5xl md:text-7xl font-cursive text-rose-600 mb-14 text-center font-bold mt-8 drop-shadow-sm">
          {MESSAGE_HEADING}
        </h3>
        
        <TypewriterText lines={MESSAGE_LINES} />
        
        <div className="mt-16 text-right border-t border-rose-200/50 pt-8">
          <motion.div 
            className="inline-block transform -rotate-6 mr-4 md:mr-10"
            whileInView={{ rotate: [-6, 0, -6] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            <span className="font-cursive text-5xl text-rose-500 drop-shadow-sm">With Love ❤️</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

const InteractiveSection = () => {
  const [revealed, setRevealed] = useState(false);

  const triggerConfetti = () => {
    setRevealed(true);
    
    const duration = 5 * 1000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 10,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#fb7185', '#f472b6', '#e879f9', '#fef08a', '#fda4af']
      });
      confetti({
        particleCount: 10,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#fb7185', '#f472b6', '#e879f9', '#fef08a', '#fda4af']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  };

  return (
    <section className="py-32 md:py-48 text-center px-4 bg-gradient-to-t from-rose-100 to-white relative overflow-hidden">
      {!revealed ? (
        <motion.button
          onClick={triggerConfetti}
          className="group relative inline-flex items-center justify-center px-14 py-8 font-bold text-white bg-rose-500 rounded-full overflow-hidden shadow-[0_15px_40px_rgba(244,63,94,0.4)] hover:shadow-[0_20px_50px_rgba(244,63,94,0.6)] transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-rose-400 to-fuchsia-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
          <span className="relative flex items-center gap-4 text-3xl font-sans tracking-wide">
            <Gift className="animate-bounce" size={36} />
            Unwrap Your Surprise!
          </span>
        </motion.button>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: "spring", bounce: 0.6, duration: 1 }}
          className="inline-block bg-white/90 backdrop-blur-md p-14 rounded-[3rem] shadow-2xl border-4 border-rose-200 max-w-3xl mx-auto relative"
        >
          <motion.div 
            className="absolute -top-12 -right-12 text-yellow-400 drop-shadow-lg"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
          >
            <Sparkles size={100} fill="currentColor" />
          </motion.div>
          <motion.div 
            className="absolute -bottom-10 -left-10 text-rose-400 drop-shadow-lg"
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
          >
            <Flower2 size={80} fill="currentColor" />
          </motion.div>
          
          <p className="text-4xl md:text-6xl font-cursive text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-fuchsia-500 to-pink-500 animate-gradient-x leading-tight font-bold">
            {SURPRISE_MESSAGE}
          </p>
        </motion.div>
      )}
    </section>
  );
};

const Footer = () => (
  <footer className="py-12 text-center bg-rose-950 text-rose-100/80">
    <p className="font-medium flex items-center justify-center gap-3 text-xl font-sans tracking-wider">
      Made with 
      <motion.span
        animate={{ scale: [1, 1.4, 1] }}
        transition={{ repeat: Infinity, duration: 1.2 }}
        className="text-rose-400 inline-block drop-shadow-[0_0_10px_rgba(251,113,133,0.5)]"
      >
        <Heart size={28} fill="currentColor" />
      </motion.span>
      by Nithin ur Thammudu
    </p>
  </footer>
);

function App() {
  return (
    <main className="overflow-x-hidden selection:bg-rose-200 selection:text-rose-900 bg-white min-h-screen">
      <Hero />
      <Gallery />
      <MessageSection />
      <InteractiveSection />
      <Footer />
    </main>
  );
}

export default App;
