// Write your tests here!
// test/caesar.test.js
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar", () => {
  it("should return false if the shift value is not present", () => {
    expect(caesar("hello")).to.be.false;
  });

  it("should return false if the shift value is 0", () => {
    expect(caesar("hello", 0)).to.be.false;
  });

  it("should return false if the shift value is less than -25", () => {
    expect(caesar("hello", -26)).to.be.false;
  });

  it("should return false if the shift value is greater than 25", () => {
    expect(caesar("hello", 26)).to.be.false;
  });

  it("should encode correctly with a positive shift", () => {
    expect(caesar("hello", 3)).to.equal("khoor");
  });

  it("should decode correctly with a negative shift", () => {
    expect(caesar("khoor", -3)).to.equal("hello");
  });

  it("should maintain spaces and other nonalphabetic symbols", () => {
    expect(caesar("hello, world!", 3)).to.equal("khoor, zruog!");
  });

  it("should handle shifts that go past the end of the alphabet", () => {
    expect(caesar("xyz", 3)).to.equal("abc");
  });

  it("should ignore capital letters", () => {
    expect(caesar("Hello", 3)).to.equal("khoor");
  });
});
