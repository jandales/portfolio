<template>

        <section id="contact" class="page-wrapper !min-h-[calc(100vh_-_5.5rem)]">
           <PageHeading :title="title" :styles="'pt-16'" />
            <div v-scrollanimation  class="flex flex-col items-center justify-center">
                <ul>
                    <li v-scrollanimation  class="block text-center text-lg lg:text-2xl mb-8">jesusandales021993@gmail.com</li>
                    <li v-scrollanimation class="block text-center text-lg lg:text-2xl mb-8"> 09565722152</li>
                </ul>
                <a v-scrollanimation href="mailto:jesusandales021993.com" class="button">
                    Contact Me
                </a>
            </div>
            <span @click="scrollToElement('home')" class="group absolute bottom-4 right-4  lg:bottom-0 lg:right-0 bg-white w-12 h-12 flex items-center justify-center rounded-full hover:bg-[orange]" >
                <font-awesome-icon icon="fa-solid fa-arrow-up" class="text-[2rem] text-[orange] group-hover:text-white" />
            </span>
        </section>
        

</template>
<script setup>
import Footer from './Footer.vue'
import PageHeading from './Base/PageHeading.vue';
const title = 'Contact me'
const  scrollToElement = (refName)  => {    
      const el = document.getElementById(refName);
       el.scrollIntoView({behavior : "smooth"})
}
</script>

