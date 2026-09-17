import {
  HeroSlide,
  StoryStat,
  TimelineStep,
  CampusFacility,
  LifeCategory,
  AchievementItem,
  SchoolUpdate,
  GalleryItem,
  Educator,
  CommunityStory,
} from '../types';

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'slide-1',
    url: 'https://isdevsamaj21.ac.in/wp-content/uploads/2024/05/g17.jpg',
    alt: 'I.S. Dev Samaj School Students in Activity and Celebration',
    caption: 'Student Excellence & Cultural Heritage',
    tagline: 'Empowering young leaders through moral values and progressive education',
    headlinePrefix: 'WE REDEFINE',
    headlineHighlight: 'FUTURE',
  },
  {
    id: 'slide-2',
    url: 'https://isdevsamaj21.ac.in/wp-content/uploads/2024/05/campus3-1.jpg',
    alt: 'I.S. Dev Samaj School Vibrant Campus and Infrastructure',
    caption: 'Lush Green Iconic Campus in Sector 21-C, Chandigarh',
    tagline: 'Modern educational facilities amidst a serene, nature-rich environment',
    headlinePrefix: 'UNLOCK',
    headlineHighlight: 'POTENTIAL',
  },
  {
    id: 'slide-3',
    url: 'https://isdevsamaj21.ac.in/wp-content/uploads/2024/05/g16.jpg',
    alt: 'I.S. Dev Samaj School Sports & Football Team with Coach',
    caption: 'Athletic Excellence & Team Camaraderie',
    tagline: 'Cultivating discipline, leadership, and physical vitality on the field',
    headlinePrefix: 'IGNITE',
    headlineHighlight: 'PURPOSE',
  },
];

export const STORY_STATS: StoryStat[] = [
  {
    value: '2400+',
    label: 'Enrolled Students',
    sublabel: 'Pre-Nursery to Grade XII',
  },
  {
    value: '180+',
    label: 'Dedicated Educators',
    sublabel: 'Passionate mentors & specialists',
  },
  {
    value: '98%',
    label: 'Board Distinction Rate',
    sublabel: 'Consistent CBSE Academic Excellence',
  },
  {
    value: '55+',
    label: 'Years of Heritage',
    sublabel: 'Nurturing generations since 1968',
  },
];

export const LEARNING_STEPS: TimelineStep[] = [
  {
    num: '01',
    title: 'Pre-Primary',
    range: 'Nursery – Kindergarten',
    description:
      'Play-based experiential learning fostering early curiosity, emotional intelligence, motor skills, and creative self-expression in a warm, secure setting.',
    features: ['Sensory Play Areas', 'Phonics & Story Circles', 'Nature Exploration'],
  },
  {
    num: '02',
    title: 'Primary Wing',
    range: 'Grades I – V',
    description:
      'Foundational literacy, numeracy, social science, and inquiry-led thinking with strong emphasis on moral conduct, empathy, and collaborative projects.',
    features: ['Activity-Based STEM', 'Language Lab', 'Value Education Curriculum'],
  },
  {
    num: '03',
    title: 'Middle School',
    range: 'Grades VI – VIII',
    description:
      'Transition into deeper conceptual rigor, scientific experimentation, modern digital literacy, creative arts, and structured team sports.',
    features: ['Computer & Coding Labs', 'Debate & Literary Guild', 'Inter-house Tournaments'],
  },
  {
    num: '04',
    title: 'Senior School',
    range: 'Grades IX – XII',
    description:
      'Focused preparation for CBSE Boards and competitive exams across Medical, Non-Medical, Commerce, and Humanities streams with dedicated career guidance.',
    features: ['Advanced Science Labs', 'Commerce & Economics Wing', 'Career Mentorship Cell'],
  },
];

