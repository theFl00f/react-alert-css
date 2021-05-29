import { CreateAlert, UserAlerts } from "../views/pages/";

const baseUrl = process.env.REACT_APP_DEPLOYED || "";

const routes = [
  {
    path: `${baseUrl}/alerts`,
    component: UserAlerts,
    label: "User Alerts",
    exact: true,
  },
  {
    path: `${baseUrl}/create`,
    component: CreateAlert,
    label: "Create Alert",
  },
];

export default routes;
