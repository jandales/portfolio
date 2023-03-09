<script setup>
import ProjectImage from './Projects/ProjectImage.vue';
import ProjectName from './Projects/ProjectName.vue';
import ProjectDescription from './Projects/ProjectDescription.vue';
import ProjectTech from './Projects/ProjectTech.vue';
import ProjectLinks from './Projects/ProjectLinks.vue';

defineProps({
    project : Object,
})

</script>

<template>
    <div class="w-full h-auto relative bg-lightest-navy rounded-md overflow-hidden hover:scale-105 hover:shadow-lg hover:transition-all hover:delay-100 hover:duration-200">

        <div class="w-full">
            
           <ProjectImage :image="project.image" />

           <div class="px-8 py-2">

               <ProjectName 
                    :name="project.name"
               />

               <ProjectDescription 
                    :text="project.description" 
                />

                <ProjectTech 
                    :list="project.technologies" 
                />

                <ProjectLinks 
                    :repository="project.repository" 
                    :link="project.link"
                />

           </div>

        </div>   

    </div>

</template>