/* Tuples in Ts */

// Tuple means that fixed length and fixed datatype and doesn't contain either string type or number type

// syntax
//:[type,type] //here we having array length is 2 which is fixed and same type order also matter


let arsf:[number,string,boolean]=[100,"Bullet",true]; // We are making array into a tuples by specifying the fixed length of the array and the fixed data types only Here order of value of it type's assigning into an array also matters


// Readonly tuple


let afs:readonly [number,string]=[10,'sds'];


// we cannot do
//(number | string )[]

// OPtional Tuples

type OptionalTuples=[status:number,message?:string];

let resonpseTuple:OptionalTuples=[202]; // Here we are making the optional type of array , We can miss the message but status should be compulsory. And status type should be number only.