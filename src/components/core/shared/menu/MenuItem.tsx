import { Tooltip } from '../tooltip/Tooltip';
import type { Icon } from '@tabler/icons-react';
import cls from 'clsx';
import { Link } from 'react-aria-components';
import { useAppSelector } from '@/store';

import classes from './MenuItem.module.css';

export type MenuItemProps = {
  title?: string;
  icon?: Icon;
  linkUrl?: string;
  children?: React.ReactNode;
};

export const MenuItem: React.FC<MenuItemProps> = ({
  title,
  icon,
  linkUrl,
  children,
}) => {
  const currentScreenSize = useAppSelector(state => state.theme.currentScreenSize);
  const Icon = icon as Icon;

  return (
    <li className={cls(classes['menu-item'], 'mb-2')}>
      {children ? (
        children
      ) : (
        <>
          {title ? (
            <Tooltip label={title} placement={(currentScreenSize !== 'large' && currentScreenSize !== 'xlarge') ? 'bottom' : 'right'}>
              <Link className='btn' href={linkUrl} aria-label={title}>
                <Icon className='icon' />
              </Link>
            </Tooltip>
          ) : (
            <div>
              <a className='btn' href={linkUrl}>
                <Icon className='icon' />
              </a>
            </div>
          )}
        </>
      )}
    </li>
  );
};
