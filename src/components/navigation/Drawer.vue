<template>
        <MainDrawer></MainDrawer>
		<SecondaryDrawer v-if="secondaryDrawerRoutes[0].name"></SecondaryDrawer>
		<Overlay 
            :visible="drawerIsOpen && isMobile" 
            :onClickFunction="closeDrawer"
        ></Overlay>
</template>

<script setup>
    import { useIsMobile } from "Helpers/composables/mobile";
    import { useDrawer } from "Helpers/composables/drawer";

    import MainDrawer from "Components/navigation/MainDrawer.vue";
	import SecondaryDrawer from "Components/navigation/SecondaryDrawer.vue";
    import Overlay from "Components/navigation/Overlay.vue";

    const {isMobile} = useIsMobile();
    const { drawerIsOpen, closeDrawer, secondaryDrawerRoutes }    = useDrawer();


</script>