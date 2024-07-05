import { ref, computed } from "vue";
import { auth_info_api } from "@/services/auth";

export const token = ref("");

// lưu thông tin user để phân biệt đã đăng nhập hay chưa 
export const auth_user = ref(null);

export const isLoggedIn = computed(() => {
    return auth_user.value
})

export const isCreatedProfile = computed(() => {
    if(!isLoggedIn.value){
        return false
    }else {
        if(auth_user.value.profile_id){
            return true
        }
    }
    return false
})
/* 
{
    "id": 4,
    "email": "giau@gmail.com",
    "created_at": "2024-07-01T09:13:37.745Z",
    "profile_id": 10, có khi người dùng đã tạo profile
    "role": "USER"
}
*/

export const save_token_local = (tk) => {
    token.value = "Bearer " + tk;
    localStorage.setItem("TOKEN", token.value);
}

export const get_auth_info = async() => {
    try {
        const data = await auth_info_api();
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

export const init_auth = async () => {
    //khi gọi init_auth sẽ lấy token được lưu trong localStorage
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