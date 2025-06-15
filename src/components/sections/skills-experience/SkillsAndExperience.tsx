import cls from 'clsx';
import { Timeline } from './time-line/TimeLine';
import { Tools } from './tools/Tools';
import { withTranslation } from 'react-i18next';
import { WithTranslationProps } from '@/@types/withTranslationProps';
import { AnimateSection } from '@/components/core/shared/animation/AnimateSection';

import classes from './SkillsAndExperience.module.css';


const _SkillsAndExperience: React.FC<WithTranslationProps> = ({ t }) => {
  return (
    <section
      id='SkillsExperience'
      className={cls(classes['skills-experience-section'])}
    >
      <AnimateSection>
        <div className='container p-0 m-md-auto'>
          <div className='row g-0 p-3 m-0 p-0'>
            <div className='col-12 col-xl-7'>
              <h2 className='text-center text-lg-start mb-4'>
                {t('skillsExperience.title')}
              </h2>
              <div className='row g-0'>
                <div className='col-12'>
                  <p className='mb-4'>{t('skillsExperience.paragraph1')}</p>
                </div>
              </div>
              <Timeline />
              <Tools />
            </div>
          </div>
        </div>
      </AnimateSection>
    </section>
  );
};

const SkillsAndExperience = withTranslation()(_SkillsAndExperience);
export default SkillsAndExperience;
