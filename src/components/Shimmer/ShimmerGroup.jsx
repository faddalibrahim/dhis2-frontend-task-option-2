import Shimmer from "./Shimmer";

const ShimmerGroup = ({ count }) => {
  return (
    <div className="flex flex-col gap-5">
      {[...Array(count)].map((_, index) => (
        <Shimmer key={index} />
      ))}
    </div>
  );
};

export default ShimmerGroup;
