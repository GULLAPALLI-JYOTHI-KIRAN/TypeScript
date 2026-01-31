/* Getter and Setter in class */


class Temp{
    #c:number;
constructor(c:number){
    this.#c=c
}

    get numState(){
        return this.#c
    }
    set numState(value){
        this.#c=value
    }
}

const tem=new Temp(1000);

tem.numState=100
console.log(tem.numState);
