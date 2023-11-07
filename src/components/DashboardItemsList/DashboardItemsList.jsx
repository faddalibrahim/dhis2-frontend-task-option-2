import DashboardItemCard from "../DashboardItemCard/DashboardItemCard";

const DashboardItemsList = () => {
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
    <div className="w-[40vw] mx-auto flex flex-col gap-8 py-8">
      {dashboards.map((dashboard) => (
        <DashboardItemCard {...dashboard} key={dashboard.id} />
      ))}
    </div>
  );
};

export default DashboardItemsList;
