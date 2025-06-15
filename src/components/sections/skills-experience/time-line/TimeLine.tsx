import { Company } from '@/@types/company';
import { TimeLineItem } from './TimeLineItem';
import React from 'react';
import type { WithTranslationProps } from '@/@types/withTranslationProps';
import { withTranslation } from 'react-i18next';


const _TimeLine: React.FC<WithTranslationProps> = ({ t }) => {

  const companies: Company[] = t('skillsExperience.companies', { returnObjects: true }) as Company[];

  return (
    <div className='row m-0 p-0 mb-3'>
      <div className='col-12'>
        {companies.map((company: Company, index) => (
          <TimeLineItem key={`company_${index}`} {...company} />
        ))}
      </div>
    </div>
  );
};

export const Timeline = withTranslation()(_TimeLine);
