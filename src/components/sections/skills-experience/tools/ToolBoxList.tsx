import ToolBoxItem from './ToolBoxItem';
import { ToolBox } from '@/@types/toolbox';

export type ToolboxListProps = {
  items: ToolBox[];
};

export const ToolBoxList: React.FC<ToolboxListProps> = ({ items }) => {
  return (
    <>
      {items.length > 0 &&
        items.map((item, index) => (
          <ToolBoxItem key={`toolbox_${index}`} {...item} />
        ))}
    </>
  );
};
