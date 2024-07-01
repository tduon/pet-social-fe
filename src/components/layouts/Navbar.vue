<script setup>

</script>

<template>
    <div class="navbar">
        <RouterLink class="logo" to="/">pet social</RouterLink>

        <div class="navbar-action">
            <RouterLink to="/login">Login</RouterLink> |
            <RouterLink to="/register">Register</RouterLink>
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