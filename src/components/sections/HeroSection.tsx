import { motion } from 'motion/react';
import { Instagram } from 'lucide-react';
import { useHeroRotation } from '@/hooks/useHeroRotation';

import heroImage from '@/assets/images/94e51b5e08ec4f34ef5848dc1c2b178de4eafb39.png';
import heroImage2 from '@/assets/images/ff086d765c04a1b70b4c18859b0c0cf504c86b05.png';
import heroImage3 from '@/assets/images/40afe14880d978598a0af0ee0b6ba4ed55549b58.png';
import eliteLogo from '@/assets/images/e038bc16e8714bdbaeb6396806f44d1ab5534c62.png';

const heroImages = [heroImage, heroImage2, heroImage3];

export default function HeroSection() {
  const currentIndex = useHeroRotation(heroImages.length);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with crossfade */}
      <div className="absolute inset-0 z-0">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <img
            src={heroImages[currentIndex]}
            alt="Deirdre Lorenz"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative z-10 text-center text-white px-4 mt-32"
      >
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-6 tracking-tight">
          DEIRDRE LORENZ
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl tracking-widest mb-8 px-2">
          ACTRESS • FILMMAKER • MODEL • PODCAST HOST
        </p>
      </motion.div>

      {/* Social links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-20 left-1/2 -translate-x-1/2 text-white z-10"
      >
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 md:gap-8">
          <div className="flex items-center gap-4 sm:gap-6">
            <motion.a
              href="https://www.instagram.com/deirdrelorenz"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="flex items-center gap-2 hover:text-gray-300 transition-colors"
            >
              <Instagram size={24} />
              <span className="text-sm tracking-wide">@deirdrelorenz</span>
            </motion.a>

            <motion.a
              href="https://www.tiktok.com/@deirdrelorenz"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="flex items-center gap-2 hover:text-gray-300 transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
              </svg>
              <span className="text-sm tracking-wide">@deirdrelorenz</span>
            </motion.a>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            <motion.a
              href="https://www.imdb.com/name/nm1255825/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="flex items-center gap-2 hover:text-gray-300 transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 48 48" fill="currentColor">
                <rect width="48" height="48" rx="4" fill="#F5C518" />
                <path d="M15.5 18h-2v12h2V18zm4 0h-2l2 12h2l-2-12zm6 0h-2v12h2V18zm8 0h-4v12h2v-8h2c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2zm0 4h-2v-2h2v2z" fill="#000000" />
              </svg>
              <span className="text-sm tracking-wide">IMDb</span>
            </motion.a>

            <motion.a
              href="https://www.elitemodels.com/new-york/atelier/8482-deirdre-lorenz"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="flex items-center gap-2 hover:text-gray-300 transition-colors"
            >
              <img
                src={eliteLogo}
                alt="Elite Models"
                className="w-[30px] h-[30px] object-contain"
              />
            </motion.a>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white"
      >
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
