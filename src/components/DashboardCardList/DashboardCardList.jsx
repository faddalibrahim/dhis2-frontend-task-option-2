// lib imports
import { useEffect, useState } from "react";

// components
import DashboardCard from "../DashboardCard/DashboardCard";
import ShimmerGroup from "../Shimmer/ShimmerGroup";

// functions
import { getAllDashboards, getStarredDashboards } from "../../utils/functions";

/**
 * Renders a list of dashboard cards for the dashboard page.
 *
 * @param {Object} props - The props object destructured to get the following:
 *   - setCurrentExpandedCard: A function to set the currently expanded card.
 *   - currentExpandedCard: The id of currently expanded card.
 *   - filterBy: The filter used for the dashboards.
 * @return {JSX.Element} The rendered dashboard card list component.
 */
export default function DashboardCardList({
  setCurrentExpandedCard,
  currentExpandedCard,
  filterBy,
}) {
  const [dashboards, setDashboards] = useState([]);
  const [starredDashboards, setStarredDashboards] = useState(
    getStarredDashboards()
  );

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
              starredDashboards={starredDashboards}
              setStarredDashboards={setStarredDashboards}
            />
          ))
        ) : (
          <ShimmerGroup count={6} />
        )}
      </div>
    </div>
  );
}
