import { useStore } from 'vuex'
import { computed } from "vue";

export function useDrawer(){
    const store = useStore();

    return {
        drawerIsOpen: computed(() => store.state.drawer.isOpen),

        openDrawer: () => store.commit('openDrawer'),
        closeDrawer: () => store.commit('closeDrawer'),
        toggleDrawer: () => store.commit('toggleDrawer')
    }
}
