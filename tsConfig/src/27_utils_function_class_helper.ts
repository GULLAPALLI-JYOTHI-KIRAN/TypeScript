/* Utilities with Functions and class's */


function HelpType(id:number,IsExpose=false){
    return{
        id,
        name:"John",
        IsExpose,
    }
}

type TypeReturnFucn=ReturnType<typeof HelpType>
type TypeParameterFucn=Parameters<typeof HelpType>

const args_:TypeParameterFucn=[10,true]
const funcCall:TypeReturnFucn=HelpType(...args_);

/* Here we are function as a type and its parameter also a type so That no need to create special types for each individual function return type and for the parameters with the utility helper of function. Here we are since creating a separate types for each individuals if if they want to use this function they need to this paper for parameters to that function as an Arg */


// Class Utility function
class PublicMe{
    constructor(public name:string, public state:boolean){}
    greet(){
        return`Hello I am ${this.name}`;
    }
}

type ClassReturn=InstanceType<typeof PublicMe>
type ClassConstructor=ConstructorParameters<typeof PublicMe>

const consArg:ClassConstructor=['Ben',true]
const InstClass:ClassReturn=new PublicMe(...consArg)