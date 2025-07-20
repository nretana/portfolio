import cls from 'clsx';
import { useResponsive } from '@/hooks/useResponsive';
import { Menu } from '@/components/core/shared/menu/Menu';
import { OffCanvas } from '@/components/core/shared/offcanvas/OffCanvas';
import { LARGE, XLARGE } from '@/constants/app.constant';

import classes from './Header.module.css';
import { useState } from 'react';

export const Header = () => {
  const { currentScreenSize } = useResponsive();
  const [isOpen, setOpen] = useState<boolean>(false);

  const onClose = () => setOpen(false);

  return (
    <header>
      <div className='container-fluid px-0 mx-0'>
        <div className='row g-0'>
          <div className={cls(classes['menu-content'], 'px-4')}>
            {currentScreenSize === LARGE || currentScreenSize === XLARGE ? (
              <Menu />
            ) : (
              <OffCanvas title='Menu' isOpen={isOpen} setOpen={setOpen}>
                <Menu onClose={onClose} />
              </OffCanvas>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
