<script setup>
import { auth_user, log_out } from '@/stores/auth';
</script>

<template>
    <div class="navbar">
        <RouterLink class="logo" to="/">pet social</RouterLink>-
        <RouterLink class="posts" to="/posts">Posts</RouterLink>

        <div class="navbar-action">
            <span v-if="auth_user">
              <span>{{ auth_user.email }}</span>
              <button @click="log_out">logout</button>
              <RouterLink to="/profile/update">update Profile</RouterLink>
            </span>
            <span v-else>
              <RouterLink to="/login">Login</RouterLink> |
              <RouterLink to="/register">Register</RouterLink>
            </span>
        </div>
    </div>
</template>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  border-bottom: 1px solid black;
  background: rgb(158, 178, 128);
  position: absolute;
  width: 100%;
  height: 100%;
}

.navbar-action {
  margin-left: auto;
}
</style>