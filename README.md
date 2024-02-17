# A set of Vue 3 composables for CS2's Game State Integration

This library contains a set of composables to assist with CS2 Game State integration, as well as a backend GSI websocket server integration to communicate between the game and the browser.

## Getting Started

Put a gamestate integration file in your CS folder.

```cfg
"VUEHUD"
{
	"uri"		"http://localhost:8172/"
	"timeout"		"0.1"
	"buffer"		"0"
	"throttle"		"0"
	"heartbeat"		"0.01"
	"data"
	{
		"provider"		"1"
		"map"		"1"
		"round"		"1"
		"player_id"		"1"
		"allplayers_id"		"1"
		"player_state"		"1"
		"allplayers_state"		"1"
		"allplayers_match_stats"		"1"
		"allplayers_weapons"		"1"
		"allplayers_position"		"1"
		"phase_countdowns"		"1"
		"allgrenades"		"1"
		"map_round_wins"		"1"
		"player_position"		"1"
		"bomb"		"1"
	}
	"output"
	{
		"precision_time"      "3"
		"precision_position"  "3"
		"precision_vector"    "3"
	}
}
```

Run `bun ./node_modules/gsi-vue/src/backend/index.js`