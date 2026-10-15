<template>
    <div  class="mb-4 ">
        <h3 
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="1500"
          class="mb-6 block py-4 text-center text-sm font-semibold uppercase tracking-[0.2em] !text-violet-600 dark:!text-violet-300 lg:text-left">EDUCATION</h3>
        <div class="flex">
        <ul data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1500"
            class="w-full rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/5">
            <li class="flex items-center py-1 !text-slate-600 dark:!text-slate-300" v-for="item in educations" :key="item.id">
                    <span class="mr-3 text-xs !text-violet-500">
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
