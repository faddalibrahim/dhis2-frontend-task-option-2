/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import DashboardItemCard from "../DashboardItemCard/DashboardItemCard";
import { fetchListOfDashboards } from "../../network/apiHandlers";

const DashboardItemsList = ({
  setCurrentExpandedCard,
  currentExpandedCard,
}) => {
  const [dashboards, setDashboards] = useState([]);

  const getAllDashboards = async () => {
    try {
      const response = await fetchListOfDashboards();
      if (response.data.dashboards.length > 0) {
        setDashboards(response.data.dashboards);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    try {
      getAllDashboards();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="w-[40vw] mx-auto flex flex-col gap-8 py-8">
      {dashboards.map((dashboard) => (
        <DashboardItemCard
          {...dashboard}
          key={dashboard.id}
          currentExpandedCard={currentExpandedCard}
          setCurrentExpandedCard={setCurrentExpandedCard}
        />
      ))}
    </div>
  );
};

export default DashboardItemsList;
