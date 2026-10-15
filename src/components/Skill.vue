<template>
  <section id="skills" class="page-wrapper">
    <Heading :title="title" />
    <p
      data-aos="fade-up"
      data-aos-delay="150"
      data-aos-duration="1500"
      class="mx-auto -mt-6 mb-12 max-w-2xl text-center text-[clamp(0.95rem,0.8rem+0.35vw,1.125rem)] leading-relaxed !text-slate-500 dark:!text-slate-300 lg:-mt-10"
    >
      Technologies and tools I use to turn ideas into reliable, user-friendly applications.
    </p>
    <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
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