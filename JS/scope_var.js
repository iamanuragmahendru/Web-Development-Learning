var a = 10;

console.log(a)

function fun() {
    var a = 20;
    console.log(a)
    if (true) {
        var a = 30
        console.log(a)
    }
    console.log(a)
}

fun();

console.log(a)