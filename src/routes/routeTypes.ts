import { ComponentType } from "react";
import { RouteComponentProps } from "react-router-dom";

export interface RouteProps {
  path: string;
  component: ComponentType<RouteComponentProps<{}>> | ComponentType<unknown>;
  label: string;
  exact?: boolean;
}
