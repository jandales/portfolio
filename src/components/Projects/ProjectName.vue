<template>
    <h3 class="mb-2 mt-2 text-xl font-semibold !text-neutral-900 dark:!text-white">{{name}}</h3>
</template>
<script setup>
defineProps({
    name: String,
})
</script>