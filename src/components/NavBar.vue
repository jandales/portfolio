<template>
    <section class="page-wrapper">
        <section id="home" class="flex  items-center  h-[100px] px-8">
            <nav class="flex justify-between items-center w-full h-[header]">
                    <a v-scrollanimation   class="text-[1.5rem] font-extrabold tracking-[.5em] cursor-pointer hover:text-[orange]" alt="">ETTO</a>  
                    <span v-scrollanimation  @click="toggleMenu()" class="block text-[2rem] md:hidden">
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
                    </ul>
            </nav>
        
            </nav>
        </section>
        <section class="px-8 pt-28 flex items-center justify-center h-[100vh_-_100px] md:items-center mx-auto">
            <div class="w-full pt-5 lg:pt-0">
                <div  v-scrollanimation class="block">
                    <h1 class="text-base md:text-lg font-semibold mb-2 mt-4 md:mt-0 md:mb-0">Hi, my name is</h1>
                </div>            
                <div  v-scrollanimation class="block">
                    <h2 class="text-[2rem] leading-[3rem] md:text-[4rem]  font-black md:leading-[5rem]">Jesus Andales</h2>
                </div>              
                <div  v-scrollanimation class="block">
                    <h3 class="text-[2rem] text-gray-500 leading-[3rem] md:text-[3rem] font-black  md:leading-[5rem]">I’m  a entry level web developer</h3>
                </div>  
                <div  v-scrollanimation class="flex justify-start">
                    <a  href="mailto:jesusandales021993.com"  type="button" class="button  mt-8">Hire me</a>
                </div>
            </div>       
        </section>
    </section>
</template>
<script setup>
import { ref } from 'vue';
const isMenuOpen = ref(false);

const toggleMenu  = () =>  {
   
    isMenuOpen.value = isMenuOpen.value == true ? false : true;
    
}

const navItems = ['home', 'about',  'projects', 'contact' ]

const  scrollToElement = (refName)  => {    
      const el = document.getElementById(refName);
       el.scrollIntoView({behavior : "smooth",  block: 'start'})
       isMenuOpen.value =  false;
}


</script>


