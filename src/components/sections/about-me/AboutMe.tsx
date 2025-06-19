import cls from 'clsx';
import { withTranslation } from 'react-i18next';
import type { WithTranslationProps } from '@/@types/withTranslationProps';
import { AnimateSection } from '@/components/core/shared/animation/AnimateSection';
import profilePhoto from '@assets/imgs/profile_photo_large.jpg';
import profileMediumPhoto from '@assets/imgs/profile_photo_medium.jpg';
import profileSmallPhoto from '@assets/imgs/profile_photo_small.jpg';
import { BREAKPOINTS_SIZES } from '@/constants/app.constant';

import classes from './AboutMe.module.css';

const _AboutMe: React.FC<WithTranslationProps> = ({ t }) => {
  return (
    <section
      id='About'
      key={`about_section`}
      className={cls(classes['about-me-section'])}
    >
      <AnimateSection>
        <div className='container p-0 m-md-auto'>
          <div className='row g-0 p-3 justify-content-center'>
            <h2 className='text-center text-lg-start mb-4'>
              {t('aboutMe.title')}
            </h2>
            <div className='row px-0 px-lg-3'>
              <div className='col-12 col-lg-4 col-xl-3'>
                <div className='d-flex align-items-center justify-content-center justify-content-lg-start'>
                  <div>
                    <picture>
                       <source
                        media={`(min-width: ${BREAKPOINTS_SIZES.LARGE}px)`}
                        srcSet={profilePhoto}
                      />
                      <source
                        media={`(min-width: ${BREAKPOINTS_SIZES.MEDIUM}px)`}
                        srcSet={profileMediumPhoto}
                      />
                      <img className={classes['img-fluid']} src={profileSmallPhoto} alt='Nelly Retana' width={166} height={221} />
                    </picture>
                  </div>
                </div>
              </div>
              <div className='col-12 col-lg-5 p-0 px-lg-3'>
                <div className='d-flex flex-column justify-content-center mt-3 mt-lg-0'>
                  <p className='mb-3'>{t('aboutMe.paragraph1')}</p>
                  <p className='mb-3'>{t('aboutMe.paragraph2')}</p>
                  <p>{t('aboutMe.paragraph3')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimateSection>
    </section>
  );
};

const AboutMe = withTranslation()(_AboutMe);
export default AboutMe;
