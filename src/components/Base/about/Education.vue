<template>
    <div  class="mb-4 ">
        <h3 
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="1500"
          class="block py-4 font-bold tracking-wider text-center text-[orange] lg:text-left">EDUCATION</h3>
        <div class="flex">
        <ul data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1500"
            class="w-full">
            <li class="flex items-center py-1" v-for="item in educations" :key="item.id">
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
    name : 'Bachelor of Science in Computer Science',
    date : '2009 - 2013',    
  }, 
  {
    id : 1,
    name : 'Computer Server and Servicing',
    date : '2017'
  }
]
  
</script>
