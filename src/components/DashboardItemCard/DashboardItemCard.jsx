// librairies import
import { useEffect, useState } from "react";

// components
import { Caret, Star, StarYellow } from "../../assets/icons/Icons";

// functions
import { getSingleDashboardDetails } from "../../utils/functions";

const DashboardItemCard = ({
  displayName,
  starred,
  id,
  currentExpandedCard,
  setCurrentExpandedCard,
}) => {
  const [dashboardDetails, setDashboardDetails] = useState(null);
  const [isStarred, setIsStarred] = useState(starred);
  const handleCardExpansion = async () => {
    // fetch data, if not available
    if (!dashboardDetails) {
      const details = await getSingleDashboardDetails(id);
      setDashboardDetails(details);
    }
    // toggle dashboard expansion
    currentExpandedCard === id
      ? setCurrentExpandedCard(null)
      : setCurrentExpandedCard(id);
  };

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

  return (
    <div className="flex flex-col">
      <div
        className="flex justify-between px-5 py-8 bg-[#333] items-center cursor-pointer"
        onClick={handleCardExpansion}
      >
        <h1 className="text-lg text-[#aaa] font-medium">{displayName}</h1>
        <div className="flex items-center gap-4 hover:animate-pulse">
          <div onClick={handleDashboardStar} className="hover:animate-bounce">
            {isStarred ? <StarYellow /> : <Star />}
          </div>
          {currentExpandedCard === id ? (
            <div className="rotate-180">
              <Caret />
            </div>
          ) : (
            <Caret />
          )}
        </div>
      </div>
      {currentExpandedCard === id && (
        <div className="bg-[#333] px-5 py-2 text-[#aaa] flex flex-col gap-3">
          {dashboardDetails?.dashboardItems?.map((dashboardItem) => (
            <div key={dashboardItem.id} className="flex gap-2">
              <StarYellow />
              <p>{dashboardItem.id}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DashboardItemCard;
