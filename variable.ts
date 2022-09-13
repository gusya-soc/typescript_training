let a:string = "i'm stupid"
let b:number = 123123
let c:boolean = true
let d:number

function sumMatrix(matrix: number[][]) {
    let sum = 0;
    for (let i = 0; i < matrix.length; i++) {
        let currentRow = matrix[i];
        for (let i = 0; i < currentRow.length; i++) {
            sum += currentRow[i];
        }
    }

    return sum;
}

let matrix = [[1,2,3],[4,5,6],[7,8,9]]
console.log(sumMatrix(matrix))