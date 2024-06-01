import prisma from '@/utils/prisma';
import NewCarForm from '@/components/NewCar/NewCarForm';

const fetchLocations = async () => {
  return prisma.location.findMany();
};

const fetchBrands = async () => {
  return prisma.brand.findMany();
};

const fetchModels = async () => {
  return prisma.carModel.findMany();
};

const NewCarPage = async () => {
  const locations = await fetchLocations();
  const brands = await fetchBrands();
  const models = await fetchModels();

  return <NewCarForm locations={locations} models={models} brands={brands} />;
};

export default NewCarPage;
