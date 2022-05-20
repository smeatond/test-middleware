const checkCorrectType = require("./checkCorrectTypes");

describe("checkCorrectTypes", () => {
  it("will return null if a property matched the date type in config", () => {
    const config = {
      name: "date",
      type: "date",
    };
    const body = {
      date: "2022-02-18T16:54:40.000Z",
    };
    const results = checkCorrectType(body, config);
    expect(results).toBeNull();
  });
  it("will return an error message if the property matched is not of date type", () => {
    const config = {
      name: "date",
      type: "date",
    };
    const body = {
      date: "invalid date",
    };
    const expected = {
      error: `property date should be a valid date`,
    };
    const results = checkCorrectType(body, config);
    expect(results).toEqual(expected);
  });
  it("will return null if a property matched the string type in config", () => {
    const config = {
      name: "name",
      type: "string",
    };
    const body = {
      name: "This is a string",
    };
    const results = checkCorrectType(body, config);
    expect(results).toBeNull();
  });
  it("will return an error message if the property matched is not of string type", () => {
    const config = {
      name: "name",
      type: "string",
    };
    const body = {
      name: 1,
    };
    const expected = {
      error: `property name should be a valid string`,
    };
    const results = checkCorrectType(body, config);
    expect(results).toEqual(expected);
  });
  it("will return null if a property matched the number type in config", () => {
    const config = {
      name: "age",
      type: "number",
    };
    const body = {
      age: 1,
    };
    const results = checkCorrectType(body, config);
    expect(results).toBeNull();
  });
  it("will return an error message if the property matched is not of number type", () => {
    const config = {
      name: "age",
      type: "number",
    };
    const body = {
      age: "1",
    };
    const expected = {
      error: `property age should be a valid number`,
    };
    const results = checkCorrectType(body, config);
    expect(results).toEqual(expected);
  });
});
