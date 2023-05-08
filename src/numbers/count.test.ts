import count from "./count";
describe("test counter of 1 in binary number", () => {
    test("test counter counts correctly", () => {
        let num : number = 11
        let result = count(num)
        expect(result).toBe(3)
    })
})