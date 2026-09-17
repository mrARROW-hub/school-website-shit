import React, { useState } from 'react';
import { SCHOOL_UPDATES } from '../data/schoolData';
import { Bell, Calendar, Megaphone, ArrowUpRight, X } from 'lucide-react';
import { SchoolUpdate } from '../types';

export const UpdatesSection: React.FC = () => {
  const [activeModalUpdate, setActiveModalUpdate] = useState<SchoolUpdate | null>(null);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'notice':
        return <Bell className="w-4 h-4 text-blue-700" />;
      case 'event':
        return <Calendar className="w-4 h-4 text-amber-600" />;
      case 'announcement':
      default:
        return <Megaphone className="w-4 h-4 text-emerald-700" />;
    }
  };

  return (
    <section id="updates" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Wireframe: .label */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-amber-700">
            School Updates
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
              What&apos;s Happening
            </h2>
            <p className="text-sm text-slate-500 mt-2 max-w-xl">
              Stay informed with our latest administrative notices, upcoming events, and academic circulars.
            </p>
          </div>
          <span className="text-xs font-medium text-slate-400">
            Official Bulletin Board • Session 2025-26
          </span>
        </div>

        {/* Wireframe: .updates-grid (repeat 3, 1fr) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SCHOOL_UPDATES.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveModalUpdate(item)}
              className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-200 flex flex-col justify-between cursor-pointer group"
            >
              <div className="min-w-0">
                {/* Wireframe: .update-type */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2 min-w-0">
                    <div className="p-1.5 rounded bg-slate-100 group-hover:bg-amber-50 transition-colors shrink-0">
                      {getTypeIcon(item.type)}
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 group-hover:text-blue-900 transition-colors truncate">
                      Latest {item.type}
                    </span>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-900 shrink-0">
                    {item.badge}
                  </span>
                </div>

                {/* Wireframe: .update-title */}
                <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-900 transition-colors mb-2 leading-snug break-words">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 line-clamp-3 mb-4 leading-relaxed break-words">
                  {item.summary}
                </p>
              </div>

              {/* Wireframe: .update-date */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                <span>{item.date}</span>
                <span className="inline-flex items-center gap-1 text-blue-900 font-semibold group-hover:translate-x-0.5 transition-transform">
                  Read more
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Wireframe: .cta */}
        <div className="mt-12 flex justify-center">
          <a
            href="#updates"
            onClick={(e) => {
              e.preventDefault();
              setActiveModalUpdate(SCHOOL_UPDATES[0]);
            }}
            className="inline-flex items-center justify-center px-8 py-3.5 border border-slate-900 hover:bg-slate-900 hover:text-white text-slate-900 text-xs font-bold uppercase tracking-wider rounded-md transition-colors"
          >
            VIEW ALL UPDATES &amp; CIRCULARS
          </a>
        </div>
      </div>

      {/* Notice Detail Modal */}
      {activeModalUpdate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl">
            <button
              onClick={() => setActiveModalUpdate(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
            <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 block mb-1">
              Official School Circular • {activeModalUpdate.date}
            </span>
            <h3 className="text-xl font-bold text-slate-900 mb-4 font-display">
              {activeModalUpdate.title}
            </h3>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 leading-relaxed mb-6 space-y-2">
              <p>{activeModalUpdate.summary}</p>
              <p>
                Parents and students can collect physical copies from the school administrative desk or download digitally from the school ERP portal.
              </p>
            </div>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setActiveModalUpdate(null)}
                className="px-5 py-2 bg-slate-900 text-white text-xs font-semibold rounded-md hover:bg-slate-800"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
