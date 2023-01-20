<template>
  
  <SkillBaseLayout>   
      <template #heading>
          <SubHeading  :title="title" />
      </template>
      <template #content>
        <div v-for="skill in skills" :key="skill.name" class="flex flex-col items-center">
            <SkillImage :image="skill.image" :alt="skill.name" />
            <SkillName :name="skill.name" />    
          </div>
      </template>  
  </SkillBaseLayout>
  
</template>
<script setup>

import SkillBaseLayout from './Base/SkillBaseLayout.vue';
import SubHeading from './SubHeading.vue';
import SkillImage from './Base/SkillImage.vue';
import SkillName from './Base/SkillName.vue';
const title = 'Backend'
const skills = [
  {
    name : 'PHP',
    image : '/img/skills/php.svg',
  },
  {
    name : 'Laravel',
    image : '/img/skills/laravel.svg',
  },
  {
    name: 'C#',
    image: '/img/skills/c-sharp.svg',
  },
  {
    name: 'NodeJs',
    image: '/img/skills/nodejs.svg',
  },
  {
    name: 'MySql',
    image: '/img/skills/mysql.svg',
  },
  {
    name: 'MongoDb',
    image: '/img/skills/mongodb.svg',
  },
  {
    name: 'CSS',
    image: '/img/skills/css.svg'
  }
];
  
</script>