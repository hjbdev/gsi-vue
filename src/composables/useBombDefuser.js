import { computed } from "vue";
import useGSI from "./useGSI";

/**
 * Returns the bomb defuser.
 * @returns {import("vue").ComputedRef<import("./useGSI.js").Player | null>} The bomb defuser.
 **/
export default function useBombDefuser() {
    return computed(() => {
        return useGSI().value?.allplayers ? useGSI().value.allplayers[useGSI().value.bomb?.defuser] : null;
    });
}
