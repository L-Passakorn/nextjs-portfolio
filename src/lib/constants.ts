// Application constants

export const APP_CONFIG = {
  name: 'Passakorn Limseng - Portfolio',
  description: 'Computer Engineering student specializing in interactive web applications',
  url: 'https://passakorn.dev',
  author: 'Passakorn Limseng',
  keywords: [
    'developer',
    'portfolio',
    'react',
    'nextjs',
    'typescript',
    'web development',
    'computer engineering',
    'full stack',
  ],
} as const;

export const SOCIAL_LINKS = {
  github: 'https://github.com/L-Passakorn',
  linkedin: 'https://linkedin.com/in/passakorn',
  email: 'passakorn@example.com',
  twitter: 'https://twitter.com/passakorn',
} as const;

export const NAVIGATION_ITEMS = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'contact', label: 'Contact', href: '#contact' },
] as const;

export const ANIMATION_CONFIG = {
  duration: {
    fast: 0.2,
    normal: 0.3,
    slow: 0.6,
    slower: 1.0,
  },
  ease: {
    default: [0.25, 0.46, 0.45, 0.94],
    bounce: [0.68, -0.55, 0.265, 1.55],
    backOut: [0.34, 1.56, 0.64, 1],
    backInOut: [0.68, -0.6, 0.32, 1.6],
  },
  stagger: {
    fast: 0.05,
    normal: 0.1,
    slow: 0.2,
  },
} as const;

export const BREAKPOINTS = {
  xs: 475,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
  '3xl': 1600,
  '4xl': 1920,
} as const;

export const CURSOR_VARIANTS = {
  default: {
    size: 24,
    color: '#ff6b35',
    text: '',
  },
  hover: {
    size: 48,
    color: '#ff6b35',
    text: '',
  },
  text: {
    size: 32,
    color: '#ff6b35',
    text: 'Edit',
  },
  drag: {
    size: 40,
    color: '#ff6b35',
    text: 'Drag',
  },
  view: {
    size: 56,
    color: '#ff6b35',
    text: 'View',
  },
} as const;

export const SKILL_CATEGORIES = {
  frontend: {
    name: 'Frontend',
    color: '#3b82f6',
    icon: '🎨',
  },
  backend: {
    name: 'Backend',
    color: '#10b981',
    icon: '⚙️',
  },
  mobile: {
    name: 'Mobile',
    color: '#8b5cf6',
    icon: '📱',
  },
  database: {
    name: 'Database',
    color: '#f59e0b',
    icon: '🗄️',
  },
  devops: {
    name: 'DevOps',
    color: '#ef4444',
    icon: '🚀',
  },
  design: {
    name: 'Design',
    color: '#ec4899',
    icon: '🎭',
  },
  other: {
    name: 'Other',
    color: '#6b7280',
    icon: '🔧',
  },
} as const;

export const PROJECT_CATEGORIES = {
  'web-development': {
    name: 'Web Development',
    color: '#3b82f6',
    icon: '🌐',
  },
  'mobile-development': {
    name: 'Mobile Development',
    color: '#8b5cf6',
    icon: '📱',
  },
  'ai-ml': {
    name: 'AI & Machine Learning',
    color: '#10b981',
    icon: '🤖',
  },
  'desktop-application': {
    name: 'Desktop Application',
    color: '#f59e0b',
    icon: '💻',
  },
  'api-backend': {
    name: 'API & Backend',
    color: '#ef4444',
    icon: '⚡',
  },
  other: {
    name: 'Other',
    color: '#6b7280',
    icon: '🔧',
  },
} as const;

export const EXPERIENCE_TYPES = {
  'full-time': {
    name: 'Full-time',
    color: '#10b981',
  },
  'part-time': {
    name: 'Part-time',
    color: '#3b82f6',
  },
  contract: {
    name: 'Contract',
    color: '#f59e0b',
  },
  internship: {
    name: 'Internship',
    color: '#8b5cf6',
  },
  freelance: {
    name: 'Freelance',
    color: '#ec4899',
  },
} as const;

export const CONTACT_METHODS = {
  email: {
    name: 'Email',
    icon: '📧',
    preferred: true,
  },
  phone: {
    name: 'Phone',
    icon: '📞',
    preferred: false,
  },
  linkedin: {
    name: 'LinkedIn',
    icon: '💼',
    preferred: true,
  },
} as const;

export const FAQ_CATEGORIES = [
  'General',
  'Experience',
  'Skills',
  'Projects',
  'Education',
  'Availability',
  'Collaboration',
] as const;

export const COMMON_FAQ_RESPONSES = {
  greeting: "Hello! I'm Passakorn, a Computer Engineering student passionate about creating innovative web applications. How can I help you today?",
  experience: "I have experience in full-stack web development, mobile app development, and AI integration. I've worked on projects ranging from hospital management systems to language learning platforms.",
  skills: "My main skills include React, Next.js, Vue.js, Node.js, Python, TypeScript, and various databases. I'm always learning new technologies to stay current with industry trends.",
  availability: "I'm currently open to internship opportunities, freelance projects, and collaboration on interesting technical challenges. Feel free to reach out!",
  education: "I'm studying Computer Engineering at Kasetsart University, where I'm gaining both theoretical knowledge and practical experience in software development.",
  fallback: "I'd be happy to help you with that! Could you please provide more specific details about what you'd like to know?",
} as const;

export const LOADING_MESSAGES = [
  'Loading amazing content...',
  'Preparing something special...',
  'Almost there...',
  'Getting things ready...',
  'Just a moment...',
] as const;

export const ERROR_MESSAGES = {
  generic: 'Something went wrong. Please try again.',
  network: 'Network error. Please check your connection.',
  validation: 'Please check your input and try again.',
  notFound: 'The requested resource was not found.',
  unauthorized: 'You are not authorized to perform this action.',
  rateLimit: 'Too many requests. Please try again later.',
} as const;

export const SUCCESS_MESSAGES = {
  contactForm: 'Thank you for your message! I\'ll get back to you soon.',
  subscribe: 'Successfully subscribed to updates!',
  copy: 'Copied to clipboard!',
  save: 'Saved successfully!',
} as const;

export const SCROLL_TRIGGER_CONFIG = {
  start: 'top 80%',
  end: 'bottom 20%',
  threshold: 0.1,
  rootMargin: '50px',
} as const;

export const PARALLAX_CONFIG = {
  speed: {
    slow: 0.2,
    normal: 0.5,
    fast: 0.8,
  },
  disabled: {
    mobile: true,
    reducedMotion: true,
  },
} as const;

export const PERFORMANCE_CONFIG = {
  imageQuality: 80,
  lazyLoadOffset: 100,
  debounceDelay: 300,
  throttleDelay: 100,
  animationThreshold: 0.1,
} as const;