"use client";
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

import Image from 'next/image';
import LogoBU from './assets/LogoBU.png';
import LogoPU from './assets/LogoPU.png';
import LogoTMU from './assets/LogoTMU.png';
import LogoSeneca from './assets/LogoSeneca.png';
import LogoMIT from './assets/LogoMIT.png';

const educationData = [
  {
    logo: LogoMIT.src,
    date: 'Massachusetts Institute of Technology (MITx)',
    title: 'Certificate in Statistics and Data Science',
    project: 'Predictive modeling in healthcare, Bayesian inference on economic data',
    link: 'https://micromasters.mit.edu/ds/'
  },
  {
    logo: LogoTMU.src,
    date: 'Toronto Metropolitan University',
    title: 'Certificate in Practical Data Science and Machine Learning',
    project: 'Applied machine learning projects, data visualization techniques',
    link: 'https://continuing.torontomu.ca/public/category/courseCategoryCertificateProfile.do?method=load&certificateId=3829375'
  },
  {
    logo: LogoTMU.src,
    date: 'Toronto Metropolitan University',
    title: 'Certificate in Project Management for Technical Professionals',
    project: 'Agile project management, risk assessment and mitigation',
    link: 'https://continuing.torontomu.ca/public/category/courseCategoryCertificateProfile.do?method=load&certificateId=198542'
  },
  {
    logo: LogoSeneca.src,
    date: 'Seneca Polytechnic',
    title: 'Graduate Certificate in Database Application Development',
    project: 'Database design, SQL optimization, application development',
    link: 'https://www.senecapolytechnic.ca/programs/fulltime/DAD.html'
  },
  {
    logo: LogoSeneca.src,
    date: 'Seneca Polytechnic',
    title: 'Graduate Certificate in IT Project Management',
    project: 'IT project lifecycle management, stakeholder communication',
    link: 'https://www.senecapolytechnic.ca/programs/fulltime/PMC.html'
  },
  {
    logo: LogoBU.src,
    date: 'University of Bristol',
    title: 'MSc in Computer Science',
    project: 'Advanced algorithms, software engineering projects',
    link: 'https://www.bristol.ac.uk/study/postgraduate/taught/msc-computer-science-conversion/'
  },
  {
    logo: LogoPU.src,
    date: 'Panjab University',
    title: 'Bachelor of Engineering',
    project: 'Circuit design, embedded systems projects'
  },
];

const Education = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = gsap.utils.toArray(".card");

    cards.forEach((card) => {
      const el = card as HTMLElement;

      const handleMouseMove = (e: MouseEvent) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        gsap.to(el, {
          rotateY: x / 20,
          rotateX: -y / 20,
          duration: 0.4,
          ease: "power2.out",
        });
      };

      const handleMouseEnter = () => {
        gsap.to(el, {
          backgroundColor: "#ffffff",
          boxShadow: "0 30px 60px black",
          border: "6px solid var(--color-medium-brown)",
          duration: 0.6,
          ease: "power2.out",
        });
        el.addEventListener("mousemove", handleMouseMove);
      };

      const handleMouseLeave = () => {
        gsap.to(el, {
          rotateY: 0,
          rotateX: 0,
          backgroundColor: "#fffef9",
          boxShadow: "0 10px 25px black",
          border: "4px solid var(--color-medium-brown)",
          duration: 0.6,
          ease: "power2.inOut",
        });
        el.removeEventListener("mousemove", handleMouseMove);
      };

      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="education-section block relative z-0 py-16 px-4 bg-primary-bg mt-16"
      style={{ minHeight: "130vh", overflowY: "auto", background: "var(--color-light-brown)" }}
    >
      <div className="mb-10 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-primary-text mb-2">Education</h1>
        <p className="text-secondary-text text-lg">Academic journey across world-class institutions and impactful projects</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[2em] justify-center">
        {educationData.map((edu, index) => (
          <div
            className="card relative bg-[#fffef9] border-[10px] border-[var(--color-medium-brown)] rounded-[1rem] shadow-[0_10px_25px_rgba(0,0,0,0.15)] p-8 flex flex-col items-center justify-start aspect-square w-[280px] mx-auto transition-transform"
            key={index}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <Image src={edu.logo} alt="Logo" className="object-contain mb-4" width={144} height={144} />
            <span className="card__date text-primary-text text-lg text-center mb-2">{edu.date}</span>
            <h2 className="card__title text-center font-serif font-semibold text-xl text-secondary-text mb-2">{edu.title}</h2>
            <p className="text-sm italic text-primary-text text-center mb-1">
              {edu.title.toLowerCase().includes("certificate") ? "This certificate is awarded to" :
               edu.title.toLowerCase().includes("diploma") ? "This diploma is awarded to" :
               "This degree is awarded to"}
            </p>
            <p className="text-lg font-bold text-primary-text text-center mb-2">Aditya Saxena</p>
            <a
              className="text-blue-700 underline text-sm mb-2"
              href={edu.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit program website
            </a>
            <div className="flex-grow" />
            <p className="card__project text-center mt-4 text-md text-secondary-text leading-snug">
              {edu.project}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education;
