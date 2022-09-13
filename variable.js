var a = "i'm stupid";
var b = 123123;
var c = true;
var d;
function sumMatrix(matrix) {
    var sum = 0;
    for (var i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        for (var i_1 = 0; i_1 < currentRow.length; i_1++) {
            sum += currentRow[i_1];
        }
    }
    return sum;
}
var matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(sumMatrix(matrix));
