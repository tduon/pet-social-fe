<script setup>
import { ref } from "vue";
import { save_token_local, get_auth_info } from "@/stores/auth";
import { auth_login_api } from "@/services/auth";
import { useRouter } from "vue-router";

const router = useRouter();
// tạo dữ liệu để lưu
const dataLogin = ref({
    email: '',
    password: ''
})

const login = async () => {
    try {
        const data = await auth_login_api(dataLogin.value);
        save_token_local(data.token);
        await get_auth_info();

        router.push("/")
    } catch (error) {
        console.log('on login error', error);
    }
}

</script>

<template>
  <div class="page">
    <!-- đặt @submit.prevent="hàm muốn gọi" vào thẻ form sau đó để button có type=submit thì khi ấn enter sẽ tự động gọi hàm mình muốn -->
    <form class="form" @submit.prevent="login">
        <h2>login</h2>

        <label>Email</label>
        <input type="email" v-model="dataLogin.email">
        <div class="error"></div>

        <label>Password</label>
        <input type="password" v-model="dataLogin.password">
        <div class="error"></div>

        <!-- còn nếu muốn nút gọi đến hàm khác thì để là 
        <button type="button" @click="something">cancel</button> -->
        <button type="submit">Login</button>
    </form>
   
  </div>
</template>

<style scoped>
/* @import url("@/assets/form.css"); */
.page {
    padding-top: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
