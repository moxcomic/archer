## `Archer`脚本框架

`Archer`定义了非常丰富的接口用于玩家自定义对局逻辑, 使用者们可以通过`Golang`语言编写属于自己的脚本。

## 一个简单能用的框架模版

```go
// 包名必须为 main
package main

// 这里是引用包
import (
	"github.com/moxcomic/lq"
)

// 登录完成时会调用这里
// 包含断线重连
func onLogin() {}

// 友人房对局开始时会调用这里
func onRoomGameStart() {}

// 匹配对局开始时会调用这里
func onMatchGameStart() {}

// 每一个小对局开始时会调用这里
// 例如: 东1局开始调用、东2局开始调用等...
func onNewRound() {}

// 每一个小对局结束时会调用这里
// 例如: 东1局结束时调用、东2局结束时调用
func onRoundEnd() {}

// 当有玩家掉线时会调用这里
// seat代表玩家作为, 0为自己、1为下家、2为对家、3为上家
func onPlayerLeaving(seat int) {}

// 当AI有动作时会调用这里
func onExecute(result *lq.NotifyAIResult, risk []float64, rating, matches, fivePer, tenPer float64) {}

// 整个对局结束时会调用这里
func onGameEnd() {}

// 当与Archer服务器连接中断时会调用这里
func onServerDisconnect() {}
```

