const CarDescriptionColorInputs = ({
  allInputsRequired,
}: {
  allInputsRequired: boolean;
}) => {
  return (
    <>
      <label htmlFor="description">Description</label>
      <textarea
        name="description"
        id="description"
        required={allInputsRequired}
        className="form-field"
      ></textarea>
      <label htmlFor="color">Color</label>
      <input
        name="color"
        id="color"
        required={allInputsRequired}
        className="form-field"
      ></input>
    </>
  );
};
export default CarDescriptionColorInputs;
