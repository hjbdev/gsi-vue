import { computed } from "vue";
import useGSI from "./useGSI";

const allplayers = computed(() => {
    return useGSI().value?.allplayers ?? null;
});

const cts = computed(() => {
    return Object.values(allplayers.value ?? []).filter((player) => player.team === 'CT') ?? null;
});

const ts = computed(() => {
    return Object.values(allplayers.value ?? []).filter((player) => player.team === 'T') ?? null;
});



/**
 * @returns {import("vue").ComputedRef<import("./useGSI.js").PlayerList | null>} All players in the game.
 */
export default function usePlayers(team = null) {
    if (team === 'CT') {
        return cts;
    } else if (team === 'T') {
        return ts;
    }
    
    return allplayers;
}