/* eslint-disable react/prop-types */

const DropdownFilter = ({ setFilterBy }) => {
  const handleFilterOnChange = (e) => {
    setFilterBy(e.target.value.toLowerCase());
    console.log(e.target.value.toLowerCase());
  };

  const options = ["visualization", "map", "messages", "text"];

  return (
    <select
      onChange={handleFilterOnChange}
      id="dropdown-filter"
      className="outline-none border-none py-4 px-3 rounded text-white bg-[#333] hover:bg-[#444] transition-colors duration cursor-pointer"
      defaultValue="All Types"
    >
      <option value="All Types">All Types</option>
      {options?.map((option) => (
        <option value={option} key={option} className="capitalize">
          {option}
        </option>
      ))}
    </select>
  );
};

export default DropdownFilter;
