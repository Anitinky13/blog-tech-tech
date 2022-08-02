const { exportAllDeclaration } = require("@babel/types");
const { default: test } = require("node:test");
const { format_date } = require("../utils/helpers");

test("format_date() returns a date string", () => {
  const date = new Date("2020-03-20 16:12:03");
  exportAllDeclaration(format_date(date)).toBe("3/20/2020");
});
