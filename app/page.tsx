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
      
      {/* Combined Hero with Video Background */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center pt-24 pb-20 md:pt-32 md:pb-32">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            key="intro-video"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/intro.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0b2870]/80 via-[#113CA4]/70 to-[#4a72d4]/60"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 bg-white/20 backdrop-blur-sm border border-white/30 animate-slide-down">
              <span className="w-2 h-2 rounded-full animate-pulse bg-[#4a72d4]"></span>
              <span className="text-sm font-semibold uppercase tracking-wider text-white">
                Digital Product Studio
              </span>
            </div>

            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-normal mb-8 leading-tight text-white drop-shadow-lg animate-fade-in-up stagger-1">
              We help businesses. We believe in digital.
            </h1>

            <p className="font-sans font-light text-lg md:text-xl lg:text-2xl mb-12 leading-relaxed max-w-2xl mx-auto text-white/90 animate-fade-in-up stagger-2">
              We are a boutique digital product studio for growth-stage companies. We are your partner in building great digital products.
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-fade-in stagger-4 z-10">
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <div className="w-6 h-10 rounded-full border-2 flex items-start justify-center p-1 border-white/50">
              <div className="w-1.5 h-3 rounded-full animate-scroll-down bg-white"></div>
            </div>
          </div>
        </div>
      </section>

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
    </>
  );
}
