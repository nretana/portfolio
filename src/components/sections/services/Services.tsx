import type { BulletItem } from '@/@types/bullet';
import type { WithTranslationProps } from '@/@types/withTranslationProps';
import { BulletList } from '@/components/core/shared/bullet-list/BulletList';
import { AnimateSection } from '@/components/core/shared/animation/AnimateSection';
import { withTranslation } from 'react-i18next';

import classes from './Services.module.css';


const _Services: React.FC<WithTranslationProps> = ({ t }) => {

  const serviceList = t('services.serviceList', { returnObjects: true }) as BulletItem[];

  return (
    <section id='Services' className={classes['services-section']}>
      <AnimateSection>
        <div className='container p-0 m-md-auto'>
          <div className='row g-0 p-3 justify-content-center'>
            <div className='col-12'>
              <h2 className='text-center text-lg-start mb-4'>{t('services.title')}</h2>
              <div className='row p-0'>
                <div className='col-12 col-lg-6'>
                  <BulletList items={serviceList} />
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
