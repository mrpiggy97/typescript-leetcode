function maxSumPath(l1 : number[],l2 : number[]) : number{
    let sum = 0
    let maxLength = 0
    if(l2.length > l1.length){
      maxLength = l1.length
    }
    if(l2.length === l1.length){
      maxLength = l2.length
    }
    if(l1.length > l2.length){
      maxLength = l2.length
    }
    let i = 0
    while(i < maxLength){
      let first = l1[i]
      let second = l2[i]
      if(first > second){
        sum = sum+first
      }
      if(second > first){
        sum = sum + second
      }
      if(first === second){
        sum = sum+first
      }
      i++
    }
    if(maxLength < l1.length || maxLength < l2.length){
        if(maxLength < l1.length){
            for(let index=i; index < l1.length; index++){
                sum = sum+l1[index]
            }
        }
        if(maxLength < l2.length){
            for(let index=i; index < l2.length; index++){
                sum = sum+l2[index]
            }
        }
    }
    return sum
}