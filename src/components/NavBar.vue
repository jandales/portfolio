<template>
    <div id="home" class="flex items-center  h-[100px] px-8">

        <nav class="flex justify-between items-center w-full h-[header]">
          <transition name="list"  appear>
                 <a  class="text-[1.5rem] font-extrabold tracking-[.5em] cursor-pointer hover:text-[orange]" alt="">ETTO</a>
          </transition>
         
            <span @click="toggleMenu()" class="block text-[2rem] md:hidden">
                <font-awesome-icon icon="fa-solid fa-bars" />
            </span>
           
        <nav class="hidden fixed w-full  min-h-screen top-0 right-0 z-10 backdrop-blur-md lg:relative lg:min-h-0 lg:w-auto lg:block" :class="{'!block' : isMenuOpen}">             
                
               
               <transition-group name="list" tag="ul" appear=""  class="w-4/5  md:w-1/2 absolute flex  flex-col items-center gap-8  right-0 top-0  min-h-screen  pl-0 list-style-none lg:relative lg:flex-row lg:min-h-0 lg:gap-4  ">
                    <font-awesome-icon @click="toggleMenu()" icon="fa-solid fa-xmark" class="p-8 pb-0 text-[3rem] self-end lg:hidden" />
                     <li @click="scrollToElement('home')" :key="'about'">
                        <a class="nav-item">
                            Home
                        </a>
                    </li>

                    <li @click="scrollToElement('about')" :key="'about'">
                        <a class="nav-item">
                            About
                        </a>
                    </li>
                  
                    <li @click="scrollToElement('projects')" :key="'projects'">
                        <a class="nav-item">
                            Projects
                        </a>
                    </li>
                    <li @click="scrollToElement('footer')" :key="'Contact'">
                        <a class="nav-item">
                            Contact
                        </a>
                    </li>                               
                 </transition-group>
        </nav>
     
        </nav>
      
    </div>
</template>
<script setup>
import { ref } from 'vue';
const isMenuOpen = ref(false);

const toggleMenu  = () =>  {
    console.log('dadad');
    isMenuOpen.value = isMenuOpen.value == true ? false : true;
    console.log(isMenuOpen.value)
}

const  scrollToElement = (refName)  => {    
      const el = document.getElementById(refName);
       el.scrollIntoView({behavior : "smooth"})
}


</script>

