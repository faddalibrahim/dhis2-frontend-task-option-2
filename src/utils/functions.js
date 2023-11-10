import apiHandlers from "./../network/apiHandlers";

/**
 * Retrieves all dashboards from the API.
 *
 * @return {Array} An array of dashboard objects.
 */
export const getAllDashboards = async () => {
  try {
    const DASHBOARD_LIST_RESPONSE = await apiHandlers.fetchListOfDashboards();
    console.log(DASHBOARD_LIST_RESPONSE);

    if (DASHBOARD_LIST_RESPONSE.status === 200) {
      return DASHBOARD_LIST_RESPONSE.data.dashboards;
    }

    return [];
  } catch (error) {
    console.log(error);
  }
};

/**
 * Retrieves the details of a single dashboard.
 *
 * @param {string} dashboardId - The ID of the dashboard to retrieve.
 * @return {object} The details of the dashboard.
 */
export const getSingleDashboardDetails = async (dashboardId) => {
  try {
    const SINGLE_DASHBOARD_RESPONSE =
      await apiHandlers.fetchSingleDashboardDetails(dashboardId);

    if (SINGLE_DASHBOARD_RESPONSE.status === 200) {
      return SINGLE_DASHBOARD_RESPONSE.data;
    }

    return {};
  } catch (error) {
    console.log(error);
  }
};

/**
 * Retrieves the ID list of starred dashboards from the local storage.
 *
 * @return {Array} An array containing the ID list of starred dashboards.
 */

export const getStarredDashboards = () => {
  return JSON.parse(localStorage.getItem("starredDashboards")) ?? [];
};

/**
 * Updates the list of starred dashboards in the local storage.
 *
 * @param {Array} newStarredDashboards - The new list of starred dashboards.
 * @return {undefined} This function does not return a value.
 */

export const updateStarredDashboards = (newStarredDashboards) => {
  localStorage.setItem(
    "starredDashboards",
    JSON.stringify(newStarredDashboards)
  );
};
