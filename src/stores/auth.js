import { ref } from "vue";
import { api } from "@/modules/api";

export const token = ref("");

// lưu thông tin user để phân biệt đã đăng nhập hay chưa 
export const auth_user = ref(null);

export const save_token_local = (tk) => {
    token.value = "Bearer " + tk;
    localStorage.setItem("TOKEN", token.value);
}

export const get_auth_info = async() => {
    try {
        const data = await api("GET", "/auth/info");
        auth_user.value = data;
    } catch (error) {
        console.log(err);
    }
}

export const load_token_local = () => {
    const tokenLocal = localStorage.getItem("TOKEN");
    if(tokenLocal){
        token.value = tokenLocal;
    }
}

export const innit_auth = async () => {
    //khi gọi innit_auth sẽ lấy token được lưu trong localStorage
    load_token_local();

    if(token.value){
        //gọi đến backend kiểm tra token trả về có đúng không
        await get_auth_info();
    }
}

export const log_out = () => {
    token.value = null;
    auth_user.value = null;

    localStorage.clear();
}