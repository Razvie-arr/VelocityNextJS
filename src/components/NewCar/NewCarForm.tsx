import { Brand, CarModel, Location } from '@prisma/client';
import { createCar } from '@/app/types/actions';
import NewCarSelects from '@/components/NewCar/NewCarSelects';
import NewCarInputs from '@/components/NewCar/NewCarInputs';

const NewCarForm = ({
  models,
  brands,
  locations,
}: {
  models: CarModel[];
  brands: Brand[];
  locations: Location[];
}) => {
  return (
    <div>
      <form
        action={createCar}
        className="flex flex-col rounded-md bg-sky-400 px-10 py-5 shadow-sm shadow-gray-400"
      >
        <NewCarSelects models={models} brands={brands} locations={locations} />
        <NewCarInputs />
        <button type="submit" className="btn mt-4">
          Create new car
        </button>
      </form>
    </div>
  );
};

export default NewCarForm;
