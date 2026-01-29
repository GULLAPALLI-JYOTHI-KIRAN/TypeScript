/* In Operator in TS */

// In operators used to type check property exist in Object


type Secure1={role:"admin",permission:string,access:"full"}
type Secure2={role:"customer",permission:string}

type Fullcheck= Secure1 | Secure2
function SecurityCheck(o:Fullcheck){
    if("access" in o){
        return o.permission="High"
    }
    return o.permission="specific"
}


// ? operator
// this operator used to prevent runtime crashs

const SN123:Fullcheck={role:"admin",permission:"High",access:"full"}
const SN124:Fullcheck={role:"customer",permission:"High",}

console.log(SN123?.access);
// console.log(SN124?.access);


// ?? operator
// this operator used to check left side first and that side should not be null or undefined
//|| operator
// this operator used to check right side if left side is null ,0,undefined

const fsd:number|null=0
const gsf:number|undefined=100

console.log(fsd??100);
console.log(fsd||100);




