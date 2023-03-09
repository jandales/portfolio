<template>
    <h3 class="mt-2 text-xl text-[orange] font-extrabold mb-2">{{name}}</h3>
</template>
<script setup>
defineProps({
    name: String,
})
</script>