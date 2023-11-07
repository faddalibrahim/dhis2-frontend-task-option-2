/* eslint-disable react/prop-types */

const DropdownFilter = ({ options, filterBy, setFilterBy }) => {
  const handleFilterOnChange = (e) => {
    setFilterBy(e.target.value.toLowerCase());
  };

  return (
    <select
      onChange={handleFilterOnChange}
      id="dropdown-filter"
      className="outline-none border-none py-4 px-3 rounded text-white bg-[#333] hover:bg-[#444] transition-colors duration cursor-pointer"
    >
      <option value="All Types" selected>
        All Types
      </option>
      {options?.map((option) => (
        <option value={option.displayName} key={option.id}>
          {option.displayName}
        </option>
      ))}
    </select>
  );
};

export default DropdownFilter;
