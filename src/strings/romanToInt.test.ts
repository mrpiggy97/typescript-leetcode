import romanToInt from "./romanToInt";

describe("test convertion of roman number to base 10", () => {
    test("test correct convertion", () => {
        let romanNumeral : string = "IX"
        let result = romanToInt(romanNumeral)
        expect(result).toBe(9)
    })
})