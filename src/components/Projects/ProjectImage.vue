<template>
    <div class="w-full hidden md:block">
            <img :src="image" alt="" srcset="" />
     </div>
</template>
<script setup>

defineProps({
    image : String,
})

</script>