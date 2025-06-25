import React from 'react';
import Card from '@/components/core/shared/card/Card';
import { IconPhotoFilled } from '@tabler/icons-react';
import cls from 'clsx';

import classes from './ProjectCard.module.css';
import { withTranslation, WithTranslation } from 'react-i18next';

export type PricingCardProps = {
  title: string,
  description: string,
  tag: string,
  projectUrl: string,
  imgUrl: string,
  btnLabel: string
};

const _ProjectCard: React.FC<PricingCardProps & WithTranslation> = ({
  title,
  description,
  tag,
  projectUrl,
  imgUrl,
  t
}) => {
  const isImgRender = imgUrl.trim().length > 0;
  return (
    <Card className={cls(classes['project-card'], 'd-flex flex-column h-100 align-items-stretch')}>
      <Card.Header className={cls(classes['project-header-card'], (isImgRender ? classes['bg-none'] : ''))}>
        {isImgRender ? (
          <img src={imgUrl} alt={title} width={100} height={100} />
        ) : (
          <IconPhotoFilled className='icon' />
        )}
      </Card.Header>
      <Card.Body className={classes['project-body-card']}>
        <span className='heading-4'>{title}</span>
        <div className='tag my-2'>
          <span className='heading-5'>{tag}</span>
        </div>
        <p>{description}</p>
      </Card.Body>
      <Card.Footer>
        <a
          href={projectUrl}
          target='_blank'
          className='btn btn-primary d-block text-center'
        >
          {t('projects.btnCard')}
        </a>
      </Card.Footer>
    </Card>
  );
};

export const ProjectCard = withTranslation()(_ProjectCard);