<template>
   <h2 class="text-left text-lg font-bold !text-neutral-900 dark:!text-white">{{ title }}</h2>  
</template>

<script setup>
    defineProps({
        title : {
            type : String,
            required : true,
        }    
    })
</script>
  