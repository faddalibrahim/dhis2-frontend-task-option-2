import { DROPDOWN_FILTER_OPTIONS } from "../../utils/constants";

export default function DropdownFilter({ setFilterBy }) {
  const handleFilterOnChange = (event) => {
    setFilterBy(event.target.value.toLowerCase());
  };

  return (
    <select
      onChange={handleFilterOnChange}
      className="outline-none border-none py-4 px-3 rounded text-white bg-[#333] hover:bg-[#444] transition-colors duration cursor-pointer"
    >
      {DROPDOWN_FILTER_OPTIONS?.map((option) => (
        <option value={option} key={option} className="capitalize">
          {option}
        </option>
      ))}
    </select>
  );
}
