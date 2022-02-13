<template>

<div class="flex-grow p-6 overflow-auto justify-center">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="bg-gray-200 dark:bg-gray-600 rounded-xl">
                    <div class="p-4 w-full text-center">
                        <div class="border-2 border-gray-500 px-4 py-6 rounded-lg">
                            <font-awesome-icon icon="desktop" class="fa-3x mb-3"/>
                            <h2 class="title-font font-medium text-3xl text-gray-900 dark:text-gray-50">{{ windowWidth }} px</h2>
                            <p class="leading-relaxed">Window width</p>
                        </div>
                    </div>
                </div>

                <div class="bg-gray-200 dark:bg-gray-600 rounded-xl">
                    <div class="p-4 w-full text-center">
                        <div class="border-2 border-gray-500 px-4 py-6 rounded-lg">
                            <font-awesome-icon icon="mobile-alt" class="fa-3x mb-3"/>
                            <h2 class="title-font font-medium text-3xl text-gray-900 dark:text-gray-50">{{ isMobile }}</h2>
                            <p class="leading-relaxed">Is mobile</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        

</template>

<script>
    import {
        useWindowWidth
    } from "Helpers/composables/windowWidth";
    import {
        useIsMobile
    } from "Helpers/composables/mobile";

    export default {
        setup() {
            const {
                windowWidth
            } = useWindowWidth();
            const {
                isMobile
            } = useIsMobile();

            return {
                windowWidth,
                isMobile
            }
        },
    };
</script>