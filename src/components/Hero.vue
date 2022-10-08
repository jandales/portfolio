<template>
    <section class="page-wrapper px-8 !min-h-[calc(100vh_-_100px)] flex  md:items-center mx-auto">
        <div class="w-full pt-5 lg:pt-0">
          
            <TransitionGroup name="list" appear>
                <div class="block" :key="1">
                    <h1 class="text-base md:text-lg font-semibold mb-2 mt-4 md:mt-0 md:mb-0">Hi, my name is</h1>
                 </div>
           
                 <div class="block" :key="2">
                    <h2 class="text-[2rem] leading-[3rem] md:text-[4rem]  font-black md:leading-[5rem]">Jesus Andales</h2>
                </div>  
           
                <div class="block" :key="3">
                    <h3 class="text-[2rem] text-gray-500 leading-[3rem] md:text-[3rem] font-black  md:leading-[5rem]">I’m  a entry level web developer</h3>
                </div>                 
            </TransitionGroup>

            <Transition name="list" appear="">
                <div class="flex justify-center lg:justify-start">
                    <a  href="mailto:jesusandales021993.com"  type="button" class="button  mt-8" :key="5">Hire me</a>
                </div>
            </Transition>
                
                

      
          
        </div>
       
    </section>
</template>
<script setup>

</script>

