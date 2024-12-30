import axios from "axios";

const URL = "http://localhost:5000";

// axios.interceptors.request.use(
//     (config) => {
//         const token = localStorage.getItem('token');
//         if (token) {
//             config.headers['Authorization'] = `Bearer ${token}`;
//         }
//         return config;
//     },
//     (error) => {
//         return Promise.reject(error);
//     }
// );

// post signup data
// const res = await axios({

export const postSignUpData = async (data,reset,notify,notifyerr,navigate) => {
    try {
        const res = await axios.post(`${URL}/signup`, data);
        notify(res.data.message);
        reset();
        navigate('/signin');
        //     method: 'POST',
        //     url: `${URL}/signup`,
        //     data,
        //     headers: {
        //       'Content-Type': 'application/json',
        //       Authorization: 'Bearer YOUR_TOKEN',
        //     },
        //   });
    } catch (err) {
        notifyerr(err.response.data.error);
        console.error(err);
    }
}

// post signup data

export const postSignInData = async (data, reset, notify ,notifyerr ,navigate) => {
    try {
        const res = await axios.post(`${URL}/signin`, data);
        notify(res.data.message);
        localStorage.setItem('jwt', res.data.token);
        reset()
        navigate('/');
    }catch(err) {
        notifyerr(err.response.data.error);
        console.error(err);
    }
}

// post post Share

export const postShare = async (data) => {

}