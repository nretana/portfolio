import React from 'react';
import { ToolBox } from '@/@types/toolbox';

import classes from './ToolBoxItem.module.css';

export type ToolBoxProps = ToolBox;

const ToolBoxItem: React.FC<ToolBoxProps> = ({ label, imgUrl }) => {
  return (
    <img
      className='img-fluid'
      src={imgUrl}
      alt={label}
      title={label}
      width={60}
      height={60}
    />
  );
};

export default ToolBoxItem;
