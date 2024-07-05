<script setup>
import { ref, computed, onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';
import { profile_get_api, profile_update_api } from '@/services/profile';

const route = useRoute();

const idProfile = computed(() => {
    return route.params.id
})

const profile = ref(null);
onBeforeMount(async ()=> {
    try {
        await profile_get_api(idProfile.value).then(res => {
            profile.value = res
        })
    } catch (error) {
        console.log(error)
    }
})
</script>

<template>
    <div class="page">
        <h1>profile </h1>
    </div>
</template>

<style scoped>
</style>