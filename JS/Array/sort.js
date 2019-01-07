let arr = [3, 45, 12, 34, 25, 96, 54, 67, 1]

console.log(arr)

console.log(arr.sort()) //performs lexicographical sort

console.log(arr)

//for ascending order sort
function compare(a, b) { 
    return (a - b) //b-a for descending order , (a%10) - (b%10) for sorting using unit's digit
}

console.log(arr.sort(compare)) //Does insertion sort