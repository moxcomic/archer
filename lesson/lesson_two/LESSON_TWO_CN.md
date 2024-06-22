## 第二课: 登录

```go
package main

import (
	"fmt"
	"time"

	signmgr "github.com/moxcomic/Archer/mgr/activity_sign_mgr" // Archer 的签到接口包
	"github.com/moxcomic/Archer/mgr/infomgr"                   //  Archer 的公告接口包
	monthlymgr "github.com/moxcomic/Archer/mgr/monthly_mgr"    // Archer 的月卡接口包
)

// 这一课我们开始讲登录
// 因为游戏的第一个事件就是登录游戏
// 这里我们只要保证文件的包名是 main 并且这个文件里有 onLogin 这个函数 Archer 就会调用这个函数
func onLogin() {
	// 我们以 雀魂 这个游戏作为例子进行讲解
	// 已知 雀魂 登录后会有的事件 【弹出公告】 【弹出签到】 【弹出月卡领取】
	// 我们就要在这里实现 将【公告窗口】关闭、将【签到窗口】关闭、将【月卡领取窗口】关闭
  
	// 因为登录时还没完全进入游戏主页
	// 所以我们需要进行等待
	for range time.Tick(time.Second) { // 每秒执行一次循环逻辑
		if !lobbymgr.Inst().Enable() {  // 未进入主页
			fmt.Println("Waiting to Lobby...")
			continue
		}

		break // 已进入主页, 退出循环
	}

	// 在游戏里这三个的弹出顺序不一定是固定的, 可能【公告】先弹出也可能【签到】先弹出
	// 这里我们不考虑这个情况, 只做讲解, 需自行优化

	// 关闭【公告】逻辑
	// Archer 提供了公告相关的逻辑接口
	// 可以使用相关接口进行公告的相关操作
	// 这里 Enable() 方法返回 true 时代表【窗口】弹出
	// Enable() 方法24小时有效, 只要该窗口不管任何时候弹出都返回 true
	switch infomgr.Inst().Enable() {
	case true: // 窗口弹出
		for range time.Tick(time.Second) { // 每秒运行一次循环内的逻辑
			if infomgr.Inst().Enable() { // 如果【窗口】弹出
				fmt.Println("正在关闭公告窗口")
				infomgr.Inst().Close() // 调用 Archer 接口关闭【窗口】

				continue // 取消往下执行
			}

			break // 如果上面的 Enable() 返回 false 则执行这里退出循环
		}

		fmt.Println("已关闭公告窗口")
	default:
		fmt.Println("公告窗口未弹出")
	}

	// 关闭【月卡领取】窗口
	// Archer 提供了月卡相关的逻辑接口
	// 可以使用相关接口进行月卡的相关操作
	// 这里 Enable() 方法返回 true 时代表【窗口】弹出
	// Enable() 方法24小时有效, 只要该窗口不管任何时候弹出都返回 true
	switch monthlymgr.Inst().Enable() {
	case true: // 窗口弹出
		for range time.Tick(time.Second) { // 每秒运行一次循环内的逻辑
			if monthlymgr.Inst().Enable() { // 如果【窗口】弹出
				fmt.Println("正在关闭月卡窗口")
				monthlymgr.Inst().Close() // 调用 Archer 接口关闭【窗口】

				continue // 取消往下执行
			}

			break // 如果上面的 Enable() 返回 false 则执行这里退出循环
		}

		fmt.Println("已关闭月卡窗口")
	default:
		fmt.Println("月卡窗口未弹出")
	}

	// 进行【签到】并关闭【签到】窗口
	// Archer 提供了签到相关的逻辑接口
	// 可以使用相关接口进行签到的相关操作
	// 这里 Enable() 方法返回 true 时代表【窗口】弹出
	// Enable() 方法24小时有效, 只要该窗口不管任何时候弹出都返回 true
	switch signmgr.Inst().Enable() {
	case true: // 窗口弹出
		// 定义关闭窗口方法
		close := func() {
			fmt.Println("准备关闭签到窗口")
			<-time.After(time.Second * 5) // 延迟5秒,以免签动画未完成

			for range time.Tick(time.Second) { // 每秒执行一次循环逻辑
				if signmgr.Inst().Enable() { // 如果【窗口】弹出
					fmt.Println("正在关闭签到窗口")
					signmgr.Inst().Close() // 调用 Archer 接口关闭【窗口】

					continue // 取消往下执行
				}

				break // 如果上面的 Enable() 返回 false 则执行这里退出循环
			}

			fmt.Println("已关闭签到窗口")
		}

		// 获取签到时间, 变量名随意, 你爱怎么取都行
		st := time.Unix(signmgr.Inst().LastSignTime(), 0)
		// 获取今天时间, 变量名随意, 你爱怎么取都行
		dt := time.Now()

		// 打印上次签到时间
		fmt.Println("Last sign time:", st.Format("2006-01-02 15:04:05"))

		// 如果现在的时间小于5点, 取消执行
		// 因为 雀魂 以5点作为一天的刷新起始点
		if dt.Hour() < 5 {
			fmt.Println("dt hours < 5")
			close() // 关闭签到窗口
			return
		}

		// 如果【上次签到日期】等于【今天日期】并且【上次签到日期】的【小时】大于5点, 取消执行
		// 因为你已签到过了
		if st.Day() == dt.Day() && st.Hour() >= 5 {
			fmt.Println("st hours >= 5")
			close() // 关闭签到窗口
			return
		}

		fmt.Println("正在执行签到")
		<-time.After(time.Second * 2) // 延迟2秒
		signmgr.Inst().Sign()         // 调用 Archer 接口进行签到

		close() // 关闭签到窗口
	default:
		fmt.Println("签到窗口未弹出")
	}
}
```

