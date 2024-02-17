import { computed } from "vue";
import useGSI from "./useGSI";

/**
 * @returns {import("vue").ComputedRef<import("./useGSI.js").PlayerList>} All players in the game.
 */
const allplayers = computed(() => {
    return useGSI().value?.allplayers;
});

export default function usePlayers(team = null) {
    if (team) {
        return computed(() => {
            return Object.values(allplayers.value).filter((player) => player.team === team);
        });
    }
    return allplayers;
}