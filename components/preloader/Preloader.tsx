'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const quotes = [
  {
    text: "The ability to observe without evaluating is the highest form of intelligence. - Jiddu Krishnamurthi",
    zIndex: 4,
    fontSize: "1.8rem",
    velocity: -20,
  },
  {
    text: "There are only two ways to live your life... - Albert Einstein",
    zIndex: 3,
    fontSize: "1.6rem",
    velocity: 15,
  },
  {
    text: "Don't quit. Suffer now and live the rest of your life as a champion. - Muhammad Ali",
    zIndex: 5,
    fontSize: "2rem",
    velocity: -25,
  },
  {
    text: "The secret of genius is to carry the spirit of the child... - Aldous Huxley",
    zIndex: 2,
    fontSize: "1.4rem",
    velocity: 10,
  },
  {
    text: "Be the change that you wish to see in the world. - Gandhi",
    zIndex: 4,
    fontSize: "1.8rem",
    velocity: -12,
  },
  {
    text: "The urges to improve ourselves... - Ramez Naam",
    zIndex: 1,
    fontSize: "1.2rem",
    velocity: 8,
  },
  {
    text: "When something is important enough... - Elon Musk",
    zIndex: 3,
    fontSize: "1.5rem",
    velocity: 18,
  },
  {
    text: "I didn’t have time to write you a short letter, so I wrote you a long one. - Mark Twain",
    zIndex: 3,
    fontSize: "1.5rem",
    velocity: -16,
  },
  {
    text: "I can be changed by what happens to me. But I refuse to be reduced by it. - Maya Angelou",
    zIndex: 4,
    fontSize: "1.7rem",
    velocity: 12,
  },
  {
    text: "The first principle is that you must not fool yourself and you are the easiest person to fool. - Richard Feynman",
    zIndex: 5,
    fontSize: "1.6rem",
    velocity: -14,
  },
  {
    text: "Prediction is very difficult, especially if it's about the future. The opposite of a fact is falsehood, but the opposite of one profound truth may very well be another profound truth. Your theory is crazy, but it's not crazy enough to be true. A physicist is just an atom's way of looking at itself. - Neils Bohr",
    zIndex: 2,
    fontSize: "1.3rem",
    velocity: 10,
  },
  {
    text: "An equation means nothing to me unless it expresses a thought of God. - Srinivasa Ramanujan",
    zIndex: 4,
    fontSize: "1.6rem",
    velocity: -18,
  }
];

const Preloader = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const quoteEls = containerRef.current.querySelectorAll('.quote');
      quoteEls.forEach((el) => {
        const velocity = {
          x: (Math.random() > 0.5 ? 1 : -1) * (Math.random() * 2 + 1), // between 1 and 3
          y: (Math.random() > 0.5 ? 1 : -1) * (Math.random() * 2 + 1),
        };

        const animateBounce = () => {
          const bounds = el.getBoundingClientRect();

          if (bounds.left <= 0 || bounds.right >= window.innerWidth) {
            velocity.x *= -1;
          }
          if (bounds.top <= 0 || bounds.bottom >= window.innerHeight) {
            velocity.y *= -1;
          }

          gsap.to(el, {
            x: `+=${velocity.x}`,
            y: `+=${velocity.y}`,
            duration: 0.1,
            ease: 'none',
            onComplete: animateBounce
          });
        };

        animateBounce();
      });

      gsap.to(containerRef.current, {
        opacity: 0,
        delay: 10,
        duration: 1,
        onComplete: () => {
          containerRef.current!.style.display = 'none';
          document.dispatchEvent(new Event('preloaderComplete'));
        }
      });
    }
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'var(--color-light-brown)',
        zIndex: 9999,
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
    >
      {quotes.map((quote, index) => {
        const fonts = [
          'var(--font-title)',
          'var(--font-heading)',
          'var(--font-body)',
          'var(--font-code)',
          'var(--font-button)',
          'var(--font-form)',
        ];
        const colors = [
          'var(--color-dark-brown)',
          'var(--color-deep-brown)',
          'var(--color-soft-brown)',
          'var(--color-medium-brown)',
          'var(--color-black)',
        ];
        const font = fonts[Math.floor(Math.random() * fonts.length)];
        const color = colors[Math.floor(Math.random() * colors.length)];

        return (
          <div
            key={index}
            className="quote"
            style={{
              position: 'absolute',
              top: `${(index * 15) % 90 + Math.random() * 5}%`,
              left: `${(index * 25) % 90 + Math.random() * 5}%`,
              fontSize: quote.fontSize,
              fontFamily: font,
              color: color,
              zIndex: quote.zIndex,
              opacity: 0.5 + 0.15 * quote.zIndex,
              fontWeight: 'normal',
              maxWidth: '30vw',
              whiteSpace: 'normal',
              wordBreak: 'break-word',
            }}
          >
            {quote.text.split(" - ").length === 2 ? (
              <>
                {quote.text.split(" - ")[0]}
                <strong> - {quote.text.split(" - ")[1]}</strong>
              </>
            ) : quote.text}
          </div>
        );
      })}
    </div>
  );
};

export default Preloader;
