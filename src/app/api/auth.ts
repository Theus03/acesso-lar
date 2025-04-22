import axios from "axios"

export function signUp(user: User) {
    if (user != null) {
        axios({
            method: "POST",
            url: "https://680144c481c7e9fbcc421682.mockapi.io/api/v1/users",
            data: {
                email: user.email,
                password: user.password
            }
        })    
    } else {
        throw new Error("User is null");
    }
}

export function signIn(user: User) {
    if (user != null) {
        axios({
            method: "GET",
            url: "https://680144c481c7e9fbcc421682.mockapi.io/api/v1/users",
        }).then(response => {
            response.data.map((item: User) => {
                if (item.email === user.email && item.password === user.password) {
                    return item;
                }
            });
        }).catch(error => {
            throw new Error(`Error: ${error}`);
        });  
    }
}
