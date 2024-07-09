<script setup>
import { ref } from "vue";
import { post_create_api } from '@/services/post';

const post = ref({
    title: '',
    content: ''
})
const emits = defineEmits(["close", "createPost"]);
const closeCreate = () => {
    emits("close")
}

const createPost = async () => {
    try {
        await post_create_api(post.value).then(res => {
            emits("createPost", res)
        });
    } catch (error) {
        console.log(error)
    }
}
</script>

<template>
    <div class="overlay" @click="closeCreate">
        <div class="container" @click.stop="">
            <h1>Create post</h1>

            <form class="form" @submit.prevent="createPost">
                <label>title</label>
                <input type="text" v-model="post.title" placeholder="enter title">
                <div class="error"></div>
                
                <label>content</label>
                <input type="text" v-model="post.content" placeholder="enter content">
                <div class="error"></div>

                <button type="submit">Create post</button>
            </form>
        </div>
    </div>
</template>

<style scoped>
.overlay {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: #00000080;
    z-index: 4;
    justify-content: center;
    align-items: center;
    animation: fadeIn-7ce9fa01 .5s ease;
}

.container {
    background-color: white;
}
</style>