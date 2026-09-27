import React, { useState } from 'react';
import { ISBShape, ISBScrollPopEdgeShape } from './DecorativeShapes';
import { ScrollPopContourWave } from './ContourWavePattern';
import { ShadyHighlight } from './ShadyHighlight';
import { Camera, ArrowRight, X, Maximize2 } from 'lucide-react';

export interface LensBubbleItem {
  id: string;
  imageSrc: string;
  fallbackSrc?: string;
  title: string;
  category: string;
  caption: string;
  positionClass: string;
  sizeClass: string;
  shadowClass?: string;
}

// ============================================================================
// BUBBLE CONFIGURATION WITH RESPONSIVE POSITIONING:
// - Small screens: Top small bubble (user-bubble-3) shifts towards the center
//   (left-1/2 -translate-x-1/2) to prevent crowding with side bubbles.
// - Larger screens (sm+): Preserves exact reference positioning at left-[52%].
// ============================================================================
const REFERENCE_BUBBLES: LensBubbleItem[] = [
  // BIG BUBBLE 1 — Left Hero
  {
    id: 'user-bubble-1',
    imageSrc: '/user-lens-1.png',
    fallbackSrc: 'https://loose-azure-z2i4yvfz.edgeone.dev/file.png',
    title: 'Vibrant Campus Life',
    category: 'Student Life',
    caption: 'Everyday campus moments filled with energy, collaboration, and learning.',
    positionClass: 'left-[1%] sm:left-[2%] top-[12%] sm:top-[10%]',
    sizeClass: 'w-28 h-28 xs:w-36 xs:h-36 sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-76 lg:h-76 xl:w-84 xl:h-84',
    shadowClass: 'shadow-lg hover:shadow-2xl',
  },
  // BIG BUBBLE 2 — Right Hero
  {
    id: 'user-bubble-2',
    imageSrc: '/user-lens-2.png',
    fallbackSrc: 'https://numerous-sapphire-qxsqxly3.edgeone.dev/file.png',
    title: 'School Spirit & Community',
    category: 'Events & Culture',
    caption: 'Celebrating our close-knit student community and memorable school occasions.',
    positionClass: 'right-[1%] sm:right-[2%] top-[14%] sm:top-[12%]',
    sizeClass: 'w-26 h-26 xs:w-34 xs:h-34 sm:w-50 sm:h-50 md:w-60 md:h-60 lg:w-72 lg:h-72 xl:w-80 xl:h-80',
    shadowClass: 'shadow-lg hover:shadow-2xl',
  },
  // SMALLER BUBBLE — Centered on smaller screens, shifted to left-[52%] on sm+
  {
    id: 'user-bubble-3',
    imageSrc: '/user-lens-3.png',
    fallbackSrc: 'https://autonomous-tan-xksjqxb1.edgeone.dev/file.png',
    title: 'Sports Champions & Medals',
    category: 'Athletics & Honors',
    caption: 'Celebrating athletic excellence, teamwork, and proud podium finishes.',
    positionClass: 'left-1/2 -translate-x-1/2 sm:translate-x-0 sm:left-[52%] top-[1%] sm:top-[2%]',
    sizeClass: 'w-20 h-20 xs:w-24 xs:h-24 sm:w-34 sm:h-34 md:w-44 md:h-44 lg:w-52 lg:h-52 xl:w-56 xl:h-56',
    shadowClass: 'shadow-md hover:shadow-xl',
  },
  // BOTTOM LEFT BUBBLE
  {
    id: 'user-bubble-4',
    imageSrc: '/user-lens-4.png',
    fallbackSrc: 'https://existing-red-ju11omm9.edgeone.dev/file.png',
    title: 'Experiential Learning & Academics',
    category: 'Academics',
    caption: 'Engaging classrooms and hands-on academic discovery across grade levels.',
    positionClass: 'left-[2%] sm:left-[3%] bottom-[1%] sm:bottom-[2%]',
    sizeClass: 'w-24 h-24 xs:w-28 xs:h-28 sm:w-38 sm:h-38 md:w-50 md:h-50 lg:w-58 lg:h-58 xl:w-66 xl:h-66',
    shadowClass: 'shadow-lg hover:shadow-2xl',
  },
  // BOTTOM RIGHT BUBBLE
  {
    id: 'user-bubble-5',
    imageSrc: '/user-lens-5.png',
    fallbackSrc: 'https://assistant-coffee-i9jrjd6d.edgeone.dev/file.png',
    title: 'Creative Expressions & Assemblies',
    category: 'Co-Curricular',
    caption: 'Inspiring assemblies, performing arts, and joyful co-curricular activities.',
    positionClass: 'right-[2%] sm:right-[3%] bottom-[1%] sm:bottom-[2%]',
    sizeClass: 'w-24 h-24 xs:w-30 xs:h-30 sm:w-42 sm:h-42 md:w-54 md:h-54 lg:w-62 lg:h-62 xl:w-70 xl:h-70',
    shadowClass: 'shadow-lg hover:shadow-2xl',
  },
];

