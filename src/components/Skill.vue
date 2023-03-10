<template>
  <section id="skills" class="page-wrapper mt-20">
    <Heading :title="title" />
    <div class="px-4 lg:px-0 grid grid-cols-1 lg:grid-cols-3 md:gap-8">
      <Frontend />
      <Backend />
      <Others /> 
    </div>
  </section>
</template>


<script setup>
import Heading from './Base/PageHeading.vue'
import Frontend from './Skill/Frontend.vue'
import Backend from './Skill/Backend.vue'
import Others from './Skill/Others.vue'

const title = 'Skills'

</script>