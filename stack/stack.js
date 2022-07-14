// Adding element to the stack
var stack=[]
stack.push(10);
stack.push(20);
stack.push(30);

// Printing the stack element
// prints [10, 20, 30]
console.log(stack + " ");

// returns 30
console.log(stack[stack.length-1]);

// returns 30 and remove it from stack
console.log(stack.pop());

// returns [10, 20]
console.log(stack + " ");
