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
        class="w-full 
            h-auto relative
            bg-emerald-50
            shadow-lg
            rounded-md
            overflow-hidden 
            hover:translate-y-3 
            hover:shadow-lg 
            hover:transition-all 
            hover:delay-100 
            hover:duration-200 
            cursor-pointer
            dark:bg-lightest-navy ">

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