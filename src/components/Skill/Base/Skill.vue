<template>
     <div  class="flex flex-col items-center">
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