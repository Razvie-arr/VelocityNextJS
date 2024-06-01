import CarList from '@/components/CarList';
import {
  fetchBrands,
  fetchCarsWithFilter,
  fetchLocations,
  fetchModels,
} from '@/app/types/actions';
import CarFilterForm from '@/components/CarFilter/CarFilterForm';
import * as sea from 'node:sea';

export interface CarSearchParams {
  brandName?: string | null;
  modelName?: string | null;
  city?: string | null;
  description?: string | null;
  color?: string | null;
}
const Home = async ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: {
    brand?: string | null;
    model?: string | null;
    city?: string | null;
    description?: string | null;
    color?: string | null;
  };
}) => {
  const locations = await fetchLocations();
  const brands = await fetchBrands();
  const models = await fetchModels();

  const carSearchParams: CarSearchParams = {};
  carSearchParams.brandName = searchParams.brand;
  carSearchParams.modelName = searchParams.model;
  carSearchParams.city = searchParams.city;
  carSearchParams.description = searchParams.description;
  carSearchParams.color = searchParams.color;
  const cars = await fetchCarsWithFilter(carSearchParams);
  return (
    <div className="flex flex-col rounded-md bg-sky-400 px-10 py-5 shadow-sm shadow-gray-400">
      <CarFilterForm locations={locations} brands={brands} models={models} />
      <CarList cars={cars} />
    </div>
  );
};

export default Home;
