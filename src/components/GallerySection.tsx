import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/schoolData';
import { Maximize2, X, Camera } from 'lucide-react';
import { GalleryItem } from '../types';

export const GallerySection: React.FC = () => {
  const [activeImage, setActiveImage] = useState<GalleryItem | null>(null);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Wireframe: .label */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-amber-700">
            Gallery
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
              Through Our Lens
            </h2>
            <p className="text-sm text-slate-500 mt-2 max-w-xl">
              Capturing vibrant memories, athletic milestones, artistic brilliance, and festive celebrations at Dev Samaj.
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-1.5 text-xs text-slate-400">
            <Camera className="w-4 h-4 text-amber-600" />
            <span>Click any photo to enlarge</span>
          </div>
        </div>

        {/* Wireframe: .mosaic layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {GALLERY_ITEMS.map((item, idx) => {
            // First item spans 2 rows on large screens
            const isFirst = idx === 0;
            return (
              <div
                key={item.id}
                onClick={() => setActiveImage(item)}
                className={`relative group rounded-2xl overflow-hidden shadow-md cursor-pointer border border-slate-200 bg-slate-950 ${
                  isFirst
                    ? 'sm:col-span-2 lg:col-span-1 lg:row-span-2 min-h-[320px] lg:min-h-[480px]'
                    : 'min-h-[220px]'
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />

                {/* Depth scrim overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

                {/* Hover zoom icon */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <Maximize2 className="w-4 h-4" />
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] uppercase tracking-widest text-amber-300 font-bold block mb-1">
                    {item.category}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold font-display text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-200 line-clamp-2">
                    {item.caption}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Wireframe: .cta */}
        <div className="mt-12 flex justify-center">
          <a
            href="#hero"
            className="inline-flex items-center justify-center px-8 py-3.5 border border-slate-900 hover:bg-slate-900 hover:text-white text-slate-900 text-xs font-bold uppercase tracking-wider rounded-md transition-colors"
          >
            EXPLORE FULL ARCHIVE GALLERY
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative max-w-4xl w-full bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/60 text-white hover:bg-black rounded-full transition-colors"
              aria-label="Close image"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="max-h-[75vh] w-full flex items-center justify-center bg-black">
              <img
                src={activeImage.image}
                alt={activeImage.title}
                referrerPolicy="no-referrer"
                className="max-h-[75vh] w-auto object-contain mx-auto"
              />
            </div>
            <div className="p-6 bg-slate-900 text-white">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">
                <span>{activeImage.category}</span>
                <span>•</span>
                <span>I.S. Dev Samaj Archives</span>
              </div>
              <h3 className="text-xl font-bold font-display mb-1">{activeImage.title}</h3>
              <p className="text-sm text-slate-300">{activeImage.caption}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
