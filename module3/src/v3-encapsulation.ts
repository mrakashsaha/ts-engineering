// Accesss Modifier in TS

// public => we can access form any where, by default everything is public
// private => we cannot access it from outside of the class
// protected => we cannot use it ouside of the class, but if a class inherit another class then we can use it


// readonly access modifier => we only can see

class Employee {

    // public name: string;
    // private baseSalary: number;

    // constructor (name: string, baseSalary: number) {
    //     this.name = name;
    //     this.baseSalary = baseSalary;
    // }

    // Shorthand of above============
    constructor(
        public name: string,
        private _baseSalary: number,
    ) {}

    get baseSalary () : number {

        return this._baseSalary;
    }


    get salaryWithBonus () :number {
        return this._baseSalary +5000;
    }


    // older version was

        getSalaryWithBonus2 () :number {
        return this._baseSalary +20000;
    }

    set baseSalary (value: number) {
        if (value < 0) {
            throw new Error ("Slary cannot be negative value")
        }

        else {
            this._baseSalary = value;
        }
    }
}


const e1 = new Employee("Akash", 20000);
const e2 = new Employee("Priyanka", 50000);

e1.baseSalary = 9;

console.log(e1.baseSalary);

console.log(e1.salaryWithBonus);

// Need to call the method with bracket ();

console.log(e1.getSalaryWithBonus2());