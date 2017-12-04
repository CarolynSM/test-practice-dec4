var assert = require("assert");
var main = require("../main");

describe("main", ()=> {
  describe("#reverseString", ()=> {
    const string = "carolyn";
    it("returns the string in reverse", ()=> {
      assert.equal(main.reverseString(string), "nylorac");
    });
  });
});