export const CAMPUS_FACILITIES: CampusFacility[] = [
  {
    id: 'library',
    title: 'Library & Resource Centre',
    category: 'Featured Academic Core',
    description:
      'A serene, expansive repository with over 25,000 volumes, periodicals, digital research terminals, audio-visual study cubicles, and quiet reading lounges.',
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80',
    badge: 'Central Facility',
    highlights: ['25,000+ Curated Books', 'Digital E-Library Access', 'Quiet Reading Enclaves'],
  },
  {
    id: 'laboratories',
    title: 'Laboratories & Research Labs',
    category: 'Science & Innovation',
    description:
      'High-specification modern Physics, Chemistry, Biology, Mathematics, and Computer Science laboratories equipped for hands-on experimental mastery.',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80',
    highlights: ['Safety-Certified Physics/Chem Labs', 'Advanced Robotics Kits', 'High-Speed Computing Suite'],
  },
  {
    id: 'sports',
    title: 'Sports & Athletic Arena',
    category: 'Recreation & Fitness',
    description:
      'Expansive green playgrounds, international-standard basketball court, badminton facilities, cricket nets, table tennis hall, and dedicated yoga pavilion.',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80',
    highlights: ['Regulation Basketball Court', 'Multi-Purpose Athletic Turf', 'Certified NIS Coaches'],
  },
];

export const STUDENT_LIFE_CATEGORIES: LifeCategory[] = [
  {
    id: 'sports',
    label: 'Sports',
    desc: 'Athletics, Basketball, Badminton, Cricket, and Martial Arts',
    iconName: 'Trophy',
    details: 'Regular inter-school tournaments, annual athletic meets, and physical conditioning programs.',
  },
  {
    id: 'arts',
    label: 'Arts & Culture',
    desc: 'Visual arts, sculpture, folk heritage, and pottery studios',
    iconName: 'Palette',
    details: 'Dedicated art galleries showcasing student paintings, rangoli competitions, and regional crafts.',
  },
  {
    id: 'music',
    label: 'Music & Dance',
    desc: 'Classical vocal, western instrumental, theater, and classical dance',
    iconName: 'Music',
    details: 'Vibrant choir ensembles, acoustic instrument classes, and stage theater productions.',
  },
  {
    id: 'clubs',
    label: 'Clubs & Activities',
    desc: 'Eco Club, Robotics, MUN, Quiz Society, and Editorial Board',
    iconName: 'Users',
    details: 'Student-led forums fostering leadership, environmental stewardship, and public speaking.',
  },
  {
    id: 'competitions',
    label: 'Competitions',
    desc: 'Olympiads, State debates, Science exhibitions, and Hackathons',
    iconName: 'Award',
    details: 'National and zonal level representation with accolades in science, mathematics, and rhetoric.',
  },
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    category: 'Academics',
    title: '100% Pass in CBSE Class X & XII',
    highlight: '98.4% Top Score',
    year: '2024',
    description: 'Over 45 students secured above 90% aggregate in CBSE board examinations.',
  },
  {
    category: 'Sports',
    title: 'State Basketball Champions (U-17)',
    highlight: 'Gold Medalists',
    year: '2024',
    description: 'Chandigarh Inter-School Championship victory with undefeated tournament streak.',
  },
  {
    category: 'Arts & Culture',
    title: 'National Folk Art & Classical Dance',
    highlight: 'First Prize',
    year: '2023',
    description: 'Awarded at the All-India Inter-School Cultural Conclave in New Delhi.',
  },
  {
    category: 'Competitions',
    title: 'Regional Science & Robotics Fair',
    highlight: 'Grand Laureate',
    year: '2024',
    description: 'Best Sustainable Innovation Project on smart solar campus water harvesting.',
  },
];

