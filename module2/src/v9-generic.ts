

const wrapInArray = <T>(value: T) => {
    return [value]
};


const stringArray = wrapInArray<string>("Akash");
const numberArray = wrapInArray<number>(123);
const boleanArray = wrapInArray<boolean>(true);


console.log(stringArray);

console.log(numberArray);


stringArray.map((item) => item.toUpperCase());


// interface UserResponse {
//     data: {
//         name: string,
//         role: string,
//     }

//     success: boolean,
//     statusCode: number,
// }



// interface BlogResponse {

//     data: {
//         title: string,
//         description: string,
//         date: string,
//     }

//     success: boolean,
//     statusCode: number,
// }


interface User {
        name: string,
        role: string,
}


interface Blog {
        title: string,
        description: string,
        date: string,

}


interface APIResponse<T> {
    data: T,
    success: boolean,
    statusCode: number,
}

const blogData : APIResponse<Blog> = {
    data: {
        date:"11/11/2012",
        description: "This is the description",
        title: "this is the title for this things"
    },
    statusCode: 200,
    success: true,
}

type UserResponse = APIResponse<User>;




const userData : UserResponse = {
    data: {name: "Akash", role: "admin"},
    statusCode: 200,
    success: true,
}