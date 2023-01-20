<template>
    <div class="h-10 w-10">
            <img :src="image" class="w-full h-full"
            :alt="alt">
    </div>
</template>

<script setup>
defineProps({
    image : String,
    alt: String,
})
</script>