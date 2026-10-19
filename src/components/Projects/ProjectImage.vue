<template>
    <div class="w-full overflow-hidden bg-slate-50 dark:bg-white/5">
            <img :src="image" alt="" class="block h-auto w-full" />
     </div>
</template>
<script setup>

defineProps({
    image : String,
})

</script>