let arr = [1, 2, 5];
console.log(arr);

// from index -1 (one step from the end)
// delete 0 elements,
// then insert 3 and 4
arr.splice(0,1,5,6,7);
console.log( arr ); // 1,2,3,4,5
/************************************************************************************ */
function slice(){
let arr = ["t", "e", "s", "t"];
console.log(arr);

console.log( arr.slice(1, 2) ); // e,s (copy from 1 to 3)

console.log( arr.slice(3) ); // s,t (copy from -2 till the end)
}
slice();
/********************************************************************************************** */
//concat         it concat array and object


function concat(){
let arr = [1, 2];

let arrayLike = {
  0: "something",
  length: 1
};

console.log( arr.concat(arrayLike) );
}
concat();