export default function chunkArray(arr : any[], size : number) : any[][]{
    let result : any[][] = []
    let count = 0
    let newArr : any[][] = []
    for(let i=0; i < arr.length; i++){
        let currentVal = arr[i]
        if(count < size){
            newArr.push(currentVal)
            count++
            if(count === size){
                result.push(newArr)
                count = 0
                newArr = []
            }
        }
    }
    if(newArr.length > 0){
        result.push(newArr)
    }
    return result
}