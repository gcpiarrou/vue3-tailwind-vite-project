<template>
    <div class="flex items-center flex-shrink-0 h-16 px-8 border-b border-gray-300 dark:border-gray-600 justify-between dark:bg-gray-700">
        <h1 class="text-lg font-medium">{{$route.name}}</h1>
        <button v-if="isMobile" class="flex items-center justify-center w-10 h-10 rounded hover:bg-gray-300 dark:hover:bg-gray-700" @click="openDrawer">
            <font-awesome-icon icon="bars"/>
        </button>
    </div>
</template>

<script>
    import { useIsMobile }      from "Helpers/composables/mobile";
    import { useDrawer }        from "Helpers/composables/drawer";

export default {
    setup(){
        const { isMobile }      = useIsMobile();
        const { openDrawer }    = useDrawer();

        return { isMobile, openDrawer };
    },
}
</script>