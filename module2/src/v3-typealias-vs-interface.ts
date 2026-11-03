// type alias vs interface

// Interface is generatlly connected to objects 
// Type alias is more conected to literals, Unions, tuples, premitives.

type Id = number;

// interface id1 = {number}


type Role = "admin" | "member";

// Interface cannot work here

interface User {
    name: string,
    id: Id,
    role: Role,
}


const user1 : User = {
    id: 112,
    name: "Akash Kumar Saha",
    role: "admin",
}


// Interface:

interface Animal {
    species: string,
}


interface Cat extends Animal{
    breed: string,
}


const cat: Cat = {
    breed: "Persian",
    species: "Felix Catus",
}


//how we can do it for types

type Vehicle = {
    brand: string;
}; 

type Car = {
    model: string;
}


const car1 : Car & Vehicle= {
    model: "Cololla",
    brand: "Toyota"
}

// & = Intersection, Kind of And 
// | = Union, Kind of Or


// We cannot redeclear type, but we can redeclear interface, if we do then both are marged.

interface IEmployee {
    name: string,
}

interface IEmployee {
    id: number,
}

const employee1 : IEmployee = {
    id: 22,
    name: "Akash Kumar Saha"
}

type TEmployee = {
    name: string;
}


// type TEmployee = {
//     not possible
// }