class Employee {
    name;
    _baseSalary;
    constructor(name, _baseSalary) {
        this.name = name;
        this._baseSalary = _baseSalary;
    }
    get baseSalary() {
        return this._baseSalary;
    }
    set baseSalary(value) {
        if (value < 0) {
            throw new Error("Salary cannot be less than 0");
        }
        else {
            this._baseSalary = value;
        }
    }
    calculatePay(taxRate) {
        return this.baseSalary - (this.baseSalary * taxRate);
    }
}
class Manager extends Employee {
    calculatePay() {
        return this.baseSalary + 50000;
    }
}
class Developer extends Employee {
    typeOfDev;
    constructor(name, _baseSalary, typeOfDev) {
        super(name, _baseSalary);
        this.typeOfDev = typeOfDev;
    }
    calculatePay(taxRate) {
        return this.baseSalary + 30000 - (this.baseSalary * taxRate);
    }
}
const e1 = new Employee("Lala Bhai", 21200);
console.log(e1.calculatePay(0.1));
const m1 = new Manager("Barik Bhai", 43800);
console.log(m1.calculatePay());
const d1 = new Developer("Jhankar", 18000, "Full Stack Developer");
console.log(d1.calculatePay(0.2));
export {};
