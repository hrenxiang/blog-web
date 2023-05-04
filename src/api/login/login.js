import axios from "../axios";

export const login = async (params) => {
    return await axios.post("/login", {
            username: params.username,
            password: params.password,
            loginType: 'normal'
        }
    );
}

export const toRegister = async (params) => {
    return await axios.post("/user/register", {
            username: params.username,
            password: params.password
        }
    );
}