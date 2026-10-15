<script setup>
import ProjectImage from '@/components/Projects/ProjectImage.vue';
import ProjectName from '@/components/Projects/ProjectName.vue';
import ProjectDescription from '@/components/Projects/ProjectDescription.vue';
import ProjectTech from '@/components/Projects/ProjectTech.vue';
import ProjectLinks from '@/components/Projects/ProjectLinks.vue';

defineProps({
    project : Object,
})

</script>

<template>
    <div data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="1500"
        class="relative h-auto w-full cursor-pointer overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-white/5">

        <div class="w-full">
            
           <ProjectImage :image="project.image" />

           <div class="px-6 py-5">

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