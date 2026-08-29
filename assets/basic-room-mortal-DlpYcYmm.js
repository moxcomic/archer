import{D as i}from"./DocLayout-B9X8T4JE.js";import{C as o}from"./CodeBlock-CqjZpoKk.js";import{d as r,o as s,c as l,w as e,a,b as t,e as u}from"./app-CfESw_46.js";import"./SearchModal-BmO6oIVG.js";const p=r({__name:"basic-room-mortal",setup(c){return(m,n)=>(s(),l(i,null,{default:e(()=>[n[1]||(n[1]=a("h1",null,"在天凤个室与 Mortal 对局",-1)),n[2]||(n[2]=t()),n[3]||(n[3]=a("h2",null,"代码",-1)),n[4]||(n[4]=t()),u(o,{lang:"go"},{default:e(()=>[...n[0]||(n[0]=[t(`package main

import (
	"fmt"
	"github.com/moxcomic/Archer/internal/platformutil/botdispatch"
	"os"
	"strconv"
	"time"

	"github.com/moxcomic/Archer/internal/domain/gamestate"
	"github.com/moxcomic/Archer/internal/infra/userinfo"
	"github.com/moxcomic/Archer/internal/infra/variable"
	tenhouclient "github.com/moxcomic/engine/tenhou_client"
	"github.com/moxcomic/lq"
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

const ROOM_ID = 1253

func dispatch() error {
	return botdispatch.DispatchBot(1000, 20, strconv.Itoa(ROOM_ID), "high", "4.1b", "4.1b", "4.1b")
}

func onLogin() {
	if userinfo.Inst().ExpireTime().Before(time.Now()) && userinfo.Inst().MatchCount() <= 0 {
		fmt.Println("剩余场次不足, 不再进行匹配")
		return
	}

	if variable.Inst().GetInt("ju") >= 1 {
		fmt.Println("结束")
		variable.Inst().SetVar("isEndMatch", true)
		tenhouclient.Inst().Close()
		return
	}

	if gamestate.Inst().IsInSyncGame() {
		fmt.Println("可能网络不太稳定, 暂停")
		tenhouclient.Inst().Close()
		return
	}

	tenhouclient.Inst().Lobby(ROOM_ID)
	fmt.Println("进入大厅")

	var err error
	for err = dispatch(); err != nil; err = dispatch() {
		fmt.Println("召唤失败, 10秒后重试:", err)
		<-time.After(time.Millisecond * 10e3)
	}
}

func onTaikyoku() {
	variable.Inst().SetVar("ju", variable.Inst().GetInt("ju")+1)
	variable.Inst().SetVar("isEndGame", false)
	variable.Inst().SetVar("isEndKyoku", false)
	<-time.After(time.Second)
	tenhouclient.Inst().ConfirmNewRound()

	if f, err := os.OpenFile("paipus.mortal.log", os.O_CREATE|os.O_WRONLY|os.O_APPEND, os.ModePerm); err == nil {
		f.WriteString(fmt.Sprintf("https://tenhou.net/3/?log=%s&tw=%d\\n", gamestate.Inst().Uuid(), gamestate.Inst().Tw()))
		f.Close()
	}
}

func onNewRound() {
	variable.Inst().SetVar("isEndKyoku", false)
}

func onRoundEnd() {
	variable.Inst().SetVar("isEndKyoku", true)

	<-time.After(time.Second)
	tenhouclient.Inst().ConfirmNewRound()
}

func onExecute(result *lq.NotifyAIResult, risk []float64, r, m, f, t float64) {
	fmt.Println("shanten:", result.GetShanten())

	target := result.GetResult()[0]
	if gamestate.Inst().IsLiqi3() && (target.GetType() == E_PlayOperation_Tsumo || target.GetType() == E_PlayOperation_Ron) && !gamestate.Inst().IsCanWin() {
		target = result.GetResult()[1]
		fmt.Println("不能和")
	}

	onExecuteTarget(target, result.GetShanten())
}

func onExecuteTarget(target *lq.AIResult, shanten uint32) {
	if variable.Inst().GetBool("isEndKyoku") && target.GetType() != E_PlayOperation_Ron {
		fmt.Println("对局结束, 取消操作")
		return
	}

	hand := gamestate.Inst().HandTile()
	if len(hand) > 0 && target.GetTile() == hand[len(hand)-1] {
		if !gamestate.Inst().IsSelfChiPon() {
			target.Moqie = true
		}
	}

	switch target.GetType() {
	case E_PlayOperation_Discard:
		tenhouclient.Inst().ActionDiscard(target.GetTile(), target.GetMoqie(), gamestate.Inst().Riichi()[0])
	case E_PlayOperation_Chi:
		tenhouclient.Inst().ActionChi(target.GetCombination()[0], target.GetCombination()[1])
	case E_PlayOperation_Babei:
		tenhouclient.Inst().ActionBabei()
	case E_PlayOperation_Pon:
		tenhouclient.Inst().ActionPon(target.GetCombination()[0], target.GetCombination()[1])
	case E_PlayOperation_Ankan:
		tenhouclient.Inst().ActionAnkan(target.GetCombination()[0])
	case E_PlayOperation_Minkan:
		tenhouclient.Inst().ActionMinkan()
	case E_PlayOperation_Kakan:
		tenhouclient.Inst().ActionKakan(target.GetCombination()[0])
	case E_PlayOperation_RiiChi:
		if gamestate.Inst().IsLiqi3() && gamestate.Inst().LeftTileCount() < 4 {
			tenhouclient.Inst().ActionDiscard(target.GetTile(), target.GetMoqie(), gamestate.Inst().Riichi()[0])
			return
		}

		tenhouclient.Inst().ActionReach()
	case E_PlayOperation_Tsumo:
		tenhouclient.Inst().ActionTsumo()
	case E_PlayOperation_Ron:
		switch {
		case tenhouclient.Inst().State.IsTsumo():
			tenhouclient.Inst().ActionTsumo()
		default:
			tenhouclient.Inst().ActionRon()
		}
	case E_PlayOperation_JiuZhongJiuPai:
		tenhouclient.Inst().ActionRyuukyoku()
	case E_PlayOperation_None, 321:
		tenhouclient.Inst().ActionCancel()
	}
}

func onLN(values ...int) {
	fmt.Printf("values: %v\\n", values)

	if ROOM_ID > 0 && len(values) >= 3 {
		once := variable.Inst().GetBool("OnceLobby")
		if !once && !variable.Inst().GetBool("isEndMatch") {
			tenhouclient.Inst().ActionYuYue(ROOM_ID, 9)
			variable.Inst().SetVar("OnceLobby", true)
			fmt.Println("预约")
		}
	}
}

func onGameEnd() {
    variable.Inst().SetVar("isEndGame", true)
    variable.Inst().SetVar("OnceLobby", false)
    fmt.Println("顺位:", gamestate.Inst().GetRanking()+1)
}`,-1)])]),_:1})]),_:1}))}});export{p as default};
