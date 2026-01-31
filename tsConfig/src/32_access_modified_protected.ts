/* Protected keyword in class */


// protected keyword variable will be  accessible within the class and it's sub class also


class Animals{
protected cals:number=23

constructor(cals:number){
    this.cals=cals
}

eat(energy:number){
    this.cals=Math.min(100,this.cals+energy)
}

}

class Dog extends Animals{

    feed(){
        return this.cals
    }
}


const d11=new Dog(2);

d11.eat(30);

console.log(d11.feed());



