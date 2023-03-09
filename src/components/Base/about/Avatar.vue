<script setup>
import  { ref } from 'vue'
const avatar = ref('/avatar.jpg');
</script>
<template>
    <div v-scrollanimation class="mx-auto relative  aspect-square md:w-4/5  md:mx-0 rounded-md  overflow-hidden "> 
        <img :src="avatar" class="w-full h-full" alt="">                    
    </div>
</template>