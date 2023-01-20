<template>
<section id="projects" class="page-wrapper pt-12 pt- lg:pt-24">
    <Heading :title="title" />
    <div class="w-full flex flex-wrap gap-16 px-4 md:px-0 lg:gap-4 ">    
            <Project div v-scrollanimation  
            v-for="project in projects" 
            :project="project"
            :key="project.id" 
            />
    </div>
</section>
</template>
<script setup>
import { ref, onMounted } from 'vue';

import Heading from './Base/PageHeading.vue';
import Project from './Base/Project.vue'
const title = 'Projects'



const projects = ref([]);

const loadProjects = () => {

    projects.value = [

        { 
            id: 1, name : 'E-commerce Site', 
            description : "E-commerce Website. A website that allows customer's to easily purchase their clothing needs. ",
            image : '../img/store.png',
            technologies : ['Laravel', 'Javascript'],
            repository : 'https://github.com/jandales/CodaStore', 
            link : 'https://codastore.herokuapp.com' },

        { 
            id: 2, name : 'Lending Management System',  
            description : "The Lending Management System's main goal is to manage and monitor borrower loans.",
            image : '/img/lending1.png', 
            technologies : ['Laravel', 'Vue js', 'TailwindCss'],
            repository : 'https://github.com/jandales/lending-app',
            link : 'https://etto-lending-app.herokuapp.com/' },

        {   id: 3, name :  'Taskboard App' ,
            description : 'The Taskboard app is a clone of Taskboard for Google tasks.',
            technologies : ['Vue js', 'Vuex', 'TailwindCss'],
            image : '/img/task1.png',
            repository : 'https://github.com/jandales/task-app',
            link : 'https://jandales.github.io/task-app'
        },

        {   id: 4, name :  'Recipe App' ,
            description : 'Recipe app is sharing app, it allow user to share and save recipes from the app.',
            technologies : ['Node Js', 'Express','MongoDB', 'Vue js', 'Vuex', 'TailwindCss'],
            image : '/img/recipe.png',
            repository : 'https://github.com/jandales/recipe-app',
            link : 'https://etto-recipe-app.herokuapp.com'
        }
    ]
   
}


onMounted(loadProjects)


</script>