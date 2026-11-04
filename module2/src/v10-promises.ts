// Promise is a placehoulder;



interface User {
        name: string,
        role: string,
}



interface APIResponse<T> {
    data: T,
    success: boolean,
    statusCode: number,
    mesage: string,
}


type UserResponse = APIResponse<User>;


const fetchUser = async () : Promise<User | undefined> => {

    try {

        const res = await fetch ("/api/v1/some-endpoint");
        const data = (await res.json()) as APIResponse<User>;

        if (!res.ok || !data.success) {
            throw new Error(`Failed to fetch user data ${data.mesage}`);
        }


        return data.data;
    }

    catch (error) {

        if (error instanceof Error) {
            console.log (error)
        }

        else {
            console.error("Somthing went wrong")
        }

    }
}
 

const userInfo = await fetchUser ();

if (userInfo) {
    console.log (userInfo.name)
}