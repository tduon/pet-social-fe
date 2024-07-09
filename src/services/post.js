import { process_error } from ".";
import { api } from "@/modules/api";

export const post_create_api = async (data) => {
    try {
        return await api("POST", "/posts", data);
    } catch (error) {
        process_error(error);
        throw error;
    }
}

export const post_list_api = async () => {
    try {
        return await api("GET", "/posts", );
    } catch (error) {
        process_error(error);
        throw error;
    }
}
