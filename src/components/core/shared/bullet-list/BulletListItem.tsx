export type BulletListItemProps = {
  bulletNumber: number;
  description: string;
};

export const BulletListItem: React.FC<BulletListItemProps> = ({
  bulletNumber,
  description,
}) => {
  return (
    <li className='d-flex mb-3'>
      <span className='bullet me-2 fw-bold flex-shrink-0'>{bulletNumber}</span>
      <p className='align-self-center text-wrap'>{description}</p>
    </li>
  );
};
