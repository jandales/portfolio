<template>
   <h2 class="text-center text-lg font-semibold mb-4">{{ title }}</h2>  
</template>

<script setup>
    defineProps({
        title : {
            type : String,
            required : true,
        }    
    })
</script>
  