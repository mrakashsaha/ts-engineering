// Utility Types

// Partial Utility Types

interface User {
    id: string;
    name: string;
    email: string;
}

type x = Partial <User>
// meaning everying is optional here



const updateProfile = (id: string, data: Partial <User>) => {
    // some backbend logic
}

updateProfile("233", {name: "Akash"} );


// Required Utility Types

interface Config {
    apiKey?: string;
    timeOut?: string;
}

const initialize = (config: Required <Config>) => {
    // some logic will be here
}


initialize({apiKey: "ssasdf", timeOut: "223"});


// Pick Utility Type

interface Product {
    id: number,
    name: string,
    price: number,
    description: string,
}

const preview : Pick <Product, "name"|"description">= {
    name: "ABC",
    description: "EFG",
}

// Omit Utility types

interface Employee {
    id: number;
    name: string;
    salary: number;
    nid: string;

}

 type PublicEmployee = Omit<Employee, "salary" |"nid">

const directoryEntry : Omit<Employee, "salary" | "nid"> = {
    id: 22,
    name: "Akash",
    
}