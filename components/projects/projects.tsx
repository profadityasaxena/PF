"use client";
import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";

interface Project {
  title: string;
  institution: string;
  description: string;
  technologies?: string;
  link: string;
}

const projects: Project[] = [
  {
    title: "Building Generative AI Agents with Deep Reinforcement Learning",
    institution: "Toronto Metropolitan University",
    description:
      "The convergence of deep reinforcement learning (DRL) and generative large language models (LLMs) represents a transformative frontier in the development of autonomous agents...",
    link: "https://github.com/profadityasaxena/Building_Generative_AI_Agents_with_Deep_Reinforcement_Learning/blob/main/Building_Generative_AI_Agents_with_Deep_Reinforcement_Learning.pdf",
  },
  {
    title: "Modernizing Legacy Applications in the Era of AI and Large Language Models: A Review of Best Practices",
    institution: "Toronto Metropolitan University",
    description:
      "Legacy software systems remain critical assets for many enterprises, yet their monolithic architectures and outdated technologies hinder agility, scalability, and innovation...",
    link: "https://github.com/profadityasaxena/Cloud-Legacy-to-Modern/blob/main/Paper.pdf",
  },
  {
    title: "A Framework for Digital Transformation Teams to Design Microservices Architecture from a Monolith",
    institution: "Toronto Metropolitan University",
    description:
      "The shift from monolithic systems to microservice architectures (MSA) enables improved scalability, modularity, and agility. However, the migration process presents architectural and operational challenges...",
    link: "https://github.com/profadityasaxena/Cloud-Microservices/blob/main/Microservices.pdf",
  },
  {
    title: "DevOps: Past, Present, Future",
    institution: "Toronto Metropolitan University",
    description:
      "DevOps is a new way of building and managing software that brings together two important parts of any tech team: developers (who write the code) and operations teams (who keep the software running smoothly)...",
    link: "https://github.com/profadityasaxena/DevOps---Past-Present-Future/blob/main/DevOps%20-%20Past%2C%20Present%2C%20Future.pdf",
  },
];

const Projects: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const titleEl = document.querySelector("#project-title");
    if (titleEl) {
      gsap.fromTo(
        titleEl,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
      );
    }

    const interval = setInterval(() => {
      if (!cardRef.current || paused) return;
      gsap.to(cardRef.current, {
        opacity: 0,
        x: -50,
        duration: 0.5,
        onComplete: () => {
          setCurrentIndex((prevIndex) => {
            const nextIndex = (prevIndex + 1) % projects.length;
            if (!paused) {
              gsap.fromTo(
                cardRef.current,
                { opacity: 0, x: 50 },
                { opacity: 1, x: 0, duration: 0.5 }
              );
              const newTitleEl = document.querySelector("#project-title");
              if (newTitleEl) {
                gsap.fromTo(
                  newTitleEl,
                  { opacity: 0, y: -20 },
                  { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
                );
              }
            }
            return nextIndex;
          });
        },
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [paused]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -(y - centerY) / 20;
    const rotateY = (x - centerX) / 20;

    gsap.to(card, {
      rotateX,
      rotateY,
      scale: 1.03,
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.25)",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const currentProject = projects[currentIndex];

  return (
    <>
      <h1 style={{ textAlign: "center", fontSize: "2.5rem", fontWeight: "bold", marginBottom: "0.3rem" }}>
        Selected Articles
      </h1>
      <p style={{ textAlign: "center", fontSize: "1.1rem", maxWidth: "800px", margin: "0 auto 2rem auto", color: "#555" }}>
        The following articles were completed as part of my academic coursework and research across multiple universities.
        These highlight my experience with machine learning, simulation, big data systems, and AI applications.
        <br /><br /><hr/><br /><br />
        <strong>NOTE :</strong> A section on industry projects is currently under development.
      </p>
      <section style={{ background: "#fff", padding: "1rem 0", width: "100%", margin: 0, minHeight: "800px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "2rem", flexWrap: "wrap" }}>
          <div style={{ flex: "1 1 40%", textAlign: "left" }}>
            <h3 id="project-title" style={{ fontSize: "1.8rem", fontWeight: 700, marginBottom: "1rem", letterSpacing: "-0.5px" }}>
              {currentProject.title}
            </h3>
            <div style={{ fontSize: "1.1rem", color: "#666" }}>{currentProject.institution}</div>
          </div>
          <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => {
              setPaused(false);
              gsap.to(cardRef.current, {
                rotateY: 0,
                rotateX: 0,
                scale: 1,
                boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
                duration: 0.4,
                ease: "power2.inOut",
              });
            }}
            style={{
              flex: "1 1 55%",
              background: "#fff",
              border: "1px solid #000",
              padding: "2rem",
              fontFamily: "'Times New Roman', Times, serif",
              fontSize: "11pt",
              color: "#000",
              boxSizing: "border-box",
              transformStyle: "preserve-3d",
              perspective: "1000px",
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
              transition: "box-shadow 0.3s ease",
            }}
          >
            <h2 style={{ fontSize: "16pt", fontWeight: "bold", textAlign: "center", marginBottom: "0.75rem" }}>
              {currentProject.title}
            </h2>
            <div style={{ textAlign: "center", marginBottom: "1rem" }}>
              <div style={{ fontVariant: "small-caps", fontSize: "11pt" }}>Author</div>
              <div style={{ fontStyle: "italic", fontSize: "12pt" }}>Aditya Saxena</div>
              <div style={{ fontStyle: "italic", fontSize: "12pt" }}>
                Department of Computer Science, {currentProject.institution}
              </div>
            </div>
            <div style={{ fontWeight: "bold", fontVariant: "small-caps", fontSize: "12pt", marginBottom: "0.5rem", textAlign: "center" }}>
              Abstract
            </div>
            <p style={{ fontSize: "12pt", lineHeight: 1.5, textAlign: "justify" }}>{currentProject.description}</p>
            <div style={{ textAlign: "center", marginTop: "1.25rem" }}>
              <a
                href={currentProject.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: "11pt",
                  fontWeight: "bold",
                  color: "#0056b3",
                  textDecoration: "underline",
                }}
              >
                Read the Paper (PDF)
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
