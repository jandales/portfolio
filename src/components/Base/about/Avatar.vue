<script setup>
import  { ref } from 'vue'
const avatar = ref('/avatar.jpg');
</script>
<template>
    <div v-scrollanimation class="mx-auto relative w-[300px] h-[300px] md:mx-0 rounded-md  overflow-hidden"> 
        <img :src="avatar" class="" alt="">                    
    </div>
</template>