export const SCHOOL_UPDATES: SchoolUpdate[] = [
  {
    id: 'update-1',
    type: 'notice',
    title: 'Admissions Open for Session 2025-26: Pre-Nursery to Grade IX & XI',
    date: 'March 10, 2025',
    summary:
      'Registration forms are now available online and at the school administrative counter. Limited seats available for entrance assessment.',
    badge: 'Admissions Open',
    isImportant: true,
  },
  {
    id: 'update-2',
    type: 'event',
    title: 'Annual Cultural Extravaganza "Guldaasta 2025" Schedule Announced',
    date: 'April 4-5, 2025',
    summary:
      'Two days of grand musical, theatrical, and artistic performances showcasing student talents across all wings. Parents and alumni cordially invited.',
    badge: 'Upcoming Event',
    isImportant: false,
  },
  {
    id: 'update-3',
    type: 'announcement',
    title: 'CBSE Board Examination Guidelines & Parent Counseling Session',
    date: 'February 28, 2025',
    summary:
      'Special mental wellness and strategy sessions conducted for Board students alongside detailed hall ticket distribution schedule.',
    badge: 'Circular',
    isImportant: false,
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'annual-function',
    title: 'Annual Function',
    category: 'Celebration',
    image: 'https://isdevsamaj21.ac.in/wp-content/uploads/2024/05/g17.jpg',
    gridSpan: 'm1',
    caption: 'Glittering evening of cultural dances, theatrical dramas, and felicitation ceremony.',
  },
  {
    id: 'sports-day',
    title: 'Annual Athletic Meet & Sports Day',
    category: 'Athletics',
    image: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=900&q=80',
    gridSpan: 'm2',
    caption: 'Track races, march pasts, and enthusiastic inter-house relay rivalries.',
  },
  {
    id: 'science-exhibition',
    title: 'Science & Robotics Exhibition',
    category: 'Academics',
    image: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=800&q=80',
    gridSpan: 'm3',
    caption: 'Student-built working models of renewable energy, AI automations, and space science.',
  },
  {
    id: 'cultural-events',
    title: 'Cultural Festivals & Joy',
    category: 'Heritage',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80',
    gridSpan: 'm4',
    caption: 'Celebration of national festivals with traditional attires, musical hymns, and unity.',
  },
  {
    id: 'guldaasta-gallery',
    title: 'Guldaasta Signature Showcase',
    category: 'Flagship Event',
    image: 'https://isdevsamaj21.ac.in/wp-content/uploads/2024/05/campus3-1.jpg',
    gridSpan: 'm5',
    caption: 'Our annual multi-generational gathering celebrating togetherness, arts, and alumni bonds.',
  },
];

export const EDUCATORS: Educator[] = [
  {
    id: 'edu-1',
    name: 'Mrs. S. K. Sharma',
    role: 'Principal & Academic Director',
    qualification: 'M.Sc., M.Ed., M.Phil (30+ Yrs Experience)',
    experience: '32 years',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    bio: 'Pioneering value-driven pedagogical leadership with emphasis on child safety, curiosity, and intellectual depth.',
  },
  {
    id: 'edu-2',
    name: 'Mr. Rajesh Verma',
    role: 'Vice Principal & Head of Sciences',
    qualification: 'M.Sc. Physics, B.Ed.',
    experience: '24 years',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80',
    bio: 'Dedicated mentor helping hundreds of scholars achieve national distinctions in engineering and medical entrance tests.',
  },
  {
    id: 'edu-3',
    name: 'Mrs. Gurpreet Kaur',
    role: 'Headmistress (Primary & Pre-Primary)',
    qualification: 'M.A. English, Early Childhood Dipl.',
    experience: '19 years',
    image: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=600&q=80',
    bio: 'Championing joyful, play-integrated learning modules and emotional resilience for our youngest pupils.',
  },
  {
    id: 'edu-4',
    name: 'Dr. Anita Joshi',
    role: 'Senior Coordinator & Humanities Head',
    qualification: 'Ph.D. History, UGC-NET',
    experience: '21 years',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80',
    bio: 'Instilling critical social awareness, debate prowess, and moral philosophy across secondary grades.',
  },
];

export const COMMUNITY_STORIES: CommunityStory[] = [
  {
    id: 'comm-1',
    name: 'Dr. Arjun Malhotra',
    batchOrRole: 'Batch of 2008 • AIIMS Physician & Researcher',
    quote:
      'Dev Samaj instilled in me not just academic discipline, but compassion for humanity. The ethical grounding I received here guides every diagnosis I make today.',
    achievement: 'Fellow in Pediatric Oncology & Public Health Reformer',
    category: 'alumni',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'comm-2',
    name: 'Aanya Sen',
    batchOrRole: 'Grade XII Student • Head Girl & National Debater',
    quote:
      'The teachers here treat every query as valid and every dream as achievable. Our labs, clubs, and sports have made me confident to lead.',
    achievement: 'CBSE Regional Debate Winner & Green Earth Club Lead',
    category: 'student',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'comm-3',
    name: 'Mrs. & Mr. Bhatia',
    batchOrRole: 'Parents of Rohan (Class VIII) & Simran (Class IV)',
    quote:
      'Seeing both our children thrive academically while becoming kind, polite, and responsible citizens makes us deeply proud of choosing Dev Samaj.',
    achievement: 'Active Parent-Teacher Advisory Council Member',
    category: 'parent',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80',
  },
];
