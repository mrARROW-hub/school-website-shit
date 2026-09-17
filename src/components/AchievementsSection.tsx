import React, { useState } from 'react';
import { ACHIEVEMENTS } from '../data/schoolData';
import { Award, Trophy, Star, BookOpen, Medal, Sparkles } from 'lucide-react';
import { AchievementItem } from '../types';

export const AchievementsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const categories = ['All', 'Academics', 'Sports', 'Arts & Culture', 'Competitions'];

  const filteredAchievements =
    activeFilter === 'All'
      ? ACHIEVEMENTS
      : ACHIEVEMENTS.filter((item) => item.category === activeFilter);

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'Academics':
        return <BookOpen className="w-5 h-5 text-blue-800" />;
      case 'Sports':
        return <Trophy className="w-5 h-5 text-amber-600" />;
      case 'Arts & Culture':
        return <Star className="w-5 h-5 text-purple-700" />;
      case 'Competitions':
      default:
        return <Medal className="w-5 h-5 text-emerald-700" />;
    }
  };

  return (
    <section id="achievements" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Wireframe: .label */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-amber-700">
            Achievements
          </span>
          <span className="w-10 h-[1px] bg-amber-400" />
        </div>

        {/* Wireframe: .heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <h2
              className="!text-[36px] font-poppins font-bold text-slate-900 tracking-tight text-center break-words leading-tight"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: '36px' }}
            >
              Making Us Proud
            </h2>
            <p className="text-sm text-slate-500 mt-2 max-w-xl">
              Celebrating the exceptional accomplishments of our scholars, athletes, and creative thinkers.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                  activeFilter === cat
                    ? 'bg-blue-900 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Wireframe: .achieve-grid (repeat 4, 1fr) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredAchievements.map((item, idx) => (
            <div
              key={idx}
              className="relative group rounded-xl p-6 border border-slate-200 bg-slate-50/70 hover:bg-white hover:border-slate-300 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 shadow-xs flex items-center justify-center">
                    {getCategoryIcon(item.category)}
                  </div>
                  <span className="text-[11px] font-bold text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
                    {item.year}
                  </span>
                </div>

                <span className="block text-[11px] font-bold uppercase tracking-wider text-amber-700 mb-1">
                  {item.category}
                </span>

                <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between">
                <span className="text-xs font-extrabold text-blue-900">
                  {item.highlight}
                </span>
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Wireframe: .cta */}
        <div className="mt-12 flex justify-center">
          <a
            href="#story"
            className="inline-flex items-center justify-center px-8 py-3.5 border border-slate-900 hover:bg-slate-900 hover:text-white text-slate-900 text-xs font-bold uppercase tracking-wider rounded-md transition-colors"
          >
            VIEW ALL ACHIEVEMENTS
          </a>
        </div>
      </div>
    </section>
  );
};
