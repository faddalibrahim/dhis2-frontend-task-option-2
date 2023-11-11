import DropdownFilter from "../DropdownFilter/DropdownFilter";

/**
 * Render the Appbar component.
 *
 * @param {String} filterBy - The filter value used to filter dashboard items.
 * @param {Function} setFilterBy - The function to set the filter value
 * @return {JSX.Element} The rendered Appbar component.
 */
const Appbar = ({ filterBy, setFilterBy }) => {
  return (
    <div className="flex justify-between items-center p-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <h1
        className="text-2xl font-medium text-white"
        data-cy-type="dashboard-text"
      >
        Dashboards
      </h1>
      <DropdownFilter filterBy={filterBy} setFilterBy={setFilterBy} />
    </div>
  );
};

export default Appbar;
