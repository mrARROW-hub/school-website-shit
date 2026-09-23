import React, { useRef, useEffect, useState } from 'react';
import { MapPin, Navigation, ExternalLink, Phone, Mail, Clock, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import {
  ISBShape,
  ISBWordBadge,
  ISBFooterIconsRow,
  ISBScrollPopEdgeShape,
  ISBShapeType,
  ISBCornerDesign,
  ISBCornerCard,
  ISBRedCornerAccent,
} from './DecorativeShapes';
import { ShadyHighlight } from './ShadyHighlight';
import { ScrollPopSection, ScrollPopBox } from './ScrollPopSection';
import { motion } from 'motion/react';
import { BeyondDevSamajReviews } from './BeyondDevSamajReviews';
import { WeMoveSection } from './WeMoveSection';
import campusPhoto from '../assets/campus1-1.webp';
import g16Fallback from '../assets/g16.jpg';
import moralGroundingImg from '../assets/images/moral_grounding_1790149720413.jpg';

interface CampusFacility {
  tag: string;
  title: string;
  desc: string;
}

const CampusFacilitiesCarousel: React.FC<{ facilities: CampusFacility[] }> = ({ facilities }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragInfo = useRef({
    isDown: false,
    startX: 0,
    scrollLeft: 0,
  });

  // Enable mouse wheel to scroll horizontally on small screens without showing scrollbar
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      // Only handle if content overflows horizontally (small screens)
      if (el.scrollWidth <= el.clientWidth) return;

      const delta = Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
      if (Math.abs(delta) > 0) {
        const atStart = el.scrollLeft <= 0 && delta < 0;
        const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 2 && delta > 0;

        if (!atStart && !atEnd) {
          e.preventDefault();
          el.scrollLeft += delta;
        }
      }
    };

    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, []);

  // Mouse Drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    const el = scrollRef.current;
    if (!el || el.scrollWidth <= el.clientWidth) return;
    dragInfo.current.isDown = true;
    dragInfo.current.startX = e.pageX - el.offsetLeft;
    dragInfo.current.scrollLeft = el.scrollLeft;
    setIsDragging(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!dragInfo.current.isDown) return;
    const el = scrollRef.current;
    if (!el) return;
    e.preventDefault();
    const x = e.pageX - el.offsetLeft;
    const walk = (x - dragInfo.current.startX) * 1.4;
    el.scrollLeft = dragInfo.current.scrollLeft - walk;
  };

  const handleMouseUpOrLeave = () => {
    if (dragInfo.current.isDown) {
      dragInfo.current.isDown = false;
      setIsDragging(false);
    }
  };

  const scrollByAmount = (direction: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    const step = Math.min(el.clientWidth * 0.85, 320);
    el.scrollBy({
      left: direction === 'left' ? -step : step,
      behavior: 'smooth',
    });
  };

  return (
    <div className="relative">
      {/* Mobile/Small-screen simple navigation arrows */}
      <div className="flex md:hidden items-center justify-between mb-2 px-1">
        <span className="text-[11px] font-medium text-[#777]">
          Drag or scroll with mouse
        </span>
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => scrollByAmount('left')}
            aria-label="Previous facility"
            className="p-1.5 rounded-full border border-[#ccc] bg-white text-[#555] hover:bg-[#f5f5f5] hover:text-black transition-colors cursor-pointer"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            type="button"
            onClick={() => scrollByAmount('right')}
            aria-label="Next facility"
            className="p-1.5 rounded-full border border-[#ccc] bg-white text-[#555] hover:bg-[#f5f5f5] hover:text-black transition-colors cursor-pointer"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Facility Cards: Horizontal scroll on small screens (< md), 3-column grid on desktop (md+) */}
      <div
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
        className={`flex md:grid md:grid-cols-3 gap-4 md:gap-6 overflow-x-auto md:overflow-visible no-scrollbar pb-3 pt-1 -mx-4 px-4 sm:mx-0 sm:px-0 select-none ${
          isDragging ? 'cursor-grabbing' : 'cursor-grab md:cursor-default'
        } ${!isDragging ? 'snap-x snap-mandatory md:snap-none' : ''}`}
      >
        {facilities.map((facility, idx) => (
          <div
            key={idx}
            className="w-[82vw] max-w-[320px] sm:w-[320px] md:w-auto shrink-0 md:shrink snap-center h-full"
          >
            <div className="border border-[#ccc] rounded overflow-hidden bg-white h-full flex flex-col hover:border-[#888] hover:shadow-xs transition-all select-none">
              <div className="wf-img-placeholder h-44 shrink-0 font-medium select-none" draggable={false}>
                {facility.tag}
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-sm text-[#222] mb-1">{facility.title}</h4>
                  <p className="text-xs text-[#666] leading-relaxed">{facility.desc}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

interface FacultyMember {
  tag: string;
  name: string;
  role: string;
  bio: string;
}

const FacultyCarousel: React.FC<{ faculty: FacultyMember[] }> = ({ faculty }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragInfo = useRef({
    isDown: false,
    startX: 0,
    scrollLeft: 0,
  });

  // Enable mouse wheel to scroll horizontally on small screens without showing scrollbar
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      // Only handle if content overflows horizontally (small screens)
      if (el.scrollWidth <= el.clientWidth) return;

      const delta = Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
      if (Math.abs(delta) > 0) {
        const atStart = el.scrollLeft <= 0 && delta < 0;
        const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 2 && delta > 0;

        if (!atStart && !atEnd) {
          e.preventDefault();
          el.scrollLeft += delta;
        }
      }
    };

    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, []);

  // Mouse Drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    const el = scrollRef.current;
    if (!el || el.scrollWidth <= el.clientWidth) return;
    dragInfo.current.isDown = true;
    dragInfo.current.startX = e.pageX - el.offsetLeft;
    dragInfo.current.scrollLeft = el.scrollLeft;
    setIsDragging(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!dragInfo.current.isDown) return;
    const el = scrollRef.current;
    if (!el) return;
    e.preventDefault();
    const x = e.pageX - el.offsetLeft;
    const walk = (x - dragInfo.current.startX) * 1.4;
    el.scrollLeft = dragInfo.current.scrollLeft - walk;
  };

  const handleMouseUpOrLeave = () => {
    if (dragInfo.current.isDown) {
      dragInfo.current.isDown = false;
      setIsDragging(false);
    }
  };

  const scrollByAmount = (direction: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    const step = Math.min(el.clientWidth * 0.85, 280);
    el.scrollBy({
      left: direction === 'left' ? -step : step,
      behavior: 'smooth',
    });
  };

  return (
    <div className="relative mt-8">
      {/* Mobile/Small-screen simple navigation arrows */}
      <div className="flex md:hidden items-center justify-between mb-2 px-1">
        <span className="text-[11px] font-medium text-[#777]">
          Drag or scroll with mouse
        </span>
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => scrollByAmount('left')}
            aria-label="Previous educator"
            className="p-1.5 rounded-full border border-[#ccc] bg-white text-[#555] hover:bg-[#f5f5f5] hover:text-black transition-colors cursor-pointer"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            type="button"
            onClick={() => scrollByAmount('right')}
            aria-label="Next educator"
            className="p-1.5 rounded-full border border-[#ccc] bg-white text-[#555] hover:bg-[#f5f5f5] hover:text-black transition-colors cursor-pointer"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Faculty Cards: Horizontal scroll on small screens (< md), 4-column grid on desktop (md+) */}
      <div
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
        className={`flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 overflow-x-auto md:overflow-visible no-scrollbar pb-3 pt-1 -mx-4 px-4 sm:mx-0 sm:px-0 select-none ${
          isDragging ? 'cursor-grabbing' : 'cursor-grab md:cursor-default'
        } ${!isDragging ? 'snap-x snap-mandatory md:snap-none' : ''}`}
      >
        {faculty.map((member, idx) => (
          <div
            key={idx}
            className="w-[78vw] max-w-[280px] sm:w-[260px] md:w-auto shrink-0 md:shrink snap-center h-full"
          >
            <div className="border border-[#ccc] rounded overflow-hidden text-center bg-white h-full flex flex-col hover:border-[#888] hover:shadow-xs transition-all select-none">
              <div className="wf-img-placeholder h-56 shrink-0 font-medium select-none" draggable={false}>
                {member.tag}
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-sm text-[#222]">{member.name}</h4>
                  <div className="text-xs text-[#888] mb-2">{member.role}</div>
                  <p className="text-xs text-[#666] leading-relaxed">{member.bio}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const OurStoryPillarsCarousel: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [activePillarMobile, setActivePillarMobile] = useState<string | null>(null);
  const hasDragged = useRef(false);
  const dragInfo = useRef({
    isDown: false,
    startX: 0,
    scrollLeft: 0,
  });

  // Mouse wheel horizontal scroll support
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      if (el.scrollWidth <= el.clientWidth) return;
      const delta = Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
      if (Math.abs(delta) > 0) {
        const atStart = el.scrollLeft <= 0 && delta < 0;
        const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 2 && delta > 0;
        if (!atStart && !atEnd) {
          e.preventDefault();
          el.scrollLeft += delta;
        }
      }
    };

    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    const el = scrollRef.current;
    if (!el || el.scrollWidth <= el.clientWidth) return;
    dragInfo.current.isDown = true;
    dragInfo.current.startX = e.pageX - el.offsetLeft;
    dragInfo.current.scrollLeft = el.scrollLeft;
    hasDragged.current = false;
    setIsDragging(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!dragInfo.current.isDown) return;
    const el = scrollRef.current;
    if (!el) return;
    e.preventDefault();
    const x = e.pageX - el.offsetLeft;
    const walk = (x - dragInfo.current.startX) * 1.4;
    if (Math.abs(x - dragInfo.current.startX) > 4) {
      hasDragged.current = true;
    }
    el.scrollLeft = dragInfo.current.scrollLeft - walk;
  };

  const handleMouseUpOrLeave = () => {
    if (dragInfo.current.isDown) {
      dragInfo.current.isDown = false;
      setIsDragging(false);
    }
  };

  const scrollByAmount = (direction: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    const step = 220;
    el.scrollBy({
      left: direction === 'left' ? -step : step,
      behavior: 'smooth',
    });
  };

  const ourStoryPillarsData = [
    {
      id: 'pillar-1',
      title: 'Moral Grounding',
      desc: 'Ethical foundations before academic ambition.',
      shape: 'pink-circle' as ISBShapeType,
      hoverBorder: 'hover:border-[#FA448C]',
      image: 'https://isdevsamaj21.ac.in/wp-content/uploads/2024/05/sports3.jpg',
      bgColor: 'bg-[#FA448C]',
      hoverShape: 'four-petal-flower' as ISBShapeType,
      hoverShapeColor: '#FFC53D',
    },
    {
      id: 'pillar-2',
      title: 'Intellectual Depth',
      desc: 'Curiosity over rote learning, mastery over memorization.',
      shape: 'blue-hourglass' as ISBShapeType,
      hoverBorder: 'hover:border-[#0064ec]',
      image: 'https://isdevsamaj21.ac.in/wp-content/uploads/2024/05/lab3-1.jpg',
      bgColor: 'bg-[#0064ec]',
      hoverShape: 'purple-stairs' as ISBShapeType,
      hoverShapeColor: '#11FEEE',
    },
    {
      id: 'pillar-3',
      title: 'Self-Reliance',
      desc: 'Equipping students to navigate a changing world independently.',
      shape: 'yellow-bars' as ISBShapeType,
      hoverBorder: 'hover:border-[#FF3D37]',
      image: 'https://isdevsamaj21.ac.in/wp-content/uploads/2024/05/g11.jpg',
      bgColor: 'bg-[#FF3D37]',
      hoverShape: 'yellow-bars' as ISBShapeType,
      hoverShapeColor: '#FFFF01',
    },
  ];

  return (
    <div className="mt-6 relative">
      {/* Navigation Controls just like Hero Section carousel */}
      <div className="flex items-center justify-between mb-3 px-0.5">
        <span className="text-[11px] font-bold uppercase tracking-wider text-[#003366]/80 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#003366] inline-block" />
          Core Pillars
        </span>
        <div className="flex items-center gap-1.5 sm:gap-2">
          <button
            type="button"
            onClick={() => scrollByAmount('left')}
            aria-label="Previous pillar"
            className="w-8 h-8 rounded-full bg-white hover:bg-[#003366] text-[#003366] hover:text-white border border-[#ccc] shadow-xs flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            type="button"
            onClick={() => scrollByAmount('right')}
            aria-label="Next pillar"
            className="w-8 h-8 rounded-full bg-white hover:bg-[#003366] text-[#003366] hover:text-white border border-[#ccc] shadow-xs flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Horizontal Form with Scroll & Elongated Card Height with Blank Picture Slot */}
      <div
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
        className={`flex flex-row gap-3.5 sm:gap-4 overflow-x-auto no-scrollbar pb-3 pt-1 -mx-2 px-2 sm:mx-0 sm:px-0 select-none ${
          isDragging ? 'cursor-grabbing' : 'cursor-grab'
        } ${!isDragging ? 'snap-x snap-mandatory scroll-smooth' : ''}`}
      >
        {ourStoryPillarsData.map((pillar, idx) => {
          const isActive = activePillarMobile === pillar.id;
          return (
            <div
              key={pillar.id}
              className="w-[85vw] max-w-[340px] sm:w-[280px] lg:w-full lg:max-w-none shrink-0 snap-start h-full"
            >
              <div
                onClick={() => {
                  if (typeof window !== 'undefined' && window.innerWidth >= 1024) return;
                  if (hasDragged.current) {
                    hasDragged.current = false;
                    return;
                  }
                  setActivePillarMobile(prev => (prev === pillar.id ? null : pillar.id));
                }}
                className={`relative overflow-hidden border border-[#ccc] rounded-2xl ${pillar.bgColor} ${pillar.hoverBorder} transition-all duration-300 group h-full shadow-xs flex flex-col justify-end min-h-[380px] sm:min-h-[410px] lg:min-h-[450px] cursor-pointer lg:cursor-default`}
              >
                {/* Background Image: reveals solid color on hover on desktop, or tap on mobile */}
                {pillar.image ? (
                  <div
                    className={`absolute inset-0 bg-cover group-hover:scale-105 group-hover:opacity-0 transition-all duration-500 ease-out ${
                      pillar.id === 'pillar-2' ? 'intellectual-depth-img' : pillar.id === 'pillar-3' ? 'self-reliance-img' : 'bg-center'
                    } ${isActive ? 'scale-105 !opacity-0' : ''}`}
                    style={{ backgroundImage: `url(${pillar.image})` }}
                  />
                ) : (
                  <div className="absolute inset-0 bg-slate-100 border-2 border-dashed border-slate-300 flex items-center justify-center pointer-events-none">
                    <span className="text-[11px] text-slate-400 font-medium uppercase tracking-wider">Image Background</span>
                  </div>
                )}

                {/* Large decorative shape appearing in top-right on hover (desktop) or tap (mobile) */}
                {pillar.hoverShape && (
                  <div
                    className={`absolute z-10 pointer-events-none opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-out ${
                      pillar.hoverShape === 'four-petal-flower'
                        ? '-top-8 -right-8 sm:-top-10 sm:-right-10'
                        : '-top-10 -right-10'
                    } ${isActive ? '!opacity-100 !scale-100' : ''}`}
                  >
                    <ISBShape
                      type={pillar.hoverShape}
                      size={pillar.hoverShape === 'four-petal-flower' ? 260 : 200}
                      color={pillar.hoverShapeColor}
                    />
                  </div>
                )}

                {/* Top shape symbol indicator */}
                <div
                  className={`absolute top-3 left-3 z-20 bg-white/90 backdrop-blur-xs p-1.5 rounded-lg shadow-xs group-hover:opacity-0 transition-opacity duration-300 ${
                    isActive ? '!opacity-0' : ''
                  }`}
                >
                  <ISBShape type={pillar.shape} size={16} />
                </div>

                {/* Text content moved to bottom left with clean readability */}
                <div
                  className={`relative z-20 p-4 sm:p-5 text-left text-white w-full flex flex-col justify-end transition-colors duration-300 bg-gradient-to-t from-slate-950/95 via-slate-950/70 to-transparent group-hover:bg-transparent ${
                    isActive ? '!bg-transparent' : ''
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <h4 className="font-bold text-sm sm:text-base text-white [text-shadow:_0_2px_4px_rgba(0,0,0,0.9)] mb-1">
                        {pillar.title}
                      </h4>
                      <p className="text-xs text-slate-200 [text-shadow:_0_1px_3px_rgba(0,0,0,0.8)] leading-relaxed mb-0">
                        {pillar.desc}
                      </p>
                    </div>
                    <span
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 shadow-xs bg-white/20 text-white group-hover:bg-white group-hover:text-[#003366] group-hover:translate-x-1 ${
                        isActive ? '!bg-white !text-[#003366] !translate-x-1' : ''
                      }`}
                    >
                      <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const WireframeSections: React.FC = () => {
  const [isMobileOrTablet, setIsMobileOrTablet] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 1024;
    }
    return false;
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mq = window.matchMedia('(max-width: 1023px)');
    const update = () => setIsMobileOrTablet(mq.matches);
    update();
    mq.addEventListener?.('change', update);
    return () => mq.removeEventListener?.('change', update);
  }, []);

  const brandPillars: { type: ISBShapeType; name: string; desc: string; color: string }[] = [
    { type: 'purple-stairs', name: 'Progress', desc: 'Pre-K through Class XII continuum', color: '#861fce' },
    { type: 'pink-circle', name: 'Community', desc: 'Inclusivity, empathy, & belonging', color: '#fe76b4' },
    { type: 'blue-hourglass', name: 'Intellect', desc: 'Academic inquiry & critical rigor', color: '#0064ec' },
    { type: 'yellow-bars', name: 'Expression', desc: 'Diversity of talents & vibrant voice', color: '#FFC548' },
    { type: 'green-flower', name: 'Flourishing', desc: 'Holistic character & moral grounding', color: '#00b273' },
    { type: 'red-triangle', name: 'Empowerment', desc: 'Courage, leadership, & forward drive', color: '#FF3D37' },
  ];

  const campusFacilities = [
    {
      tag: 'LIBRARY PHOTO',
      title: 'Library & Resource Centre',
      desc: 'Over 25,000 volumes, digital research pods, quiet study carrels, and periodical archives.',
    },
    {
      tag: 'LABORATORIES PHOTO',
      title: 'Science & Computer Labs',
      desc: 'Dedicated Physics, Chemistry, Biology, and AI-enabled computer stations built to CBSE specifications.',
    },
    {
      tag: 'SPORTS COMPLEX PHOTO',
      title: 'Sports & Play Arena',
      desc: 'Multi-sport turf, athletics track, basketball court, indoor badminton hall, and yoga pavilion.',
    },
    {
      tag: 'SMART SUITES PHOTO',
      title: 'Smart Classrooms & Audio-Visual',
      desc: 'Interactive smart panels, multimedia lecture capture, and air-conditioned ergonomic learning spaces.',
    },
    {
      tag: 'CREATIVE ARTS PHOTO',
      title: 'Arts & Cultural Studio',
      desc: 'Dedicated vocal & instrumental acoustic rooms, fine arts studio, and classical dance auditorium.',
    },
    {
      tag: 'INNOVATION HUB PHOTO',
      title: 'Robotics & STEM Tinkering Lab',
      desc: 'Hands-on experiential tinkering lab with 3D modeling kits, coding stations, and electronics testbeds.',
    },
  ];

  const facultyMembers: FacultyMember[] = [
    {
      tag: 'FACULTY PHOTO',
      name: 'Dr. S. Sharma',
      role: 'Principal • Ph.D., M.Ed.',
      bio: '25+ years in educational leadership, pedagogy reform, and character-centred schooling.',
    },
    {
      tag: 'FACULTY PHOTO',
      name: 'Mrs. R. Kaur',
      role: 'Vice Principal • M.Sc., B.Ed.',
      bio: 'Spearheading academic rigor, student welfare, and CBSE compliance for over two decades.',
    },
    {
      tag: 'FACULTY PHOTO',
      name: 'Mr. A. Verma',
      role: 'Head of Sciences • M.Sc. Physics',
      bio: 'Inspiring future engineers and researchers with inquiry-led laboratory instruction.',
    },
    {
      tag: 'FACULTY PHOTO',
      name: 'Mrs. P. Gupta',
      role: 'Head of Humanities • M.A., M.Phil.',
      bio: 'Fostering critical thought, historical consciousness, and articulate prose in every student.',
    },
  ];

  return (
    <>
      {/* =========================================================================
          ISB-INSPIRED VALUES & DECORATIVE SHAPES RIBBON
          Replicating the iconic visual language from isb.be
          ========================================================================= */}
      <section className="border-b border-[#e5e5e5] bg-[#fafafa]/95 py-2 sm:py-3 md:py-3.5 transition-colors overflow-hidden" aria-label="School Pillars and Visual Language">
        <ScrollPopSection direction="left">
          <div className="wireframe-container">
            <div className="flex flex-col md:flex-row items-center justify-between gap-2 md:gap-4">
              {/* Desktop / Tablet Heading */}
              <div className="hidden md:flex items-center gap-2.5 text-left shrink-0">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#444] bg-white px-3 py-1 rounded-full border border-[#ddd] shadow-xs">
                  Visual Language &amp; Pillars
                </span>
                <span className="text-xs text-[#666]">
                  Decorative shapes inspired by international school branding
                </span>
              </div>

              {/* Wrapped Shapes Ribbon for Mobile & Desktop (natural word wrapping in lines, no scrolling) */}
              <div className="w-full md:w-auto flex flex-wrap items-center justify-center md:justify-end gap-1.5 sm:gap-2 py-0.5">
                {/* Compact label inline on mobile */}
                <span className="md:hidden text-[10px] font-bold uppercase tracking-wider text-[#555] bg-white px-2.5 py-1 rounded-full border border-[#ddd] shadow-2xs whitespace-nowrap">
                  Pillars
                </span>

                {brandPillars.map((item, idx) => (
                  <div
                    key={idx}
                    className="group flex items-center gap-1.5 px-2.5 py-1 sm:py-1.5 rounded-full bg-white border border-[#e5e5e5] hover:border-[#bbb] hover:shadow-xs transition-all cursor-default"
                    title={`${item.name}: ${item.desc}`}
                  >
                    <div className="transition-transform duration-300 group-hover:scale-125 group-hover:rotate-6 shrink-0">
                      <ISBShape type={item.type} size={16} />
                    </div>
                    <span className="text-[11px] sm:text-xs font-semibold text-[#333] whitespace-nowrap group-hover:text-black transition-colors">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollPopSection>
      </section>

      {/* =========================================================================
          2. OUR STORY — Where Values Meet Vision
          ========================================================================= */}
      <section className="wireframe-section relative overflow-hidden" id="story">
        {/* Scroll-triggered edge pop shape (half pops out from right edge, 0 extra vertical space) */}
        <ISBScrollPopEdgeShape shape="purple-stairs" align="right" topPosition="top-28 sm:top-36" />
        <ScrollPopSection direction="left">
          <div className="wireframe-container relative z-10">
            <div className="wf-label text-center flex items-center justify-center gap-2">
              <ISBShape type="pink-circle" size={14} />
              <span>Our Story</span>
              <ISBShape type="blue-hourglass" size={14} />
            </div>
            <h2
              className="wf-heading !text-[34px] font-fraunces text-[#111] leading-tight font-bold text-center break-words"
              style={{ fontFamily: "'Fraunces', serif", fontSize: '34px' }}
            >
              where <ShadyHighlight color="turquoise">values</ShadyHighlight> meet <ShadyHighlight color="turquoise" delay={500}>vision</ShadyHighlight>.....
            </h2>

            {/* ISB-Style Sentence with Inline Shapes on Signature ISB Blue Background */}
            <ScrollPopBox direction="right" className="my-8">
              <div className="relative max-w-4xl mx-auto p-6 sm:p-10 pb-12 sm:pb-12 rounded-3xl rounded-bl-none border-0 border-none bg-[#0064ec] text-white shadow-xl shadow-blue-900/10 overflow-hidden text-center">
                {/* ISB Signature Bottom-Left Corner Design */}
                <ISBCornerDesign size={38} className="sm:scale-110" />

                {/* Subtle ambient gradient overlay matching isb.be learning journey */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0051e8] via-[#0064ec] to-[#0d7aff] opacity-90 pointer-events-none" />

                <p className="relative z-10 text-base sm:text-xl text-white font-medium leading-relaxed sm:leading-loose">
                  We are an inclusive, value-grounded{' '}
                  <ISBWordBadge shape="blue-hourglass" label="Intellect & Rigor" light>
                    school
                  </ISBWordBadge>{' '}
                  in Chandigarh for{' '}
                  <ISBWordBadge shape="pink-circle" label="Community & Belonging" light>
                    students
                  </ISBWordBadge>{' '}
                  from Preschool through{' '}
                  <ISBWordBadge shape="purple-stairs" label="Continuous Learning" light>
                    Class XII
                  </ISBWordBadge>
                  , offering an immersive and culturally{' '}
                  <ISBWordBadge shape="green-flower" label="Flourishing Character" light>
                    rich
                  </ISBWordBadge>{' '}
                  education for{' '}
                  <ISBWordBadge shape="yellow-bars" label="Diverse Voices" light>
                    curious minds
                  </ISBWordBadge>{' '}
                  guided by{' '}
                  <ISBWordBadge shape="red-triangle" label="Empowerment & Purpose" light>
                    moral integrity
                  </ISBWordBadge>
                  .
                </p>
              </div>
            </ScrollPopBox>

            {/* Responsive Background inspired by ISB's "Discover & Experience" section:
                - On small screens: background & red top-right design sit behind the image only and slide in from the left.
                - On large screens: background & red top-right design sit behind the heritage card and slide in from the left to its original place. */}
            <motion.div
              initial={!isMobileOrTablet ? { opacity: 0, x: -140, scale: 0.98 } : false}
              whileInView={!isMobileOrTablet ? { opacity: 1, x: 0, scale: 1 } : undefined}
              viewport={{ once: true, amount: 0.12 }}
              transition={{
                type: 'spring',
                stiffness: 75,
                damping: 18,
                mass: 0.85,
              }}
              className="relative rounded-3xl lg:bg-[#f5f5f5] lg:border lg:border-neutral-200/90 lg:p-12 xl:p-14 lg:shadow-sm mt-8"
            >
              {/* Red coloured design at top-right corner for large screens (enlarged for prominence) */}
              <div className="hidden lg:block absolute -top-7 -right-4 xl:-top-8 xl:-right-5 z-20 pointer-events-none select-none">
                <ISBRedCornerAccent size={112} />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
                <div>
                  {/* Reduced text on small screens (outside any box/background); full text on large screens */}
                  <p className="block lg:hidden text-base text-[#003366] leading-relaxed mb-6 font-medium">
                    Rooted in Dev Samaj philosophy, shaping intellect and character with purpose.
                  </p>
                  <p className="hidden lg:block text-base text-[#003366] leading-relaxed mb-6">
                    Rooted in the educational philosophy of Dev Samaj, we believe true schooling shapes both intellect and conscience. For decades, our classrooms have been incubators of curiosity, resilience, and compassion.
                  </p>
                  <OurStoryPillarsCarousel />
                  <ScrollPopBox direction="right" className="mt-8">
                    <div className="flex flex-wrap gap-8">
                      <div>
                        <div className="text-3xl font-bold text-[#222]">2,400+</div>
                        <div className="text-xs text-[#666]">Students</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-[#222]">180+</div>
                        <div className="text-xs text-[#666]">Faculty Members</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-[#222]">98%</div>
                        <div className="text-xs text-[#666]">Board Distinction</div>
                      </div>
                    </div>
                  </ScrollPopBox>
                </div>

                <div>
                  {/* Small screens wrapper:
                      - The background touches the left edge completely (half out of screen feel).
                      - The background is expanded and visibly framed around the image.
                      - The image itself is NOT cut, keeping its full rounded corners and borders intact.
                      - The entire unit smoothly pops out of the left side. */}
                  <motion.div
                    initial={isMobileOrTablet ? { opacity: 0, x: -110, scale: 0.95 } : false}
                    whileInView={isMobileOrTablet ? { opacity: 1, x: 0, scale: 1 } : undefined}
                    viewport={{ once: true, amount: 0.12 }}
                    transition={{
                      type: 'spring',
                      stiffness: 85,
                      damping: 17,
                      mass: 0.85,
                    }}
                    className="relative rounded-r-3xl rounded-l-none bg-[#f5f5f5] border-y border-r border-l-0 border-neutral-200/90 shadow-md
                      -ml-[var(--space-4,32px)] w-[calc(100%+var(--space-4,32px))]
                      p-6 sm:p-8 pt-8 sm:pt-10 pb-8 sm:pb-10 pl-6 sm:pl-8 pr-6 sm:pr-8
                      lg:ml-0 lg:w-full lg:rounded-3xl lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none"
                  >
                    {/* Red coloured design at top-right corner for small screens (enlarged for prominence) */}
                    <div className="block lg:hidden absolute -top-5 right-3 sm:-top-6 sm:right-4 z-20 pointer-events-none select-none">
                      <ISBRedCornerAccent size={88} />
                    </div>

                    {/* Uncut campus photo with complete rounded corners and slate depth gradient */}
                    <div className="relative w-full aspect-[16/10] sm:aspect-[4/3] lg:aspect-[16/11] min-h-[230px] sm:min-h-[300px] md:min-h-[360px] rounded-2xl overflow-hidden shadow-2xl shadow-slate-900/25 border border-slate-200/90 bg-slate-900 group">
                      <img
                        src={campusPhoto}
                        alt="I.S. Dev Samaj School Iconic Heritage Campus, Sector 21-C, Chandigarh"
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover object-[center_35%] group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      {/* Dark slate depth gradient along the bottom */}
                      <div className="absolute inset-x-0 bottom-0 h-28 sm:h-36 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent pointer-events-none" />

                      {/* Bottom-left CAMPUS label with white color and Poppins sans-serif typography */}
                      <div
                        id="campus-image-label"
                        className="absolute bottom-3 left-4 sm:bottom-5 sm:left-6 z-10 select-none pointer-events-none flex items-center"
                      >
                        <span
                          className="text-white text-xl sm:text-2xl md:text-3xl font-bold tracking-wider sm:tracking-widest uppercase drop-shadow-[0_3px_8px_rgba(0,0,0,0.85)]"
                          style={{ fontFamily: "'Poppins', sans-serif" }}
                        >
                          CAMPUS
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </ScrollPopSection>
      </section>

      {/* =========================================================================
          3. THE LEARNING JOURNEY — Academics
          ========================================================================= */}
      <section className="wireframe-section relative overflow-hidden" id="journey">
        {/* Scroll-triggered edge pop shape (half pops out from left edge, 0 extra vertical space) */}
        <ISBScrollPopEdgeShape shape="blue-hourglass" align="left" topPosition="top-24 sm:top-28" />
        <ScrollPopSection direction="left">
          <div className="wireframe-container relative z-10">
            <div className="wf-label text-center flex items-center justify-center gap-2">
              <ISBShape type="purple-stairs" size={15} />
              <span>Academics</span>
            </div>
          <h2
            className="wf-heading !text-[36px] font-poppins font-bold text-[#222] leading-tight text-center break-words"
            style={{ fontFamily: "'Poppins', sans-serif", fontSize: '36px' }}
          >
            The <ShadyHighlight color="turquoise">Learning Journey</ShadyHighlight>
          </h2>

          {/* ISB-Style Academic Sentence with Inline Shapes on Deep Navy/ISB Blue Background */}
          <ScrollPopBox direction="left" className="my-8">
            <div className="relative max-w-4xl mx-auto p-6 sm:p-10 pb-12 sm:pb-12 rounded-3xl rounded-bl-none border-0 border-none bg-[#002244] text-white shadow-xl shadow-blue-950/20 overflow-hidden text-center">
              {/* ISB Signature Bottom-Left Corner Design */}
              <ISBCornerDesign size={38} className="sm:scale-110" />

              {/* Ambient gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#001730] via-[#002244] to-[#0a3565] opacity-95 pointer-events-none" />

              <p className="relative z-10 text-base sm:text-xl text-white font-medium leading-relaxed sm:leading-loose">
                Our academic continuum guides students from{' '}
                <ISBWordBadge shape="pink-circle" label="Curiosity & Expression" light>
                  Pre-Primary wonder
                </ISBWordBadge>{' '}
                through foundational{' '}
                <ISBWordBadge shape="green-flower" label="Breadth & Fluency" light>
                  Primary discovery
                </ISBWordBadge>
                , advancing into rigorous{' '}
                <ISBWordBadge shape="yellow-bars" label="Disciplined Inquiry" light>
                  Middle School sciences
                </ISBWordBadge>{' '}
                and culminating in exemplary{' '}
                <ISBWordBadge shape="purple-stairs" label="Mastery & Pathways" light>
                  Senior Secondary CBSE
                </ISBWordBadge>{' '}
                distinction.
              </p>
            </div>
          </ScrollPopBox>

          <p className="max-w-2xl text-base text-[#666] mb-8 text-center mx-auto break-words">
            A continuous continuum of growth from the earliest steps of wonder to the confident leap into adulthood.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            <ScrollPopBox direction="left" className="h-full">
              <div className="p-6 border border-[#ccc] rounded flex flex-col justify-between bg-white hover:border-[#fe76b4] hover:shadow-xs transition-all group h-full">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs uppercase tracking-wider text-[#888]">01 &mdash; Foundation</span>
                    <div className="transition-transform duration-300 group-hover:scale-125">
                      <ISBShape type="pink-circle" size={24} />
                    </div>
                  </div>
                  <h3 className="font-bold text-lg text-[#222] mb-1">Pre-Primary</h3>
                  <div className="text-xs text-[#666] mb-3">Nursery &ndash; KG</div>
                  <p className="text-sm text-[#666] leading-relaxed">Play-based discovery, sensorial development, foundational literacy, and social warmth.</p>
                </div>
                <div className="mt-4 text-xs font-semibold text-[#222] pt-3 border-t border-[#eee]">Focus: Curiosity &amp; Expression</div>
              </div>
            </ScrollPopBox>

            <ScrollPopBox direction="right" className="h-full">
              <div className="p-6 border border-[#ccc] rounded flex flex-col justify-between bg-white hover:border-[#00b273] hover:shadow-xs transition-all group h-full">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs uppercase tracking-wider text-[#888]">02 &mdash; Exploration</span>
                    <div className="transition-transform duration-300 group-hover:scale-125">
                      <ISBShape type="green-flower" size={24} />
                    </div>
                  </div>
                  <h3 className="font-bold text-lg text-[#222] mb-1">Primary</h3>
                  <div className="text-xs text-[#666] mb-3">Classes I &ndash; V</div>
                  <p className="text-sm text-[#666] leading-relaxed">Core academic fluency, environmental awareness, artistic exploration, and collaborative projects.</p>
                </div>
                <div className="mt-4 text-xs font-semibold text-[#222] pt-3 border-t border-[#eee]">Focus: Breadth &amp; Confidence</div>
              </div>
            </ScrollPopBox>

            <ScrollPopBox direction="left" className="h-full">
              <div className="p-6 border border-[#ccc] rounded flex flex-col justify-between bg-white hover:border-[#FFC548] hover:shadow-xs transition-all group h-full">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs uppercase tracking-wider text-[#888]">03 &mdash; Deepening</span>
                    <div className="transition-transform duration-300 group-hover:scale-125">
                      <ISBShape type="yellow-bars" size={24} />
                    </div>
                  </div>
                  <h3 className="font-bold text-lg text-[#222] mb-1">Middle School</h3>
                  <div className="text-xs text-[#666] mb-3">Classes VI &ndash; VIII</div>
                  <p className="text-sm text-[#666] leading-relaxed">Subject specialization, laboratory sciences, critical reading, debates, and competitive athletics.</p>
                </div>
                <div className="mt-4 text-xs font-semibold text-[#222] pt-3 border-t border-[#eee]">Focus: Critical Thinking &amp; Discipline</div>
              </div>
            </ScrollPopBox>

            <ScrollPopBox direction="right" className="h-full">
              <div className="p-6 border border-[#ccc] rounded flex flex-col justify-between bg-white hover:border-[#861fce] hover:shadow-xs transition-all group h-full">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs uppercase tracking-wider text-[#888]">04 &mdash; Mastery</span>
                    <div className="transition-transform duration-300 group-hover:scale-125">
                      <ISBShape type="purple-stairs" size={24} />
                    </div>
                  </div>
                  <h3 className="font-bold text-lg text-[#222] mb-1">Senior Secondary</h3>
                  <div className="text-xs text-[#666] mb-3">Classes IX &ndash; XII</div>
                  <p className="text-sm text-[#666] leading-relaxed">CBSE excellence, stream specialization (Science, Commerce, Humanities), career mentoring, and leadership.</p>
                </div>
                <div className="mt-4 text-xs font-semibold text-[#222] pt-3 border-t border-[#eee]">Focus: Excellence &amp; Pathways</div>
              </div>
            </ScrollPopBox>
          </div>
        </div>
        </ScrollPopSection>
      </section>

      {/* =========================================================================
          4. WHERE LEARNING HAPPENS — Campus Facilities
          ========================================================================= */}
      <section className="wireframe-section relative overflow-hidden" id="campus">
        {/* Scroll-triggered edge pop shape (half pops out from right edge, 0 extra vertical space) */}
        <ISBScrollPopEdgeShape shape="green-flower" align="right" topPosition="top-24 sm:top-28" />
        <ScrollPopSection direction="right">
          <div className="wireframe-container relative z-10">
            <div className="wf-label text-center flex items-center justify-center gap-2">
              <ISBShape type="yellow-bars" size={15} />
              <span>Campus</span>
            </div>
            <h2
              className="wf-heading !text-[36px] font-poppins font-bold text-[#222] leading-tight text-center break-words"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: '36px' }}
            >
              Where <ShadyHighlight color="turquoise">Learning Happens</ShadyHighlight>
            </h2>
            <p className="max-w-2xl text-base text-[#666] text-center mx-auto break-words">
              Purpose-built spaces that invite curiosity, discipline, and creative pursuit across every acre.
            </p>
            <ScrollPopBox direction="left" className="my-8">
              <div className="wf-img-placeholder h-[380px]">
                MAIN CAMPUS AERIAL / PANORAMA PHOTO
              </div>
            </ScrollPopBox>
            {/* Facility Cards: Horizontal scroll with mouse support on small screens (< md), 3-column grid on desktop (md+) */}
            <CampusFacilitiesCarousel facilities={campusFacilities} />
          </div>
        </ScrollPopSection>
      </section>

      {/* =========================================================================
          5. BEYOND THE CLASSROOM — Student Life
          ========================================================================= */}
      <section className="wireframe-section relative overflow-hidden" id="beyond">
        {/* Scroll-triggered edge pop shape in empty margin space */}
        <ISBScrollPopEdgeShape shape="yellow-bars" align="left" topPosition="top-24 sm:top-28" />
        <ScrollPopSection direction="left">
          <div className="wireframe-container relative z-10">
            <div className="wf-label text-center flex items-center justify-center gap-2">
              <ISBShape type="green-flower" size={15} />
              <span>Student Life</span>
            </div>
            <h2
              className="wf-heading font-crayon text-3xl sm:text-4xl md:text-5xl font-normal tracking-wide text-center break-words"
              style={{ fontFamily: "'DK Crayon Crumble', 'Cabin Sketch', cursive, sans-serif" }}
            >
              Beyond the <ShadyHighlight color="turquoise">Classroom</ShadyHighlight>
            </h2>
            <p className="max-w-2xl text-base text-[#666] text-center mx-auto break-words">
              Character is forged as much on the pitch, stage, and easel as it is in the lecture hall.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-8">
              <ScrollPopBox direction="left" className="h-full">
                <div className="p-4 border border-[#ccc] rounded text-center bg-white hover:border-[#FF3D37] hover:shadow-xs transition-all group h-full">
                  <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-3 transition-transform duration-300 group-hover:scale-110">
                    <ISBShape type="red-triangle" size={26} />
                  </div>
                  <h4 className="font-semibold text-sm text-[#222] mb-1">Sports</h4>
                  <p className="text-xs text-[#666]">Football, basketball, cricket, badminton, athletics, yoga.</p>
                </div>
              </ScrollPopBox>
              <ScrollPopBox direction="right" className="h-full">
                <div className="p-4 border border-[#ccc] rounded text-center bg-white hover:border-[#00b273] hover:shadow-xs transition-all group h-full">
                  <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-3 transition-transform duration-300 group-hover:scale-110">
                    <ISBShape type="green-flower" size={26} />
                  </div>
                  <h4 className="font-semibold text-sm text-[#222] mb-1">Arts &amp; Culture</h4>
                  <p className="text-xs text-[#666]">Painting, sculpture, theatre, debate, creative writing.</p>
                </div>
              </ScrollPopBox>
              <ScrollPopBox direction="left" className="h-full">
                <div className="p-4 border border-[#ccc] rounded text-center bg-white hover:border-[#FFC548] hover:shadow-xs transition-all group h-full">
                  <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center mx-auto mb-3 transition-transform duration-300 group-hover:scale-110">
                    <ISBShape type="yellow-bars" size={26} />
                  </div>
                  <h4 className="font-semibold text-sm text-[#222] mb-1">Music &amp; Dance</h4>
                  <p className="text-xs text-[#666]">Classical, contemporary, choir, instrumental orchestra.</p>
                </div>
              </ScrollPopBox>
              <ScrollPopBox direction="right" className="h-full">
                <div className="p-4 border border-[#ccc] rounded text-center bg-white hover:border-[#0064ec] hover:shadow-xs transition-all group h-full">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-3 transition-transform duration-300 group-hover:scale-110">
                    <ISBShape type="blue-hourglass" size={26} />
                  </div>
                  <h4 className="font-semibold text-sm text-[#222] mb-1">Clubs &amp; Societies</h4>
                  <p className="text-xs text-[#666]">Robotics, eco club, editorial board, quiz bowl, MUN.</p>
                </div>
              </ScrollPopBox>
              <ScrollPopBox direction="left" className="col-span-2 sm:col-span-1 h-full">
                <div className="p-4 border border-[#ccc] rounded text-center bg-white hover:border-[#861fce] hover:shadow-xs transition-all group h-full">
                  <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center mx-auto mb-3 transition-transform duration-300 group-hover:scale-110">
                    <ISBShape type="purple-stairs" size={26} />
                  </div>
                  <h4 className="font-semibold text-sm text-[#222] mb-1">Competitions</h4>
                  <p className="text-xs text-[#666]">Inter-school tournaments, Olympiads, state leagues.</p>
                </div>
              </ScrollPopBox>
            </div>
          </div>
        </ScrollPopSection>
      </section>

      {/* =========================================================================
          6. GULDAASTA — Signature Annual Event
          ========================================================================= */}
      <section className="wireframe-section relative overflow-hidden" id="guldaasta">
        {/* Scroll-triggered edge pop shape in empty margin space */}
        <ISBScrollPopEdgeShape shape="pink-arch" align="right" topPosition="top-24 sm:top-28" />
        <ScrollPopSection direction="right">
          <div className="wireframe-container relative z-10">
            <div className="wf-label text-center flex items-center justify-center gap-2">
              <ISBShape type="pink-arch" size={15} />
              <span>Signature Annual Event</span>
            </div>
            <h2
              className="wf-heading !text-[36px] font-poppins font-bold text-[#222] leading-tight text-center break-words"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: '36px' }}
            >
              Guldaasta &mdash; <ShadyHighlight color="turquoise">A Celebration of Togetherness</ShadyHighlight>
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-8">
              <ScrollPopBox direction="left">
                <div>
                  <p className="text-base text-[#666] leading-relaxed mb-6 text-left">
                    Our landmark annual showcase where every child&apos;s voice, talent, and culture come together in an unforgettable evening of performance, exhibition, and shared pride.
                  </p>
                  <div className="flex gap-8 my-6 justify-start">
                    <div>
                      <strong className="block text-2xl font-bold text-[#222]">1,200+</strong>
                      <span className="text-xs text-[#666]">Student Performers</span>
                    </div>
                    <div>
                      <strong className="block text-2xl font-bold text-[#222]">3,500+</strong>
                      <span className="text-xs text-[#666]">Audience &amp; Alumni</span>
                    </div>
                    <div>
                      <strong className="block text-2xl font-bold text-[#222]">1</strong>
                      <span className="text-xs text-[#666]">Unforgettable Night</span>
                    </div>
                  </div>
                  <div className="text-left">
                    <a href="#guldaasta-details" className="wf-cta">
                      LEARN ABOUT GULDAASTA
                    </a>
                  </div>
                </div>
              </ScrollPopBox>
              <div className="grid grid-cols-2 gap-3">
                <ScrollPopBox direction="right" className="col-span-2">
                  <div className="wf-img-placeholder h-64">
                    GULDAASTA STAGE PHOTO (HERO MOMENT)
                  </div>
                </ScrollPopBox>
                <ScrollPopBox direction="left">
                  <div className="wf-img-placeholder h-36">DANCE PERFORMANCE</div>
                </ScrollPopBox>
                <ScrollPopBox direction="right">
                  <div className="wf-img-placeholder h-36">MUSIC ENSEMBLE</div>
                </ScrollPopBox>
              </div>
            </div>
          </div>
        </ScrollPopSection>
      </section>

      {/* =========================================================================
          7. MAKING US PROUD — Achievements
          ========================================================================= */}
      <section className="wireframe-section relative overflow-hidden" id="achievements">
        {/* Scroll-triggered edge pop shape in empty margin space */}
        <ISBScrollPopEdgeShape shape="red-triangle" align="left" topPosition="top-24 sm:top-28" />
        <ScrollPopSection direction="left">
          <div className="wireframe-container relative z-10">
            <div className="wf-label text-center flex items-center justify-center gap-2">
              <ISBShape type="red-triangle" size={15} />
              <span>Achievements</span>
            </div>
          <h2
            className="wf-heading !text-[36px] font-poppins font-bold text-[#222] leading-tight text-center break-words"
            style={{ fontFamily: "'Poppins', sans-serif", fontSize: '36px' }}
          >
            Making Us <ShadyHighlight color="turquoise">Proud</ShadyHighlight>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <ScrollPopBox direction="left" className="h-full">
              <div className="h-full">
                <h3 className="text-base font-bold text-[#222] pb-2 border-b border-[#ccc] mb-4">Academics</h3>
                <div className="flex flex-col gap-3">
                  <div className="p-3 border border-[#ccc] rounded bg-white">
                    <div className="text-xs text-[#888]">2024 &bull; CBSE Class XII</div>
                    <h4 className="font-semibold text-sm text-[#222]">99.2% School Topper</h4>
                    <p className="text-xs text-[#666]">Science stream city rank holder; 42 students scored 90%+ aggregate.</p>
                  </div>
                  <div className="p-3 border border-[#ccc] rounded bg-white">
                    <div className="text-xs text-[#888]">2024 &bull; CBSE Class X</div>
                    <h4 className="font-semibold text-sm text-[#222]">100% Pass Percentage</h4>
                    <p className="text-xs text-[#666]">68 students scored distinction in all subjects.</p>
                  </div>
                  <div className="p-3 border border-[#ccc] rounded bg-white">
                    <div className="text-xs text-[#888]">2023 &bull; National Olympiad</div>
                    <h4 className="font-semibold text-sm text-[#222]">3 Gold Medals &mdash; Science &amp; Math</h4>
                    <p className="text-xs text-[#666]">Qualified for national scholarship round.</p>
                  </div>
                </div>
              </div>
            </ScrollPopBox>

            <ScrollPopBox direction="right" className="h-full">
              <div className="h-full">
                <h3 className="text-base font-bold text-[#222] pb-2 border-b border-[#ccc] mb-4">Sports</h3>
                <div className="flex flex-col gap-3">
                  <div className="p-3 border border-[#ccc] rounded bg-white">
                    <div className="text-xs text-[#888]">2024 &bull; State Championship</div>
                    <h4 className="font-semibold text-sm text-[#222]">Inter-School Basketball Champions</h4>
                    <p className="text-xs text-[#666]">U-17 boys team clinched trophy without dropping a match.</p>
                  </div>
                  <div className="p-3 border border-[#ccc] rounded bg-white">
                    <div className="text-xs text-[#888]">2023 &bull; District Athletics</div>
                    <h4 className="font-semibold text-sm text-[#222]">Overall Athletics Trophy</h4>
                    <p className="text-xs text-[#666]">14 gold, 8 silver, 6 bronze across track and field events.</p>
                  </div>
                  <div className="p-3 border border-[#ccc] rounded bg-white">
                    <div className="text-xs text-[#888]">2023 &bull; Badminton</div>
                    <h4 className="font-semibold text-sm text-[#222]">State Level Representation</h4>
                    <p className="text-xs text-[#666]">Two singles players selected for national trials.</p>
                  </div>
                </div>
              </div>
            </ScrollPopBox>

            <ScrollPopBox direction="left" className="h-full">
              <div className="h-full">
                <h3 className="text-base font-bold text-[#222] pb-2 border-b border-[#ccc] mb-4">Cultural &amp; Co-Curricular</h3>
                <div className="flex flex-col gap-3">
                  <div className="p-3 border border-[#ccc] rounded bg-white">
                    <div className="text-xs text-[#888]">2024 &bull; Youth Festival</div>
                    <h4 className="font-semibold text-sm text-[#222]">Best Delegation Award</h4>
                    <p className="text-xs text-[#666]">Swept music, drama, and fine arts categories across 18 schools.</p>
                  </div>
                  <div className="p-3 border border-[#ccc] rounded bg-white">
                    <div className="text-xs text-[#888]">2024 &bull; National Debate</div>
                    <h4 className="font-semibold text-sm text-[#222]">Runners-Up &mdash; Parliamentary Debate</h4>
                    <p className="text-xs text-[#666]">Senior team placed 2nd among 60 participating institutions.</p>
                  </div>
                  <div className="p-3 border border-[#ccc] rounded bg-white">
                    <div className="text-xs text-[#888]">2023 &bull; Robotics Challenge</div>
                    <h4 className="font-semibold text-sm text-[#222]">Innovation First Prize</h4>
                    <p className="text-xs text-[#666]">Autonomous navigation project recognized at regional STEM expo.</p>
                  </div>
                </div>
              </div>
            </ScrollPopBox>
          </div>
        </div>
        </ScrollPopSection>
      </section>

      {/* =========================================================================
          8. WHAT'S HAPPENING — School Updates & Circulars
          ========================================================================= */}
      <section className="wireframe-section relative overflow-hidden" id="updates">
        {/* Scroll-triggered edge pop shape in empty margin space */}
        <ISBScrollPopEdgeShape shape="purple-stairs" align="right" topPosition="top-24 sm:top-28" />
        <ScrollPopSection direction="right">
          <div className="wireframe-container relative z-10">
            <div className="wf-label text-center flex items-center justify-center gap-2">
              <ISBShape type="blue-hourglass" size={15} />
              <span>News &amp; Updates</span>
            </div>
            <h2
              className="wf-heading !text-[36px] font-poppins font-bold text-[#222] leading-tight text-center break-words"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: '36px' }}
            >
              What&apos;s <ShadyHighlight color="turquoise">Happening</ShadyHighlight>
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
              <div className="lg:col-span-2 flex flex-col gap-4">
                <ScrollPopBox direction="left">
                  <div className="flex flex-col sm:flex-row gap-4 p-4 border border-[#ccc] rounded items-start sm:items-center bg-white">
                    <div className="wf-img-placeholder !w-full sm:!w-28 !h-20 shrink-0">THUMB</div>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs text-[#888]">12 Feb 2025 &bull; Event</div>
                      <h4 className="font-semibold text-sm text-[#222] break-words mt-0.5">Annual Sports Meet 2025 Announced</h4>
                      <p className="text-xs text-[#666] break-words mt-1">Three days of athletic competition, parade, and awards ceremony commencing March 1.</p>
                    </div>
                  </div>
                </ScrollPopBox>
                <ScrollPopBox direction="right">
                  <div className="flex flex-col sm:flex-row gap-4 p-4 border border-[#ccc] rounded items-start sm:items-center bg-white">
                    <div className="wf-img-placeholder !w-full sm:!w-28 !h-20 shrink-0">THUMB</div>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs text-[#888]">28 Jan 2025 &bull; Academic</div>
                      <h4 className="font-semibold text-sm text-[#222] break-words mt-0.5">CBSE Board Exam Preparation Workshops Underway</h4>
                      <p className="text-xs text-[#666] break-words mt-1">Special doubt-clearing sessions and mock test series scheduled for Classes X and XII.</p>
                    </div>
                  </div>
                </ScrollPopBox>
                <ScrollPopBox direction="left">
                  <div className="flex flex-col sm:flex-row gap-4 p-4 border border-[#ccc] rounded items-start sm:items-center bg-white">
                    <div className="wf-img-placeholder !w-full sm:!w-28 !h-20 shrink-0">THUMB</div>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs text-[#888]">15 Jan 2025 &bull; Celebration</div>
                      <h4 className="font-semibold text-sm text-[#222] break-words mt-0.5">Dev Samaj Foundation Day Celebrations</h4>
                      <p className="text-xs text-[#666] break-words mt-1">Reflecting on our heritage with community service drives and special morning assembly.</p>
                    </div>
                  </div>
                </ScrollPopBox>
              </div>

              <ScrollPopBox direction="right" className="h-full">
                <div className="p-4 border border-[#ccc] rounded flex flex-col justify-start bg-white h-full">
                  <h3 className="font-bold text-sm text-[#222] mb-4 pb-2 border-b border-[#ccc]">Circulars &amp; Notices</h3>
                  <div className="flex flex-col gap-3">
                    <div className="pb-2 border-b border-[#eee]">
                      <div className="text-xs text-[#888]">08 Feb 2025</div>
                      <div className="text-xs font-medium text-[#222] hover:underline cursor-pointer break-words">Date sheet for Annual Examinations (Classes VI&ndash;IX, XI)</div>
                    </div>
                    <div className="pb-2 border-b border-[#eee]">
                      <div className="text-xs text-[#888]">02 Feb 2025</div>
                      <div className="text-xs font-medium text-[#222] hover:underline cursor-pointer break-words">Advisory on winter uniform &amp; school timings</div>
                    </div>
                    <div className="pb-2 border-b border-[#eee]">
                      <div className="text-xs text-[#888]">20 Jan 2025</div>
                      <div className="text-xs font-medium text-[#222] hover:underline cursor-pointer break-words">Parent-Teacher Meeting schedule &amp; slot booking</div>
                    </div>
                    <div className="pb-2 border-b border-[#eee]">
                      <div className="text-xs text-[#888]">10 Jan 2025</div>
                      <div className="text-xs font-medium text-[#222] hover:underline cursor-pointer break-words">Fee deposit deadline for Quarter IV &mdash; Reminder</div>
                    </div>
                    <div>
                      <div className="text-xs text-[#888]">05 Jan 2025</div>
                      <div className="text-xs font-medium text-[#222] hover:underline cursor-pointer break-words">Transport route adjustment notice &mdash; Route 7 &amp; 12</div>
                    </div>
                  </div>
                </div>
              </ScrollPopBox>
            </div>
          </div>
        </ScrollPopSection>
      </section>

      {/* =========================================================================
          9. THROUGH OUR LENS — Gallery Mosaic
          ========================================================================= */}
      <section className="wireframe-section relative overflow-hidden" id="gallery">
        {/* Scroll-triggered edge pop shape in empty margin space */}
        <ISBScrollPopEdgeShape shape="yellow-bars" align="left" topPosition="top-24 sm:top-28" />
        <ScrollPopSection direction="left">
          <div className="wireframe-container relative z-10">
            <div className="wf-label text-center flex items-center justify-center gap-2">
              <ISBShape type="green-flower" size={15} />
              <span>Gallery</span>
            </div>
            <h2
              className="wf-heading !text-[36px] font-poppins font-bold text-[#222] leading-tight text-center break-words"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: '36px' }}
            >
              Through Our <ShadyHighlight color="turquoise">Lens</ShadyHighlight>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8">
              <ScrollPopBox direction="left"><div className="wf-img-placeholder h-40">CLASSROOM IN ACTION</div></ScrollPopBox>
              <ScrollPopBox direction="right" className="col-span-2"><div className="wf-img-placeholder md:col-span-2 h-40">SCIENCE LAB EXPERIMENT</div></ScrollPopBox>
              <ScrollPopBox direction="left"><div className="wf-img-placeholder h-40">ART STUDIO</div></ScrollPopBox>
              <ScrollPopBox direction="right" className="col-span-2 md:row-span-2"><div className="wf-img-placeholder md:col-span-2 md:row-span-2 h-84">ANNUAL SPORTS DAY CELEBRATIONS</div></ScrollPopBox>
              <ScrollPopBox direction="left"><div className="wf-img-placeholder h-40">MORNING ASSEMBLY</div></ScrollPopBox>
              <ScrollPopBox direction="right"><div className="wf-img-placeholder h-40">LIBRARY STUDY HOUR</div></ScrollPopBox>
              <ScrollPopBox direction="left"><div className="wf-img-placeholder h-40">MUSIC PERFORMANCE</div></ScrollPopBox>
              <ScrollPopBox direction="right"><div className="wf-img-placeholder h-40">CAMPUS CORRIDORS</div></ScrollPopBox>
            </div>
          </div>
        </ScrollPopSection>
      </section>

      {/* =========================================================================
          10. THE PEOPLE BEHIND THE LEARNING — Educators
          ========================================================================= */}
      <section className="wireframe-section relative overflow-hidden" id="educators">
        {/* Scroll-triggered edge pop shape in empty margin space */}
        <ISBScrollPopEdgeShape shape="green-flower" align="right" topPosition="top-24 sm:top-28" />
        <ScrollPopSection direction="right">
          <div className="wireframe-container relative z-10">
            <div className="wf-label text-center flex items-center justify-center gap-2">
              <ISBShape type="purple-stairs" size={15} />
              <span>Faculty</span>
            </div>
            <h2
              className="wf-heading !text-[36px] font-poppins font-bold text-[#222] leading-tight text-center break-words"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: '36px' }}
            >
              The People Behind <ShadyHighlight color="turquoise">the Learning</ShadyHighlight>
            </h2>
            {/* Faculty Cards: Horizontal scroll with mouse support on small screens (< md), 4-column grid on desktop (md+) */}
            <FacultyCarousel faculty={facultyMembers} />
          </div>
        </ScrollPopSection>
      </section>

      {/* =========================================================================
          11. BEYOND DEV SAMAJ — Community & Alumni (OpenClaw-style Reviews Slider)
          ========================================================================= */}
      <BeyondDevSamajReviews />

      {/* =========================================================================
          11B. WE MOVE WITH THE WORLD — Shady Side Academy Signature Values Section
          ========================================================================= */}
      <WeMoveSection />

      {/* =========================================================================
          12. ADMISSIONS — Take the First Step
          ========================================================================= */}
      <section className="wireframe-section relative overflow-hidden" id="admissions">
        {/* Scroll-triggered edge pop shape in empty margin space */}
        <ISBScrollPopEdgeShape shape="red-triangle" align="right" topPosition="top-24 sm:top-28" />
        <ScrollPopSection direction="right">
          <div className="wireframe-container relative z-10">
            <div className="wf-label text-center flex items-center justify-center gap-2">
              <ISBShape type="red-triangle" size={15} />
              <span>Join Us</span>
            </div>
            <h2
              className="wf-heading !text-[36px] font-poppins font-bold text-[#222] leading-tight text-center break-words"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: '36px' }}
            >
              Take the <ShadyHighlight color="turquoise">First Step</ShadyHighlight>
            </h2>

            {/* Signature ISB Background Container framing the Admissions Procedure & Key Info */}
            <ScrollPopBox direction="right" className="mt-8">
              <div className="relative max-w-5xl mx-auto p-6 sm:p-10 pb-14 sm:pb-16 rounded-3xl rounded-bl-none border-0 border-none bg-[#0064ec] text-white shadow-xl shadow-blue-900/15 overflow-hidden">
                {/* ISB Signature Bottom-Left Corner Design */}
                <ISBCornerDesign size={42} className="sm:scale-110" />

                {/* Ambient gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0051e8] via-[#0064ec] to-[#0d7aff] opacity-95 pointer-events-none" />

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                  {/* Left Column: 4 Admissions Steps */}
                  <div className="flex flex-col gap-5">
                    <div className="flex gap-4 items-start">
                      <div className="w-8 h-8 rounded-full bg-white text-[#0064ec] flex items-center justify-center font-bold text-xs flex-shrink-0 shadow-sm">
                        1
                      </div>
                      <div>
                        <h4 className="font-bold text-base text-white mb-1">Inquire</h4>
                        <p className="text-xs text-blue-100 leading-relaxed">
                          Submit an online inquiry or visit our admissions office in person to receive the prospectus and fee structure.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="w-8 h-8 rounded-full bg-white text-[#0064ec] flex items-center justify-center font-bold text-xs flex-shrink-0 shadow-sm">
                        2
                      </div>
                      <div>
                        <h4 className="font-bold text-base text-white mb-1">Visit &amp; Observe</h4>
                        <p className="text-xs text-blue-100 leading-relaxed">
                          Join a scheduled campus tour to experience classrooms, meet faculty, and see student life in action.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="w-8 h-8 rounded-full bg-white text-[#0064ec] flex items-center justify-center font-bold text-xs flex-shrink-0 shadow-sm">
                        3
                      </div>
                      <div>
                        <h4 className="font-bold text-base text-white mb-1">Assessment &amp; Dialogue</h4>
                        <p className="text-xs text-blue-100 leading-relaxed">
                          An age-appropriate interaction designed to understand your child&apos;s learning profile, not just test scores.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="w-8 h-8 rounded-full bg-white text-[#0064ec] flex items-center justify-center font-bold text-xs flex-shrink-0 shadow-sm">
                        4
                      </div>
                      <div>
                        <h4 className="font-bold text-base text-white mb-1">Welcome</h4>
                        <p className="text-xs text-blue-100 leading-relaxed">
                          Upon offer acceptance and documentation completion, your child joins the Dev Samaj family.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Key Information Box & Actions */}
                  <div className="bg-white/10 backdrop-blur-xs border border-white/20 rounded-2xl p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/20">
                        <h3 className="font-bold text-lg text-white">Key Information</h3>
                        <span className="text-[10px] font-bold uppercase tracking-wider bg-white/20 text-white px-2.5 py-0.5 rounded-full">
                          2025&ndash;26
                        </span>
                      </div>
                      <ul className="text-xs text-blue-100 divide-y divide-white/10 mb-6 space-y-0">
                        <li className="py-2.5 flex justify-between"><strong>Academic Year:</strong> <span>April &ndash; March</span></li>
                        <li className="py-2.5 flex justify-between"><strong>Admissions Open:</strong> <span>Pre-Primary to IX &amp; XI</span></li>
                        <li className="py-2.5 flex justify-between"><strong>Affiliation:</strong> <span>CBSE New Delhi</span></li>
                        <li className="py-2.5 flex justify-between"><strong>Campus Visits:</strong> <span>Mon &ndash; Fri, 9 AM &ndash; 1 PM</span></li>
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-3 mt-4">
                      <a href="#inquire" className="px-5 py-2.5 rounded-xl bg-white text-[#0064ec] hover:bg-blue-50 transition-colors font-bold text-xs tracking-wide">
                        APPLY ONLINE
                      </a>
                      <a href="#prospectus" className="px-5 py-2.5 rounded-xl border-2 border-white/80 text-white hover:bg-white/15 transition-colors font-semibold text-xs tracking-wide">
                        DOWNLOAD PROSPECTUS
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollPopBox>
          </div>
        </ScrollPopSection>
      </section>

      {/* =========================================================================
          13. CONTACT — Reach Out
          ========================================================================= */}
      <section className="wireframe-section relative overflow-hidden" id="contact">
        {/* Scroll-triggered edge pop shape in empty margin space */}
        <ISBScrollPopEdgeShape shape="blue-hourglass" align="left" topPosition="top-24 sm:top-28" />
        <ScrollPopSection direction="left">
          <div className="wireframe-container relative z-10">
            <div className="wf-label text-center flex items-center justify-center gap-2">
              <ISBShape type="blue-hourglass" size={15} />
              <span>Reach Out</span>
            </div>
            <h2
              className="wf-heading !text-[36px] font-poppins font-bold text-[#222] leading-tight text-center break-words"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: '36px' }}
            >
              Contact <ShadyHighlight color="turquoise">Us</ShadyHighlight>
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-8 items-stretch">
              <ScrollPopBox direction="left" className="h-full">
                <div className="p-6 sm:p-8 border border-[#ccc] rounded flex flex-col justify-between bg-white h-full gap-6">
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#0064ec] font-bold mb-1">
                        <MapPin className="w-3.5 h-3.5 text-[#0064ec]" />
                        <span>Campus Address</span>
                      </div>
                      <p className="text-sm text-[#222] font-semibold">
                        I.S. Dev Samaj Senior Secondary School
                      </p>
                      <p className="text-xs text-[#555] mt-0.5">
                        Sector 21-C, Chandigarh &mdash; 160022
                      </p>
                      <span className="inline-block mt-1.5 text-[11px] font-medium text-[#0064ec] bg-blue-50 border border-blue-200 px-2 py-0.5 rounded">
                        Near Aroma Chowk &amp; Sector 21 Market
                      </span>
                    </div>

                    <div>
                      <div className="flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#888] font-bold mb-1">
                        <Phone className="w-3.5 h-3.5 text-[#888]" />
                        <span>Phone / Helpdesk</span>
                      </div>
                      <p className="text-sm text-[#222]">
                        <a href="tel:01722704495" className="hover:text-[#0064ec] hover:underline">0172-2704495</a>
                        {' '}&bull;{' '}
                        <a href="tel:01722707255" className="hover:text-[#0064ec] hover:underline">0172-2707255</a>
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#888] font-bold mb-1">
                        <Mail className="w-3.5 h-3.5 text-[#888]" />
                        <span>Email</span>
                      </div>
                      <p className="text-sm text-[#222]">
                        <a href="mailto:info@isdevsamaj21.ac.in" className="hover:text-[#0064ec] hover:underline">info@isdevsamaj21.ac.in</a>
                        {' '}&bull;{' '}
                        <a href="mailto:admissions@isdevsamaj21.ac.in" className="hover:text-[#0064ec] hover:underline">admissions@isdevsamaj21.ac.in</a>
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#888] font-bold mb-1">
                        <Clock className="w-3.5 h-3.5 text-[#888]" />
                        <span>Office Hours</span>
                      </div>
                      <p className="text-sm text-[#222]">
                        Monday &ndash; Saturday: 8:00 AM &ndash; 2:30 PM<br />
                        <span className="text-xs text-[#777]">Closed on 2nd Saturdays and Public Holidays</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 pt-2">
                    <a href="mailto:info@isdevsamaj21.ac.in" className="wf-cta inline-block">
                      SEND AN INQUIRY
                    </a>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=I.S.+Dev+Samaj+Senior+Secondary+School+Sector+21C+Chandigarh"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded border border-[#bbb] hover:border-[#0064ec] text-[#222] hover:text-[#0064ec] bg-white text-xs font-semibold transition-colors"
                    >
                      <Navigation className="w-3.5 h-3.5 text-[#0064ec]" />
                      Get Directions
                    </a>
                  </div>
                </div>
              </ScrollPopBox>

              <ScrollPopBox direction="right" className="h-full">
                <div className="relative border border-[#ccc] rounded-lg overflow-hidden bg-[#f4f4f4] h-full min-h-[380px] flex flex-col shadow-sm group">
                  {/* Google Map Embedded iframe for I S Dev Samaj School Sector 21 Chandigarh */}
                  <iframe
                    title="I.S. Dev Samaj Senior Secondary School Map Location"
                    src="https://maps.google.com/maps?q=I.S.+Dev+Samaj+Senior+Secondary+School,+Sector+21C,+Chandigarh,+160022&t=&z=16&ie=UTF8&iwloc=&output=embed"
                    className="w-full h-full min-h-[380px] border-0 flex-grow"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                  />

                  {/* Top Location Bar Overlay */}
                  <div className="absolute top-3 left-3 right-3 pointer-events-none flex justify-between items-start gap-2">
                    <div className="pointer-events-auto bg-white/95 backdrop-blur-sm border border-[#ddd] px-3 py-2 rounded-md shadow-md max-w-xs">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-xs font-bold text-[#111]">I.S. Dev Samaj Sr. Sec. School</span>
                      </div>
                      <p className="text-[11px] text-[#555] mt-0.5">
                        Sector 21-C, Chandigarh &bull; PIN 160022
                      </p>
                    </div>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=I.S.+Dev+Samaj+Senior+Secondary+School+Sector+21C+Chandigarh"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pointer-events-auto inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/95 hover:bg-white text-[#0064ec] border border-[#ddd] hover:border-[#0064ec] text-xs font-semibold rounded-md shadow-md transition-colors"
                      title="Open in Google Maps"
                    >
                      <span>View larger map</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  {/* Bottom Navigation Hint Bar */}
                  <div className="bg-white border-t border-[#e0e0e0] px-4 py-2.5 flex items-center justify-between text-xs text-[#555]">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#0064ec]" />
                      Behind Petrol Pump on Ambala Road, Sector 21-C
                    </span>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=I.S.+Dev+Samaj+Senior+Secondary+School+Sector+21C+Chandigarh"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-[#0064ec] hover:underline inline-flex items-center gap-1"
                    >
                      Directions &rarr;
                    </a>
                  </div>
                </div>
              </ScrollPopBox>
            </div>
          </div>
        </ScrollPopSection>
      </section>

      {/* =========================================================================
          14. FOOTER — Comprehensive Wireframe Footer with ISB Decorative Shape System
          ========================================================================= */}
      <footer className="border-t border-[#ccc] py-12 text-[#666] bg-white overflow-hidden">
        <ScrollPopSection direction="right">
          <div className="wireframe-container">
            {/* ISB Signature Decorative Shapes Row */}
            <div className="mb-10 pb-8 border-b border-[#eee] flex flex-col items-center justify-center text-center">
              <div className="text-[11px] font-bold uppercase tracking-widest text-[#888] mb-2">
                Values in Action &bull; Symbolic Shapes
              </div>
              <ISBFooterIconsRow />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <ScrollPopBox direction="left">
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-bold text-[#222] mb-3">IS Dev Samaj Senior Secondary School</h4>
                  <p className="text-xs leading-relaxed text-[#666]">
                    Affiliated to CBSE, New Delhi.<br />
                    Affiliation No. 2630018<br />
                    Sector 21-C, Chandigarh &mdash; 160022
                  </p>
                </div>
              </ScrollPopBox>
              <ScrollPopBox direction="right">
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-bold text-[#222] mb-3">Academics</h4>
                  <ul className="text-xs flex flex-col gap-1.5">
                    <li><a href="#journey" className="hover:text-[#222]">Pre-Primary School</a></li>
                    <li><a href="#journey" className="hover:text-[#222]">Primary Wing</a></li>
                    <li><a href="#journey" className="hover:text-[#222]">Middle School</a></li>
                    <li><a href="#journey" className="hover:text-[#222]">Senior Secondary</a></li>
                    <li><a href="#updates" className="hover:text-[#222]">CBSE Mandatory Disclosure</a></li>
                  </ul>
                </div>
              </ScrollPopBox>
              <ScrollPopBox direction="left">
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-bold text-[#222] mb-3">Campus &amp; Life</h4>
                  <ul className="text-xs flex flex-col gap-1.5">
                    <li><a href="#campus" className="hover:text-[#222]">Infrastructure &amp; Labs</a></li>
                    <li><a href="#beyond" className="hover:text-[#222]">Sports &amp; Athletics</a></li>
                    <li><a href="#guldaasta" className="hover:text-[#222]">Guldaasta Festival</a></li>
                    <li><a href="#achievements" className="hover:text-[#222]">Student Achievements</a></li>
                    <li><a href="#gallery" className="hover:text-[#222]">Campus Gallery</a></li>
                  </ul>
                </div>
              </ScrollPopBox>
              <ScrollPopBox direction="right">
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-bold text-[#222] mb-3">Connect</h4>
                  <ul className="text-xs flex flex-col gap-1.5">
                    <li><a href="#admissions" className="hover:text-[#222]">Admissions 2025&ndash;26</a></li>
                    <li><a href="#contact" className="hover:text-[#222]">Contact &amp; Directions</a></li>
                    <li><a href="#updates" className="hover:text-[#222]">Circulars &amp; Notices</a></li>
                    <li><a href="#community" className="hover:text-[#222]">Alumni Portal</a></li>
                    <li><a href="#contact" className="hover:text-[#222]">Careers at Dev Samaj</a></li>
                  </ul>
                </div>
              </ScrollPopBox>
            </div>
            <div className="pt-6 border-t border-[#ccc] flex flex-col sm:flex-row justify-between items-center text-xs text-[#888] gap-4">
              <div>&copy; {new Date().getFullYear()} IS Dev Samaj Senior Secondary School. All rights reserved.</div>
              <div className="flex gap-6">
                <a href="#privacy" className="hover:text-[#222]">Privacy Policy</a>
                <a href="#terms" className="hover:text-[#222]">Terms of Use</a>
                <a href="#sitemap" className="hover:text-[#222]">Sitemap</a>
              </div>
            </div>
          </div>
        </ScrollPopSection>
      </footer>
    </>
  );
};
