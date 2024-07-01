import { ref } from "vue";

export const token = ref("");

export const save_token_local = (tk) => {
    token.value = tk;
    localStorage.setItem("TOKEN", token.value);
}

export const get_auth_info = async() => {
    try {
        await fetch("http://localhost:8000/api/auth/info", {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token.value
            },
        }).then(async res => {
            const data = await res.json();
            
            save_token_local(data.token);
        })
    } catch (error) {
        console.log(err);
    }
}

export const load_token_local = () => {
    const tokenLocal = localStorage.getItem("TOKEN");
    if(tokenLocal){
        token.value = "Bearer" + tokenLocal;
    }
}

export const innit_auth = async () => {
    load_token_local();

    if(token.value){
        await load_token_local();
    }
}