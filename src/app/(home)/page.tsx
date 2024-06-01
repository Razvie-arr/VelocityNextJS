import prisma from '@/utils/prisma';
import CarList from '@/components/CarList';

const getCars = async () => {
  return prisma.car.findMany({
    include: {
      model: true,
      brand: true,
      location: true,
    },
    orderBy: [
      {
        location: {
          city: 'asc',
        },
      },
      {
        brand: {
          name: 'asc',
        },
      },
    ],
  });
};

const HomePage = async () => {
  const cars = await getCars();
  return (
    <>
      <CarList cars={cars} />
    </>
  );
};
export default HomePage;
