<template>
    <section class="page-wrapper px-8 !min-h-[calc(100vh_-_100px)] flex items-start lg:items-center mx-auto">
        <div class="w-full pt-5 lg:pt-0">

            <TransitionGroup name="list" tag="div" appear="">

                 <div class="block" :key="1">
                    <h1 class="text-base font-semibold">Hi, my name is</h1>
                 </div>
           
                 <div class="block" :key="2">
                    <h2 class="text-[3rem] leading-[3rem] md:text-[4rem]  font-black md:leading-[5rem]">Jesus Andales</h2>
                </div>  
           
                <div class="block" :key="3">
                    <h3 class="text-[3rem] leading-[3rem] md:text-[3rem] font-black  md:leading-[5rem]">I’m  a entry level web developer</h3>
                </div>   


                <a  href="mailto:jesusandales021993.com"  type="button" class="button mt-8" :key="5">Hire me</a>

            </TransitionGroup>
          
        </div>
       
    </section>
</template>
<script setup>

</script>

