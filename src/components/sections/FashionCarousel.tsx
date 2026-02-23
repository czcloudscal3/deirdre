import { useRef, useState, useEffect, useCallback } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface FashionCarouselProps {
  images: string[];
}

export default function FashionCarousel({ images }: FashionCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 1);
  }, []);

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, [checkScroll, images.length]);

  const scroll = (direction: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.8;
    el.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth',
    });
    setTimeout(checkScroll, 400);
  };

  return (
    <div className="relative group">
      <div
        ref={scrollRef}
        onScroll={checkScroll}
        className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide snap-x snap-mandatory py-2 -mx-4 px-4 sm:-mx-6 sm:px-6"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {images.map((src, index) => (
          <motion.div
            key={src}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="shrink-0 w-[280px] sm:w-[320px] md:w-[360px] aspect-3/4 overflow-hidden rounded-lg snap-center"
          >
            <img
              src={src}
              alt={`Fashion portfolio ${index + 1}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        ))}
      </div>

      {/* Navigation buttons - visible on hover for desktop */}
      <button
        onClick={() => scroll('left')}
        onFocus={checkScroll}
        aria-label="Previous"
        className={`absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity md:opacity-100 md:bg-white/80 ${!canScrollLeft ? 'md:opacity-30 md:cursor-not-allowed' : 'hover:bg-white'}`}
        disabled={!canScrollLeft}
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={() => scroll('right')}
        onFocus={checkScroll}
        aria-label="Next"
        className={`absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity md:opacity-100 md:bg-white/80 ${!canScrollRight ? 'md:opacity-30 md:cursor-not-allowed' : 'hover:bg-white'}`}
        disabled={!canScrollRight}
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}
