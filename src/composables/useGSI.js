import { ref } from "vue";
import { useEventListener } from "@vueuse/core";

const gsi = new WebSocket("ws://localhost:1350");

/**
 * Represents the gs variable.
 * @type {Ref<GameState>}
 */
const gs = ref({});

useEventListener(gsi, "message", (event) => {
    const data = JSON.parse(event.data);
    if (data.type === "gamestate:update") {
        gs.value = data.data;
    }
});
/**
 * @typedef {object} MatchStats
 * @property {Number} assists
 * @property {Number} deaths
 * @property {Number} kills
 * @property {Number} mvps
 * @property {Number} score
 */
/**
 * @typedef {object} PlayerState
 * @property {Number} armor
 * @property {Number} burning
 * @property {Number} equip_value - Total value of the player's equipment
 * @property {Number} flashed - How flashed the player is
 * @property {Number} health
 * @property {Number} helmet
 * @property {Number} money
 * @property {Number} round_totaldmg - Total damage dealt this round
 * @property {Number} round_kills
 * @property {Number} round_killhs - Headshot kills this round
 * @property {Number} smoked
 */
/**
 * @typedef {object} Weapon
 * @property {Number} ammo_clip - Ammo in the magazine
 * @property {Number} ammo_clip_max - Maximum ammo in the magazine
 * @property {Number} ammo_reserve - Reserve ammo
 * @property {string} name - Weapon name
 * @property {string} paintkit - Weapon skin
 * @property {"holstered", "active"} state - Weapon state
 * @property {string} type - Weapon type
 */
/**
 * @typedef {Object.<string, Weapon>} PlayerWeapons
 */
/**
 * @typedef {object} Player
 * @property {"playing" | "menu" | "textinput"} activity - Player activity. Not present in allplayers
 * @property {string} forward - forward vectors
 * @property {MatchStats} match_stats - basic scoreboard stats for the player 
 * @property {string} name - player name
 * @property {Number} observer_slot - observer slot
 * @property {string} position - player position
 * @property {"CT"|"T"} team - player team
 * @property {PlayerState} state - player state
 * @property {PlayerWeapons} weapons - player weapons
 * @property {string} steamid - SteamID64 of the player. Not present in allplayers
 * @property {string} spectarget - Spectator target SteamID64. Not present in allplayers
 */
/**
 * @typedef {Object.<string, Player>} PlayerList
 */
/**
 * @typedef {Object} BombState
 * @property {"carried" | "dropped" | "planting" | "planted" | "defusing" | "defused"} state - Bomb state
 * @property {string} position - Bomb position
 * @property {string} player - SteamID64 of the player carrying the bomb
 */
/**
 * @typedef {object} Grenade
 * @property {string} type - Grenade type
 * @property {string} owner - SteamID64 of the player who threw the grenade
 * @property {string} lifetime - Grenade lifetime
 * @property {?string} position - Grenade position
 * @property {?string} velocity - Grenade velocity
 * @property {?string} effecttime - Grenade effect time
 * @property {?Object.<string, string>} flames - Molotov/Incendiary only: List of flames
 */
/**
 * @typedef {Object.<string, Grenade>} GrenadeList
 */
/**
 * @typedef {Object.<Number, "ct_win_elimination" | "ct_win_defuse" | "ct_win_time" | "t_win_elimination" | "t_win_bomb">} RoundWins
 */
/**
 * @typedef {Object} TeamState
 * @property {Number} consecutive_round_losses - Consecutive round losses. Actually refers to loss bonus stage, which was changed in 2019
 * @property {String} flag - Team flag, e.g. "US". ISO 3166-1 alpha-2.
 * @property {Number} matches_won_this_series - Matches won this series
 * @property {String} name - Team name
 * @property {Number} score - Team score
 * @property {Number} timeouts_remaining - How many timeouts the team has remaining
 */
/**
 * @typedef {Object} MapState
 * @property {string} mode - Game mode
 * @property {string} name - Map name
 * @property {Number} num_matches_to_win_series - Number of matches to win the series
 * @property {"warmup" | "live" | "intermission" | "gameover"} phase - Map phase
 * @property {Number} round - Current round
 * @property {RoundWins} round_wins - Round wins
 * @property {TeamState} team_ct - CT state
 * @property {TeamState} team_t - T state
 */
/**
 * @typedef {Object} PhaseCountdowns
 * @property {"live" | "over" | "freezetime" | "bomb" | "defuse" | "warmup"} phase - Current phase
 * @property {string} phase_ends_in - Time until the current phase ends
 */
/**
 * @typedef {Object} Provider
 * @property {string} name - Provider name, e.g. "Counter-Strike: Global Offensive"
 * @property {string} appid - Provider AppID, e.g. "730"
 * @property {string} version - Provider version
 * @property {string} steamid - Provider SteamID64, usually logged in user.
 * @property {string} timestamp - Timestamp
 */
/**
 * @typedef {"planted" | "exploded" | "defused"} BombRoundState
 * @typedef {"freezetime" | "live" | "over"} RoundPhase
 */
/**
 * @typedef {Object} RoundState
 * @property {RoundPhase} phase - Round phase
 * @property {"CT" | "T"} win_team - Winning team
 * @property {?BombRoundState} bomb - Bomb state. Not visible until bomb is planted
 */
/**
 * @typedef {Object} GameState
 * @property {?PlayerList} allplayers - Object containing all players in the game
 * @property {?BombState} bomb - Bomb state
 * @property {?GrenadeList} grenades - Object containing all currently active grenades in the game
 * @property {?MapState} map - Map state
 * @property {?PhaseCountdowns} phase_countdowns - Phase countdowns
 * @property {?Player} player - Current player
 * @property {?Provider} provider - Game information
 * @property {?GameState} previously - The state of the game on the previous tick
 */

/**
 * Returns the GameState object.
 * @returns {import("vue").Ref<GameState>} The GameState object.
 */
export default function useGSI() {
    return gs;
}