let arr = [1, 5, 25, 20, 16, 32, 56, 60]

console.log(arr)

let arr1 = arr.filter (function (item) {
    return (item % 5 == 0)
})

console.log(arr)
console.log(arr1)