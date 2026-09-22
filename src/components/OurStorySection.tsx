import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Sparkles, CheckCircle2, HeartHandshake, BookOpen, ShieldCheck, X } from 'lucide-react';
import { STORY_STATS } from '../data/schoolData';
import campusImg from '../assets/campus1-1.webp';
import { ISBRedCornerAccent } from './DecorativeShapes';

export const OurStorySection: React.FC = () => {
  const [showStoryModal, setShowStoryModal] = useState(false);
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

  return (
    <section id="story" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Wireframe: .label */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-amber-700">
            Our Story
          </span>
          <span className="w-10 h-[1px] bg-amber-400" />
        </div>

        {/* Responsive Background inspired by ISB's "Discover & Experience" section */}
        <motion.div
          initial={!isMobileOrTablet ? { opacity: 0, x: -140, scale: 0.98 } : false}
          whileInView={!isMobileOrTablet ? { opacity: 1, x: 0, scale: 1 } : undefined}
          viewport={{ once: true, amount: 0.12 }}
          transition={{
            type: 'spring',
            stiffness: 75,
            damping: 18,
            mass: 0.85,
          }}
          className="relative rounded-3xl lg:bg-[#f5f5f5] lg:border lg:border-neutral-200/90 lg:p-12 xl:p-14 lg:shadow-sm"
        >
          {/* Red coloured design at top-right corner for large screens (enlarged for prominence) */}
          <div className="hidden lg:block absolute -top-7 -right-4 xl:-top-8 xl:-right-5 z-20 pointer-events-none select-none">
            <ISBRedCornerAccent size={112} />
          </div>

          {/* Wireframe: .story-layout (2 columns grid) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Wireframe: .story-image */}
            <div className="relative group">
              {/* Small screens wrapper:
                  - The background touches the left edge completely (half out of screen feel).
                  - The background is expanded and visibly framed around the image.
                  - The image itself is NOT cut, keeping its full rounded corners and borders intact.
                  - The entire unit smoothly pops out of the left side. */}
              <motion.div
                initial={isMobileOrTablet ? { opacity: 0, x: -110, scale: 0.95 } : false}
                whileInView={isMobileOrTablet ? { opacity: 1, x: 0, scale: 1 } : undefined}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  type: 'spring',
                  stiffness: 85,
                  damping: 17,
                  mass: 0.85,
                }}
                className="relative rounded-r-3xl rounded-l-none bg-[#f5f5f5] border-y border-r border-l-0 border-neutral-200/90 shadow-md
                  -ml-4 sm:-ml-6 w-[calc(100%+1rem)] sm:w-[calc(100%+1.5rem)]
                  p-6 sm:p-8 pt-8 sm:pt-10 pb-8 sm:pb-10 pl-6 sm:pl-8 pr-6 sm:pr-8
                  lg:ml-0 lg:w-full lg:rounded-3xl lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none"
              >
                {/* Red coloured design at top-right corner for small screens (enlarged for prominence) */}
                <div className="block lg:hidden absolute -top-5 right-3 sm:-top-6 sm:right-4 z-20 pointer-events-none select-none">
                  <ISBRedCornerAccent size={88} />
                </div>

                {/* Uncut campus photo with complete rounded corners and slate depth gradient */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-slate-900/25 border border-slate-200 aspect-[16/10] sm:aspect-[16/10] lg:aspect-[4/3] bg-slate-900">
                  <img
                    src={campusImg}
                    alt="IS Dev Samaj Iconic Heritage Campus Chandigarh"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-[center_35%] group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Dark slate depth gradient on bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-28 sm:h-36 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent pointer-events-none" />

                  {/* Bottom-left CAMPUS label with white color and Poppins sans-serif typography */}
                  <div
                    id="our-story-campus-image-label"
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

              {/* Decorative Badge */}
              <div className="hidden sm:flex absolute -top-5 -right-5 bg-blue-900 text-amber-300 p-4 rounded-xl shadow-xl border border-amber-400/30 items-center gap-3">
                <ShieldCheck className="w-8 h-8 shrink-0 text-amber-400" />
                <div>
                  <p className="text-xs font-bold uppercase text-white">Affiliated with CBSE</p>
                  <p className="text-[11px] text-amber-200">New Delhi • Co-Educational</p>
                </div>
              </div>
            </div>

            {/* Wireframe: .story-text */}
          <div className="flex flex-col">
            <h2
              className="text-[34px] font-fraunces font-bold text-slate-900 tracking-tight leading-tight mb-6 text-center break-words"
              style={{ fontFamily: "'Fraunces', serif", fontSize: '34px' }}
            >
              where values meet vision.....
            </h2>

            {/* Reduced text on small screens (outside any box/background); full text on large screens */}
            <p className="block lg:hidden text-base text-[#003366] leading-relaxed mb-6 font-medium">
              Rooted in Dev Samaj philosophy, shaping intellect and character with purpose.
            </p>
            <div className="hidden lg:block space-y-4 mb-8 text-base text-[#003366] leading-relaxed">
              <p>
                A school rooted in community, shaped by decades of commitment to holistic education. More than academics &mdash; a place where character is built alongside knowledge.
              </p>
              <p>
                From its founding mission to the thriving community it serves today, IS Dev Samaj stands as a testament to what education can build when guided by purpose. Our educational philosophy synthesizes Indian philosophical ethics with contemporary STEM rigour.
              </p>
            </div>

            {/* Key Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200">
                <HeartHandshake className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Moral Character</h4>
                  <p className="text-[11px] text-slate-500">Truthfulness, empathy, and respect in daily habit.</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200">
                <BookOpen className="w-5 h-5 text-blue-800 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Academic Rigour</h4>
                  <p className="text-[11px] text-slate-500">Conceptual mastery and active scientific inquiry.</p>
                </div>
              </div>
            </div>

            {/* Wireframe: .story-stats */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200 mb-8">
              {STORY_STATS.slice(0, 3).map((stat) => (
                <div key={stat.label} className="text-left">
                  <div className="text-2xl sm:text-3xl font-extrabold text-blue-900 font-display">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-800 mt-1">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-slate-500 hidden sm:block">
                    {stat.sublabel}
                  </div>
                </div>
              ))}
            </div>

            {/* Wireframe: .cta */}
            <div>
              <button
                onClick={() => setShowStoryModal(true)}
                className="inline-flex items-center justify-center px-6 py-3.5 bg-slate-900 hover:bg-slate-800 active:bg-slate-950 text-white text-xs font-bold uppercase tracking-wider rounded-md transition-colors"
              >
                DISCOVER OUR STORY
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>

      {/* Story Modal */}
      {showStoryModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setShowStoryModal(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
            <span className="text-xs font-bold text-amber-700 uppercase tracking-widest">Our Heritage</span>
            <h3 className="text-2xl font-bold text-slate-900 mt-1 mb-4 font-display">
              The Genesis of I.S. Dev Samaj School
            </h3>
            <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
              <p>
                Founded under the auspices of Dev Samaj Society, I.S. Dev Samaj Senior Secondary School was established with a profound commitment to uplift human consciousness through education. Our founder Bhagwan Dev Atma advocated that true education must refine the moral heart while sharping intellectual faculties.
              </p>
              <p>
                Located in the heart of the city beautiful, Chandigarh (Sector 21-C), the campus offers a serene, tree-lined sanctuary where students cultivate intellectual curiosity, physical fitness, creative arts, and social responsibility.
              </p>
              <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl text-amber-900 text-xs">
                <strong>School Motto:</strong> "Satyam, Shivam, Sundaram — Truth, Goodness, and Beauty in Thought, Word, and Deed."
              </div>
            </div>
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setShowStoryModal(false)}
                className="px-5 py-2 bg-slate-900 text-white text-xs font-semibold rounded-md hover:bg-slate-800"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
