import { computed } from "vue";
import useGSI from "./useGSI";

const allplayers = computed(() => {
    return useGSI().value?.allplayers;
});

/**
 * @returns {import("vue").ComputedRef<import("./useGSI.js").PlayerList | null>} All players in the game.
 */
export default function usePlayers(team = null) {

    if (!allplayers.value) {
        return null;
    }

    if (team) {
        return computed(() => {
            return Object.values(allplayers.value).filter((player) => player.team === team);
        });
    }
    return allplayers;
}