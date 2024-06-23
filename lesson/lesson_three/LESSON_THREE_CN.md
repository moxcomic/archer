## 第三课: 牌桌操作 - 出牌

`Archer`已经为大家封装好了一系列牌桌操作方法, 他们位于`github.com/moxcomic/Archer/actions`包内`(该包为Archer内置包, 并未公开, 无法在Github查看)`。

## 函数详情

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

## 牌代码

`Archer`的牌按照天凤牌代码进行记牌

```
m: 萬
p: 筒
s: 索
z: 字
例如: 1m 表示 一萬
东南西北白發中: 1234567 z
```



## 思路解析

由上方信息我们可以知道，如果你想要出牌就可以调用`Discard(tile string, tsumogiri bool)`接口方法，其中`tile`为要丢弃的牌(`tile按照上方牌代码`), 这里我们以一个最小化的示例进行演示:

```go
package main

import (
	"github.com/moxcomic/Archer/actions"
	"github.com/moxcomic/Archer/lq"
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
		actions.NewMajsoulActions().Discard(result.GetResult()[0].GetTile(), tsumogiri bool)
	}
}
```

上方的例子我们以最简单的方式执行了出牌, 当AI有动作时就会调用`onExecute`方法, 而`result`里就存放着AI的推荐操作, 这是一个数组, 第`1`个代表AI的推荐操作, 所以这里我们使用了`result.GetResult()[0]`, 注意, 在程序里第`1`个是从`0`开始的;

## 注意

这里只是一个简单的示例代码, 并没有考虑什么要思考几秒、等待几秒的操作，如果你真按照这样写那么会得到一个秒出牌的程序，我们不推荐你这样做, 因为人类需要思考而不是牌还没看见就被丢了出去。