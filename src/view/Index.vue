<script setup>
import { onMounted, ref } from 'vue'

import NavBar from '@/components/NavBar.vue'
import Hero from '@/components/Hero.vue'
import About from '@/components/About.vue'
import Contact from '@/components/Contact.vue';
import Projects from '@/components/Projects.vue';
import Skill from '@/components/Skill.vue';

import AOS from 'aos'

const loading = ref(true);

onMounted(() => {
    AOS.init({});
    setTimeout(() => {
        loading.value = false;
    }, 5000);
});

</script>

<template>
     <div class="container relative mx-auto bg-dark text-white px-8 md:px-0">

            <NavBar/>
            <Hero/> 
            <About/>
            <Skill/>
            <Projects/>
            <Contact/>   
        
        </div> 
</template>

<style>

/* we will explain what these classes do next! */
.list-move,
.list-enter-active,
.list-leave-active {
   opacity: 1;
  -webkit-transform: none;
   transform: none;
   transition: all 500ms ease-in-out;
}

.list-enter-from,
.list-leave-to {
        opacity: 0;
        -webkit-transform: translate3d(0, 100%, 0);
        transform: translate3d(0, 100%, 0);
}


.before-enter {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
}

.enter{
    opacity: 1;
  -webkit-transform: none;
   transform: none;
   transition: all 500ms ease-in-out;

}

</style>
