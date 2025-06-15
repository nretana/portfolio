import React, { useMemo } from 'react';
import cls from 'clsx';
import type { Project } from '@/@types/project';
import type { WithTranslationProps } from '@/@types/withTranslationProps';
import { withTranslation } from 'react-i18next';
import { useAppSelector } from '@/store';
import { ProjectCard } from './project-card/ProjectCard';
import { AnimateSection } from '@/components/core/shared/animation/AnimateSection';
import adminImg from '@assets/imgs/projects/admin_img.png';
import bookstoreImg from '@assets/imgs/projects/bookstore_img.png';
import calendarImg from '@assets/imgs/projects/calendar_img.png';
import kapImg from '@assets/imgs/projects/kap_img.png';

import classes from './Projects.module.css';


const projectList: Pick<Project, 'id' | 'projectUrl' | 'imgUrl'>[] = [
  {
    id: 'bookstore-project',
    projectUrl: 'https://github.com/nretana/bookstoreapp',
    imgUrl: bookstoreImg,
  },
  {
    id: 'calendar-project',
    projectUrl: 'https://github.com/nretana/calendarapp',
    imgUrl: calendarImg,
  },
  {
    id: 'kapapp-project',
    projectUrl: 'https://github.com/nretana/kapapp',
    imgUrl: kapImg,
  },
  {
    id: 'monoapp-project',
    projectUrl: 'https://github.com/nretana/monolithic-app',
    imgUrl: adminImg,
  },
  {
    id: 'micronfrontend-usecase',
    projectUrl: 'https://github.com/nretana',
    imgUrl: '',
  },
  {
    id: 'pandacss-usecase',
    projectUrl: 'https://github.com/nretana',
    imgUrl: '',
  },
];

export const _Projects: React.FC<WithTranslationProps> = ({ t }) => {
  const currentLang = useAppSelector((state) => state.locale.currentLang);
  const projects = t('projects.projects', { returnObjects: true }) as Project[];
  const allprojects = useMemo(
    () =>
      projects.map((project, index) => ({ ...project, ...projectList[index] })),
    [currentLang]
  );

  return (
    <section id='Projects' className={cls(classes['projects-section'])}>
      <AnimateSection>
        <div className='container p-0 m-md-auto'>
          <div className='row g-0 p-3 justify-content-center'>
            <div className='col-12'>
              <h2 className='text-center text-lg-start mb-4'>
                {t('projects.title')}
              </h2>
              <div className='row p-0 mb-4'>
                <div className='col-12'>
                  <p>{t('projects.paragraph1')}</p>
                </div>
              </div>
              <div className='row g-3'>
                {allprojects.map((project, index) => (
                  <div
                    key={`project_${index}`}
                    className='col-12 col-md-4 col-lg-3'
                  >
                    <ProjectCard {...project} />{' '}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </AnimateSection>
    </section>
  );
};

const Projects = withTranslation()(_Projects);
export default Projects;