export const ThroughOurLensSection: React.FC = () => {
  const [selectedBubble, setSelectedBubble] = useState<LensBubbleItem | null>(null);

  return (
    <section
      id="gallery"
      className="wireframe-section relative overflow-hidden py-16 sm:py-28 md:py-36 lg:py-44 select-none bg-transparent"
    >
      {/* Scroll-triggered edge pop shape on left */}
      <ISBScrollPopEdgeShape shape="yellow-bars" align="left" topPosition="top-16 sm:top-24" />

      {/* Authentic Shady Side Academy coiled spirograph peeking from right edge */}
      <ScrollPopContourWave
        align="right"
        variant="vortex-curl"
        color="#11FEEE"
        topPosition="top-16 sm:top-24"
        className="opacity-90"
      />

      {/* Micro accent particles matching reference */}
      <div
        className="absolute w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 rounded-full bg-[#11FEEE]/50 pointer-events-none"
        style={{ right: '24%', top: '5%' }}
      />
      <div
        className="absolute w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full bg-[#FFB81C]/50 pointer-events-none"
        style={{ right: '28%', top: '64%' }}
      />
      <div
        className="absolute w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full bg-[#FF4560]/40 pointer-events-none"
        style={{ left: '26%', bottom: '20%' }}
      />

      {/* =======================================================================
          MAIN CANVAS
          ======================================================================= */}
      <div className="wireframe-container relative w-full min-h-[520px] xs:min-h-[560px] sm:min-h-[660px] md:min-h-[760px] lg:min-h-[860px] xl:min-h-[920px] flex items-center justify-center">
        {/* =====================================================================
            1. NON-OVERLAPPING SCATTERED BUBBLES
            ===================================================================== */}
        {REFERENCE_BUBBLES.map((bubble) => (
          <div
            key={bubble.id}
            className={`absolute ${bubble.positionClass} z-10 transition-transform duration-300 hover:z-30`}
          >
            <button
              type="button"
              onClick={() => setSelectedBubble(bubble)}
              aria-label={`View ${bubble.title}`}
              className={`group relative ${bubble.sizeClass} rounded-full overflow-hidden border-2 xs:border-3 sm:border-4 md:border-5 border-white ${bubble.shadowClass || 'shadow-lg'} hover:scale-106 active:scale-95 transition-all duration-300 cursor-pointer bg-slate-100 block focus:outline-hidden focus:ring-4 focus:ring-[#11FEEE]/60`}
            >
              <img
                src={bubble.imageSrc}
                alt={bubble.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                onError={(e) => {
                  if (bubble.fallbackSrc) {
                    (e.target as HTMLImageElement).src = bubble.fallbackSrc;
                  }
                }}
              />

              {/* Subtle hover overlay with title */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end p-2.5 sm:p-4 text-center text-white">
                <span className="text-[8px] sm:text-[11px] font-bold uppercase tracking-wider text-[#11FEEE] drop-shadow-xs line-clamp-1">
                  {bubble.category}
                </span>
                <span className="text-[9px] sm:text-xs font-semibold leading-tight line-clamp-1 drop-shadow-sm">
                  {bubble.title}
                </span>
                <Maximize2 className="w-3 h-3 sm:w-4 sm:h-4 mt-1 text-white opacity-90" />
              </div>
            </button>
          </div>
        ))}

        {/* =====================================================================
            2. CENTER CONTENT BLOCK
            ===================================================================== */}
        <div className="relative z-20 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl text-center px-4 pt-16 xs:pt-20 sm:pt-16 pb-4 mx-auto pointer-events-auto flex flex-col items-center justify-center">
          {/* Category Tag */}
          <div className="wf-label text-center flex items-center justify-center gap-2 mb-2 sm:mb-3">
            <ISBShape type="green-flower" size={15} />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#041E42]">
              Gallery
            </span>
          </div>

          {/* Main Headline */}
          <h2
            className="wf-heading !text-[30px] xs:!text-[34px] sm:!text-[46px] md:!text-[56px] lg:!text-[68px] font-poppins font-bold text-[#041E42] leading-[1.08] text-center break-words tracking-tight mb-5 sm:mb-8"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Through Our <ShadyHighlight color="turquoise">Lens</ShadyHighlight>
          </h2>

          {/* Action CTA Button */}
          <button
            type="button"
            onClick={() => setSelectedBubble(REFERENCE_BUBBLES[0])}
            className="inline-flex items-center gap-2.5 px-5 sm:px-8 py-2.5 sm:py-3.5 rounded-full bg-[#041E42] hover:bg-[#001730] text-white text-xs sm:text-sm font-bold uppercase tracking-wider shadow-md hover:shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            <Camera className="w-4 h-4 text-[#FFB81C]" />
            <span>Explore All Moments</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* =======================================================================
          LIGHTBOX MODAL FOR FULL-RESOLUTION PREVIEW
          ======================================================================= */}
      {selectedBubble && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedBubble(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedBubble(null)}
              className="absolute top-4 right-4 z-20 p-2.5 bg-black/60 hover:bg-black text-white rounded-full transition-colors cursor-pointer"
              aria-label="Close image modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="max-h-[65vh] w-full flex items-center justify-center bg-slate-950 overflow-hidden">
              <img
                src={selectedBubble.imageSrc}
                alt={selectedBubble.title}
                className="max-h-[65vh] w-full object-contain mx-auto"
                onError={(e) => {
                  if (selectedBubble.fallbackSrc) {
                    (e.target as HTMLImageElement).src = selectedBubble.fallbackSrc;
                  }
                }}
              />
            </div>

            <div className="p-6 sm:p-8 bg-white text-slate-900">
              <div className="flex items-center gap-2 text-xs font-bold text-[#041E42] uppercase tracking-wider mb-1.5">
                <span className="px-2.5 py-1 bg-slate-100 rounded-md text-[#041E42]">
                  {selectedBubble.category}
                </span>
                <span>•</span>
                <span className="text-slate-500">I.S. Dev Samaj School Lens</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-poppins text-[#041E42] mb-2">
                {selectedBubble.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {selectedBubble.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
