<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

import NavBar from './components/NavBar.vue'
import Hero from  './components/Hero.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue';
import Footer from './components/Footer.vue';
import Projects from './components/Projects.vue';


import { onMounted } from 'vue'




const handleAnimation = () => {
    const animation = animate(".box", { scale : 1.1},
    {
        duration : 1,
        easing : spring,
        repeat : Infinity,
    })
}
</script>

<template>
    <div class="container relative mx-auto bg-dark text-white">

        <NavBar/>
        <!-- <Hero/> -->
        <About/>
        <Projects/>
        <Contact/>
        <Footer/>
        
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
