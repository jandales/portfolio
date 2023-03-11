<template>
    <ul class="flex gap-4  mt-4">
            <li>
                <span @click="externalLink(repository)" class="icon ">
                    <font-awesome-icon  icon="fa-brands fa-github"/>
                </span>
            </li>
            <li>
                <span @click="externalLink(link)" class="icon">
                    <font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square"/>
                </span>
            </li>
    </ul>
</template>

<script setup>

defineProps({
    repository: String,
    link : String,
})

const externalLink = (link) => {
    window.open(link)
}

</script>