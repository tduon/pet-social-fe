<script setup>
import { ref } from "vue"
import { isLoggedIn, isCreatedProfile, log_out, auth_user } from '@/stores/auth';

const showDropdown = ref(false);

const openDropdown = () => {
    showDropdown.value = true;
}

const closeDropdown = () => {
    showDropdown.value = false;
}
</script>

<template>
    <div v-if="!isLoggedIn">
        <RouterLink to="/login">Login</RouterLink> |
        <RouterLink to="/register">Register</RouterLink>
    </div>
    <div v-else>
        <span @click="openDropdown" class="hover-email">{{ auth_user.email }}</span>
        <div class="hover-popup" v-if="showDropdown">
            <div class="overlay" @click="closeDropdown"></div>
            <div class="popup" @click="closeDropdown">
                <span class="popup-tab">{{ auth_user.email }}</span>
                <RouterLink v-if="!isCreatedProfile" class="popup-tab" to="/profile/update">Create Profile</RouterLink>
                <RouterLink v-else class="popup-tab" :to="'/profile/' + auth_user.profile_id">My Profile</RouterLink>
                <span class="popup-tab" @click="log_out">logout</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.hover-email {
    cursor: pointer;
    background-color: rgb(235, 235, 183);
    padding: 6px;
}

.hover-popup {
    position: relative;
}

.popup {
    position: absolute;
    width: 200px;
    background-color:azure;
    z-index: 11;
    display: flex;
    flex-flow: column;
    border-radius: 6px;
}

.popup-tab {
    padding: 12px;
}

.overlay {
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0px;
    right: 0px;
    z-index: 10;
}
</style>