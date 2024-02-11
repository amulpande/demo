//        Queen Check
function queenCheck(strArr){
    let queens = strArr.map((peices)=>{
        const x = peices[1]
        const y = peices[3]
        return {x,y}
    })
    for(let i=0; i<queens.length; i++){
        for(let j=i; j<queens.length; j++ ){
            let q1 = queens[i]
            let q2 = queens[j]
            if(q1.x === q2.x || q1.y === q2.y || Math.abs(q1.x - q1.x) === Math.abs(q1.y - q2.y)){
                return `${q1.x},${q1.y}`
            }
            // console.log(q1.x)
        }
    }
    return true
}
console.log(queenCheck(["(2,1)", "(4,2)", "(6,3)", "(8,4)", "(3,5)","(1,6)", "(7,7)", "(5,8)"]))