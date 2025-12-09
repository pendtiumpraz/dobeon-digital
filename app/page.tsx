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
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80', // Code/Monitor image from previous Hero
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
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold uppercase tracking-wider mb-4">
              What We Do
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-gray-900 mb-6">
              Our Capabilities
            </h2>
            <p className="font-sans font-light text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver end-to-end digital solutions that drive growth and operational excellence across industries.
            </p>
          </div>

          {/* Capabilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 - Dedicated Talent */}
            <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                  alt="Dedicated Talent"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-2xl font-normal text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
                  Dedicated Talent For Your Company
                </h3>
                <p className="font-sans font-light text-gray-600 leading-relaxed mb-4">
                  We provide specialized digital talent augmentation to seamlessly integrate with your existing teams, accelerating development cycles and bringing top-tier expertise.
                </p>
                <Link href="/credentials" className="inline-flex items-center gap-2 text-primary font-medium group/link">
                  Learn more
                  <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Card 2 - ERP Solutions - Featured */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-blue-600 shadow-lg hover:shadow-2xl hover:shadow-primary/30 transition-all duration-500 hover:-translate-y-2">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
                  alt="Enterprise Solutions"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-white group-hover:text-primary group-hover:scale-110 transition-all duration-300">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-2xl font-normal text-white mb-3">
                  ERP & Enterprise Solutions
                </h3>
                <p className="font-sans font-light text-white/90 leading-relaxed mb-4">
                  Comprehensive Enterprise Resource Planning and custom business solutions designed to optimize your operations, from supply chain to financial analytics.
                </p>
                <Link href="/credentials" className="inline-flex items-center gap-2 text-white font-medium group/link">
                  Learn more
                  <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Card 3 - Education LMS */}
            <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80"
                  alt="Education & Learning"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-2xl font-normal text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
                  Education & Learning Management
                </h3>
                <p className="font-sans font-light text-gray-600 leading-relaxed mb-4">
                  Scalable LMS platforms and educational technologies that empower institutions and corporations to deliver engaging, effective learning experiences.
                </p>
                <Link href="/credentials" className="inline-flex items-center gap-2 text-primary font-medium group/link">
                  Learn more
                  <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <Link
              href="/credentials"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-blue-600 text-white rounded-xl hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-1 transition-all duration-300 font-semibold text-lg group"
            >
              View All Credentials
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
