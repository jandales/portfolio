<template>
      <section class="h-[calc(100vh_-_5rem)] mt-24 md:mt-28  md:h-screen-80  md:max-w-2xl md:mx-auto  lg:max-w-6xl lg:mt-24">
                <div class="flex flex-col items-center  md:justify-between md:flex-row"> 
                    <div  class="w-full md:max-w-md">
                        <h2
                            data-aos="fade-right"
                            data-aos-delay="500"
                            data-aos-duration="500"
                            class="text-3xl pb-3 font-extrabold f-black name duration-1000"
                        >
                           Hello, I am
                        </h2>
                         <h1 
                            class="text-5xl font-extrabold pb-3 f-gray dark:text-white duration-1000"
                            data-aos="fade-right"
                            data-aos-delay="700"
                            data-aos-duration="500">
                            Jesus Andales
                        </h1>
                        <h5
                            class="text-sm pb-6 f-gray dark:text-white duration-1000"
                            data-aos="fade-right"
                            data-aos-delay="800"
                            data-aos-duration="500"
                        >
                            I'm Experienced Front-end Developer with a demonstrated history of
                            working in the information technology and services industry. Highly
                            skilled in JavaScript(React/VueJS)
                        </h5>

                       <ul class="flex flex-row gap-4">
                        <li><a class="text-2xl" href="https://github.com/jandales"><font-awesome-icon class="hover:text-[orange]" icon="fa-brands fa-github"/></a></li>
                        <li><a class="text-2xl" href="https://www.facebook.com/jesus.andales"><font-awesome-icon class="hover:text-[orange]" icon="fa-brands fa-facebook"/></a></li>
                        <li><a class="text-2xl" href="https://www.instagram.com/jesusandales"><font-awesome-icon class="hover:text-[orange]" icon="fa-brands fa-instagram"/></a></li>
                        <li><a class="text-2xl" href="https://twitter.com/jandales_"><font-awesome-icon class="hover:text-[orange]" icon="fa-brands fa-twitter"/></a></li>          
                      </ul>

                        <div  class="flex justify-start">
                            <a  href="mailto:jesusandales021993.com"  type="button" class="button  mt-8">Hire me</a>
                        </div>

                    </div>  
                    <div class="hidden md:flex md:w-1/2 h-[200px] lg:items-center lg:justify-center"> 
                       <div class="max-w-sm aspect-sqaure rounded-full overflow-hidden">
                             <img src="/avatar.jpg" class="" alt="">   
                       </div>                 
                    </div>                
                </div>       
            </section>
</template>
<script setup>
import Avatar from './Base/about/Avatar.vue';
</script>

