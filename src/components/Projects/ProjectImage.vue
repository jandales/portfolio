<template>
    <div class="aspect-video w-full overflow-hidden bg-slate-100 dark:bg-white/5">
            <img :src="image" alt="" class="h-full w-full object-cover" />
     </div>
</template>
<script setup>

defineProps({
    image : String,
})

</script>