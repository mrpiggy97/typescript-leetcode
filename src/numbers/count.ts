export default function count(num : number) : number{
    let currentNum = num
    let counter : number = 0
    while(currentNum > 0){
        let remainder : number = currentNum%2
        if(remainder === 1){
            counter++
        }
        currentNum = Math.floor(currentNum/2)
    }
    return counter
}