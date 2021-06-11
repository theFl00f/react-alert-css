import * as Factory from "factory.ts";
import faker from "faker";

export const dbAlertFactory = Factory.Sync.makeFactory<DBAlertWithId>({
  _id: faker.datatype.uuid(),
  user: `${faker.name.firstName()} ${faker.name.lastName()}`,
  alertName: `${faker.company.bsBuzz()} ${faker.company.bsNoun()}`,
  textValues: {
    button: "Close",
    message: faker.company.bs(),
  },
  css: {
    alertBorderColor: faker.internet.color(),
    alertBackgroundColor: faker.internet.color(),
    buttonBorderColor: faker.internet.color(),
    buttonBackgroundColor: faker.internet.color(),
    textColor: faker.internet.color(),
    buttonTextColor: faker.internet.color(),
  },
  dimensions: {
    alertWidth: faker.datatype.number({ min: 8, max: 36 }),
    alertHeight: faker.datatype.number({ min: 7, max: 20 }),
    alertBorderRadius: faker.datatype.float({
      min: 0,
      max: 15,
      precision: 0.5,
    }),
    alertBorderWidth: faker.datatype.float({ min: 0, max: 2, precision: 0.1 }),
    alertYPadding: faker.datatype.float({
      min: 0,
      max: 5,
      precision: 0.5,
    }),
    alertXPadding: faker.datatype.float({
      min: 0,
      max: 15,
      precision: 0.5,
    }),
    buttonYPadding: faker.datatype.float({
      min: 0,
      max: 2.6,
      precision: 0.2,
    }),
    buttonXPadding: faker.datatype.float({
      min: 0,
      max: 15,
    }),
    buttonBorderRadius: faker.datatype.float({
      min: 0,
      max: 10,
      precision: 0.5,
    }),
    buttonBorderWidth: faker.datatype.float({
      min: 0,
      max: 2,
      precision: 0.1,
    }),
  },
});

export const stateAlertFactory = Factory.Sync.makeFactory<StateAlert>({
  user: `${faker.name.firstName()} ${faker.name.lastName()}`,
  alertName: `${faker.company.bsBuzz()} ${faker.company.bsNoun()}`,

  button: "Close",
  message: faker.company.bs(),

  alertBorderColor: faker.internet.color(),
  alertBackgroundColor: faker.internet.color(),
  buttonBorderColor: faker.internet.color(),
  buttonBackgroundColor: faker.internet.color(),
  textColor: faker.internet.color(),
  buttonTextColor: faker.internet.color(),
  alertWidth: faker.datatype.number({ min: 8, max: 36 }),
  alertHeight: faker.datatype.number({ min: 7, max: 20 }),
  alertBorderRadius: faker.datatype.float({
    min: 0,
    max: 15,
    precision: 0.5,
  }),
  alertBorderWidth: faker.datatype.float({ min: 0, max: 2, precision: 0.1 }),
  alertYPadding: faker.datatype.float({
    min: 0,
    max: 5,
    precision: 0.5,
  }),
  alertXPadding: faker.datatype.float({
    min: 0,
    max: 15,
    precision: 0.5,
  }),
  buttonYPadding: faker.datatype.float({
    min: 0,
    max: 2.6,
    precision: 0.2,
  }),
  buttonXPadding: faker.datatype.float({
    min: 0,
    max: 15,
  }),
  buttonBorderRadius: faker.datatype.float({
    min: 0,
    max: 10,
    precision: 0.5,
  }),
  buttonBorderWidth: faker.datatype.float({
    min: 0,
    max: 2,
    precision: 0.1,
  }),
});
