/* Utilis in Union Ts */

/* Exculde<U,V> */ // The whatever U type having on the left, And whatever you on right side V it will be removed from the U

type EventInfos="keyUP"|"KeyDown"|"OnClick"|"mouseMove"

type EventInfos1=Exclude<EventInfos,"KeyUP">;

function MyEvent(e:EventInfos1){
    console.log(e);
    
}

MyEvent("KeyDown")
// MyEvent("KeyUP") // You will get error because you have excluded ke up from the eventinfos type
 

// Extract<U,V>// Same as excluded type it will add U inside whatever you placed in the V

type ActionInfos="Read"|"Create"|"Update"|"Delete"

type ActionInfos1=Extract<ActionInfos,"Read"|"Create"|"Update">

function ActionEvent(e:ActionInfos1){
    console.log(e);
    
}

ActionEvent("Create")
// ActionEvent("Delete") // This will not be included at the final Why because you have modified the existing with new type

// NonNullable -> We are making the type should not be nullable or undefined

type MayBeNumber=Number|null|undefined
type NotNull=NonNullable<MayBeNumber>

function MaycheckNumber(num:NotNull){
    console.log(num);
    
}

MaycheckNumber(100)
// MaycheckNumber("10")// We are making not so it will take only only number from the Maybenumber type