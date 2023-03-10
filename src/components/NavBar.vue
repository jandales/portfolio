<template>

        <section  id="navbar" class="w-full ">
            <header class="flex items-center h-20 mx-auto md:max-w-2xl lg:max-w-6xl">
                 <nav  data-aos="fade-down"
                    data-aos-delay="200"
                    data-aos-duration="1500" class="flex justify-between items-center w-full h-[header]">
                    <a  class="text-[1.5rem] font-extrabold tracking-[.5em] cursor-pointer hover:text-[orange]" alt="">ETTO</a>  
                    <span  @click="toggleMenu()" class="block text-[2rem] lg:hidden">
                        <font-awesome-icon icon="fa-solid fa-bars" />
                    </span>
                    <nav class="hidden fixed w-full  min-h-screen top-0 right-0 z-10 backdrop-blur-md lg:relative lg:min-h-0 lg:w-auto lg:block" :class="{ '!block': isMenuOpen }">             
                        
                    
                    
                    
                        <ul tag="ul"   appear class="w-4/5 bg-dark   md:w-1/2 absolute flex  flex-col items-center gap-8  right-0 top-0  min-h-screen  pl-0 list-style-none lg:relative lg:flex-row lg:min-h-0 lg:gap-4 lg:bg-transparent ">
                                <font-awesome-icon @click="toggleMenu()" icon="fa-solid fa-xmark" class="p-8 pb-0 text-[3rem] self-end lg:hidden" />
                            
                                <li  v-for="item in navItems"  @click="scrollToElement(item)" :key="item">
                                    <a class="nav-item">
                                    {{ item }}
                                    </a>
                                </li>   
                                <!-- <li>                         
                                <a :href="Resume"  target="_black" type="button" class="button">Resume</a>        
                            </li>   -->
                            </ul>
                    </nav>
                </nav>
            </header>
           
        </section>
      

</template>

<script setup>

import { ref } from 'vue';
import Resume from '@/assets/resume.pdf'

const isMenuOpen = ref(false);

const toggleMenu  = () =>  {   
    isMenuOpen.value = isMenuOpen.value == true ? false : true;    
}

const navItems = ['about', 'skills','projects', 'contact' ]

const  scrollToElement = (refName)  => {    
    const el = document.getElementById(refName);
    el.scrollIntoView({behavior : "smooth",  block: 'start'})
    isMenuOpen.value = false;
    const navbar = document.getElementById('navbar')
    navbar.classList.remove('sticky-header')
}


const stickyHeaderClass = 'sticky-header'

let lastScrollTop = 0;

window.addEventListener("scroll", function () { 
    const el = document.getElementById('navbar');
    var st = window.pageYOffset || document.documentElement.scrollTop; 
    if (st > lastScrollTop) {
        el.classList.remove(stickyHeaderClass)
    
    } else if (st < lastScrollTop) {  
        el.classList.add('sticky-header')
    } // else was horizontal scroll

    if (window.window.pageYOffset == 0) {
         el.classList.remove(stickyHeaderClass)
    }

   
    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false)


</script>

<style scoped>
.sticky-header {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    opacity: .9;
    background-color: #27262b;
    transition: all ease-in-out 100ms;
}
</style>


