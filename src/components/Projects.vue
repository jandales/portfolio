<template>
<section id="projects" class="page-wrapper px-8 lg:px-0">

    <PageHeading :title="title" />

    <div class="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-8 lg:grid-cols-3  ">
        <Project 
            v-for="(project, index) in projects" 
            :key="index" 
            :project="project"
        />
    </div>

</section>
</template>

<script setup>

import { ref, onMounted } from 'vue';

import PageHeading from '@/components/Base/PageHeading.vue';
import Project from '@/components/Projects/Project.vue';

import EducatImage from '@/assets/img/projects/educat.png'
import TaskBoardImage from '@/assets/img/projects/taskboard.png'
import LendingImage from '@/assets/img/projects/lending.png'
import CodaStoreImage from  '@/assets/img/projects/codastore.png'
import RecipeAppImage from '@/assets/img/projects/recipe-app.png'
import NerdImage from '@/assets/img/projects/nerd.io.png'

const title = 'Projects'

const projects = ref([]);

const loadProjects = () => {

    projects.value = [

        { 
            id: 1,
            name: 'Codastore', 
            description : "Codastore is e-commerce website for clothing brand. ",
            image : CodaStoreImage,
            technologies : ['Laravel', 'Javascript'],
            repository : 'https://github.com/jandales/CodaStore', 
            link : 'https://codastore.herokuapp.com' },

        { 
            id: 2,
            name: 'Lending Management System',  
            description : "The Lending Management System's main goal is to manage and monitor borrower loans.",
            image : LendingImage, 
            technologies : ['Laravel', 'Vue js', 'TailwindCss'],
            repository : 'https://github.com/jandales/lending-app',
            link : 'https://etto-lending-app.herokuapp.com/' },

        {
            id: 3,
            name: 'Taskboard App',
            description : 'The Taskboard app is a clone of Taskboard for Google tasks.',
            technologies : ['Vue js', 'Vuex', 'TailwindCss'],
            image : TaskBoardImage,
            repository : 'https://github.com/jandales/task-app',
            link : 'https://jandales.github.io/task-app'
        },

        {
            id: 4,
            name: 'Recipe App',
            description : 'Recipe app is sharing app, it allow user to share and save recipes from the app.',
            technologies : ['Node Js', 'Express','MongoDB', 'Vue js', 'Vuex', 'TailwindCss'],
            image : RecipeAppImage,
            repository : 'https://github.com/jandales/recipe-app',
            link : 'https://recipe-app-7hga.onrender.com'
        },

        {
            id: 5,
            name: 'Educat',
            description: 'Educat LMS offers the perfect end-to-end solution for schools and businesses. It also provides you with all the features needed to make learning and training easier',
            technologies: ['React', 'TailwindCss'],
            image: EducatImage,
            repository: 'https://github.com/jandales/educat',
            link: 'https://jandales.github.io/educat'
        },
         {
            id: 6,
            name: 'Nerd.io',
            description: 'Nerd.io is a Free Cloud storage ,file sharing service and fully file encryption.',
            technologies: ['VueJs', 'TailwindCss'],
            image: NerdImage,
            repository: 'https://github.com/jandales/nerd.io',
            link: 'https://jandales.github.io/nerd.io'
        }



    ]
   
}


onMounted(loadProjects)


</script>