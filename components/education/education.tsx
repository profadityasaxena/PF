"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import Image from "next/image";
import LogoBU from "./assets/LogoBU.png";
import LogoPU from "./assets/LogoPU.png";
import LogoTMU from "./assets/LogoTMU.png";
import LogoSeneca from "./assets/LogoSeneca.png";
import LogoMIT from "./assets/LogoMIT.png";

const educationData = [
  {
    logo: LogoMIT.src,
    date: "Massachusetts Institute of Technology (MITx)",
    title: "Certificate in Statistics and Data Science",
    project: "Predictive modeling in healthcare, Bayesian inference on economic data",
    link: "https://micromasters.mit.edu/ds/",
  },
  {
    logo: LogoTMU.src,
    date: "Toronto Metropolitan University",
    title: "Certificate in Practical Data Science and Machine Learning",
    project: "Applied machine learning projects, data visualization techniques",
    link: "https://continuing.torontomu.ca/public/category/courseCategoryCertificateProfile.do?method=load&certificateId=3829375",
  },
  {
    logo: LogoTMU.src,
    date: "Toronto Metropolitan University",
    title: "Certificate in Project Management for Technical Professionals",
    project: "Agile project management, risk assessment and mitigation",
    link: "https://continuing.torontomu.ca/public/category/courseCategoryCertificateProfile.do?method=load&certificateId=198542",
  },
  {
    logo: LogoSeneca.src,
    date: "Seneca Polytechnic",
    title: "Graduate Certificate in Database Application Development",
    project: "Database design, SQL optimization, application development",
    link: "https://www.senecapolytechnic.ca/programs/fulltime/DAD.html",
  },
  {
    logo: LogoSeneca.src,
    date: "Seneca Polytechnic",
    title: "Graduate Certificate in IT Project Management",
    project: "IT project lifecycle management, stakeholder communication",
    link: "https://www.senecapolytechnic.ca/programs/fulltime/PMC.html",
  },
  {
    logo: LogoBU.src,
    date: "University of Bristol",
    title: "MSc in Computer Science",
    project: "Advanced algorithms, software engineering projects",
    link: "https://www.bristol.ac.uk/study/postgraduate/taught/msc-computer-science-conversion/",
  },
  {
    logo: LogoPU.src,
    date: "Panjab University",
    title: "Bachelor of Engineering",
    project: "Circuit design, embedded systems projects",
  },
];

const Education = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = gsap.utils.toArray<HTMLElement>(".card");

    cards.forEach((card) => {
      const handleMouseMove = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        gsap.to(card, {
          rotateY: x / 20,
          rotateX: -y / 20,
          duration: 0.4,
          ease: "power2.out",
        });
      };

      const handleMouseEnter = () => {
        gsap.to(card, {
          backgroundColor: "#ffffff",
          boxShadow: "0 30px 60px rgba(0, 0, 0, 0.3)",
          border: "6px solid #ccc",
          duration: 0.6,
          ease: "power2.out",
        });
        card.addEventListener("mousemove", handleMouseMove);
      };

      const handleMouseLeave = () => {
        gsap.to(card, {
          rotateY: 0,
          rotateX: 0,
          backgroundColor: "#ffffff",
          boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
          border: "4px solid #ccc",
          duration: 0.6,
          ease: "power2.inOut",
        });
        card.removeEventListener("mousemove", handleMouseMove);
      };

      card.addEventListener("mouseenter", handleMouseEnter);
      card.addEventListener("mouseleave", handleMouseLeave);
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="education-section py-16 px-4"
      style={{ background: "#ffffff", minHeight: "130vh" }}
    >
      <div className="mb-10 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Education</h1>
        <p className="text-gray-600 text-lg">
          Academic journey across world-class institutions and impactful projects
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="card relative bg-white border-[10px] border-gray-300 rounded-xl shadow-md pt-12 px-6 pb-8 flex flex-col items-center transition-transform w-[210mm] h-[144mm] mx-auto"
            style={{ transformStyle: "preserve-3d" }}
          >
            <Image
              src={edu.logo}
              alt="Logo"
              className="object-contain mb-4"
              width={144}
              height={144}
            />
            <span className="text-gray-800 text-lg text-center mb-2">{edu.date}</span>
            <h2 className="text-center font-serif font-semibold text-xl text-gray-700 mb-2">
              {edu.title}
            </h2>
            <p className="text-sm italic text-gray-500 text-center mb-1">
              {edu.title.toLowerCase().includes("certificate")
                ? "This certificate is awarded to"
                : edu.title.toLowerCase().includes("diploma")
                ? "This diploma is awarded to"
                : "This degree is awarded to"}
            </p>
            <p className="text-lg font-bold text-gray-800 text-center mb-2">Aditya Saxena</p>
            {edu.link && (
              <a
                href={edu.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline text-sm mb-2"
              >
                Visit program website
              </a>
            )}
            <div className="flex-grow" />
            <p className="text-center mt-4 text-md text-gray-600 leading-snug">
              {edu.project}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
