const DropdownFilter = ({ options }) => {
  const handleFilterOnChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <select
      onChange={handleFilterOnChange}
      id="dropdown-filter"
      className="outline-none border-none py-4 px-3 rounded text-white bg-[#333] hover:bg-[#444] transition-colors duration cursor-pointer"
    >
      {options?.map((option) => (
        <option value={option.displayName} key={option.id}>
          {option.displayName}
        </option>
      ))}
    </select>
  );
};

export default DropdownFilter;
