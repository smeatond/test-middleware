//easy way to add validation
const validationConfig = [
  {
    name: "name",
    type: "string",
    min: 1,
    required: true,
  },
  {
    name: "age",
    type: "number",
    min: 1,
    max: 99,
    required: true,
  },
  {
    name: "date",
    type: "date",
    required: false,
  },
];

module.exports = validationConfig;
