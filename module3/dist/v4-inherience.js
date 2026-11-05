class Employee {
    name;
    _baseSalary;
    constructor(name, _baseSalary) {
        this.name = name;
        this._baseSalary = _baseSalary;
    }
    describe() {
        return `${this.name} earns ${this._baseSalary}`;
    }
}
;
class Manager extends Employee {
    teamMemberCount;
    constructor(name, _baseSalary, teamMemberCount) {
        super(name, _baseSalary);
        this.teamMemberCount = teamMemberCount;
    }
}
const e1 = new Employee("Akash", 10000);
const e2 = new Employee("Tanvir", 220000);
console.log(e1.describe());
const m1 = new Manager("Akash", 22000, 3);
console.log(m1);
export {};
