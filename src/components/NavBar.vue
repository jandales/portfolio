<template>

        <section  id="navbar" class="w-full">
            <header class="flex items-center h-20 mx-auto w-full max-w-6xl px-8">

                 <nav data-aos="fade-down"
                    data-aos-delay="200"
                    data-aos-duration="1500"
                    class="flex justify-between items-center w-full ">

                        <a  class="text-xl font-semibold tracking-tight cursor-pointer !text-violet-600 hover:!text-violet-500 dark:!text-violet-300" alt="">Jesus Andales</a>
                        <div class="flex gap-4 md:hidden ">
                            <span @click="toggleDark()" class="">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" :class="` w-8 h-8 ${isDark ? 'text-white hover:text-violet-300' : 'text-slate-700 hover:text-violet-600'}`">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                                    </svg>
                            </span> 
                             <span  @click="toggleMenu()" class="text-3xl text-slate-700 hover:text-violet-600 dark:text-white">
                                <font-awesome-icon icon="fa-solid fa-bars" />
                            </span>
                        </div>
                       

                        <ul class="hidden md:flex items-center gap-8 pl-0 list-style-none">
                            <li  v-for="item in navItems"  @click="scrollToElement(item.id)" :key="item.id">
                                <a class="text-sm font-medium cursor-pointer capitalize !text-slate-600 hover:!text-violet-600 dark:!text-slate-300 dark:hover:!text-violet-300">
                                    {{ item.label }}
                                </a>
                            </li>
                            <li>
                                <a
                                    :href="Resume"
                                    download="Jesus-Andales-Resume.pdf"
                                    class="text-sm font-medium cursor-pointer capitalize !text-slate-600 hover:!text-violet-600 dark:!text-slate-300 dark:hover:!text-violet-300"
                                >
                                    Resume
                                </a>
                            </li>
                            <li>                         
                                <span @click="toggleDark()">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" :class="` w-6 h-6 ${isDark ? 'text-white hover:text-violet-300' : 'text-slate-600 hover:text-violet-600'}`">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                                    </svg>
                                </span>       
                            </li>  
                       </ul>
                </nav>
            </header>

           <div :class="`${isMenuOpen ? 'right-0' : '-right-[100%]'} fixed top-0  z-50  transition-all ease-in-out duration-1000  delay-300  w-full min-h-screen bg-[#f7f8fc] dark:bg-[#111827] flex flex-col items-start  md:hidden`">
               <font-awesome-icon @click="toggleMenu()" icon="fa-solid fa-xmark" class="px-8 pt-4  text-[3rem] self-end text-slate-700 hover:text-violet-600 dark:text-white md:hidden" />
                <ul class="w-full flex flex-col items-center mt-10 gap-8 ">
                        <li  
                            v-for="item in navItems"  
                            @click="scrollToElement(item.id)" 
                            :key="item.id">
                                <a class="cursor-pointer text-2xl font-semibold capitalize !text-slate-700 hover:!text-violet-600 dark:!text-white dark:hover:!text-violet-300">
                                    {{ item.label }}
                                </a>
                        </li>
                        <li>
                            <a
                                :href="Resume"
                                download="Jesus-Andales-Resume.pdf"
                                @click="isMenuOpen = false"
                                class="cursor-pointer text-2xl font-semibold capitalize !text-slate-700 hover:!text-violet-600 dark:!text-white dark:hover:!text-violet-300"
                            >
                                Resume
                            </a>
                        </li>
                        <li>                         
                            <span @click="toggleDark()">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" :class="`w-8 h-8  ${isDark ? 'text-white hover:text-violet-300' : 'text-slate-700 hover:text-violet-600'}`">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                                </svg>
                            </span>       
                        </li>  

                </ul>
           </div>
        </section>
      

</template>

<script setup>

import { ref } from 'vue';
import { useDark, useToggle } from '@vueuse/core'

const Resume = '/resume.pdf'

const isMenuOpen = ref(false);

const toggleMenu  = () =>  {   
    isMenuOpen.value = isMenuOpen.value == true ? false : true;    
    console.log(isMenuOpen.value)
}

const isDark = useDark()
const toggleDark = useToggle(isDark)

const navItems = [
    { id: 'about', label: 'about' },
    { id: 'projects', label: 'Personal Projects' },
    { id: 'contact', label: 'contact' },
]

const  scrollToElement = (refName)  => {    
    const el = document.getElementById(refName);
    el.scrollIntoView({behavior : "smooth",  block: 'start'})
    isMenuOpen.value = false;
}








</script>

<style scoped>
/* .sticky-header {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    opacity: .9;
    background-color: #f0fdfa;
    transition: all ease-in-out 100ms;
} */
</style>


