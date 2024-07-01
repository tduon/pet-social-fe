<script setup>
import { RouterView } from 'vue-router'
import Navbar from "@/components/layouts/Navbar.vue"
</script>

<template>
  <div class="app">
    <div class="navbar">
      <Navbar />
    </div>
    <!-- phần thay đổi của từng trang -->
    <div class="page-container">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.app {
  position: absolute;
  width: 100%;
  height: 100%;
}

.navbar {
  width: 100%;
  height: 72px;
  position: absolute;
  top: 0px;
}
.page-container {
  width: 100%;
  height: calc(100% - 72px);
  position: absolute;
  bottom: 0px;
}
</style>
