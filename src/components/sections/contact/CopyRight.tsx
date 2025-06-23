
import classes from './CopyRight.module.css'

export const CopyRight = () => {
  return (
    <div className={classes['copyright-content']}>
      <span className='copyright-text'>
        © {new Date().getFullYear()} Nelly Retana, All rights reserved
      </span>
    </div>
  );
};
