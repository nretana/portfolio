import React from 'react';
import classes from './Footer.module.css';
import { WithTranslationProps } from '@/@types/withTranslationProps';
import { withTranslation } from 'react-i18next';

const _Footer: React.FC<WithTranslationProps> = ({ t }) => {
  return (
    <footer>
      <div className={classes['footer-text']}>
        © {new Date().getFullYear()} Nelly Retana, {t('footer.copyright')}
      </div>
    </footer>
  );
};

const Footer = withTranslation()(_Footer);
export default Footer;
