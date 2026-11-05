// interface Employee {
//     name: string,
//     baseSalary: number,
// }
// const employee1 : Employee = {
//     name: "Akash Kumar Saha",
//     baseSalary: 20000,
// }
// const employee2 : Employee = {
//     name: "Priyanka Acharjee",
//     baseSalary: 20000,
// }
class Employee {
    name;
    baseSalary;
    constructor(x, y) {
        this.name = x;
        this.baseSalary = y;
    }
}
const employee = new Employee("Akash", 20000);
const employee2 = new Employee("Priyanka", 30000);
console.log(employee);
console.log(employee2);
console.log(employee instanceof Employee);
console.log(employee2 instanceof Employee);
export {};
