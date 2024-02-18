import { computed } from "vue";
import useGSI from "./useGSI";

/**
 * @returns {import("vue").ComputedRef<import("./useGSI.js").Player | null>} The current player.
 */
export default function usePlayer() {
    return computed(() => {
        return computed(() => useGSI().value?.player ?? null);
    });
}