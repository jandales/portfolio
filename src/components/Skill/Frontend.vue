<template>  
  <div data-aos="fade-up"
       data-aos-delay="200"
       data-aos-duration="1500">
    <SkillBaseLayout 
        :title="title" 
        :list="frontend"
      />  
  </div>
</template>
<script setup>

import SkillBaseLayout from '@/components/Skill/Base/SkillList.vue';
import { skills } from '@/data/skills'

const { frontend } = skills;
const title = 'Frontend'

</script>