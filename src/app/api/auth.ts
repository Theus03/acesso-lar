import axios from "axios"

export function signUpEmail(user: User) {
    if (user != null) {
        axios({
            method: "POST",
            url: "https://680144c481c7e9fbcc421682.mockapi.io/api/v1/users",
            data: {
                email: user.email,
                password: user.password,
                name: user.name
            }
        })    
    } else {
        throw new Error("User is null");
    }
}

export function signInEmail(user: User): Promise<User | undefined> {
    if (user != null) {
        return axios({
            method: "GET",
            url: "https://680144c481c7e9fbcc421682.mockapi.io/api/v1/users",
        }).then(response => {
            const foundUser = response.data.find((item: User) => 
                item.email === user.email && item.password === user.password
            );
            return foundUser;
        }).catch(error => {
            throw new Error(`Error: ${error}`);
        });
    } else {
        return Promise.resolve(undefined);
    }
}