const CitySearchForm = ({ onSearch }) => {
  let handleSubmit = (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value.trim();
    if (onSearch) onSearch(city);
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4 p-4 bg-white rounded-lg shadow-lg">
      <input
        type="text"
        name="city"
        placeholder="Enter city name"
        className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button type="submit" className="bg-blue-500 text-white p-3 rounded-lg w-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
        Search
      </button>
    </form>
  );
};

export default CitySearchForm;
