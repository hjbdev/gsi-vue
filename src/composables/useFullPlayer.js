import { computed } from "vue";
import usePlayer from "./usePlayer";
import usePlayers from "./usePlayers";

/**
 * @returns {import("vue").ComputedRef<import("./useGSI.js").Player | null>} The current player.
 */
export default function useFullPlayer() {
    return computed(() => {
        if (!usePlayers().value || !usePlayer().value?.steamid) {
            return null;
        }
        const player = usePlayers().value[usePlayer().value?.steamid];
        player.steamid = usePlayer().value?.steamid;
        return player;
    });
}