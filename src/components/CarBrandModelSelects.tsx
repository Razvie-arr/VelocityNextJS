import { Brand, CarModel, Location } from '@prisma/client';
import { Fragment, useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';

const CarBrandModelSelects = ({
  models,
  brands,
  allSelectsAreRequired,
}: {
  models: CarModel[];
  brands: Brand[];
  allSelectsAreRequired: boolean;
}) => {
  const [brandId, setBrandId] = useState('');
  const [isModelSelectDisabled, setIsModelSelectDisabled] = useState(true);

  const brandPlaceholder = '--- Select brand ---';
  const modelPlaceholder = '--- Select model ---';

  const filteredModels = useMemo(() => {
    return models.filter((model) => model.brandId === brandId);
  }, [brandId, models]);
  return (
    <Fragment>
      <label htmlFor="brandId">Brand</label>
      <select
        name="brandId"
        required={allSelectsAreRequired}
        id="brandId"
        value={brandId}
        className="form-field"
        onChange={(e) => {
          setBrandId(e.target.value);
          setIsModelSelectDisabled(e.target.value === brandPlaceholder);
        }}
      >
        <option value="">{brandPlaceholder}</option>
        {brands.map((brand) => (
          <option key={brand.id} value={brand.id}>
            {brand.name}
          </option>
        ))}
      </select>
      <label htmlFor="modelId">Model</label>
      <select
        name="modelId"
        id="modelId"
        required={allSelectsAreRequired}
        className="form-field"
        disabled={isModelSelectDisabled}
      >
        <option value="" hidden>
          {modelPlaceholder}
        </option>
        {filteredModels.map((model) => (
          <option key={model.id} value={model.id}>
            {model.name}
          </option>
        ))}
      </select>
    </Fragment>
  );
};
export default CarBrandModelSelects;
