<template>

    <section id="about" class="mx-auto w-full max-w-6xl px-6 py-20 md:px-8">
        <Heading :title="title" />

        <div class="w-full">
            <AboutMe/>
            <Skill/>
            <Experience/>
        </div>
    </section>

</template>
<script setup>

import AboutMe from '@/components/Base/about/AboutMe.vue'
import Skill from '@/components/Skill.vue'
import Experience from '@/components/Base/about/Experience.vue'
import Heading from '@/components/Base/PageHeading.vue'

const title = 'About me'

</script>
