'use client';
import { Fragment } from 'react';

const NewCarInputs = () => {
  return (
    <Fragment>
      <label htmlFor="description">Description</label>
      <textarea
        name="description"
        id="description"
        required={true}
        className="form-field"
      ></textarea>
      <label htmlFor="color">Color</label>
      <input
        name="color"
        id="color"
        required={true}
        className="form-field"
      ></input>
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
