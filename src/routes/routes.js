import { CreateAlert, UserAlerts } from "../views/pages/";

const routes = [
  {
    path: `/alerts`,
    component: UserAlerts,
    label: "User Alerts",
    exact: true,
  },
  {
    path: `/create`,
    component: CreateAlert,
    label: "Create Alert",
  },
];

export default routes;
