// Some caveat of type guard

const printAll = (x: string | string[] | null) => {

    if  (x && typeof x === "object") {

        for (let value of x) {
            console.log(value);
        }
    }

    else if (typeof x === "string"){
        console.log(x)
    }

    else {
        console.log("")
    }

}

printAll(null);


// Equality


const compare = (x: number | string, y : number | boolean) => {

    if (x===y) {
        console.log (x, y) // now both x & y are in number typs
    }
}

const printAll2 = (x: string | string [] | null) => {
    if (x!== null) {

        if (typeof x ==="object") {
                    for (let str of x) {
            console.log (str);
            return;
        }

        }

        else {
            console.log(x);
            return;
        }
    }

    else {
        console.log("");
    }
}

printAll2(null)



// In Operator use for a property is inside the object of not.

type Bird = {fly: () => void}

type Fish = {swim: ()=> void}


const move = (animal: Bird | Fish) => {

    if ("fly" in animal) {
        animal.fly();

        return;
    }

    else {
        animal.swim();
    }
}


// Instanceof Check

const date = new Date ();

const err = new Error("Somthing went  wrong")


console.log(date instanceof Date);
console.log(err instanceof Error);


const showDate = (x: Date | string) => {
    if (x instanceof Date) {
        console.log(x.toISOString());
        return;
    }

    else {
        const date = new Date (x);
        console.log (date.toISOString());
    }
};

showDate (new Date("12-12-2025"));

showDate ("12-12-2025");

// Discriminated union==> Get information from object itself


interface Circle {
    kind: "circle",
    radius: number,
}

interface Square {
    kind: "square",
    sideLength: number,
}


const getArea = (shape: Circle | Square) => {

    if (shape.kind === "circle") {
      console.log(shape.radius);
    }

    else {
        console.log(shape.sideLength);
    }
}

 