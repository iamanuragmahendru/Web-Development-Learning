let arr = [1, 5, 25, 21, 15, 32, 56]

console.log(arr)

let arr1 = arr.map (function (item) {
    return (100-item)
})

console.log(arr)
console.log(arr1)