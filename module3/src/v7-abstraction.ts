abstract class Employee {
    constructor (
        public name: string,
        protected _baseSalary: number,
    ) {}

    get baseSalary () : number {
        return this._baseSalary;
    }

    set baseSalary (value: number) {
        if (value < 0) {
            throw new Error ("Salary Must be greater than 0")
        }

        else {
            this._baseSalary = value;
        }
    }


    abstract calculatePay (): number;

    // abstract getResoureces () : string [];

    // abstract regeristerEntryTime (): string;
}


class Manager extends Employee {

    calculatePay() {
        return this.baseSalary + 5000;
    }

}


class Developer extends Employee {

    calculatePay() {
        return this.baseSalary+50000;
    }
}