import { computed } from "vue";
import { useWindowWidth } from "Helpers/composables/windowWidth";

export const useIsMobile = () => {

    // Data initialization
    const { windowWidth } = useWindowWidth();

    return {
        isMobile : computed(()=> windowWidth.value < 600),
    };
}
