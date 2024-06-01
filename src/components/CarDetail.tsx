import { CarWithDeps } from '@/types/prismaTypes';
import { FC } from 'react';

interface DetailParamProps {
  label: string;
  value?: string;
}

const DetailParam: FC<DetailParamProps> = ({ label, value }) => {
  if (!value) return null;
  return (
    <div className="px-4 py-6 m-2 bg-white rounded-md ">
      <dt className="text-sm font-medium leading-6 text-gray-900">{label}</dt>
      <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
        {value}
      </dd>
    </div>
  );
};

const CarDetail = ({ car }: { car: CarWithDeps }) => {
  return (
    <div className="flex flex-col rounded-md bg-sky-400 px-10 py-5 shadow-sm shadow-gray-400">
      <div className="px-4">
        <div className="flex text-xl font-bold leading-7">
          {car.brand.name}
          {' - '}
          {car.model.name}
        </div>
      </div>
      <div className="mt-6 border-gray-100">
        <dl className="divide-y divide-gray-100">
          <DetailParam label="Year" value={car.year?.toString()} />
          <DetailParam label="Price" value={`${car.price?.toString()} CZK`} />
          <DetailParam label="Color" value={car.color?.toString()} />
          <DetailParam label="Location" value={car.location.city.toString()} />
          <DetailParam
            label="Description"
            value={car.description?.toString()}
          />
        </dl>
      </div>
    </div>
  );
};

export default CarDetail;
