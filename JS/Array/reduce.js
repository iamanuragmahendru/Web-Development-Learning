let arr = [1, 5, 25, 20, 16, 32, 56, 60]

console.log(arr)

let arr1 = arr.reduce (function (accumulator, item) {
    return (accumulator + item)
})

console.log(arr)
console.log(arr1)