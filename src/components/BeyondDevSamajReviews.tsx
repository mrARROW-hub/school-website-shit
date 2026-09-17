import React from 'react';
import { ShadyHighlight } from './ShadyHighlight';
import { ISBShape, ISBScrollPopEdgeShape } from './DecorativeShapes';
import { ScrollPopSection } from './ScrollPopSection';

export interface CommunityReview {
  id: string;
  quote: string;
  author: string;
  role: string;
  category: 'Alumni' | 'Parent' | 'Student' | 'Faculty';
  yearOrWing?: string;
  avatarImg: string;
  initials: string;
  badgeColor?: string;
}

const ROW_1_REVIEWS: CommunityReview[] = [
  {
    id: 'rev-1',
    quote:
      'Dev Samaj did not just prepare me for board exams; it taught me how to think with integrity. That moral compass has guided me through medical school and every patient I treat.',
    author: 'Dr. Ananya Sen',
    role: 'Chief Resident, AIIMS New Delhi',
    category: 'Alumni',
    yearOrWing: 'Class of 2012',
    avatarImg: 'https://images.unsplash.com/photo-1594824813501-48356a644837?auto=format&fit=crop&w=150&q=80',
    initials: 'AS',
  },
  {
    id: 'rev-2',
    quote:
      'What stands out is how every teacher knows our children personally. The balance between academic rigor, ethics, and sports is unmatched anywhere else in the region.',
    author: 'Rajesh & Sunita Mehra',
    role: 'Parents of Kabir (Grade IX) & Tanya (Grade V)',
    category: 'Parent',
    yearOrWing: 'Parent Council',
    avatarImg: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
    initials: 'RM',
  },
  {
    id: 'rev-3',
    quote:
      'The robotics tinkering lab and science mentors nurtured my coding curiosity when I was in Grade 8. The foundation gave me confidence to build software on global teams.',
    author: 'Karanvir Singhania',
    role: 'Senior Software Engineer, Google UK',
    category: 'Alumni',
    yearOrWing: 'Class of 2016',
    avatarImg: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    initials: 'KS',
  },
  {
    id: 'rev-4',
    quote:
      'From morning assemblies to national inter-school debates, Dev Samaj gave me the courage to speak fearlessly, lead with kindness, and dream without boundaries.',
    author: 'Aanya Sen',
    role: 'Head Girl & CBSE Regional Debate Champion',
    category: 'Student',
    yearOrWing: 'Class of 2024',
    avatarImg: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    initials: 'AS',
  },
  {
    id: 'rev-5',
    quote:
      'With frequent Army postings across India, finding a school that grounds children in resilience, discipline, and moral courage was vital. Dev Samaj exceeded all expectations.',
    author: 'Col. H. S. Bajwa',
    role: 'Parent of Angad (Grade XI - Non-Medical)',
    category: 'Parent',
    yearOrWing: 'Senior Wing',
    avatarImg: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    initials: 'HB',
  },
  {
    id: 'rev-6',
    quote:
      'The creative arts studios and exhibitions allowed me to explore spatial design and classical dance side by side. It profoundly shaped my approach to architectural design.',
    author: 'Meera Nambiar',
    role: 'Urban Architect & CEPT Graduate',
    category: 'Alumni',
    yearOrWing: 'Class of 2018',
    avatarImg: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80',
    initials: 'MN',
  },
];

const ROW_2_REVIEWS: CommunityReview[] = [
  {
    id: 'rev-7',
    quote:
      'The ethical grounding and lessons of empathy taught during morning reflection remain etched in my memory. Education with character is what society needs most.',
    author: 'Dr. Arjun Malhotra',
    role: 'Pediatric Oncologist & Fellow, AIIMS',
    category: 'Alumni',
    yearOrWing: 'Batch of 2008',
    avatarImg: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=150&q=80',
    initials: 'AM',
  },
  {
    id: 'rev-8',
    quote:
      'The emphasis on linguistic clarity, philosophical inquiry, and debate at Dev Samaj formed the bedrock of my academic and university teaching career.',
    author: 'Prof. Vandana Chawla',
    role: 'Dean of Humanities, Panjab University',
    category: 'Alumni',
    yearOrWing: 'Alumni Mentor',
    avatarImg: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=150&q=80',
    initials: 'VC',
  },
  {
    id: 'rev-9',
    quote:
      'The coaches and teachers never made me choose between academics and track athletics. They supported my morning training and helped me top the commerce board stream.',
    author: 'Simranjeet Kaur',
    role: 'National Athlete & SRCC Commerce Scholar',
    category: 'Alumni',
    yearOrWing: 'Class of 2021',
    avatarImg: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
    initials: 'SK',
  },
  {
    id: 'rev-10',
    quote:
      'The warmth and individualized care in the early years wing gave our daughter a joyful transition into schooling. She wakes up excited to go to school every day!',
    author: 'Pooja & Amit Singhal',
    role: 'Parents of Diya (Grade III)',
    category: 'Parent',
    yearOrWing: 'Primary Wing',
    avatarImg: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80',
    initials: 'PS',
  },
  {
    id: 'rev-11',
    quote:
      'Tinkering in the science labs and leading eco-club social initiatives taught me how to solve real problems through sustainable, community-first entrepreneurship.',
    author: 'Vikramaditya Rao',
    role: 'Founder & CEO, AgriTech Dynamics',
    category: 'Alumni',
    yearOrWing: 'Class of 2014',
    avatarImg: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
    initials: 'VR',
  },
  {
    id: 'rev-12',
    quote:
      'Dev Samaj instilled a deep sense of selfless public duty. The values of honesty, humility, and service learned here guide my civil administration work every day.',
    author: 'Tarun Sehgal',
    role: 'Civil Services Officer (IAS)',
    category: 'Alumni',
    yearOrWing: 'Class of 2017',
    avatarImg: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80',
    initials: 'TS',
  },
];

