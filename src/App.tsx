import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { WireframeSections } from './components/WireframeSections';
import { AdmissionsModal } from './components/AdmissionsModal';
import { WhatsHappeningPage } from './components/WhatsHappeningPage';

export default function App() {
  const [admissionsModalOpen, setAdmissionsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<'home' | 'whats-happening'>(() => {
    if (typeof window !== 'undefined') {
      return window.location.hash === '#whats-happening' ? 'whats-happening' : 'home';
    }
    return 'home';
  });

  // Listen to hash changes for browser navigation and direct URLs
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#whats-happening') {
        setCurrentPage('whats-happening');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (
        !window.location.hash ||
        window.location.hash === '#' ||
        window.location.hash === '#home' ||
        window.location.hash === '#hero'
      ) {
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const openWhatsHappening = () => {
    setCurrentPage('whats-happening');
    window.location.hash = '#whats-happening';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const backToHome = () => {
    setCurrentPage('home');
    if (window.location.hash === '#whats-happening') {
      window.history.pushState(null, '', window.location.pathname);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-[#222] flex flex-col font-sans">
      {/* Navigation Bar at the top — only shown on the home page */}
      {currentPage !== 'whats-happening' && (
        <Header
          onOpenAdmissions={() => setAdmissionsModalOpen(true)}
          onGoHome={backToHome}
          onOpenWhatsHappening={openWhatsHappening}
        />
      )}

      <main className="flex-grow">
        {currentPage === 'whats-happening' ? (
          <WhatsHappeningPage
            onBack={backToHome}
            onOpenAdmissions={() => setAdmissionsModalOpen(true)}
          />
        ) : (
          <>
            {/* 1. HERO — Compact banner with transition images */}
            <HeroSection />

            {/* 2 to 14. WIREFRAME SECTIONS — Clean low-fidelity wireframe structure */}
            <WireframeSections onOpenWhatsHappening={openWhatsHappening} />
          </>
        )}
      </main>

      {/* Admissions / Inquiry Modal */}
      <AdmissionsModal
        isOpen={admissionsModalOpen}
        onClose={() => setAdmissionsModalOpen(false)}
      />
    </div>
  );
}


