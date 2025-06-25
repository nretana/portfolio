import type { Bullet } from '@/@types/bullet';
import { randomId } from '@/utils/randomId';
import { BulletListItem } from './BulletListItem';


export type BulletListItemProps = {
  items: Bullet[]
};

export const BulletList: React.FC<BulletListItemProps> = ({ items }) => {
  return (
    <ul>
      {items.map((item) => {
        const uuid = randomId('bullet-');
        return (<BulletListItem key={uuid} title={item.title} description={item.description} />);
      })}
    </ul>
  );
};
