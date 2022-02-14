<template>
    <router-link
        :to="props.route.path"
        exact
        exact-active-class="bg-gray-300 dark:bg-gray-900" 
        class="flex items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-gray-200 dark:hover:bg-gray-800"
    >
        <span class="leading-none">{{props.route.meta.text}}</span>
    </router-link>
</template>

<script setup>
    const props = defineProps({
        route: Object
    })
</script>
