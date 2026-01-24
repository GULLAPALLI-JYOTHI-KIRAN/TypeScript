/* ReadOnly values with Array in TS */

// Default Very array is mutable that means we can insert and delete and modify values in array

let arr=[10,30,40,26,69,16];
arr.push(100);

arr.pop();
arr[0]=100;
console.log(arr);
 

// Explicity readonly 

// syntaxs
// readonly datatypeName[]
let avs:readonly number[]=[10,20,30,506.3] //immutable
// We can't do this  modifications
// avs.push(100); //Property 'push' does not exist on type 'readonly number[]'.ts(2339)

// avs.pop(); //Property 'pop' does not exist on type 'readonly number[]'.ts(2339)
// avs[0]=100; //Index signature in type 'readonly number[]' only permits reading.ts(2542)


// Another way readonly

let avrs:ReadonlyArray<number>=[183,501,373,273];


// Another way

let absd=[192,485,'as','is','the'] as readonly (string|number)[]