// 2 function in 1 object
let obj = {};

function A() { return obj; }
function B() { return obj; }

alert( new A() == new B() ); // true