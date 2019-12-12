//BT2:
var input = [8, 5, 6, 7, 1, -1, 4]
function sumArr(arr) {
    var sum = 0
    arr.forEach(function (item) {
        sum += item
    })
    return sum
}
function consoleSumArr(callback) {
    console.log('tong mang:');
    console.log(callback);
}

consoleSumArr(sumArr(input))







