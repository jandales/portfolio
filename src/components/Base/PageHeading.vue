<template>
    <h1 
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="1500"
        :class="[styles ? styles : 'pt-16 block text-center text-[2rem] font-bold mb-10 lg:mb-20 text-emerald-800 dark:text-white' ]" >
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