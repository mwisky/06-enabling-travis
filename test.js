const test = require("tape");
test("Test integer addition", (t) => {
  t.plan(1);
  t.equal(1 + 1, 2);
});

test("Test string addition", (t) => {
  t.plan(1);
  // Expected to fail
  t.equal("1" + "1", 2);
});
