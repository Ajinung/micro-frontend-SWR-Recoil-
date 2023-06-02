const url = "http://localhost:1122"
import axios from "axios"

export const getData = async () => {
    try {
        return await axios.get(url)
    } catch (error) {
        console.log(error)
    }
}
export interface iData {
    title?: string;
    _id?: string;
}

export const postData = async (data: iData) => {
    try {
        return await axios.post(url, data)
    } catch (error) {
        console.log(error)
    }
}