import { useStore } from 'vuex'
import { computed } from "vue";
import { useRouter, useRoute } from 'vue-router'


export function useDrawer(){
    const store                 = useStore();

    const route                 = useRoute();
    const router                = useRouter();

    const parentRoute           = computed(() => route.matched[0]);
    const secondaryDrawerRoutes = computed(() => route.matched);
    const childrenRoutes        = computed(() => {
            let lastMatched = route.matched[route.matched.length-1];
            return lastMatched.children;
        }
    );
    const routesWithMeta = computed(() => router.options.routes.filter(x=>x.meta));
    const mainDrawerRoutes = computed(() => routesWithMeta.value.filter(x=>x.meta.visibleInDrawer));

    return {
        drawerIsOpen: computed(() => store.state.drawer.isOpen),

        openDrawer: () => store.commit('openDrawer'),
        closeDrawer: () => store.commit('closeDrawer'),
        toggleDrawer: () => store.commit('toggleDrawer'),

        parentRoute, 
        secondaryDrawerRoutes, 
        childrenRoutes, 
        mainDrawerRoutes
    }
}
