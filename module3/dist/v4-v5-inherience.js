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
class Manager extends Employee {
    teamMemberCount;
    constructor(name, _baseSalary, teamMemberCount) {
        super(name, _baseSalary);
        this.teamMemberCount = teamMemberCount;
    }
    describeWork() {
        return `${this.name}, manages ${this.teamMemberCount} people`;
    }
    describeManager() {
        return `${this.name}, manages ${this.teamMemberCount} people and got ${this._baseSalary} as salary`;
    }
}
const e1 = new Employee("Akash", 10000);
const e2 = new Employee("Tanvir", 220000);
console.log(e1.describe());
const m1 = new Manager("Firoz Mia", 800000, 3);
console.log(m1.describe());
console.log(m1.describeWork());
console.log(m1.describeManager());
export {};
