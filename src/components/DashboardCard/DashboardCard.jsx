// lib import
import { useEffect, useState, useCallback } from "react";

// components
import { Caret, StarGray, StarYellow } from "../../assets/icons/Icons";
import ShimmerGroup from "../Shimmer/ShimmerGroup";

// functions
import {
  getSingleDashboardDetails,
  getStarredDashboards,
  updateStarredDashboards,
} from "../../utils/functions";

// constants
import { DASHBOARD_ITEM_TYPE_ICON } from "../../utils/constants";

const DashboardItemCard = ({
  displayName,
  id,
  currentExpandedCard,
  setCurrentExpandedCard,
  filterBy,
  index,
}) => {
  const [dashboardDetails, setDashboardDetails] = useState(null);
  const [filtered, setFiltered] = useState(null);
  const [isStarred, setIsStarred] = useState(
    getStarredDashboards().includes(id)
  );

  console.log("hello", index);

  const handleCardExpansionToggle = async () => {
    // toggle dashboard expansion
    currentExpandedCard === id
      ? setCurrentExpandedCard(null)
      : setCurrentExpandedCard(id);

    // fetch data for this dashboard if not available
    if (!dashboardDetails) {
      const details = await getSingleDashboardDetails(id);
      setDashboardDetails(details);
      setFiltered(filterDashboardItems(details));
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

    const STARRED_DASHBOARDS = getStarredDashboards();

    if (isStarred) {
      const index = STARRED_DASHBOARDS.indexOf(id);
      STARRED_DASHBOARDS.splice(index, 1);
    } else {
      STARRED_DASHBOARDS.push(id);
    }

    updateStarredDashboards(STARRED_DASHBOARDS);

    // update starred state
    setIsStarred(!isStarred);
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
    setFiltered(filterDashboardItems(dashboardDetails));
  }, [filterBy, dashboardDetails, filterDashboardItems]);

  return (
    <div className="flex flex-col">
      <div
        className="flex justify-between px-5 py-8 bg-[#333] items-center cursor-pointer"
        onClick={handleCardExpansionToggle}
      >
        <h1 className="text-lg text-[#aaa] font-medium">{displayName}</h1>
        <div className="flex items-center gap-4 hover:animate-pulse">
          <div onClick={handleDashboardStar} className="hover:animate-bounce">
            {isStarred ? <StarYellow /> : <StarGray />}
          </div>
          <div className={`${currentExpandedCard === id ? "rotate-180" : ""}`}>
            <Caret />
          </div>
        </div>
      </div>
      {currentExpandedCard === id && (
        <div
          className={`px-5 py-4 text-[#aaa] flex flex-col cursor-pointer h-[15rem] overflow-y-auto ${
            currentExpandedCard === id ? "bg-[#1e1e1e]" : "bg-[#333]"
          }`}
        >
          {dashboardDetails?.dashboardItems?.length == 0 ? (
            <ShimmerGroup count={3} />
          ) : filtered?.length > 0 ? (
            filtered?.map((dashboardItem) => (
              <div
                key={dashboardItem.id}
                className="flex items-center gap-3 hover:bg-[#222] text-white px-3 py-5 rounded"
              >
                {DASHBOARD_ITEM_TYPE_ICON[dashboardItem.type]}
                <p>
                  {dashboardItem.text ??
                    dashboardItem[dashboardItem.type.toLowerCase()].name ??
                    "Messages"}
                </p>
              </div>
            ))
          ) : (
            "none"
          )}
        </div>
      )}
    </div>
  );
};

export default DashboardItemCard;
