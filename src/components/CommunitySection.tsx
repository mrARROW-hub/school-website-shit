import React, { useState } from 'react';
import { COMMUNITY_STORIES } from '../data/schoolData';
import { Quote, Sparkles, UserCheck, Heart } from 'lucide-react';
import { CommunityStory } from '../types';

export const CommunitySection: React.FC = () => {
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);

  const featuredStory = COMMUNITY_STORIES[activeStoryIndex];

  return (
    <section id="community" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Wireframe: .label */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-amber-700">
            Our Community
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
              Beyond Dev Samaj
            </h2>
            <p className="text-sm text-slate-500 mt-2 max-w-xl">
              An enduring global bond. Our alumni shape medical breakthroughs, legal chambers, civil services, and creative industries worldwide.
            </p>
          </div>
        </div>

        {/* Wireframe: .community-layout (2fr 1fr) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* Featured Story (2 columns) */}
          <div className="lg:col-span-2 bg-gradient-to-br from-blue-950 to-slate-900 text-white rounded-2xl p-8 sm:p-10 shadow-xl border border-slate-800 flex flex-col justify-between relative overflow-hidden">
            {/* Ambient pattern */}
            <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 bg-amber-400 text-slate-950 text-xs font-bold uppercase tracking-wider rounded-md">
                  Spotlight • {featuredStory.category.toUpperCase()}
                </span>
                <Quote className="w-8 h-8 text-amber-400/40" />
              </div>

              <blockquote className="text-lg sm:text-xl md:text-2xl text-slate-100 font-light leading-relaxed italic mb-8">
                &ldquo;{featuredStory.quote}&rdquo;
              </blockquote>
            </div>

            <div className="flex items-center gap-4 pt-6 border-t border-white/15">
              <img
                src={featuredStory.image}
                alt={featuredStory.name}
                referrerPolicy="no-referrer"
                className="w-14 h-14 rounded-full object-cover border-2 border-amber-400 shadow-md"
              />
              <div>
                <h4 className="text-lg font-bold text-white font-display">
                  {featuredStory.name}
                </h4>
                <p className="text-xs text-amber-300 font-medium">
                  {featuredStory.batchOrRole}
                </p>
                <p className="text-[11px] text-slate-300">
                  {featuredStory.achievement}
                </p>
              </div>
            </div>
          </div>

          {/* Side items list */}
          <div className="flex flex-col gap-4">
            {COMMUNITY_STORIES.map((story, idx) => {
              const isSelected = activeStoryIndex === idx;
              return (
                <div
                  key={story.id}
                  onClick={() => setActiveStoryIndex(idx)}
                  className={`p-4 rounded-xl border transition-all duration-200 cursor-pointer flex items-center gap-4 ${
                    isSelected
                      ? 'bg-amber-50 border-amber-300 shadow-sm'
                      : 'bg-slate-50 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <img
                    src={story.image}
                    alt={story.name}
                    referrerPolicy="no-referrer"
                    className="w-12 h-12 rounded-full object-cover shrink-0 border border-slate-300"
                  />
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] font-bold uppercase text-amber-800 tracking-wider">
                        {story.category}
                      </span>
                      {isSelected && (
                        <span className="text-[9px] bg-amber-400 text-slate-950 font-bold px-1.5 py-0.2 rounded">
                          Viewing
                        </span>
                      )}
                    </div>
                    <h5 className="text-sm font-bold text-slate-900 leading-tight">
                      {story.name}
                    </h5>
                    <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                      {story.batchOrRole}
                    </p>
                  </div>
                </div>
              );
            })}

            <div className="p-4 rounded-xl border border-dashed border-slate-300 text-center bg-white flex flex-col items-center justify-center text-xs text-slate-500">
              <Heart className="w-5 h-5 text-rose-500 mb-1" />
              <span>Are you a Dev Samaj Alumnus?</span>
              <a
                href="#contact"
                className="text-xs font-bold text-blue-900 hover:underline mt-1"
              >
                Join Alumni Directory &rarr;
              </a>
            </div>
          </div>
        </div>

        {/* Wireframe: .cta */}
        <div className="mt-12 flex justify-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3.5 border border-slate-900 hover:bg-slate-900 hover:text-white text-slate-900 text-xs font-bold uppercase tracking-wider rounded-md transition-colors"
          >
            MEET OUR COMMUNITY &amp; ALUMNI
          </a>
        </div>
      </div>
    </section>
  );
};
