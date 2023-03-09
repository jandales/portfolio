<template>
    <div v-scrollanimation class="mb-4 ">
        <h3 class="block py-4 font-bold tracking-wider text-center text-[orange] lg:text-left">EXPERIENCE</h3>
        <div class="flex">
        <ul v-for="experience in experiences" :key="experience.campany" class="lg:max-w-2xl mx-auto">
            <li class="text-center lg:text-left text-lg py-1">                   
                {{experience.campany}}
            </li>
            <li class="text-center lg:text-left text-lg  py-1r">                           
                <p>{{ experience.position }}</p>   
            </li> 
            <li class="text-center lg:text-left text-lg py-1">                           
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