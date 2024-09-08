// Default import

export default function addTwo(a, b) {
    console.log(a + b);
}

//(Default can be just 1, named as many as wanted)

// Named import

function addTwo(a, b) {
    console.log(a + b);
}

function addThree(a, b, c) {
    console.log(a + b + c);
}

//Or import both just as:

function addTwo(a, b) {
    console.log(a + b);
}

function addThree(a, b, c) {
    console.log(a + b + c);
}

export { addTwo, addThree };

//cd ./nombre (anidar direccionamiento)