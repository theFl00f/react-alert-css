import axios, { AxiosResponse } from "axios";
import { stateToAlert } from "../util/alertFormat";

const basePath = process.env.REACT_APP_BASE_URL || "";

export default class AlertDao {
  addAlert(
    state: StateAlert
  ): Promise<AxiosResponse<{ result: DBAlertWithId }>> {
    const input = stateToAlert(state);
    return axios.post(`${basePath}/api/alert`, input);
  }

  getAlerts(): Promise<AxiosResponse<{ result: DBAlertWithId[] }>> {
    return axios.get(`${basePath}/api/alerts`);
  }

  getAlert(id: string): Promise<AxiosResponse<{ result: DBAlertWithId }>> {
    return axios.get(`${basePath}/api/alert/${id}`);
  }
}
