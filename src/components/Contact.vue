<template>

        <section id="contact" class="page-wrapper flex flex-col items-center justify-center">

            <PageHeading :title="title" :styles="'mt-20 block text-center text-3xl font-bold mb-10 lg:mb-20 text-[orange] md:text-4xl'" />

            <div v-scrollanimation class="max-w-2xl mx-auto mb-4">
                <label v-scrollanimation class="text-lg block text-center" >Im seeking for career apportunity to improve and  enchance my skills</label>
            </div>

            <div   class="flex flex-col items-center justify-center mt-8">
                   
                <a v-scrollanimation href="mailto:jesusandales021993.com" class="button">
                    Contact Me
                </a>
            </div>

            <ul   class="flex gap-8  items-center justify-center pt-16">
                    <li v-scrollanimation><a target="_blank" class="w-8 h-8 hover:text-[orange]"  href="https://github.com/jandales"><font-awesome-icon class="w-8 h-8" icon="fa-brands fa-github"/></a>
                    </li >
                    <li v-scrollanimation><a target="_blank" class="w-8 h-8 hover:text-[orange]" href="https://www.messenger.com/t/100001489436117"> <font-awesome-icon  class="w-8 h-8" icon="fa-brands fa-facebook-messenger" /></a></li>
                    <li v-scrollanimation><a target="_blank" class="w-8 h-8 hover:text-[orange]" href="https://www.linkedin.com/in/jesus-andales"><font-awesome-icon class="w-8 h-8" icon="fa-brands fa-linkedin"/></a></li>                   
            </ul>  

            <span @click="scrollToElement('home')" class="group absolute bottom-4 right-4  lg:bottom-0 lg:right-0 bg-white w-12 h-12 flex items-center justify-center rounded-full hover:bg-[orange]" >
                <font-awesome-icon icon="fa-solid fa-arrow-up" class="text-[2rem] text-[orange] group-hover:text-white" />
            </span>

            
            <Footer />

        </section>
        

</template>
<script setup>
import Footer from './Footer.vue'
import PageHeading from './Base/PageHeading.vue';

const title = 'Get In Touch'
const  scrollToElement = (refName)  => {    
      const el = document.getElementById(refName);
       el.scrollIntoView({behavior : "smooth"})
}
</script>

