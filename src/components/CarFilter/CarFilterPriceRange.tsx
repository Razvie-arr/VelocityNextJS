const CarFilterPriceRange = () => {
  return (
    <div className="flex flex-col mt-4">
      <div className="flex flex-row items-center">
        <label htmlFor="minPrice" className="mr-2">
          Min Price in CZK:
        </label>
        <input
          id="minPrice"
          name="minPrice"
          type="number"
          className="border border-gray-300 rounded-md px-2 py-1"
        />
      </div>
      <div className="flex flex-row items-center mt-2">
        <label htmlFor="maxPrice" className="mr-2">
          Max Price in CZK:
        </label>
        <input
          id="maxPrice"
          name="maxPrice"
          type="number"
          className="border border-gray-300 rounded-md px-2 py-1"
        />
      </div>
    </div>
  );
};

export default CarFilterPriceRange;
