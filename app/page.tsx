'use client';
import { useEffect } from 'react';
import Preloader from '@/components/preloader/Preloader';
import Index from '@/components/navigation/Index';
import Education from '@/components/education/education';
import Projects from '@/components/projects/projects';
import Experience from '@/components/experience/experience';
export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const timer = setTimeout(() => {
      document.body.style.overflow = originalOverflow;
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Preloader />
      <Index />
      <Education />
      <Projects />
      <Experience />
    </>
  );
}
