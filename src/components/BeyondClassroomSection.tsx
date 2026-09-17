import React, { useState } from 'react';
import { STUDENT_LIFE_CATEGORIES } from '../data/schoolData';
import { Trophy, Palette, Music, Users, Award, ChevronRight } from 'lucide-react';
import { LifeCategory } from '../types';

export const BeyondClassroomSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<LifeCategory>(STUDENT_LIFE_CATEGORIES[0]);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Trophy':
        return <Trophy className="w-6 h-6" />;
      case 'Palette':
        return <Palette className="w-6 h-6" />;
      case 'Music':
        return <Music className="w-6 h-6" />;
      case 'Users':
        return <Users className="w-6 h-6" />;
      case 'Award':
      default:
        return <Award className="w-6 h-6" />;
    }
  };

  return (
    <section id="beyond" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Wireframe: .label */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-amber-700">
            Student Life
          </span>
          <span className="w-10 h-[1px] bg-amber-400" />
        </div>

        {/* Wireframe: .heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-normal font-crayon text-slate-900 tracking-wide text-center break-words"
              style={{ fontFamily: "'DK Crayon Crumble', 'Cabin Sketch', cursive, sans-serif" }}
            >
              Beyond the Classroom
            </h2>
            <p className="text-sm text-slate-500 mt-2 max-w-xl">
              Co-curricular excellence is in our DNA. We nurture expressive artists, spirited athletes, and empathetic changemakers.
            </p>
          </div>
        </div>

        {/* Wireframe: .categories (5 columns on desktop, 2-3 on tablet/mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {STUDENT_LIFE_CATEGORIES.map((cat) => {
            const isSelected = activeCategory.id === cat.id;
            return (
              <div
                key={cat.id}
                onClick={() => setActiveCategory(cat)}
                className={`group relative rounded-xl p-5 min-h-[200px] flex flex-col justify-between cursor-pointer transition-all duration-200 border ${
                  isSelected
                    ? 'bg-blue-900 text-white border-blue-950 shadow-lg scale-[1.02]'
                    : 'bg-white text-slate-900 border-slate-200 hover:border-slate-300 hover:shadow-md'
                }`}
              >
                <div
                  className={`w-11 h-11 rounded-lg flex items-center justify-center transition-colors ${
                    isSelected ? 'bg-amber-400 text-slate-950' : 'bg-slate-100 text-blue-900 group-hover:bg-blue-50'
                  }`}
                >
                  {getIcon(cat.iconName)}
                </div>

                <div>
                  <div
                    className={`font-bold text-base mb-1 ${
                      isSelected ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {cat.label}
                  </div>
                  <div
                    className={`text-xs line-clamp-2 ${
                      isSelected ? 'text-slate-200' : 'text-slate-500'
                    }`}
                  >
                    {cat.desc}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Active Category Spotlight preview box */}
        <div className="mt-6 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
              {getIcon(activeCategory.iconName)}
            </div>
            <div>
              <span className="text-xs uppercase font-bold text-amber-700 tracking-wider">
                {activeCategory.label} Program Details
              </span>
              <p className="text-sm sm:text-base text-slate-700 mt-1 font-medium">
                {activeCategory.details}
              </p>
            </div>
          </div>
          <a
            href="#gallery"
            className="shrink-0 inline-flex items-center gap-2 text-xs font-bold text-blue-900 hover:text-amber-700 uppercase tracking-wider"
          >
            View {activeCategory.label} in Gallery
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>

        {/* Wireframe: .cta */}
        <div className="mt-12 flex justify-center">
          <a
            href="#gallery"
            className="inline-flex items-center justify-center px-8 py-3.5 border border-slate-900 hover:bg-slate-900 hover:text-white text-slate-900 text-xs font-bold uppercase tracking-wider rounded-md transition-colors"
          >
            DISCOVER STUDENT LIFE
          </a>
        </div>
      </div>
    </section>
  );
};
