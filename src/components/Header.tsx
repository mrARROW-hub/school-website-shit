import React, { useState, useEffect } from 'react';
import logoUrl from '../assets/logo.png';
import {
  Menu,
  X,
  Search,
  ChevronDown,
  Phone,
  Mail,
  Calendar,
  ExternalLink,
  GraduationCap,
} from 'lucide-react';

interface HeaderProps {
  onOpenAdmissions: (type?: 'apply' | 'inquire' | 'visit') => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenAdmissions }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [portalsDropdownOpen, setPortalsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Main navigation items modeled after BDCS
  const navItems = [
    { label: 'ABOUT', href: '#story' },
    { label: 'ADMISSIONS', href: '#admissions' },
    { label: 'ACADEMICS', href: '#journey' },
    { label: 'THE EXPERIENCE', href: '#beyond' },
    { label: 'PROGRAMS', href: '#guldaasta' },
  ];

  const portalLinks = [
    { label: 'Parent Portal', href: '#contact' },
    { label: 'Student Portal', href: '#contact' },
    { label: 'Alumni Network', href: '#community' },
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    const q = searchQuery.toLowerCase();

    // Route to appropriate section based on keyword
    if (q.includes('admiss') || q.includes('fee') || q.includes('apply')) {
      window.location.hash = '#admissions';
    } else if (q.includes('acad') || q.includes('class') || q.includes('curric') || q.includes('cbse')) {
      window.location.hash = '#journey';
    } else if (q.includes('camp') || q.includes('facil') || q.includes('lab')) {
      window.location.hash = '#campus';
    } else if (q.includes('sport') || q.includes('club') || q.includes('activ') || q.includes('life')) {
      window.location.hash = '#beyond';
    } else if (q.includes('achieve') || q.includes('award')) {
      window.location.hash = '#achievements';
    } else if (q.includes('contact') || q.includes('phone') || q.includes('visit') || q.includes('address')) {
      window.location.hash = '#contact';
    } else {
      window.location.hash = '#story';
    }
    setSearchOpen(false);
    setSearchQuery('');
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-50 w-full font-sans">
      {/* =========================================================================
          1. TOP UTILITY BAR
          - Transparent frosted styling over hero, stays in place
          - Visible on tablet/desktop, clean & compact
          ========================================================================= */}
      <div className="hidden sm:block w-full border-b border-white/15 bg-black/20 backdrop-blur-xs text-white/90 text-[11px] sm:text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-8 sm:h-9 flex items-center justify-between">
          {/* Left Info: Contact & Affiliation */}
          <div className="flex items-center gap-4 sm:gap-6">
            <span className="hidden md:inline-flex items-center gap-1.5 font-medium text-white/80">
              <span>CBSE Affiliation No. 2630018</span>
            </span>
            <a
              href="tel:01722704495"
              className="inline-flex items-center gap-1.5 text-white/90 hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3 text-white/75" />
              <span className="hidden sm:inline">0172-2704495</span>
            </a>
            <a
              href="mailto:info@isdevsamaj21.ac.in"
              className="hidden sm:inline-flex items-center gap-1.5 text-white/90 hover:text-white transition-colors"
            >
              <Mail className="w-3 h-3 text-white/75" />
              <span>info@isdevsamaj21.ac.in</span>
            </a>
          </div>

          {/* Right Utility Buttons: Portals, Give, Search (with background maintained) */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Portals Dropdown Button */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setPortalsDropdownOpen(!portalsDropdownOpen)}
                className="flex items-center gap-1 px-2.5 py-1 bg-white/20 hover:bg-white/30 text-white rounded-md transition-colors font-medium tracking-wide uppercase text-[10px] sm:text-[11px] border border-white/30 backdrop-blur-xs shadow-2xs cursor-pointer"
              >
                Portals
                <ChevronDown className={`w-3 h-3 transition-transform ${portalsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {portalsDropdownOpen && (
                <div
                  className="absolute right-0 mt-1 w-44 bg-white text-[#222] border border-[#ccc] rounded-lg shadow-xl py-1.5 z-50 text-left animate-in fade-in duration-150"
                  onMouseLeave={() => setPortalsDropdownOpen(false)}
                >
                  {portalLinks.map((portal) => (
                    <a
                      key={portal.label}
                      href={portal.href}
                      onClick={() => setPortalsDropdownOpen(false)}
                      className="block px-3 py-1.5 text-xs text-[#333] hover:bg-neutral-100 hover:text-black transition-colors"
                    >
                      {portal.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <span className="text-white/40">|</span>

            {/* Give / Support Button */}
            <a
              href="#community"
              className="text-white/90 hover:text-white font-medium tracking-wide uppercase text-[10px] sm:text-[11px] transition-colors"
            >
              Give
            </a>

            <span className="text-white/40">|</span>

            {/* Search Trigger Button */}
            <button
              type="button"
              onClick={() => setSearchOpen(!searchOpen)}
              className="flex items-center gap-1.5 text-white/90 hover:text-white px-2 py-1 bg-white/15 hover:bg-white/25 rounded-md transition-colors font-medium text-[10px] sm:text-[11px] border border-white/20 backdrop-blur-xs cursor-pointer"
              aria-label="Search site"
            >
              <Search className="w-3.5 h-3.5 text-white" />
              <span className="hidden sm:inline uppercase">Search</span>
            </button>
          </div>
        </div>
      </div>

      {/* Optional Search Bar Popup */}
      {searchOpen && (
        <div className="w-full bg-slate-900/95 backdrop-blur-md border-b border-white/20 px-4 py-3 shadow-lg">
          <form onSubmit={handleSearchSubmit} className="max-w-3xl mx-auto flex items-center gap-2">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-white/60 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search academics, admissions, campus, sports..."
                className="w-full pl-9 pr-4 py-2 bg-white/10 border border-white/30 rounded text-sm text-white placeholder:text-white/60 focus:outline-none focus:border-white"
                autoFocus
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-white text-slate-900 text-xs font-bold uppercase tracking-wider rounded hover:bg-slate-100 transition-colors shadow-sm cursor-pointer"
            >
              Search
            </button>
            <button
              type="button"
              onClick={() => setSearchOpen(false)}
              className="p-2 text-white/80 hover:text-white rounded cursor-pointer"
              aria-label="Close search"
            >
              <X className="w-5 h-5" />
            </button>
          </form>
        </div>
      )}

      {/* =========================================================================
          2. MAIN NAVIGATION BAR (TRANSPARENT BAR, WHITE SCHOOL NAME, SOLID BUTTONS)
          ========================================================================= */}
      <nav className="w-full bg-transparent py-3 sm:py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Logo & School Name in Crisp White */}
          <a href="#hero" className="flex items-center gap-3 shrink-0 group">
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
              className="w-10 h-10 sm:w-12 sm:h-12 object-contain shrink-0 group-hover:scale-105 transition-transform drop-shadow-md brightness-105"
            />
            <div className="text-left">
              <span className="block text-sm sm:text-base lg:text-lg font-bold tracking-tight text-white leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
                IS Dev Samaj
              </span>
              <span className="block text-[11px] sm:text-xs text-white/90 font-medium leading-tight drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]">
                Senior Secondary School
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links (White text on transparent bar) */}
          <div className="hidden xl:flex items-center gap-6 2xl:gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xs font-bold tracking-wider text-white hover:text-white/80 transition-colors py-2 border-b-2 border-transparent hover:border-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right Action Buttons: Solid backgrounds preserved */}
          <div className="hidden lg:flex items-center gap-2.5">
            {/* INQUIRE Button with background */}
            <button
              type="button"
              onClick={() => onOpenAdmissions('inquire')}
              className="px-3.5 py-1.5 sm:py-2 bg-white hover:bg-slate-100 text-slate-900 text-xs font-bold uppercase tracking-wider rounded-md transition-all shadow-md hover:shadow-lg hover:scale-105 active:scale-95 cursor-pointer"
            >
              Inquire
            </button>

            {/* VISIT Button with background */}
            <a
              href="#contact"
              className="px-3.5 py-1.5 sm:py-2 bg-white hover:bg-slate-100 text-slate-900 text-xs font-bold uppercase tracking-wider rounded-md transition-all shadow-md hover:shadow-lg hover:scale-105 active:scale-95 cursor-pointer"
            >
              Visit
            </a>

            {/* APPLY Button with background */}
            <button
              type="button"
              onClick={() => onOpenAdmissions('apply')}
              className="px-4 py-1.5 sm:py-2 bg-[#FF3D37] hover:bg-[#e02d27] text-white text-xs font-bold uppercase tracking-wider rounded-md transition-all shadow-md hover:shadow-lg hover:scale-105 active:scale-95 cursor-pointer"
            >
              Apply
            </button>
          </div>

          {/* Mobile Right: Quick Apply Button + Hamburger Menu (Solid backgrounds preserved) */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              type="button"
              onClick={() => onOpenAdmissions('apply')}
              className="px-3 py-1.5 bg-[#FF3D37] hover:bg-[#e02d27] text-white text-xs font-bold uppercase tracking-wider rounded-md shadow-md active:scale-95 cursor-pointer"
            >
              Apply
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="px-3 py-1.5 bg-white hover:bg-slate-100 text-slate-900 text-xs font-bold uppercase tracking-wider rounded-md flex items-center gap-1.5 shadow-md border border-white/50 active:scale-95 cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4 text-slate-900" /> : <Menu className="w-4 h-4 text-slate-900" />}
              <span>{mobileMenuOpen ? 'Close' : 'Menu'}</span>
            </button>
          </div>
        </div>

        {/* =========================================================================
            3. MOBILE MENU DRAWER (RESPONSIVE VIEW)
            ========================================================================= */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-900/95 backdrop-blur-xl border-t border-white/20 px-5 py-6 shadow-2xl animate-in slide-in-from-top-2 duration-200">
            {/* Action Buttons Row */}
            <div className="grid grid-cols-3 gap-2 pb-5 border-b border-white/15">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAdmissions('inquire');
                }}
                className="py-2.5 px-2 bg-white text-slate-900 text-xs font-bold uppercase tracking-wider rounded-md text-center shadow-sm active:scale-95 cursor-pointer"
              >
                Inquire
              </button>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-2 bg-white text-slate-900 text-xs font-bold uppercase tracking-wider rounded-md text-center shadow-sm active:scale-95 cursor-pointer"
              >
                Visit
              </a>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAdmissions('apply');
                }}
                className="py-2.5 px-2 bg-[#FF3D37] text-white text-xs font-bold uppercase tracking-wider rounded-md text-center shadow-sm active:scale-95 cursor-pointer"
              >
                Apply
              </button>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col gap-1 py-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2.5 px-3 text-sm font-semibold tracking-wider text-white hover:bg-white/10 rounded transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Utility Links: Portals & Giving */}
            <div className="pt-4 border-t border-white/15 flex flex-col gap-2 text-xs text-white/80">
              <div className="font-semibold text-[11px] uppercase tracking-wider text-white/60 px-3 pt-1">
                Portals &amp; Community
              </div>
              {portalLinks.map((portal) => (
                <a
                  key={portal.label}
                  href={portal.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-1.5 text-xs text-white/80 hover:text-white hover:bg-white/10 rounded"
                >
                  {portal.label}
                </a>
              ))}
              <a
                href="#community"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-1.5 text-xs font-medium text-white hover:underline"
              >
                Support / Give to Dev Samaj
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
