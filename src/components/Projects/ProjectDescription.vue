<template>
     <p class="text-sm mb-2">{{ text }}</p>
</template>

<script setup>
defineProps({
    text : String,
})
</script>