export default function firstOcurrence(hayStack : string, needle : string) : number{
    let startingIndex : number = -1
    let currentIndex : number = 0
    let currentWord : string = ""
    for(let i=0; i < hayStack.length; i++){
        let end = i+needle.length
        currentWord = hayStack.slice(i,end)
        if(currentWord === needle){
            startingIndex = currentIndex
            return startingIndex
        }else{
            currentIndex++
        }
    }
    return startingIndex
}