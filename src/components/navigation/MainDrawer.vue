<template>
    <transition enter-class="opacity-0" enter-active-class="ease-out transition-medium" enter-to-class="opacity-100"
        leave-class="opacity-100" leave-active-class="ease-out transition-medium" leave-to-class="opacity-0">
        <div 
        v-show="drawerIsOpen || !isMobile"
        class="
            top-0 left-0 
            flex flex-col items-center justify-between
            min-w-fit w-16 pb-4 h-full z-30
            overflow-auto
            transform ease-in-out transition-all duration-300 
            border-r
            bg-gray-200 border-gray-100  text-gray-700
            dark:bg-gray-900 dark:border-gray-800  dark:text-gray-100
            ">
            <div>
                <div class="w-full h-16">
                    <Link icon="user-circle" url="/profile"></Link>
                </div>
                <Link v-for="route in mainDrawerRoutes" :key="route.name" :icon="route.meta.icon" :url="route.path"></Link>
            </div>
            <div>
                <Link icon="power-off" url="/logout"></Link>
            </div>
        </div>
    </transition>
</template>

<script setup>
    
    import { useIsMobile }  from "Helpers/composables/mobile";
    import { useDrawer }    from "Helpers/composables/drawer";

    import Link from "Components/Navigation/Link.vue";

    const { isMobile }                          = useIsMobile();
    const { drawerIsOpen, mainDrawerRoutes }    = useDrawer();

    


    

    


</script>