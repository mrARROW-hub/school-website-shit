import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  Search,
  Bell,
  Calendar,
  Megaphone,
  FileText,
  Download,
  Share2,
  ExternalLink,
  ChevronRight,
  Filter,
  X,
  Clock,
  Sparkles,
  ArrowUpRight,
  CheckCircle2,
  Bookmark
} from 'lucide-react';
import { ShadyHighlight } from './ShadyHighlight';
import { ShadySpiralIcon } from './ShadyNewsSocialSection';

export interface UpdateItem {
  id: string;
  type: 'notice' | 'event' | 'academic' | 'celebration';
  title: string;
  date: string;
  category: string;
  summary: string;
  fullContent?: string;
  badge?: string;
  classes?: string;
  refNo?: string;
  isImportant?: boolean;
}

interface WhatsHappeningPageProps {
  onBack: () => void;
  onOpenAdmissions?: () => void;
}

export const WhatsHappeningPage: React.FC<WhatsHappeningPageProps> = ({
  onBack,
  onOpenAdmissions,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedUpdate, setSelectedUpdate] = useState<UpdateItem | null>(null);
  const [emailSubscribed, setEmailSubscribed] = useState(false);
  const [subscriberEmail, setSubscriberEmail] = useState('');

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const allUpdates: UpdateItem[] = [
    {
      id: 'up-1',
      type: 'notice',
      title: 'Admissions Open for Session 2025–26: Pre-Nursery to Grade IX & XI',
      date: '10 March 2025',
      category: 'Admissions',
      badge: 'Urgent Notice',
      refNo: 'ISB/ADM/2025/08',
      classes: 'Pre-Nursery to Grade XI',
      isImportant: true,
      summary:
        'Registration forms are officially available online and at the school administrative counter. Interactive assessments and parental interactions are scheduled for applicants.',
      fullContent:
        'I.S. Dev Samaj Senior Secondary School announces the commencement of admission procedures for the upcoming academic session 2025–2026. Prospective parents can obtain registration packages either through the online portal or directly from the school admissions desk in Sector 21-C, Chandigarh. The assessment focuses on holistic readiness, core literacy, and value comprehension.',
    },
    {
      id: 'up-2',
      type: 'event',
      title: 'Annual Sports Meet 2025 Announced & House March-Past Schedule',
      date: '12 February 2025',
      category: 'Sports & Athletics',
      badge: 'Upcoming Event',
      refNo: 'ISB/SPO/2025/14',
      classes: 'Grades I to XII',
      isImportant: true,
      summary:
        'Three days of inter-house athletic competition, track and field races, marching contingents, and grand ceremonial awards ceremony commencing March 1.',
      fullContent:
        'Our annual sports extravaganza is scheduled from March 1 to March 3 on the main campus sports grounds. Over 1,200 students will participate in sprint relays, long jumps, shot put, hurdle races, and obstacle challenges. All four houses (Gandhi, Tagore, Nehru, and Subhash) will present their marching drills before distinguished sports guests.',
    },
    {
      id: 'up-3',
      type: 'academic',
      title: 'CBSE Board Examination Preparation Workshops & Mentorship Series',
      date: '28 January 2025',
      category: 'Academic Guidance',
      badge: 'Academic',
      refNo: 'ISB/ACAD/2025/03',
      classes: 'Classes X & XII',
      summary:
        'Special doubt-clearing sessions, subject-specific mock testing series, and stress-management workshops organized for Board aspirants.',
      fullContent:
        'To prepare students rigorously for the upcoming CBSE Board Examinations, faculty heads have organized an intensive 3-week revision series. Students will receive individual feedback on sample answer scripts, time-management strategies, and guidance from visiting counselors on healthy sleep and exam confidence.',
    },
    {
      id: 'up-4',
      type: 'celebration',
      title: 'Dev Samaj Foundation Day & Annual Cultural Fest Celebrations',
      date: '15 January 2025',
      category: 'Campus Heritage',
      badge: 'Celebration',
      refNo: 'ISB/CUL/2025/01',
      classes: 'All Divisions',
      summary:
        'Reflecting on our century-old heritage of moral grounding, selfless social service, and ethical education through cultural performances and community drives.',
      fullContent:
        'The foundation celebration honored the founding vision of value-centered education. The day began with a morning moral assembly, followed by the unveiling of student community projects, tree plantation around Sector 21-C, and traditional classical folk musical presentations by the junior and senior school choirs.',
    },
    {
      id: 'up-5',
      type: 'notice',
      title: 'Date Sheet Released: Annual Final Examinations 2025',
      date: '08 February 2025',
      category: 'Examinations',
      badge: 'Circular',
      refNo: 'ISB/EXAM/2025/22',
      classes: 'Classes VI to IX, XI',
      summary:
        'Detailed schedule of dates, timing slots, syllabus demarcation, and practical evaluation dates uploaded for non-board classes.',
      fullContent:
        'The annual examination schedule for non-board classes will commence from February 22. Morning session timings are 8:30 AM to 11:45 AM. Admit cards and roll numbers will be verified during the homeroom periods. Practical assessments and science laboratory viva will conclude prior to theoretical written examinations.',
    },
    {
      id: 'up-6',
      type: 'notice',
      title: 'Advisory on Winter Uniform & Revised School Timings',
      date: '02 February 2025',
      category: 'General Notice',
      badge: 'Administrative',
      refNo: 'ISB/GEN/2025/07',
      classes: 'All Classes',
      summary:
        'Updated guidelines on standard winter blazer, navy pullover, tie, and revised morning entry timings following district weather advisories.',
      fullContent:
        'In compliance with Chandigarh Administration weather directives, morning school timing is revised to 8:30 AM. Students must strictly adhere to the designated formal school blazer, navy blue sweater, and proper winter footwear. Parents using private transport are requested to coordinate departure schedules accordingly.',
    },
    {
      id: 'up-7',
      type: 'event',
      title: 'Parent-Teacher Meeting (PTM) & Student Portfolio Review',
      date: '20 January 2025',
      category: 'Parent Engagement',
      badge: 'Meeting',
      refNo: 'ISB/PTM/2025/05',
      classes: 'Classes Nursery to XII',
      summary:
        'One-on-one parent-educator dialogue regarding academic progress, character development, and holistic co-curricular involvement.',
      fullContent:
        'The term PTM offers an invaluable forum for parents and class mentors to discuss student progress reports, test diagnostics, and creative contributions. Slot bookings are available online through the student ERP portal to ensure personalized, unhurried discussions with subject teachers.',
    },
    {
      id: 'up-8',
      type: 'academic',
      title: 'Science & Innovation Exhibition: Student Working Models Showcase',
      date: '10 January 2025',
      category: 'Science & Tech',
      badge: 'Showcase',
      refNo: 'ISB/SCI/2025/02',
      classes: 'Classes VI to XII',
      summary:
        'Over 85 student-developed working prototypes on renewable solar cells, AI robotics, and water recycling displayed in the main auditorium.',
      fullContent:
        'Young innovators demonstrated scientific concepts in biotechnology, renewable energy, and artificial intelligence. Senior school teams showcased automatic solar trackers and low-cost rainwater filters, evaluated by visiting professors from Panjab University.',
    },
  ];

  // Official Circulars List (Downloads)
  const circularsList = [
    {
      ref: 'ISB/CIRC/2025/104',
      date: '08 Feb 2025',
      title: 'Date Sheet for Annual Final Examinations (Classes VI–IX & XI)',
      classes: 'VI–IX, XI',
      size: '240 KB',
    },
    {
      ref: 'ISB/CIRC/2025/103',
      date: '02 Feb 2025',
      title: 'Winter Uniform Regulations and Revised School Entry Schedule',
      classes: 'All Classes',
      size: '180 KB',
    },
    {
      ref: 'ISB/CIRC/2025/102',
      date: '20 Jan 2025',
      title: 'Parent-Teacher Meeting (PTM) Schedule & Online Slot Booking',
      classes: 'Nursery–XII',
      size: '195 KB',
    },
    {
      ref: 'ISB/CIRC/2025/101',
      date: '10 Jan 2025',
      title: 'Quarter IV School Tuition & Activity Fee Deposit Guidelines',
      classes: 'All Classes',
      size: '210 KB',
    },
    {
      ref: 'ISB/CIRC/2025/100',
      date: '05 Jan 2025',
      title: 'Transport Route Adjustment Notice for Buses 7, 12, and 18',
      classes: 'Transport Users',
      size: '310 KB',
    },
  ];

  // Filtering updates based on category and search query
  const filteredUpdates = allUpdates.filter((item) => {
    const matchesFilter =
      selectedFilter === 'all' ||
      (selectedFilter === 'notice' && item.type === 'notice') ||
      (selectedFilter === 'event' && item.type === 'event') ||
      (selectedFilter === 'academic' && item.type === 'academic') ||
      (selectedFilter === 'celebration' && item.type === 'celebration');

    const matchesSearch =
      searchQuery.trim() === '' ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.refNo && item.refNo.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesFilter && matchesSearch;
  });

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!subscriberEmail.trim() || !subscriberEmail.includes('@')) return;
    setEmailSubscribed(true);
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'notice':
        return <Bell className="w-4 h-4 text-[#041E42]" />;
      case 'event':
        return <Calendar className="w-4 h-4 text-[#FFB81C]" />;
      case 'academic':
        return <FileText className="w-4 h-4 text-blue-600" />;
      case 'celebration':
      default:
        return <Sparkles className="w-4 h-4 text-purple-600" />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-[#222] flex flex-col font-sans">
      {/* =======================================================================
          TOP BAR: BACK TO HOME BUTTON (TOP LEFT CORNER)
          ======================================================================= */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="wireframe-container py-3.5 flex items-center justify-start">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-slate-100 hover:bg-[#041E42] text-slate-700 hover:text-white border border-slate-200 hover:border-[#041E42] text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer shadow-2xs"
            aria-label="Back to Home"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </button>
        </div>
      </header>

      {/* =======================================================================
          PAGE HERO BANNER
          ======================================================================= */}
      <section className="bg-[#041E42] text-white py-12 sm:py-16 md:py-20 relative overflow-hidden">
        {/* Subtle background graphic */}
        <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none">
          <ShadySpiralIcon size={320} color="#FFB81C" />
        </div>

        <div className="wireframe-container relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-[11px] font-bold uppercase tracking-widest mb-4">
              <span className="w-2 h-2 rounded-full bg-[#FFB81C]" />
              Official News &amp; Updates Portal
            </div>

            <h1
              className="text-3xl sm:text-5xl md:text-6xl font-anton uppercase tracking-wide text-white leading-tight mb-4"
              style={{ fontFamily: "'Anton', sans-serif" }}
            >
              What&apos;s <span className="text-[#FFB81C]">Happening</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl font-normal">
              Stay fully informed on school announcements, upcoming sports meets, examination
              circulars, and academic milestones from I.S. Dev Samaj Senior Secondary School.
            </p>
          </div>
        </div>
      </section>

      {/* =======================================================================
          MAIN CONTENT AREA
          ======================================================================= */}
      <main className="flex-grow wireframe-container py-10 sm:py-12">
        {/* SEARCH AND FILTER BAR */}
        <div className="bg-white border border-slate-200 p-4 sm:p-5 mb-8 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Segmented Filter Buttons */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
            {[
              { id: 'all', label: 'All Updates' },
              { id: 'notice', label: 'Notices' },
              { id: 'event', label: 'Events' },
              { id: 'academic', label: 'Academics' },
              { id: 'celebration', label: 'Celebrations' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSelectedFilter(tab.id)}
                className={`px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider rounded-sm transition-colors whitespace-nowrap cursor-pointer ${
                  selectedFilter === tab.id
                    ? 'bg-[#041E42] text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search circulars, exams, events..."
              className="w-full pl-9 pr-8 py-2 text-xs bg-slate-50 border border-slate-300 rounded-sm focus:outline-hidden focus:border-[#041E42] focus:bg-white transition-all text-slate-900 placeholder:text-slate-400"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* 2-COLUMN LAYOUT: MAIN UPDATES + CIRCULARS BOARD */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 items-start">
          {/* LEFT COLUMN: CARDS LIST (8 cols) */}
          <div className="lg:col-span-8 flex flex-col gap-5">
            <div className="flex items-center justify-between pb-2 border-b border-slate-200">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Showing {filteredUpdates.length} of {allUpdates.length} School Updates
              </span>
              {searchQuery && (
                <span className="text-xs text-slate-400">
                  Filtering by &quot;{searchQuery}&quot;
                </span>
              )}
            </div>

            {filteredUpdates.length === 0 ? (
              <div className="p-12 text-center bg-white border border-slate-200 rounded-lg">
                <Search className="w-8 h-8 text-slate-300 mx-auto mb-3" />
                <h3 className="text-base font-bold text-slate-800 mb-1">No updates found</h3>
                <p className="text-xs text-slate-500 mb-4">
                  No matching announcements or circulars for your search terms.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedFilter('all');
                    setSearchQuery('');
                  }}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-xs font-bold uppercase tracking-wider text-slate-700 rounded-sm"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                {filteredUpdates.map((item) => (
                  <article
                    key={item.id}
                    onClick={() => setSelectedUpdate(item)}
                    className="group bg-white border border-slate-200 hover:border-[#041E42] p-5 sm:p-6 transition-all duration-200 hover:shadow-md cursor-pointer flex flex-col justify-between"
                  >
                    <div>
                      {/* Top Header Row with Kicker & Badge */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                        <div className="flex items-center gap-2 text-xs text-slate-500">
                          <span className="p-1.5 bg-slate-100 rounded-xs group-hover:bg-[#FFB81C]/20 transition-colors">
                            {getTypeIcon(item.type)}
                          </span>
                          <span className="font-semibold uppercase tracking-wider text-slate-700">
                            {item.category}
                          </span>
                          <span>·</span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3 text-slate-400" />
                            {item.date}
                          </span>
                        </div>

                        {item.badge && (
                          <span
                            className={`text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-xs ${
                              item.isImportant
                                ? 'bg-amber-100 text-amber-900 border border-amber-300'
                                : 'bg-slate-100 text-slate-700 border border-slate-200'
                            }`}
                          >
                            {item.badge}
                          </span>
                        )}
                      </div>

                      {/* Headline Title */}
                      <h2 className="text-base sm:text-lg font-bold text-[#041E42] group-hover:text-blue-700 transition-colors leading-snug mb-2">
                        {item.title}
                      </h2>

                      {/* Summary */}
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                        {item.summary}
                      </p>
                    </div>

                    {/* Footer Row */}
                    <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs">
                      <div className="text-slate-400 font-mono text-[11px]">
                        Ref: {item.refNo || 'ISB/GEN/2025'}
                        {item.classes && (
                          <span className="ml-2 font-sans font-medium text-slate-500">
                            (Target: {item.classes})
                          </span>
                        )}
                      </div>

                      <span className="inline-flex items-center gap-1 font-bold text-[#041E42] group-hover:text-blue-700 group-hover:translate-x-0.5 transition-all">
                        Read Official Notice
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT COLUMN: CIRCULARS & NOTICES BOARD (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* OFFICIAL CIRCULARS BOARD */}
            <div className="bg-white border border-slate-200 p-5 sm:p-6 shadow-xs">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200">
                <h3 className="font-anton uppercase tracking-wide text-lg text-[#041E42] flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#FFB81C]" />
                  Circulars &amp; Notices
                </h3>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-100 px-2 py-0.5">
                  Downloads
                </span>
              </div>

              <div className="flex flex-col divide-y divide-slate-100">
                {circularsList.map((circ, idx) => (
                  <div
                    key={idx}
                    className="py-3 group/circ flex items-start justify-between gap-3 cursor-pointer hover:bg-slate-50 p-2 -mx-2 rounded transition-colors"
                    onClick={() => {
                      setSelectedUpdate({
                        id: `circ-${idx}`,
                        type: 'notice',
                        title: circ.title,
                        date: circ.date,
                        category: 'Official Circular',
                        refNo: circ.ref,
                        classes: circ.classes,
                        summary: `Official administrative document ${circ.ref} issued by the Principal's office for ${circ.classes}.`,
                        fullContent: `This circular is published in accordance with the CBSE educational board guidelines and school administrative council decisions. Physical copies may be obtained from the school administrative desk, Sector 21-C, Chandigarh.`,
                      });
                    }}
                  >
                    <div className="min-w-0">
                      <div className="text-[11px] font-mono text-slate-400 mb-0.5">
                        {circ.date} · {circ.ref}
                      </div>
                      <h4 className="text-xs font-semibold text-slate-800 group-hover/circ:text-[#041E42] line-clamp-2 leading-snug">
                        {circ.title}
                      </h4>
                      <div className="text-[10px] text-slate-400 mt-1">
                        Applicable to: {circ.classes} ({circ.size})
                      </div>
                    </div>
                    <div className="p-1.5 rounded-full bg-slate-100 text-slate-600 group-hover/circ:bg-[#041E42] group-hover/circ:text-white transition-colors shrink-0 mt-1">
                      <Download className="w-3.5 h-3.5" />
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-100 mt-2">
                <button
                  type="button"
                  onClick={() => setSelectedFilter('notice')}
                  className="w-full py-2 bg-slate-100 hover:bg-[#041E42] hover:text-white text-[#041E42] text-xs font-bold uppercase tracking-wider transition-colors text-center cursor-pointer"
                >
                  View All Notices
                </button>
              </div>
            </div>

            {/* NEWSLETTER & CIRCULAR NOTIFICATIONS */}
            <div className="bg-[#041E42] text-white p-6 shadow-xs">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#FFB81C] block mb-2">
                Stay Updated
              </span>
              <h3 className="font-anton uppercase tracking-wide text-xl mb-2">
                Subscribe for Circulars
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Receive instant email alerts for examination dates, emergency school advisories, and
                admissions deadlines.
              </p>

              {emailSubscribed ? (
                <div className="p-3 bg-emerald-900/50 border border-emerald-500 rounded text-xs text-emerald-200 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Subscribed! You will receive future school circular alerts.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
                  <input
                    type="email"
                    value={subscriberEmail}
                    onChange={(e) => setSubscriberEmail(e.target.value)}
                    required
                    placeholder="Enter parent/guardian email"
                    className="w-full px-3 py-2 text-xs bg-white/10 border border-white/20 text-white placeholder:text-slate-400 focus:outline-hidden focus:border-[#FFB81C]"
                  />
                  <button
                    type="submit"
                    className="w-full py-2 bg-[#FFB81C] hover:bg-amber-400 text-[#041E42] text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Subscribe Alerts
                  </button>
                </form>
              )}
            </div>

            {/* ADMISSIONS HELP BOX */}
            <div className="bg-white border border-slate-200 p-5">
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 block mb-1">
                Admissions Desk
              </span>
              <h4 className="font-bold text-sm text-[#041E42] mb-2">
                Need Help with 2025–26 Inquiries?
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Our admissions counselors are available Monday through Saturday (9:00 AM – 2:00 PM)
                for campus visits and documentation assistance.
              </p>
              <div className="text-xs text-slate-700 space-y-1 font-medium mb-3">
                <div>📞 +91-172-2703856</div>
                <div>✉️ info@isdevsamaj21.ac.in</div>
              </div>
              {onOpenAdmissions && (
                <button
                  type="button"
                  onClick={onOpenAdmissions}
                  className="w-full py-2 border border-[#041E42] text-[#041E42] hover:bg-[#041E42] hover:text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Schedule Campus Visit
                </button>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* =======================================================================
          MODAL: DETAILED CIRCULAR / UPDATE PREVIEW (ZERO DEAD CLICKS)
          ======================================================================= */}
      {selectedUpdate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="relative w-full max-w-2xl max-h-[90vh] bg-white shadow-2xl overflow-y-auto flex flex-col border-t-4 border-[#041E42]">
            {/* Header */}
            <div className="p-6 pb-4 border-b border-slate-100 flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs text-slate-500 font-semibold uppercase tracking-wider mb-1">
                  <span>{selectedUpdate.category}</span>
                  <span>·</span>
                  <span>{selectedUpdate.date}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#041E42] leading-snug">
                  {selectedUpdate.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedUpdate(null)}
                className="p-1 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 flex flex-col gap-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
              <div className="p-3 bg-slate-50 border border-slate-200 rounded text-xs space-y-1">
                <div>
                  <strong>Official Reference:</strong> {selectedUpdate.refNo || 'ISB/ADMIN/2025'}
                </div>
                {selectedUpdate.classes && (
                  <div>
                    <strong>Target Audience / Classes:</strong> {selectedUpdate.classes}
                  </div>
                )}
                <div>
                  <strong>Issuing Authority:</strong> Office of the Principal &amp; Academic Council
                </div>
              </div>

              <div className="space-y-3">
                <p className="font-medium text-slate-900">{selectedUpdate.summary}</p>
                <p className="text-slate-600">
                  {selectedUpdate.fullContent ||
                    'This notification is issued for the information and adherence of all registered students, parents, and academic personnel. Relevant attachments can be retrieved from the administrative counter.'}
                </p>
                <p className="text-slate-600">
                  For further clarification, please contact the homeroom mentor or school
                  administrative desk during regular office hours (9:00 AM – 2:00 PM).
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="p-6 pt-3 border-t border-slate-100 bg-slate-50 flex flex-wrap items-center justify-between gap-3">
              <div className="text-[11px] text-slate-400">
                Official Document • I.S. Dev Samaj School
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    alert(`Official Circular (${selectedUpdate.refNo || 'ISB/2025'}) downloaded successfully.`);
                  }}
                  className="px-4 py-2 bg-[#041E42] hover:bg-[#002b49] text-white text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Circular (PDF)</span>
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedUpdate(null)}
                  className="px-4 py-2 border border-slate-300 text-xs font-bold uppercase tracking-wider text-slate-700 hover:bg-slate-100"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =======================================================================
          PAGE FOOTER
          ======================================================================= */}
      <footer className="border-t border-slate-200 bg-white py-8 text-xs text-slate-500">
        <div className="wireframe-container flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            &copy; {new Date().getFullYear()} I.S. Dev Samaj Senior Secondary School. Official
            Bulletin Portal.
          </div>
          <div className="flex items-center gap-4">
            <button type="button" onClick={onBack} className="hover:text-[#041E42] font-semibold">
              Return to Campus Home
            </button>
            <a href="#privacy" className="hover:text-[#041E42]">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-[#041E42]">
              Terms of Use
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
