import classes from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={classes['loading-content']}>
      <span className={classes['spinner']}></span>
    </div>
  );
};