<template>
<transition enter-class="opacity-0" enter-active-class="ease-out transition-medium" enter-to-class="opacity-100"
        leave-class="opacity-100" leave-active-class="ease-out transition-medium" leave-to-class="opacity-0">
    <div 
        v-show="drawerIsOpen || !isMobile"
        class="
            fixed top-0 left-16 h-full z-30 w-56
            flex flex-col
            transform ease-in-out transition-all duration-300
            border-r 
            border-gray-200
            bg-gray-50
            dark:border-gray-600
            dark:bg-gray-700
        "
    >
                <button class="relative text-sm focus:outline-none group">
                    <div class="
                        w-full h-16 px-4
                        flex items-center justify-between 
                        border-b 
                        border-gray-300 
                        hover:bg-gray-100
                        dark:border-gray-600 
                        dark:hover:bg-gray-700
                    ">
                        <span class="font-medium">
                            Dropdown
                        </span> 
                        <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <div class="absolute z-10 flex-col items-start hidden w-full pb-1 bg-gray-100 dark:bg-gray-800 shadow-lg group-focus:flex">
                        <a v-for="n in 3" :key="n" class="w-full px-4 py-2 text-left hover:bg-gray-200 dark:hover:bg-gray-900" href="#">Menu Item {{n}}</a>
                    </div>
                </button>
                <div class="flex flex-col flex-grow p-4 overflow-auto">
                    <a v-for="n in 6" :key="n" class="flex items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-gray-200 dark:hover:bg-gray-800" href="#">
                        <span class="leading-none">Item {{n}}</span>
                    </a>

                    
                    <a class="flex items-center flex-shrink-0 h-10 px-3 mt-auto text-sm font-medium dark:text-white bg-gray-300 hover:bg-gray-400 dark:bg-gray-500 rounded dark:hover:bg-gray-600 "
                        href="#">
                        <font-awesome-icon icon="plus"/>
                        <span class="ml-2 leading-none">New Item</span>
                    </a>
                </div>

            </div>
</transition>
</template>

<script>
    import { useIsMobile }  from "Helpers/composables/mobile";
    import { useDrawer }    from "Helpers/composables/drawer";

    export default {
        setup(){
            const { isMobile } = useIsMobile();
            const { drawerIsOpen } = useDrawer();

            return { isMobile, drawerIsOpen };
        },
    }
</script>