import {
  fetchListOfDashboards,
  fetchSingleDashboardDetails,
} from "../network/apiHandlers";

export const getAllDashboards = async () => {
  try {
    const response = await fetchListOfDashboards();
    if (response.data.dashboards.length > 0) {
      return response.data.dashboards;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getSingleDashboardDetails = async (dashboardId) => {
  try {
    const response = await fetchSingleDashboardDetails(dashboardId);
    if (response.data) {
      console.log(response.data);
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};
