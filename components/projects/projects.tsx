"use client";
import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";

interface Project {
  title: string;
  institution: string;
  description: string;
  technologies: string;
}

const projects: Project[] = [
  {
    title: "A Comparative Study of Perceptron and Pegasos Algorithms for Sentiment Classification",
    institution: "MITx",
    description:
      "This study presents a detailed empirical comparison between the standard Perceptron algorithm and the Pegasos algorithm for binary sentiment classification tasks. The project involves preprocessing textual data using the bag-of-words model and implementing both algorithms from scratch to investigate the impact of hinge loss optimization and regularization on classification accuracy.\n\nResults demonstrate that Pegasos outperforms Perceptron in convergence speed and generalization due to stochastic sub-gradient descent and margin maximization. The research highlights the effectiveness of learning rate tuning, L2 regularization, and iterative updates for scalable and accurate sentiment analysis pipelines.",
    technologies: "Python, Scikit-learn, NLP, Perceptron, Pegasos",
  },
  {
    title: "Evaluation of Multi-Model Approaches for Digit Recognition on the MNIST Dataset",
    institution: "MITx",
    description:
      "This project evaluates various supervised learning techniques for image classification, specifically focusing on digit recognition using the MNIST dataset. A range of models including linear regression, support vector machines (SVM), softmax regression, and kernel methods were implemented and compared in terms of training efficiency and classification accuracy.\n\nDimensionality reduction using principal component analysis (PCA) was also incorporated to assess computational gains. The comparative study underscores the strengths of softmax and kernelized SVM in high-dimensional image recognition, offering insights into trade-offs between complexity, interpretability, and predictive performance.",
    technologies: "Python, Scikit-learn, SVM, PCA, Softmax, MNIST",
  },
  {
    title: "Gaussian Mixture Model-Based Collaborative Filtering Techniques for Recommender Systems",
    institution: "MITx",
    description:
      "This work investigates probabilistic matrix factorization techniques using Gaussian Mixture Models (GMM) for collaborative filtering in recommendation systems. The Expectation-Maximization (EM) algorithm was employed to infer user preferences and predict missing entries in sparse rating matrices.\n\nExperiments conducted on synthetic and benchmark datasets reveal that GMM-based models provide robust and interpretable recommendations under uncertainty, outperforming baseline models in scenarios with limited labeled data. The framework demonstrates the potential of soft clustering in capturing latent user-item interactions.",
    technologies: "Python, Gaussian Mixture Models, EM Algorithm, Recommender Systems",
  },
  {
    title: "AD ASTRA: A Generative AI Framework for Multi-Cloud Policy Mapping and Compliance Assessment",
    institution: "Toronto Metropolitan University",
    description:
      "AD ASTRA proposes a novel framework leveraging generative AI to automate policy mapping and compliance validation across multi-cloud environments. The system integrates supervised learning for compliance inference and a transformer-based model for translating natural language policies into structured control statements.\n\nThe tool was tested on synthetic compliance scenarios across AWS, Azure, and GCP, and achieved high mapping accuracy with explainable policy coverage metrics. This work provides a scalable approach to reducing manual overhead in cloud security audits while supporting cross-cloud interoperability.",
    technologies: "Python, Generative AI, Cloud Security, Compliance",
  },
  {
    title: "Design and Implementation of a Scalable Movie Recommendation System Using Apache Spark and Hadoop",
    institution: "Toronto Metropolitan University",
    description:
      "This project entails designing a distributed recommendation system using Hadoop MapReduce and Apache Spark for efficient processing of the MovieLens dataset. Collaborative filtering algorithms were implemented in a parallelized manner to enhance performance at scale.\n\nThe system demonstrated near-linear scalability with respect to data size and significant reductions in runtime. This work highlights the advantages of using Spark’s in-memory processing capabilities for large-scale recommender applications in real-world big data scenarios.",
    technologies: "Hadoop, Apache Spark, Big Data, Recommendation Systems",
  },
  {
    title: "CareConnect: Development of a Cloud-Native Microservices Application for Family Doctor Discovery",
    institution: "Seneca Polytechnic",
    description:
      "CareConnect is a microservices-based application designed to improve access to primary healthcare by enabling users to locate and book family doctors in Canada. The application employs a containerized architecture using Docker and orchestrates services for search, booking, and user management.\n\nThe solution ensures high availability and modular scalability while conforming to healthcare data privacy requirements. The project underscores the role of microservices in building responsive, fault-tolerant healthcare platforms for geographically distributed users.",
    technologies: "Cloud-native, Microservices, Docker, Node.js, React",
  },
  {
    title: "FinTrack: Development of a PCI-DSS Compliant Fintech Dashboard Using Next.js",
    institution: "Seneca Polytechnic",
    description:
      "FinTrack delivers a secure and compliant financial technology dashboard built with Next.js, adhering to PCI-DSS standards. The application integrates real-time financial metrics, user authentication, and encrypted transaction processing.\n\nSecurity best practices were embedded at every layer, and the system was validated against PCI-DSS controls. The dashboard provides a responsive and auditable interface for fintech stakeholders, demonstrating effective full-stack secure development strategies.",
    technologies: "Next.js, React, PCI-DSS, Fintech",
  },
  {
    title: "BitBot: Intelligent Robotic Tutor for Programming Education with Award Recognition",
    institution: "University of Bristol",
    description:
      "BitBot is a humanoid robotic tutor designed to aid introductory programming instruction. It uses AI-driven dialogue management and gesture recognition to engage learners in problem-solving tasks.\n\nField trials conducted in classrooms showed increased engagement and learning retention, particularly among students with limited coding exposure. The system received the Best Project Award for demonstrating innovation in educational robotics and accessible pedagogy.",
    technologies: "Robotics, AI, Python, Education",
  },
  {
    title: "DataMotor: RFID-Driven Carbon Footprint Tracking System for Sustainable Supply Chains",
    institution: "University of Bristol",
    description:
      "DataMotor is a sustainability-focused system leveraging RFID and IoT to track carbon emissions across supply chain nodes. The system models transport-related emissions using real-time RFID signals and backend analytics to estimate footprint at each segment.\n\nThe platform enables organizations to visualize and reduce their environmental impact through intelligent logistics optimization. It demonstrates the role of data-driven automation in supporting sustainable business practices.",
    technologies: "RFID, IoT, Supply Chain, Sustainability",
  },
  {
    title: "PyNSE: Python-Based Simulation Framework for 2D Incompressible Navier–Stokes Equations",
    institution: "Panjab University",
    description:
      "PyNSE is a simulation framework written in Python for solving 2D incompressible Navier–Stokes equations in irregular domains. The system employs finite difference discretization and staggered grids for pressure-velocity coupling.\n\nDesigned for educational and research use, PyNSE supports visualization and modular experimentation with different boundary conditions. It facilitates an intuitive understanding of fluid mechanics and numerical methods in computational fluid dynamics (CFD).",
    technologies: "Python, CFD, Navier–Stokes, Simulation",
  },
  {
    title: "BioHydroSim: Simulation of Hydrogen Production via Biomass Gasification Processes",
    institution: "Panjab University",
    description:
      "BioHydroSim is a simulation tool that models the conversion of biomass to hydrogen through thermochemical gasification. The system integrates reaction kinetics and mass-energy balance equations to simulate process parameters.\n\nThe simulator was benchmarked against experimental studies and enables sensitivity analysis on variables like temperature, feedstock moisture, and catalyst type. It serves as a pedagogical and research aid for green energy systems.",
    technologies: "Python, Simulation, Biomass, Hydrogen",
  },
];

