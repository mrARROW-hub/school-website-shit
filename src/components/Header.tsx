import React, { useState, useEffect } from 'react';
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
    <header className="sticky top-0 z-50 w-full font-sans transition-all duration-200">
      {/* =========================================================================
          1. TOP UTILITY BAR (MODELED AFTER BDCS UTILITY TIER)
          - Sizing: ~34px height
          - Buttons: Portals dropdown, Give/Support, Contact, Quick Search trigger
          - Neutral wireframe theme: clean subtle grey/charcoal border & text
          ========================================================================= */}
      <div className="w-full bg-[#f8f8f8] border-b border-[#e5e5e5] text-[#444] text-[11px] sm:text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-9 flex items-center justify-between">
          {/* Left Info: Contact & Affiliation */}
          <div className="flex items-center gap-4 sm:gap-6">
            <span className="hidden md:inline-flex items-center gap-1.5 font-medium text-[#555]">
              <span>CBSE Affiliation No. 2630018</span>
            </span>
            <a
              href="tel:01722704495"
              className="inline-flex items-center gap-1.5 hover:text-black transition-colors"
            >
              <Phone className="w-3 h-3 text-[#666]" />
              <span className="hidden sm:inline">0172-2704495</span>
            </a>
            <a
              href="mailto:info@isdevsamaj21.ac.in"
              className="hidden sm:inline-flex items-center gap-1.5 hover:text-black transition-colors"
            >
              <Mail className="w-3 h-3 text-[#666]" />
              <span>info@isdevsamaj21.ac.in</span>
            </a>
          </div>

          {/* Right Utility Buttons: Portals, Give, Search */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Portals Dropdown Button */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setPortalsDropdownOpen(!portalsDropdownOpen)}
                className="flex items-center gap-1 px-2.5 py-1 text-[#333] hover:text-black hover:bg-[#eaeaea] rounded transition-colors font-medium tracking-wide uppercase text-[10px] sm:text-[11px]"
              >
                Portals
                <ChevronDown className={`w-3 h-3 transition-transform ${portalsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {portalsDropdownOpen && (
                <div
                  className="absolute right-0 mt-1 w-44 bg-white border border-[#ccc] rounded shadow-lg py-1.5 z-50 text-left animate-in fade-in duration-150"
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

            <span className="text-[#ccc]">|</span>

            {/* Give / Support Button */}
            <a
              href="#community"
              className="text-[#333] hover:text-black hover:underline font-medium tracking-wide uppercase text-[10px] sm:text-[11px]"
            >
              Give
            </a>

            <span className="text-[#ccc]">|</span>

            {/* Search Trigger Button */}
            <button
              type="button"
              onClick={() => setSearchOpen(!searchOpen)}
              className="flex items-center gap-1.5 text-[#333] hover:text-black px-1.5 py-1 rounded transition-colors font-medium text-[10px] sm:text-[11px]"
              aria-label="Search site"
            >
              <Search className="w-3.5 h-3.5 text-[#444]" />
              <span className="hidden sm:inline uppercase">Search</span>
            </button>
          </div>
        </div>
      </div>

      {/* Optional Search Bar Popup */}
      {searchOpen && (
        <div className="w-full bg-white border-b border-[#ccc] px-4 py-3 shadow-md">
          <form onSubmit={handleSearchSubmit} className="max-w-3xl mx-auto flex items-center gap-2">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-[#888] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search academics, admissions, campus, sports..."
                className="w-full pl-9 pr-4 py-2 border border-[#ccc] rounded text-sm text-[#222] placeholder:text-[#888] focus:outline-none focus:border-[#222]"
                autoFocus
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-[#222] text-white text-xs font-semibold uppercase tracking-wider rounded hover:bg-black transition-colors"
            >
              Search
            </button>
            <button
              type="button"
              onClick={() => setSearchOpen(false)}
              className="p-2 text-[#666] hover:text-black rounded"
              aria-label="Close search"
            >
              <X className="w-5 h-5" />
            </button>
          </form>
        </div>
      )}

      {/* =========================================================================
          2. MAIN NAVIGATION BAR (MODELED DIRECTLY AFTER BDCS)
          - Sizing: ~72px height, generous spacing
          - Left: School Logo & Title
          - Center: ABOUT, ADMISSIONS, ACADEMICS, THE EXPERIENCE, PROGRAMS
          - Right Buttons: INQUIRE, VISIT, APPLY
          - Color Scheme: Neutral wireframe (white background, #222 text, #ccc borders)
          ========================================================================= */}
      <nav
        className={`w-full transition-all duration-200 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#ccc] py-3'
            : 'bg-white border-b border-[#e5e5e5] py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Logo & School Name (Official IS Dev Samaj Emblem) */}
          <a href="#hero" className="flex items-center gap-3 shrink-0 group">
            <img
              src="/logo.png"
              alt="IS Dev Samaj Senior Secondary School Emblem"
              referrerPolicy="no-referrer"
              className="w-10 h-10 sm:w-12 sm:h-12 object-contain shrink-0 group-hover:scale-105 transition-transform drop-shadow-sm"
            />
            <div className="text-left">
              <span className="block text-sm sm:text-base font-bold tracking-tight text-[#111] leading-tight">
                IS Dev Samaj
              </span>
              <span className="block text-[11px] sm:text-xs text-[#555] font-normal leading-tight">
                Senior Secondary School
              </span>
            </div>
          </a>

          {/* Desktop Navigation Category Links */}
          <div className="hidden xl:flex items-center gap-6 2xl:gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xs font-semibold tracking-wider text-[#333] hover:text-black transition-colors py-2 border-b-2 border-transparent hover:border-[#222]"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right Action Buttons: INQUIRE, VISIT, APPLY (Exact buttons from BDCS) */}
          <div className="hidden lg:flex items-center gap-2.5">
            {/* INQUIRE Button */}
            <button
              type="button"
              onClick={() => onOpenAdmissions('inquire')}
              className="px-3.5 py-2 border border-[#ccc] hover:border-[#999] bg-white hover:bg-neutral-50 text-[#222] text-xs font-semibold uppercase tracking-wider rounded transition-colors shadow-sm"
            >
              Inquire
            </button>

            {/* VISIT Button */}
            <a
              href="#contact"
              className="px-3.5 py-2 border border-[#ccc] hover:border-[#999] bg-white hover:bg-neutral-50 text-[#222] text-xs font-semibold uppercase tracking-wider rounded transition-colors shadow-sm"
            >
              Visit
            </a>

            {/* APPLY Button (Primary prominent action) */}
            <button
              type="button"
              onClick={() => onOpenAdmissions('apply')}
              className="px-4 py-2 bg-white hover:bg-red-600 text-red-600 hover:text-white border border-red-600 hover:border-red-600 text-xs font-bold uppercase tracking-wider rounded transition-colors duration-200 shadow-sm"
            >
              Apply
            </button>
          </div>

          {/* Mobile Right: Quick Apply Button + Hamburger Menu */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              type="button"
              onClick={() => onOpenAdmissions('apply')}
              className="px-3 py-1.5 bg-white hover:bg-red-600 text-red-600 hover:text-white border border-red-600 hover:border-red-600 text-xs font-bold uppercase tracking-wider rounded transition-colors duration-200"
            >
              Apply
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="px-3 py-1.5 bg-white hover:bg-black text-black hover:text-white border border-black hover:border-black text-xs font-bold uppercase tracking-wider rounded transition-colors duration-200 flex items-center gap-1.5 shadow-sm"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              <span>{mobileMenuOpen ? 'Close' : 'Menu'}</span>
            </button>
          </div>
        </div>

        {/* =========================================================================
            3. MOBILE MENU DRAWER (RESPONSIVE VIEW)
            ========================================================================= */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-[#ccc] px-5 py-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
            {/* Action Buttons Row */}
            <div className="grid grid-cols-3 gap-2 pb-5 border-b border-[#e5e5e5]">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAdmissions('inquire');
                }}
                className="py-2.5 px-2 border border-[#ccc] text-[#222] text-xs font-semibold uppercase tracking-wider rounded text-center"
              >
                Inquire
              </button>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-2 border border-[#ccc] text-[#222] text-xs font-semibold uppercase tracking-wider rounded text-center"
              >
                Visit
              </a>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAdmissions('apply');
                }}
                className="py-2.5 px-2 bg-white hover:bg-red-600 text-red-600 hover:text-white border border-red-600 hover:border-red-600 text-xs font-bold uppercase tracking-wider rounded text-center transition-colors duration-200"
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
                  className="py-2.5 px-3 text-sm font-semibold tracking-wider text-[#222] hover:bg-neutral-100 rounded transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Utility Links: Portals & Giving */}
            <div className="pt-4 border-t border-[#e5e5e5] flex flex-col gap-2 text-xs text-[#555]">
              <div className="font-semibold text-[11px] uppercase tracking-wider text-[#888] px-3 pt-1">
                Portals &amp; Community
              </div>
              {portalLinks.map((portal) => (
                <a
                  key={portal.label}
                  href={portal.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-1.5 text-xs text-[#444] hover:text-black hover:bg-neutral-50 rounded"
                >
                  {portal.label}
                </a>
              ))}
              <a
                href="#community"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-1.5 text-xs font-medium text-[#222] hover:underline"
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
