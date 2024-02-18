import { computed } from "vue";
import useGSI from "./useGSI";

/**
 * @returns {import("vue").ComputedRef<import("./useGSI.js").Player>} The current player.
 */
export default function usePlayer() {
    return computed(() => {
        return useGSI().value?.player;
    });
}