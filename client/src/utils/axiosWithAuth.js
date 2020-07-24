import axios from 'axios'


const axiosWithAuth = () => {
    const token = window.localStorage.getItem('token')

    return axios.create({
        baseURL: 'http://localhost:5000',
        headers: {
            authorization: token
        }
    })
}


export default axiosWithAuth