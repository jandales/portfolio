<template>
    <h1 v-scrollanimation  :class="[styles ? styles : 'pt-16 block text-center text-[2rem] font-bold mb-10 lg:mb-20 text-[orange]' ]" >{{title}}</h1>
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