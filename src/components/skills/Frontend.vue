<template>
  
  <div class="mb-8">
    
     <div class="p-8 bg-white rounded-md shadow-md">
       
      <h2 class="text-center text-lg font-semibold mb-4">Frontend</h2>
      
      
      <div class="grid grid-cols-4 gap-8">
        <div v-for="skill in skills" class="flex flex-col items-center">
          <div class="h-14 w-14">
            <img :src="skill.image" class="w-full h-full"
            :alt="skill.name">
          </div>
          <label class="mt-2 block text-center">{{skill.name}}</label>
        </div>
      </div>
    
  </div>
  
  </div>
  
</template>
<script setup>

const skills = [
  {
    name : 'Vuejs',
    image : '/assets/img/vuejs.svg',
  },
  {
    name : '/assets/img/javascript.svg',
    image : 'Javascript',
  },
  {
    name: 'TypeScript',
    image: '/assets/img/typescript.svg',
  },
  {
    name: 'Tailwind',
    image: '/assets/img/tailwind.svg',
  },
  {
    name: 'Bootstrap',
    image: '/assets/img/bootstrap.svg',
  },
  {
    name: 'HTML',
    image: '/assets/img/html.svg',
  },
  {
    name: 'CSS',
    image: '/assets/img/css.svg'
  }
];
  
</script>