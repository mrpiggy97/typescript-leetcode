import counter from "./counter";

describe("test counter functions",() => {
    test("test increment function",() => {
        let init : number = 0
        let obj = counter(init)
        let result : number = obj.increment()
        expect(result).toBe(1)
    })
    test("test decrement function",() => {
        let init : number = 5
        let obj = counter(init)
        let result = obj.decrement()
        expect(result).toBe(4)
    })
    test("test reset function", () => {
        let init : number = 5
        let obj = counter(init)
        let result = obj.increment()
        result = obj.increment()
        result = obj.reset()
        expect(result).toBe(5)
    })
})

