<script setup>
const props = defineProps({project : Object});

const externalLink = (link) => {
    window.open(link)
}

const isEven = (number) => {
    return props.project.id % 2 == 0 ? true : false;
}
</script>

<template>
    <div v-scrollanimation   class="w-full bg-light-dark border-[dark] rounded-sm shadow-lg  lg:mb-12 lg:bg-transparent  lg:border-0 lg:p-6 lg:shadow-none">        
        <div class="flex lg:gap-8" :class="{'flex-row-reverse' : isEven()}"> 
            <div class="w-full lg:w-1/2" >
                <h2 @click="externalLink(project.link)" class="!text-left text-[2rem] font-bold mb-3 hover:text-[orange] cursor-pointer" :class="{'lg:text-right' : isEven(project.id)}">{{project.name}}</h2>
            <p class="!text-left" :class="{'lg:text-right' : isEven()}">
                {{ project.description}}
            </p>
            <ul class="flex gap-4 py-4  !justify-start" :class="{'lg:justify-end' : isEven()}">
                <li v-for="technology in project.technologies">{{technology}}</li>
                
            </ul>
            <ul class="flex gap-4 !justify-start " :class="{'lg:justify-end' : isEven()}">
                <li v-if="project.repository != null"><span @click="externalLink(project.repository)" class="icon"><font-awesome-icon  icon="fa-brands fa-github"/></span></li>
                <li v-if="project.link != null"><span @click="externalLink(project.link)" class="icon"  :href="project.link"><font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square"/></span></li>
            </ul>
        </div>
        <div class="hidden lg:block w-1/2 shadow-lg">
            <img :src="project.image" class="w-full h-full  backdrop-blur-sm hover:backdrop-blur-lg transition-all duration-1000 ease-in-out " alt="">
        </div>
        </div>
    </div>
</template>