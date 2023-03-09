<template>
    <ul class="flex flex-wrap gap-4  !justify-start mb-2">
        <li class="px-2 py-1 bg-light-navy rounded-md " v-for="(item, index) in list" :key="index">{{item}}</li>                      
    </ul>
</template>
<script setup>
    defineProps({
        list: Array,
    })
</script>