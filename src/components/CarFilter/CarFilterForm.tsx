'use client';
import CarFilterLocation from '@/components/CarFilter/CarFilterLocation';
import { Brand, CarModel, Location } from '@prisma/client';
import { redirectCarFilter } from '@/app/types/actions';
import CarBrandModelSelects from '@/components/CarBrandModelSelects';
import CarDescriptionColorYearInputs from '@/components/CarDescriptionColorYearInputs';
import CarFilterPriceRange from '@/components/CarFilter/CarFilterPriceRange';

export const CarFilterForm = ({
  locations,
  brands,
  models,
}: {
  locations: Location[];
  brands: Brand[];
  models: CarModel[];
}) => {
  return (
    <form action={redirectCarFilter} className="flex flex-col mb-10">
      <CarFilterLocation locations={locations} />
      <CarBrandModelSelects
        brands={brands}
        models={models}
        allSelectsAreRequired={false}
      />
      <CarDescriptionColorYearInputs allInputsRequired={false} />
      <CarFilterPriceRange />
      <button type="submit" className="btn mt-4">
        Search cars
      </button>
    </form>
  );
};
export default CarFilterForm;
