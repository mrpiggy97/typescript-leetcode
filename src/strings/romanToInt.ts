export default function romanToInt(str : string) : number{
    let romanMap = new Map<string, number>()
    romanMap.set("I",1)
    romanMap.set("V",5)
    romanMap.set("X",10)
    romanMap.set("L",50)
    romanMap.set("C", 100)
    romanMap.set("D", 500)
    romanMap.set("M", 1000)
    let sum : number = 0
    let previous : number = 0
    for(let i=0; i < str.length; i++){
        let letter : string = str[i]
        let numericalVal = romanMap.get(letter)
        if(numericalVal){
            if(previous < numericalVal){
                let newVal = numericalVal-previous
                sum = sum-previous
                sum = sum+newVal
            }
            if(previous >= numericalVal){
                sum = sum+numericalVal
            }
            previous = numericalVal
        }
    }
    return sum
}