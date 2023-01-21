<template>
    <div v-scrollanimation class="mb-4 ">
        <h3 class="block py-4 font-bold tracking-wider text-center text-[orange]">EXPERIENCE</h3>
        <div class="flex">
        <ul v-for="experience in experiences" :key="experience.campany" class="max-w-2xl mx-auto">
            <li class="flex items-center justify-center text-lg py-1">                   
                {{experience.campany}}
            </li>
            <li class="flex items-center justify-center text-lg py-1r">                           
                <p>{{ experience.position }}</p>   
            </li> 
            <li class="flex items-center justify-center text-lg py-1">                           
                <p>{{ experience.years }}</p>   
            </li>                    
        </ul>                  
        </div>
    </div>
</template>

<script setup>
 const experiences = [
   {
     campany : 'PTO Computer Sales and Services',
     position : 'Computer Technician / IT Support',
     years: '5 years experience',
     jobDescription : [],
   }
   ]
  
</script>