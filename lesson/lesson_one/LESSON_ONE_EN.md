## Lesson 1: `Archer` Script Framework

`Archer` defines a wide range of interfaces for players to customize their game logic. Users can write their own scripts using the `Golang` language.

## A Simple Usable Framework Template

```go
// Package name must be main
package main

// Import packages here
import (
    "github.com/moxcomic/lq"
)

// Called when login is completed
// Includes reconnecting after disconnection
func onLogin() {}

// Called when a friend room game starts
func onRoomGameStart() {}

// Called when a match game starts
func onMatchGameStart() {}

// Called at the beginning of each small round
// For example: called at the start of East 1, East 2, etc.
func onNewRound() {}

// Called at the end of each small round
// For example: called at the end of East 1, East 2, etc.
func onRoundEnd() {}

// Called when a player disconnects
// Seat represents the player's seat: 0 is self, 1 is the next player, 2 is the opposite player, 3 is the previous player
func onPlayerLeaving(seat int) {}

// Called when the AI has an action
func onExecute(result *lq.NotifyAIResult, risk []float64, rating, matches, fivePer, tenPer float64) {}

// Called when the entire game ends
func onGameEnd() {}

// Called when the connection to the Archer server is interrupted
func onServerDisconnect() {}
```