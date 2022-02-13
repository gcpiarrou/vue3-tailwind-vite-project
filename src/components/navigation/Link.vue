<template>
    <router-link class="flex items-center justify-center flex-shrink-0 w-10 h-10 mt-4 rounded 
        dark:hover:bg-gray-700
        hover:bg-gray-300 
        " :to="props.url" @click="closeDrawer">
        <font-awesome-icon :icon="props.icon"/>
    </router-link>
</template>

<script>
    import { useDrawer } from "Helpers/composables/drawer";

    export default {
        props:{
            icon:String,
            url:String
        },
        setup(props){
            const { closeDrawer } = useDrawer();

            return { props, closeDrawer };
        },
    }
</script>