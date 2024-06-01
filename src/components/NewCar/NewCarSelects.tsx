'use client';
import { Brand, CarModel, Location } from '@prisma/client';
import { Fragment, useMemo, useState } from 'react';

const NewCarSelects = ({
  models,
  brands,
  locations,
}: {
  models: CarModel[];
  brands: Brand[];
  locations: Location[];
}) => {
  const [locationId, setLocationId] = useState('');
  const [brandId, setBrandId] = useState('');
  const [isModelSelectDisabled, setIsModelSelectDisabled] = useState(true);

  const locationPlaceholder = '--- Select location ---';
  const brandPlaceholder = '--- Select brand ---';
  const modelPlaceholder = '--- Select model ---';

  const filteredModels = useMemo(() => {
    return models.filter((model) => model.brandId === brandId);
  }, [brandId, models]);
  return (
    <Fragment>
      <label htmlFor="locationId">Location</label>
      <select
        name="locationId"
        required={true}
        id="locationId"
        value={locationId}
        className="form-field"
        defaultValue=""
        onChange={(e) => {
          setLocationId(e.target.value);
        }}
      >
        <option value="" hidden>
          {locationPlaceholder}
        </option>
        {locations.map((location) => (
          <option key={location.id} value={location.id}>
            {location.city}
          </option>
        ))}
      </select>
      <label htmlFor="brandId">Brand</label>
      <select
        name="brandId"
        required={true}
        id="brandId"
        value={brandId}
        className="form-field"
        defaultValue=""
        onChange={(e) => {
          setBrandId(e.target.value);
          setIsModelSelectDisabled(e.target.value === brandPlaceholder);
        }}
      >
        <option value="" hidden>
          {brandPlaceholder}
        </option>
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
        required={true}
        className="form-field"
        disabled={isModelSelectDisabled}
        defaultValue=""
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

export default NewCarSelects;
