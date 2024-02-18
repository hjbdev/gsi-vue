import { computed } from "vue";
import useFullPlayer from "./useFullPlayer";
/**
 * @returns {import("vue").ComputedRef<import("./useGSI.js").Weapon>} The current player.
 */
export default function useCurrentWeapon() {
    return computed(() => {
        return Object.values(useFullPlayer().value?.weapons ?? {}).find((weapon) => weapon.state === 'active');
    });
}