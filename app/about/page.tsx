'use client';

import Image from 'next/image';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import Card from '@/components/Card';
import TeamMemberCard from '@/components/TeamMemberCard';
import StructuredData from '@/components/StructuredData';
import { organizationSchema } from '@/lib/structured-data';

export default function About() {
  const capabilities = [
    {
      title: 'End-to-end Orchestrator Solution',
      description: "Combining strategy, innovation, and digital transformation to prepare your organization for tomorrow's challenges. We manage the entire lifecycle of your digital evolution.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      title: 'AI-Powered Solutions',
      description: 'Leveraging cutting-edge artificial intelligence and machine learning to automate processes, derive insights from data, and create intelligent systems that drive competitive advantage.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: 'Go To Global Strategy',
      description: 'Helping scalable businesses navigate international markets. We provide the technological framework and strategic insights needed for global expansion and cross-border operations.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Market Validation',
      description: 'Uncovering hidden revenue streams and market gaps. We analyze user behavior and market data to validate product concepts before substantial investment.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    {
      title: 'Strategy Advisory',
      description: 'Structuring your path to digital maturity. We design comprehensive technical roadmaps that align your IT infrastructure with long-term business objectives.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      )
    },
    {
      title: 'Fundraising Advisory',
      description: 'Building assets that attract funding. We ensure your technology stack and intellectual property are robust, scalable, and due-diligence ready for investors.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'CEO - Office',
      description: 'Your technical office of the CEO. We act as the bridge between C-level strategy and engineering reality, ensuring seamless communication and execution.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ];


  const experts = [
    {
      name: 'Soleh Ayubi',
      role: 'Digital Transformation Expert',
      image: '/photo/Soleh Ayubi.png',
      bio: 'Visionary leader driving digital transformation and enterprise solutions. Building Companies of the Future through technology and innovation.',
      expertise: ['Digital Transformation', 'Enterprise Architecture', 'Business Strategy']
    },
    {
      name: 'Gajen Sunthara',
      role: 'Digital Transformation Advisor',
      image: '/photo/Gajen.png',
      bio: 'Former Chief Digital Officer with extensive experience leading enterprise-wide digital transformation initiatives.',
      expertise: ['Digital Transformation', 'Enterprise Strategy', 'Healthcare IT']
    },
    {
      name: 'Ivan Sini',
      role: 'Business & Leadership Expert',
      image: '/photo/Ivan Sini 2.jpg',
      bio: 'Healthcare technology leader with deep expertise in building scalable digital health platforms.',
      expertise: ['Healthcare Technology', 'Digital Health', 'Platform Development']
    },
    {
      name: 'Kerrie Holley',
      role: 'AI & Analytics Expert',
      image: '/photo/Kerrie Holley.jpg',
      bio: 'IBM Fellow and AI thought leader with decades of experience in artificial intelligence and data analytics.',
      expertise: ['Artificial Intelligence', 'Data Analytics', 'Enterprise AI']
    },
    {
      name: 'Paul Nielsen',
      role: 'Enterprise Architecture Advisor',
      image: '/photo/Paul Nielsen.jpg',
      bio: 'Enterprise architect with proven track record in designing scalable, resilient digital systems.',
      expertise: ['Enterprise Architecture', 'System Design', 'Cloud Strategy']
    },
    {
      name: 'John Brownstein',
      role: 'Healthcare & Data Science Expert',
      image: '/photo/John Brownstein.png',
      bio: 'Chief Innovation Officer at Boston Children\'s Hospital with expertise in computational epidemiology and health informatics.',
      expertise: ['Healthcare Innovation', 'Data Science', 'Epidemiology']
    },
    {
      name: 'Sai Prasad',
      role: 'Technology Leadership Expert',
      image: '/photo/Sai Prasad.jpg',
      bio: 'Technology executive with extensive experience in driving digital transformation across global enterprises.',
      expertise: ['Technology Strategy', 'Digital Leadership', 'Enterprise Solutions']
    },
    {
      name: 'Salman Subakat',
      role: 'Business Innovation Expert',
      image: '/photo/Salman Subakat.jpg',
      bio: 'Entrepreneur and business leader with proven success in building innovative digital products and services.',
      expertise: ['Business Innovation', 'Product Strategy', 'Entrepreneurship']
    },
    {
      name: 'Seth Berkeley',
      role: 'Global Health Expert',
      image: '/photo/Seth Berkeley 2.jpeg',
      bio: 'Former CEO of Gavi, the Vaccine Alliance with decades of experience leading global health initiatives.',
      expertise: ['Global Health', 'Public Policy', 'International Development']
    }
  ];

  // Global organizations our experts have led
  const globalOrganizations = [
    { name: 'IBM', logo: '/logo/IBM_logo.svg.png' },
    { name: 'Google', logo: '/logo/Google.webp' },
    { name: 'Harvard', logo: '/logo/Harvard.png' },
    { name: 'Boston Children\'s Hospital', logo: '/logo/Boston.png' },
    { name: 'Deloitte', logo: '/logo/Deloitte.png' },
    { name: 'Biofarma', logo: '/logo/Biofarma.png' },
    { name: 'Novo Nordisk', logo: '/logo/Novo.png' },
  ];

  return (
    <>
      <StructuredData data={organizationSchema} />
      <Hero
        subtitle="Who We Are"
        title="About Dobeon Digital"
        description="We are building a Company of the Future—one that goes beyond technology adoption to deliver real, measurable business value. Our focus is not only on developing digital solutions, but on ensuring they are successfully implemented, adopted, and scaled to drive sustainable impact."
        ctaText="Our Credentials"
        ctaLink="/credentials"
        gradient={true}
        backgroundImage="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&q=80"
      />

      {/* Company of the Future Section */}
      <Section
        subtitle="Our Vision"
        title="Company of the Future"
        description="Delivering Real Business Values"
      >
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary/5 to-blue-50 rounded-2xl p-8 md:p-12 border border-primary/10">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              Our team brings deep hands-on experience in both <strong className="text-primary">system development</strong> and <strong className="text-primary">operational execution</strong>, enabling us to lead complex digital transformation and change management initiatives with confidence.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              We understand that transformation is as much about <strong className="text-primary">people and processes</strong> as it is about technology.
            </p>
          </div>
        </div>
      </Section>

      <Section
        subtitle="What We Do"
        title="Capabilities"
        description="We collaborate with founders to propel their companies toward elevated performance levels by identifying pragmatic solutions to address substantial challenges."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {capabilities.map((cap, index) => (
            <Card
              key={index}
              title={cap.title}
              description={cap.description}
              icon={cap.icon}
              gradient={index === 0 || index === 1 ? 'blue' : false}
              delay={index * 100}
            />
          ))}
        </div>
      </Section>

      <Section
        id="team"
        subtitle="Leadership"
        title="Our Experts"
        description="Supported by a network of industry experts who have led digital transformation across multiple organizations, we help businesses navigate change, modernize operations, and unlock new growth opportunities—turning strategy into execution, and innovation into results."
        className="bg-gray-50"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {experts.map((member, index) => (
            <TeamMemberCard
              key={index}
              name={member.name}
              role={member.role}
              image={member.image}
              bio={member.bio}
              expertise={member.expertise}
              delay={index * 100}
            />
          ))}
        </div>
      </Section>

      {/* Global Organizations Section */}
      <Section
        subtitle="Global Experience"
        title="Organizations Our Experts Have Led"
        description="Our experts bring decades of experience from leading global organizations across industries."
      >
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {globalOrganizations.map((org, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl p-6 flex items-center justify-center shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <Image
                src={org.logo}
                alt={org.name}
                width={120}
                height={60}
                className="object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300 max-h-12 w-auto"
              />
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}

