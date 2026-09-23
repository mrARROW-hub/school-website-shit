import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { HERO_SLIDES } from '../data/schoolData';
import g16Fallback from '../assets/g16.jpg';

interface HeroSectionProps {
  onOpenAdmissions?: () => void;
}

const SLIDE_DURATION = 10000; // 10 seconds per image

export const HeroSection: React.FC<HeroSectionProps> = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalSlides = HERO_SLIDES.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  // Timer loop: 10 seconds per slide; resets whenever the user manually changes slides
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, SLIDE_DURATION);

    return () => clearInterval(timer);
  }, [nextSlide, currentIndex]);

  const activeSlide = HERO_SLIDES[currentIndex];
  const currentPrefix = activeSlide.headlinePrefix || 'WE REDEFINE';
  const currentHighlight = activeSlide.headlineHighlight || 'FUTURE';

  return (
    <>
      {/* 1. HERO IMAGE CAROUSEL */}
      <section
        id="hero"
        className="relative w-full aspect-[12/7] min-h-[280px] sm:min-h-0 sm:aspect-auto sm:h-[480px] md:h-[520px] lg:h-[560px] flex items-end justify-center overflow-hidden bg-[#0f172a] text-white select-none"
        aria-label="Hero Image Carousel"
      >
        {/* =========================================================================
            BACKGROUND IMAGES WITH SEAMLESS DISSOLVE INTO DARK SLATE (#0f172a)
            - Top & Bottom maskImage dissolves image boundaries completely into dark slate
            - Multi-stop gradient overlays eliminate any perceptible start or end edges
            - Object-cover ensures edge-to-edge bleed across all screen sizes
            ========================================================================= */}
        <div className="absolute inset-0 z-0 overflow-hidden bg-[#0f172a]">
          <AnimatePresence mode="sync" initial={false}>
            <motion.div
              key={activeSlide.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.0, ease: 'easeInOut' }}
              className="absolute inset-0 w-full h-full"
              style={{
                maskImage: 'linear-gradient(to bottom, black 0%, black 86%, rgba(0,0,0,0.5) 95%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 86%, rgba(0,0,0,0.5) 95%, transparent 100%)',
              }}
            >
              <img
                src={activeSlide.url}
                alt={activeSlide.alt}
                referrerPolicy="no-referrer"
                onError={(e) => {
                  if (activeSlide.id === 'slide-3') {
                    const target = e.target as HTMLImageElement;
                    if (!target.dataset.fallback) {
                      target.dataset.fallback = 'true';
                      target.src = g16Fallback;
                    }
                  }
                }}
                className="w-full h-full object-cover object-center"
                loading="eager"
              />
            </motion.div>
          </AnimatePresence>

          {/* Subtle top depth vignette (reduced to almost zero, preserves just enough contrast for nav text) */}
          <div className="absolute inset-x-0 top-0 h-20 sm:h-24 bg-gradient-to-b from-black/35 via-black/10 to-transparent pointer-events-none z-10" />

          {/* Softened Bottom Blend into Dark Slate (#0f172a) */}
          <div className="absolute inset-x-0 bottom-0 h-24 sm:h-32 md:h-40 bg-gradient-to-t from-[#0f172a] from-0% via-[#0f172a]/80 via-20% via-[#0f172a]/25 via-60% to-transparent pointer-events-none z-10" />
        </div>

        {/* =========================================================================
            HERO CONTENT FOR LARGER SCREENS (LAPTOP / DESKTOP):
            - Synchronized with active slide image
            - Stacked vertically: prefix on top, highlight on bottom
            - Zero space between them (-space-y-1 / leading-none)
            - Prefix: 23px Poppins, sans-serif, uppercase in crisp white
            - Highlight: 46px/59px Anton, sans-serif, uppercase in crisp white
            ========================================================================= */}
        <div className="hidden sm:flex relative z-10 w-full px-4 sm:px-6 md:px-8 pb-4 sm:pb-6 md:pb-8 justify-center text-center pointer-events-none">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeSlide.id}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              className="flex flex-col items-center justify-center -space-y-1 sm:-space-y-2 leading-none"
            >
              <span
                className="text-[23px] font-poppins font-semibold text-white uppercase tracking-wider leading-none m-0 p-0 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                {currentPrefix}
              </span>
              <span
                className="text-[46px] md:text-[59px] font-anton tracking-wide text-white uppercase leading-none m-0 p-0 drop-shadow-[0_3px_12px_rgba(0,0,0,0.6)]"
                style={{ fontFamily: "'Anton', sans-serif" }}
              >
                {currentHighlight}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* =========================================================================
            NAVIGATION CONTROLS — TWO ARROWS AT THE BOTTOM CORNER
            ========================================================================= */}
        <div
          className="absolute bottom-2.5 right-2.5 sm:bottom-4 sm:right-5 md:bottom-6 md:right-8 z-20 flex items-center gap-1.5 sm:gap-2"
          aria-label="Image Carousel Controls"
        >
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous image"
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/20 hover:bg-white/35 active:bg-white/50 text-white backdrop-blur-md border border-white/30 shadow-lg flex items-center justify-center transition-all hover:scale-105 cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </button>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next image"
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/20 hover:bg-white/35 active:bg-white/50 text-white backdrop-blur-md border border-white/30 shadow-lg flex items-center justify-center transition-all hover:scale-105 cursor-pointer"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </button>
        </div>
      </section>

      {/* =========================================================================
          HERO HEADLINE BANNER FOR SMALL SCREENS:
          - Changes dynamically with the slide image
          - Seamless Dark Slate (#0f172a) background matching hero bottom blend
          - Crisp white text
          - Word-wrap preserved for smaller screens
          ========================================================================= */}
      <section
        className="sm:hidden w-full bg-[#0f172a] py-6 px-4 text-center"
        aria-label="School Vision Headline"
      >
        <div className="w-full max-w-sm mx-auto flex items-center justify-center min-h-[44px]">
          <AnimatePresence mode="wait" initial={false}>
            <motion.h1
              key={activeSlide.id}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="inline-flex flex-wrap items-baseline justify-center gap-x-3 gap-y-1 text-center"
            >
              <span
                className="text-[20px] font-poppins font-semibold text-white uppercase tracking-wider leading-none drop-shadow-sm"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                {currentPrefix}
              </span>
              <span
                className="text-[34px] font-anton tracking-wide text-white uppercase leading-none drop-shadow-sm"
                style={{ fontFamily: "'Anton', sans-serif" }}
              >
                {currentHighlight}
              </span>
            </motion.h1>
          </AnimatePresence>
        </div>
      </section>
    </>
  );
};

