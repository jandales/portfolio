<template>
    <label class="mt-2 text-xs md:text-lg  lg:text-sm block font-bold text-center text-emerald-800 dark:text-white">{{name}}</label>
</template>
<script setup>
defineProps({
    name : String,
})
</script>