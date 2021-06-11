import { dbAlertFactory, stateAlertFactory } from "../factory";
import { alertToState, isStateAlert, stateToAlert } from "./alertFormat";

describe("isStateAlert()", () => {
  const dbAlert = dbAlertFactory.build();
  const stateAlert = stateAlertFactory.build();
  it("returns true if given an alert in the shape of a statealert", () => {
    expect(isStateAlert(stateAlert)).toBe(true);
  });

  it("returns false if given an alert in the shape of a dbalert", () => {
    expect(isStateAlert(dbAlert)).toBe(false);
  });
});

describe("alertToState()", () => {
  const alert = dbAlertFactory.build();
  it("formats a dbalert to a statealert", () => {
    const converted = alertToState(alert);
    expect(isStateAlert(converted)).toBe(true);
  });
});

describe("stateToAlert()", () => {
  const alert = stateAlertFactory.build();
  it("formats a statealert to a dbalert", () => {
    const converted = stateToAlert(alert);
    expect(isStateAlert(converted)).toBe(false);
  });
});
