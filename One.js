//                                 -----(Rules for chosing name of variables)-----

// 1.Letter,underscores and $ sign are allowed
// let 8a=12; this is not allowed
// 2.java script reserved words cannot be used as variables
// let let=12; //var var=12; //const const=12; this is not allowed
// 3. Letter and leTTer are both different variables
// let Letter = 12; & let leTTer = 12; 

//                              -----(Java script reserved keywords var,let,const)-----

//          -----(var)-----
// 1. var can be redeclared
 var x=12;
 var x="abc";
 console.log(x);
// 2. it usually throws error,bugs so it is not recomended

//          -----(let)-----
// 1. let is block scoped the code in block run first
 let bx = "Letter"
 {
    let bx = "ABCD"
    console.log(bx);
 }
 console.log(bx);
// between the both ABCD & Letter ABCD will print first
// 2. let cannot be redeclared

//        -----(Const)-----
 const ax = "Ghulam Ahmad"
 console.log(ax);
// 1. Constant can not be changed
// if you do like  let ax = (anything) this will throw an eror because ax is already a constant
// 2. Const must be initialized during decleration
 const ay = 2;
 console.log(ay);
// if you do const a; this will throw an error

//                             -----(Primitive data types)-----

// There are 7 primitive data types

// 1.null
let a = null; // it means "a" is just a variable with nothing in it
// 2.number
let b = 36; // it means "b" contains a number
// 3.boolean
let c = true; // it may be false
// 4.bigint
let d = BigInt("1234"); // it contains big numbers
// 5.string
let e = "Pakistan"; // it is a string
// 6.symbol
let f = Symbol("It is a symbol") // its a symbol
// 7.undefined
let g = undefined; // this means "g" is undefined if you just write let g; results will be the same
console.log(a,b,c,d,e,g);
// if you want to know the datatype of any variable here is the method
console.log(typeof c);

//                                  -----(objects)-----

// Objects are non primitive data types
// it's a kind of collection of data
// This is how a object is formed
const info = {
   Name :"Ghulam Ahmad",
   Age : 20,
   Male : true,
   Married : undefined,
   Job :null
} 
console.log(info["Name"]);
// This will print Ghulam Ahmad
console.log(info["Age"]);
// This will print 20
//same for Male,Married & Job
