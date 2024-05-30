import { Brand, CarModel } from '@prisma/client';
import { createCar } from '@/app/types/actions';
import BrandAndModelFormFields from '@/components/BrandAndModelFormFields';

const NewCarForm = ({
  models,
  brands,
}: {
  models: CarModel[];
  brands: Brand[];
}) => {
  return (
    <div>
      <form
        action={createCar}
        className="flex flex-col rounded-md bg-sky-400 px-10 py-5 shadow-sm shadow-gray-400"
      >
        <BrandAndModelFormFields models={models} brands={brands} />
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id="description"
          required={true}
          className="form-field"
        ></textarea>
        <button type="submit" className="btn mt-4">
          Create new car
        </button>
      </form>
    </div>
  );
};

export default NewCarForm;
