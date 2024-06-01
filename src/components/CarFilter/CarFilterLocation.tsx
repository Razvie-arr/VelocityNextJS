'use client';
import { Fragment, useState } from 'react';
import { Location } from '@prisma/client';
import { useSearchParams } from 'next/navigation';

const CarFilterLocation = ({ locations }: { locations: Location[] }) => {
  const cityParam = useSearchParams().get('city');
  const [city, setCity] = useState(cityParam ? cityParam : '');
  const cityPlaceHolder = '--- Select city ---';
  return (
    <Fragment>
      <label htmlFor="city">Location</label>
      <select
        name="city"
        id="city"
        value={city}
        className="form-field"
        onChange={(e) => {
          setCity(e.target.value);
        }}
      >
        <option value="">{cityPlaceHolder}</option>
        {locations.map((location) => (
          <option key={location.id} value={location.city}>
            {location.city}
          </option>
        ))}
      </select>
    </Fragment>
  );
};
export default CarFilterLocation;
