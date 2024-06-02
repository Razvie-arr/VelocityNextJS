'use client';
import { Fragment } from 'react';
import CarDescriptionColorYearInputs from '@/components/CarDescriptionColorYearInputs';

const NewCarInputs = () => {
  return (
    <Fragment>
      <CarDescriptionColorYearInputs allInputsRequired={true} />
      <label htmlFor="price">Price in CZK</label>
      <input
        type="number"
        name="price"
        id="price"
        required={true}
        className="form-field"
      ></input>
    </Fragment>
  );
};

export default NewCarInputs;
