<template>
        <MainDrawer></MainDrawer>
		<SecondaryDrawer></SecondaryDrawer>
		<Overlay 
            :visible="drawerIsOpen && isMobile" 
            :onClickFunction="closeDrawer"
        ></Overlay>
</template>

<script>
    import { useIsMobile } from "Helpers/composables/mobile";
    import { useDrawer } from "Helpers/composables/drawer";

    import MainDrawer from "Components/navigation/MainDrawer.vue";
	import SecondaryDrawer from "Components/navigation/SecondaryDrawer.vue";
    import Overlay from "Components/navigation/Overlay.vue";

export default {
    components: {
        MainDrawer,
        SecondaryDrawer,
        Overlay,
    },
    setup(){
        const {isMobile} = useIsMobile();
        const { 
            drawerIsOpen, 
            closeDrawer, 
        } = useDrawer();

        return {
            isMobile, 
            drawerIsOpen, 
            closeDrawer
        };
    },
    
}
</script>