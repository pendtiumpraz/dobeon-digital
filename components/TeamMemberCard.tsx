'use client';

import { useState } from 'react';
import Image from 'next/image';

interface TeamMemberCardProps {
  name: string;
  role: string;
  bio: string;
  expertise: string[];
  image?: string;
  featured?: boolean;
  gradient?: 'blue';
  delay?: number;
}

export default function TeamMemberCard({
  name,
  role,
  bio,
  expertise,
  image,
  featured = false,
  gradient = 'blue',
  delay = 0,
}: TeamMemberCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`
        relative group rounded-lg overflow-hidden
        bg-white/95 backdrop-blur-md
        border-2 border-blue-400/50
        shadow-[0_0_20px_rgba(59,130,246,0.3)]
        hover:shadow-[0_0_40px_rgba(59,130,246,0.6)]
        hover:border-blue-500
        transition-all duration-700
        hover:-translate-y-2
        ${featured ? 'bento-featured' : ''}
        animate-fade-in-up
      `}
      style={{ animationDelay: `${delay}ms` }}
      // Removed expand/collapse interaction
    >
      {/* HUD Corner decorations */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-blue-500"></div>
      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-blue-500"></div>
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-blue-500"></div>
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-blue-500"></div>

      {/* Animated scan line */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-scan-line"></div>
      </div>
      {/* Header with Gradient Background */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-500 via-blue-600 to-cyan-600 p-6 md:p-8 h-full flex flex-col justify-center items-center">
        {/* Animated background patterns */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-300 rounded-full blur-2xl animate-float-gentle"></div>
        </div>

        {/* Decorative dots pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%">
            <pattern id={`dots-${name}`} x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="white" />
            </pattern>
            <rect x="0" y="0" width="100%" height="100%" fill={`url(#dots-${name})`} />
          </svg>
        </div>

        <div className="relative z-10 w-full">
          {/* Profile photo/avatar */}
          <div className="flex justify-center mb-4">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/20 backdrop-blur-md border-4 border-white/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-2xl overflow-hidden">
              {image ? (
                <Image
                  src={image}
                  alt={name}
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                  priority={featured}
                />
              ) : (
                <svg className="w-12 h-12 md:w-16 md:h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              )}
            </div>
          </div>

          {/* Name */}
          <h3 className="text-xl md:text-2xl font-bold text-white text-center mb-2">
            {name}
          </h3>

          {/* Role */}
          <p className="text-center text-white/95 text-sm md:text-base font-medium px-4">
            {role}
          </p>
        </div>
      </div>

      {/* Hover glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    </div>
  );
}
