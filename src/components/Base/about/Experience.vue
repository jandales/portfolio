<template>
    <div  class="mb-4 ">
        <h3 data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1500"
            class="block py-4 font-bold tracking-wider text-center text-[orange] lg:text-left">EXPERIENCE</h3>
        <div class="flex">
        <ul 
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1500"
            v-for="experience in experiences"
            :key="experience.campany" 
            class="md:mx-auto w-full lg:mx-0">
            <li class="flex items-center py-1">  
                <span class="text-xs mr-3">
                    <font-awesome-icon icon="fa-solid fa-caret-right" />
                </span>                 
                {{experience.campany}}
            </li>
            <li class="flex items-center py-1">  
                <span class="text-xs mr-3">
                     <font-awesome-icon icon="fa-solid fa-caret-right" />
                </span>                         
                {{ experience.position }}   
            </li> 
            <li class="flex items-center py-1"> 
                <span class="text-xs mr-3">
                    <font-awesome-icon icon="fa-solid fa-caret-right" />
                </span>                          
                {{ experience.years }} 
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