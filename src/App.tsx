import { Suspense, lazy } from 'react';
import cls from 'clsx';
import { LandingPage } from './components/sections/landing-page/LandingPage';
import { IconChevronUp } from '@tabler/icons-react';
import { useResponsive } from './hooks/useResponsive';
import { AppLayout } from './components/core/layouts/AppLayout';
const SkillsAndExperience = lazy(
  () => import('./components/sections/skills-experience/SkillsAndExperience')
);
const Services = lazy(() => import('./components/sections/services/Services'))
const Projects = lazy(() => import('./components/sections/projects/Projects'));
const AboutMe = lazy(() => import('./components/sections/about-me/AboutMe'));
const Contact = lazy(() => import('./components/sections/contact/Contact'));


import classes from './App.module.css';


const App = () => {
  useResponsive();

  return (
    <AppLayout>
      <Suspense fallback={<div></div>}>
        <main className={cls('container-fluid m-0 p-0', classes.app)}>
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
      </Suspense>

      <div className={cls('scroll-content', 'mb-4')}>
        <a href='#LandingPage' className='btn btn-primary rounded' aria-label='Back to top'>
          <IconChevronUp className='icon' />
        </a>
      </div>
    </AppLayout>
  );
};

export default App;
