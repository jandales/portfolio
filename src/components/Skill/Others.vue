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
const title = 'Others'
const skills = [
  {
    name : 'Github',
    image : '/img/skills/github.svg',
  },
  {
    name : 'VSCode',
    image : '/img/skills/vscode.svg',
  },
  {
    name : 'Sublime Text',
    image : '/img/skills/sublime-text.svg',
  },
  {
    name : 'Postman',
    image : '/img/skills/postman.svg',
  }
];
  
</script>