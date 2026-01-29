/* Rest Tuple with functions In Ts */

function HasRestParams(...res:number[]):number{


    /* In This function we are making parameter as type as number array of rest parameter */
    return res.reduce((e,n)=>n+e,1);
}

console.log(HasRestParams(1,2,3,4));
console.log(HasRestParams(11,21,31,40));



// Rest with Tuple type

function HasRangeLoop(...args:[start:number,end:number,step?:number]):number[]{


    /* Here we are making parameter as array tuple(fixed type and fixed length)  and we destructe rest parameters array and step is optional */
    const [start,end,step=1]=args;
    const output:number[]=[];
    for(let n=start;n<=end;n+=step){
        output.push(n)
    }

    return output;
}

console.log(HasRangeLoop(11,23));

console.log(HasRangeLoop(11,23,2));


// array passing passing with destructuration


function draw(x:number,y:number){

    console.log(x,y);
    
}

// const abs=[10,20];
// draw(...abs) //if you want to pass array with spread argument that should be readonly or tuple in ts that's why we are getting error highlights
const abs=[10,20] as const;

draw(...abs);



