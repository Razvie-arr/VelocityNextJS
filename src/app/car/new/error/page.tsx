import ErrorCarCreate from '@/components/NewCar/ErrorCarCreate';

const ErrorPage = async ({
  searchParams,
}: {
  searchParams: {
    brand: string;
    model: string;
  };
}) => {
  return (
    <ErrorCarCreate brand={searchParams.brand} model={searchParams.model} />
  );
};

export default ErrorPage;
