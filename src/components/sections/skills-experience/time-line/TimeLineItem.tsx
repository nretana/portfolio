
import cls from 'clsx';
import { IconBuildingSkyscraper } from '@tabler/icons-react';
import classes from './TimeLineItem.module.css';


export type TimeLineItemProps = {
  name: string;
  startDate: string;
  endDate: string;
  description: string;
}


export const TimeLineItem: React.FC<TimeLineItemProps> = ({
  name,
  startDate,
  endDate,
  description
}) => {
  return (
      <div className={cls(classes['time-line-item'])}>
        <div className={cls(classes['time-line-bullet'])}>
          <div className={cls('bullet', classes['bullet'])}>
            <IconBuildingSkyscraper />
          </div>
        </div>
        <div className={cls(classes['time-line-body'])}>
          <div className='d-flex mb-2'>
            <span className='heading-4 me-2'>{name}</span>
            <span className='fw-bold'>
              {startDate} - {endDate}
            </span>
          </div>
          <p>{description}</p>
        </div>
      </div>
  );
};
