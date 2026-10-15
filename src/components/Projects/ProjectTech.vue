<template>
    <ul class="flex flex-wrap gap-4  !justify-start mb-2">
        <li class="rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-xs font-medium !text-violet-600 dark:border-violet-400/30 dark:bg-white/10 dark:!text-violet-300" v-for="(item, index) in list" :key="index">{{item}}</li>                      
    </ul>
</template>
<script setup>
    defineProps({
        list: Array,
    })
</script>