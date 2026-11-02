
let myString : string = "Exploring Web";
let myNumber: number = 54;
let myBoolean: boolean = true;
let mySymbol: symbol = Symbol();
let myBigInt : bigint = 100n;



// If typescipt inteligency try to get the type of veriable then its call implicit 

// and if we declear the type then it called expllicit

const addTwo = (a: number, b: number) : number => {
    
    return a+b;
}


console.log(addTwo(60,40));


// Problem of Array in JS

const jsArray = ["Akash", 343, 2, true];

// Array in typescript 

const arr : string [] = ["Akash", "Abid", "true"];

//decelar array as interface similar to previous
const arr2: Array <string> = ["Akash", "Abid", "true"];

const numArr: number [] = [1, 2, 3];


// Tuple : Meaning Length will be same, and what position what type of data will seat that will be enforeced.

const dhakaLatLong : readonly [number, number] = [23.81033, 90.41252];


// Optional parameter in typescript

const concatName = (firstName: string, lastName ?: string) : string => {

    if (!lastName) {
        return firstName;
    }

    return firstName + " " + lastName;
}


console.log(concatName ("Akash", "Kumar Saha"));


// Default parameter in typescript [Convention is keep the default parameter in last so that we do not need to send undefine for first side parameter]

const greetings = (fullName: string, greet: string = "Hello" ) : void =>{

    console.log (greet + " " + fullName)
}


// greetings(undefined, "Akash K");

greetings ("Fahim");


// Rest parameter

const sum = (...numbers: number []) => {

    return numbers.reduce((total, sum) => total + sum, 0);
}

console.log("sum is " + sum (1, 2, 3, 4, 5, 6, 7));

const logUserAction = (...args : [name: string, age: number, isVoter: boolean]) => {

    const [name, age, isVoter] = args;

    console.log(name + " is " + age + " years old")
}

logUserAction("Akash", 30, true);



// Object:


// Type Aliace
type Address = {
        streetName: string;
        holdingNumber: number;
    }

type User = {

    name: string;
    age: number;
    isActive: boolean;
    action: () => void;
    badges: string [];

    address: Address;

}

const user1 : User = {
    name: "Akash",
    age: 30, 
    isActive: true,
    action: () => console.log("Hello"),
    badges: ["Pro", "Elegent"],
    address: {
        streetName: "Hasen Udin Road",
        holdingNumber: 104
    }
}


const user2 : User = {
    name: "Fahim",
    age: 20, 
    isActive: true,
    action: () => console.log("Hi"),
    badges: ["Pro", "Elegent"],
        address: {
        streetName: "Hasen Udin Road",
        holdingNumber: 104
    }
}


// user2.email = "mr.akash@gmail.com" 

// Lets create Interface

interface Iuser {

    name: string;
    age: number;
    isActive: boolean;
    action: () => void;
    badges: string [];

}


const userX : Iuser = {
    name: "InterFahim",
    age: 20, 
    isActive: true,
    action: () => console.log("Hi"),
    badges: ["Pro", "Elegent"],
}


type UserName = string;

// interface IuserName string // we cannot do this


// Union

// Nested Object


