// lib imports
import { useEffect, useState } from "react";

// components
import DashboardCard from "../DashboardCard/DashboardCard";
import ShimmerGroup from "../Shimmer/ShimmerGroup";

// functions
import { getAllDashboards } from "../../utils/functions";

export default function DashboardCardList({
  setCurrentExpandedCard,
  currentExpandedCard,
  filterBy,
}) {
  const [dashboards, setDashboards] = useState([]);

  useEffect(() => {
    (async () => {
      // fetch all dashboards
      const allDashboardsResponse = await getAllDashboards();
      setDashboards(allDashboardsResponse);
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
}
