'use client';

import React from 'react';

export default function TypographyShowcase() {
  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-hero text-6xl md:text-8xl text-white mb-4">
            Typography
          </h1>
          <p className="text-subheading text-xl text-gray-400">
            Professional Multi-Font System
          </p>
        </div>

        {/* Font Families */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Display Font - Poppins */}
          <div className="space-y-6">
            <div>
              <h2 className="text-heading text-3xl text-white mb-2">Display Font</h2>
              <p className="text-caption text-primary-500 mb-4">Poppins - For Headlines & Hero Text</p>
            </div>
            
            <div className="space-y-4">
              <div className="font-display text-5xl text-white font-black">
                Bold Impact
              </div>
              <div className="font-display text-3xl text-gray-300 font-bold">
                Strong Headlines
              </div>
              <div className="font-display text-xl text-gray-400 font-semibold">
                Confident Subheadings
              </div>
            </div>
          </div>

          {/* Body Font - Space Grotesk */}
          <div className="space-y-6">
            <div>
              <h2 className="text-heading text-3xl text-white mb-2">Body Font</h2>
              <p className="text-caption text-primary-500 mb-4">Space Grotesk - For Content & UI</p>
            </div>
            
            <div className="space-y-4">
              <div className="font-body text-lg text-gray-300 font-medium">
                Clean and modern readability
              </div>
              <div className="font-body text-base text-gray-400">
                Perfect for body text and user interface elements. 
                This font provides excellent readability while maintaining 
                a contemporary and professional appearance.
              </div>
              <div className="font-body text-sm text-gray-500">
                Smaller text remains highly legible
              </div>
            </div>
          </div>

          {/* Accent Font - Playfair Display */}
          <div className="space-y-6">
            <div>
              <h2 className="text-heading text-3xl text-white mb-2">Accent Font</h2>
              <p className="text-caption text-primary-500 mb-4">Playfair Display - For Elegance</p>
            </div>
            
            <div className="space-y-4">
              <div className="font-accent text-4xl text-white">
                Elegant Touch
              </div>
              <div className="font-accent text-2xl text-gray-300 italic">
                Sophisticated Details
              </div>
              <div className="font-accent text-lg text-gray-400">
                "Perfect for quotes and special emphasis"
              </div>
            </div>
          </div>

          {/* Mono Font - JetBrains Mono */}
          <div className="space-y-6">
            <div>
              <h2 className="text-heading text-3xl text-white mb-2">Mono Font</h2>
              <p className="text-caption text-primary-500 mb-4">JetBrains Mono - For Code</p>
            </div>
            
            <div className="space-y-4">
              <div className="font-code text-lg text-primary-400 bg-gray-800 p-4 rounded-lg">
                const portfolio = &#123;<br />
                &nbsp;&nbsp;name: 'Passakorn',<br />
                &nbsp;&nbsp;role: 'Developer'<br />
                &#125;;
              </div>
              <div className="font-code text-sm text-gray-400">
                npm install awesome-portfolio
              </div>
            </div>
          </div>
        </div>

        {/* Typography Styles */}
        <div className="space-y-12">
          <h2 className="text-heading text-4xl text-white text-center">Typography Styles</h2>
          
          <div className="space-y-8">
            {/* Hero Style */}
            <div>
              <p className="text-caption text-primary-500 mb-2">Hero Text</p>
              <h1 className="text-hero text-6xl md:text-8xl text-gradient">
                Building Dreams
              </h1>
            </div>

            {/* Heading Style */}
            <div>
              <p className="text-caption text-primary-500 mb-2">Heading</p>
              <h2 className="text-heading text-4xl text-white">
                Professional Excellence
              </h2>
            </div>

            {/* Subheading Style */}
            <div>
              <p className="text-caption text-primary-500 mb-2">Subheading</p>
              <h3 className="text-subheading text-2xl text-gray-300">
                Crafting Digital Experiences
              </h3>
            </div>

            {/* Body Style */}
            <div>
              <p className="text-caption text-primary-500 mb-2">Body Text</p>
              <p className="text-body text-lg text-gray-400 max-w-3xl">
                This is how body text appears in the portfolio. It's designed for optimal 
                readability while maintaining a modern and professional appearance. The spacing 
                and line height are carefully crafted for comfortable reading.
              </p>
            </div>

            {/* Caption Style */}
            <div>
              <p className="text-caption text-primary-500 mb-2">Caption</p>
              <p className="text-caption text-gray-500">
                Small details matter
              </p>
            </div>

            {/* Elegant Style */}
            <div>
              <p className="text-caption text-primary-500 mb-2">Elegant Accent</p>
              <p className="text-elegant text-xl text-gray-300">
                "Typography is the craft of endowing human language with a durable visual form."
              </p>
            </div>
          </div>
        </div>

        {/* Font Weights Demo */}
        <div className="space-y-8">
          <h2 className="text-heading text-4xl text-white text-center">Font Weights</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-subheading text-xl text-primary-500">Poppins Weights</h3>
              <div className="space-y-2">
                <div className="font-display font-light text-white">Light (300)</div>
                <div className="font-display font-normal text-white">Regular (400)</div>
                <div className="font-display font-medium text-white">Medium (500)</div>
                <div className="font-display font-semibold text-white">Semibold (600)</div>
                <div className="font-display font-bold text-white">Bold (700)</div>
                <div className="font-display font-extrabold text-white">Extra Bold (800)</div>
                <div className="font-display font-black text-white">Black (900)</div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-subheading text-xl text-primary-500">Space Grotesk Weights</h3>
              <div className="space-y-2">
                <div className="font-body font-light text-white">Light (300)</div>
                <div className="font-body font-normal text-white">Regular (400)</div>
                <div className="font-body font-medium text-white">Medium (500)</div>
                <div className="font-body font-semibold text-white">Semibold (600)</div>
                <div className="font-body font-bold text-white">Bold (700)</div>
              </div>
            </div>
          </div>
        </div>

        {/* Usage Guidelines */}
        <div className="bg-gray-800 rounded-2xl p-8 space-y-6">
          <h2 className="text-heading text-3xl text-white">Usage Guidelines</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-subheading text-xl text-primary-500">When to Use Each Font</h3>
              <ul className="space-y-3 text-body text-gray-400">
                <li><strong className="text-white">Poppins:</strong> Hero sections, main headings, CTAs</li>
                <li><strong className="text-white">Space Grotesk:</strong> Body text, navigation, UI elements</li>
                <li><strong className="text-white">Playfair Display:</strong> Quotes, testimonials, elegant accents</li>
                <li><strong className="text-white">JetBrains Mono:</strong> Code blocks, technical data</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-subheading text-xl text-primary-500">Best Practices</h3>
              <ul className="space-y-3 text-body text-gray-400">
                <li>• Limit to 2-3 fonts per page for cohesion</li>
                <li>• Use font weights to create hierarchy</li>
                <li>• Maintain consistent line heights</li>
                <li>• Consider readability on all devices</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}