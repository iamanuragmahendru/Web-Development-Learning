let obj;
obj = {
	a: 10,
	b: "Hello",
	c: true,
	j: {
		k: 1,
		l: [1,2,3,[1,2]]
	}
};

console.log(obj)
console.log(obj.a)
console.log(obj.b)
console.log(obj.c)
console.log(obj.j)
console.log(obj.j.k)
console.log(obj.j.l)

obj.x = 15
console.log(obj)
console.log(obj.x)

