// librairies import
import { useEffect, useState } from "react";

// components
import {
  Caret,
  StarGray,
  StarYellow,
  TextIcon,
  VisualizationIcon,
} from "../../assets/icons/Icons";
import { MessagesIcon } from "../../assets/icons/Icons";
import { LocationIcon } from "../../assets/icons/Icons";

// functions
import { getSingleDashboardDetails } from "../../utils/functions";
import ShimmerGroup from "../Shimmer/ShimmerGroup";

const DashboardItemCard = ({
  displayName,
  starred,
  id,
  currentExpandedCard,
  setCurrentExpandedCard,
  filterBy,
  index,
}) => {
  const [dashboardDetails, setDashboardDetails] = useState(null);
  const [isStarred, setIsStarred] = useState(starred);
  const [filtered, setFiltered] = useState(
    dashboardDetails?.dashboardItems?.filter(
      (dashboardItem) =>
        dashboardItem.type.toLowerCase() === filterBy.toLowerCase()
    ) ?? []
  );

  const handleCardExpansion = async () => {
    // toggle dashboard expansion
    currentExpandedCard === id
      ? setCurrentExpandedCard(null)
      : setCurrentExpandedCard(id);

    // fetch data, if not available
    if (!dashboardDetails) {
      const details = await getSingleDashboardDetails(id);
      setDashboardDetails(details);
      setFiltered(
        details?.dashboardItems?.filter((dashboardItem) => {
          // return dashboardItem.type.toLowerCase() === filterBy.toLowerCase();

          if (filterBy == "all") {
            return true;
          } else {
            return dashboardItem.type.toLowerCase() === filterBy.toLowerCase();
          }

          // return filterBy === ""
          //   ? dashboardItem
          //   : dashboardItem.type.toLowerCase() === filterBy.toLowerCase();
        }) ?? []
      );
    }
  };

  console.log(filterBy);

  const handleDashboardStar = async (event) => {
    event.stopPropagation();
    saveStarState(id);
  };

  const saveStarState = (id) => {
    const starredDashboards =
      JSON.parse(localStorage.getItem("starredDashboards")) ?? [];

    if (isStarred) {
      // remove item from starredDashboards
      const index = starredDashboards.indexOf(id);
      starredDashboards.splice(index, 1);
    } else {
      // add item to starredDashboards
      starredDashboards.push(id);
    }

    // save to localstorage
    localStorage.setItem(
      "starredDashboards",
      JSON.stringify(starredDashboards)
    );

    // update starred state
    setIsStarred(!isStarred);
  };

  useEffect(() => {
    console.log("hello");
    const starredDashboards =
      JSON.parse(localStorage.getItem("starredDashboards")) ?? [];
    setIsStarred(starredDashboards.includes(id));
  }, [id]);

  useEffect(() => {
    // get first card's details
    if (index === 0) {
      (async () => {
        const details = await getSingleDashboardDetails(id);
        setDashboardDetails(details);

        setCurrentExpandedCard(id);
      })();
    }
  }, [index, setCurrentExpandedCard, id]);

  useEffect(() => {
    setFiltered(
      dashboardDetails?.dashboardItems?.filter((dashboardItem) => {
        if (filterBy == "all") {
          return true;
        } else {
          return dashboardItem.type.toLowerCase() === filterBy.toLowerCase();
        }
      }) ?? []
    );
  }, [filterBy, dashboardDetails]);

  const dashboardTypeIcon = {
    MAP: <LocationIcon />,
    TEXT: <TextIcon />,
    MESSAGES: <MessagesIcon />,
    VISUALIZATION: <VisualizationIcon />,
  };

  // console.log(filterBy);

  return (
    <div className="flex flex-col">
      <div
        className="flex justify-between px-5 py-8 bg-[#333] items-center cursor-pointer"
        onClick={handleCardExpansion}
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
                {dashboardTypeIcon[dashboardItem.type]}
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
