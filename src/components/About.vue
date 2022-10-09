<template>
<Transition name="list">
    <section id="about" class="page-wrapper !px-8 md:px-0">
        <h2 v-scrollanimation   class="text-center text-[2rem] text-[orange] font-bold capitalize py-8">About Me</h2>
        <div class="flex flex-col lg:flex-row mt-8">
            <div class="w-full  lg:w-1/2 lg:p-0">
              
                <AboutMe/>

                <Education/>

                <Experience />

                <Skill/>            

                <Resume/>
               
            </div>
            <div class="w-full pt-8 lg:pt-0 lg:w-1/2 flex justify-center ">
                    <Avatar/>
            </div>
        </div>
    </section>
</Transition>
    

   
</template>

<script setup>
import { ref } from 'vue';
import AboutMe from './Base/about/AboutMe.vue'
import Education from './Base/about/Education.vue'
import Experience from './Base/about/Experience.vue'
import Skill from './Base/about/Skill.vue'
import Resume from './Base/about/Resume.vue'
import Avatar from './Base/about/avatar.vue'


const resume = ref('/resume.pdf')
</script>