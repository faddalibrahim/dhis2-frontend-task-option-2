/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import DashboardItemCard from "../DashboardItemCard/DashboardItemCard";
import { getAllDashboards } from "./../../utils/functions";

const DashboardItemsList = ({
  setCurrentExpandedCard,
  currentExpandedCard,
}) => {
  const [dashboards, setDashboards] = useState([]);

  useEffect(() => {
    (async () => {
      const allDashboards = await getAllDashboards();
      setDashboards(allDashboards);
    })();
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
