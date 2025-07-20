import cls from 'clsx';
import { Tooltip } from '../../tooltip/Tooltip';
import type { Icon } from '@tabler/icons-react';
import { Link } from 'react-aria-components';
import { useAppSelector } from '@/store';
import { LARGE, XLARGE } from '@/constants/app.constant';

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
  const currentScreenSize = useAppSelector(
    (state) => state.theme.currentScreenSize
  );
  const isSmallDevice =
    currentScreenSize !== LARGE && currentScreenSize !== XLARGE;
  const Icon = icon as Icon;

  return (
    <li className={cls(classes['menu-item'], 'mb-2')}>
      {children ? (
        children
      ) : (
        <>
          {title && !isSmallDevice ? (
            <Tooltip label={title} placement='right'>
              <Link
                className={cls('btn', classes['btn'])}
                href={linkUrl}
                aria-label={title}
              >
                <Icon className='icon' />
              </Link>
            </Tooltip>
          ) : (
            <div className='py-3'>
              <div className='d-flex align-items-center'>
                <Icon className='icon px-3' />
                <Link className='m-0' href={linkUrl} aria-label={title}>
                  {title}
                </Link>
              </div>
            </div>
          )}
        </>
      )}
    </li>
  );
};
