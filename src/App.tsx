import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { WireframeSections } from './components/WireframeSections';
import { AdmissionsModal } from './components/AdmissionsModal';

export default function App() {
  const [admissionsModalOpen, setAdmissionsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-[#222] flex flex-col font-sans">
      {/* Navigation Bar at the top (modeled after BDCS structure, size, and buttons) */}
      <Header onOpenAdmissions={() => setAdmissionsModalOpen(true)} />

      <main className="flex-grow">
        {/* 1. HERO — Compact banner with transition images */}
        <HeroSection />

        {/* 2 to 14. WIREFRAME SECTIONS — Clean low-fidelity wireframe structure */}
        <WireframeSections />
      </main>

      {/* Admissions / Inquiry Modal */}
      <AdmissionsModal
        isOpen={admissionsModalOpen}
        onClose={() => setAdmissionsModalOpen(false)}
      />
    </div>
  );
}