const ReviewCard: React.FC<{ review: CommunityReview }> = ({ review }) => {
  return (
    <div className="testimonial-card w-[310px] sm:w-[360px] md:w-[380px] shrink-0 border border-[#d2d2d2] bg-white hover:bg-[#fafafa] hover:border-[#777] rounded-lg p-4 sm:p-5 flex items-start gap-3.5 transition-colors shadow-2xs group select-none">
      {/* Avatar with grayscale-to-color on card hover like openclaw.ai */}
      <div className="relative shrink-0">
        <img
          src={review.avatarImg}
          alt={review.author}
          referrerPolicy="no-referrer"
          className="w-10 h-10 rounded-full object-cover border border-[#ccc] grayscale group-hover:grayscale-0 transition-all duration-300"
          onError={(e) => {
            // Fallback to initials if image fails
            (e.target as HTMLElement).style.display = 'none';
          }}
        />
        <div className="w-10 h-10 rounded-full bg-[#f0f0f0] border border-[#ccc] text-[#444] font-semibold text-xs flex items-center justify-center -z-10 absolute inset-0">
          {review.initials}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0 flex flex-col justify-between">
        <p className="text-xs sm:text-[13px] text-[#444] leading-relaxed mb-2.5 font-normal italic line-clamp-4">
          &ldquo;{review.quote}&rdquo;
        </p>
        <div>
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <h4 className="font-bold text-xs sm:text-sm text-[#111] truncate">
              {review.author}
            </h4>
            <span className="text-[10px] uppercase font-semibold tracking-wider px-1.5 py-0.5 rounded bg-[#f0f0f0] text-[#555] border border-[#ddd]">
              {review.category}
            </span>
          </div>
          <div className="text-[11px] text-[#777] mt-0.5 truncate">
            {review.role}
            {review.yearOrWing ? ` • ${review.yearOrWing}` : ''}
          </div>
        </div>
      </div>
    </div>
  );
};

export const BeyondDevSamajReviews: React.FC = () => {
  return (
    <section className="wireframe-section relative overflow-hidden" id="community">
      {/* Scroll-triggered edge pop shape in empty margin space */}
      <ISBScrollPopEdgeShape shape="pink-circle" align="left" topPosition="top-24 sm:top-28" />

      <ScrollPopSection direction="left">
        <div className="wireframe-container relative z-10 mb-6">
          <div className="wf-label text-center flex items-center justify-center gap-2 mb-2">
            <ISBShape type="pink-circle" size={15} />
            <span>Community &amp; Voices</span>
          </div>

          <h2
            className="wf-heading !text-[36px] font-poppins font-bold text-[#222] leading-tight text-center break-words"
            style={{ fontFamily: "'Poppins', sans-serif", fontSize: '36px' }}
          >
            Beyond <ShadyHighlight color="turquoise">Dev Samaj</ShadyHighlight>
          </h2>

          <p className="text-center text-xs sm:text-sm text-[#666] max-w-xl mx-auto mt-2">
            What our alumni, parents, and students say about the journey, values, and life beyond the classroom.
          </p>

          <div className="flex items-center justify-center gap-4 mt-3 text-[11px] text-[#888]">
            <span className="inline-flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              15,000+ Alumni Worldwide
            </span>
            <span>•</span>
            <span>Hover to pause reviews</span>
          </div>
        </div>
      </ScrollPopSection>

      {/* Continuous Sliding Horizontal Tracks (OpenClaw style) */}
      <div className="relative w-full overflow-hidden py-3 marquee-fade-mask">
        {/* Row 1: Sliding Left */}
        <div className="animate-marquee-left flex gap-3.5 sm:gap-4 py-1.5 px-2">
          {/* Repeat reviews to make seamless loop */}
          {[...ROW_1_REVIEWS, ...ROW_1_REVIEWS].map((review, idx) => (
            <ReviewCard key={`r1-${review.id}-${idx}`} review={review} />
          ))}
        </div>

        {/* Row 2: Sliding Right */}
        <div className="animate-marquee-right flex gap-3.5 sm:gap-4 py-1.5 px-2 mt-2 sm:mt-3">
          {/* Repeat reviews to make seamless loop */}
          {[...ROW_2_REVIEWS, ...ROW_2_REVIEWS].map((review, idx) => (
            <ReviewCard key={`r2-${review.id}-${idx}`} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};
