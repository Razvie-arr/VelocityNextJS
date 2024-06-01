import prisma from '@/utils/prisma';
import CarDetail from '@/components/CarDetail';

const fetchCarDetail = async (id: string) => {
  return prisma.car.findUnique({
    where: {
      id: id,
    },
    include: {
      model: true,
      brand: true,
      location: true,
    },
  });
};

const CarDetailPage = async ({ params }: { params: { id: string } }) => {
  const car = await fetchCarDetail(params.id);
  return <CarDetail car={car} />;
};

export default CarDetailPage;
