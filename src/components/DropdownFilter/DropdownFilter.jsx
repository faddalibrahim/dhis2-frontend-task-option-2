/* eslint-disable react/prop-types */
import { DROPDOWN_FILTER_OPTIONS } from "../../utils/constants";

const DropdownFilter = ({ setFilterBy }) => {
  const handleFilterOnChange = (e) => {
    setFilterBy(e.target.value.toLowerCase());
  };

  return (
    <select
      onChange={handleFilterOnChange}
      id="dropdown-filter"
      className="outline-none border-none py-4 px-3 rounded text-white bg-[#333] hover:bg-[#444] transition-colors duration cursor-pointer"
    >
      {DROPDOWN_FILTER_OPTIONS?.map((option) => (
        <option value={option} key={option} className="capitalize">
          {option}
        </option>
      ))}
    </select>
  );
};

export default DropdownFilter;
