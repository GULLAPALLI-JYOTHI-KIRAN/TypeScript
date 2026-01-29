/* Types Alias in Ts*/

//Types-->simillar to interface but some chnage like
// type support  objects union and intersection and functions


type Personal={
    id:string |number,
    name:string,
    ph:number
}

const PersonalData:Personal={
    id:102,
    name:"Rahul",
    ph:1234567890,
}


type Status="New"| "Paid"|"pending"|"cancel"


function checkoutActionStatus(s:Status):string{
    switch (s) {
        case "New":
            return "0"
        case "Paid":
            return "1"
        case "pending":
            return "-1"
        case "cancel":
            return "-2"
        default:
           return "Default"
    }
}


type pp={id:string,name:string}

type priced={price:number}

type ProduPrice=pp & priced


const Pobj:ProduPrice={
    id:'1',name:"HP",price:1799
}



