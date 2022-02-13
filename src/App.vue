<template>
	<div class="flex h-screen text-gray-800 bg-gray-50 dark:text-white dark:bg-gray-700">
		<Drawer></Drawer>
		<div :class="isMobile?'w-full':'w-full ml-72'">
			<NavBar></NavBar>
			<router-view></router-view>
			<ReloadPWA></ReloadPWA>
		</div>
	</div>
</template>

<script>
	import { defineAsyncComponent } from "vue";

	import { useIsMobile } 	from "Helpers/composables/mobile";
    import { useDrawer } 	from "Helpers/composables/drawer";

	import { useTheme } 	from "Helpers/tailwind/init";
	useTheme();

	export default {
		components: {
			ReloadPWA 	: defineAsyncComponent(() => import("Components/pwa/ReloadPWA.vue")),
			Drawer 		: defineAsyncComponent(() => import("Components/navigation/Drawer.vue")),
			NavBar		: defineAsyncComponent(() => import("Components/contents/NavBar.vue"))
		},
		setup(){
            const { isMobile } 		= useIsMobile();
            const { drawerIsOpen } 	= useDrawer();

            return { isMobile, drawerIsOpen };
        },
	}
</script>