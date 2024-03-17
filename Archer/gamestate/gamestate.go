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
	Tsumo bool // true is tsumo
	Point int  // ron & tsumo point
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
