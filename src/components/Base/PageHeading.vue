<template>
    <h1 
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="1500"
        :class="[styles ? styles : 'block text-center text-[clamp(2rem,1rem+2.2vw,3rem)] font-extrabold tracking-tight mb-10 lg:mb-16 !text-neutral-900 dark:!text-white' ]" >
         {{title}}
    </h1>
</template>
<script setup>
defineProps({
    title : String,
    styles : {
        type : String,
        defualt : '',
    },
})
</script>