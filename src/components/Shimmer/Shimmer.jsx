import ShimmerStyles from "./shimmer.module.css";

/**
 * Generates a rectangular Shimmer effect for yet-to-load content.
 *
 * @return {JSX.Element} A div element the Shimmer effect.
 */
const Shimmer = () => {
  return <div data-type="shimmer" className={ShimmerStyles.shimmer}></div>;
};

export default Shimmer;
