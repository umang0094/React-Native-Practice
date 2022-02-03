import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';

const instance =  axios.create({
    baseURL: 'http://fc3d-103-17-81-119.ngrok.io'
})

instance.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem('token');
        if(token){
            config.headers.Authorization = `Bearer ${token}`
        }
        return config;
    },
    (err) => {
        return Promise.reject(err)
    }
)

export default instance;