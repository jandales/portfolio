<template>

    <section id="about" class="min-h-screen md:max-w-2xl md:mx-auto lg:max-w-6xl ">
        <Heading :title="title" />
        
        <div class="flex flex-col  md:gap-8 lg:flex-row-reverse lg:gap-0">
            <div class="w-full lg:w-1/2">
                <AboutMe/>
                <Experience/>
                <Education />
            </div>
            <div class=" flex flex-col mt-20 md:mt-10  lg:mt-0 lg:flex-row lg:w-1/2 md:items-center lg:justify-center lg:items-start">
                <Avatar />
            </div>
           
        </div>       
    </section>

    

   
</template>
8
<script setup>

import AboutMe from '@/components/Base/about/AboutMe.vue'
import Experience from '@/components/Base/about/Experience.vue'
import Heading from '@/components/Base/PageHeading.vue'
import Avatar from '@/components/Base/about/Avatar.vue'
import Education from '@/components/Base/about/Education.vue'

const title = 'About me'

</script>