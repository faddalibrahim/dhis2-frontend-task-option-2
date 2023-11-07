import DropdownFilter from "../DropdownFilter/DropdownFilter";

const Appbar = () => {
  return (
    <div className="flex justify-between items-center p-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <h1 className="text-2xl font-medium text-white">Dashboards</h1>
      <DropdownFilter />
    </div>
  );
};

export default Appbar;
