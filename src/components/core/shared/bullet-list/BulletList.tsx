import { BulletListItem } from './BulletListItem';

export type BulletListItemProps = {
  items: string[];
};

export const BulletList: React.FC<BulletListItemProps> = ({ items }) => {
  return (
    <ul>
      {items.map((description, index) => (
        <BulletListItem bulletNumber={(index + 1)} description={description} />
      ))}
    </ul>
  );
};
