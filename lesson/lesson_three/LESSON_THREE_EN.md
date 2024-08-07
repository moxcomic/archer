## Lesson 3: Table Operations - Discard

`Archer` has encapsulated a series of table operation methods for you. They are located in the `github.com/moxcomic/Archer/actions` package (this package is built into Archer and is not publicly available, so it cannot be viewed on Github).

### Function Details

```go
package actions

import "sync"

type MajsoulActions struct{}

var (
    inst *MajsoulActions
    once = sync.OnceFunc(func() {
        inst = &MajsoulActions{}
    })
)

func NewMajsoulActions() *MajsoulActions {
    once()
    return inst
}

func (self *MajsoulActions) Join(roomID int, roomType int)       {}
func (self *MajsoulActions) ReJoin()                             {}
func (self *MajsoulActions) CancelJoin()                         {}
func (self *MajsoulActions) Confirm()                            {}
func (self *MajsoulActions) BackToHome()                         {}
func (self *MajsoulActions) Huansanzhang()                       {}
func (self *MajsoulActions) Babei()                              {}
func (self *MajsoulActions) Discard(tile string, tsumogiri bool) {}
func (self *MajsoulActions) Riichi(tile string, tsumogiri bool)  {}
func (self *MajsoulActions) Chii(tile0 string, tile1 string)     {}
func (self *MajsoulActions) Pon(tile0 string, tile1 string)      {}
func (self *MajsoulActions) Daimingkan(tile string)              {}
func (self *MajsoulActions) Kakan(tile string)                   {}
func (self *MajsoulActions) Ankan(tile string)                   {}
func (self *MajsoulActions) Ryukyoku()                           {}
func (self *MajsoulActions) Tsumo()                              {}
func (self *MajsoulActions) Ron()                                {}
func (self *MajsoulActions) Cancel()                             {}
func (self *MajsoulActions) ComeBack()                           {}
```

### Tile Codes

`Archer` uses Tenhou tile codes for card notation:

```
m: Man (characters)
p: Pin (dots)
s: Sou (bamboo)
z: Honor tiles (winds and dragons)
For example: 1m means one Man
East, South, West, North, White, Green, Red: 1234567 z
```

### Thought Process

From the above information, we know that if you want to discard a tile, you can call the `Discard(tile string, tsumogiri bool)` method, where `tile` is the tile to be discarded (using the tile codes mentioned above). Here we demonstrate with a minimal example:

```go
package main

import (
    "github.com/moxcomic/Archer/actions"
    "github.com/moxcomic/lq"
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
        actions.NewMajsoulActions().Discard(result.GetResult()[0].GetTile(), result.GetResult()[0].GetMoqie())
    }
}
```

In the example above, we simply discard a tile. When the AI has an action, the `onExecute` method is called, and the `result` contains the AI's recommended actions. This is an array, and the first element represents the AI's recommended action, so we use `result.GetResult()[0]`. Note that in the program, the first element starts from `0`.

### Note

This is just a simple example and does not consider operations that require a few seconds of thinking or waiting. If you write the program this way, you will get an instant tile discard program. We do not recommend doing this, as humans need to think and not discard tiles immediately without looking at them.