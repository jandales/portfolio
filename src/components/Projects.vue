<template>
<section id="projects" class="page-wrapper  py-14 px-8 lg:px-0">
    <h1 class="block text-center text-[2rem] font-bold  py-16 ">Personal Projects</h1>
    <div class="w-full flex flex-wrap gap-16 lg:gap-4 ">
        <transition-group name="list" appear>
            <div  v-for="project in projects" :key="project.id" class="p-6 w-full bg-light-dark border-[dark]  rounded-sm shadow-lg lg:bg-transparent lg:min-h-screen lg:border-0 lg:p-6 lg:shadow-none">        
                <div class="flex lg:gap-8" :class="{'flex-row-reverse' : isEven(project.id)}"> 
                    <div class="w-full lg:w-1/2" >
                        <h2 @click="externalLink(project.link)" class="!text-left text-[2rem] font-bold mb-3 hover:text-[orange] cursor-pointer" :class="{'lg:text-right' : isEven(project.id)}">{{project.name}}</h2>
                    <p class="!text-left" :class="{'lg:text-right' : isEven(project.id)}">
                        {{ project.description}}
                    </p>
                    <ul class="flex gap-4 py-4  !justify-start" :class="{'lg:justify-end' : isEven(project.id)}">
                        <li v-for="technology in project.technologies">{{technology}}</li>
                        
                    </ul>
                    <ul class="flex gap-4 !justify-start " :class="{'lg:justify-end' : isEven(project.id)}">
                        <li v-if="project.repository != null"><span @click="externalLink(project.repository)" class="icon"><font-awesome-icon  icon="fa-brands fa-github"/></span></li>
                        <li v-if="project.link != null"><span @click="externalLink(project.link)" class="icon"  :href="project.link"><font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square"/></span></li>
                    </ul>
                </div>
                <div class="hidden lg:block w-1/2 shadow-lg">
                    <img :src="project.image" class="w-full h-full bg-[red] backdrop-blur-sm hover:backdrop-blur-lg transition-all duration-1000 ease-in-out " alt="">
                </div>
                </div>
            </div>
        </transition-group>
    </div>
</section>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router'

const router = useRouter();

const projects = ref([]);

const loadProjects = () => {
    projects.value = [

        { 
            id: 1, name : 'E-commerce Site', 
            description : 'E-commerce Website. A website that allows people to easily purchase their clothing needs. ',
            image : '/src/assets/img/etto-eccomerce.png',
            technologies : ['Laravel', 'Javascript'],
            repository : 'https://github.com/jandales/CodaStore', 
            link : 'https://codastore.herokuapp.com' },

        { 
            id: 2, name : 'Lending Management System',  
            description : "The Lending Management System's main goal is to manage and monitor borrower loans.",
            image : '/src/assets/img/lending.png', 
            technologies : ['Laravel', 'Vue js', 'TailwindCss'],
            repository : 'https://github.com/jandales/lending-app',
            link : 'https://codastore.herokuapp.com' },

        {   id: 3, name :  'Taskboard App' ,
            description : 'The Taskboard app is a clone of Taskboard for Google tasks.',
            technologies : ['Vue js', 'Vuex', 'TailwindCss'],
            image : '/src/assets/img/task.png',
            repository : 'https://github.com/jandales/task-app',
            link : 'https://jandales.github.io/task-app'
        }
    ]
   
}

const externalLink = (link) => {

    window.open(link)

}
 
const isEven = (number) => {

    return number % 2 == 0 ? true : false;

}

onMounted(loadProjects)


</script>