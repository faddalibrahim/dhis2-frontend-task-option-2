import {
  LocationIcon,
  TextIcon,
  MessagesIcon,
  VisualizationIcon,
} from "../assets/icons/Icons";

export const DROPDOWN_FILTER_OPTIONS = [
  "all",
  "map",
  "messages",
  "text",
  "visualization",
];

export const DASHBOARD_ITEM_TYPE_ICON = {
  MAP: <LocationIcon />,
  TEXT: <TextIcon />,
  MESSAGES: <MessagesIcon />,
  VISUALIZATION: <VisualizationIcon />,
};
