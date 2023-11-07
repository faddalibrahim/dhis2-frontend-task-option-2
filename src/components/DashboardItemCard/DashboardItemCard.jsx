// librairies import
import { useState } from "react";

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

  return (
    <div className="flex flex-col">
      <div
        className="flex justify-between px-5 py-8 bg-[#333] items-center cursor-pointer rounded"
        onClick={handleCardExpansion}
      >
        <h1 className="text-lg text-[#aaa] font-medium">{displayName}</h1>
        <div className="flex items-center gap-4 hover:animate-pulse">
          {starred ? <StarYellow /> : <Star />}
          <Caret />
        </div>
      </div>
      {currentExpandedCard === id && <div>content</div>}
    </div>
  );
};

export default DashboardItemCard;
