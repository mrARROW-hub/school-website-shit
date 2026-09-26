import React, { useRef, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import {
  ISBShape,
  ISBWordBadge,
  ISBFooterIconsRow,
  ISBScrollPopEdgeShape,
  ScrollPopContourWave,
  ISBShapeType,
  ISBCornerDesign,
  ISBCornerCard,
  ISBRedCornerAccent,
} from './DecorativeShapes';
import { ShadyHighlight } from './ShadyHighlight';
import { ScrollPopSection, ScrollPopBox } from './ScrollPopSection';
import { motion } from 'motion/react';
import { BeyondDevSamajReviews } from './BeyondDevSamajReviews';
import { WeMoveSection } from './WeMoveSection';
import campusPhoto from '../assets/campus1-1.webp';
import g16Fallback from '../assets/g16.jpg';
import moralGroundingImg from '../assets/images/moral_grounding_1790149720413.jpg';
import lab3Img from '../assets/lab3-1.jpg';
import intellectualDepthHoverImg from '../assets/images/intellectual_depth_hover.png';
import selfRelianceHoverImg from '../assets/images/self_reliance_hover.png';

const OurStoryPillarsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activePillarMobile, setActivePillarMobile] = useState<string | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const ourStoryPillarsData = [
    {
      id: 'pillar-1',
      title: 'Moral Grounding',
      desc: 'Ethical foundations before academic ambition.',
      shape: 'pink-circle' as ISBShapeType,
      hoverBorder: 'hover:border-[#FA448C]',
      image: 'https://isdevsamaj21.ac.in/wp-content/uploads/2024/05/sports3.jpg',
      bgColor: 'bg-[#FA448C]',
      hoverShape: 'four-petal-flower' as ISBShapeType,
      hoverShapeColor: '#FFC53D',
    },
    {
      id: 'pillar-2',
      title: 'Intellectual Depth',
      desc: 'Curiosity over rote learning, mastery over memorization.',
      shape: 'blue-hourglass' as ISBShapeType,
      hoverBorder: 'hover:border-[#FEBD38]',
      image: lab3Img || 'https://isdevsamaj21.ac.in/wp-content/uploads/2024/05/lab3-1.jpg',
      bgColor: 'bg-[#FEBD38]',
      hoverBgImage: intellectualDepthHoverImg,
      hoverShape: undefined,
      hoverShapeColor: '#002B49',
    },
    {
      id: 'pillar-3',
      title: 'Self-Reliance',
      desc: 'Equipping students to navigate a changing world independently.',
      shape: 'yellow-bars' as ISBShapeType,
      hoverBorder: 'hover:border-[#00A661]',
      image: 'https://isdevsamaj21.ac.in/wp-content/uploads/2024/05/g11.jpg',
      bgColor: 'bg-[#00A661]',
      hoverBgImage: selfRelianceHoverImg,
      hoverShape: undefined,
      hoverShapeColor: '#002B49',
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % ourStoryPillarsData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + ourStoryPillarsData.length) % ourStoryPillarsData.length);
  };

  // 5 seconds auto-transition for smaller screens only
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      // Only auto-slide if on smaller screens (< 1024px)
      if (typeof window !== 'undefined' && window.innerWidth < 1024) {
        setCurrentIndex((prev) => (prev + 1) % ourStoryPillarsData.length);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, currentIndex]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    touchStartX.current = null;
    setIsPaused(false);
  };

  const renderPillarCard = (pillar: (typeof ourStoryPillarsData)[0]) => {
    const isActive = activePillarMobile === pillar.id;
    return (
      <div
        onClick={() => {
          if (typeof window !== 'undefined' && window.innerWidth >= 1024) return;
          setActivePillarMobile((prev) => (prev === pillar.id ? null : pillar.id));
        }}
        className={`relative overflow-hidden border border-[#ccc] rounded-tr-2xl rounded-bl-2xl sm:rounded-tr-3xl sm:rounded-bl-3xl rounded-tl-none rounded-br-none ${pillar.bgColor} ${pillar.hoverBorder} transition-all duration-300 group h-full shadow-md hover:shadow-none flex flex-col justify-end min-h-[380px] sm:min-h-[410px] lg:min-h-[450px] cursor-pointer lg:cursor-default`}
      >
        {/* Hover Background Image (e.g. user-provided artwork without text) */}
        {pillar.hoverBgImage && (
          <div
            className="absolute inset-0 bg-cover bg-no-repeat bg-right-top pointer-events-none z-0"
            style={{ backgroundImage: `url(${pillar.hoverBgImage})` }}
          />
        )}

        {/* Background Image: reveals solid color / hoverBgImage on hover on desktop, or tap on mobile */}
        {pillar.image && (
          <div
            className={`absolute inset-0 bg-cover group-hover:scale-105 group-hover:opacity-0 transition-all duration-500 ease-out z-10 ${
              pillar.id === 'pillar-2'
                ? 'intellectual-depth-img'
                : pillar.id === 'pillar-3'
                ? 'self-reliance-img'
                : 'bg-center'
            } ${isActive ? 'scale-105 !opacity-0' : ''}`}
            style={{ backgroundImage: `url(${pillar.image})` }}
          />
        )}

        {/* Top depth gradient for rich visual depth when photo is shown - removed while hovering */}
        {pillar.image && (
          <div
            className={`absolute inset-x-0 top-0 h-28 sm:h-32 bg-gradient-to-b from-slate-950/80 via-slate-950/30 to-transparent pointer-events-none z-15 transition-opacity duration-500 ease-out group-hover:opacity-0 ${
              isActive ? '!opacity-0' : ''
            }`}
          />
        )}

        {/* Bottom depth gradient for rich visual depth when photo is shown - removed while hovering */}
        {pillar.image && (
          <div
            className={`absolute inset-x-0 bottom-0 h-44 sm:h-48 bg-gradient-to-t from-slate-950/95 via-slate-950/60 to-transparent pointer-events-none z-15 transition-opacity duration-500 ease-out group-hover:opacity-0 ${
              isActive ? '!opacity-0' : ''
            }`}
          />
        )}

        {/* Large decorative shape appearing in top-right on hover (desktop) or tap (mobile) */}
        {pillar.hoverShape && (
          <div
            className={`absolute z-15 pointer-events-none opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-out ${
              pillar.hoverShape === 'four-petal-flower'
                ? '-top-8 -right-8 sm:-top-10 sm:-right-10'
                : '-top-10 -right-10'
            } ${isActive ? '!opacity-100 !scale-100' : ''}`}
          >
            <ISBShape
              type={pillar.hoverShape}
              size={pillar.hoverShape === 'four-petal-flower' ? 260 : 200}
              color={pillar.hoverShapeColor}
            />
          </div>
        )}

        {/* Top shape symbol indicator */}
        <div
          className={`absolute top-3 left-3 z-20 ${
            pillar.image
              ? 'bg-white/90 backdrop-blur-xs p-1.5 rounded-lg shadow-xs group-hover:opacity-0 transition-opacity duration-300'
              : 'bg-slate-100/90 border border-slate-200/60 p-1.5 rounded-lg shadow-2xs'
          } ${isActive && pillar.image ? '!opacity-0' : ''}`}
        >
          <ISBShape type={pillar.shape} size={16} />
        </div>

        {/* Text content moved to bottom left with clean readability without background gradient sticking */}
        <div className="relative z-20 p-4 sm:p-5 text-left w-full flex flex-col justify-end bg-transparent">
          <div className="flex items-center justify-between gap-3">
            <div>
              <h4
                className={`font-bold text-sm sm:text-base mb-1 ${
                  pillar.image
                    ? 'text-white [text-shadow:_0_2px_4px_rgba(0,0,0,0.9)]'
                    : 'text-[#002B49]'
                }`}
              >
                {pillar.title}
              </h4>
              <p
                className={`text-xs leading-relaxed mb-0 font-medium ${
                  pillar.image
                    ? 'text-slate-100 [text-shadow:_0_1px_3px_rgba(0,0,0,0.8)]'
                    : 'text-slate-600'
                }`}
              >
                {pillar.desc}
              </p>
            </div>
            <span
              className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 shadow-xs ${
                pillar.image
                  ? 'bg-white/20 text-white group-hover:bg-white group-hover:text-[#002B49] group-hover:translate-x-1'
                  : 'bg-slate-100 text-[#002B49] group-hover:bg-[#002B49] group-hover:text-white group-hover:translate-x-1'
              } ${isActive ? (pillar.image ? '!bg-white !text-[#002B49] !translate-x-1' : '!bg-[#002B49] !text-white !translate-x-1') : ''}`}
            >
              <ArrowRight size={16} />
            </span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="relative">
      {/* Navigation Controls: arrows & dots on small screens; title only on large screens */}
      <div className="flex items-center justify-between lg:justify-center mb-3 px-2 sm:px-4">
        <span className="text-[11px] font-bold uppercase tracking-wider text-blue-100 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-white inline-block" />
          Core Pillars
          <span className="lg:hidden text-white/70 font-medium">({currentIndex + 1}/3)</span>
        </span>
        <div className="flex lg:hidden items-center gap-1.5 sm:gap-2">
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous pillar"
            className="w-8 h-8 rounded-full bg-white/95 hover:bg-white text-[#003366] border border-white/40 shadow-xs flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next pillar"
            className="w-8 h-8 rounded-full bg-white/95 hover:bg-white text-[#003366] border border-white/40 shadow-xs flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Small Screens (< 1024px): Single box visible at a time with 5-second auto-slide transition from right */}
      <div
        className="block lg:hidden relative overflow-hidden w-full max-w-[340px] sm:max-w-[360px] mx-auto pb-1"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {ourStoryPillarsData.map((pillar) => (
            <div key={pillar.id} className="w-full shrink-0 px-1">
              {renderPillarCard(pillar)}
            </div>
          ))}
        </div>

        {/* Slide Indicator Dots for small screens */}
        <div className="flex items-center justify-center gap-1.5 mt-3">
          {ourStoryPillarsData.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to pillar ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === idx
                  ? 'w-6 bg-white'
                  : 'w-1.5 bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Large Screens (lg+): 3-Column Side-by-Side Grid, no sliding */}
      <div className="hidden lg:grid lg:grid-cols-3 lg:gap-6 w-full">
        {ourStoryPillarsData.map((pillar) => (
          <div key={pillar.id} className="h-full">
            {renderPillarCard(pillar)}
          </div>
        ))}
      </div>
    </div>
  );
};

const learningStagesData: {
  id: string;
  stepLabel: string;
  shape: ISBShapeType;
  title: string;
  classes: string;
  accentColor: string;
  bgHover: string;
  image?: string;
  imageAlt?: string;
}[] = [
  {
    id: 'primary',
    stepLabel: '01 — Foundation',
    shape: 'pink-circle',
    title: 'Primary School',
    classes: 'Nursery to 4',
    accentColor: '#fe76b4',
    bgHover: 'hover:border-[#fe76b4]',
    image: 'https://cdn.phototourl.com/member/2026-09-26-bc79a123-53c0-4b94-a662-d7ae1eaab874.jpg',
    imageAlt: 'Primary School',
  },
  {
    id: 'middle',
    stepLabel: '02 — Exploration',
    shape: 'green-flower',
    title: 'Middle School',
    classes: 'Classes 5 to 8',
    accentColor: '#00b273',
    bgHover: 'hover:border-[#00b273]',
    image: '',
    imageAlt: 'Middle School',
  },
  {
    id: 'high',
    stepLabel: '03 — Deepening & Mastery',
    shape: 'yellow-bars',
    title: 'High School',
    classes: 'Classes 9 to 12',
    accentColor: '#FFC548',
    bgHover: 'hover:border-[#FFC548]',
    image: '',
    imageAlt: 'High School',
  },
];

const LearningJourneyStagesCarousel: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    if (clientWidth > 0) {
      const idx = Math.round(scrollLeft / clientWidth);
      if (idx !== currentIndex && idx >= 0 && idx < learningStagesData.length) {
        setCurrentIndex(idx);
      }
    }
  };

  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;
    const targetLeft = index * scrollRef.current.clientWidth;
    scrollRef.current.scrollTo({ left: targetLeft, behavior: 'smooth' });
    setCurrentIndex(index);
  };

  const handlePrev = () => {
    scrollToIndex(Math.max(0, currentIndex - 1));
  };

  const handleNext = () => {
    scrollToIndex(Math.min(learningStagesData.length - 1, currentIndex + 1));
  };

  const renderCardContent = (stage: (typeof learningStagesData)[0]) => {
    const isPrimary = stage.id === 'primary';
    return (
      <div
        className={`relative overflow-hidden p-6 sm:p-8 border border-neutral-300 sm:border-neutral-200/80 rounded-none bg-[#1e293b] ${
          isPrimary ? 'shadow-none' : 'shadow-xl hover:shadow-2xl'
        } transition-all duration-300 flex flex-col justify-between min-h-[420px] sm:min-h-[440px] h-full group cursor-pointer`}
      >
        {/* Background image if provided, or dark/neutral blank canvas ready for image */}
        {stage.image ? (
          <>
            <img
              src={stage.image}
              alt={stage.imageAlt || stage.title}
              className={`absolute inset-0 w-full h-full object-cover object-center image-render-crisp ${
                isPrimary ? 'object-[center_center]' : 'transition-transform duration-700 group-hover:scale-105'
              }`}
              style={{ imageRendering: 'high-quality' }}
            />
            {/* For primary school box: crop from sides, focus on center, do not add depth */}
            {isPrimary ? (
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/75 to-transparent pointer-events-none" />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />
            )}
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-gradient-to-b from-[#2a384c] via-[#1e293b] to-[#0f172a] pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />
          </>
        )}

      {/* Step shape and label tag */}
      <div className="relative z-10 mb-auto flex items-center justify-between">
        <span className="text-xs uppercase tracking-wider font-semibold text-white/80 bg-black/30 backdrop-blur-xs px-2.5 py-1 rounded-full border border-white/10">
          {stage.stepLabel}
        </span>
        <div className="transition-transform duration-300 group-hover:scale-125">
          <ISBShape type={stage.shape} size={24} />
        </div>
      </div>

      {/* Text and Arrow row at the bottom matching user's provided reference image */}
      <div className="relative z-10 mt-auto flex items-end justify-between gap-4 pt-4">
        <div>
          <h3 className="font-bold text-2xl sm:text-[26px] text-white mb-1.5 tracking-tight drop-shadow-sm">
            {stage.title}
          </h3>
          <div className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-200/90">
            {stage.classes}
          </div>
        </div>
        <div className="shrink-0 p-2.5 rounded-full text-white/90 group-hover:text-white transition-all transform group-hover:translate-x-1.5">
          <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </div>
      </div>
    </div>
  );
};

  return (
    <div className="mb-2">
      {/* Mobile & Small Screen: Horizontal Scroll Carousel showing exactly one elongated box at a time */}
      <div className="block md:hidden">
        {/* Navigation & Stage Counter Bar */}
        <div className="flex items-center justify-between mb-3 px-1">
          <span className="text-xs font-semibold text-[#666] tracking-wide">
            Stage {currentIndex + 1} of {learningStagesData.length}
          </span>
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={handlePrev}
              disabled={currentIndex === 0}
              aria-label="Previous academic stage"
              className={`p-1.5 rounded-full border border-[#ddd] bg-white transition-all ${
                currentIndex === 0
                  ? 'opacity-40 cursor-not-allowed text-[#aaa]'
                  : 'text-[#222] hover:bg-[#f0f0f0] active:scale-95 shadow-2xs'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              disabled={currentIndex === learningStagesData.length - 1}
              aria-label="Next academic stage"
              className={`p-1.5 rounded-full border border-[#ddd] bg-white transition-all ${
                currentIndex === learningStagesData.length - 1
                  ? 'opacity-40 cursor-not-allowed text-[#aaa]'
                  : 'text-[#222] hover:bg-[#f0f0f0] active:scale-95 shadow-2xs'
              }`}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Horizontal Scrollable Row */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none pb-2 -mx-1 px-1 touch-pan-x"
          style={{ scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch' }}
        >
          {learningStagesData.map((stage) => (
            <div
              key={stage.id}
              className="w-full min-w-full flex-shrink-0 snap-center px-1"
            >
              {renderCardContent(stage)}
            </div>
          ))}
        </div>

        {/* Indicator dots for mobile */}
        <div className="flex justify-center items-center gap-2 mt-3">
          {learningStagesData.map((stage, idx) => (
            <button
              key={stage.id}
              type="button"
              onClick={() => scrollToIndex(idx)}
              aria-label={`Go to ${stage.title}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === idx ? 'w-6 bg-[#002244]' : 'w-2 bg-[#ccc] hover:bg-[#999]'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Medium & Large Screens: 3-Column Side-by-Side Elongated Grid */}
      <div className="hidden md:grid md:grid-cols-3 md:gap-6">
        {learningStagesData.map((stage, idx) => (
          <ScrollPopBox
            key={stage.id}
            direction={idx === 2 ? 'right' : 'left'}
            className="h-full"
          >
            {renderCardContent(stage)}
          </ScrollPopBox>
        ))}
      </div>
    </div>
  );
};

export const WireframeSections: React.FC = () => {
  const [isMobileOrTablet, setIsMobileOrTablet] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 1024;
    }
    return false;
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mq = window.matchMedia('(max-width: 1023px)');
    const update = () => setIsMobileOrTablet(mq.matches);
    update();
    mq.addEventListener?.('change', update);
    return () => mq.removeEventListener?.('change', update);
  }, []);

  const brandPillars: { type: ISBShapeType; name: string; desc: string; color: string }[] = [
    { type: 'purple-stairs', name: 'Progress', desc: 'Pre-K through Class XII continuum', color: '#861fce' },
    { type: 'pink-circle', name: 'Community', desc: 'Inclusivity, empathy, & belonging', color: '#fe76b4' },
    { type: 'blue-hourglass', name: 'Intellect', desc: 'Academic inquiry & critical rigor', color: '#0064ec' },
    { type: 'yellow-bars', name: 'Expression', desc: 'Diversity of talents & vibrant voice', color: '#FFC548' },
    { type: 'green-flower', name: 'Flourishing', desc: 'Holistic character & moral grounding', color: '#00b273' },
    { type: 'red-triangle', name: 'Empowerment', desc: 'Courage, leadership, & forward drive', color: '#FF3D37' },
  ];

  return (
    <>
      {/* =========================================================================
          ISB-INSPIRED VALUES & DECORATIVE SHAPES RIBBON
          Replicating the iconic visual language from isb.be
          ========================================================================= */}
      <section className="border-b border-[#e5e5e5] bg-[#fafafa]/95 py-2 sm:py-3 md:py-3.5 transition-colors overflow-hidden" aria-label="School Pillars and Visual Language">
        <ScrollPopSection direction="left">
          <div className="wireframe-container">
            <div className="flex flex-col md:flex-row items-center justify-between gap-2 md:gap-4">
              {/* Desktop / Tablet Heading */}
              <div className="hidden md:flex items-center gap-2.5 text-left shrink-0">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#444] bg-white px-3 py-1 rounded-full border border-[#ddd] shadow-xs">
                  Visual Language &amp; Pillars
                </span>
                <span className="text-xs text-[#666]">
                  Decorative shapes inspired by international school branding
                </span>
              </div>

              {/* Wrapped Shapes Ribbon for Mobile & Desktop (natural word wrapping in lines, no scrolling) */}
              <div className="w-full md:w-auto flex flex-wrap items-center justify-center md:justify-end gap-1.5 sm:gap-2 py-0.5">
                {/* Compact label inline on mobile */}
                <span className="md:hidden text-[10px] font-bold uppercase tracking-wider text-[#555] bg-white px-2.5 py-1 rounded-full border border-[#ddd] shadow-2xs whitespace-nowrap">
                  Pillars
                </span>

                {brandPillars.map((item, idx) => (
                  <div
                    key={idx}
                    className="group flex items-center gap-1.5 px-2.5 py-1 sm:py-1.5 rounded-full bg-white border border-[#e5e5e5] hover:border-[#bbb] hover:shadow-xs transition-all cursor-default"
                    title={`${item.name}: ${item.desc}`}
                  >
                    <div className="transition-transform duration-300 group-hover:scale-125 group-hover:rotate-6 shrink-0">
                      <ISBShape type={item.type} size={16} />
                    </div>
                    <span className="text-[11px] sm:text-xs font-semibold text-[#333] whitespace-nowrap group-hover:text-black transition-colors">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollPopSection>
      </section>

      {/* =========================================================================
          2. OUR STORY — Where Values Meet Vision
          ========================================================================= */}
      <section className="wireframe-section relative overflow-hidden" id="story">
        {/* Scroll-triggered edge pop shape (half pops out from right edge, 0 extra vertical space) */}
        <ISBScrollPopEdgeShape shape="purple-stairs" align="right" topPosition="top-28 sm:top-36" />
        {/* Authentic Shady Side Academy coiled spirograph popping out from left edge (Image 1 exact) */}
        <ScrollPopContourWave
          align="left"
          variant="twisted-ribbon"
          color="#11FEEE"
          topPosition="top-28 sm:top-36"
          className="opacity-90"
        />
        <ScrollPopSection direction="left">
          <div className="wireframe-container relative z-10">
            <div className="wf-label text-center flex items-center justify-center gap-2">
              <ISBShape type="pink-circle" size={14} />
              <span>Our Story</span>
              <ISBShape type="blue-hourglass" size={14} />
            </div>
            <h2
              className="wf-heading !text-[34px] font-fraunces text-[#111] leading-tight font-bold text-center break-words"
              style={{ fontFamily: "'Fraunces', serif", fontSize: '34px' }}
            >
              where <ShadyHighlight color="turquoise">values</ShadyHighlight> meet <ShadyHighlight color="turquoise" delay={500}>vision</ShadyHighlight>.....
            </h2>

            {/* Unified ISB Blue Card Area extending from top statement to beneath the boxes */}
            <ScrollPopBox direction="right" className="my-8 lg:my-12">
              <div className="relative">
                {/* The Blue Border / Background extending straight down behind the boxes */}
                <div
                  className="absolute inset-y-0 left-0 right-0 lg:left-1/2 lg:-translate-x-1/2 lg:w-[calc(100%-((100%-3rem)/6))] lg:max-w-[955px] rounded-3xl rounded-bl-none border-0 border-none bg-[#0064ec] shadow-xl shadow-blue-900/10 overflow-hidden pointer-events-none z-0"
                >
                  {/* Subtle ambient gradient overlay matching isb.be learning journey */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#0051e8] via-[#0064ec] to-[#0d7aff] opacity-90 pointer-events-none" />

                  {/* ISB Signature Bottom-Left Corner Design */}
                  <ISBCornerDesign size={38} className="sm:scale-110 pointer-events-auto" />
                </div>

                {/* Foreground Content */}
                <div className="relative z-10 pt-8 sm:pt-10 px-3 sm:px-6 lg:px-0 pb-10 sm:pb-12">
                  {/* ISB-Style Sentence with Inline Shapes */}
                  <div className="max-w-3xl mx-auto text-center mb-6 sm:mb-8 px-3 sm:px-6">
                    <p className="text-base sm:text-xl text-white font-medium leading-relaxed sm:leading-loose">
                      We are an inclusive, value-grounded{' '}
                      <ISBWordBadge shape="blue-hourglass" label="Intellect & Rigor" light>
                        school
                      </ISBWordBadge>{' '}
                      in Chandigarh for{' '}
                      <ISBWordBadge shape="pink-circle" label="Community & Belonging" light>
                        students
                      </ISBWordBadge>{' '}
                      from Preschool through{' '}
                      <ISBWordBadge shape="purple-stairs" label="Continuous Learning" light>
                        Class XII
                      </ISBWordBadge>
                      , offering an immersive and culturally{' '}
                      <ISBWordBadge shape="green-flower" label="Flourishing Character" light>
                        rich
                      </ISBWordBadge>{' '}
                      education for{' '}
                      <ISBWordBadge shape="yellow-bars" label="Diverse Voices" light>
                        curious minds
                      </ISBWordBadge>{' '}
                      guided by{' '}
                      <ISBWordBadge shape="red-triangle" label="Empowerment & Purpose" light>
                        moral integrity
                      </ISBWordBadge>
                      .
                    </p>
                  </div>

                  {/* Core Pillars Boxes:
                      - Left and right boxes are half out of the blue border on large screens.
                      - Horizontal carousel with scroll/drag on small screens. */}
                  <OurStoryPillarsCarousel />
                </div>
              </div>
            </ScrollPopBox>

            {/* Content Container for Statistics & Campus Photo */}
            <div className="relative mt-8 lg:mt-10">
              <div>

                {/* Statistics Row */}
                <ScrollPopBox direction="right" className="mt-8 mb-2">
                  <div className="flex flex-wrap items-center gap-8 sm:gap-12 py-1">
                    <div>
                      <div className="text-3xl sm:text-4xl font-bold text-[#222]">2,400+</div>
                      <div className="text-xs sm:text-sm text-[#666] font-medium mt-0.5">Students</div>
                    </div>
                    <div className="hidden sm:block w-px h-8 bg-neutral-200" />
                    <div>
                      <div className="text-3xl sm:text-4xl font-bold text-[#222]">180+</div>
                      <div className="text-xs sm:text-sm text-[#666] font-medium mt-0.5">Faculty Members</div>
                    </div>
                    <div className="hidden sm:block w-px h-8 bg-neutral-200" />
                    <div>
                      <div className="text-3xl sm:text-4xl font-bold text-[#222]">98%</div>
                      <div className="text-xs sm:text-sm text-[#666] font-medium mt-0.5">Board Distinction</div>
                    </div>
                  </div>
                </ScrollPopBox>
              </div>

              {/* Campus Photo Container:
                  - Small screens: Left-bleed gray background sliding in from left edge with red corner accent.
                  - Large screens: Brought down below the boxes with full gray background, border, shadow, and red corner accent. */}
              <motion.div
                initial={isMobileOrTablet ? { opacity: 0, x: -110, scale: 0.95 } : { opacity: 0, y: 35, scale: 0.98 }}
                whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  type: 'spring',
                  stiffness: 80,
                  damping: 18,
                  mass: 0.85,
                }}
                className="relative rounded-r-3xl rounded-l-none bg-[#f5f5f5] border-y border-r border-l-0 border-neutral-200/90 shadow-md
                  -ml-[var(--space-4,32px)] w-[calc(100%+var(--space-4,32px))]
                  p-6 sm:p-8 pt-8 sm:pt-10 pb-8 sm:pb-10 pl-6 sm:pl-8 pr-6 sm:pr-8
                  mt-8 sm:mt-10
                  lg:ml-0 lg:w-full lg:rounded-3xl lg:border lg:border-neutral-200/90 lg:bg-[#f5f5f5] lg:p-10 xl:p-12 lg:shadow-md lg:mt-12"
              >
                {/* Red coloured design at top-right corner for small screens */}
                <div className="block lg:hidden absolute -top-5 right-3 sm:-top-6 sm:right-4 z-20 pointer-events-none select-none">
                  <ISBRedCornerAccent size={88} />
                </div>

                {/* Red coloured design at top-right corner for large screens (on top-right of its gray background) */}
                <div className="hidden lg:block absolute -top-7 -right-4 xl:-top-8 xl:-right-5 z-20 pointer-events-none select-none">
                  <ISBRedCornerAccent size={112} />
                </div>

                {/* Uncut campus photo with complete rounded corners and slate depth gradient */}
                <div className="relative w-full aspect-[16/10] sm:aspect-[4/3] lg:aspect-[21/9] xl:aspect-[2.4/1] min-h-[230px] sm:min-h-[300px] lg:min-h-[420px] rounded-2xl overflow-hidden shadow-2xl shadow-slate-900/25 border border-slate-200/90 bg-slate-900 group">
                  <img
                    src={campusPhoto}
                    alt="I.S. Dev Samaj School Iconic Heritage Campus, Sector 21-C, Chandigarh"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-[center_35%] group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Dark slate depth gradient along the bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-28 sm:h-36 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent pointer-events-none" />

                  {/* Bottom-left CAMPUS label with white color and Poppins sans-serif typography */}
                  <div
                    id="campus-image-label"
                    className="absolute bottom-3 left-4 sm:bottom-5 sm:left-6 z-10 select-none pointer-events-none flex items-center"
                  >
                    <span
                      className="text-white text-xl sm:text-2xl md:text-3xl font-bold tracking-wider sm:tracking-widest uppercase drop-shadow-[0_3px_8px_rgba(0,0,0,0.85)]"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      CAMPUS
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </ScrollPopSection>
      </section>

      {/* =========================================================================
          3. THE LEARNING JOURNEY — Academics
          ========================================================================= */}
      <section className="relative overflow-hidden bg-white pt-16 sm:pt-20 pb-0 border-b border-[#ccc]" id="journey">
        {/* Scroll-triggered edge pop shape (half pops out from left edge, 0 extra vertical space) */}
        <ISBScrollPopEdgeShape shape="blue-hourglass" align="left" topPosition="top-24 sm:top-28" />
        {/* Authentic Shady Side Academy coiled spirograph peeking from right edge (Image 2 exact) */}
        <ScrollPopContourWave
          align="right"
          variant="coiled-pod"
          color="#1FFF01"
          topPosition="top-24 sm:top-28"
          className="opacity-90"
        />
        <ScrollPopSection direction="left">
          {/* Top White Area: Header & Heading */}
          <div className="wireframe-container relative z-10">
            <div className="wf-label text-center flex items-center justify-center gap-2">
              <ISBShape type="purple-stairs" size={15} />
              <span>Academics</span>
            </div>
            <h2
              className="wf-heading !text-[36px] font-poppins font-bold text-[#222] leading-tight text-center break-words"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: '36px' }}
            >
              The <ShadyHighlight color="turquoise">Learning Journey</ShadyHighlight>
            </h2>

            <p className="max-w-2xl text-base text-[#666] mb-8 sm:mb-10 text-center mx-auto break-words">
              A continuous continuum of growth from the earliest steps of wonder to the confident leap into adulthood.
            </p>
          </div>

          {/* Overlapping Blue Background Container:
              - The solid dark blue background starts halfway down the boxes (top-[200px] on mobile, top-[220px] on desktop)
              - Fills the entire lower section with rich royal blue, ambient gradient, and corner accent
              - The boxes are half in the white area and half in the blue area */}
          <div className="relative mt-2">
            {/* The Solid Dark Blue Background spanning full width and filling down through the section */}
            <div className="absolute inset-x-0 bottom-0 top-[200px] sm:top-[220px] bg-[#002244] text-white shadow-2xl overflow-hidden">
              {/* Ambient gradient overlay matching ISB branding */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#001730] via-[#002244] to-[#0a3565] opacity-95 pointer-events-none" />
              {/* Signature ISB Bottom-Left Corner Design */}
              <ISBCornerDesign size={42} className="sm:scale-110" />
            </div>

            {/* Content: 3 Boxes (half out) + Academic Statement below inside blue area */}
            <div className="wireframe-container relative z-10">
              {/* 3 Academic Stage Boxes */}
              <LearningJourneyStagesCarousel />

              {/* ISB-Style Academic Sentence on the Blue Background beneath the boxes */}
              <div className="relative z-10 max-w-4xl mx-auto pt-8 sm:pt-10 pb-14 sm:pb-16 px-4 text-center">
                <p className="text-base sm:text-xl text-white font-medium leading-relaxed sm:leading-loose">
                  Our academic continuum guides students from{' '}
                  <ISBWordBadge shape="pink-circle" label="Curiosity & Expression" light>
                    Primary School wonder
                  </ISBWordBadge>{' '}
                  through foundational{' '}
                  <ISBWordBadge shape="green-flower" label="Disciplined Inquiry" light>
                    Middle School discovery
                  </ISBWordBadge>
                  , advancing into rigorous{' '}
                  <ISBWordBadge shape="yellow-bars" label="Inquiry & Mastery" light>
                    High School
                  </ISBWordBadge>{' '}
                  distinction.
                </p>
              </div>
            </div>
          </div>
        </ScrollPopSection>
      </section>

      {/* =========================================================================
          4. BEYOND THE CLASSROOM — Student Life
          ========================================================================= */}
      <section className="wireframe-section relative overflow-hidden" id="beyond">
        {/* Scroll-triggered edge pop shape in empty margin space */}
        <ISBScrollPopEdgeShape shape="yellow-bars" align="left" topPosition="top-24 sm:top-28" />
        {/* Authentic Shady Side Academy coiled spirograph peeking from right edge (Image 4 exact) */}
        <ScrollPopContourWave
          align="right"
          variant="ruled-twist"
          color="#11FEEE"
          topPosition="top-24 sm:top-28"
          className="opacity-90"
        />
        <ScrollPopSection direction="left">
          <div className="wireframe-container relative z-10">
            <div className="wf-label text-center flex items-center justify-center gap-2">
              <ISBShape type="green-flower" size={15} />
              <span>Student Life</span>
            </div>
            <h2
              className="wf-heading font-crayon text-3xl sm:text-4xl md:text-5xl font-normal tracking-wide text-center break-words"
              style={{ fontFamily: "'DK Crayon Crumble', 'Cabin Sketch', cursive, sans-serif" }}
            >
              Beyond the <ShadyHighlight color="turquoise">Classroom</ShadyHighlight>
            </h2>
            <p className="max-w-2xl text-base text-[#666] text-center mx-auto break-words">
              Character is forged as much on the pitch, stage, and easel as it is in the lecture hall.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-8">
              <ScrollPopBox direction="left" className="h-full">
                <div className="p-4 border border-[#ccc] rounded text-center bg-white hover:border-[#FF3D37] hover:shadow-xs transition-all group h-full">
                  <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-3 transition-transform duration-300 group-hover:scale-110">
                    <ISBShape type="red-triangle" size={26} />
                  </div>
                  <h4 className="font-semibold text-sm text-[#222] mb-1">Sports</h4>
                  <p className="text-xs text-[#666]">Football, basketball, cricket, badminton, athletics, yoga.</p>
                </div>
              </ScrollPopBox>
              <ScrollPopBox direction="right" className="h-full">
                <div className="p-4 border border-[#ccc] rounded text-center bg-white hover:border-[#00b273] hover:shadow-xs transition-all group h-full">
                  <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-3 transition-transform duration-300 group-hover:scale-110">
                    <ISBShape type="green-flower" size={26} />
                  </div>
                  <h4 className="font-semibold text-sm text-[#222] mb-1">Arts &amp; Culture</h4>
                  <p className="text-xs text-[#666]">Painting, sculpture, theatre, debate, creative writing.</p>
                </div>
              </ScrollPopBox>
              <ScrollPopBox direction="left" className="h-full">
                <div className="p-4 border border-[#ccc] rounded text-center bg-white hover:border-[#FFC548] hover:shadow-xs transition-all group h-full">
                  <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center mx-auto mb-3 transition-transform duration-300 group-hover:scale-110">
                    <ISBShape type="yellow-bars" size={26} />
                  </div>
                  <h4 className="font-semibold text-sm text-[#222] mb-1">Music &amp; Dance</h4>
                  <p className="text-xs text-[#666]">Classical, contemporary, choir, instrumental orchestra.</p>
                </div>
              </ScrollPopBox>
              <ScrollPopBox direction="right" className="h-full">
                <div className="p-4 border border-[#ccc] rounded text-center bg-white hover:border-[#0064ec] hover:shadow-xs transition-all group h-full">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-3 transition-transform duration-300 group-hover:scale-110">
                    <ISBShape type="blue-hourglass" size={26} />
                  </div>
                  <h4 className="font-semibold text-sm text-[#222] mb-1">Clubs &amp; Societies</h4>
                  <p className="text-xs text-[#666]">Robotics, eco club, editorial board, quiz bowl, MUN.</p>
                </div>
              </ScrollPopBox>
              <ScrollPopBox direction="left" className="col-span-2 sm:col-span-1 h-full">
                <div className="p-4 border border-[#ccc] rounded text-center bg-white hover:border-[#861fce] hover:shadow-xs transition-all group h-full">
                  <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center mx-auto mb-3 transition-transform duration-300 group-hover:scale-110">
                    <ISBShape type="purple-stairs" size={26} />
                  </div>
                  <h4 className="font-semibold text-sm text-[#222] mb-1">Competitions</h4>
                  <p className="text-xs text-[#666]">Inter-school tournaments, Olympiads, state leagues.</p>
                </div>
              </ScrollPopBox>
            </div>
          </div>
        </ScrollPopSection>
      </section>

      {/* =========================================================================
          6. GULDAASTA — Signature Annual Event
          ========================================================================= */}
      <section className="wireframe-section relative overflow-hidden" id="guldaasta">
        {/* Scroll-triggered edge pop shape in empty margin space */}
        <ISBScrollPopEdgeShape shape="pink-arch" align="right" topPosition="top-24 sm:top-28" />
        {/* Authentic Shady Side Academy coiled spirograph peeking from left edge (Image 3 exact) */}
        <ScrollPopContourWave
          align="left"
          variant="cascading-fan"
          color="#1FFF01"
          topPosition="top-24 sm:top-28"
          className="opacity-90"
        />
        <ScrollPopSection direction="right">
          <div className="wireframe-container relative z-10">
            <div className="wf-label text-center flex items-center justify-center gap-2">
              <ISBShape type="pink-arch" size={15} />
              <span>Signature Annual Event</span>
            </div>
            <h2
              className="wf-heading !text-[36px] font-poppins font-bold text-[#222] leading-tight text-center break-words"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: '36px' }}
            >
              Guldaasta &mdash; <ShadyHighlight color="turquoise">A Celebration of Togetherness</ShadyHighlight>
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-8">
              <ScrollPopBox direction="left">
                <div>
                  <p className="text-base text-[#666] leading-relaxed mb-6 text-left">
                    Our landmark annual showcase where every child&apos;s voice, talent, and culture come together in an unforgettable evening of performance, exhibition, and shared pride.
                  </p>
                  <div className="flex gap-8 my-6 justify-start">
                    <div>
                      <strong className="block text-2xl font-bold text-[#222]">1,200+</strong>
                      <span className="text-xs text-[#666]">Student Performers</span>
                    </div>
                    <div>
                      <strong className="block text-2xl font-bold text-[#222]">3,500+</strong>
                      <span className="text-xs text-[#666]">Audience &amp; Alumni</span>
                    </div>
                    <div>
                      <strong className="block text-2xl font-bold text-[#222]">1</strong>
                      <span className="text-xs text-[#666]">Unforgettable Night</span>
                    </div>
                  </div>
                  <div className="text-left">
                    <a href="#guldaasta-details" className="wf-cta">
                      LEARN ABOUT GULDAASTA
                    </a>
                  </div>
                </div>
              </ScrollPopBox>
              <div className="grid grid-cols-2 gap-3">
                <ScrollPopBox direction="right" className="col-span-2">
                  <div className="wf-img-placeholder h-64">
                    GULDAASTA STAGE PHOTO (HERO MOMENT)
                  </div>
                </ScrollPopBox>
                <ScrollPopBox direction="left">
                  <div className="wf-img-placeholder h-36">DANCE PERFORMANCE</div>
                </ScrollPopBox>
                <ScrollPopBox direction="right">
                  <div className="wf-img-placeholder h-36">MUSIC ENSEMBLE</div>
                </ScrollPopBox>
              </div>
            </div>
          </div>
        </ScrollPopSection>
      </section>

      {/* =========================================================================
          7. MAKING US PROUD — Achievements
          ========================================================================= */}
      <section className="wireframe-section relative overflow-hidden" id="achievements">
        {/* Scroll-triggered edge pop shape in empty margin space */}
        <ISBScrollPopEdgeShape shape="red-triangle" align="left" topPosition="top-24 sm:top-28" />
        {/* Authentic Shady Side Academy coiled spirograph peeking from right edge */}
        <ScrollPopContourWave
          align="right"
          variant="vertical-spiral"
          color="#11FEEE"
          topPosition="top-24 sm:top-28"
          className="opacity-90"
        />
        <ScrollPopSection direction="left">
          <div className="wireframe-container relative z-10">
            <div className="wf-label text-center flex items-center justify-center gap-2">
              <ISBShape type="red-triangle" size={15} />
              <span>Achievements</span>
            </div>
          <h2
            className="wf-heading !text-[36px] font-poppins font-bold text-[#222] leading-tight text-center break-words"
            style={{ fontFamily: "'Poppins', sans-serif", fontSize: '36px' }}
          >
            Making Us <ShadyHighlight color="turquoise">Proud</ShadyHighlight>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <ScrollPopBox direction="left" className="h-full">
              <div className="h-full">
                <h3 className="text-base font-bold text-[#222] pb-2 border-b border-[#ccc] mb-4">Academics</h3>
                <div className="flex flex-col gap-3">
                  <div className="p-3 border border-[#ccc] rounded bg-white">
                    <div className="text-xs text-[#888]">2024 &bull; CBSE Class XII</div>
                    <h4 className="font-semibold text-sm text-[#222]">99.2% School Topper</h4>
                    <p className="text-xs text-[#666]">Science stream city rank holder; 42 students scored 90%+ aggregate.</p>
                  </div>
                  <div className="p-3 border border-[#ccc] rounded bg-white">
                    <div className="text-xs text-[#888]">2024 &bull; CBSE Class X</div>
                    <h4 className="font-semibold text-sm text-[#222]">100% Pass Percentage</h4>
                    <p className="text-xs text-[#666]">68 students scored distinction in all subjects.</p>
                  </div>
                  <div className="p-3 border border-[#ccc] rounded bg-white">
                    <div className="text-xs text-[#888]">2023 &bull; National Olympiad</div>
                    <h4 className="font-semibold text-sm text-[#222]">3 Gold Medals &mdash; Science &amp; Math</h4>
                    <p className="text-xs text-[#666]">Qualified for national scholarship round.</p>
                  </div>
                </div>
              </div>
            </ScrollPopBox>

            <ScrollPopBox direction="right" className="h-full">
              <div className="h-full">
                <h3 className="text-base font-bold text-[#222] pb-2 border-b border-[#ccc] mb-4">Sports</h3>
                <div className="flex flex-col gap-3">
                  <div className="p-3 border border-[#ccc] rounded bg-white">
                    <div className="text-xs text-[#888]">2024 &bull; State Championship</div>
                    <h4 className="font-semibold text-sm text-[#222]">Inter-School Basketball Champions</h4>
                    <p className="text-xs text-[#666]">U-17 boys team clinched trophy without dropping a match.</p>
                  </div>
                  <div className="p-3 border border-[#ccc] rounded bg-white">
                    <div className="text-xs text-[#888]">2023 &bull; District Athletics</div>
                    <h4 className="font-semibold text-sm text-[#222]">Overall Athletics Trophy</h4>
                    <p className="text-xs text-[#666]">14 gold, 8 silver, 6 bronze across track and field events.</p>
                  </div>
                  <div className="p-3 border border-[#ccc] rounded bg-white">
                    <div className="text-xs text-[#888]">2023 &bull; Badminton</div>
                    <h4 className="font-semibold text-sm text-[#222]">State Level Representation</h4>
                    <p className="text-xs text-[#666]">Two singles players selected for national trials.</p>
                  </div>
                </div>
              </div>
            </ScrollPopBox>

            <ScrollPopBox direction="left" className="h-full">
              <div className="h-full">
                <h3 className="text-base font-bold text-[#222] pb-2 border-b border-[#ccc] mb-4">Cultural &amp; Co-Curricular</h3>
                <div className="flex flex-col gap-3">
                  <div className="p-3 border border-[#ccc] rounded bg-white">
                    <div className="text-xs text-[#888]">2024 &bull; Youth Festival</div>
                    <h4 className="font-semibold text-sm text-[#222]">Best Delegation Award</h4>
                    <p className="text-xs text-[#666]">Swept music, drama, and fine arts categories across 18 schools.</p>
                  </div>
                  <div className="p-3 border border-[#ccc] rounded bg-white">
                    <div className="text-xs text-[#888]">2024 &bull; National Debate</div>
                    <h4 className="font-semibold text-sm text-[#222]">Runners-Up &mdash; Parliamentary Debate</h4>
                    <p className="text-xs text-[#666]">Senior team placed 2nd among 60 participating institutions.</p>
                  </div>
                  <div className="p-3 border border-[#ccc] rounded bg-white">
                    <div className="text-xs text-[#888]">2023 &bull; Robotics Challenge</div>
                    <h4 className="font-semibold text-sm text-[#222]">Innovation First Prize</h4>
                    <p className="text-xs text-[#666]">Autonomous navigation project recognized at regional STEM expo.</p>
                  </div>
                </div>
              </div>
            </ScrollPopBox>
          </div>
        </div>
        </ScrollPopSection>
      </section>

      {/* =========================================================================
          8. WHAT'S HAPPENING — School Updates & Circulars
          ========================================================================= */}
      <section className="wireframe-section relative overflow-hidden" id="updates">
        {/* Scroll-triggered edge pop shape in empty margin space */}
        <ISBScrollPopEdgeShape shape="purple-stairs" align="right" topPosition="top-24 sm:top-28" />
        {/* Authentic Shady Side Academy coiled spirograph peeking from left edge */}
        <ScrollPopContourWave
          align="left"
          variant="mobius-loop"
          color="#1FFF01"
          topPosition="top-24 sm:top-28"
          className="opacity-90"
        />
        <ScrollPopSection direction="right">
          <div className="wireframe-container relative z-10">
            <div className="wf-label text-center flex items-center justify-center gap-2">
              <ISBShape type="blue-hourglass" size={15} />
              <span>News &amp; Updates</span>
            </div>
            <h2
              className="wf-heading !text-[36px] font-poppins font-bold text-[#222] leading-tight text-center break-words"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: '36px' }}
            >
              What&apos;s <ShadyHighlight color="turquoise">Happening</ShadyHighlight>
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
              <div className="lg:col-span-2 flex flex-col gap-4">
                <ScrollPopBox direction="left">
                  <div className="flex flex-col sm:flex-row gap-4 p-4 border border-[#ccc] rounded items-start sm:items-center bg-white">
                    <div className="wf-img-placeholder !w-full sm:!w-28 !h-20 shrink-0">THUMB</div>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs text-[#888]">12 Feb 2025 &bull; Event</div>
                      <h4 className="font-semibold text-sm text-[#222] break-words mt-0.5">Annual Sports Meet 2025 Announced</h4>
                      <p className="text-xs text-[#666] break-words mt-1">Three days of athletic competition, parade, and awards ceremony commencing March 1.</p>
                    </div>
                  </div>
                </ScrollPopBox>
                <ScrollPopBox direction="right">
                  <div className="flex flex-col sm:flex-row gap-4 p-4 border border-[#ccc] rounded items-start sm:items-center bg-white">
                    <div className="wf-img-placeholder !w-full sm:!w-28 !h-20 shrink-0">THUMB</div>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs text-[#888]">28 Jan 2025 &bull; Academic</div>
                      <h4 className="font-semibold text-sm text-[#222] break-words mt-0.5">CBSE Board Exam Preparation Workshops Underway</h4>
                      <p className="text-xs text-[#666] break-words mt-1">Special doubt-clearing sessions and mock test series scheduled for Classes X and XII.</p>
                    </div>
                  </div>
                </ScrollPopBox>
                <ScrollPopBox direction="left">
                  <div className="flex flex-col sm:flex-row gap-4 p-4 border border-[#ccc] rounded items-start sm:items-center bg-white">
                    <div className="wf-img-placeholder !w-full sm:!w-28 !h-20 shrink-0">THUMB</div>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs text-[#888]">15 Jan 2025 &bull; Celebration</div>
                      <h4 className="font-semibold text-sm text-[#222] break-words mt-0.5">Dev Samaj Foundation Day Celebrations</h4>
                      <p className="text-xs text-[#666] break-words mt-1">Reflecting on our heritage with community service drives and special morning assembly.</p>
                    </div>
                  </div>
                </ScrollPopBox>
              </div>

              <ScrollPopBox direction="right" className="h-full">
                <div className="p-4 border border-[#ccc] rounded flex flex-col justify-start bg-white h-full">
                  <h3 className="font-bold text-sm text-[#222] mb-4 pb-2 border-b border-[#ccc]">Circulars &amp; Notices</h3>
                  <div className="flex flex-col gap-3">
                    <div className="pb-2 border-b border-[#eee]">
                      <div className="text-xs text-[#888]">08 Feb 2025</div>
                      <div className="text-xs font-medium text-[#222] hover:underline cursor-pointer break-words">Date sheet for Annual Examinations (Classes VI&ndash;IX, XI)</div>
                    </div>
                    <div className="pb-2 border-b border-[#eee]">
                      <div className="text-xs text-[#888]">02 Feb 2025</div>
                      <div className="text-xs font-medium text-[#222] hover:underline cursor-pointer break-words">Advisory on winter uniform &amp; school timings</div>
                    </div>
                    <div className="pb-2 border-b border-[#eee]">
                      <div className="text-xs text-[#888]">20 Jan 2025</div>
                      <div className="text-xs font-medium text-[#222] hover:underline cursor-pointer break-words">Parent-Teacher Meeting schedule &amp; slot booking</div>
                    </div>
                    <div className="pb-2 border-b border-[#eee]">
                      <div className="text-xs text-[#888]">10 Jan 2025</div>
                      <div className="text-xs font-medium text-[#222] hover:underline cursor-pointer break-words">Fee deposit deadline for Quarter IV &mdash; Reminder</div>
                    </div>
                    <div>
                      <div className="text-xs text-[#888]">05 Jan 2025</div>
                      <div className="text-xs font-medium text-[#222] hover:underline cursor-pointer break-words">Transport route adjustment notice &mdash; Route 7 &amp; 12</div>
                    </div>
                  </div>
                </div>
              </ScrollPopBox>
            </div>
          </div>
        </ScrollPopSection>
      </section>

      {/* =========================================================================
          9. THROUGH OUR LENS — Gallery Mosaic
          ========================================================================= */}
      <section className="wireframe-section relative overflow-hidden" id="gallery">
        {/* Scroll-triggered edge pop shape in empty margin space */}
        <ISBScrollPopEdgeShape shape="yellow-bars" align="left" topPosition="top-24 sm:top-28" />
        {/* Authentic Shady Side Academy coiled spirograph peeking from right edge */}
        <ScrollPopContourWave
          align="right"
          variant="vortex-curl"
          color="#11FEEE"
          topPosition="top-24 sm:top-28"
          className="opacity-90"
        />
        <ScrollPopSection direction="left">
          <div className="wireframe-container relative z-10">
            <div className="wf-label text-center flex items-center justify-center gap-2">
              <ISBShape type="green-flower" size={15} />
              <span>Gallery</span>
            </div>
            <h2
              className="wf-heading !text-[36px] font-poppins font-bold text-[#222] leading-tight text-center break-words"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: '36px' }}
            >
              Through Our <ShadyHighlight color="turquoise">Lens</ShadyHighlight>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8">
              <ScrollPopBox direction="left"><div className="wf-img-placeholder h-40">CLASSROOM IN ACTION</div></ScrollPopBox>
              <ScrollPopBox direction="right" className="col-span-2"><div className="wf-img-placeholder md:col-span-2 h-40">SCIENCE LAB EXPERIMENT</div></ScrollPopBox>
              <ScrollPopBox direction="left"><div className="wf-img-placeholder h-40">ART STUDIO</div></ScrollPopBox>
              <ScrollPopBox direction="right" className="col-span-2 md:row-span-2"><div className="wf-img-placeholder md:col-span-2 md:row-span-2 h-84">ANNUAL SPORTS DAY CELEBRATIONS</div></ScrollPopBox>
              <ScrollPopBox direction="left"><div className="wf-img-placeholder h-40">MORNING ASSEMBLY</div></ScrollPopBox>
              <ScrollPopBox direction="right"><div className="wf-img-placeholder h-40">LIBRARY STUDY HOUR</div></ScrollPopBox>
              <ScrollPopBox direction="left"><div className="wf-img-placeholder h-40">MUSIC PERFORMANCE</div></ScrollPopBox>
              <ScrollPopBox direction="right"><div className="wf-img-placeholder h-40">CAMPUS CORRIDORS</div></ScrollPopBox>
            </div>
          </div>
        </ScrollPopSection>
      </section>

      {/* =========================================================================
          BEYOND DEV SAMAJ — Community & Alumni (OpenClaw-style Reviews Slider)
          ========================================================================= */}
      <BeyondDevSamajReviews />

      {/* =========================================================================
          11B. WE MOVE WITH THE WORLD — Shady Side Academy Signature Values Section
          ========================================================================= */}
      <WeMoveSection />

      {/* =========================================================================
          12. ADMISSIONS — Take the First Step
          ========================================================================= */}
      <section className="wireframe-section relative overflow-hidden" id="admissions">
        {/* Scroll-triggered edge pop shape in empty margin space */}
        <ISBScrollPopEdgeShape shape="red-triangle" align="right" topPosition="top-24 sm:top-28" />
        {/* Authentic Shady Side Academy coiled spirograph peeking from left edge */}
        <ScrollPopContourWave
          align="left"
          variant="saddle-cross"
          color="#1FFF01"
          topPosition="top-24 sm:top-28"
          className="opacity-90"
        />
        <ScrollPopSection direction="right">
          <div className="wireframe-container relative z-10">
            <div className="wf-label text-center flex items-center justify-center gap-2">
              <ISBShape type="red-triangle" size={15} />
              <span>Join Us</span>
            </div>
            <h2
              className="wf-heading !text-[36px] font-poppins font-bold text-[#222] leading-tight text-center break-words"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: '36px' }}
            >
              Take the <ShadyHighlight color="turquoise">First Step</ShadyHighlight>
            </h2>

            {/* Signature ISB Background Container framing the Admissions Procedure & Key Info */}
            <ScrollPopBox direction="right" className="mt-8">
              <div className="relative max-w-5xl mx-auto p-6 sm:p-10 pb-14 sm:pb-16 rounded-3xl rounded-bl-none border-0 border-none bg-[#0064ec] text-white shadow-xl shadow-blue-900/15 overflow-hidden">
                {/* ISB Signature Bottom-Left Corner Design */}
                <ISBCornerDesign size={42} className="sm:scale-110" />

                {/* Ambient gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0051e8] via-[#0064ec] to-[#0d7aff] opacity-95 pointer-events-none" />

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                  {/* Left Column: 4 Admissions Steps */}
                  <div className="flex flex-col gap-5">
                    <div className="flex gap-4 items-start">
                      <div className="w-8 h-8 rounded-full bg-white text-[#0064ec] flex items-center justify-center font-bold text-xs flex-shrink-0 shadow-sm">
                        1
                      </div>
                      <div>
                        <h4 className="font-bold text-base text-white mb-1">Inquire</h4>
                        <p className="text-xs text-blue-100 leading-relaxed">
                          Submit an online inquiry or visit our admissions office in person to receive the prospectus and fee structure.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="w-8 h-8 rounded-full bg-white text-[#0064ec] flex items-center justify-center font-bold text-xs flex-shrink-0 shadow-sm">
                        2
                      </div>
                      <div>
                        <h4 className="font-bold text-base text-white mb-1">Visit &amp; Observe</h4>
                        <p className="text-xs text-blue-100 leading-relaxed">
                          Join a scheduled campus tour to experience classrooms, meet faculty, and see student life in action.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="w-8 h-8 rounded-full bg-white text-[#0064ec] flex items-center justify-center font-bold text-xs flex-shrink-0 shadow-sm">
                        3
                      </div>
                      <div>
                        <h4 className="font-bold text-base text-white mb-1">Assessment &amp; Dialogue</h4>
                        <p className="text-xs text-blue-100 leading-relaxed">
                          An age-appropriate interaction designed to understand your child&apos;s learning profile, not just test scores.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="w-8 h-8 rounded-full bg-white text-[#0064ec] flex items-center justify-center font-bold text-xs flex-shrink-0 shadow-sm">
                        4
                      </div>
                      <div>
                        <h4 className="font-bold text-base text-white mb-1">Welcome</h4>
                        <p className="text-xs text-blue-100 leading-relaxed">
                          Upon offer acceptance and documentation completion, your child joins the Dev Samaj family.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Key Information Box & Actions */}
                  <div className="bg-white/10 backdrop-blur-xs border border-white/20 rounded-2xl p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/20">
                        <h3 className="font-bold text-lg text-white">Key Information</h3>
                        <span className="text-[10px] font-bold uppercase tracking-wider bg-white/20 text-white px-2.5 py-0.5 rounded-full">
                          2025&ndash;26
                        </span>
                      </div>
                      <ul className="text-xs text-blue-100 divide-y divide-white/10 mb-6 space-y-0">
                        <li className="py-2.5 flex justify-between"><strong>Academic Year:</strong> <span>April &ndash; March</span></li>
                        <li className="py-2.5 flex justify-between"><strong>Admissions Open:</strong> <span>Pre-Primary to IX &amp; XI</span></li>
                        <li className="py-2.5 flex justify-between"><strong>Affiliation:</strong> <span>CBSE New Delhi</span></li>
                        <li className="py-2.5 flex justify-between"><strong>Campus Visits:</strong> <span>Mon &ndash; Fri, 9 AM &ndash; 1 PM</span></li>
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-3 mt-4">
                      <a href="#inquire" className="px-5 py-2.5 rounded-xl bg-white text-[#0064ec] hover:bg-blue-50 transition-colors font-bold text-xs tracking-wide">
                        APPLY ONLINE
                      </a>
                      <a href="#prospectus" className="px-5 py-2.5 rounded-xl border-2 border-white/80 text-white hover:bg-white/15 transition-colors font-semibold text-xs tracking-wide">
                        DOWNLOAD PROSPECTUS
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollPopBox>
          </div>
        </ScrollPopSection>
      </section>

      {/* =========================================================================
          FOOTER — Comprehensive Wireframe Footer with ISB Decorative Shape System
          ========================================================================= */}
      <footer className="border-t border-[#ccc] py-12 text-[#666] bg-white overflow-hidden">
        <ScrollPopSection direction="right">
          <div className="wireframe-container">
            {/* ISB Signature Decorative Shapes Row */}
            <div className="mb-10 pb-8 border-b border-[#eee] flex flex-col items-center justify-center text-center">
              <div className="text-[11px] font-bold uppercase tracking-widest text-[#888] mb-2">
                Values in Action &bull; Symbolic Shapes
              </div>
              <ISBFooterIconsRow />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <ScrollPopBox direction="left">
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-bold text-[#222] mb-3">IS Dev Samaj Senior Secondary School</h4>
                  <p className="text-xs leading-relaxed text-[#666]">
                    Affiliated to CBSE, New Delhi.<br />
                    Affiliation No. 2630018<br />
                    Sector 21-C, Chandigarh &mdash; 160022
                  </p>
                </div>
              </ScrollPopBox>
              <ScrollPopBox direction="right">
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-bold text-[#222] mb-3">Academics</h4>
                  <ul className="text-xs flex flex-col gap-1.5">
                    <li><a href="#journey" className="hover:text-[#222]">Primary School</a></li>
                    <li><a href="#journey" className="hover:text-[#222]">Middle School</a></li>
                    <li><a href="#journey" className="hover:text-[#222]">High School</a></li>
                    <li><a href="#updates" className="hover:text-[#222]">CBSE Mandatory Disclosure</a></li>
                  </ul>
                </div>
              </ScrollPopBox>
              <ScrollPopBox direction="left">
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-bold text-[#222] mb-3">Campus &amp; Life</h4>
                  <ul className="text-xs flex flex-col gap-1.5">
                    <li><a href="#story" className="hover:text-[#222]">Our Campus Heritage</a></li>
                    <li><a href="#beyond" className="hover:text-[#222]">Sports &amp; Athletics</a></li>
                    <li><a href="#guldaasta" className="hover:text-[#222]">Guldaasta Festival</a></li>
                    <li><a href="#achievements" className="hover:text-[#222]">Student Achievements</a></li>
                    <li><a href="#gallery" className="hover:text-[#222]">Campus Gallery</a></li>
                  </ul>
                </div>
              </ScrollPopBox>
              <ScrollPopBox direction="right">
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-bold text-[#222] mb-3">Connect</h4>
                  <ul className="text-xs flex flex-col gap-1.5">
                    <li><a href="#admissions" className="hover:text-[#222]">Admissions 2025&ndash;26</a></li>
                    <li><a href="#story" className="hover:text-[#222]">About Dev Samaj</a></li>
                    <li><a href="#updates" className="hover:text-[#222]">Circulars &amp; Notices</a></li>
                    <li><a href="#community" className="hover:text-[#222]">Alumni Portal</a></li>
                    <li><a href="#admissions" className="hover:text-[#222]">Inquiry &amp; Admissions</a></li>
                  </ul>
                </div>
              </ScrollPopBox>
            </div>
            <div className="pt-6 border-t border-[#ccc] flex flex-col sm:flex-row justify-between items-center text-xs text-[#888] gap-4">
              <div>&copy; {new Date().getFullYear()} IS Dev Samaj Senior Secondary School. All rights reserved.</div>
              <div className="flex gap-6">
                <a href="#privacy" className="hover:text-[#222]">Privacy Policy</a>
                <a href="#terms" className="hover:text-[#222]">Terms of Use</a>
                <a href="#sitemap" className="hover:text-[#222]">Sitemap</a>
              </div>
            </div>
          </div>
        </ScrollPopSection>
      </footer>
    </>
  );
};
