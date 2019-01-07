let a = 10;

console.log(a)

function fun() {
    let a = 20;
    console.log(a)
    if (true) {
        let a = 30
        console.log(a)
    }
    console.log(a)
}

fun();

console.log(a)