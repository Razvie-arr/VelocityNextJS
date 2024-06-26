import CarList from '@/components/CarList';
import {
  fetchBrands,
  fetchCarsWithFilter,
  fetchLocations,
  fetchModels,
} from '@/app/types/actions';
import CarFilterForm from '@/components/CarFilter/CarFilterForm';

export interface CarSearchParams {
  brandName?: string | null;
  modelName?: string | null;
  city?: string | null;
  description?: string | null;
  color?: string | null;
  minPrice?: number | null;
  maxPrice?: number | null;
  year?: number | null;
}
const Home = async ({
  searchParams,
}: {
  searchParams: {
    brand?: string | null;
    model?: string | null;
    city?: string | null;
    description?: string | null;
    color?: string | null;
    minPrice?: number | null;
    maxPrice?: number | null;
    year?: number | null;
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
  carSearchParams.minPrice = searchParams.minPrice;
  carSearchParams.maxPrice = searchParams.maxPrice;
  carSearchParams.year = searchParams.year;

  const cars = await fetchCarsWithFilter(carSearchParams);
  return (
    <div className="flex flex-col rounded-md bg-sky-400 px-10 py-5 shadow-sm shadow-gray-400">
      <CarFilterForm locations={locations} brands={brands} models={models} />
      {cars && cars.length > 0 ? <CarList cars={cars} /> : 'No cars found'}
    </div>
  );
};

export default Home;
