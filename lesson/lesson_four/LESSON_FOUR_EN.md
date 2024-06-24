## Lesson 4: Optimizing Discard Details

In the game of `Mahjong Soul`, after declaring `Riichi`, the server will automatically discard the last tile for the player. Therefore, we need to modify the code from the previous lesson to include a check for the `Riichi` state. The `Archer` development framework already provides interfaces to retrieve such information.

### Function Details

```go
package gamestate

import "sync"

const (
    RoundEndReasonHule = iota
    RoundEndReasonRyuukyoku
)

type RoundEnd struct {
    Reason int      // round end reason
    Deltas []int    // round end score deltas, [0] is self
    Hules  []*Hules // hules data
}

type Hules struct {
    Seat  int  // player seat, [0] is self
    Tsumo bool // true if tsumo
    Point int  // ron & tsumo points
}

type GameState struct{}

var (
    inst *GameState
    once = sync.OnceFunc(func() {
        inst = &GameState{}
    })
)

func Inst() *GameState {
    once()
    return inst
}

func (self *GameState) IsOnChiPon() bool                     { return false }
func (self *GameState) IsOnBabei() bool                      { return false }
func (self *GameState) IsRoundWind(tile string) bool         { return false }
func (self *GameState) IsSelfWind(tile string) bool          { return false }
func (self *GameState) IsCanWin() bool                       { return false }
func (self *GameState) IsLiqi3() bool                        { return false }
func (self *GameState) Chang() int                           { return 0 }
func (self *GameState) Ben() int                             { return 0 }
func (self *GameState) Ju() int                              { return 0 }
func (self *GameState) Oya() int                             { return 0 }
func (self *GameState) Score() []int32                       { return make([]int32, 4) }
func (self *GameState) DiscardTile() [][]string              { return make([][]string, 0) }
func (self *GameState) Riichi() []bool                       { return make([]bool, 0) }
func (self *GameState) IsCan(int) bool                       { return false }
func (self *GameState) IsCanOperations() bool                { return false }
func (self *GameState) IsOperation(uint32) bool              { return false }
func (self *GameState) SetUserUseMouse(bool)                 {}
func (self *GameState) HandTile() []string                   { return make([]string, 14) }
func (self *GameState) OperationCombination(uint32) []string { return make([]string, 0) }
func (self *GameState) LeftTileCount() int                   { return 0 }
func (self *GameState) CanIppatsu() []bool                   { return make([]bool, 4) }
func (self *GameState) GlobalLeftTile() []string             { return make([]string, 0) }
func (self *GameState) RiichiAt() []int                      { return make([]int, 0) }
func (self *GameState) Level() string                        { return "初心" }
func (self *GameState) LevelScore() uint32                   { return 0 }
func (self *GameState) IsInSyncGame() bool                   { return false }
func (self *GameState) Melds() [][][]string                  { return make([][][]string, 0) }
func (self *GameState) RoundEnd() *RoundEnd                  { return nil }
```

### Thought Process

From the above information, we can conclude that to get the `Riichi` status of all players, we just need to use `gamestate.Inst().Riichi()`. Therefore, we modify the code as follows:

```go
package main

import (
    "github.com/moxcomic/Archer/actions"
    "github.com/moxcomic/lq"
    "github.com/moxcomic/Archer/gamestate"
)

const (
    E_PlayOperation_None           = iota
    E_PlayOperation_Discard        // Discard
    E_PlayOperation_Chi            // Chii
    E_PlayOperation_Pon            // Pon
    E_PlayOperation_Ankan          // Ankan
    E_PlayOperation_Minkan         // Daiminkan
    E_PlayOperation_Kakan          // Kakan
    E_PlayOperation_RiiChi         // Riichi
    E_PlayOperation_Tsumo          // Tsumo
    E_PlayOperation_Ron            // Ron
    E_PlayOperation_JiuZhongJiuPai // JiuZhongJiuPai
    E_PlayOperation_Babei          // Babei
    E_PlayOperation_HuanSanZhang   // Huansanzhang
    E_PlayOperation_DingQue        // Dingque
    E_PlayOperation_Reveal
    E_PlayOperation_Unveil
    E_PlayOperation_LockTile
    E_PlayOperation_Revealliqi
)

func onExecute(result *lq.NotifyAIResult, risk []float64, r, m, f, t float64) {
    if result.GetResult()[0].GetType() == E_PlayOperation_Discard {
        if gamestate.Inst().Riichi()[0] {
            if gamestate.Inst().IsOperation(E_PlayOperation_Ankan) {
                actions.NewMajsoulActions().Cancel()
            }
            return
        }
        actions.NewMajsoulActions().Discard(result.GetResult()[0].GetTile(), result.GetResult()[0].GetMoqie())
    }
}
```

### Explanation of Added Check

We added the following check to the code:

```go
if gamestate.Inst().Riichi()[0] {
    if gamestate.Inst().IsOperation(E_PlayOperation_Ankan) {
        actions.NewMajsoulActions().Cancel()
    }
    return
}
```

In `Archer`, all player-related information is arranged in the seat order [0, 1, 2, 3], where 0 is yourself and 1 is the next player. Thus, `Riichi()[0]` indicates that you have declared `Riichi`, so we immediately `return` without executing the subsequent discard code. However, note that after declaring `Riichi`, although the server takes over discarding, it will still query the client when there is an `Ankan` operation. At this point, the options are only `Ankan` and `Cancel`. If the recommended action is to discard, it corresponds to the `Cancel` option. Therefore, we check `gamestate.Inst().IsOperation(E_PlayOperation_Ankan)`, and if it is an `Ankan`, we execute the `Cancel` option. After executing, the server will continue to take over discarding.