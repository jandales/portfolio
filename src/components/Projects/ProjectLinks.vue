<template>
    <ul class="flex gap-4  mt-4">
            <li v-if="repository">
                <span @click="openRepository" class="icon ">
                    <font-awesome-icon  icon="fa-brands fa-github"/>
                </span>
            </li>
            <li>
                <span @click="openProjectLink" class="icon">
                    <font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square"/>
                </span>
            </li>
    </ul>
</template>

<script setup>
import { useRouter } from 'vue-router'

const props = defineProps({
    repository: String,
    link : String,
})

const router = useRouter()

const hasValidUrl = (url) => {
    if (!url) return false
    const value = String(url).trim()
    return value !== '' && value !== '#'
}

const openRepository = () => {
    if (!hasValidUrl(props.repository)) {
        router.push({ name: 'not-found' })
        return
    }
    window.open(props.repository, '_blank', 'noopener,noreferrer')
}

const openProjectLink = () => {
    if (!hasValidUrl(props.link)) {
        router.push({ name: 'not-found' })
        return
    }
    window.open(props.link, '_blank', 'noopener,noreferrer')
}
</script>
