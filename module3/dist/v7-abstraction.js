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
            throw new Error("Salary Must be greater than 0");
        }
        else {
            this._baseSalary = value;
        }
    }
}
class Manager extends Employee {
    calculatePay() {
        return this.baseSalary + 5000;
    }
}
class Developer extends Employee {
    calculatePay() {
        return this.baseSalary + 50000;
    }
}
export {};
