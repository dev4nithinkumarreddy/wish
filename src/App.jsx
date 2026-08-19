import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Heart, Sparkles, X, Gift, Star, Flower2 } from 'lucide-react';

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
    {[...Array(12)].map((_, i) => {
      const Icon = i % 3 === 0 ? Heart : i % 3 === 1 ? Star : Flower2;
      return (
        <motion.div
          key={i}
          className="absolute opacity-30 pointer-events-none"
          initial={{ y: "100vh", x: Math.random() * 100 + "vw" }}
          animate={{ 
            y: "-20vh",
            rotate: [0, 180, 360],
            x: `calc(${Math.random() * 100}vw + ${Math.random() * 50 - 25}px)`
          }}
          transition={{ 
            duration: Math.random() * 10 + 15,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 10
          }}
          style={{ 
            fontSize: Math.random() * 20 + 16 + "px",
            color: ['#f472b6', '#fbbf24', '#c084fc', '#fb7185'][i % 4]
          }}
        >
          <Icon fill={i % 3 !== 2 ? "currentColor" : "none"} size={Math.random() * 20 + 20} />
        </motion.div>
      )
    })}
  </>
);

const Hero = () => {
  return (
    <section className="relative min-h-[75vh] flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-rose-100 via-pink-100 to-fuchsia-100">
      <FloatingIcons />
      
      {/* Decorative Top/Bottom Borders */}
      <div className="absolute top-0 w-full h-16 bg-gradient-to-b from-white/60 to-transparent" />
      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-rose-50 to-transparent" />

      <motion.div 
        className="z-10 text-center px-6 md:px-12 backdrop-blur-md bg-white/50 py-10 md:py-16 rounded-[3rem] shadow-2xl border-4 border-white/60 mx-4 max-w-4xl relative mt-10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, type: "spring" }}
      >
        <motion.div
          animate={{ rotate: [-5, 5, -5] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="absolute -top-10 -left-6 text-rose-400"
        >
          <Flower2 size={64} fill="#fda4af" />
        </motion.div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-cursive font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-fuchsia-600 mb-6 leading-tight py-2">
          Happy Birthday, <br/>
          <span className="text-rose-500 drop-shadow-sm">{SISTER_NAME}</span>! 🎉
        </h1>
        
        <p className="text-lg md:text-2xl text-gray-700 font-sans tracking-wide font-medium">
          A special day for a very special person 💖
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-10 flex flex-col items-center gap-3 text-rose-400"
        >
          <span className="text-sm uppercase tracking-widest font-semibold">Scroll Down</span>
          <motion.div 
            animate={{ y: [0, 8, 0] }} 
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <Heart size={24} fill="currentColor" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

const Gallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  // Random rotations for a scrapbook/polaroid effect
  const rotations = [-6, 4, -8, 6, -3];

  return (
    <section className="pt-12 pb-20 px-4 md:px-12 bg-rose-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#e11d48_1px,transparent_1px)] [background-size:20px_20px]"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-10">
          <Heart className="inline-block text-rose-400 mb-4" size={40} fill="currentColor" />
          <h2 className="text-4xl md:text-6xl font-cursive font-bold text-rose-800">
            Beautiful Memories ✨
          </h2>
        </div>

        {/* Scrapbook Layout */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 pb-8 items-center">
          {PHOTOS.map((photo, index) => {
            const rot = rotations[index % rotations.length];
            return (
              <motion.div
                key={index}
                className={`relative ${photo.widthClass} flex-shrink-0 cursor-pointer group`}
                initial={{ opacity: 0, y: 50, rotate: rot - 10 }}
                whileInView={{ opacity: 1, y: 0, rotate: rot }}
                whileHover={{ scale: 1.05, rotate: 0, zIndex: 20 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                onClick={() => setSelectedPhoto(photo.url)}
                style={{ zIndex: index }}
              >
                <div className="bg-white p-3 pb-10 md:p-4 md:pb-12 rounded-lg shadow-xl border border-gray-100 transform transition-all group-hover:shadow-2xl">
                  <div className="w-full overflow-hidden rounded-md" style={{ aspectRatio: photo.aspect }}>
                    <img 
                      src={photo.url} 
                      alt={`Memory ${index + 1}`} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="absolute bottom-3 md:bottom-4 left-0 w-full text-center">
                    <Heart className="inline-block text-rose-300 opacity-50" size={16} fill="currentColor"/>
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
            className="fixed inset-0 z-50 flex items-center justify-center bg-rose-950/90 p-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
          >
            <button 
              className="absolute top-6 right-6 text-rose-200 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-md transition-colors"
              onClick={() => setSelectedPhoto(null)}
            >
              <X size={28} />
            </button>
            <motion.img 
              src={selectedPhoto} 
              className="max-w-full max-h-[90vh] rounded-xl shadow-2xl border-4 border-white/10 object-contain"
              initial={{ scale: 0.8, opacity: 0, rotate: -5 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              exit={{ scale: 0.8, opacity: 0, rotate: 5 }}
              transition={{ type: "spring", bounce: 0.4 }}
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
    <div className="space-y-6">
      {lines.map((line, lineIndex) => (
        <motion.p
          key={lineIndex}
          className="text-lg md:text-2xl text-gray-800 leading-relaxed font-sans font-medium"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: lineIndex * 0.4 }}
        >
          {line}
        </motion.p>
      ))}
    </div>
  );
};

const MessageSection = () => {
  return (
    <section className="py-20 px-4 md:px-12 flex items-center justify-center bg-white relative overflow-hidden">
      {/* Decorative blurred blobs */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-rose-50 to-white pointer-events-none" />
      <div className="absolute top-1/2 left-10 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-pulse" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-pulse" style={{ animationDelay: '2s' }} />

      <motion.div 
        className="relative z-10 max-w-3xl w-full bg-rose-50/80 backdrop-blur-xl p-10 md:p-16 rounded-[2rem] shadow-xl border-2 border-rose-100"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white px-6 py-2 rounded-full shadow-md border border-rose-100 flex items-center gap-2">
          <Star className="text-yellow-400" size={20} fill="currentColor"/>
          <span className="font-semibold text-rose-600 uppercase tracking-widest text-sm">Special Message</span>
          <Star className="text-yellow-400" size={20} fill="currentColor"/>
        </div>

        <h3 className="text-4xl md:text-5xl font-cursive text-rose-600 mb-10 text-center font-bold mt-4">
          {MESSAGE_HEADING}
        </h3>
        <TypewriterText lines={MESSAGE_LINES} />
        
        <div className="mt-12 text-right">
          <motion.div 
            className="inline-block transform -rotate-12"
            whileInView={{ rotate: [-12, -5, -12] }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            <span className="font-cursive text-3xl text-rose-500">With Love ❤️</span>
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
    
    const duration = 4 * 1000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 8,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#fb7185', '#f472b6', '#e879f9', '#fef08a']
      });
      confetti({
        particleCount: 8,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#fb7185', '#f472b6', '#e879f9', '#fef08a']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  };

  return (
    <section className="py-24 md:py-32 text-center px-4 bg-gradient-to-t from-rose-100 to-white relative">
      {!revealed ? (
        <motion.button
          onClick={triggerConfetti}
          className="group relative inline-flex items-center justify-center px-12 py-6 font-bold text-white bg-rose-500 rounded-full overflow-hidden shadow-2xl hover:shadow-rose-400/50 transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-rose-400 to-fuchsia-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          <span className="relative flex items-center gap-3 text-2xl font-sans">
            <Gift className="animate-bounce" size={28} />
            Unwrap Your Surprise!
          </span>
        </motion.button>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: "spring", bounce: 0.6 }}
          className="inline-block bg-white p-12 rounded-[2rem] shadow-2xl border-4 border-rose-200 max-w-2xl mx-auto relative"
        >
          <motion.div 
            className="absolute -top-10 -right-10 text-yellow-400"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          >
            <Sparkles size={80} />
          </motion.div>
          <p className="text-3xl md:text-5xl font-cursive text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-fuchsia-600 leading-relaxed font-bold">
            {SURPRISE_MESSAGE}
          </p>
        </motion.div>
      )}
    </section>
  );
};

const Footer = () => (
  <footer className="py-8 text-center bg-rose-900 text-rose-100">
    <p className="font-medium flex items-center justify-center gap-2 text-lg">
      Made with 
      <motion.span
        animate={{ scale: [1, 1.4, 1] }}
        transition={{ repeat: Infinity, duration: 1.2 }}
        className="text-rose-400 inline-block drop-shadow-md"
      >
        <Heart size={24} fill="currentColor" />
      </motion.span>
      by Nithin ur Thammudu
    </p>
  </footer>
);

function App() {
  return (
    <main className="overflow-x-hidden selection:bg-rose-200 selection:text-rose-900 bg-white">
      <Hero />
      <Gallery />
      <MessageSection />
      <InteractiveSection />
      <Footer />
    </main>
  );
}

export default App;
