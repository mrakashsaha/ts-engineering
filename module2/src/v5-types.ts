// Top Types----
let x : any = "Hellow World";
x = 123;

x.length;

let somthing : unknown = "Hello World";

// somthing.length;





// Core types----

const num: number = 456465;
const alpha: string = "1212";

let somthing2 : unknown;

somthing2 = num;


type Status = "pending" | "success"
let someStatus : string;

let myStatus : Status = "pending";

someStatus = myStatus;


// Nullish type

interface User {
    name: string,
}

const currentUser : User | null = null;

// Unit Type Void:

const greet = () => {
    console.log("Hello there")
}

greet ();

const anotherGreet = () : undefined => {
    console.log("Hello there from V5");
    return undefined;
}

let greetStore : void = anotherGreet ();

console.log(greetStore);

//Bottom Type, Never

let neverStoreAnything : never;

// neverStoreAnything = 223;

const getError = (msg:string) : never => {
    throw new Error(msg);
    
}

const a : never = getError("This is the msg");


