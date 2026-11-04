// "typeof"


let x = 123;

console.log(typeof x);

let x2 = ["akash"];

console.log (typeof x2);  // will return as object beacuse in typescript without premetivies other ares consider as objects


console.log(typeof x2 === "object");


// Type Guard

const print = (value: string|number) => {

    // return value.toUpperCase();

    // TypeNarrowing using typeGurd

    if (typeof value === "string") {
        return value.toUpperCase();
    }

    else {
        return value;
    }
}


// Truthiness


type User = {
    name: string,
    address?: {
        street: string;
    }
} | null;


const loggedInUser : User ={
    name: "Akash Kumar Saha",
    address: {
        street: "Hasen Unddin Road"
    }
}

const showAddress = (user: User) => {

    if (user && user.address) {

        console.log(user.address.street);
        return;
    }

    throw new Error("User Not Found");
    

}

