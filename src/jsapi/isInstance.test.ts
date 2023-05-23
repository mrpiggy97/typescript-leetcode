import isInstance from "./isInstance";

describe("test isInstance and arraysAreEqual functions", () => {
    test("test result is correct", () => {
        let result : boolean = isInstance(new Date(), Date)
        expect(result).toBe(true)
        result = isInstance([], Object)
        expect(result).toBe(true)
        result = isInstance(0, Object)
        expect(result).toBe(true)
        result = isInstance(false,Object)
        expect(result).toBe(true)
    })
})