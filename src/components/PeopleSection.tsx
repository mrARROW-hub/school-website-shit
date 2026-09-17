import React from 'react';
import { EDUCATORS } from '../data/schoolData';
import { GraduationCap, Award, Mail } from 'lucide-react';

export const PeopleSection: React.FC = () => {
  return (
    <section id="people" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Wireframe: .label */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-amber-700">
            Our Educators
          </span>
          <span className="w-10 h-[1px] bg-amber-400" />
        </div>

        {/* Wireframe: .heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <h2
              className="!text-[36px] font-poppins font-bold text-slate-900 tracking-tight text-center break-words leading-tight"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: '36px' }}
            >
              The People Behind the Learning
            </h2>
            <p className="text-sm text-slate-500 mt-2 max-w-xl">
              Led by veteran academicians, scholars, and compassionate mentors dedicated to every child's moral and intellectual zenith.
            </p>
          </div>
          <span className="text-xs font-medium text-slate-400 hidden md:inline">
            180+ Faculty Members • Continuous CBSE Training
          </span>
        </div>

        {/* Wireframe: .educators (grid on desktop, horizontal scroll on mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {EDUCATORS.map((edu) => (
            <div
              key={edu.id}
              className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group"
            >
              {/* Wireframe: .edu-portrait */}
              <div className="w-full h-56 rounded-xl overflow-hidden mb-4 bg-slate-100 relative">
                <img
                  src={edu.image}
                  alt={edu.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="inline-block px-2 py-0.5 rounded bg-blue-900/90 text-white text-[10px] font-semibold">
                    {edu.experience} in Education
                  </span>
                </div>
              </div>

              {/* Wireframe: .edu-name */}
              <h3 className="text-base font-bold text-slate-900 mb-1 font-display group-hover:text-blue-900 transition-colors">
                {edu.name}
              </h3>

              {/* Wireframe: .edu-role */}
              <p className="text-xs font-semibold text-amber-800 mb-2">
                {edu.role}
              </p>

              <p className="text-[11px] text-slate-500 mb-3">
                {edu.qualification}
              </p>

              <p className="text-xs text-slate-600 leading-relaxed mt-auto pt-3 border-t border-slate-100">
                {edu.bio}
              </p>
            </div>
          ))}
        </div>

        {/* Wireframe: .cta */}
        <div className="mt-12 flex justify-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3.5 border border-slate-900 hover:bg-slate-900 hover:text-white text-slate-900 text-xs font-bold uppercase tracking-wider rounded-md transition-colors"
          >
            MEET OUR FULL FACULTY TEAM
          </a>
        </div>
      </div>
    </section>
  );
};
