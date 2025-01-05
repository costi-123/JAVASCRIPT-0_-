// datatype conversion

//________________________________________________________________________________________________________conversion of datatypes into number

let str1 = "39"// string
let newNum1 = Number(str1)

let str2 = "abc"// string
let newNum2 = Number(str1)

let str3 = null // object
let newNum3 = Number(str2)

let str4 = true // boolean
let newNum4 = Number(str3)

// console.log(typeof newNum)
//console.log(newNum)

// console.log(typeof newNum) 
//console.log(newNum)

// console.log(typeof newNum2)
// console.log(newNum2)

// console.log(typeof newNum3)
// console.log(newNum3)


// Here :
// "33" (string) --> 33 (Number)
// "abc" (string) --> NaN (Number)
// "null" (object) --> 0 (number)
// "true" (boolean) --> 1 (number)
// "false" (boolean) --> 0 (number)

//_______________________________________________________________________________________________________conversion of datatypes into boolean

let bool_1 = 1
let true_bool_1 = (Boolean)(bool_1)

let bool_2 = 0
let true_bool_2 = (Boolean)(bool_2)

let bool_3 = ""
let true_bool_3 = (Boolean)(bool_3)

let bool_4 = "vardhan"
let true_bool_4 = (Boolean)(bool_4)

// console.log(true_bool_1);

// console.log(true_bool_2);

// console.log(true_bool_3);

// console.log(true_bool_4);



// here :
// "1" (string) --> true (boolean)
// "0" (string) --> false (boolean)
// ""  (string) --> false (boolean)
// "vardhan" (string) --> true (boolean)


















