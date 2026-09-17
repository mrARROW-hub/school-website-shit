import React, { useState } from 'react';
import { Sparkles, FileText, CheckCircle, HelpCircle, Phone, ArrowRight, Download } from 'lucide-react';

interface AdmissionsSectionProps {
  onOpenAdmissions: () => void;
}

export const AdmissionsSection: React.FC<AdmissionsSectionProps> = ({ onOpenAdmissions }) => {
  const [activeTab, setActiveTab] = useState<'process' | 'eligibility' | 'fees'>('process');

  return (
    <section
      id="admissions"
      className="py-24 lg:py-32 bg-slate-900 text-white relative overflow-hidden border-b border-slate-800"
    >
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Wireframe: .admissions-inner (max-width 640px, text-center) */}
        <div className="max-w-[720px] mx-auto text-center">
          {/* Wireframe: .label */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs uppercase font-bold tracking-[0.2em] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Admissions • Academic Session 2025-26</span>
          </div>

          {/* Wireframe: .heading */}
          <h2
            className="!text-[36px] font-poppins font-bold tracking-tight text-center break-words leading-tight mb-4 text-white"
            style={{ fontFamily: "'Poppins', sans-serif", fontSize: '36px' }}
          >
            Take the First Step Towards Your Child&apos;s Future
          </h2>

          {/* Wireframe supporting line */}
          <p className="text-sm sm:text-base text-slate-300 max-w-lg mx-auto mb-8 leading-relaxed">
            Nurturing young minds in a safe, inspiring environment where ethical character matches scholastic ambition.
          </p>

          {/* Wireframe: .admissions-links (Process, Eligibility, Fee Structure tabs) */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8">
            <button
              onClick={() => setActiveTab('process')}
              className={`px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                activeTab === 'process'
                  ? 'bg-amber-400 text-slate-950 shadow-md'
                  : 'bg-white/10 text-slate-300 hover:bg-white/15'
              }`}
            >
              Admission Process
            </button>
            <button
              onClick={() => setActiveTab('eligibility')}
              className={`px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                activeTab === 'eligibility'
                  ? 'bg-amber-400 text-slate-950 shadow-md'
                  : 'bg-white/10 text-slate-300 hover:bg-white/15'
              }`}
            >
              Eligibility Criteria
            </button>
            <button
              onClick={() => setActiveTab('fees')}
              className={`px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                activeTab === 'fees'
                  ? 'bg-amber-400 text-slate-950 shadow-md'
                  : 'bg-white/10 text-slate-300 hover:bg-white/15'
              }`}
            >
              Fee Structure
            </button>
          </div>

          {/* Interactive Info Panel based on active tab */}
          <div className="bg-slate-950/80 border border-white/10 rounded-2xl p-6 sm:p-8 text-left mb-8 backdrop-blur-md">
            {activeTab === 'process' && (
              <div className="space-y-4">
                <h4 className="text-base font-bold text-amber-300 flex items-center gap-2">
                  <FileText className="w-4 h-4" /> 4 Simple Steps to Enrolment
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-300">
                  <div className="p-3 bg-white/5 rounded-lg border border-white/5">
                    <span className="font-bold text-amber-400 block mb-1">1. Registration Form</span>
                    Submit the online inquiry form or collect the application prospectus at the school office.
                  </div>
                  <div className="p-3 bg-white/5 rounded-lg border border-white/5">
                    <span className="font-bold text-amber-400 block mb-1">2. Interaction / Evaluation</span>
                    Informal friendly interaction for kindergarten; conceptual diagnostic assessment for grades I–IX &amp; XI.
                  </div>
                  <div className="p-3 bg-white/5 rounded-lg border border-white/5">
                    <span className="font-bold text-amber-400 block mb-1">3. Offer of Admission</span>
                    Merit list publication and verification of original birth certificate, transfer certificate &amp; report cards.
                  </div>
                  <div className="p-3 bg-white/5 rounded-lg border border-white/5">
                    <span className="font-bold text-amber-400 block mb-1">4. Welcome &amp; Orientation</span>
                    Fee payment, uniform and book counter facilitation, followed by parent orientation before session kickoff.
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'eligibility' && (
              <div className="space-y-3 text-xs text-slate-300">
                <h4 className="text-base font-bold text-amber-300 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" /> Age Criteria as of March 31, 2025
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-center justify-between p-2.5 rounded bg-white/5">
                    <span>Pre-Nursery:</span>
                    <strong className="text-white">2.5 to 3 Years</strong>
                  </li>
                  <li className="flex items-center justify-between p-2.5 rounded bg-white/5">
                    <span>Nursery:</span>
                    <strong className="text-white">3 to 4 Years</strong>
                  </li>
                  <li className="flex items-center justify-between p-2.5 rounded bg-white/5">
                    <span>Kindergarten (KG):</span>
                    <strong className="text-white">4 to 5 Years</strong>
                  </li>
                  <li className="flex items-center justify-between p-2.5 rounded bg-white/5">
                    <span>Grade I:</span>
                    <strong className="text-white">5 to 6 Years</strong>
                  </li>
                  <li className="flex items-center justify-between p-2.5 rounded bg-white/5">
                    <span>Grade XI (Medical / Non-Med / Commerce / Arts):</span>
                    <strong className="text-white">CBSE / Equivalent Class X Board Percentage</strong>
                  </li>
                </ul>
              </div>
            )}

            {activeTab === 'fees' && (
              <div className="space-y-3 text-xs text-slate-300">
                <h4 className="text-base font-bold text-amber-300 flex items-center gap-2">
                  <HelpCircle className="w-4 h-4" /> Transparent &amp; Subsidized Philanthropic Fee Policy
                </h4>
                <p>
                  As an institution founded on Dev Samaj philanthropic ideals, our fee structure is strictly regulated, non-commercial, and accessible.
                </p>
                <div className="p-3 rounded bg-amber-500/10 border border-amber-500/20 text-amber-200">
                  <strong>Scholarships:</strong> Merit-cum-means tuition fee concessions and girl-child educational incentives are available upon application to the management.
                </div>
              </div>
            )}
          </div>

          {/* Wireframe: .admissions-ctas */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenAdmissions}
              className="w-full sm:w-auto min-w-[200px] px-8 py-3.5 bg-white hover:bg-red-600 text-red-600 hover:text-white border-2 border-red-600 font-bold text-xs uppercase tracking-wider rounded-md shadow-lg transition-colors duration-200 text-center"
            >
              EXPLORE ADMISSIONS &amp; APPLY
            </button>
            <a
              href="#contact"
              className="w-full sm:w-auto min-w-[200px] px-8 py-3.5 border border-white/40 hover:bg-white hover:text-slate-950 text-white font-bold text-xs uppercase tracking-wider rounded-md transition-colors text-center"
            >
              CONTACT SCHOOL OFFICE
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
