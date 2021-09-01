// to declare a array 1
//let arr = new Array();
// or we cqan declare like this 
//let arr = [];

let names = ["anil","sunil","sagar","mohan"];

console.log(names[0]); // to print the required index
names[2] = "sharanu";      // to replace the names
console.log(names);
names[4] = "chandru";
console.log(names);
console.log(names.length);   // to know the length of the array

/******************************************************************************************* */
// mix of values      // array can store different type of values
function arrays(){
let arr = [ 'Apple', { name: 'John' }, true,21];

// get the object at index 1 and then show its name
console.log( arr[1]); // John

// get the function at index 3 and run it
console.log(arr[3]); // apple
}
arrays();
/*************************************************************************************************** */
//queue is common used array , first in first out ,
// SHIFT and UNSHIFT are used in queue

let fruits = ["apple","bannana","orange","pear"];
console.log(fruits);
console.log(fruits.shift());      //shift  is used to remove the first data(first in first out)
console.log(fruits);
fruits.unshift("apple");             //unshift is used to add the data
console.log(fruits);

/************************************************************************************************************* */
//Arrays in JavaScript can work both as a queue and as a stack
// stack is last in first out       stack is fast then queue
let fruits1 = ["apple","bannana","orange","pear"];
console.log(fruits1);
console.log(fruits1.pop());      //pop is used to remove the last data
console.log(fruits1);
fruits1.push("pear");             //push is used to add the data
console.log(fruits1);

/************************************************************************************************************** */
console.log("*******************************************");   //mix i used shift and push here
let fruits2 = ["apple","bannana","orange","pear"];
console.log(fruits2);
console.log(fruits2.shift());      //pop is used to remove the last data
console.log(fruits2);
fruits2.push("apple");             //push is used to add the data
console.log(fruits2);

/************************************************************************************************************** */
// to print the array for loops
//old method for loop
console.log("to print array old method");
let arr = ["Apple", "Orange", "Pear"];

for (let i = 0; i < arr.length; i++) {
  console.log( arr[i] );
}
/**************************************************************************************************************** */
//to print array by for  of  loop
console.log("to print by for of loop");
let fruitss = ["Apple", "Orange", "Plum"];

// iterates over array elements
for (let fNames of fruitss) {            //fNames is variable wre fruitss array is stored and printed by that 
  console.log( fNames );
}

/************************************************************************************************************ */
// matrix
console.log("matrix");
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
console.log(matrix[2][2]);

/*********************************************************************************************************** */
let arru = ["I", "study", "JavaScript"];
console.log(arru);
arru.splice(1, 2); // from index 1 remove 1 element
console.log( arru ); // ["I", "JavaScript"]
// ARRAY ,QUEUQ AND STACK in these three data are stored in continous manner
//wre as in linked list and remaing data structures the store randomly and added and deleated randomly.


