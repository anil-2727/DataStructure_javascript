// Objects are used for storing keyed collections.
// Arrays are used for storing ordered collections.
// Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.
/* new Map() – creates the map.
map.set(key, value) – stores the value by the key.
map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
map.has(key) – returns true if the key exists, false otherwise.
map.delete(key) – removes the value by the key.
map.clear() – removes everything from the map.
map.size – returns the current element count. */

let value = new Map();

value.set('1', 'str1');   // a string key(key, value)
value.set(1, 'num1');     // a numeric key
value.set(2, 'bool1');
console.log( value.get(1)); // 'num1'
console.log( value.get('1') ); // 'str1'
console.log(value.has(2));       //to check boolean by using key
console.log(value.size);
console.log(value.delete(1));         //to delet the value in a map by using key
console.log(value);
console.log(value.clear('1',true));
console.log(value);


/*************************************************************************************************** */
//set
// A Set is a special type collection – “set of values” (without keys), where each value may occur only once.
// The main feature is that repeated calls of set.add(value) with the same value don’t do anything. That’s the reason why each value appears in a Set only once.
/*new Set(iterable) – creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.
set.add(value) – adds a value, returns the set itself.
set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
set.has(value) – returns true if the value exists in the set, otherwise false.
set.clear() – removes everything from the set.
set.size – is the elements count. */


let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };
let anil = { name: "anil"};

// visits, some users come multiple times
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);
set .add(anil);

// set keeps only unique values
console.clear( set.size ); // 3

for (let user of set) {
  console.log(user.name); // John (then Pete and Mary)
}