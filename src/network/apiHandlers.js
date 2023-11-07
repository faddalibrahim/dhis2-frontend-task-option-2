import axiosClient from "./apiClient";
import {
  LIST_OF_DASHBOARDS_URL,
  SINGLE_DASHBOARD_DETAILS_URL,
} from "./apiEndPoints";

export function fetchListOfDashboards() {
  return axiosClient.get(LIST_OF_DASHBOARDS_URL);
}

export function fetchSingleDashboardDetails(dashboardId) {
  return axiosClient.get(SINGLE_DASHBOARD_DETAILS_URL(dashboardId));
}
