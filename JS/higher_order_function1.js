function createGreeter (name) {
    let firstName = name.split(" ")[0]
    
    function greeter () {
        console.log("Hello " + firstName)
    }

    return greeter;

}

let harrygreeter = createGreeter("Harry Potter")

harrygreeter();