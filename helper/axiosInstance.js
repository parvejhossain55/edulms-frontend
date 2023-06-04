import axios from 'axios';
import {getToken} from "./sessionStorage";
const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
        'Authorization': `Bearer ${getToken()}`,
    },
});

export default instance;

/*export const  getServerSideProps = async ()=>{
    const page = 1;
    const perPage = 12;
    const keyword = '0';
    const url = `/posts/${page}/${perPage}/${keyword}`
    const {data} = await axiosInstance.get(url);
    console.log('data', data)
    return {
        props: {posts: data}
    }
}*/