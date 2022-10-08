<template>
<Transition name="list">
    <section id="about" class="page-wrapper">
        <h2   class="text-center text-[2rem] font-bold capitalize py-12">About Me</h2>
        <div class="flex flex-col lg:flex-row mt-8">
            <div class="w-full  px-8 lg:w-1/2 lg:p-0">
              
                    <div v-scrollanimation class="flex mb-4" >               
                    Hey! I'm Jesus Andales, an entry-level web developer. 
                    I started my IT career back in 2013 as a computer technician. I specialized on troubleshooting hardware, software, and networks in 5 years.                                  
                    </div>               
                    <div v-scrollanimation class="flex  mb-4 ">
                    Fast forward to 2019, I decided to pursue my career in web development, I taught myself to program, especially in PHP programming.
                    </div>
         
                 <div v-scrollanimation class="mb-4 ">
                    <h3 class="block py-4 font-bold tracking-wider">EDUCATION</h3>
                    <div class="flex">
                    <ul class="w-full">
                        <li class="flex items-center text-sm py-1">
                             <span class="text-xs mr-3">
                                <font-awesome-icon icon="fa-solid fa-caret-right" />
                            </span>
                            Bachelor of Science in Computer Science
                        </li>
                        <li class="flex items-center text-sm py-1">
                            <span class="text-xs mr-3">
                                <font-awesome-icon icon="fa-solid fa-caret-right" />
                            </span>
                            Computer Server and Servicing
                        </li>                    
                    </ul>                  
                    </div>
                </div>
                 <div v-scrollanimation class="mb-4 ">
                    <h3 class="block py-4 font-bold tracking-wider">EXPERIENCE</h3>
                    <div class="flex">
                    <ul class="w-full">
                        <li class="flex items-center text-sm py-1">
                             <span class="text-xs mr-3">
                                <font-awesome-icon icon="fa-solid fa-caret-right" />
                            </span>
                            PTO COMPUTER SALES AND SERVICES
                        </li>
                        <li class="flex items-center text-sm py-1 ml-4">                           
                            <p>Computer Technician / IT Support</p>   
                        </li> 
                        <li class="flex items-center text-sm py-1 ml-4">                           
                            <p>5 years experience</p>   
                        </li>                    
                    </ul>                  
                    </div>
                </div>
                <div v-scrollanimation class="mb-4">
                    <h3 class="block py-4 font-bold tracking-wider">SKILLS</h3>
                    <div class="flex flex-wrap md:flex-nowrap gap-4 md:gap-8">
                    <ul class="w-[calc(((100%_+_1rem)_/_2)_-_1rem)] md:w-1/4">
                        <li class="flex items-center text-sm py-1">
                            <span class="text-xs mr-3">
                                <font-awesome-icon icon="fa-solid fa-caret-right" />
                            </span>
                             Php
                        </li>
                        <li class="flex items-center text-sm py-1">
                             <span class="text-xs mr-3">
                                <font-awesome-icon icon="fa-solid fa-caret-right" />
                            </span>
                            C#
                        </li>
                        <li class="flex items-center text-sm py-1">
                            <span class="text-xs mr-3">
                                <font-awesome-icon icon="fa-solid fa-caret-right" />
                            </span>
                            Javascript
                        </li>
                    </ul>
                     <ul class="w-[calc(((100%_+_1rem)_/_2)_-_1rem)] md:w-1/4">
                        <li class="flex items-center text-sm py-1">
                            <span class="text-xs mr-3">
                                <font-awesome-icon icon="fa-solid fa-caret-right" />
                            </span>
                            Laravel
                        </li>
                        <li class="flex items-center text-sm py-1">
                            <span class="text-xs mr-3">
                                <font-awesome-icon icon="fa-solid fa-caret-right" />
                            </span>
                            Vue Js
                        </li>
                        <li class="flex items-center text-sm py-1">
                             <span class="text-xs mr-3">
                                <font-awesome-icon icon="fa-solid fa-caret-right" />
                            </span>
                            Tailwind CSS
                        </li>
                    </ul>
                    <ul class="w-[calc(((100%_+_1rem)_/_2)_-_1rem)] md:w-1/4">
                        <li class="flex items-center text-sm py-1">
                            <span class="text-xs mr-3">
                                <font-awesome-icon icon="fa-solid fa-caret-right" />
                            </span>
                            NodeJs
                        </li>
                        <li class="flex items-center text-sm py-1">
                            <span class="text-xs mr-3">
                                <font-awesome-icon icon="fa-solid fa-caret-right" />
                            </span>
                            MongoDB
                        </li>
                        <li class="flex items-center text-sm py-1">
                             <span class="text-xs mr-3">
                                <font-awesome-icon icon="fa-solid fa-caret-right" />
                            </span>
                            MySql
                        </li>
                    </ul>
                    <ul class="w-[calc(((100%_+_1rem)_/_2)_-_1rem)] md:w-1/4">
                        <li class="flex items-center text-sm py-1">
                             <span class="text-xs mr-3">
                                <font-awesome-icon icon="fa-solid fa-caret-right" />
                            </span>
                            Bootstrap
                        </li>
                    </ul>
                    </div>
                </div>

                 <div v-scrollanimation class="mt-8 flex justify-center lg:justify-start">
                       <a :href="resume" download class="button ">My Resume</a>
                </div>
               
            </div>
            <div class="w-full pt-8 lg:pt-0 lg:w-1/2 flex justify-center ">
                <div v-scrollanimation class="mx-auto relative w-[300px] h-[300px] md:mx-0 rounded-md  overflow-hidden"> 
                    <img :src="avatar" class="" alt="">                    
                </div>
            </div>
        </div>
    </section>
</Transition>
    

   
</template>

<script setup>
import { ref } from 'vue';

const avatar = ref('/avatar.jpg');
const resume = ref('/resume.pdf')
</script>