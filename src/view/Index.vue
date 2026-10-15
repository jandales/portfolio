<script setup>
import { onMounted, ref } from 'vue'

import NavBar from '@/components/NavBar.vue'
import Hero from '@/components/Hero.vue'
import About from '@/components/About.vue'
import Contact from '@/components/Contact.vue';
import Projects from '@/components/Projects.vue';
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
     <div class="relative font-sans">
            <div aria-hidden="true" class="fixed inset-0 -z-10 bg-[linear-gradient(115deg,#e4edfb_0%,#f7f8fc_40%,#e4f6ee_74%,#d7f3e4_100%)] dark:bg-[linear-gradient(115deg,#0f172a_0%,#111827_48%,#052e1b_100%)]"></div>
            <div class="flex min-h-[100dvh] flex-col">
            <NavBar/>
            <Hero/>
            </div>
            <About/>
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
