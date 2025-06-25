import type { Bullet } from '@/@types/bullet';
import type { WithTranslationProps } from '@/@types/withTranslationProps';
import { BulletList } from '@/components/core/shared/bullet-list/BulletList';
import { AnimateSection } from '@/components/core/shared/animation/AnimateSection';
import { withTranslation } from 'react-i18next';

import classes from './Services.module.css';


const items: Bullet[] = [
  { title: 'Scalable UI Component Development', description: 'Build modular, reusable UI components tailored for performance and long-term maintainability.' },
  { title: 'API Integration Services', description: 'Seamlessly connect frontend applications with RESTful or GraphQL APIs for dynamic, data-driven interfaces.' },
  { title: 'Unit Testing Integration', description: 'Set up and integrate robust unit testing frameworks to ensure code quality and reduce regressions.' },
  { title: 'Web Application Performance Optimization', description: 'Improve load times, responsiveness, and core web vitals through targeted frontend performance enhancements.' },
  { title: 'Bug Fixes & Component Enhancements', description: 'Identify and resolve UI bugs, and enhance existing components to meet evolving requirements and improve UX.' },
  { title: 'Frontend Architecture Redesign', description: 'Redesign application architecture for scalability, cleaner code structure, and easier team collaboration.' },
  { title: 'Web Design Systems & Style Guide Development', description: 'Create consistent, scalable design systems and style guides that unify branding and UI standards.' }
];

const _Services: React.FC<WithTranslationProps> = ({ t }) => {
  return (
    <section id='Services' className={classes['services-section']}>
      <AnimateSection>
        <div className='container p-0 m-md-auto'>
          <div className='row g-0 p-3 justify-content-center'>
            <div className='col-12'>
              <h2 className='text-center text-lg-start mb-4'>{t('services.title')}</h2>
              <div className='row p-0'>
                <div className='col-12 col-lg-6'>
                  <BulletList items={items} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimateSection>
    </section>
  );
};

const Services = withTranslation()(_Services);
export default Services;
