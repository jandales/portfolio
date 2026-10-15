<template>
  <div data-aos="fade-up"
        data-aos-delay="400"
        data-aos-duration="1500"
        class="h-full md:col-span-2 lg:col-span-1">
   <SkillBaseLayout 
        :title="title" 
        :list="tools"
    />  
    </div>

</template>
<script setup>

import SkillBaseLayout from '@/components/Skill/Base/SkillList.vue';
import { skills } from '@/data/skills'

const { tools } = skills;
const title = 'Others'

  
</script>