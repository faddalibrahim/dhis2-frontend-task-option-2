import { Caret, Star, StarGray, StarYellow } from "../../assets/icons/Icons";

const DashboardItemCard = ({ displayName, starred }) => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between px-5 py-8 bg-[#333] items-center cursor-pointer rounded">
        <h1 className="text-lg text-[#aaa] font-medium">{displayName}</h1>
        <div className="flex items-center gap-4 hover:animate-pulse">
          {starred ? <StarYellow /> : <Star />}
          <Caret />
        </div>
      </div>
    </div>
  );
};

export default DashboardItemCard;
