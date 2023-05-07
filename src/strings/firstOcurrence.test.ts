import firstOcurrence from "./firstOcurrence";

describe("test firstOcurrence function", () => {
    test("test if result is as expected", () => {
        let haystack : string = "rasadi"
        let needle : string = "sad"
        let startingIndex : number = firstOcurrence(haystack,needle)
        expect(startingIndex).toBe(2)
    })
})