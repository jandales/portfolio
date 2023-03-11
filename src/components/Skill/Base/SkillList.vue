<template>
    <div   class="mb-8 md:mb-0 lg:mb-0" >
        <div class="p-8  rounded-md bg-emerald-50 border border-emerald-100 dark:border-0 dark:bg-lightest-navy shadow-xl  h-full">             
            <SubHeading :title="title" />
            <div class="grid grid-cols-4 gap-8">                
                <Skill 
                    v-for="(item, index) in list"
                    :key="index" :name="item.name"
                    :image="item.image" 
                />
            </div>
        </div>  
    </div>
</template>

<script setup>

import SubHeading from '../SubHeading.vue';
import Skill from './Skill.vue';

defineProps({
    title: String,
    list : Array,
})


</script>