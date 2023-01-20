<template>
  
<SkillBaseLayout>
  <template #heading>
    <SubHeading  :title="title" />
  </template>
  <template #content>
      <div v-for="skill in skills" :key="skill.name" class="flex flex-col items-center">          
            <SkillImage  
              :image="skill.image"
              :alt="skill.name"
            />  
            <SkillName 
              :name="skill.name"
            />  
      </div>
  </template>
</SkillBaseLayout>
       

      

  
</template>
<script setup>
import SkillBaseLayout from './Base/SkillBaseLayout.vue';
import SubHeading from './SubHeading.vue';
import SkillImage from './Base/SkillImage.vue';
import SkillName from './Base/SkillName.vue';
const title = 'Frontend'
const skills = [
  {
    name : 'Vuejs',
    image : '/img/skills/vuejs.svg',
  },
  {
    name : 'Javascript',
    image : '/img/skills/javascript.svg',
  },
  {
    name: 'TypeScript',
    image: '/img/skills/typescript.svg',
  },
  {
    name: 'Tailwind',
    image: '/img/skills/tailwind.svg',
  },
  {
    name: 'Bootstrap',
    image: '/img/skills/bootstrap.svg',
  },
  {
    name: 'HTML',
    image: '/img/skills/html.svg',
  },
  {
    name: 'CSS',
    image: '/img/skills/css.svg'
  }
];
  
</script>