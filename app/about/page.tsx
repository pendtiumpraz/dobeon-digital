'use client';

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
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
        </svg>
      )
    },
    {
      title: 'Go To Global Strategy',
      description: 'Helping scalable businesses navigate international markets. We provide the technological framework and strategic insights needed for global expansion and cross-border operations.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      )
    },
    {
      title: 'Product Opportunity Analysis',
      description: 'Uncovering hidden revenue streams and market gaps. We analyze user behavior and market data to validate product concepts before substantial investment.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
        </svg>
      )
    },
    {
      title: 'Technical Roadmapping',
      description: 'Structuring your path to digital maturity. We design comprehensive technical roadmaps that align your IT infrastructure with long-term business objectives.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/>
        </svg>
      )
    },
    {
      title: 'Investment-Ready Technology',
      description: 'Building assets that attract funding. We ensure your technology stack and intellectual property are robust, scalable, and due-diligence ready for investors.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      )
    },
    {
      title: 'Executive Tech Support',
      description: 'Your technical office of the CEO. We act as the bridge between C-level strategy and engineering reality, ensuring seamless communication and execution.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0z"/>
        </svg>
      )
    }
  ];

  const team = Array(4).fill({
    name: 'Soleh Ayubi',
    role: 'Co-founder',
    image: '/photo/Soleh Ayubi.png',
    bio: 'Visionary leader with deep expertise in digital transformation and enterprise solutions.',
    expertise: ['Digital Transformation', 'Enterprise Architecture', 'AI Strategy']
  });

  return (
    <>
      <StructuredData data={organizationSchema} />
      <Hero
        subtitle="Who We Are"
        title="About Dobeon"
        description="We are a team of digital innovators committed to building the future of business through technology."
        ctaText="Our Credentials"
        ctaLink="/credentials"
        gradient={false}
      />

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
        title="Our Team"
        description="Meet the minds behind Dobeon Digital."
        className="bg-gray-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
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
    </>
  );
}
