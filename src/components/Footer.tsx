import React, { useState } from 'react';
import { 
  GraduationCap, 
  ArrowUp, 
  Facebook, 
  Instagram, 
  Youtube, 
  Twitter, 
  Phone, 
  Mail, 
  MapPin, 
  Send,
  CheckCircle2
} from 'lucide-react';
import logoUrl from '../assets/logo.png';

interface FooterProps {
  onOpenAdmissions: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAdmissions }) => {
  const [emailSubscribed, setEmailSubscribed] = useState(false);
  const [subEmail, setSubEmail] = useState('');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (subEmail.trim()) {
      setEmailSubscribed(true);
      setSubEmail('');
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-10 border-t border-slate-800 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Banner: Newsletter / Quick Inquiry CTA */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 mb-16 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-white font-poppins">
              Stay Connected with IS Dev Samaj
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Receive circulars, event invitations, admissions updates, and Guldaasta highlights directly in your inbox.
            </p>
          </div>
          <div className="w-full lg:w-auto">
            {emailSubscribed ? (
              <div className="flex items-center gap-2 text-emerald-400 bg-emerald-950/40 border border-emerald-800/60 px-4 py-3 rounded-lg text-xs font-medium">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Thank you! You are successfully subscribed to school updates.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                <input
                  type="email"
                  value={subEmail}
                  onChange={(e) => setSubEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  required
                  className="bg-slate-950 border border-slate-700 rounded-lg px-4 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-400 min-w-[260px]"
                />
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <span>Subscribe</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Wireframe: .footer-grid (4 columns) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
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
                  className="text-amber-300 hover:text-amber-200 transition-colors font-medium text-left cursor-pointer"
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

          {/* Wireframe: Group 4: Contact & Social */}
          <div className="footer-group">
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-4 font-display">
              Connect With Us
            </h4>
            <div className="space-y-3 text-xs text-slate-400 leading-relaxed mb-6">
              <p className="text-slate-300 font-medium flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>Sector 21-C, Chandigarh &ndash; 160022</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <a href="tel:01722704495" className="hover:text-white transition-colors">0172-2704495, 2707255</a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <a href="mailto:info@isdevsamaj21.ac.in" className="hover:text-white transition-colors">info@isdevsamaj21.ac.in</a>
              </p>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center gap-2.5">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-slate-900 hover:bg-amber-400 hover:text-slate-950 text-slate-300 flex items-center justify-center transition-all border border-slate-800 shadow-sm"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-slate-900 hover:bg-amber-400 hover:text-slate-950 text-slate-300 flex items-center justify-center transition-all border border-slate-800 shadow-sm"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-8 h-8 rounded-full bg-slate-900 hover:bg-amber-400 hover:text-slate-950 text-slate-300 flex items-center justify-center transition-all border border-slate-800 shadow-sm"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="w-8 h-8 rounded-full bg-slate-900 hover:bg-amber-400 hover:text-slate-950 text-slate-300 flex items-center justify-center transition-all border border-slate-800 shadow-sm"
              >
                <Twitter className="w-4 h-4" />
              </a>
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
            <div>
              <span className="font-semibold text-slate-200 block">
                IS Dev Samaj Senior Secondary School, Chandigarh
              </span>
              <span className="text-[11px] text-slate-500">
                CBSE Affiliation No: 2630018 | School Code: 23004
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-slate-400 text-[11px]">
            <span>&copy; {new Date().getFullYear()} IS Dev Samaj. All Rights Reserved.</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-md bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
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
