/* Class constructor in Ts */


class Person{
    // this are initalized throught constructor
    id:number;
    name:string;
    email:string;
    // this is initalized and declared with value
    created:Date=new Date();

    constructor(id:number,name:string,email:string){
        // this correct to initalize the instance variable in class
        this.id=id;
        this.name=name;
        this.email=email;
    }

}

const P123=new Person(1,"John","johnny@gmail.com")
const P1234=new Person(3,"Ben","Ben@gmail.com")

// wrong way

// class BadClass{
//     id:string
//     constructor(){}
//     // here you are calling constructor with empty
// }