import axios from "axios";

export function TableDataApiFetch(){
    return axios.get("https://jsonplaceholder.typicode.com/posts",{
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'Content-Language' : 'en-US',
        }
    })
}