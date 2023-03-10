<template>
      <section class="h-[calc(100vh_-_5rem)] mt-24 md:mt-28  md:h-screen-80  md:max-w-2xl md:mx-auto  lg:max-w-6xl lg:mt-24">
                <div class="flex flex-col  items-center  md:justify-between md:flex-row md:gap-8"> 
                     <div data-aos="fade-right"
                         data-aos-delay="200"
                         data-aos-duration="1500"
                         class="hidden md:flex  h-[200px] lg:items-center lg:justify-center"> 
                       <div class="w-60 aspect-sqaure rounded-full overflow-hidden">
                             <img :src="AvatarImage" class="" alt="">   
                       </div>                 
                    </div>                
                    <div class="w-full lg:max-w-3xl lg:mx-auto">
                        <h2
                            data-aos="fade-left"
                            data-aos-delay="200"
                            data-aos-duration="1500"
                            class="text-2xl md:text-3xl pb-3 font-extrabold f-black name duration-1000"
                        >
                           <strong class="text-[orange]">Hello,</strong> I am
                        </h2>
                         <h1 
                            class="text-4xl md:text-5xl font-extrabold pb-3 f-gray dark:text-white duration-1000"
                            data-aos="fade-left"
                            data-aos-delay="300"
                            data-aos-duration="1500">
                            Jesus <strong class="text-[orange]">Andales</strong>
                        </h1>
                        <h5
                            class=" text-4xl md:text-6xl font-extrabold pb-6 f-gray dark:text-white duration-1000"
                            data-aos="fade-left"
                            data-aos-delay="400"
                            data-aos-duration="1500"
                        >
                           I <strong class="text-[orange]">build</strong> things for the <strong class="text-[orange]">web.</strong>
                        </h5>

                       <ul  data-aos="fade-left"
                            data-aos-delay="500"
                            data-aos-duration="1500"
                            class="flex flex-row gap-4">

                        <li>
                            <a class="text-2xl" href="https://github.com/jandales">
                                <font-awesome-icon class="hover:text-[orange]" icon="fa-brands fa-github"/>
                            </a>
                        </li>
                        <li>
                            <a class="text-2xl" href="https://www.facebook.com/jesus.andales">
                                <font-awesome-icon class="hover:text-[orange]" icon="fa-brands fa-facebook"/>
                            </a>
                        </li>
                        <li>
                            <a class="text-2xl" href="https://www.instagram.com/jesusandales">
                                <font-awesome-icon class="hover:text-[orange]" icon="fa-brands fa-instagram"/>
                            </a>
                        </li>
                        <li>
                            <a class="text-2xl" href="https://twitter.com/jandales_">
                                <font-awesome-icon class="hover:text-[orange]" icon="fa-brands fa-twitter"/>
                            </a>
                        </li>          
                      </ul>

                    <div data-aos="fade-left"
                         data-aos-delay="600"
                         data-aos-duration="1500" 
                         class="flex justify-start">
                        <a 
                            :href="Resume"
                            type="button"
                            target="_black"
                            class="button mt-8 !px-12">
                            Resume
                        </a>
                    </div>

                    </div>                     
                </div>       
            </section>
</template>
<script setup>

import AvatarImage from '@/assets/avatar.jpg';
import Resume from '@/assets/resume.pdf'



</script>

