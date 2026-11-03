// Type Assertion
// Syntax "as"


type Status = "pending" | "approve" | "rejected";

const confuseStatus : string = "pending";

const showStatus = (status: Status) => {
  console.log("Your current application status "+ status);
}


showStatus(confuseStatus as Status);

// Type assertion meaning we are forcing typescript to set the type accrodingly our peference, here typescript trust the developer



// no null asertion

interface Config {
    port?: number,


}

const config : Config = {
    port: 5000,
}


const currentPort : number = config.port!;

const currentPort2 : number = config.port as number;

// constant assertion

let configuratoin = {
    port: 8080,
    prefix: "/api/v1"
} as const;


// configuratoin.port = 50; // cannot modify