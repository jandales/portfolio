<template>
    <div class="h-full">
        <div class="relative h-full overflow-hidden rounded-2xl border border-white/80 bg-white/80 p-6 shadow-[0_16px_45px_-28px_rgba(30,41,59,0.45)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-[0_22px_55px_-28px_rgba(124,58,237,0.35)] dark:border-white/10 dark:bg-white/5 dark:hover:border-violet-400/30 sm:p-8">
            <div class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-violet-500 to-fuchsia-400 opacity-80"></div>
            <div class="mb-7 flex items-center justify-between">
                <SubHeading :title="title" />
                <span class="rounded-full bg-violet-50 px-2.5 py-1 text-xs font-semibold !text-violet-600 dark:bg-violet-400/10 dark:!text-violet-300">
                    {{ list.length }}
                </span>
            </div>
            <div class="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
                <Skill 
                    v-for="(item, index) in list"
                    :key="item.name || index" :name="item.name"
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