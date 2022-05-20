const { checkMin, checkMax } = require("./checkMinAndMax");

describe("checkMin", () => {
  it("should return null when string meets min specified in config", () => {
    const body = {
      name: "n",
    };
    const config = {
      name: "name",
      required: true,
      type: "string",
      min: 1,
    };
    results = checkMin(body, config);
    expect(results).toBeNull();
  });
  it("should return error when string is less than min specified in config", () => {
    const body = {
      name: "",
    };
    const config = {
      name: "name",
      required: true,
      type: "string",
      min: 1,
    };
    const expected = {
      error: `property name length too short, needs to be greater than 1`,
    };
    results = checkMin(body, config);
    expect(results).toEqual(expected);
  });
  it("should return null when number meets min specified in config", () => {
    const body = {
      age: 1,
    };
    const config = {
      name: "age",
      required: true,
      type: "number",
      min: 1,
    };
    results = checkMin(body, config);
    expect(results).toBeNull();
  });
  it("should return error when number is less than min specified in config", () => {
    const body = {
      age: 0,
    };
    const config = {
      name: "age",
      required: true,
      type: "number",
      min: 1,
    };
    const expected = { error: `property age should be greater than 1` };
    results = checkMin(body, config);
    expect(results).toEqual(expected);
  });
  it("should return null when no min is specified in config", () => {
    const body = {
      name: "name",
      age: 1,
    };
    const config = {
      name: "name",
      required: true,
    };
    results = checkMin(body, config);
    expect(results).toBeNull();
  });
});

describe("checkMax", () => {
  it("should return null when string meets max specified in config", () => {
    const body = {
      name: "n",
    };
    const config = {
      name: "name",
      required: true,
      type: "string",
      max: 1,
    };
    results = checkMax(body, config);
    expect(results).toBeNull();
  });
  it("should return error when string is more than max specified in config", () => {
    const body = {
      name: "na",
    };
    const config = {
      name: "name",
      required: true,
      type: "string",
      max: 1,
    };
    const expected = {
      error: `property name length too long, needs to be less than 1`,
    };
    results = checkMax(body, config);
    expect(results).toEqual(expected);
  });
  it("should return null when number meets max specified in config", () => {
    const body = {
      age: 1,
    };
    const config = {
      name: "age",
      required: true,
      type: "number",
      max: 1,
    };
    results = checkMax(body, config);
    expect(results).toBeNull();
  });
  it("should return error when number is more than max specified in config", () => {
    const body = {
      age: 2,
    };
    const config = {
      name: "age",
      required: true,
      type: "number",
      max: 1,
    };
    const expected = { error: `property age needs to be less than 1` };
    results = checkMax(body, config);
    expect(results).toEqual(expected);
  });
  it("should return null when no max is specified in config", () => {
    const body = {
      name: "name",
      age: 1,
    };
    const config = {
      name: "name",
      required: true,
    };
    results = checkMax(body, config);
    expect(results).toBeNull();
  });
});
