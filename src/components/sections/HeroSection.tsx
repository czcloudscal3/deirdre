import { motion } from 'motion/react';
import { Instagram } from 'lucide-react';
import { useHeroRotation } from '@/hooks/useHeroRotation';

import heroImage from '@/assets/images/hero/slide_1.png';
import heroImage2 from '@/assets/images/hero/slide_2.png';
import heroImage3 from '@/assets/images/hero/slide_3.png';
import heroImage4 from '@/assets/images/hero/slide_4.png';
import heroImage5 from '@/assets/images/hero/slide_5.png';
import eliteLogo from '@/assets/images/hero/elite_logo.png';

const heroImages = [heroImage2, heroImage, heroImage5, heroImage3, heroImage4];

export default function HeroSection() {
  const currentIndex = useHeroRotation(heroImages.length);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with crossfade */}
      <div
        className={`absolute inset-0 z-0 ${currentIndex >= 3 ? 'bg-black' : ''}`}
      >
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className={
            currentIndex >= 3
              ? 'absolute inset-0 md:flex md:items-start md:justify-center'
              : 'absolute inset-0'
          }
        >
          <img
            src={heroImages[currentIndex]}
            alt="Deirdre Lorenz"
            className={
              currentIndex === 0
                ? 'w-full h-full object-cover object-[50%_40%]'
                : currentIndex >= 3
                  ? 'w-full h-full object-cover object-top md:w-auto md:h-full md:object-contain'
                  : 'w-full h-full object-cover'
            }
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />
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
        className="absolute bottom-28 left-1/2 -translate-x-1/2 text-white z-10 w-full max-w-md md:max-w-2xl px-4 sm:px-0 sm:-mt-10"
      >
        <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-5 sm:gap-6 md:gap-8">
          <motion.a
            href="https://www.instagram.com/deirdrelorenz"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-2 hover:text-gray-300 transition-colors min-w-[44px] min-h-[44px]"
          >
            <Instagram className="w-10 h-10 sm:w-12 sm:h-12 shrink-0" />
            <span className="text-xs sm:text-sm tracking-wide hidden sm:inline">@deirdrelorenz</span>
          </motion.a>

          <motion.a
            href="https://www.youtube.com/@UpgradedWithDeirdreLorenz"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-2 hover:text-gray-300 transition-colors min-w-[44px] min-h-[44px]"
          >
            <svg className="w-10 h-10 sm:w-12 sm:h-12 shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            <span className="text-xs sm:text-sm tracking-wide hidden sm:inline">YouTube</span>
          </motion.a>

          <motion.a
            href="https://www.tiktok.com/@deirdrelorenz"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-2 hover:text-gray-300 transition-colors min-w-[44px] min-h-[44px]"
          >
            <svg className="w-10 h-10 sm:w-12 sm:h-12 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
            </svg>
            <span className="text-xs sm:text-sm tracking-wide hidden sm:inline">@deirdrelorenz</span>
          </motion.a>

          <motion.a
            href="https://www.imdb.com/name/nm1255825/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-2 hover:text-gray-300 transition-colors min-w-[44px] min-h-[44px]"
          >
            <svg className="w-10 h-10 sm:w-12 sm:h-12 shrink-0" viewBox="0 0 48 48" fill="currentColor">
              <rect width="48" height="48" rx="4" fill="#F5C518" />
              <path d="M15.5 18h-2v12h2V18zm4 0h-2l2 12h2l-2-12zm6 0h-2v12h2V18zm8 0h-4v12h2v-8h2c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2zm0 4h-2v-2h2v2z" fill="#000000" />
            </svg>
            <span className="text-xs sm:text-sm tracking-wide hidden sm:inline">IMDb</span>
          </motion.a>

          <motion.a
            href="https://www.elitemodels.com/new-york/atelier/8482-deirdre-lorenz"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-2 hover:text-gray-300 transition-colors min-w-[44px] min-h-[44px]"
          >
            <img
              src={eliteLogo}
              alt="Elite Models"
              className="w-10 h-10 sm:w-12 sm:h-12 object-contain shrink-0"
            />
          </motion.a>
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
