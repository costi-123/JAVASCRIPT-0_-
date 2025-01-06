// Primitive

// 7 types : String Number , Boolean, null, undefined, Symbol, BigInt




// Reference (Non primitive)

//Array, Objects, Functions



//<-------------------------------------------------------------->
//Stack (Primitive), Heap (Non - Primitive)

let num1 = 123
let num2 = num1
num1  = 321
// console.log(num1); // 123
// console.log(num2); // 321

let num3 = {
    name: "alan"
}
let num4 = num3
num4.name = "vardhan" 

console.log(num3.name);
console.log(num4.name);
//<-------------------------------------------------------------->



