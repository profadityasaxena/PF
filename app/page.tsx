import TopNavigation from '../components/navigation/topnavigation'
import BarNavigation from '../components/navigation/barnavigation'
import Education from '@/components/education/education';
import Projects from '@/components/projects/projects';
import Experience
 from '@/components/experience/experience';
export default function Home() {
  return (
    <>
      <TopNavigation />
      <BarNavigation />
      <Education />
      <Projects />
      <Experience />

    </>
  );
}
