<script setup>
import { ref, onBeforeMount } from "vue";
import { api } from "@/modules/api";

// khi component vừa được chạy gọi getApi
const posts = ref([]);
onBeforeMount(async() => {
    await api("GET", "/posts").then(res => {
        posts.value = res
        console.log(posts.value)
    })
})
</script>

<template>
    <div>
        <h1>Posts</h1>
        <div v-for="post of posts.value">
            <h2>{{ post.title }}</h2>
            <div>
                {{ post.content }}
            </div>
            <hr>
        </div>
    </div>
</template>

<style scoped>

</style>