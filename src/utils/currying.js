function add(a) {
    return function (b) {
        return a+b;
    } 
}

const result = add(1)(5);

// arrow function syntax
const add2 = (a) => (b) => a+b;
