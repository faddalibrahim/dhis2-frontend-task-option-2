import {
  fetchListOfDashboards,
  fetchSingleDashboardDetails,
} from "../network/apiHandlers";

export const getAllDashboards = async () => {
  try {
    const DASHBOARD_LIST_RESPONSE = await fetchListOfDashboards();
    console.log(DASHBOARD_LIST_RESPONSE);

    if (DASHBOARD_LIST_RESPONSE.status === 200) {
      return DASHBOARD_LIST_RESPONSE.data.dashboards;
    }

    return [];
  } catch (error) {
    console.log(error);
  }
};

export const getSingleDashboardDetails = async (dashboardId) => {
  try {
    const SINGLE_DASHBOARD_RESPONSE = await fetchSingleDashboardDetails(
      dashboardId
    );

    if (SINGLE_DASHBOARD_RESPONSE.status === 200) {
      return SINGLE_DASHBOARD_RESPONSE.data;
    }

    return {};
  } catch (error) {
    console.log(error);
  }
};
