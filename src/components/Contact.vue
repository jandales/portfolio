<template>

        <section id="contact" class="page-wrapper flex flex-col items-center justify-center mt-10">

            <PageHeading 
                :title="title"
                :styles="'mt-20 block text-center text-3xl font-bold mb-10 lg:mb-20 text-[orange] md:text-4xl'"
            />

            <div  data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="1500"
                class="max-w-2xl mx-auto mb-4">
                <label class="text-lg block text-center" >Im seeking for career apportunity to improve and  enchance my skills</label>
            </div>

            <div data-aos="fade-up"
                 data-aos-delay="400"
                 data-aos-duration="1500" 
                 class="flex flex-col items-center justify-center mt-8">                   
                <a  href="mailto:jesusandales021993.com" class="button">
                    Contact Me
                </a>
            </div>

            <ul class="flex gap-8  items-center justify-center pt-16">
                <li data-aos="fade-up"
                    data-aos-delay="500"
                    data-aos-duration="1500"
                >
                    <a 
                        target="_blank" 
                        class="w-8 h-8 hover:text-[orange]" 
                        href="https://github.com/jandales"
                    >
                        <font-awesome-icon class="w-8 h-8" icon="fa-brands fa-github"/>
                    </a>
                </li>
                <li data-aos="fade-up"
                        data-aos-delay="600"
                        data-aos-duration="1500">
                    <a 
                        target="_blank" 
                        class="w-8 h-8 hover:text-[orange]"
                        href="https://www.messenger.com/t/100001489436117"
                    >
                        <font-awesome-icon  class="w-8 h-8" icon="fa-brands fa-facebook-messenger" />
                    </a>
                </li>
                <li data-aos="fade-up"
                        data-aos-delay="700"
                        data-aos-duration="1500">
                    <a 
                        target="_blank" 
                        class="w-8 h-8 hover:text-[orange]" 
                        href="https://www.linkedin.com/in/jesus-andales">
                    <font-awesome-icon class="w-8 h-8" icon="fa-brands fa-linkedin" />
                    </a>
                </li>                   
            </ul>  

            
            <Footer />

        </section>
        

</template>
<script setup>
import Footer from '@/components/Footer.vue'
import PageHeading from '@/components/Base/PageHeading.vue';

const title = 'Get In Touch'

const  scrollToElement = (refName)  => {    
    const el = document.getElementById(refName);
    el.scrollIntoView({behavior : "smooth"})
}

</script>

