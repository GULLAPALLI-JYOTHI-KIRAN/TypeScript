/* Intersections in TS

Intersections means Everything from A and B.
*/

// For Example

type Us={id:string;rank:number}

type Country={name:string; current:string}

type Entity=Country & Us; //intersection individual types into single type

let UsCountry:Entity={id:"fsgs12ase",rank:9,name:"USA",current:"Dollars"}

/* Here in this example we created two object type with specific properties on each of them then combined with Entity type this means all both type is combined with Enitity type. Then we assign that entity type to usCountry object */



// Not Do(IMPOSSIBLE IN TS)

type a={id:number}
type b={id:string}

type ab=a & b;

// let c:ab={id:120} // We are getting error by because we can't intersect 2 type with different data types of same property.



// The intersection is used to combine  additional things to existing without modifying the existing that to create a new one;

type Product={id:number;name:string}
type Priced={price:number}

type PricedProduct= Product & Priced

let p1={id:123,name:"One Plus",price:1799};
console.log(p1);
