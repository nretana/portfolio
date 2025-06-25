import cls from 'clsx';
import { IconWorld } from '@tabler/icons-react';
import { Popover } from '../popover/Popover';
import { useAppDispatch } from '@/store';
import { setLang } from '@/store/slices/localeSlice';
import { useAppSelector } from '@/store';
import { withTranslation } from 'react-i18next';
import type { WithTranslationProps } from '@/@types/withTranslationProps';

import classes from './LangMenu.module.css';

const _LangMenu: React.FC<WithTranslationProps> = ({ t }) => {
  const dispatch = useAppDispatch();
  const currentScreenSize = useAppSelector(
    (state) => state.theme.currentScreenSize
  );

  const onChangeLang = (lang: string) => {
    dispatch(setLang(lang));
  };

  const onMenuItemKeyDown = (
    e: React.KeyboardEvent<HTMLLIElement>,
    lang: string
  ) => {
    if (e.key === 'Enter') {
      onChangeLang(lang);
    }
  };

  const content = (
    <ul
      tabIndex={-1}
      className={cls(classes['lang-menu-content'], 'my-2')}
    >
      <li
        tabIndex={0}
        className={classes['lang-menu-item']}
        onClick={() => onChangeLang('en')}
        onKeyDown={(e) => onMenuItemKeyDown(e, 'en')}
      >
        {t('nav.langMenu.english')}
      </li>
      <li
        
        tabIndex={0}
        className={classes['lang-menu-item']}
        onClick={() => onChangeLang('es')}
        onKeyDown={(e) => onMenuItemKeyDown(e, 'es')}
      >
        {t('nav.langMenu.spanish')}
      </li>
    </ul>
  );

  return (
    <div className={classes['lang-menu']}>
      <Popover
        target={{
          className: classes['lang-toggle'],
          content: <IconWorld className='icon' aria-label='Language' />
        }}
        dialogSection={{ className: classes['lang-menu'], content }}
        placement={
          currentScreenSize !== 'large' && currentScreenSize !== 'xlarge'
            ? 'bottom'
            : 'left'
        }
      />
    </div>
  );
};

export const LangMenu = withTranslation()(_LangMenu);
