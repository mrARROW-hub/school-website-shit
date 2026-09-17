import React, { useState } from 'react';
import { LEARNING_STEPS } from '../data/schoolData';
import { BookOpen, Check, ArrowRight } from 'lucide-react';

export const LearningJourneySection: React.FC<{ onOpenAdmissions: () => void }> = ({
  onOpenAdmissions,
}) => {
  const [selectedStep, setSelectedStep] = useState<number | null>(null);

  return (
    <section id="journey" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Wireframe: .label */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-amber-700">
            Academics
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
              The Learning Journey
            </h2>
            <p className="text-sm text-slate-500 mt-2 max-w-xl">
              A carefully structured developmental continuum from early childhood discovery to rigorous senior secondary board excellence.
            </p>
          </div>
          <button
            onClick={onOpenAdmissions}
            className="self-start md:self-auto text-xs font-bold text-blue-900 hover:text-amber-700 flex items-center gap-1.5 uppercase tracking-wider"
          >
            Check Grade Eligibility
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Wireframe: .timeline (responsive 4-step grid / vertical on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {LEARNING_STEPS.map((step, idx) => {
            const isSelected = selectedStep === idx;
            return (
              <div
                key={step.num}
                onClick={() => setSelectedStep(isSelected ? null : idx)}
                className={`group relative rounded-xl p-6 transition-all duration-300 cursor-pointer flex flex-col justify-between border ${
                  isSelected
                    ? 'bg-blue-950 text-white shadow-xl border-blue-900 scale-[1.02]'
                    : 'bg-white text-slate-900 hover:shadow-lg border-slate-200 hover:border-slate-300'
                }`}
              >
                {/* Step indicator */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-4xl font-extrabold font-display leading-none transition-colors ${
                        isSelected ? 'text-amber-400' : 'text-slate-300 group-hover:text-blue-900'
                      }`}
                    >
                      {step.num}
                    </span>
                    <span
                      className={`text-[10px] font-bold uppercase px-2.5 py-1 rounded-full ${
                        isSelected
                          ? 'bg-amber-400/20 text-amber-300 border border-amber-400/30'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      Stage {idx + 1}
                    </span>
                  </div>

                  {/* Step Title & Range */}
                  <h3
                    className={`text-lg font-bold mb-1 transition-colors ${
                      isSelected ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {step.title}
                  </h3>
                  <div
                    className={`text-xs font-medium mb-4 ${
                      isSelected ? 'text-amber-300' : 'text-slate-500'
                    }`}
                  >
                    {step.range}
                  </div>

                  <p
                    className={`text-xs leading-relaxed mb-5 ${
                      isSelected ? 'text-slate-200' : 'text-slate-600'
                    }`}
                  >
                    {step.description}
                  </p>
                </div>

                {/* Features List */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                  <span
                    className={`block text-[10px] font-bold uppercase tracking-wider mb-2.5 ${
                      isSelected ? 'text-amber-300' : 'text-slate-400'
                    }`}
                  >
                    Key Highlights:
                  </span>
                  <ul className="space-y-1.5">
                    {step.features.map((feat) => (
                      <li
                        key={feat}
                        className={`text-xs flex items-center gap-2 ${
                          isSelected ? 'text-slate-200' : 'text-slate-700'
                        }`}
                      >
                        <Check
                          className={`w-3.5 h-3.5 shrink-0 ${
                            isSelected ? 'text-amber-400' : 'text-blue-700'
                          }`}
                        />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Wireframe: .cta */}
        <div className="mt-12 flex justify-center">
          <a
            href="#admissions"
            className="inline-flex items-center justify-center px-8 py-3.5 border border-slate-900 hover:bg-slate-900 hover:text-white text-slate-900 text-xs font-bold uppercase tracking-wider rounded-md transition-colors"
          >
            EXPLORE ACADEMICS &amp; SYLLABUS
          </a>
        </div>
      </div>
    </section>
  );
};
