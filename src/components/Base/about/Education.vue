<template>
    <div v-scrollanimation class="mb-4 ">
        <h3 class="block py-4 font-bold tracking-wider">EDUCATION</h3>
        <div class="flex">
        <ul class="w-full">
            <li class="flex items-center text-sm py-1" v-for"item in educations" :key="item.id">
                    <span class="text-xs mr-3">
                    <font-awesome-icon icon="fa-solid fa-caret-right" />
                </span>
                {{ item.name }}
            </li>
            
        </ul>                  
        </div>
    </div>
</template>
<script setup>
const educations = [
  {
    id : 0, 
    name : 'Bachelor of Science in Computer Science'
    
  }, 
  {id : 1,
    name : 'Computer Server and Servicing'
  }
  ]
  
</script>
