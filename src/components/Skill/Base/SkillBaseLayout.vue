<template>
    <div v-scrollanimation  class="mb-8 md:mb-0 lg:mb-0" >
        <div class="p-8  rounded-md shadow-md h-full">   
            <slot name="heading"></slot>  
            <div class="grid grid-cols-4 gap-8">                
                <slot name="content"></slot>
            </div>
        </div>  
    </div>
</template>
<script setup>
</script>