'use client';

import React, { useState } from 'react';
import { Button } from './Button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './Card';
import { Modal } from './Modal';
import { ToastContainer, type ToastProps } from './Toast';
import { variants } from '@/lib/variants';
import { cn } from '@/lib/cn';
import { Play, Heart, Star, Download, ExternalLink, Code } from 'lucide-react';

const DesignSystemShowcase: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const addToast = (type: ToastProps['type'], title: string, description?: string) => {
    const id = Math.random().toString(36).substr(2, 9);
    const newToast: ToastProps = {
      id,
      type,
      title,
      description,
      onClose: (id) => setToasts(prev => prev.filter(t => t.id !== id)),
    };
    setToasts(prev => [...prev, newToast]);
  };

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className={cn(variants.container({ size: 'xl' }))}>
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className={cn(variants.text({ variant: 'hero' }))}>
            Design System
          </h1>
          <p className={cn(variants.text({ variant: 'bodyLarge', color: 'secondary' }), 'mt-4')}>
            A comprehensive showcase of our design system components and tokens
          </p>
        </div>

        {/* Typography Section */}
        <section className={cn(variants.section({ spacing: 'lg' }))}>
          <h2 className={cn(variants.text({ variant: 'h2' }), 'mb-8')}>Typography</h2>
          <div className={cn(variants.grid({ cols: 1, gap: 'md' }))}>
            <div className="space-y-4">
              <h1 className={cn(variants.text({ variant: 'h1' }))}>Heading 1 - Display Font</h1>
              <h2 className={cn(variants.text({ variant: 'h2' }))}>Heading 2 - Display Font</h2>
              <h3 className={cn(variants.text({ variant: 'h3' }))}>Heading 3 - Display Font</h3>
              <p className={cn(variants.text({ variant: 'body' }))}>
                Body text using Space Grotesk. This is the primary font for all body content, 
                providing excellent readability and a modern feel.
              </p>
              <p className={cn(variants.text({ variant: 'accent' }))}>
                Accent text using Playfair Display for elegant emphasis and special moments.
              </p>
              <p className={cn(variants.text({ variant: 'caption' }))}>Caption Text - Uppercase</p>
              <code className={cn(variants.text({ variant: 'code' }))}>Code snippet example</code>
            </div>
          </div>
        </section>

        {/* Buttons Section */}
        <section className={cn(variants.section({ spacing: 'lg' }))}>
          <h2 className={cn(variants.text({ variant: 'h2' }), 'mb-8')}>Buttons</h2>
          <div className={cn(variants.grid({ cols: 3, gap: 'md' }))}>
            <div className="space-y-4">
              <h3 className={cn(variants.text({ variant: 'h5' }), 'mb-4')}>Variants</h3>
              <Button variant="default" leftIcon={<Play className="h-4 w-4" />}>
                Primary Button
              </Button>
              <Button variant="secondary" leftIcon={<Heart className="h-4 w-4" />}>
                Secondary
              </Button>
              <Button variant="outline" leftIcon={<Star className="h-4 w-4" />}>
                Outline
              </Button>
              <Button variant="ghost">Ghost Button</Button>
              <Button variant="gradient" leftIcon={<Download className="h-4 w-4" />}>
                Gradient
              </Button>
            </div>
            
            <div className="space-y-4">
              <h3 className={cn(variants.text({ variant: 'h5' }), 'mb-4')}>Sizes</h3>
              <Button size="sm">Small Button</Button>
              <Button size="default">Default Button</Button>
              <Button size="lg">Large Button</Button>
              <Button size="xl">Extra Large</Button>
            </div>

            <div className="space-y-4">
              <h3 className={cn(variants.text({ variant: 'h5' }), 'mb-4')}>States</h3>
              <Button loading>Loading...</Button>
              <Button disabled>Disabled</Button>
              <Button animation="glow" rightIcon={<ExternalLink className="h-4 w-4" />}>
                With Glow
              </Button>
            </div>
          </div>
        </section>

        {/* Cards Section */}
        <section className={cn(variants.section({ spacing: 'lg' }))}>
          <h2 className={cn(variants.text({ variant: 'h2' }), 'mb-8')}>Cards</h2>
          <div className={cn(variants.grid({ cols: 3, gap: 'md' }))}>
            <Card variant="default" hover="lift">
              <CardHeader>
                <CardTitle>Default Card</CardTitle>
                <CardDescription>
                  A standard card with hover lift effect
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className={cn(variants.text({ variant: 'bodySmall' }))}>
                  This is the card content area where you can place any content.
                </p>
              </CardContent>
              <CardFooter>
                <Button size="sm" variant="outline">Learn More</Button>
              </CardFooter>
            </Card>

            <Card variant="glass" hover="scale">
              <CardHeader>
                <CardTitle>Glass Card</CardTitle>
                <CardDescription>
                  Glassmorphism effect with scale hover
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className={cn(variants.text({ variant: 'bodySmall' }))}>
                  Beautiful glass effect with backdrop blur and transparency.
                </p>
              </CardContent>
              <CardFooter>
                <Button size="sm" variant="ghost">Explore</Button>
              </CardFooter>
            </Card>

            <Card variant="glow" hover="glow">
              <CardHeader>
                <CardTitle>Glow Card</CardTitle>
                <CardDescription>
                  Card with glow effect on hover
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className={cn(variants.text({ variant: 'bodySmall' }))}>
                  This card glows with the primary color when hovered.
                </p>
              </CardContent>
              <CardFooter>
                <Button size="sm" variant="default">Get Started</Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* Interactive Elements */}
        <section className={cn(variants.section({ spacing: 'lg' }))}>
          <h2 className={cn(variants.text({ variant: 'h2' }), 'mb-8')}>Interactive Elements</h2>
          <div className={cn(variants.flex({ gap: 'lg', wrap: 'wrap' }))}>
            <Button onClick={() => setIsModalOpen(true)} leftIcon={<Code className="h-4 w-4" />}>
              Open Modal
            </Button>
            <Button onClick={() => addToast('success', 'Success!', 'This is a success message')}>
              Success Toast
            </Button>
            <Button onClick={() => addToast('error', 'Error!', 'Something went wrong')}>
              Error Toast
            </Button>
            <Button onClick={() => addToast('warning', 'Warning!', 'Please be careful')}>
              Warning Toast
            </Button>
            <Button onClick={() => addToast('info', 'Info', 'Here is some information')}>
              Info Toast
            </Button>
          </div>
        </section>

        {/* Animation Examples */}
        <section className={cn(variants.section({ spacing: 'lg' }))}>
          <h2 className={cn(variants.text({ variant: 'h2' }), 'mb-8')}>Animations</h2>
          <div className={cn(variants.grid({ cols: 4, gap: 'md' }))}>
            <div className={cn(variants.animation({ type: 'fadeIn', delay: 100 }))}>
              <Card variant="default" size="sm">
                <CardContent>
                  <p className={cn(variants.text({ variant: 'bodySmall', align: 'center' }))}>
                    Fade In
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className={cn(variants.animation({ type: 'slideUp', delay: 200 }))}>
              <Card variant="default" size="sm">
                <CardContent>
                  <p className={cn(variants.text({ variant: 'bodySmall', align: 'center' }))}>
                    Slide Up
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className={cn(variants.animation({ type: 'scaleIn', delay: 300 }))}>
              <Card variant="default" size="sm">
                <CardContent>
                  <p className={cn(variants.text({ variant: 'bodySmall', align: 'center' }))}>
                    Scale In
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className={cn(variants.animation({ type: 'float' }))}>
              <Card variant="default" size="sm">
                <CardContent>
                  <p className={cn(variants.text({ variant: 'bodySmall', align: 'center' }))}>
                    Float
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Design System Modal"
        description="This is an example modal from our design system"
        size="lg"
      >
        <div className="space-y-4">
          <p className={cn(variants.text({ variant: 'body' }))}>
            This modal demonstrates the smooth animations and glassmorphism effects 
            built into our design system. It includes backdrop blur, smooth scaling 
            animations, and proper focus management.
          </p>
          <div className={cn(variants.flex({ gap: 'md', justify: 'end' }))}>
            <Button variant="ghost" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setIsModalOpen(false)}>
              Confirm
            </Button>
          </div>
        </div>
      </Modal>

      {/* Toast Container */}
      <ToastContainer toasts={toasts} position="top-right" />
    </div>
  );
};

export { DesignSystemShowcase };