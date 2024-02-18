import { computed } from "vue";
import useGSI from "./useGSI";

/**
 * @returns {import("vue").ComputedRef<import("./useGSI.js").Player>} The current player.
 */
export default function useFullPlayer() {
    return computed(() => {
        const player = useGSI().value?.allplayers[useGSI().value.player?.steamid];
        player.steamid = useGSI().value.player.steamid;
        return player;
    });
}