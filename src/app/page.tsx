import prisma from '@/utils/prisma';
import CarList from '@/components/CarList';

const getCars = async () => {
  return prisma.car.findMany({
    include: {
      model: true,
      brand: true,
    },
  });
};

const HomePage = async () => {
  const cars = await getCars();
  return (
    <>
      <div>Home Page</div>
      <CarList cars={cars} />
    </>
  );
};
export default HomePage;
