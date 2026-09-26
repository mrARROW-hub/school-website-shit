import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Plus, Image as ImageIcon } from 'lucide-react';
import { ScrollPopContourWave } from './DecorativeShapes';

interface ValueItem {
  id: string;
  title: string[];
  leadIn: string;
  description: string;
  tag: string;
}

const VALUES_DATA: ValueItem[] = [
  {
    id: 'relational-teaching',
    title: ['RELATIONAL', 'TEACHING'],
    leadIn: 'We pair our intimate and highly relational teaching, coaching, and advising models',
    description: 'with programmatic scale and a broad community spirit.',
    tag: 'Academic Mentorship'
  },
  {
    id: 'balanced-worldview',
    title: ['BALANCED', 'WORLDVIEW'],
    leadIn: 'We challenge students who see the world in remarkably different ways',
    description: 'to engage confidently in civil discourse and foster productive relationships within our community and beyond.',
    tag: 'Perspective & Ethics'
  },
  {
    id: 'real-world-learning',
    title: ['REAL-WORLD', 'LEARNING'],
    leadIn: 'We create opportunities for students to transfer theoretical knowledge to problem-based scenarios',
    description: 'that are immersive and interdisciplinary, with instructional time spent learning outside the traditional classroom setting.',
    tag: 'Experiential & Action'
  }
];

