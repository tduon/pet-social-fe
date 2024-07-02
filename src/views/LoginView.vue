<script setup>
import { ref } from "vue";
import { api } from "@/modules/api" ;
import { save_token_local, get_auth_info } from "@/stores/auth";
// tạo dữ liệu để lưu
const dataLogin = ref({
    email: '',
    password: ''
})

const login = async () => {
    try {
        const data = await api("POST", "/auth/login", dataLogin.value);
        console.log(data);
        save_token_local(data.token);
        await get_auth_info();
    } catch (error) {
        console.log(error)
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
@import url("@/assets/form.css");
.page {
    padding-top: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
