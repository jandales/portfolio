<template>
   <h2 class="text-center text-lg font-black mb-6 text-emerald-800">{{ title }}</h2>  
</template>

<script setup>
    defineProps({
        title : {
            type : String,
            required : true,
        }    
    })
</script>
  