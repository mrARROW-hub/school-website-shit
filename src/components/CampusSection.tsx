import React, { useState } from 'react';
import { CAMPUS_FACILITIES } from '../data/schoolData';
import { Sparkles, CheckCircle2, ChevronRight, X } from 'lucide-react';
import { CampusFacility } from '../types';

export const CampusSection: React.FC = () => {
  const [activeModalFacility, setActiveModalFacility] = useState<CampusFacility | null>(null);

  const featured = CAMPUS_FACILITIES[0]; // Library
  const lab = CAMPUS_FACILITIES[1]; // Laboratories
  const sports = CAMPUS_FACILITIES[2]; // Sports

  return (
    <section id="campus" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Wireframe: .label */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-amber-700">
            Campus
          </span>
          <span className="w-10 h-[1px] bg-amber-400" />
        </div>

        {/* Wireframe: .heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <h2
              className="!text-[36px] font-poppins font-bold text-slate-900 tracking-tight text-center break-words leading-tight"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: '36px' }}
            >
              Where Learning Happens
            </h2>
            <p className="text-sm text-slate-500 mt-2 max-w-xl">
              Thoughtfully architected spaces designed to stimulate intellectual curiosity, scientific discovery, and physical vigor.
            </p>
          </div>
          <span className="text-xs text-slate-400 font-medium hidden md:inline">
            Sector 21-C Campus • Chandigarh
          </span>
        </div>

        {/* Wireframe: .campus-grid (2fr 1fr grid, 2 rows) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Featured: Library & Resource Centre (spans 2 columns on desktop) */}
          <div
            onClick={() => setActiveModalFacility(featured)}
            className="lg:col-span-2 relative group rounded-2xl overflow-hidden shadow-md border border-slate-200 min-h-[380px] sm:min-h-[460px] cursor-pointer bg-slate-900"
          >
            <img
              src={featured.image}
              alt={featured.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-85 group-hover:opacity-95"
            />
            {/* Depth overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

            <div className="absolute top-6 left-6">
              <span className="px-3 py-1 bg-amber-400 text-slate-950 text-xs font-bold uppercase tracking-wider rounded-md shadow">
                {featured.badge || 'Featured Facility'}
              </span>
            </div>

            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold mb-1 block">
                {featured.category}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-display mb-2 text-white">
                {featured.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 max-w-xl line-clamp-2 mb-4">
                {featured.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {featured.highlights.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/15 backdrop-blur-md text-[11px] font-medium text-slate-100"
                  >
                    <CheckCircle2 className="w-3 h-3 text-amber-400" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Secondary items column (Laboratories & Sports) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            {/* Laboratories */}
            <div
              onClick={() => setActiveModalFacility(lab)}
              className="relative group rounded-2xl overflow-hidden shadow-md border border-slate-200 min-h-[220px] cursor-pointer bg-slate-900"
            >
              <img
                src={lab.image}
                alt={lab.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-[10px] uppercase tracking-widest text-amber-300 font-bold block mb-1">
                  {lab.category}
                </span>
                <h3 className="text-lg font-bold font-display mb-1">{lab.title}</h3>
                <p className="text-xs text-slate-300 line-clamp-2">{lab.description}</p>
              </div>
            </div>

            {/* Sports & Recreation */}
            <div
              onClick={() => setActiveModalFacility(sports)}
              className="relative group rounded-2xl overflow-hidden shadow-md border border-slate-200 min-h-[220px] cursor-pointer bg-slate-900"
            >
              <img
                src={sports.image}
                alt={sports.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-[10px] uppercase tracking-widest text-amber-300 font-bold block mb-1">
                  {sports.category}
                </span>
                <h3 className="text-lg font-bold font-display mb-1">{sports.title}</h3>
                <p className="text-xs text-slate-300 line-clamp-2">{sports.description}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Wireframe: .cta */}
        <div className="mt-12 flex justify-center">
          <a
            href="#gallery"
            className="inline-flex items-center justify-center px-8 py-3.5 border border-slate-900 hover:bg-slate-900 hover:text-white text-slate-900 text-xs font-bold uppercase tracking-wider rounded-md transition-colors"
          >
            EXPLORE OUR CAMPUS &amp; FACILITIES
          </a>
        </div>
      </div>

      {/* Facility Detail Modal */}
      {activeModalFacility && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-xl w-full overflow-hidden shadow-2xl relative">
            <div className="relative h-60 w-full">
              <img
                src={activeModalFacility.image}
                alt={activeModalFacility.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setActiveModalFacility(null)}
                className="absolute top-4 right-4 p-2 bg-black/60 text-white hover:bg-black rounded-full"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6">
              <span className="text-xs uppercase font-bold text-amber-700 tracking-wider">
                {activeModalFacility.category}
              </span>
              <h3 className="text-2xl font-bold text-slate-900 mt-1 mb-3 font-display">
                {activeModalFacility.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                {activeModalFacility.description}
              </p>
              <div className="space-y-2 pt-2 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-900 uppercase">Key Provisions:</span>
                <ul className="space-y-1.5">
                  {activeModalFacility.highlights.map((h) => (
                    <li key={h} className="text-xs text-slate-700 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
