

const object = {
    who: 'World',
    greet() {
        return `Hello, ${this.who}!`;
    },
    farewell: () => {
        return `Goodbye, ${this.who}!`;
    }
};

console.log(object.greet()); // Hello, World!
console.log(object.farewell()); // Goodbye, undefined!