<template>

        <section  id="navbar" class="w-full">
            <header class="flex items-center h-20 mx-auto md:max-w-2xl lg:max-w-6xl">
                 <nav  data-aos="fade-down"
                    data-aos-delay="200"
                    data-aos-duration="1500"
                    class="flex justify-between items-center w-full h-[header]">

                    <a  class="text-[1.5rem] font-extrabold tracking-[.5em] cursor-pointer text-emerald-800 hover:text-emerald-400 dark:text-white dark:hover:text-emerald-400" alt="">ETTO</a>  

                    <span  @click="toggleMenu()" class="block text-[2rem] lg:hidden">
                        <font-awesome-icon icon="fa-solid fa-bars" />
                    </span>

                    <nav class="hidden fixed w-full  min-h-screen top-0 right-0 z-10 backdrop-blur-md lg:relative lg:min-h-0 lg:w-auto lg:block" :class="{ '!block': isMenuOpen }">  
                        <ul tag="ul"   appear class="w-4/5    md:w-1/2 absolute flex  flex-col items-center gap-8  right-0 top-0  min-h-screen  pl-0 list-style-none lg:relative lg:flex-row lg:min-h-0 lg:gap-4 lg:bg-transparent  ">
                                <font-awesome-icon @click="toggleMenu()" icon="fa-solid fa-xmark" class="p-8 pb-0 text-[3rem] self-end lg:hidden" />
                            
                                <li  v-for="item in navItems"  @click="scrollToElement(item)" :key="item">
                                    <a class=" text-2xl  text-emerald-800 hover:text-emerald-400 font-bold  md:mr-8 md:mb-0 lg:text-sm md:flex md:items-center cursor-pointer capitalize  dark:text-white dark:focus:text-emerald-400 dark:hover:text-emerald-400">
                                    {{ item }}
                                    </a>
                                </li> 
                                
                                <li>                         
                                <span @click="toggleDark()">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" :class="` w-6 h-6 ${isDark ? 'text-white hover:text-[orange]' : 'text-emerald-800 hover:text-emerald-400'}`">
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
    </svg>

                                </span>       
                            </li>  
                            </ul>
                    </nav>
                </nav>
            </header>
           
        </section>
      

</template>

<script setup>

import { ref, watch } from 'vue';
import { useDark, useToggle } from '@vueuse/core'
import Resume from '@/assets/resume.pdf'

const isMenuOpen = ref(false);

const toggleMenu  = () =>  {   
    isMenuOpen.value = isMenuOpen.value == true ? false : true;    
}

const isDark = useDark()
const toggleDark = useToggle(isDark)

const navItems = ['about', 'skills','projects', 'contact' ]

const  scrollToElement = (refName)  => {    
    const el = document.getElementById(refName);
    el.scrollIntoView({behavior : "smooth",  block: 'start'})
    isMenuOpen.value = false;
}








</script>

<style scoped>
.sticky-header {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    opacity: .9;
    background-color: #f0fdfa;
    transition: all ease-in-out 100ms;
}
</style>