const Projects: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    // Animate project title on slide change
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
              // Animate the new project title
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
      <br /><br />
      <br /><br />
      <h1 style={{ textAlign: "center", fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1rem" }}>
        Academic Projects
      </h1>
      <p style={{ textAlign: "center", fontSize: "1.1rem", maxWidth: "800px", margin: "0 auto 2rem auto", color: "#555" }}>
        The following projects were completed as part of my academic coursework and research across multiple universities.
        These highlight my experience with machine learning, simulation, big data systems, and AI applications.
        <br /><br />
        <hr/>
        <br /><br />
        <strong>NOTE : </strong>A section on industry projects is currently under development.
      </p>
      <section
        style={{
          background: "#fff",
          padding: "3rem 0",
          width: "100%",
          margin: 0,
          minHeight: "800px"
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "0 1.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "2rem",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              flex: "1 1 40%",
              textAlign: "left",
            }}
          >
            <h3
              id="project-title"
              style={{
                fontSize: "1.8rem",
                fontWeight: 700,
                marginBottom: "1rem",
                letterSpacing: "-0.5px",
              }}
            >
              {currentProject.title}
            </h3>
            <div
              style={{
                fontSize: "1.1rem",
                color: "#666",
              }}
            >
              {currentProject.institution}
            </div>
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
            <h3
              style={{
                fontSize: "14pt",
                fontWeight: "bold",
                textTransform: "uppercase",
                textAlign: "center",
                marginBottom: "0.5rem",
              }}
            >
              {currentProject.title}
            </h3>
            <div style={{ textAlign: "center", marginBottom: "1rem" }}>
              <div
                style={{
                  fontVariant: "small-caps",
                  fontSize: "11pt",
                }}
              >
                Author
              </div>
              <div
                style={{
                  fontStyle: "italic",
                  fontSize: "12pt",
                }}
              >
                Aditya Saxena
              </div>
              <div
                style={{
                  fontStyle: "italic",
                  fontSize: "12pt",
                }}
              >
                Department of Computer Science, {currentProject.institution}
              </div>
            </div>
            <div
              style={{
                fontWeight: "bold",
                fontVariant: "small-caps",
                fontSize: "12pt",
                marginBottom: "0.5rem",
                textAlign: "center",
              }}
            >
              Abstract
            </div>
            <p
              style={{
                fontSize: "12pt",
                lineHeight: 1.5,
                textAlign: "justify",
              }}
            >
              {currentProject.description}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;