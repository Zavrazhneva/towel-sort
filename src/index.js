module.exports = function towelSort(matrix) {
    let newArr = [];
    if(!matrix) return [];
    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 === 0) {
            matrix[i].forEach(item => newArr.push(item))
        } else {
            matrix[i].reverse().forEach(item => newArr.push(item))
        }
    }
    return newArr;
}
