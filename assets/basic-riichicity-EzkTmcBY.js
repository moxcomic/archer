import{D as r}from"./DocLayout-Bev0WFn_.js";import{C as d}from"./Callout-Brn7c2si.js";import{C as a}from"./CodeBlock-DodZ1y9S.js";import{A as u}from"./ApiTable-Dig1NjMZ.js";import{d as s,c as m,w as i,r as p,o as y,a as n,b as l,e}from"./app-CORyS0x0.js";import"./SearchModal-Dkq8OtCg.js";const E=s({__name:"basic-riichicity",setup(g){return(f,t)=>{const o=p("router-link");return y(),m(r,null,{default:i(()=>[t[16]||(t[16]=n("h1",null,"RiichiCity Basics",-1)),t[17]||(t[17]=l()),t[18]||(t[18]=n("h2",null,"Notes",-1)),t[19]||(t[19]=l()),e(d,{type:"note"},{default:i(()=>[...t[0]||(t[0]=[n("ul",null,[n("li",null,[l(`
          To use this package, you need to enable
          `),n("code",null,"【Auto Settings】-> 【Built-in Mode】"),l(`.
        `)]),l(),n("li",null,[l(`
          In Riichi City, declaring Riichi is not a standalone action; it is
          embedded in the discard (a discard with a Riichi declaration), so use
          the `),n("code",null,"Riichi"),l(` method.
        `)]),l(),n("li",null,[l(`
          Tile names use the same string representation as Majsoul:
          `),n("code",null,"1m"),l("-"),n("code",null,"9m"),l(" (man), "),n("code",null,"1p"),l("-"),n("code",null,"9p"),l(`
          (pin), `),n("code",null,"1s"),l("-"),n("code",null,"9s"),l(` (sou),
          `),n("code",null,"1z"),l("-"),n("code",null,"7z"),l(` (honors); red fives are
          `),n("code",null,"0m"),l(" / "),n("code",null,"0p"),l(" / "),n("code",null,"0s"),l(`.
        `)])],-1)])]),_:1}),t[20]||(t[20]=l()),t[21]||(t[21]=n("h2",null,"Package Name",-1)),t[22]||(t[22]=l()),t[23]||(t[23]=n("ul",null,[n("li",null,[n("code",null,"actions")])],-1)),t[24]||(t[24]=l()),t[25]||(t[25]=n("h2",null,"Import",-1)),t[26]||(t[26]=l()),t[27]||(t[27]=n("ul",null,[n("li",null,[n("code",null,'import "github.com/moxcomic/Archer/internal/platform/actions"')])],-1)),t[28]||(t[28]=l()),t[29]||(t[29]=n("h2",null,"Interface Methods",-1)),t[30]||(t[30]=l()),e(u,null,{default:i(()=>[...t[1]||(t[1]=[n("thead",null,[n("tr",null,[n("th",null,"Name"),l(),n("th",null,"Parameters"),l(),n("th",null,"Return Value"),l(),n("th",null,"Notes")])],-1),l(),n("tbody",null,[n("tr",null,[n("td",null,"NewRiichiCityActions"),l(),n("td",null,"None"),l(),n("td",null,[n("code",null,"*actions.RiichiCityActions")]),l(),n("td",null,"Riichi City interface instance")])],-1)])]),_:1}),t[31]||(t[31]=l()),t[32]||(t[32]=n("h2",null,"Instance Methods",-1)),t[33]||(t[33]=l()),e(u,null,{default:i(()=>[...t[2]||(t[2]=[n("thead",null,[n("tr",null,[n("th",null,"Name"),l(),n("th",null,"Parameters"),l(),n("th",null,"Return Value"),l(),n("th",null,"Notes")])],-1),l(),n("tbody",null,[n("tr",null,[n("td",null,"Discard"),l(),n("td",null,"tile: string, tsumogiri: bool"),l(),n("td",null,"None"),l(),n("td",null,[l(`
            Discard a tile, `),n("code",null,"tile"),l(` is the tile name,
            `),n("code",null,"tsumogiri"),l(` indicates if it's the last drawn tile
          `)])]),l(),n("tr",null,[n("td",null,"Riichi"),l(),n("td",null,"tile: string, tsumogiri: bool"),l(),n("td",null,"None"),l(),n("td",null,[l(`
            Declare Riichi (a discard with a Riichi declaration),
            `),n("code",null,"tile"),l(" is the discarded tile, "),n("code",null,"tsumogiri"),l(` as
            above
          `)])]),l(),n("tr",null,[n("td",null,"Chii"),l(),n("td",null,"calledTile: string, consumed: []string"),l(),n("td",null,"None"),l(),n("td",null,[l(`
            Chii, `),n("code",null,"calledTile"),l(` is the called tile,
            `),n("code",null,"consumed"),l(` are the two hand tiles forming the run
          `)])]),l(),n("tr",null,[n("td",null,"Pon"),l(),n("td",null,"calledTile: string, consumed: []string"),l(),n("td",null,"None"),l(),n("td",null,[l(`
            Pon, `),n("code",null,"calledTile"),l(` is the called tile,
            `),n("code",null,"consumed"),l(` are the two hand tiles used for Pon
          `)])]),l(),n("tr",null,[n("td",null,"Daimingkan"),l(),n("td",null,"calledTile: string, consumed: []string"),l(),n("td",null,"None"),l(),n("td",null,[l(`
            Daimingkan, `),n("code",null,"calledTile"),l(` is the called tile,
            `),n("code",null,"consumed"),l(` are the three hand tiles
          `)])]),l(),n("tr",null,[n("td",null,"Ankan"),l(),n("td",null,"tile: string"),l(),n("td",null,"None"),l(),n("td",null,[l("Ankan, "),n("code",null,"tile"),l(" is the tile name")])]),l(),n("tr",null,[n("td",null,"Kakan"),l(),n("td",null,"tile: string"),l(),n("td",null,"None"),l(),n("td",null,[l("Kakan, "),n("code",null,"tile"),l(" is the newly added tile name")])]),l(),n("tr",null,[n("td",null,"Tsumo"),l(),n("td",null,"None"),l(),n("td",null,"None"),l(),n("td",null,"Tsumo (Self-draw win)")]),l(),n("tr",null,[n("td",null,"Ron"),l(),n("td",null,"None"),l(),n("td",null,"None"),l(),n("td",null,"Ron (Win by discard)")]),l(),n("tr",null,[n("td",null,"Ryukyoku"),l(),n("td",null,"None"),l(),n("td",null,"None"),l(),n("td",null,"Nine Terminal Tiles (abortive draw)")]),l(),n("tr",null,[n("td",null,"Babei"),l(),n("td",null,"None"),l(),n("td",null,"None"),l(),n("td",null,"Execute Babei")]),l(),n("tr",null,[n("td",null,"Cancel"),l(),n("td",null,"None"),l(),n("td",null,"None"),l(),n("td",null,"Cancel or skip (do not call)")])],-1)])]),_:1}),t[34]||(t[34]=l()),t[35]||(t[35]=n("h2",null,"Full Example Script",-1)),t[36]||(t[36]=l()),n("ul",null,[t[11]||(t[11]=n("li",null,[l(`
        Consistent with Majsoul/Tenhou: in the `),n("code",null,"onExecute"),l(` callback
        you receive the AI's recommended result and dispatch by action type to
        the corresponding `),n("code",null,"RiichiCityActions"),l(` method.
      `)],-1)),t[12]||(t[12]=l()),n("li",null,[t[4]||(t[4]=l(`
        For `,-1)),t[5]||(t[5]=n("code",null,"lq.NotifyAIResult",-1)),t[6]||(t[6]=l(`, see
        `,-1)),e(o,{to:"/en/auto/majsoul/lq/basic-lq"},{default:i(()=>[...t[3]||(t[3]=[l("NotifyAIResult",-1)])]),_:1})]),t[13]||(t[13]=l()),n("li",null,[t[8]||(t[8]=l(`
        For `,-1)),t[9]||(t[9]=n("code",null,"GetType",-1)),t[10]||(t[10]=l(`, see
        `,-1)),e(o,{to:"/en/auto/majsoul/action_type/basic-action-type"},{default:i(()=>[...t[7]||(t[7]=[l("Action Types",-1)])]),_:1})])]),t[37]||(t[37]=l()),e(a,{lang:"go",filename:"main.go"},{default:i(()=>[...t[14]||(t[14]=[l(`package main

import (
	"fmt"
	"math/rand"
	"time"

	"github.com/moxcomic/Archer/internal/platform/actions"
	"github.com/moxcomic/lq"
)

const (
	E_PlayOperation_None           = iota
	E_PlayOperation_Discard        // Discard
	E_PlayOperation_Chi            // Chii
	E_PlayOperation_Pon            // Pon
	E_PlayOperation_Ankan          // Ankan
	E_PlayOperation_Minkan         // Daimingkan
	E_PlayOperation_Kakan          // Kakan
	E_PlayOperation_RiiChi         // Riichi
	E_PlayOperation_Tsumo          // Tsumo
	E_PlayOperation_Ron            // Ron
	E_PlayOperation_JiuZhongJiuPai // Nine Terminal Tiles
	E_PlayOperation_Babei          // Babei
)

func onExecute(result *lq.NotifyAIResult, risk []float64, r, m, f, t float64) {
	if len(result.GetResult()) == 0 {
		return
	}

	onExecuteTarget(result.GetResult()[0], result.GetShanten())
}

func onExecuteTarget(target *lq.AIResult, shanten uint32) {
	action := actions.NewRiichiCityActions()

	// Human-like delay: discard (your own turn, plenty of time) is longer; calls/wins
	// (the server has a response time limit) are shorter to avoid missing the window.
	delay := 250 + rand.Intn(350)
	switch target.GetType() {
	case E_PlayOperation_Discard, E_PlayOperation_RiiChi:
		delay = 700 + rand.Intn(900)
	}
	time.Sleep(time.Millisecond * time.Duration(delay))

	switch target.GetType() {
	case E_PlayOperation_Discard:
		action.Discard(target.GetTile(), target.GetMoqie())
	case E_PlayOperation_RiiChi:
		action.Riichi(target.GetTile(), target.GetMoqie())
	case E_PlayOperation_Chi:
		action.Chii(target.GetTile(), target.GetCombination())
	case E_PlayOperation_Pon:
		action.Pon(target.GetTile(), target.GetCombination())
	case E_PlayOperation_Minkan:
		action.Daimingkan(target.GetTile(), target.GetCombination())
	case E_PlayOperation_Ankan:
		if len(target.GetCombination()) > 0 {
			action.Ankan(target.GetCombination()[0])
		}
	case E_PlayOperation_Kakan:
		action.Kakan(target.GetTile())
	case E_PlayOperation_Tsumo:
		action.Tsumo()
	case E_PlayOperation_Ron:
		action.Ron()
	case E_PlayOperation_JiuZhongJiuPai:
		action.Ryukyoku()
	case E_PlayOperation_Babei:
		action.Babei()
	case E_PlayOperation_None, 321:
		action.Cancel()
	default:
		fmt.Println("RiichiCity: unhandled action type:", target.GetType())
	}
}`,-1)])]),_:1}),t[38]||(t[38]=l()),t[39]||(t[39]=n("h2",null,"Example Code",-1)),t[40]||(t[40]=l()),e(a,{lang:"go"},{default:i(()=>[...t[15]||(t[15]=[l('actions.NewRiichiCityActions().Discard("1m", true)',-1)])]),_:1})]),_:1})}}});export{E as default};
