import { user_info_get_api } from "@/services/profile";
import { ref } from "vue";

const users = ref([])

// return user
export const getUserInfo = async(id) => {
    const idf = users.value.findIndex(user => user.id == id)
    if(idf >= 0){
        return users.value[idf]
    }
    try {
        return await user_info_get_api(id).then(res => {
            users.value.push(res)
            return res
        })
    } catch (error) {
        console.log(error)
    }
}