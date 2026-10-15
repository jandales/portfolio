<script setup>
import AvatarImage from '@/assets/avatar.jpg'
</script>
<template>
    <div  data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1500" class="relative mx-auto aspect-square overflow-hidden rounded-2xl shadow-sm md:mx-0 md:w-4/5"> 
        <img :src="AvatarImage" class="w-full h-full" alt="">                    
    </div>
</template>