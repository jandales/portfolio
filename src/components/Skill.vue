<template>
  <section id="skills" class="page-wrapper pt-12 pt- lg:pt-24">
    <Heading />
    <div class="px-4 lg:px-0 grid grid-cols-1 lg:grid-cols-3 md:gap-4">
      <Frontend />
      <Backend />
      <Others /> 
    </div>
  </section>
</template>


<script setup>
import Heading from './Skill/Heading.vue'
import Frontend from './Skill/Frontend.vue'
import Backend from './Skill/Backend.vue'
import Others from './Skill/Others.vue'
</script>