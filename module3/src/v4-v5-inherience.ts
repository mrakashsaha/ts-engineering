class Employee {
    constructor(
        public name: string,
        protected _baseSalary: number,
    ) { }

    describe(): string {
        return `${this.name} earns ${this._baseSalary}`;
    }
}

class Manager extends Employee {
    constructor(
        name: string,
        _baseSalary: number,
        public teamMemberCount: number,
    ) {
        super(name, _baseSalary);
    }


    describeWork(): string {
        return  `${this.name}, manages ${this.teamMemberCount} people`
    }

    describeManager () : string {
        return `${this.name}, manages ${this.teamMemberCount} people and got ${this._baseSalary} as salary`
    }
}

const e1 = new Employee("Akash", 10000);
const e2 = new Employee("Tanvir", 220000);

console.log(e1.describe());

const m1 = new Manager("Firoz Mia", 800000, 3);

console.log(m1.describe());
console.log(m1.describeWork());
console.log(m1.describeManager());

