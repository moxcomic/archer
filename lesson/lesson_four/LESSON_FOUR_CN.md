## 第四课: 出牌的细节优化

在`雀魂`游戏中, 在`立直(Riichi)`后全程由服务端自动丢弃最后一张牌, 所以我们在上一章节的代码

```go
func onExecute(result *lq.NotifyAIResult, risk []float64, r, m, f, t float64) {
  if result.GetResult()[0].GetType() == E_PlayOperation_Discard {
    actions.NewMajsoulActions().Discard(result.GetResult()[0].GetTile(), result.GetResult()[0].GetMoqie())
  }
}
```

就需要进行一点点的修改, 增加对`立直(Riichi)`后的判断, 在`Archer`开发框架内已经为大家封装好了这类信息的获取接口

## 函数详情

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
```

## 思路解析

从上方可以得到结论, 我们需要获取所有玩家的立直状态只需要通过`gamestate.Inst().Riichi()`即可获得, 所以我们将代码改为以下

```go
package main

import (
	"github.com/moxcomic/Archer/actions"
	"github.com/moxcomic/lq"
  "github.com/moxcomic/Archer/gamestate"
)

const (
	E_PlayOperation_None           = iota
	E_PlayOperation_Discard        // 弃牌
	E_PlayOperation_Chi            // 吃
	E_PlayOperation_Pon            // 碰
	E_PlayOperation_Ankan          // 暗杠
	E_PlayOperation_Minkan         // 明杠
	E_PlayOperation_Kakan          // 加杠
	E_PlayOperation_RiiChi         // 立直
	E_PlayOperation_Tsumo          // 自摸
	E_PlayOperation_Ron            // 和
	E_PlayOperation_JiuZhongJiuPai // 九种九牌
	E_PlayOperation_Babei          // 拔北
	E_PlayOperation_HuanSanZhang   // 换三张
	E_PlayOperation_DingQue        // 定缺
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

可以看到我们添加了一个判断内容

```go
if gamestate.Inst().Riichi()[0] {
  if gamestate.Inst().IsOperation(E_PlayOperation_Ankan) {
    actions.NewMajsoulActions().Cancel()
  }

  return
}
```

在`Archer`中所有包含玩家信息的内容均按照[0 1 2 3]的座位顺序排列, 0为自己, 1为下家, 此时获取`Riichi()[0]`表示自己已经`立直(Riichi)`所以直接`return`不执行后方出牌代码, 但是我们要注意, `立直(Riichi)`后虽然由服务器接管出牌, 但是在有`暗杠`操作时是会询问客户端的, 此时的选项就只有两个(`暗杠`和`跳过(Cancel)`), 如果给出的建议是出牌那就是`跳过(Cancel)`选项, 所以这里我们判断了`gamestate.Inst().IsOperation(E_PlayOperation_Ankan)`如果是`暗杠`则执行`跳过(Cancel)`选项, 执行之后依然会继续由服务器接替我们进行出牌。
