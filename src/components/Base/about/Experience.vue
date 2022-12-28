<template>
    <div v-scrollanimation class="mb-4 ">
        <h3 class="block py-4 font-bold tracking-wider">EXPERIENCE</h3>
        <div class="flex">
        <ul v-for="experience in experiences" class="w-full">
            <li class="flex items-center text-sm py-1">
                    <span class="text-xs mr-3">
                    <font-awesome-icon icon="fa-solid fa-caret-right" />
                </span>
                {{experience.campany}}
            </li>
            <li class="flex items-center text-sm py-1 ml-4">                           
                <p>{{ experience.position }}</p>   
            </li> 
            <li class="flex items-center text-sm py-1 ml-4">                           
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