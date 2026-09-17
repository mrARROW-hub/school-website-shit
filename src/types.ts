export interface NavItem {
  label: string;
  href: string;
}

export interface HeroSlide {
  id: string;
  url: string;
  alt: string;
  caption?: string;
  tagline?: string;
  headlinePrefix?: string;
  headlineHighlight?: string;
}

export interface StoryStat {
  value: string;
  label: string;
  sublabel?: string;
}

export interface TimelineStep {
  num: string;
  title: string;
  range: string;
  description: string;
  features: string[];
}

export interface CampusFacility {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  badge?: string;
  highlights: string[];
}

export interface LifeCategory {
  id: string;
  label: string;
  desc: string;
  iconName: string;
  details: string;
}

export interface AchievementItem {
  category: string;
  title: string;
  highlight: string;
  year: string;
  description: string;
}

export interface SchoolUpdate {
  id: string;
  type: 'notice' | 'event' | 'announcement';
  title: string;
  date: string;
  summary: string;
  badge: string;
  isImportant?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  gridSpan: string;
  caption: string;
}

export interface Educator {
  id: string;
  name: string;
  role: string;
  qualification: string;
  experience: string;
  image: string;
  bio: string;
}

export interface CommunityStory {
  id: string;
  name: string;
  batchOrRole: string;
  quote: string;
  achievement: string;
  category: 'alumni' | 'student' | 'parent';
  image: string;
}
