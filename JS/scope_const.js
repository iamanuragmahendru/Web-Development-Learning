const a = 10;

console.log(a)

function fun() {
    const a = 20;
    console.log(a)
    if (true) {
        const a = 30
        console.log(a)
    }
    console.log(a)
}

fun();

console.log(a)