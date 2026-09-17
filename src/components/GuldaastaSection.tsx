import React, { useState } from 'react';
import { Sparkles, Heart, Users, Star, Calendar, PlayCircle, X } from 'lucide-react';

export const GuldaastaSection: React.FC = () => {
  const [showVideoModal, setShowVideoModal] = useState(false);

  return (
    <section
      id="guldaasta"
      className="relative py-24 lg:py-32 bg-slate-900 text-white overflow-hidden border-b border-slate-800"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Wireframe: .guldaasta-inner (max-width 800px, text-center) */}
        <div className="max-w-[800px] mx-auto text-center">
          {/* Wireframe: .label */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs uppercase font-bold tracking-[0.2em] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Guldasta • Annual Signature Festival</span>
          </div>

          {/* Wireframe: .heading */}
          <h2
            className="!text-[36px] font-poppins font-bold tracking-tight text-center break-words leading-tight mb-4 text-white"
            style={{ fontFamily: "'Poppins', sans-serif", fontSize: '36px' }}
          >
            A Celebration of Togetherness
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto mb-10 leading-relaxed">
            More than an annual function, <span className="text-amber-300 font-semibold">Guldaasta</span> is the living heartbeat of Dev Samaj — an iconic festival where families, educators, students, and alumni coalesce.
          </p>

          {/* Wireframe: .guldaasta-visual (VERY LARGE VISUAL, min-height 500-600px desktop) */}
          <div className="relative group rounded-3xl overflow-hidden shadow-2xl border border-white/10 min-h-[420px] sm:min-h-[540px] lg:min-h-[600px] my-8 flex items-center justify-center bg-slate-950">
            <img
              src="https://isdevsamaj21.ac.in/wp-content/uploads/2024/05/g17.jpg"
              alt="Guldaasta Celebration at IS Dev Samaj School"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 opacity-85"
            />

            {/* Edge depth & vignette for cinematic presence */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-slate-950/60" />
            <div className="absolute inset-0 hero-vignette pointer-events-none" />

            {/* Content overlaid inside the visual */}
            <div className="relative z-10 p-6 sm:p-10 flex flex-col items-center text-center max-w-lg">
              <button
                onClick={() => setShowVideoModal(true)}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 mb-6 group-hover:bg-amber-300"
                aria-label="Play Guldaasta highlight reel"
              >
                <PlayCircle className="w-9 h-9 sm:w-11 sm:h-11 ml-0.5" />
              </button>

              <span className="text-xs uppercase font-bold tracking-[0.25em] text-amber-300 mb-2">
                Spectacular Student Performances
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-white mb-3">
                Guldaasta 2024 &ndash; Highlights
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 line-clamp-3">
                Over 800 student artists took the grand stage presenting mythological dances, symphony orchestras, and thought-provoking theatrical plays.
              </p>

              {/* Floating metrics */}
              <div className="grid grid-cols-3 gap-3 mt-6 w-full pt-4 border-t border-white/20">
                <div>
                  <div className="text-xl font-bold text-amber-300 font-display">800+</div>
                  <div className="text-[10px] uppercase text-slate-300 font-medium">Performers</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-amber-300 font-display">3,000+</div>
                  <div className="text-[10px] uppercase text-slate-300 font-medium">Attendees</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-amber-300 font-display">25+</div>
                  <div className="text-[10px] uppercase text-slate-300 font-medium">Cultural Acts</div>
                </div>
              </div>
            </div>
          </div>

          {/* Wireframe: .guldaasta-text */}
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto my-6 leading-relaxed">
            The school's signature celebration honors diversity, harmony, and creative freedom. From classical raags to contemporary choreography, Guldaasta nurtures self-esteem and stage mastery for every child.
          </p>

          {/* Wireframe: .cta */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
            <a
              href="#gallery"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-md transition-colors"
            >
              EXPLORE GULDAASTA GALLERY
            </a>
            <button
              onClick={() => setShowVideoModal(true)}
              className="inline-flex items-center justify-center px-8 py-3.5 border border-slate-700 hover:border-slate-500 text-slate-200 text-xs font-bold uppercase tracking-wider rounded-md transition-colors"
            >
              WATCH HIGHLIGHTS
            </button>
          </div>
        </div>
      </div>

      {/* Video / Showcase Modal */}
      {showVideoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-3xl w-full p-6 relative shadow-2xl">
            <button
              onClick={() => setShowVideoModal(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-full bg-slate-800"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-xl font-bold text-white mb-4 font-display">
              Guldaasta Celebration Showcase
            </h3>
            <div className="aspect-video w-full rounded-xl overflow-hidden bg-slate-950 border border-slate-800 relative flex items-center justify-center">
              <img
                src="https://isdevsamaj21.ac.in/wp-content/uploads/2024/05/g17.jpg"
                alt="Guldaasta Showcase"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center p-4">
                <span className="text-amber-400 text-xs uppercase font-bold tracking-widest mb-1">
                  Annual Function Reel
                </span>
                <p className="text-white text-base font-semibold max-w-md">
                  I.S. Dev Samaj Senior Secondary School, Sector 21-C, Chandigarh
                </p>
                <p className="text-slate-300 text-xs mt-2">
                  Recorded live in the school auditorium & amphitheatre
                </p>
              </div>
            </div>
            <p className="text-xs text-slate-400 mt-4 text-center">
              Guldaasta 2025 registrations and auditions for current students commence next term.
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
