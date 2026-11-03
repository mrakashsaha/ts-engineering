// Literal Type


type Status = "pending";


const status: Status = "pending";

console.log(status);


// Basic Union

type Identity = string | number;

const id: Identity = 578;
const id2: Identity = "dkajsd2";

console.log({id, id2})


// Literal union

type Role = "user" | "admin" | "moderator";

const accountRole : Role = "admin";

console.log(accountRole);


// Object Union

type Admin = {id: number, role: "admin", privilage: string[]};

type Member = {id: number, role: "user", plans: string[]};


type User = Admin | Member;


const myAccount : User = {
    id: 545, 
    role: "admin",
    privilage: ["deleteUser", "assignModerator"],
    
}