import count, {convertToBinary} from "./count";
describe("test counter of 1 in binary number", () => {
    test("test convertToBinary correctly converts to binary", () => {
        let num : number = 11
        let result = convertToBinary(num)
        expect(result).toBe(1011)
    })
})