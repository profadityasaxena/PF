'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type ExperienceItem = {
  id: string;
  title: string;
  company: string;
  period: string;
  location?: string;
  description?: string;
  bullets: string[];
  keywords: string[];
};

const experienceData: ExperienceItem[] = [
  {
    id: 'loyalist',
    title: 'Faculty Member',
    company: 'Loyalist College',
    period: 'May 2023 – Present · 2 yrs 2 mos',
    location: 'Permanent Full-time',
    keywords: ['Cloud Computing', 'AI Curriculum', 'Agile Learning', 'React', 'Serverless', 'Capstone Projects', 'Databricks', 'Ethical AI'],
    bullets: [
      'Led a transformative redesign of the Cloud Computing and AI curriculum...',
      'Introduced agile-based collaborative learning...',
      'Mentored junior faculty and contributed to digital transformation...',
      'Organized guest lectures and panels...',
      'Delivered workshops on data visualization and ethical AI practices.',
    ],
  },
  {
    id: 'consulting',
    title: 'Member of Consulting Staff',
    company: 'Consulting',
    period: 'Sep 2014 – Present · 11 years',
    location: 'Toronto, Ontario, Canada · On-site',
    keywords: ['AI Strategy', 'Data Pipelines', 'Cloud Architecture', 'GCP', 'DevSecOps', 'Terraform', 'GitHub Actions', 'Startup Consulting'],
    bullets: [
      'Architected AI-first digital strategies for SMEs...',
      'Implemented data pipelines and dashboards...',
      'Translated system requirements into digital solutions...',
      'Conducted analysis to support startup product launches.',
      'Delivered executive briefings to translate cloud strategies...',
    ],
  },
  {
    id: 'confidential',
    title: 'Confidential – Previous Data Withheld',
    company: 'Confidential',
    period: 'Jun 2009 – May 2023 · 14 yrs',
    location: 'Canada',
    description: 'Some previous roles and data have been withheld due to cybersecurity...',
    keywords: ['Zero Trust', 'Legacy Modernization', 'Secure Coding', 'Compliance', 'Security Architectures', 'Technical Leadership'],
    bullets: [
      'Led secure software development projects...',
      'Deployed applications modernizing legacy infrastructure...',
      'Acted as technical lead and security liaison...',
      'Enforced zero-trust architectures...',
      'Trained junior staff in secure coding and compliance documentation.',
    ],
  },
];

const Experience = () => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);

  const toggleCard = (id: string) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  useEffect(() => {
    cardRefs.current.forEach((card, index) => {
      if (!card) return;

      const fromX = index % 2 === 0 ? -150 : 150;

      gsap.fromTo(
        card,
        { x: fromX, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 90%',
            toggleActions: 'play none none reverse',
            scrub: false,
          },
        }
      );
    });

    ScrollTrigger.refresh(); // Force a refresh after rendering
  }, []);

  return (
    <div className="px-4 py-10 max-w-4xl mx-auto">
      <div className="mb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-primary-text mb-4">Experience</h1>
        <p className="text-lg text-gray-700">
          As a multidisciplinary engineer, professor, and technology strategist, I bring 12+ years of global experience
          spanning cloud computing, AI/ML innovation, and full-stack software development.
        </p>
      </div>

      {experienceData.map((item, index) => (
        <div
          key={item.id}
          ref={(el) => {
            if (el) cardRefs.current[index] = el;
          }}
          className={`border border-gray-300 rounded-md mb-4 transition-shadow duration-300 bg-white ${
            activeId === item.id ? 'shadow-lg' : 'shadow-sm'
          }`}
        >
          <div
            onClick={() => toggleCard(item.id)}
            className="cursor-pointer px-6 py-4 flex justify-between items-center bg-gray-100 font-semibold"
          >
            {item.company}
            <span>{activeId === item.id ? '▲' : '▼'}</span>
          </div>

          <div className={`${activeId === item.id ? 'block' : 'hidden'} px-6 py-4 space-y-3`}>
            <h3 className="text-xl font-medium">{item.title}</h3>
            <p>{item.period}</p>
            {item.location && <p>{item.location}</p>}
            {item.description && <p className="italic text-sm text-gray-600">{item.description}</p>}
            <ul className="list-disc list-inside mt-2 space-y-1">
              {item.bullets.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 pt-4">
              {item.keywords.map((kw, i) => (
                <span
                  key={i}
                  className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-1 rounded-full"
                >
                  {kw}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
