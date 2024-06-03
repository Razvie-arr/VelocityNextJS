import NewCarForm from '@/components/NewCar/NewCarForm';
import { fetchBrands, fetchLocations, fetchModels } from '@/app/types/actions';

const NewCarPage = async () => {
  const locations = await fetchLocations();
  const brands = await fetchBrands();
  const models = await fetchModels();

  return <NewCarForm locations={locations} models={models} brands={brands} />;
};

export default NewCarPage;
