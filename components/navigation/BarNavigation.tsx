'use client';
import React, { useEffect, useRef, useState, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import '../../app/globals.css'; // Ensure global styles are imported
import Image from 'next/image';
import menuImage1 from './assets/menu-item-1.png';
import menuImage2 from './assets/menu-item-2.png';
import menuImage3 from './assets/menu-item-3.png';
import menuImage4 from './assets/menu-item-4.png';
import menuImage5 from './assets/menu-item-5.png';

const BarNavigation = () => {
    const barRefs = useRef([]);
  const contentRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const [countdown, setCountdown] = useState(null);
  const [showDetail, setShowDetail] = useState(false);

  useEffect(() => {
    // Animate bars sliding in from the left
    gsap.from(barRefs.current, {
      x: -50,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
      ease: 'power2.out'
    });

    // Fade in the main content
    gsap.from(contentRef.current, {
      opacity: 0,
      delay: 0.6,
      duration: 1,
      ease: 'power1.out'
    });

    // Animate text blocks
    gsap.from('.text-block', {
      opacity: 0,
      y: 20,
      duration: 1,
      stagger: 0.2,
      delay: 1,
      ease: 'power2.out'
    });
  }, []);

  const handleBarClick = (index) => {
    setActiveIndex(index);
    const timeline = gsap.timeline();
    timeline
      .set(barRefs.current[index], {
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100vh',
        zIndex: 10000,
        pointerEvents: 'none',
      })
      .to(barRefs.current[index], {
        width: '100vw',
        duration: 1.5,
        ease: 'power2.inOut'
      })
      .to(
        barRefs.current.filter((_, i) => i !== index),
        {
          opacity: 0,
          duration: 0.6,
          ease: 'power1.out'
        },
        '-=1.2'
      )
      .add(() => setCountdown('3'))
      .to({}, { duration: 0.5 })
      .add(() => setCountdown('2'))
      .to({}, { duration: 0.5 })
      .add(() => setCountdown('1'))
      .to({}, { duration: 0.5 })
      .add(() => setCountdown('Launching...'))
      .to({}, { duration: 0.5 })
      .add(() => {
        setCountdown(null);
        setShowDetail(true);
      });
  };

  return (
    <div className="fixed top-[60px] left-0 h-screen w-screen bg-white z-[9999] overflow-y-auto flex" style={{ width: '100vw !important' }}>
      {/* Static vertical bars */}
      <div className="ml-[0.5em] mr-[3px]" ref={el => barRefs.current[0] = el} onClick={() => handleBarClick(0)}>
        <div
          className="w-[30px] h-full border-r flex items-center justify-center transition-colors duration-200"
          style={{
            backgroundColor: 'var(--color-light-brown)',
            borderColor: 'var(--color-cream)'
          }}
        >
          <span
            className="-rotate-90 tracking-wide transition-none"
            style={{
              color: 'var(--color-dark-brown)',
              fontSize: '0.875rem',
              fontWeight: 500,
              fontFamily: "'Georgia', 'Times New Roman', serif"
            }}
          >
            Home
          </span>
        </div>
      </div>
      <div className="ml-[0.5em] mr-[3px]" ref={el => barRefs.current[1] = el} onClick={() => handleBarClick(1)}>
        <div
          className="w-[30px] h-full border-r flex items-center justify-center transition-colors duration-200"
          style={{
            backgroundColor: 'var(--color-light-brown)',
            borderColor: 'var(--color-cream)'
          }}
        >
          <span
            className="-rotate-90 tracking-wide transition-none"
            style={{
              color: 'var(--color-dark-brown)',
              fontSize: '0.875rem',
              fontWeight: 500,
              fontFamily: "'Georgia', 'Times New Roman', serif"
            }}
          >
            About
          </span>
        </div>
      </div>
      <div className="ml-[0.5em] mr-[3px]" ref={el => barRefs.current[2] = el} onClick={() => handleBarClick(2)}>
        <div
          className="w-[30px] h-full border-r flex items-center justify-center transition-colors duration-200"
          style={{
            backgroundColor: 'var(--color-light-brown)',
            borderColor: 'var(--color-cream)'
          }}
        >
          <span
            className="-rotate-90 tracking-wide transition-none"
            style={{
              color: 'var(--color-dark-brown)',
              fontSize: '0.875rem',
              fontWeight: 500,
              fontFamily: "'Georgia', 'Times New Roman', serif"
            }}
          >
            Projects
          </span>
        </div>
      </div>
      <div className="ml-[0.5em] mr-[3px]" ref={el => barRefs.current[3] = el} onClick={() => handleBarClick(3)}>
        <div
          className="w-[30px] h-full border-r flex items-center justify-center transition-colors duration-200"
          style={{
            backgroundColor: 'var(--color-light-brown)',
            borderColor: 'var(--color-cream)'
          }}
        >
          <span
            className="-rotate-90 tracking-wide transition-none"
            style={{
              color: 'var(--color-dark-brown)',
              fontSize: '0.875rem',
              fontWeight: 500,
              fontFamily: "'Georgia', 'Times New Roman', serif"
            }}
          >
            Contact
          </span>
        </div>
      </div>
      <div className="ml-[0.5em]" ref={el => barRefs.current[4] = el} onClick={() => handleBarClick(4)}>
        <div
          className="w-[30px] h-full border-r flex items-center justify-center transition-colors duration-200"
          style={{
            backgroundColor: 'var(--color-light-brown)',
            borderColor: 'var(--color-cream)'
          }}
        >
          <span
            className="-rotate-90 tracking-wide transition-none"
            style={{
              color: 'var(--color-dark-brown)',
              fontSize: '0.875rem',
              fontWeight: 500,
              fontFamily: "'Georgia', 'Times New Roman', serif"
            }}
          >
            Resume
          </span>
        </div>
      </div>

      {/* Right-side background and text */}
      <div
        ref={contentRef}
        className="flex-1 h-full overflow-y-auto transition-none bg-[var(--color-white)] px-4 sm:px-8 md:px-12 lg:px-20 w-full max-w-full box-border pt-4"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-[var(--color-dark-brown)] font-serif text-sm sm:text-[0.95rem] w-full max-w-7xl mx-auto box-border px-6 sm:px-12 md:px-20 lg:px-32 justify-items-center">

          {/* Japanese */}
          <div className="space-y-3 w-full break-words text-block">
            <h2 className="text-xl font-bold text-[var(--color-soft-brown)] tracking-tight">生き甲斐</h2>
            <p className="text-xs sm:text-sm text-balance">
              <span className="font-semibold">Ikigai</span> (生き甲斐) は「生きる意味」または「生きがい」と訳される日本語の概念です。
              これは、あなたが愛すること、得意なこと、世界が必要としていること、そして報酬を得られることが交差する地点を意味します。
            </p>
          </div>

          {/* English */}
          <div className="space-y-3 w-full break-words text-block">
            <h2 className="text-xl font-bold text-[var(--color-soft-brown)] tracking-tight">What’s My Ikigai</h2>
            <p className="text-xs sm:text-sm text-balance">
              <span className="font-semibold">Ikigai</span> (生き甲斐) is a Japanese concept meaning <em>“a reason for being.”</em>
              It is the convergence of what you love, what you are good at, what the world needs, and what you can be paid for.
              This philosophy deeply aligns with my journey as a technology strategist, educator, and creator committed to meaningful, future-forward contributions.
            </p>
            <p className="text-xs sm:text-sm text-balance">
              My career is a continuous pursuit of purpose, innovation, and positive impact.
              With over 12 years of experience across cloud computing, AI, software engineering, and education,
              my resume reflects a passion for lifelong learning and transformational leadership.
            </p>
          </div>

          {/* French */}
          <div className="space-y-3 w-full break-words text-block">
            <h2 className="text-xl font-bold text-[var(--color-soft-brown)] tracking-tight">Mon Ikigai</h2>
            <p className="text-xs sm:text-sm text-balance">
              <span className="font-semibold">Ikigai</span> (生き甲斐) est un mot japonais qui veut dire <em>« une raison d’être »</em>.
              C’est quand tu fais ce que tu aimes, ce dans quoi tu es bon, ce dont le monde a besoin et ce pour quoi tu peux être payé.
              Moi, ça correspond bien à mon parcours : je travaille dans la tech, j'enseigne, et je crée avec passion.
            </p>
            <p className="text-xs sm:text-sm text-balance">
              Je cherche toujours à faire quelque chose de positif et utile.
              Avec plus de 12 ans d’expérience dans le cloud, l’intelligence artificielle, le développement logiciel et l’enseignement,
              mon parcours reflète mon envie d’apprendre et de partager.
            </p>
          </div>

          {/* Hindi */}
          <div className="space-y-3 w-full break-words text-block">
            <h2 className="text-xl font-bold text-[var(--color-soft-brown)] tracking-tight">मेरा इकिगाई</h2>
            <p className="text-xs sm:text-sm text-balance">
              <span className="font-semibold">Ikigai</span> (生き甲斐) एक जापानी शब्द है जिसका मतलब है <em>“जीने का कारण।”</em>
              जब आप वो करते हैं जो आपको पसंद है, जिसमें आप अच्छे हैं, जिसकी दुनिया को ज़रूरत है, और जिससे आप कमाई भी कर सकते हैं — वही है इकिगाई।
            </p>
            <p className="text-xs sm:text-sm text-balance">
              मेरी ज़िंदगी का मकसद है कुछ नया सीखना और दूसरों को सिखाना।
              टेक्नोलॉजी, एआई, सॉफ्टवेयर और एजुकेशन में 12+ साल के अनुभव के साथ,
              मैं समाज में कुछ सकारात्मक बदलाव लाना चाहता हूँ।
            </p>
          </div>

          {/* Spanish */}
          <div className="space-y-3 w-full break-words text-block">
            <h2 className="text-xl font-bold text-[var(--color-soft-brown)] tracking-tight">Mi Ikigai</h2>
            <p className="text-xs sm:text-sm text-balance">
              <span className="font-semibold">Ikigai</span> (生き甲斐) es una palabra japonesa que significa <em>“una razón para vivir.”</em>
              Es donde se unen lo que amas, lo que sabes hacer bien, lo que el mundo necesita y por lo que te pueden pagar.
            </p>
            <p className="text-xs sm:text-sm text-balance">
              A mí me encanta aprender y enseñar.
              Con más de 12 años de experiencia en tecnología, inteligencia artificial, desarrollo de software y educación,
              busco siempre aportar algo positivo a la sociedad.
            </p>
          </div>

          {/* Portuguese */}
          <div className="space-y-3 w-full break-words text-block">
            <h2 className="text-xl font-bold text-[var(--color-soft-brown)] tracking-tight">Meu Ikigai</h2>
            <p className="text-xs sm:text-sm text-balance">
              <span className="font-semibold">Ikigai</span> (生き甲斐) é uma palavra japonesa que significa <em>“uma razão para viver.”</em>
              É onde se encontra o que você ama, o que você sabe fazer bem, o que o mundo precisa e pelo que você pode ser pago.
            </p>
            <p className="text-xs sm:text-sm text-balance">
              Eu adoro aprender e ensinar.
              Com mais de 12 anos de experiência em tecnologia, inteligência artificial, desenvolvimento de software e educação,
              meu objetivo é sempre contribuir de forma positiva para a sociedade.
            </p>
          </div>

        </div>
      </div>
      {countdown && (
        <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-[var(--color-dark-brown)] bg-white z-50">
          {countdown}
        </div>
      )}
      {showDetail && (
        <div className="absolute inset-0 flex flex-col items-center justify-start bg-white px-10 py-10 z-40 text-center overflow-y-auto min-h-screen pb-[3em] pl-[4em]">
          <h2 className="text-2xl font-bold mb-6 text-[var(--color-soft-brown)]">
            {{
              0: 'Welcome',
              1: 'About Me',
              2: 'Projects',
              3: 'Get In Touch',
              4: 'Resume'
            }[activeIndex] || 'Detail Title'}
          </h2>
          <Image
            src={
              [menuImage1, menuImage2, menuImage3, menuImage4, menuImage5][activeIndex] || menuImage1
            }
            alt="Menu Item Visual"
            className="w-[60%] h-[15%] object-contain mb-6"
            priority
          />
          <p className="max-w-xl text-sm text-[var(--color-dark-brown)] font-serif whitespace-pre-line">
            {{
              0: `Welcome to my portfolio! I’m Aditya Saxena — an engineer, educator, and builder dedicated to creating meaningful, human-centered technology. With a foundation rooted in curiosity and a career shaped by experience across cloud computing, AI, education, and software architecture, I’ve spent over a decade transforming complex ideas into scalable digital systems.

This portfolio is more than a showcase — it's a story. A story of projects that span disciplines, of challenges solved through code and collaboration, and of a commitment to continuous learning. Thank you for visiting.`,
              1: `I am a technology strategist and educator with a passion for building responsible, impactful systems. My background includes over 12 years of designing and scaling digital platforms across sectors such as education, cloud infrastructure, and artificial intelligence. Through academic leadership and hands-on technical expertise, I strive to empower others and drive ethical innovation.

My journey is guided by a strong belief in the transformative power of open knowledge and thoughtful design. Whether in the classroom or on a product team, I bring systems thinking, empathy, and a deep commitment to sustainable, human-centered development.`,
              2: `Each project featured here reflects my commitment to technical excellence and practical value. From containerized microservices on the cloud to interactive AI-driven applications, I prioritize architecture that is robust, accessible, and secure.

Whether developing scalable APIs, orchestrating serverless workflows, or training intelligent models, my work is grounded in curiosity, experimentation, and a dedication to user experience. I enjoy solving complex problems by blending modern technologies with elegant design principles.`,
              3: `I value meaningful conversations and interdisciplinary collaboration. Whether you're a fellow technologist, entrepreneur, researcher, or simply curious — I welcome the opportunity to connect.

If something in this portfolio resonates with you, feel free to reach out. I am always open to exploring new ideas, sharing insights, or discussing how we might build something valuable together. Let’s connect and shape the future of innovation.`,
              4: `Due to cybersecurity concerns, I do not share my resume directly on this platform. However, I’d be happy to tell you more about my background, experiences, and accomplishments through a direct conversation.

If you're interested in collaborating or learning more about my work, please drop me an email. I look forward to connecting.`
            }[activeIndex] || ''}
          </p>
          <button
            className="mt-10 px-4 py-2 text-sm border border-[var(--color-dark-brown)] text-[var(--color-dark-brown)] hover:bg-[var(--color-cream)]"
            onClick={(e) => {
              e.stopPropagation();
              setShowDetail(false);
              setActiveIndex(null);
              barRefs.current.forEach((bar) => gsap.set(bar, { clearProps: 'all', pointerEvents: 'auto' }));
            }}
          >
            Return
          </button>
        </div>
      )}
    </div>
  );
};

export default BarNavigation;
