import { computed } from "vue";
import useGSI from "./useGSI";

/**
 * Returns the bomb planter.
 * @returns {import("vue").ComputedRef<import("./useGSI.js").Player | null>} The bomb planter.
 */
export default function useBombPlanter() {
    return computed(() => {
        return useGSI().value?.allplayers ? useGSI().value.allplayers[useGSI().value.bomb?.planter] : null;
    });
}