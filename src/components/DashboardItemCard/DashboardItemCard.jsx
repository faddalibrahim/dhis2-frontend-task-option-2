import { Caret, StarGray, StarYellow } from "../../assets/icons/Icons";

const DashboardItemCard = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between px-5 py-8 bg-[#333] items-center cursor-pointer rounded">
        <p className="text-[#aaa] font-medium">name</p>
        <div className="flex items-center gap-4 hover:animate-pulse">
          <StarGray />
          <Caret />
        </div>
      </div>
    </div>
  );
};

export default DashboardItemCard;
