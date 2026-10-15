<template>
     <p class="mb-3 text-sm leading-relaxed !text-slate-500 dark:!text-slate-300">{{ text }}</p>
</template>

<script setup>
defineProps({
    text : String,
})
</script>