/* Assertions in Ts


Type assertions in TypeScript allow developers to override the compiler's inferred type for a value, acting as a directive to treat a variable as a specific type

Used mainly during API data handling or JS-to-TS migration, they are compile-time only and do not affect runtime behavior. The as syntax is preferred over angle brackets to avoid JSX conflicts. z

Sometimes we don't what type of value will be coming from the external Apis or from the external data So we can't decide the exact datatype of it. And values may be deferred.

Showing that time we can use assertion in TypeScript tool telling that we should be the particular type of its value using as as a keyword for the syntax

*/

// Not do like this

let userApi='{"id":1,"name":"john"}'

const res_=JSON.parse(userApi) as {id:number;name:string};


// Do like this 

type User22={id:number;name:string}
function Isuser(v:unknown):v is User22{
    return (typeof v==="object"&& v!==null && "id" in v && typeof(v as any).id=="number"&&"name" in v && typeof(v as any).name=="string")

}

const maybe=JSON.parse(userApi) as unknown;
if(Isuser(maybe)){
    console.log(maybe.id);
    
}

/* Here in the previous when we getting the data from the external source and we can't decide the type of values. So previously we just created some raw API json data and passing it and we are stating as it is containing ID as number and name as string we should not do like this instead we need to create the type means it contains what type of data values then we need to check in all conditions passing through a function like this ever then can we pass the raw external data source we can still can't decide but if you want to access the data we will call that function passing the json parsed data then access it. */