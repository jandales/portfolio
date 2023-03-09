<template>

        <section id="home" class="flex items-center h-20 mx-auto md:max-w-2xl lg:max-w-6xl  ">
            <nav class="flex justify-between items-center w-full h-[header]">
                <a v-scrollanimation   class="text-[1.5rem] font-extrabold tracking-[.5em] cursor-pointer hover:text-[orange]" alt="">ETTO</a>  
                <span v-scrollanimation  @click="toggleMenu()" class="block text-[2rem] lg:hidden">
                    <font-awesome-icon icon="fa-solid fa-bars" />
                </span>
                <nav class="hidden fixed w-full  min-h-screen top-0 right-0 z-10 backdrop-blur-md lg:relative lg:min-h-0 lg:w-auto lg:block" :class="{'!block' : isMenuOpen}">             
                        
                    
                    
                    
                    <ul tag="ul"   appear class="w-4/5 bg-dark   md:w-1/2 absolute flex  flex-col items-center gap-8  right-0 top-0  min-h-screen  pl-0 list-style-none lg:relative lg:flex-row lg:min-h-0 lg:gap-4 lg:bg-transparent ">
                            <font-awesome-icon @click="toggleMenu()" icon="fa-solid fa-xmark" class="p-8 pb-0 text-[3rem] self-end lg:hidden" />
                            
                            <li v-scrollanimation   v-for="item in navItems"  @click="scrollToElement(item)" :key="item">
                                <a class="nav-item">
                                {{item}}
                                </a>
                            </li>   
                            <li v-scrollanimation>                         
                                <a   href="/resume.pdf"  target="_black" type="button" class="button">Resume</a>        
                            </li>  
                        </ul>
                </nav>
            </nav>
        </section>
      

</template>

<script setup>

import { ref } from 'vue';
const isMenuOpen = ref(false);

const toggleMenu  = () =>  {   
    isMenuOpen.value = isMenuOpen.value == true ? false : true;    
}

const navItems = ['about', 'skills','projects', 'contact' ]

const  scrollToElement = (refName)  => {    
    const el = document.getElementById(refName);
    el.scrollIntoView({behavior : "smooth",  block: 'start'})
    isMenuOpen.value =  false;
}


</script>


