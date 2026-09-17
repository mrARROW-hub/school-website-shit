import React from 'react';
import { GraduationCap, ArrowUp } from 'lucide-react';
import logoUrl from '../assets/logo.png';

interface FooterProps {
  onOpenAdmissions: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAdmissions }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Wireframe: .footer-grid (4 columns) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Wireframe: Group 1: School */}
          <div className="footer-group">
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-4 font-display">
              School
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <a href="#story" className="hover:text-white transition-colors">
                  About Dev Samaj
                </a>
              </li>
              <li>
                <a href="#journey" className="hover:text-white transition-colors">
                  Academics &amp; Wings
                </a>
              </li>
              <li>
                <a href="#campus" className="hover:text-white transition-colors">
                  Campus &amp; Labs
                </a>
              </li>
              <li>
                <a href="#beyond" className="hover:text-white transition-colors">
                  Student Life &amp; Clubs
                </a>
              </li>
              <li>
                <a href="#guldaasta" className="hover:text-white transition-colors">
                  Guldaasta Celebration
                </a>
              </li>
            </ul>
          </div>

          {/* Wireframe: Group 2: Admissions */}
          <div className="footer-group">
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-4 font-display">
              Admissions
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <a href="#admissions" className="hover:text-white transition-colors">
                  Admission Process
                </a>
              </li>
              <li>
                <a href="#admissions" className="hover:text-white transition-colors">
                  Fee Structure
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenAdmissions}
                  className="text-amber-300 hover:text-amber-200 transition-colors font-medium text-left"
                >
                  Apply Online 2025-26
                </button>
              </li>
              <li>
                <a href="#admissions" className="hover:text-white transition-colors">
                  Age &amp; Eligibility
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Helpdesk &amp; FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Wireframe: Group 3: Resources */}
          <div className="footer-group">
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-4 font-display">
              Resources
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <a href="#updates" className="hover:text-white transition-colors">
                  Circulars &amp; Notices
                </a>
              </li>
              <li>
                <a href="#achievements" className="hover:text-white transition-colors">
                  CBSE Board Results
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">
                  Photo &amp; Video Gallery
                </a>
              </li>
              <li>
                <a href="#people" className="hover:text-white transition-colors">
                  Faculty Directory
                </a>
              </li>
              <li>
                <a href="#community" className="hover:text-white transition-colors">
                  Alumni Association
                </a>
              </li>
            </ul>
          </div>

          {/* Wireframe: Group 4: Contact */}
          <div className="footer-group">
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-4 font-display">
              Contact
            </h4>
            <div className="space-y-2 text-xs text-slate-400 leading-relaxed">
              <p className="text-slate-300 font-medium">
                I.S. Dev Samaj Sr. Sec. School
              </p>
              <p>Sector 21-C, Chandigarh &ndash; 160022</p>
              <p>Tel: 0172-2704495, 2707255</p>
              <p>Email: info@isdevsamaj21.ac.in</p>
              <p className="pt-2 text-[11px] text-amber-400/80">
                CBSE Affiliation: 2630018 | School No: 23004
              </p>
            </div>
          </div>
        </div>

        {/* Wireframe: .footer-bottom */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-3">
            <img
              src={logoUrl}
              alt="IS Dev Samaj Senior Secondary School Emblem"
              referrerPolicy="no-referrer"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                if (!target.dataset.fallback) {
                  target.dataset.fallback = 'true';
                  target.src = `${import.meta.env.BASE_URL}logo.png`;
                }
              }}
              className="w-8 h-8 rounded-full bg-white p-0.5 object-contain shrink-0"
            />
            <span className="font-semibold text-slate-200">
              IS Dev Samaj Senior Secondary School, Chandigarh
            </span>
          </div>

          <div className="flex items-center gap-4 text-slate-400 text-[11px]">
            <span>&copy; {new Date().getFullYear()} IS Dev Samaj. All Rights Reserved.</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-md bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
