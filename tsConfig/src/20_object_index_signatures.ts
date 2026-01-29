/* Index Signatures in TS */


/* Object key as specific type and the value should be another specific type then you can use this below */

type KeyValueDifferent={[k:string]:number}

const obj1:KeyValueDifferent={};

obj1["Share"]=100

obj1['comment']=1000

obj1['Likes']=100000000


console.log(obj1);

/* If the object key must be finite and values can be any then use like below */


type Finite=Record<"share"|"like",number>

/* Here we are two keys and their values should be number. While creating the object, both they value must be number type only */

const obj2:Finite={
    "share":100,
    "like":10
}


// You can use when you want a dynamic keys  and values

const DynamicObj=new Map<string,number>()

DynamicObj.set("master",1001);
DynamicObj.set("rate",12);


/* If you want value should be any kind like can be a number or und but key should be specific */

type eitherValues=Record<string,number|undefined>;

const obj12:eitherValues={
    "flag":1,
    fight:undefined
}
console.log(obj12);
