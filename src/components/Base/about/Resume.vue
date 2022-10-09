<script setup>
import { ref } from 'vue'
const resume = ref('../resume.pdf')

</script>
<template>
    <div v-scrollanimation class="mt-8 flex justify-center  lg:justify-start">
        <a :href="resume" download class="button ">My Resume</a>
    </div>
</template>