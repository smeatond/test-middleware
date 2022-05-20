const checkRequiredProperty = require("./checkRequiredProperty");

describe("checkRequiredProperty", () => {
  it("should return an empty null if no missing required properties", () => {
    const body = {
      name: "name",
      age: 1,
    };
    const config = {
      name: "name",
      required: true,
    };
    const results = checkRequiredProperty(body, config);
    expect(results).toBeNull();
  });

  it("should return error and message about missing property if has missing required property", () => {
    const body = {};
    const expected = { error: `missing required property name` };
    const config = {
      name: "name",
      required: true,
    };
    const results = checkRequiredProperty(body, config);
    expect(results).toEqual(expected);
  });

  it("should return null if not validation config given", () => {
    const body = {
      name: "name",
      age: 1,
    };
    const results = checkRequiredProperty(body, {});
    expect(results).toBeNull();
  });
  it("should return an empty array if not validation config has no required fields", () => {
    const body = {
      name: "name",
      age: 1,
    };
    const config = [
      {
        name: "name",
        required: false,
      },
    ];
    const results = checkRequiredProperty(body, config);
    expect(results).toBeNull();
  });
});
