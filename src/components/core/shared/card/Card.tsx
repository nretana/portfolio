import { ReactNode } from 'react';
import { CardHeader } from './CardHeader';
import { CardBody } from './CardBody';
import { CardFooter } from './CardFooter';
import cls from 'clsx';

import '@assets/css/components/card.css'


export type CardProps = {
  className?: string
  children?: ReactNode
  width?: number
};

const Card: React.FC<CardProps> = ({ className, children, width }) => {
  return (<div className={cls('card', className)} style={{ width }}>
           {children}
          </div>);
};

export default Object.assign(Card, {
    Header: CardHeader,
    Body: CardBody,
    Footer: CardFooter
});