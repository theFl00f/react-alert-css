import AlertBox from "../views/pages/CreateAlert/AlertBox";
import Palette from "../views/pages/CreateAlert/Palette";

const baseUrl = process.env.REACT_APP_DEPLOYED || "";

const routes = [
  {
    path: `${baseUrl}/create/palette`,
    component: Palette,
    label: "Edit Palette",
    exact: true,
  },
  {
    path: `${baseUrl}/create/edit-alert`,
    component: AlertBox,
    label: "Customize Alert",
    exact: true,
  },
];

export default routes;
