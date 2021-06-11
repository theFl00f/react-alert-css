import AlertBox from "../views/pages/CreateAlert/AlertBox";
import Palette from "../views/pages/CreateAlert/Palette";
import { RouteProps } from "./routeTypes";

const routes: RouteProps[] = [
  {
    path: `/create/palette`,
    component: Palette,
    label: "Edit Palette",
    exact: true,
  },
  {
    path: `/create/edit-alert`,
    component: AlertBox,
    label: "Customize Alert",
    exact: true,
  },
];

export default routes;
