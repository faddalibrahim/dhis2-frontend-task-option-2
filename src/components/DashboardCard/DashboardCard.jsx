// lib import
import { useEffect, useState, useCallback } from "react";

// components
import { Caret, StarGray, StarYellow } from "../../assets/icons/Icons";
import ShimmerGroup from "../Shimmer/ShimmerGroup";

// functions
import {
  getSingleDashboardDetails,
  updateStarredDashboards,
} from "../../utils/functions";

// constants
import { DASHBOARD_ITEM_TYPE_ICON } from "../../utils/constants";

/**
 * Renders a dashboard item card.
 *
 * @param {string} props.displayName - The display name of the dashboard item.
 * @param {string} props.id - The ID of the dashboard item.
 * @param {string} props.currentExpandedCard - The ID of the currently expanded card.
 * @param {function} props.setCurrentExpandedCard - The function to set the ID of the currently expanded card.
 * @param {string} props.filterBy - The filter option for the dashboard items.
 * @param {number} props.index - The index of the dashboard item card.
 * @return {JSX.Element} - The rendered dashboard item card.
 */
const DashboardItemCard = ({
  displayName,
  id,
  currentExpandedCard,
  setCurrentExpandedCard,
  filterBy,
  index,
  starredDashboards,
  setStarredDashboards,
}) => {
  const [dashboardDetails, setDashboardDetails] = useState(null);
  const [filteredDashboardItems, setFilteredDashboardItems] = useState(null);
  const handleCardExpansionToggle = async () => {
    // toggle dashboard expansion
    currentExpandedCard === id
      ? setCurrentExpandedCard(null)
      : setCurrentExpandedCard(id);

    // fetch data for this dashboard if not available
    if (!dashboardDetails) {
      const details = await getSingleDashboardDetails(id);
      setDashboardDetails(details);
      setFilteredDashboardItems(filterDashboardItems(details));
    }
  };

  const filterDashboardItems = useCallback(
    (dashboardData) => {
      return (
        dashboardData?.dashboardItems?.filter((dashboardItem) => {
          if (filterBy == "all") {
            return true;
          } else {
            return dashboardItem.type.toLowerCase() === filterBy.toLowerCase();
          }
        }) ?? []
      );
    },
    [filterBy]
  );

  const handleDashboardStar = async (event) => {
    event.stopPropagation();

    if (starredDashboards.includes(id)) {
      setStarredDashboards(
        starredDashboards.filter((dashboardId) => dashboardId !== id)
      );
    } else {
      starredDashboards.push(id);
      setStarredDashboards([...starredDashboards, id]);
    }

    updateStarredDashboards(starredDashboards);
  };

  useEffect(() => {
    console.log("loading first dashboard data");
    // get first dashboard card's details on load
    if (index === 0) {
      (async () => {
        const details = await getSingleDashboardDetails(id);
        setDashboardDetails(details);

        setCurrentExpandedCard(id);
      })();
    }
  }, [index, setCurrentExpandedCard, id]);

  useEffect(() => {
    console.log("filtering dashboard in use effect");
    setFilteredDashboardItems(filterDashboardItems(dashboardDetails));
  }, [filterBy, dashboardDetails, filterDashboardItems]);

  return (
    <div className="flex flex-col">
      <div
        className="flex justify-between px-5 py-8 bg-[#333] items-center cursor-pointer"
        onClick={handleCardExpansionToggle}
        data-cy="dashboard-card"
      >
        <h1 className="text-lg text-[#aaa] font-medium">{displayName}</h1>
        <div className="flex items-center gap-4 hover:animate-pulse">
          <div onClick={handleDashboardStar} className="hover:animate-bounce">
            {starredDashboards.includes(id) ? <StarYellow /> : <StarGray />}
          </div>
          <div
            data-cy="caret"
            className={`${currentExpandedCard === id ? "rotate-180" : ""}`}
          >
            <Caret />
          </div>
        </div>
      </div>
      {currentExpandedCard === id && (
        <div
          className={`px-5 py-4 text-[#aaa] flex flex-col cursor-pointer h-[15rem] overflow-y-auto ${
            currentExpandedCard === id ? "bg-[#1e1e1e]" : "bg-[#333]"
          }`}
          data-cy="dashboard-details"
        >
          {dashboardDetails?.dashboardItems?.length == 0 ? (
            <ShimmerGroup count={3} />
          ) : filteredDashboardItems?.length > 0 ? (
            filteredDashboardItems?.map((dashboardItem) => (
              <div
                key={dashboardItem.id}
                className="flex items-center gap-3 hover:bg-[#222] text-white px-3 py-5 rounded"
              >
                {DASHBOARD_ITEM_TYPE_ICON[dashboardItem.type]}
                <p data-type={dashboardItem.type}>
                  {dashboardItem.text ??
                    dashboardItem[dashboardItem.type.toLowerCase()].name ??
                    "Messages"}
                </p>
              </div>
            ))
          ) : (
            "no items match the current filter"
          )}
        </div>
      )}
    </div>
  );
};

export default DashboardItemCard;
