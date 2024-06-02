const CarDescriptionColorYearInputs = ({
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
      <label htmlFor="year">Year</label>
      <input
        name="year"
        id="year"
        required={allInputsRequired}
        className="form-field"
        type="number"
      ></input>
    </>
  );
};
export default CarDescriptionColorYearInputs;
