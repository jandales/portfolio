<template>
    <span class="mt-2 block max-w-full text-center text-xs font-semibold leading-tight !text-slate-600 transition group-hover:!text-violet-700 dark:!text-slate-300 dark:group-hover:!text-violet-300">{{name}}</span>
</template>
<script setup>
defineProps({
    name : String,
})
</script>