import { MenuItem } from './menu-item/MenuItem'
import { IconDeviceImacFilled,
         IconFoldersFilled, 
         IconBoltFilled, 
         IconMailFilled, 
         IconUserFilled } from '@tabler/icons-react'
import { LangMenu } from '../lang-menu/LangMenu';
import { withTranslation } from 'react-i18next';
import type { WithTranslationProps } from '@/@types/withTranslationProps';

import classes from './Menu.module.css';


export const _Menu: React.FC<WithTranslationProps> = ({ t }) => {

    return(<nav>
                <ul className={classes['main-menu']}>
                    <MenuItem title={t('nav.skillsExperience')} icon={IconBoltFilled} linkUrl='#SkillsExperience' />
                    <MenuItem title={t('nav.projects')} icon={IconFoldersFilled} linkUrl='#Projects' />
                    <MenuItem title={t('nav.aboutMe')} icon={IconUserFilled} linkUrl='#About' />
                    <MenuItem title={t('nav.contact')} icon={IconMailFilled} linkUrl='#Contact' />
                    <MenuItem title=''>
                        <LangMenu />
                    </MenuItem>
                </ul>
          </nav>)
}

export const Menu = withTranslation()(_Menu);