import prisma from '@/utils/prisma';
import NewCarForm from '@/components/NewCarForm';

const fetchBrands = async () => {
  return prisma.brand.findMany();
};

const fetchModels = async () => {
  return prisma.carModel.findMany();
};

const NewCarPage = async () => {
  const brands = await fetchBrands();
  const models = await fetchModels();

  return <NewCarForm models={models} brands={brands} />;
};

export default NewCarPage;
