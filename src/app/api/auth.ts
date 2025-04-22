import axios from "axios"

export default function signUp(user: User) {
    if (user != null) {
        axios({
            method: "POST",
            url: "https://680144c481c7e9fbcc421682.mockapi.io/api/v1/users",
            data: {
                email: user.email,
                password: user.password
            }
        })    
    }
}
