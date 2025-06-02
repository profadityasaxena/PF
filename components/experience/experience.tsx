'use client';
import React from 'react'

const Experience = () => {
  return (
    <div style={{ padding: '2rem', backgroundColor: 'var(--color-light-brown)', textAlign: 'center' }}>
      <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.75rem', textAlign: 'center', color: 'var(--color-dark-brown)' }}>
          Career Summary
        </h1>
        <p style={{ fontSize: '1rem', maxWidth: '800px', margin: '1rem auto', lineHeight: '1.6', color: 'var(--color-dark-brown)', textAlign: 'center' }}>
          As a multidisciplinary engineer, professor, and technology strategist, I bring 12+ years of global experience spanning cloud computing, AI/ML innovation, and full-stack software development. My ikigai lies at the intersection of technology, education, and community impact — building systems that solve real problems, teaching the next generation, and driving sustainable, secure digital transformation across sectors.
        </p>
      </div>
      <div
        style={{
          marginTop: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          alignItems: 'center',
        }}
      >
        {/* Faculty Member Card */}
        <div
          className="experience-card"
          style={{
            backgroundColor: 'var(--color-cream)',
            padding: '1.75rem',
            borderRadius: '0.5rem',
            border: '6px solid var(--color-medium-brown)',
            boxShadow: '0 12px 24px rgba(0, 0, 0, 0.5)',
            width: '70%',
            fontFamily: 'var(--font-body)',
            cursor: 'zoom-in',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
          }}
          onMouseEnter={(e) => {
            const target = e.currentTarget;
            target.style.transform = 'scale(1.05) rotateX(2deg) rotateY(-2deg)';
            target.style.boxShadow = '0 16px 32px rgba(0, 0, 0, 0.75)';
          }}
          onMouseLeave={(e) => {
            const target = e.currentTarget;
            target.style.transform = 'none';
            target.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.5)';
          }}
        >
          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem', color: 'var(--color-dark-brown)', textAlign: 'center' }}>
            Faculty Member
          </h3>
          <p style={{ fontWeight: 500, color: 'var(--color-dark-brown)', textAlign: 'center' }}>
            <a href="https://loyalistcollege.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-deep-brown)', textDecoration: 'underline' }}>
              Loyalist College
            </a> · Permanent Full-time
          </p>
          <p style={{ color: 'var(--color-dark-brown)', textAlign: 'center' }}>May 2023 – Present · 2 yrs 2 mos</p>
          <ul style={{ marginTop: '1rem', paddingLeft: '2rem', listStyleType: 'disc', color: 'var(--color-dark-brown)', textAlign: 'justify' }}>
            <li style={{ marginBottom: '0.75rem' }}>
              At Loyalist College, I led a transformative redesign of the Cloud Computing and AI curriculum to address rising student attrition. Recognizing the need for real-world applicability, I spearheaded the integration of industry-led capstone projects and modernized the tech stack to align with employer expectations. This initiative led to a 40% improvement in student retention and a 25% increase in learner satisfaction metrics, establishing a benchmark for pedagogical innovation within the department.
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              I introduced agile-based collaborative learning methodologies and redesigned lab experiences to simulate enterprise environments. This not only enhanced student engagement but also improved cross-disciplinary project outcomes by encouraging teamwork and innovation across departments.
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              My leadership extended beyond classroom transformation — I mentored junior faculty in integrating emerging tech into their pedagogy and contributed to institutional digital transformation through data-driven curriculum decisions backed by analytics dashboards.
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              Championed institutional collaborations by organizing guest lectures and industry panels, bridging academic theory with real-world practices and expanding student exposure to cutting-edge innovations.
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              Delivered high-impact workshops on data visualization and ethical AI practices, enhancing digital literacy and critical thinking skills among learners from diverse backgrounds.
            </li>
          </ul>
        </div>

        {/* Member of Consulting Staff Card */}
        <div
          className="experience-card"
          style={{
            backgroundColor: 'var(--color-cream)',
            padding: '1.75rem',
            borderRadius: '0.5rem',
            border: '6px solid var(--color-medium-brown)',
            boxShadow: '0 12px 24px rgba(0, 0, 0, 0.5)',
            width: '70%',
            fontFamily: 'var(--font-body)',
            cursor: 'zoom-in',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
          }}
          onMouseEnter={(e) => {
            const target = e.currentTarget;
            target.style.transform = 'scale(1.05) rotateX(2deg) rotateY(-2deg)';
            target.style.boxShadow = '0 16px 32px rgba(0, 0, 0, 0.75)';
          }}
          onMouseLeave={(e) => {
            const target = e.currentTarget;
            target.style.transform = 'none';
            target.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.5)';
          }}
        >
          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem', color: 'var(--color-dark-brown)', textAlign: 'center' }}>
            Member of Consulting Staff
          </h3>
          <p style={{ fontWeight: 500, color: 'var(--color-dark-brown)', textAlign: 'center' }}>
            <a href="https://brainwork.ca/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-deep-brown)', textDecoration: 'underline' }}>
              Brainwork Business Consulting
            </a>
          </p>
          <p style={{ color: 'var(--color-dark-brown)', textAlign: 'center' }}>Sep 2024 – Present · 10 mos</p>
          <p style={{ color: 'var(--color-dark-brown)', textAlign: 'center' }}>Toronto, Ontario, Canada · On-site</p>
          <ul style={{ marginTop: '1rem', paddingLeft: '2rem', listStyleType: 'disc', color: 'var(--color-dark-brown)', textAlign: 'justify' }}>
            <li style={{ marginBottom: '0.75rem' }}>
              At Brainwork Business Consulting, I architected AI-first digital strategies for SMEs and educational clients, aligning technology adoption with measurable ROI goals. Through stakeholder workshops and in-depth discovery phases, I identified transformation bottlenecks and recommended scalable, cloud-native solutions tailored to each client’s growth trajectory.
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              I implemented secure data pipelines and interactive analytics dashboards that reduced reporting overhead by 50%. My strategic interventions empowered clients to adopt cloud platforms with confidence and foster a data-driven decision-making culture across departments.
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              Leveraging design thinking and domain expertise, I translated complex system requirements into streamlined digital solutions — accelerating delivery cycles and enabling a 60% increase in digital engagement for client organizations within 6 months.
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              Conducted competitive analysis and digital readiness assessments to shape go-to-market strategies for emerging startups, resulting in three client product launches ahead of schedule.
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              Delivered executive briefings and whitepapers to C-suite clients, translating complex cloud adoption roadmaps into actionable investment plans with measurable KPIs.
            </li>
          </ul>
        </div>

        {/* Confidential Card */}
        <div
          className="experience-card"
          style={{
            backgroundColor: 'var(--color-cream)',
            padding: '1.75rem',
            borderRadius: '0.5rem',
            border: '6px solid var(--color-medium-brown)',
            boxShadow: '0 12px 24px rgba(0, 0, 0, 0.5)',
            width: '70%',
            fontFamily: 'var(--font-body)',
            cursor: 'zoom-in',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
          }}
          onMouseEnter={(e) => {
            const target = e.currentTarget;
            target.style.transform = 'scale(1.05) rotateX(2deg) rotateY(-2deg)';
            target.style.boxShadow = '0 16px 32px rgba(0, 0, 0, 0.75)';
          }}
          onMouseLeave={(e) => {
            const target = e.currentTarget;
            target.style.transform = 'none';
            target.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.5)';
          }}
        >
          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem', color: 'var(--color-dark-brown)', textAlign: 'center' }}>
            Confidential – Previous Data Withheld Due to Cybersecurity Concerns
          </h3>
          <p style={{ fontWeight: 500, color: 'var(--color-dark-brown)', textAlign: 'center' }}>
            Confidential · Permanent Part-time
          </p>
          <p style={{ color: 'var(--color-dark-brown)', textAlign: 'center' }}>Jun 2009 – May 2023 · 14 yrs</p>
          <p style={{ color: 'var(--color-dark-brown)', textAlign: 'center' }}>Canada</p>
          <p style={{ marginTop: '0.75rem', fontStyle: 'italic', color: '#6c757d', fontSize: '0.95rem', textAlign: 'center' }}>
            Some previous roles and data have been withheld due to cybersecurity and data protection concerns. Full professional history can be shared upon request.
          </p>
          <ul style={{ marginTop: '1rem', paddingLeft: '2rem', listStyleType: 'disc', color: 'var(--color-dark-brown)', textAlign: 'justify' }}>
            <li style={{ marginBottom: '0.75rem' }}>
              Over 14 years in confidential roles across sensitive sectors, I led secure software development projects that balanced innovation with compliance. Working in environments governed by rigorous data privacy mandates, I consistently delivered mission-critical platforms while maintaining regulatory fidelity and audit transparency.
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              I engineered and deployed full-stack web applications and API services that modernized legacy infrastructure without compromising operational security. My codebases were subject to quarterly audits and penetration testing, and consistently received top marks for maintainability and resilience.
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              My impact was especially evident in stakeholder confidence and adoption metrics, where I acted as both a technical lead and security liaison, helping cross-functional teams understand and execute compliant design patterns under tight delivery timelines.
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              Collaborated with cybersecurity teams to enforce zero-trust architectures and role-based access controls across enterprise data systems.
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              Trained junior engineers and analysts in secure coding principles and compliance documentation, fostering a culture of accountability and vigilance in codebases and workflows.
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}


export default Experience
