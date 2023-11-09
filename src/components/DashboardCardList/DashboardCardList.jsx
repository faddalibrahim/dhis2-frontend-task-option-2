/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import DashboardCard from "../DashboardCard/DashboardCard";
import { getAllDashboards } from "../../utils/functions";
import ShimmerGroup from "../Shimmer/ShimmerGroup";

const DashboardCardList = ({
  setCurrentExpandedCard,
  currentExpandedCard,
  filterBy,
}) => {
  const [dashboards, setDashboards] = useState([]);

  useEffect(() => {
    // fetch all dashboards
    (async () => {
      const allDashboards = await getAllDashboards();
      setDashboards(allDashboards);
    })();
  }, []);

  return (
    <div className="grow overflow-y-auto">
      <div className="w-[90vw] md:w-[40vw] mx-auto flex flex-col gap-8 py-8 ">
        {dashboards.length > 0 ? (
          dashboards.map((dashboard, index) => (
            <DashboardCard
              {...dashboard}
              key={dashboard.id}
              currentExpandedCard={currentExpandedCard}
              setCurrentExpandedCard={setCurrentExpandedCard}
              filterBy={filterBy}
              index={index}
            />
          ))
        ) : (
          <ShimmerGroup count={6} />
        )}
      </div>
    </div>
  );
};

export default DashboardCardList;
