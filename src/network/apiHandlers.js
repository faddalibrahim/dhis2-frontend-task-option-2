import axiosClient from "./apiClient";
import {
  LIST_OF_DASHBOARDS_URL,
  SINGLE_DASHBOARD_DETAILS_URL,
} from "./apiEndPoints";

const apiHandlers = (function () {
  const fetchListOfDashboards = () => {
    return axiosClient.get(LIST_OF_DASHBOARDS_URL);
  };

  const fetchSingleDashboardDetails = (dashboardId) => {
    return axiosClient.get(SINGLE_DASHBOARD_DETAILS_URL(dashboardId));
  };

  return {
    fetchListOfDashboards,
    fetchSingleDashboardDetails,
  };
})();

export default apiHandlers;
