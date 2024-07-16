import { user_info_get_api } from "@/services/profile";
import { ref } from "vue";

const users = ref([])

// nhung api dang duoc goi
const usersCache = ref([]);
// return user
export const getUserInfo = async(id) => {
    const idf = users.value.findIndex(user => user.id == id)
    if(idf >= 0){
        return users.value[idf]
    }

    const idCachef = usersCache.value.findIndex(userCache => userCache.id == id)
    if(idCachef >= 0) {
        return usersCache.value[idCachef].api
    }

    try {
        const api =  user_info_get_api(id).then(res => {
            const idf = users.value.findIndex(user => res.id == user.id)
            if(idf < 0) {
                users.value.push(res)
            }
            
            const idCachex = usersCache.value.findIndex(userCache => userCache.id == res.id)
                if(idCachex >=0){
                    usersCache.value.splice(idCachex, 1)
                }
            console.log("user cache", usersCache.value)
            return res
        })

        usersCache.value.push({
            id: id,
            api: api
        })

        return api
    } catch (error) {
        console.log(error)
    }
}