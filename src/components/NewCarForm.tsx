'use client';
import { Brand, CarModel } from '@prisma/client';
import { useMemo, useState } from 'react';
import { createCar } from '@/app/types/actions';

const NewCarForm = ({
  models,
  brands,
}: {
  models: CarModel[];
  brands: Brand[];
}) => {
  const [brandId, setBrandId] = useState('');
  const filteredModels = useMemo(() => {
    return models.filter((model) => model.brandId === brandId);
  }, [brandId, models]);
  console.log(brandId);

  return (
    <div>
      <form action={createCar} className="flex flex-col">
        <select
          name="brandId"
          id=""
          value={brandId}
          required={true}
          onChange={(e) => {
            setBrandId(e.target.value);
          }}
        >
          <option value="">Select brand</option>
          {brands.map((brand) => {
            return (
              <option key={brand.id} value={brand.id}>
                {brand.name}
              </option>
            );
          })}
        </select>
        <select name="modelId" required={true}>
          <option value="">Select model</option>;
          {filteredModels.map((model) => {
            return (
              <option key={model.id} value={model.id}>
                {model.name}
              </option>
            );
          })}
        </select>
        <input name="description" type="text" required={true}></input>
        <button type="submit">Send form</button>
      </form>
    </div>
  );
};

export default NewCarForm;
