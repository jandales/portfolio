<template>
    <label class="mt-2 text-xs md:text-lg  lg:text-sm block text-center">{{name}}</label>
</template>
<script setup>
defineProps({
    name : String,
})
</script>