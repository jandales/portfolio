<script setup>
import AvatarImage from '@/assets/avatar.jpg'
</script>
<template>
    <div  data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1500" class="mx-auto relative  aspect-square md:w-4/5  md:mx-0 rounded-md  overflow-hidden "> 
        <img :src="AvatarImage" class="w-full h-full" alt="">                    
    </div>
</template>