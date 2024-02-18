import { computed } from "vue";
import useGSI from "./useGSI";

const allplayers = computed(() => {
    if (!useGSI().value?.allplayers) {
        return null;
    }

    return Object.keys(useGSI().value.allplayers).reduce((players, steamid) => {
        const player = useGSI().value.allplayers[steamid];
        player.steamid = steamid;
        players[steamid] = player;
        return players;
    }, {});
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