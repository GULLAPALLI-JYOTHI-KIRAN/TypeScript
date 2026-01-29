/* Interface and Type alias Differents in TS */

/* Interface -support inheritance,
good for objects,
Support- redeclare and auto merger the previous interfaces
*/


/* Types alias-support objects,functions,unions and intersection

Not Support redeclaration*/


// Interface re-decalre

interface SizedValues{
    width:number
}

interface SizedValues{
    height:number
}

/* Here we have created  interface with same name 2 times but different properties but TypeScript automatically modify  the interface */

const box:SizedValues={
    width:20,
    height:30,
}

console.log(box);


// Types not possible re-declaration

type Areas={
    width:number,
}
// type Areas={
//     heighth:number
// }