export const WeMoveSection: React.FC = () => {
  const [activeCardId, setActiveCardId] = useState<string | null>(null);
  const [currentVisibleIndex, setCurrentVisibleIndex] = useState<number>(0);

  // Monitor which card is in view as the user scrolls down the page
  useEffect(() => {
    const handleScroll = () => {
      const cards = VALUES_DATA.map((card) => document.getElementById(`we-move-card-${card.id}`));
      const viewportMiddle = window.innerHeight * 0.45;

      cards.forEach((cardEl, idx) => {
        if (!cardEl) return;
        const rect = cardEl.getBoundingClientRect();
        if (rect.top <= viewportMiddle && rect.bottom >= viewportMiddle) {
          setCurrentVisibleIndex(idx);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="we-move-with-the-world"
      className="relative w-full"
      style={{
        // Shady Side Academy exact background split: #F2F3EE on the left, #FFFFFF on the right for desktop
        background: 'linear-gradient(to right, #F2F3EE 0%, #F2F3EE 50%, #ffffff 50%, #ffffff 100%)'
      }}
    >
      {/* Background & Edge Decorator container with overflow-hidden - scoped as sibling so it NEVER breaks sticky on section */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Authentic Shady Side Academy coiled ruled twist popping out from right edge (Image 4 exact) */}
        <ScrollPopContourWave
          align="right"
          variant="ruled-twist"
          color="#1FFF01"
          linesCount={18}
          topPosition="top-28 sm:top-36"
          className="opacity-90"
        />

        {/* Mobile background fallback: seamless neutral #F2F3EE */}
        <div className="lg:hidden absolute inset-0 bg-[#F2F3EE] -z-10" />
      </div>

      <div className="max-w-[1540px] mx-auto relative z-10">
        {/* On larger screens (lg+), section is divided into 2 equal parts:
            Left part: Images stay in their column on the left as the user scrolls
            Right part: Heading moves with the screen (locked in viewport) till section completes */}
        <div className="flex flex-col lg:flex-row items-start relative">
          
          {/* =========================================================================
              LEFT PART: BLANK IMAGES (Exact SSA shape cutouts, stays on place in column)
              User scrolls through the 3 cards naturally down the page
              ========================================================================= */}
          <div className="order-2 lg:order-1 w-full lg:w-1/2 flex flex-col gap-24 sm:gap-32 lg:gap-40 py-16 sm:py-24 lg:py-32 px-4 sm:px-8 lg:pl-12 lg:pr-8 xl:pr-12">
            {VALUES_DATA.map((card, idx) => {
              const isOpen = activeCardId === card.id;

              return (
                <div
                  key={card.id}
                  id={`we-move-card-${card.id}`}
                  className="relative group w-full max-w-[620px] mx-auto"
                >
                  {/* Outer Shaped Card Wrapper with Blank Image Space */}
                  <div
                    onClick={() => setActiveCardId(isOpen ? null : card.id)}
                    className="relative w-full h-[450px] sm:h-[520px] lg:h-[560px] rounded-[28px] overflow-hidden shadow-xl cursor-pointer select-none bg-gradient-to-br from-[#ECEEE8] via-[#E2E4DC] to-[#D5D8CF] border-2 border-dashed border-[#041E42]/15 transition-all duration-500 hover:scale-[1.01]"
                  >
                    {/* =======================================================
                        1. BLANK IMAGE CANVAS (Blank on EVERY screen size)
                        Clean architectural drafting grid & crosshairs
                        ======================================================= */}
                    <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center p-6">
                      {/* Architectural Grid Lines */}
                      <div
                        className="absolute inset-0 opacity-25 pointer-events-none"
                        style={{
                          backgroundImage: `
                            linear-gradient(to right, #041E42 1px, transparent 1px),
                            linear-gradient(to bottom, #041E42 1px, transparent 1px)
                          `,
                          backgroundSize: '36px 36px'
                        }}
                      />

                      {/* Drafting Corner Crosshairs */}
                      <div className="absolute top-4 right-4 w-5 h-5 border-t-2 border-r-2 border-[#041E42]/30" />
                      <div className="absolute bottom-4 left-4 w-5 h-5 border-b-2 border-l-2 border-[#041E42]/30" />
                      <div className="absolute top-4 left-4 w-5 h-5 border-t-2 border-l-2 border-[#041E42]/20" />
                      <div className="absolute bottom-4 right-4 w-5 h-5 border-b-2 border-r-2 border-[#041E42]/20" />

                      {/* Center Blank Image Indicator Box */}
                      <div className="relative z-10 flex flex-col items-center text-center px-6 py-4 bg-white/85 backdrop-blur-xs rounded-2xl border border-[#041E42]/10 shadow-sm transition-transform duration-300 group-hover:scale-105 max-w-[280px]">
                        <div className="w-12 h-12 rounded-full bg-[#041E42]/5 flex items-center justify-center mb-2 text-[#041E42]/70">
                          <ImageIcon size={22} />
                        </div>
                        <span className="text-xs font-mono uppercase tracking-widest text-[#041E42] font-bold">
                          [ BLANK IMAGE CANVAS ]
                        </span>
                        <span className="text-[11px] text-[#041E42]/60 mt-1">
                          Shape Reserved &bull; {card.tag}
                        </span>
                      </div>

                      {/* Subtle Bottom-Left Watermark */}
                      <div className="absolute bottom-4 left-6 z-10 text-[11px] font-mono tracking-wider text-[#041E42]/45 uppercase">
                        FIG. 0{idx + 1} &bull; SHAPED PICTURE FRAME
                      </div>
                    </div>

                    {/* =======================================================
                        2. LEFT-SIDE CARVED TAB: Heading (Exact screenshot geometry)
                        ======================================================= */}
                    <div className="absolute top-8 sm:top-12 left-0 z-20 flex flex-col items-start">
                      {/* Top concave fillet arc connecting tab to frame */}
                      <div className="relative w-6 h-6 self-end -mb-[1px] pointer-events-none mr-0">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          className="transform rotate-0"
                        >
                          <path
                            d="M0 24C13.2548 24 24 13.2548 24 0V24H0Z"
                            fill="#F2F3EE"
                          />
                        </svg>
                      </div>

                      {/* Heading Box with #F2F3EE background */}
                      <div className="bg-[#F2F3EE] px-5 sm:px-7 py-4 sm:py-5 rounded-r-[24px] shadow-sm flex flex-col items-end text-right border-r border-[#041E42]/10 transition-transform duration-300 group-hover:translate-x-1">
                        {card.title.map((line, lIdx) => (
                          <span
                            key={lIdx}
                            className="text-[#041E42] text-xl sm:text-2xl lg:text-3xl font-black uppercase tracking-tight leading-[1.1] block"
                            style={{ fontFamily: "'Geologica', sans-serif" }}
                          >
                            {line}
                          </span>
                        ))}
                      </div>

                      {/* Bottom concave fillet arc connecting tab to frame */}
                      <div className="relative w-6 h-6 self-end -mt-[1px] pointer-events-none mr-0">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          className="transform rotate-0"
                        >
                          <path
                            d="M0 0C13.2548 0 24 10.7452 24 24V0H0Z"
                            fill="#F2F3EE"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* =======================================================
                        3. RIGHT-SIDE NOTCHED BUTTON: Navy circle with cyan plus
                        ======================================================= */}
                    <div className="absolute bottom-28 sm:bottom-36 right-0 z-20 flex flex-col items-end">
                      {/* Top concave arc */}
                      <div className="relative w-6 h-6 pointer-events-none -mb-[1px]">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          className="transform rotate-0"
                        >
                          <path
                            d="M24 24C10.7452 24 0 13.2548 0 0V24H24Z"
                            fill="#ffffff"
                          />
                        </svg>
                      </div>

                      {/* White notch tab protruding into frame */}
                      <div className="bg-white pl-4 sm:pl-5 pr-2 py-3 sm:py-4 rounded-l-[28px] flex items-center justify-center">
                        <div
                          className={`relative w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all duration-300 shadow-md ${
                            isOpen
                              ? 'bg-[#11FEEE] text-[#041E42] scale-110 shadow-[#11FEEE]/40'
                              : 'bg-[#041E42] text-[#11FEEE] group-hover:bg-[#11FEEE] group-hover:text-[#041E42]'
                          }`}
                        >
                          <motion.div
                            animate={{ rotate: isOpen ? 135 : 0 }}
                            transition={{ duration: 0.25 }}
                          >
                            <Plus size={24} strokeWidth={3} />
                          </motion.div>
                        </div>
                      </div>

                      {/* Bottom concave arc */}
                      <div className="relative w-6 h-6 pointer-events-none -mt-[1px]">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          className="transform rotate-0"
                        >
                          <path
                            d="M24 0C10.7452 0 0 10.7452 0 24V0H24Z"
                            fill="#ffffff"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* =======================================================
                        4. SLIDE-IN DETAIL DRAWER (SSA Style Off-Canvas)
                        ======================================================= */}
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, x: -30 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -30 }}
                          transition={{ duration: 0.3, ease: 'easeOut' }}
                          onClick={(e) => e.stopPropagation()}
                          className="absolute inset-0 z-30 bg-[#D8D3D5]/95 backdrop-blur-md p-6 sm:p-10 flex flex-col justify-between"
                        >
                          <div className="flex items-start justify-between">
                            <div>
                              <span className="text-xs font-bold uppercase tracking-widest text-[#041E42]/60 block mb-1">
                                Point of Value &bull; 0{idx + 1}
                              </span>
                              <h4
                                className="text-2xl sm:text-3xl font-black uppercase text-[#041E42]"
                                style={{ fontFamily: "'Geologica', sans-serif" }}
                              >
                                {card.title.join(' ')}
                              </h4>
                            </div>

                            <button
                              onClick={() => setActiveCardId(null)}
                              className="w-10 h-10 rounded-full bg-[#041E42]/10 hover:bg-[#041E42] hover:text-[#11FEEE] text-[#041E42] flex items-center justify-center transition-colors shrink-0"
                              aria-label="Close details"
                            >
                              <X size={20} />
                            </button>
                          </div>

                          <div className="my-auto max-w-lg">
                            <p className="text-base sm:text-xl leading-relaxed text-[#041E42]">
                              <span className="font-bold underline decoration-[#11FEEE] decoration-3 underline-offset-4">
                                {card.leadIn}
                              </span>{' '}
                              {card.description}
                            </p>
                          </div>

                          <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider text-[#041E42]/60 pt-4 border-t border-[#041E42]/10">
                            <span>Dev Samaj Vidya Niketan</span>
                            <span>Click card or X to close</span>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              );
            })}
          </div>

          {/* =========================================================================
              RIGHT PART: STICKY HEADING THAT MOVES WITH THE SCREEN
              Stays locked in place on the right side as you scroll down,
              and naturally leaves when the section is completed!
              ========================================================================= */}
          <div className="order-1 lg:order-2 w-full lg:w-1/2 lg:sticky lg:top-0 lg:h-screen lg:self-start sticky-right-heading flex flex-col items-center justify-center text-center select-none py-16 sm:py-20 lg:py-0 px-4 sm:px-8 lg:px-12 bg-white lg:bg-transparent z-20">
            
            {/* Active Pillar Pill (Subtle feedback tracking scroll progress) */}
            <div className="hidden lg:flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#041E42]/5 border border-[#041E42]/10 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#11FEEE] animate-pulse" />
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#041E42]">
                Pillar 0{currentVisibleIndex + 1} / 03: {VALUES_DATA[currentVisibleIndex].title.join(' ')}
              </span>
            </div>

            {/* Main Stacked Typography from Shady Side Academy */}
            <div className="flex flex-col items-center justify-center max-w-xl">
              <h2
                className="text-[#041E42] text-6xl sm:text-8xl xl:text-[104px] font-normal uppercase tracking-tight leading-[0.9] m-0"
                style={{ fontFamily: "'Anton', sans-serif" }}
              >
                WE MOVE
              </h2>

              <span
                className="text-[#041E42] text-xl sm:text-2xl lg:text-3xl font-black uppercase tracking-widest my-2 sm:my-3"
                style={{ fontFamily: "'Geologica', sans-serif" }}
              >
                WITH
              </span>

              <h2
                className="text-[#041E42] text-6xl sm:text-8xl xl:text-[104px] font-normal uppercase tracking-tight leading-[0.9] m-0"
                style={{ fontFamily: "'Anton', sans-serif" }}
              >
                THE WORLD
              </h2>

              <span
                className="text-[#041E42] text-xl sm:text-2xl lg:text-3xl font-black uppercase tracking-widest my-2 sm:my-3"
                style={{ fontFamily: "'Geologica', sans-serif" }}
              >
                SO
              </span>

              <h2
                className="text-[#041E42] text-6xl sm:text-8xl xl:text-[104px] font-normal uppercase tracking-tight leading-[0.9] m-0"
                style={{ fontFamily: "'Anton', sans-serif" }}
              >
                YOU CAN TOO.
              </h2>
            </div>

            {/* Rotating Spirograph Spiral beneath the text */}
            <div className="mt-8 sm:mt-10 flex flex-col items-center">
              <div className="relative w-20 h-20 sm:w-28 sm:h-28">
                <svg
                  className="w-full h-full animate-rotate-spiral drop-shadow-xs"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="Rotating Spirograph Shape"
                >
                  <g>
                    <path
                      d="M50.0289 99.999C36.1792 99.999 24.9113 88.736 24.9113 74.8922C24.9113 61.0483 36.179 49.7851 50.0289 49.7851C63.8788 49.7851 75.1467 61.0481 75.1467 74.8922C75.1467 88.7362 63.879 99.999 50.0289 99.999ZM50.0289 50.1835C36.3987 50.1835 25.3097 61.2678 25.3097 74.8922C25.3097 88.5165 36.3987 99.6006 50.0289 99.6006C63.6591 99.6006 74.7481 88.5165 74.7481 74.8922C74.7481 61.2678 63.6591 50.1835 50.0289 50.1835Z"
                      fill="#11FEEE"
                    />
                    <path
                      d="M60.4047 1.05665C66.968 2.4473 72.5969 6.30966 76.2541 11.932C79.9112 17.5543 81.1592 24.2637 79.768 30.8243C77.2666 42.6189 66.8099 50.7277 55.2022 50.7277C43.7656 50.7277 33.4758 42.7486 31.0143 31.14C29.645 24.6836 30.8732 18.0806 34.4722 12.5475C38.0714 7.01441 43.611 3.2134 50.0701 1.84487C53.5096 1.11674 56.968 1.05665 60.4047 1.05665Z"
                      fill="#11FEEE"
                    />
                    <path
                      d="M72.5379 5.31623C78.5299 8.33317 82.9881 13.5019 85.0909 19.8703C87.1936 26.2388 86.6895 33.0446 83.6711 39.0341C79.261 47.7855 70.3911 52.8437 61.1978 52.8437C52.2309 52.8437 43.5028 47.8666 39.1622 39.253C36.1919 33.3587 35.6957 26.6611 37.765 20.3935C39.8345 14.1262 44.2218 9.03953 50.1185 6.0704C56.0152 3.10127 63.5028 2.31623 72.5379 5.31623Z"
                      fill="#11FEEE"
                    />
                    <circle cx="50" cy="50" r="4" fill="#11FEEE" />
                  </g>
                </svg>
              </div>

              <span className="text-[11px] uppercase tracking-widest text-[#041E42]/50 mt-3 font-semibold">
                Continuous Motion
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
