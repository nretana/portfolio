import React from 'react';
import cls from 'clsx';
import { withTranslation } from 'react-i18next';
import type { WithTranslationProps } from '@/@types/withTranslationProps';
import { Menu } from '@/components/core/shared/menu/Menu';
import { AnimateSection } from '@/components/core/shared/animation/AnimateSection';
import chevronIcon from '@assets/imgs/chevron_icon.svg';

import classes from './LandingPage.module.css';


const _LandingPage: React.FC<WithTranslationProps> = ({ t }) => {
  return (
    <section id='LandingPage' className={cls(classes['landing-page'])}>
      <AnimateSection>
        <div className='container h-100 m-0 p-0 m-md-auto'>
          <div className={classes['menu-content']}>
            <div className='ms-3'>
              <Menu />
            </div>
          </div>
          <div className='row g-0 px-4 m-0 h-100'>
            <div className='col-12 col-xxl-8 h-100'>
              <div className='d-flex justify-content-center align-items-center h-100'>
                <div className={classes['grid-hero-content']}>
                  <div className={classes['grid-cell-1']}>
                    <img
                      src={chevronIcon}
                      alt=''
                      className={classes['img-fluid']}
                    />
                  </div>
                  <div
                    className={cls(
                      classes['grid-cell-2'],
                      classes['type-writing-content-2']
                    )}
                  >
                    <h1>
                      <span>{t('landingPage.heroTitle')}</span>
                    </h1>
                  </div>
                  <p className={classes['grid-cell-4']}>
                    {t('landingPage.heroText')}
                  </p>
                </div>
              </div>
            </div>
            <div className='d-none d-lg-block col-5'></div>
          </div>
        </div>
      </AnimateSection>
      <div className={'bg-img'}></div>
    </section>
  );
};

export const LandingPage = withTranslation()(_LandingPage);
