import SuccessCarCreate from '@/components/NewCar/SuccessCarCreate';

const SuccessPage = async ({
  searchParams,
}: {
  searchParams: {
    brand: string;
    model: string;
  };
}) => {
  return (
    <SuccessCarCreate brand={searchParams.brand} model={searchParams.model} />
  );
};

export default SuccessPage;
