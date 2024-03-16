package main

/*
This is an example code for automatic tile discarding.
If you need more detailed content, please refer to the wiki: https://github.com/moxcomic/archer/wiki or the main repository code of Archer.

In this example, we only allow Archer to automatically discard the last tile.
*/

import (
	"time"

	"github.com/moxcomic/Archer/actions"
	"github.com/moxcomic/Archer/gamestate"
	"github.com/moxcomic/lq"

	tenhouclient "github.com/moxcomic/engine/tenhou_client"
)

const (
	E_PlayOperation_None = iota
	E_PlayOperation_Discard
	E_PlayOperation_Chi
	E_PlayOperation_Pon
	E_PlayOperation_Ankan
	E_PlayOperation_Minkan
	E_PlayOperation_Kakan
	E_PlayOperation_RiiChi
	E_PlayOperation_Tsumo
	E_PlayOperation_Ron
	E_PlayOperation_JiuZhongJiuPai
	E_PlayOperation_Babei
	E_PlayOperation_HuanSanZhang
	E_PlayOperation_DingQue
	E_PlayOperation_Reveal
	E_PlayOperation_Unveil
	E_PlayOperation_LockTile
	E_PlayOperation_Revealliqi
)

var platform = "majsoul"

func onLogin() {}

func onRoomGameStart() {}

func onMatchGameStart() {}

func onNewRound() {}

func onRoundEnd() {}

func onPlayerLeaving(seat int) {}

func onExecute(result *lq.NotifyAIResult, risk []float64, rating, matches, fivePer, tenPer float64) {
	hand := gamestate.Inst().HandTile()

	switch result[0].GetType() {
	case E_PlayOperation_Discard:
		<-time.After(time.Second)

		switch platform {
		case "majsoul":
			actions.NewMajsoulActions().Discard(hand[len(hand)-1], true)
		case "tenhou":
			tenhouclient.Inst().ActionDiscard(hand[len(hand)-1], true, gamestate.Inst().Riichi()[0])
		}
	default:
		// do nothing.
	}
}

func onGameEnd() {}

func onServerDisconnect() {}
