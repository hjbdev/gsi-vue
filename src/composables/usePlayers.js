import { computed } from "vue";
import useGSI from "./useGSI";

const allplayers = computed(() => {
    return useGSI().value?.allplayers ?? null;
});

/**
 * @returns {import("vue").ComputedRef<import("./useGSI.js").PlayerList | null>} All players in the game.
 */
export default function usePlayers(team = null) {
    if (team) {
        return computed(() => {
            return Object.values(allplayers.value ?? []).filter((player) => player.team === team) ?? null;
        });
    }
    return allplayers;
}