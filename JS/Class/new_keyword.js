function fruit (color, taste) {
    this.color = color
    this.taste = taste
}

let orange = new fruit("orange", "sour");
let apple = new fruit("Red", "sweet")
let mango = {
    color: "yellow",
    taste: "sweet"
}

console.log(apple)
console.log(orange)
console.log(mango)