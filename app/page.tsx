'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import StructuredData from '@/components/StructuredData';
import { organizationSchema } from '@/lib/structured-data';

export default function Home() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const navItems = [
    {
      title: 'Credentials',
      link: '/credentials',
      image: 'https://images.unsplash.com/photo-1553877612-b37146b133d9?w=800&q=80', // High-tech architecture
      subtitle: 'Our Works'
    },
    {
      title: 'Capabilities',
      link: '/about',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80', // Team working on strategy
      subtitle: 'What We Do'
    },
    {
      title: 'People',
      link: '/about#team',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80', // Diverse team
      subtitle: 'Leadership'
    },
    {
      title: 'Career',
      link: '/contact',
      image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80', // Collaboration
      subtitle: 'Join Us'
    }
  ];

  return (
    <>
      <StructuredData data={organizationSchema} />
      
      {/* Minimal Hero */}
      <Hero
        subtitle="Digital Product Studio"
        title="We help businesses. We believe in digital."
        description="We are a boutique digital product studio for growth-stage companies. We are your partner in building great digital products."
        ctaText="Start Your Project"
        ctaLink="/contact"
        gradient={true}
      />

      {/* Highlight Grid - Bavana Style */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {navItems.map((item, index) => (
              <Link 
                href={item.link} 
                key={index}
                className="group relative block overflow-hidden rounded-2xl aspect-[4/3] md:aspect-[16/9]"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                </div>
                
                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                  <span className="text-white/80 text-sm uppercase tracking-widest font-medium translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    {item.subtitle}
                  </span>
                  
                  <div className="flex items-end justify-between">
                    <h2 className="text-white font-serif text-4xl md:text-5xl font-normal">
                      {item.title}
                    </h2>
                    
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-white group-hover:text-primary transition-all duration-300 text-white">
                      <svg className="w-6 h-6 transform -rotate-45 group-hover:rotate-0 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Video/Slider Placeholder Section - "Sketches of people and technology" */}
      <Section className="bg-gray-50 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
            {/* Using a high-quality tech/team GIF/Video placeholder */}
            <div className="absolute inset-0 bg-gray-900">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover opacity-60"
                poster="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1600&q=80"
              >
                {/* Placeholder video URL - user can replace this with a local file in /public/videos/ */}
                <source src="https://assets.mixkit.co/videos/preview/mixkit-team-of-people-working-on-a-project-in-a-modern-office-4712-large.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-0 left-0 p-10 md:p-16 text-white">
                <p className="text-sm font-semibold uppercase tracking-wider mb-4 text-primary-light">Innovation</p>
                <h3 className="font-serif text-3xl md:text-5xl mb-6 max-w-2xl">
                  Where creativity meets engineering excellence.
                </h3>
                <Link href="/about" className="inline-flex items-center gap-2 text-lg hover:text-primary-light transition-colors border-b border-white/30 pb-1 hover:border-primary-light">
                  Discover our culture
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
