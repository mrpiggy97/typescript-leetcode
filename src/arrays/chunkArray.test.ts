import chunkArray from "./chunkArray";


describe("test correct output of chunkArray function", () => {
    test("test correct output", () => {
        let array = [1,2,3,4,5]
        let result = chunkArray(array,3)
        expect(result.length).toBe(2)
    })
})