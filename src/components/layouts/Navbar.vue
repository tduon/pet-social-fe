<script setup>
import NavbarDropdown from "@/components/layouts/NavbarDropdown.vue";
</script>

<template>
    <div class="navbar">
        <RouterLink class="logo" to="/">pet social</RouterLink>-
        <RouterLink class="posts" to="/posts">Posts</RouterLink>

        <div class="navbar-action">
            <NavbarDropdown />
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