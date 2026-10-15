<template>

    <section id="about" class="mx-auto w-full max-w-6xl px-6 py-20 md:px-8">
        <Heading :title="title" />
        
        <div class="flex-col  md:gap-8 lg:flex-row-reverse lg:gap-0">
            <div class="w-full">
                <AboutMe/>
                <Experience/>
                <!-- <Education /> -->
            </div>
            <!-- <div class=" flex flex-col mt-20 md:mt-10  lg:mt-0 lg:flex-row lg:w-1/2 md:items-center lg:justify-center lg:items-start">
                <Avatar />
            </div>
            -->
        </div>       
    </section>

    

   
</template>
<script setup>

import AboutMe from '@/components/Base/about/AboutMe.vue'
import Experience from '@/components/Base/about/Experience.vue'
import Heading from '@/components/Base/PageHeading.vue'
import Avatar from '@/components/Base/about/Avatar.vue'
import Education from '@/components/Base/about/Education.vue'

const title = 'About me'

</script>