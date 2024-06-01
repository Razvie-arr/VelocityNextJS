import { CarWithDeps } from '@/types/prismaTypes';

const CarDetail = ({ car }: { car: CarWithDeps | null }) => {
  return (
    <div>
      <div>{car?.brand.name}</div>
      <div>{car?.model.name}</div>
      <div>{car?.description}</div>
      <div>{car?.location.city}</div>
      <div>{car?.price} CZK</div>
      <div>{car?.color}</div>
    </div>
  );
};

export default CarDetail;
