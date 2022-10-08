import PortoDetail from "./PortoDetailPage";
import { PORTO_PATH } from "url/web-url";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  path: PORTO_PATH + "/:id",
  element: <PortoDetail />,
};
