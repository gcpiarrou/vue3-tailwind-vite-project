<template>
    <transition enter-class="opacity-0" enter-active-class="ease-out transition-medium" enter-to-class="opacity-100"
        leave-class="opacity-100" leave-active-class="ease-out transition-medium" leave-to-class="opacity-0">
        <div 
        v-show="drawerIsOpen || !isMobile"
        class="
            fixed top-0 left-0 
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
                    <Link icon="user-circle" url="/user"></Link>
                </div>
                <Link icon="home" url="/"></Link>
                <Link icon="user" url="/characters"></Link>
                <Link icon="feather-alt" url="/tales"></Link>
                <Link icon="desktop" url="/window-data"></Link>
            </div>
            <div>
                <Link icon="power-off" url="/logout"></Link>
            </div>
        </div>
    </transition>
</template>

<script>
	import { defineAsyncComponent } from "vue";

    import { useIsMobile }  from "Helpers/composables/mobile";
    import { useDrawer }    from "Helpers/composables/drawer";

    export default {
        components: {
            Link : defineAsyncComponent(() => import("Components/Navigation/Link.vue")),
        },
        setup(){
            const {isMobile}        = useIsMobile();
            const { drawerIsOpen }  = useDrawer();

            return { isMobile, drawerIsOpen };
        },
    }
</script>