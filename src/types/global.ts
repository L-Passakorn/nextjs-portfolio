// Global type definitions for the portfolio

export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  shortBio: string;
  location: string;
  email: string;
  phone?: string;
  website?: string;
  social: SocialLinks;
}

export interface SocialLinks {
  github?: string;
  linkedin?: string;
  twitter?: string;
  instagram?: string;
  youtube?: string;
  discord?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  images: string[];
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  category: ProjectCategory;
  client?: string;
  period?: string;
  isExperience?: boolean;
  features?: string[];
}

export type ProjectCategory = 
  | 'web-development'
  | 'mobile-development'
  | 'ai-ml'
  | 'desktop-application'
  | 'api-backend'
  | 'other';

export interface Skill {
  id: string;
  name: string;
  level: number; // 1-100
  icon?: string;
  description?: string;
  category: SkillCategory;
}

export type SkillCategory = 
  | 'frontend'
  | 'backend'
  | 'mobile'
  | 'database'
  | 'devops'
  | 'design'
  | 'other';

export interface SkillGroup {
  id: string;
  name: string;
  skills: Skill[];
  color: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  position: string;
  duration: string;
  startDate: string;
  endDate?: string;
  description: string;
  technologies: string[];
  achievements: string[];
  location?: string;
  type: 'full-time' | 'part-time' | 'contract' | 'internship' | 'freelance';
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  field: string;
  duration: string;
  startDate: string;
  endDate?: string;
  gpa?: string;
  description?: string;
  achievements?: string[];
  location?: string;
}

export interface AboutData {
  introduction: string;
  journey: JourneyItem[];
  values: ValueItem[];
  stats: StatItem[];
  approach?: string;
}

export interface JourneyItem {
  id: string;
  period: string;
  title: string;
  description: string;
  color?: string;
}

export interface ValueItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  color?: string;
}

export interface StatItem {
  id: string;
  label: string;
  value: number;
  suffix?: string;
  description?: string;
}

export interface ContactInfo {
  email: string;
  phone?: string;
  location?: string;
  availability?: string;
  preferredContact?: 'email' | 'phone' | 'linkedin';
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  about: AboutData;
  skills: SkillGroup[];
  projects: Project[];
  experience: ExperienceItem[];
  education: EducationItem[];
  contact: ContactInfo;
}

// UI State Types
export interface CursorState {
  x: number;
  y: number;
  isVisible: boolean;
  isHovering: boolean;
  text?: string;
  variant: CursorVariant;
}

export type CursorVariant = 'default' | 'hover' | 'text' | 'drag' | 'view';

export interface ModalState {
  activeModal: string | null;
  data?: any;
}

export interface NavigationState {
  activeSection: string;
  isMenuOpen: boolean;
  scrollProgress: number;
}

export interface ThemeState {
  theme: 'dark' | 'light';
  reducedMotion: boolean;
}

// Animation Types
export interface AnimationConfig {
  duration?: number;
  delay?: number;
  ease?: string;
  stagger?: number;
}

export interface ScrollTriggerConfig {
  trigger?: string | HTMLElement;
  start?: string;
  end?: string;
  scrub?: boolean;
  pin?: boolean;
  onEnter?: () => void;
  onLeave?: () => void;
  onEnterBack?: () => void;
  onLeaveBack?: () => void;
}

// Form Types
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ChatMessage {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
  isTyping?: boolean;
}

export interface ChatState {
  messages: ChatMessage[];
  isLoading: boolean;
  error?: string;
}

// API Response Types
export interface ApiResponse<T> {
  data?: T;
  error?: string;
  success: boolean;
}

export interface GeminiResponse {
  response: string;
  confidence?: number;
}

// Utility Types
export type LoadingState = 'idle' | 'loading' | 'success' | 'error';

export interface ErrorState {
  message: string;
  code?: string;
  details?: any;
}

// Component Props Types
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface SectionProps extends BaseComponentProps {
  id?: string;
}

export interface AnimatedComponentProps extends BaseComponentProps {
  animation?: 'fadeIn' | 'slideUp' | 'slideInLeft' | 'slideInRight' | 'scaleIn';
  delay?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
}