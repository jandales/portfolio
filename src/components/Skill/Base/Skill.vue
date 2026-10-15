<template>
     <div class="group flex min-w-0 flex-col items-center justify-center rounded-xl border border-slate-100 bg-slate-50/80 px-2 py-4 transition duration-200 hover:-translate-y-0.5 hover:border-violet-200 hover:bg-violet-50/70 dark:border-white/5 dark:bg-white/5 dark:hover:border-violet-400/30 dark:hover:bg-violet-400/10">
            <SkillImage :image="image" :alt="name" />
            <SkillName :name="name" />    
     </div>
</template>

<script setup>
import SkillName from '@/components/Skill/Base/SkillName.vue';
import SkillImage from '@/components/Skill/Base/SkillImage.vue';

defineProps({
    image: String,
    name : String,
})
</script>