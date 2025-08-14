'use client';

import React from 'react';
import { 
  BackgroundBeams,
  SparklesCore,
  TextGenerateEffect,
  HoverEffect,
  MovingBorder,
  FloatingNav,
  TypewriterEffect,
  type HoverEffectItem,
  type NavItem
} from './aceternity';
import { Button } from './Button';
import { variants } from '@/lib/variants';
import { cn } from '@/lib/cn';
import { 
  Code, 
  Palette, 
  Zap, 
  Sparkles, 
  Rocket, 
  Heart,
  Home,
  User,
  Briefcase,
  Mail,
  Star
} from 'lucide-react';

const AceternityShowcase: React.FC = () => {
  // Navigation items for FloatingNav
  const navItems: NavItem[] = [
    { name: 'Home', link: '#home', icon: <Home className="h-4 w-4" /> },
    { name: 'About', link: '#about', icon: <User className="h-4 w-4" /> },
    { name: 'Projects', link: '#projects', icon: <Briefcase className="h-4 w-4" /> },
    { name: 'Contact', link: '#contact', icon: <Mail className="h-4 w-4" /> },
  ];

  // Items for HoverEffect
  const projects: HoverEffectItem[] = [
    {
      title: 'AI-Powered Chat',
      description: 'Intelligent chatbot with natural language processing and context awareness.',
      icon: <Zap className="h-6 w-6" />,
    },
    {
      title: 'Design System',
      description: 'Comprehensive component library with consistent styling and animations.',
      icon: <Palette className="h-6 w-6" />,
    },
    {
      title: 'Portfolio Website',
      description: 'Modern, responsive portfolio with advanced animations and interactions.',
      icon: <Code className="h-6 w-6" />,
    },
    {
      title: 'Mobile App',
      description: 'Cross-platform mobile application with native performance.',
      icon: <Rocket className="h-6 w-6" />,
    },
    {
      title: 'E-commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration.',
      icon: <Sparkles className="h-6 w-6" />,
    },
    {
      title: 'Analytics Dashboard',
      description: 'Real-time data visualization and business intelligence platform.',
      icon: <Star className="h-6 w-6" />,
    },
  ];

  // Typewriter words
  const typewriterWords = [
    { text: 'Full Stack Developer', className: 'text-primary-400' },
    { text: 'UI/UX Designer', className: 'text-blue-400' },
    { text: 'Problem Solver', className: 'text-green-400' },
    { text: 'Tech Enthusiast', className: 'text-purple-400' },
  ];

  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      {/* Floating Navigation */}
      <FloatingNav navItems={navItems} />

      {/* Hero Section with Background Effects */}
      <section id="home" className="relative min-h-screen flex items-center justify-center">
        {/* Background Beams */}
        <BackgroundBeams className="absolute inset-0" />
        
        {/* Sparkles Effect */}
        <div className="absolute inset-0">
          <SparklesCore
            id="hero-sparkles"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={120}
            className="w-full h-full"
            particleColor="#ff6b35"
          />
        </div>

        {/* Hero Content */}
        <div className={cn(variants.container({ size: 'lg' }), 'relative z-10 text-center')}>
          <h1 className={cn(variants.text({ variant: 'hero' }), 'mb-6')}>
            Passakorn Limseng
          </h1>
          
          <div className="mb-8 text-2xl md:text-3xl">
            <span className="text-gray-300">I'm a </span>
            <TypewriterEffect 
              words={typewriterWords}
              className="inline-flex"
              cursorClassName="h-6 w-[2px]"
            />
          </div>

          <TextGenerateEffect
            words="Building innovative web applications with modern technologies and creative solutions. Passionate about creating exceptional user experiences through clean code and thoughtful design."
            className={cn(variants.text({ variant: 'bodyLarge' }), 'mb-12 max-w-3xl mx-auto')}
            duration={0.8}
            delay={1}
          />

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <MovingBorder
              duration={3000}
              className="p-6 text-lg font-medium"
              containerClassName="rounded-2xl"
            >
              <Button variant="ghost" size="lg" className="bg-transparent border-none">
                View My Work
              </Button>
            </MovingBorder>

            <Button variant="outline" size="lg" leftIcon={<Heart className="h-5 w-5" />}>
              Get In Touch
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={cn(variants.section({ spacing: '2xl' }))}>
        <div className={cn(variants.container({ size: 'xl' }))}>
          <div className="text-center mb-16">
            <h2 className={cn(variants.text({ variant: 'h2' }), 'mb-4')}>
              Featured Projects
            </h2>
            <p className={cn(variants.text({ variant: 'bodyLarge', color: 'secondary' }))}>
              Explore some of my recent work and creative solutions
            </p>
          </div>

          <HoverEffect items={projects} className="max-w-5xl mx-auto" />
        </div>
      </section>

      {/* Skills Section with Sparkles */}
      <section id="skills" className={cn(variants.section({ spacing: '2xl' }), 'relative')}>
        <div className="absolute inset-0">
          <SparklesCore
            id="skills-sparkles"
            background="transparent"
            minSize={0.4}
            maxSize={1.0}
            particleDensity={50}
            className="w-full h-full"
            particleColor="#3b82f6"
            particleSpeed={0.5}
          />
        </div>

        <div className={cn(variants.container({ size: 'xl' }), 'relative z-10')}>
          <div className="text-center mb-16">
            <h2 className={cn(variants.text({ variant: 'h2' }), 'mb-4')}>
              Technical Skills
            </h2>
            <TextGenerateEffect
              words="Proficient in modern web technologies, frameworks, and development tools"
              className={cn(variants.text({ variant: 'bodyLarge', color: 'secondary' }))}
              duration={0.6}
            />
          </div>

          <div className={cn(variants.grid({ cols: 3, gap: 'lg' }))}>
            {[
              { category: 'Frontend', skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
              { category: 'Backend', skills: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB'] },
              { category: 'Tools', skills: ['Git', 'Docker', 'AWS', 'Figma'] },
            ].map((skillGroup, _index) => (
              <div key={skillGroup.category} className="text-center">
                <h3 className={cn(variants.text({ variant: 'h4' }), 'mb-4 text-primary-400')}>
                  {skillGroup.category}
                </h3>
                <div className="space-y-2">
                  {skillGroup.skills.map((skill) => (
                    <div
                      key={skill}
                      className="px-4 py-2 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-primary-500/50 transition-colors"
                    >
                      <span className={cn(variants.text({ variant: 'bodySmall' }))}>
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={cn(variants.section({ spacing: '2xl' }))}>
        <div className={cn(variants.container({ size: 'lg' }), 'text-center')}>
          <h2 className={cn(variants.text({ variant: 'h2' }), 'mb-4')}>
            Let's Work Together
          </h2>
          
          <TextGenerateEffect
            words="Ready to bring your ideas to life? Let's discuss your next project and create something amazing together."
            className={cn(variants.text({ variant: 'bodyLarge', color: 'secondary' }), 'mb-12 max-w-2xl mx-auto')}
            duration={0.6}
            delay={0.5}
          />

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <MovingBorder
              duration={4000}
              className="p-6"
              containerClassName="rounded-xl"
            >
              <Button variant="ghost" size="lg" className="bg-transparent border-none">
                <Mail className="h-5 w-5 mr-2" />
                Send Message
              </Button>
            </MovingBorder>

            <Button variant="outline" size="lg">
              Download Resume
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={cn(variants.section({ spacing: 'md' }), 'border-t border-gray-800')}>
        <div className={cn(variants.container({ size: 'xl' }), 'text-center')}>
          <p className={cn(variants.text({ variant: 'bodySmall', color: 'muted' }))}>
            © 2024 Passakorn Limseng. Built with Next.js, Framer Motion, and Aceternity UI.
          </p>
        </div>
      </footer>
    </div>
  );
};

export { AceternityShowcase };