import type { Bullet } from '@/@types/bullet';
import {
  IconPackage,
  IconStackBack,
} from '@tabler/icons-react';

export type BulletListItemProps = { uuid?: string } & Bullet;

export const BulletListItem: React.FC<BulletListItemProps> = ({
  title,
  description,
}) => {
  return (
    <li className='d-flex mb-3'>
      <span className='bullet me-2 me-lg-3 fw-bold flex-shrink-0'>
        <IconStackBack className='icon' />
      </span>
      <span>
        { title && <span className='align-self-center text-wrap fw-bold'>{title}</span> }
        <p>{description}</p>
      </span>
    </li>
  );
};
