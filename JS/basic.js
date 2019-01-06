let a = 10
let b = 20;
let c
c = a + b
console.log(c)

let str = "Anurag"
let str1 = 'Mahendru'
console.log(str + " " + str1)

let bool = true;
console.log(bool);

let arr = []
for(let i = 0; i < 10; i++)
    arr[i] = i+1;
console.log(arr)

let obj = {
    a : 10,
    b : "Name",
    c : [a, b, c]
}
console.log(obj)
console.log(obj.a)
console.log(obj.b)
console.log(obj.c)

function fun() {
    console.log('Inside a function')
}

fun()

console.log(typeof a)
console.log(typeof str);
console.log(typeof bool)
console.log(typeof arr);
console.log(typeof obj);
console.log(typeof fun);
console.log(typeof null);
console.log(typeof undefined);

console.log(Number.MAX_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
