<template>
<section id="projects" class="page-wrapper">

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
import RecipeAppImage from  '@/assets/img/projects/recipe-app.png'

const title = 'Projects'

const projects = ref([]);

const loadProjects = () => {

    projects.value = [

        { 
            id: 1, name : 'E-commerce Site', 
            description : "E-commerce Website. A website that allows customer's to easily purchase their clothing needs. ",
            image : CodaStoreImage,
            technologies : ['Laravel', 'Javascript'],
            repository : 'https://github.com/jandales/CodaStore', 
            link : 'https://codastore.herokuapp.com' },

        { 
            id: 2, name : 'Lending Management System',  
            description : "The Lending Management System's main goal is to manage and monitor borrower loans.",
            image : LendingImage, 
            technologies : ['Laravel', 'Vue js', 'TailwindCss'],
            repository : 'https://github.com/jandales/lending-app',
            link : 'https://etto-lending-app.herokuapp.com/' },

        {   id: 3, name :  'Taskboard App' ,
            description : 'The Taskboard app is a clone of Taskboard for Google tasks.',
            technologies : ['Vue js', 'Vuex', 'TailwindCss'],
            image : TaskBoardImage,
            repository : 'https://github.com/jandales/task-app',
            link : 'https://jandales.github.io/task-app'
        },

        {   id: 4, name :  'Recipe App' ,
            description : 'Recipe app is sharing app, it allow user to share and save recipes from the app.',
            technologies : ['Node Js', 'Express','MongoDB', 'Vue js', 'Vuex', 'TailwindCss'],
            image : RecipeAppImage,
            repository : 'https://github.com/jandales/recipe-app',
            link : 'https://etto-recipe-app.herokuapp.com'
        },

        {
            id: 5, name: 'Educat',
            description: 'Recipe app is sharing app, it allow user to share and save recipes from the app.',
            technologies: ['React', 'TailwindCss'],
            image: EducatImage,
            repository: 'https://github.com/jandales/educat',
            link: 'https://jandales.github.io/educat'
        }

    ]
   
}


onMounted(loadProjects)


</script>