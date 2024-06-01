'use client';
import { Fragment } from 'react';
import CarDescriptionColorInputs from '@/components/CarDescriptionColorInputs';

const NewCarInputs = () => {
  return (
    <Fragment>
      <CarDescriptionColorInputs allInputsRequired={true} />
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
