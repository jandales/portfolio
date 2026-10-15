<template>
  <div id="skills" class="mb-4 mt-10">
    <h3
      data-aos="fade-up"
      data-aos-delay="250"
      data-aos-duration="1500"
      class="mb-6 block py-4 text-center text-sm font-semibold uppercase tracking-[0.2em] !text-violet-600 dark:!text-violet-300 lg:text-left"
    >
      Skills
    </h3>
    <ul
      data-aos="fade-up"
      data-aos-delay="300"
      data-aos-duration="1500"
      class="flex flex-wrap justify-center gap-3 lg:justify-start"
    >
      <li
        v-for="skill in skillNames"
        :key="skill"
        class="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium !text-neutral-800 dark:bg-white/10 dark:!text-slate-200"
      >
        {{ skill }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { skills } from '@/data/skills'

const skillNames = [...skills.frontend, ...skills.backend].map((skill) => skill.name)
</script>
