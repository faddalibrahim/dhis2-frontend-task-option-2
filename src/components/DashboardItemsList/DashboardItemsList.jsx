import DashboardItemCard from "../DashboardItemCard/DashboardItemCard";

const DashboardItemsList = () => {
  return (
    <div className="w-[40vw] mx-auto flex flex-col gap-8 py-8">
      <DashboardItemCard />
      <DashboardItemCard />
    </div>
  );
};

export default DashboardItemsList;
