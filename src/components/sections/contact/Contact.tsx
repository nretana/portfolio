import React from 'react';
import cls from 'clsx';
import type { WithTranslationProps } from '@/@types/withTranslationProps';
import { withTranslation } from 'react-i18next';
import { AnimateSection } from '@/components/core/shared/animation/AnimateSection';
import { CopyRight } from './CopyRight';
import {
  IconBrandGithubFilled,
  IconBrandLinkedinFilled,
  IconMailFilled,
} from '@tabler/icons-react';

import classes from './Contact.module.css';


const _Contact: React.FC<WithTranslationProps> = ({ t }) => {
  return (
    <section id='Contact' className={cls(classes['contact-section'])}>
      <AnimateSection>
        <div className='container p-0 m-md-auto'>
          <div className='row g-0 p-3 justify-content-center justify-content-lg-start'>
            <div className='col-12 col-lg-6'>
              <div className='d-flex align-items-center'>
                <div>
                  <h2 className='text-center text-lg-start mb-4'>
                    {t('contact.title')}
                  </h2>
                  <p className='mb-3'>{t('contact.paragraph1')}</p>
                  <p className='mb-4'>{t('contact.paragraph2')}</p>
                  <div>
                    <ul className='mb-3'>
                      <li className='d-flex align-items-center mb-3'>
                        <span className='bullet me-2'>
                          <IconBrandLinkedinFilled />
                        </span>
                        <a
                          href='https://www.linkedin.com/in/nretana'
                          target='_blank'
                        >
                          https://www.linkedin.com/in/nretana
                        </a>
                      </li>
                      <li className='d-flex align-items-center mb-3'>
                        <span className='bullet me-2'>
                          <IconBrandGithubFilled />
                        </span>
                        <a href='https://github.com/nretana' target='_blank'>
                          https://github.com/nretana
                        </a>
                      </li>
                      <li className='d-flex align-items-center'>
                        <span className='bullet me-2'>
                          <IconMailFilled />
                        </span>
                        <span>nretana1089@gmail.com</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimateSection>
       <CopyRight />
    </section>
  );
};

const Contact = withTranslation()(_Contact);
export default Contact;
