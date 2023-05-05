function getNextDay(cells : number[]) : number[]{
    let newCells : number[] = []
    for(let i = 0; i < cells.length; i++){
        if(i === 0){
            newCells.push(0)
        }
        if(i === cells.length-1){
            newCells.push(0)
        }
        if(i !== 0 && i !== cells.length-1){
            let prev : number = cells[i-1]
            let next : number = cells[i+1]
            if(prev === next){
                newCells.push(1)
            }else{
                newCells.push(0)
            }
        }
    }
    return newCells
}

function getArrayFromString(str : string) : number[]{
    let arr : number[] = []
    for(let i=0; i < str.length; i++){
        let subString : string = str[i]
        if(subString === "1"){
            arr.push(1)
        }
        if(subString === "0"){
            arr.push(0)
        }
    }
    return arr
}

export default function prisoCells(cells : number[], days : number) : number[]{
    let cellsClone : number[] = []
    Object.assign(cellsClone,cells)
    let checker : Map<string,number> = new Map<string,number>()
    // find cycle in the first 100 changes
    for(let i=0; i < days; i++){
        cellsClone = getNextDay(cellsClone)
        let exists : boolean = checker.has(cellsClone.toString())
        if(!exists && i < 100){
            checker.set(cellsClone.toString(),i)
        }
        if(exists){
            let selected : number[] = []
            let remainder : number = days%i
            if(remainder === 0){
                remainder = i-1
            }else{
                remainder = remainder-1
            }
            checker.forEach((value, key) => {
                // value in this case represents index and key
                // a string of number[]
                if(value === remainder){
                    selected = getArrayFromString(key)
                    return
                }
            })
            return selected
        }
    }
    return cellsClone
}