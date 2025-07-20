import { Suspense, lazy, useRef } from 'react';
import cls from 'clsx';
import { Button } from 'react-aria-components';
import { LandingPage } from './components/sections/landing-page/LandingPage';
import { IconChevronUp } from '@tabler/icons-react';
import { AppLayout } from './components/core/layouts/AppLayout';
import { Header } from './components/core/template/header/Header';

const SkillsAndExperience = lazy(
  () => import('./components/sections/skills-experience/SkillsAndExperience')
);
const Services = lazy(() => import('./components/sections/services/Services'));
const Projects = lazy(() => import('./components/sections/projects/Projects'));
const AboutMe = lazy(() => import('./components/sections/about-me/AboutMe'));
const Contact = lazy(() => import('./components/sections/contact/Contact'));

import classes from './App.module.css';

const App = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const goBackToTop = () => {
    window.history.replaceState('', '', window.location.origin);
    containerRef?.current?.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <AppLayout>
      <Suspense fallback={<div></div>}>
        <Header />
        <main
          className={cls('container-fluid m-0 p-0', classes.app)}
          ref={containerRef}
        >
          <div className={classes['app-section']}>
            <LandingPage />
          </div>
          <div className={classes['app-section']}>
            <Services />
          </div>
          <div className={classes['app-section']}>
            <SkillsAndExperience />
          </div>
          <div className={classes['app-section']}>
            <Projects />
          </div>
          <div className={classes['app-section']}>
            <AboutMe />
          </div>
          <div className={classes['app-section']}>
            <Contact />
          </div>
        </main>
        <div className='scroll-content mb-4 px-4'>
          <Button className='btn btn-primary rounded' aria-label='Back to top' onClick={goBackToTop}>
            <IconChevronUp className='icon' />
          </Button>
        </div>
      </Suspense>
    </AppLayout>
  );
};

export default App;
