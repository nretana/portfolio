import { Suspense, lazy } from 'react';
import cls from 'clsx';
import { LandingPage } from './components/sections/landing-page/LandingPage';
import { IconChevronUp } from '@tabler/icons-react';
import useLocale from './hooks/useLocale';
import { useResponsive } from './hooks/useResponsive';
import { motion } from 'framer-motion';

const SkillsAndExperience = lazy(
  () => import('./components/sections/skills-experience/SkillsAndExperience')
);
const Projects = lazy(() => import('./components/sections/projects/Projects'));
const AboutMe = lazy(() => import('./components/sections/about-me/AboutMe'));
const Contact = lazy(() => import('./components/sections/contact/Contact'));
const Footer = lazy(() => import('./components/core/template/footer/Footer'));
import { AppLayout } from './components/core/layouts/AppLayout';

const App = () => {
  useResponsive();

  return (
    <AppLayout>
      <Suspense fallback={<div></div>}>
        <main className={cls('container-fluid m-0 p-0 overflow-hidden')}>
          <LandingPage />
          <SkillsAndExperience />
          <Projects />
          <AboutMe />
          <Contact />
        </main>
        <Footer />
      </Suspense>
      <div className={cls('scroll-content', 'mb-4')}>
        <a href='#LandingPage' className='btn btn-primary rounded' aria-label='Back to top'>
          <IconChevronUp size={30} />
        </a>
      </div>
    </AppLayout>
  );
};

export default App;
