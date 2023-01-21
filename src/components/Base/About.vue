<template>
<Transition name="list">
    <section id="about" class="page-wrapper !px-8 md:px-0">
        <Heading :title="title" :styles="'pt-16'" />
        <div class="flex flex-col lg:flex-row mt-8">
            <div class="w-full  lg:w-1/2 lg:p-0">
              
                <AboutMe/>

                <Education/>

                <Experience />                  

                <Resume/>
               
            </div>
            <div class="w-full pt-8 lg:pt-0 lg:w-1/2 flex justify-center ">
                    <Avatar/>
            </div>
        </div>
    </section>
</Transition>
    

   
</template>
8
<script setup>

import AboutMe from './Base/about/AboutMe.vue'
import Education from './Base/about/Education.vue'
import Experience from './Base/about/Experience.vue'
import Resume from './Base/about/Resume.vue'
import Avatar from './Base/about/Avatar.vue'
import Heading from './Base/PageHeading.vue'



const title = 'About me'
const resume = '/resume.pdf'

</script>