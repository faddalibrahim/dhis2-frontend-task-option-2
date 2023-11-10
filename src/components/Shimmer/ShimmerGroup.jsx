import Shimmer from "./Shimmer";

/**
 * Generates a group of rectangular shimmer effects.
 *
 * @param {number} count - The number of rectangular shimmer effects to generate.
 * @return {JSX.Element} - A React component representing the group of shimmer effects.
 */
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
