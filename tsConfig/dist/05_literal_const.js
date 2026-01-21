/* Literal const in Ts */
function move(d) {
    console.log(d);
    // Here Parameter value will be Will be in direction type only means that can be either left right up top only
}
const d1 = "Left";
move(d1); // You'll not get any error why because you declared d1 as const so it cannot be changed at any point.
// let d2="Left";
// move(d2);// But you will get in this error because you declared d2 with let  keyboard so it may change at any time so you're getting an error.To modify this like below you will not get a error.
//re-decalre let with type Direction
let d2 = "Left";
move(d2); // you will  not getting any error because specifying the type which is direction so you will not get any error even you assign varaible with let
