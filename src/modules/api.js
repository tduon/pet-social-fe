import { token } from "@/stores/auth";

export const api = async (method, url, data) => {
    const urlApi = "http://localhost:8000/api" + url
    let body;
    if(data) {
        body = JSON.stringify(data);
    }

    try {
        return await fetch(urlApi, {
            method: method,
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                // gọi api và truyền token
                "Authorization": token.value
            },
            body: body,
        }).then(async res => {
            const data = await res.json();

            return data;
        })
    } catch (error) {
        console.log(err);
    }
}