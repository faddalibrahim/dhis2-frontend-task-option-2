/* eslint-disable react/prop-types */

import DropdownFilter from "../DropdownFilter/DropdownFilter";

const Appbar = ({ filterBy, setFilterBy }) => {
  const dashboards = [
    {
      displayName: "Antenatal Care",
      id: "nghVC4wtyzi",
      starred: true,
    },
    {
      displayName: "Cases Malaria",
      id: "JW7RlN5xafN",
      starred: false,
    },
    {
      displayName: "Delivery",
      id: "iMnYyBfSxmM",
      starred: false,
    },
    {
      displayName: "Disease Surveillance",
      id: "vqh4MBWOTi4",
      starred: false,
    },
    {
      displayName: "Immunization",
      id: "TAMlzYkstb7",
      starred: false,
    },
  ];

  return (
    <div className="flex justify-between items-center p-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <h1 className="text-2xl font-medium text-white">Dashboards</h1>
      <DropdownFilter
        options={dashboards}
        filterBy={filterBy}
        setFilterBy={setFilterBy}
      />
    </div>
  );
};

export default Appbar;
