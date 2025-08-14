# Aceternity UI Integration Guide

This guide shows you how to use the integrated Aceternity UI components in your Next.js portfolio.

## Available Components

### 1. BackgroundBeams
Creates animated light beams in the background.

```tsx
import { BackgroundBeams } from '@/components/ui/aceternity';

<BackgroundBeams className="absolute inset-0">
  <YourContent />
</BackgroundBeams>
```

### 2. SparklesCore
Animated particle system with customizable sparkles.

```tsx
import { SparklesCore } from '@/components/ui/aceternity';

<SparklesCore
  id="hero-sparkles"
  background="transparent"
  minSize={0.6}
  maxSize={1.4}
  particleDensity={120}
  particleColor="#ff6b35"
  className="w-full h-full"
/>
```

### 3. TextGenerateEffect
Animated text reveal with blur effect.

```tsx
import { TextGenerateEffect } from '@/components/ui/aceternity';

<TextGenerateEffect
  words="Your amazing text here"
  className="text-2xl font-bold"
  duration={0.8}
  delay={1}
/>
```

### 4. TypewriterEffect
Classic typewriter animation with multiple words.

```tsx
import { TypewriterEffect } from '@/components/ui/aceternity';

const words = [
  { text: 'Full Stack Developer', className: 'text-primary-400' },
  { text: 'UI/UX Designer', className: 'text-blue-400' },
];

<TypewriterEffect words={words} />
```

### 5. HoverEffect
Interactive card grid with hover animations.

```tsx
import { HoverEffect } from '@/components/ui/aceternity';

const projects = [
  {
    title: 'Project Name',
    description: 'Project description',
    icon: <YourIcon />,
  },
];

<HoverEffect items={projects} />
```

### 6. MovingBorder
Animated gradient border around elements.

```tsx
import { MovingBorder } from '@/components/ui/aceternity';

<MovingBorder duration={3000} className="p-6">
  <YourButton />
</MovingBorder>
```

### 7. FloatingNav
Floating navigation that appears/disappears on scroll.

```tsx
import { FloatingNav } from '@/components/ui/aceternity';

const navItems = [
  { name: 'Home', link: '#home', icon: <HomeIcon /> },
  { name: 'About', link: '#about', icon: <UserIcon /> },
];

<FloatingNav navItems={navItems} />
```

## Integration with Your Design System

All Aceternity components are designed to work seamlessly with your existing design system:

- **Colors**: Uses your primary color (#ff6b35) and design tokens
- **Typography**: Integrates with your variant system
- **Animations**: Respects reduced motion preferences
- **Styling**: Compatible with Tailwind CSS classes

## Usage Examples

### Hero Section
```tsx
<section className="relative min-h-screen flex items-center justify-center">
  <BackgroundBeams className="absolute inset-0" />
  <SparklesCore
    id="hero-sparkles"
    background="transparent"
    particleColor="#ff6b35"
    className="absolute inset-0"
  />
  <div className="relative z-10 text-center">
    <h1 className="text-6xl font-bold mb-4">Your Name</h1>
    <TypewriterEffect words={typewriterWords} />
    <TextGenerateEffect
      words="Your bio text here"
      className="mt-6 text-xl"
    />
  </div>
</section>
```

### Projects Section
```tsx
<section className="py-20">
  <div className="container mx-auto">
    <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
    <HoverEffect items={projectsData} />
  </div>
</section>
```

### Interactive Button
```tsx
<MovingBorder duration={3000} className="p-6">
  <Button variant="ghost" size="lg">
    Get In Touch
  </Button>
</MovingBorder>
```

## Customization

### Colors
All components use CSS custom properties, so you can easily customize colors:

```css
:root {
  --primary-500: #your-color;
  --primary-400: #your-lighter-color;
}
```

### Animations
Adjust animation speeds and effects by modifying component props:

```tsx
<SparklesCore
  particleSpeed={0.5}  // Slower particles
  particleDensity={50} // Fewer particles
/>
```

### Responsive Design
Components are mobile-friendly and respect your breakpoint system:

```tsx
<HoverEffect 
  items={projects} 
  className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
/>
```

## Performance Tips

1. **Reduce particle density** on mobile devices
2. **Use `prefers-reduced-motion`** for accessibility
3. **Lazy load** heavy animation components
4. **Optimize particle counts** based on screen size

## Next Steps

1. Replace the showcase with your actual portfolio content
2. Customize colors and animations to match your brand
3. Add your real projects, skills, and information
4. Optimize for performance and accessibility
5. Deploy and test across different devices

The components are now ready to use in your portfolio! Check out the `AceternityShowcase` component for complete implementation examples.