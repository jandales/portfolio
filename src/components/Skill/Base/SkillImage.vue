<template>
    <div class="flex h-12 w-12 items-center justify-center">
            <img :src="image" class="max-h-10 max-w-[2.5rem] object-contain transition duration-200 group-hover:scale-110"
            :alt="alt">
    </div>
</template>

<script setup>
defineProps({
    image : String,
    alt: String,
})
</script>