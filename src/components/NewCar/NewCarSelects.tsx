'use client';
import { Brand, CarModel, Location } from '@prisma/client';
import { Fragment, useState } from 'react';
import CarBrandModelSelects from '@/components/CarBrandModelSelects';

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
  const locationPlaceholder = '--- Select location ---';
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
      <CarBrandModelSelects
        models={models}
        brands={brands}
        allSelectsAreRequired={true}
      />
    </Fragment>
  );
};

export default NewCarSelects;
