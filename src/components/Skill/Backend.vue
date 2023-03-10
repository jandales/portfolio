<template>
  <div data-aos="fade-up"
       data-aos-delay="300"
       data-aos-duration="1500">
  <SkillBaseLayout 
      :title="title" 
      :list="backend"
    />  
  </div>  
  
</template>
<script setup>

import SkillBaseLayout from '@/components/Skill/Base/SkillList.vue';

import { skills } from '@/data/skills'
const { backend } = skills;
const title = 'Backend'


  
</script>