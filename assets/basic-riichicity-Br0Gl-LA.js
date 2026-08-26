import{D as r}from"./DocLayout-BYOw321f.js";import{C as d}from"./Callout-B0wlvBI4.js";import{C as e}from"./CodeBlock-DFlj0IVr.js";import{A as a}from"./ApiTable-Da2aDdkf.js";import{d as s,c as m,w as i,r as p,o as y,a as l,b as n,e as u}from"./app-CRYa8QI3.js";import"./SearchModal-CP152f7b.js";const k=s({__name:"basic-riichicity",setup(g){return(P,t)=>{const o=p("router-link");return y(),m(r,null,{default:i(()=>[t[14]||(t[14]=l("h1",null,"麻雀一番街基础",-1)),t[15]||(t[15]=n()),t[16]||(t[16]=l("h2",null,"注意事项",-1)),t[17]||(t[17]=n()),u(d,{type:"note"},{default:i(()=>[...t[0]||(t[0]=[l("ul",null,[l("li",null,[n("使用该包需要开启 "),l("code",null,"【自动设置】-> 【内建模式】")]),n(),l("li",null,[n(`
          麻雀一番街的立直并非独立动作，而是内嵌在打牌中（带立直声明的弃牌），因此立直通过
          `),l("code",null,"Riichi"),n(` 方法发出。
        `)]),n(),l("li",null,[n(`
          牌名沿用与雀魂一致的字符串表示：`),l("code",null,"1m"),n("-"),l("code",null,"9m"),n("（万）、"),l("code",null,"1p"),n("-"),l("code",null,"9p"),n("（筒）、"),l("code",null,"1s"),n("-"),l("code",null,"9s"),n("（索）、"),l("code",null,"1z"),n("-"),l("code",null,"7z"),n(`（字牌），赤五用
          `),l("code",null,"0m"),n(" / "),l("code",null,"0p"),n(" / "),l("code",null,"0s"),n(`。
        `)])],-1)])]),_:1}),t[18]||(t[18]=n()),t[19]||(t[19]=l("h2",null,"包名",-1)),t[20]||(t[20]=n()),t[21]||(t[21]=l("ul",null,[l("li",null,[l("code",null,"actions")])],-1)),t[22]||(t[22]=n()),t[23]||(t[23]=l("h2",null,"引用方式",-1)),t[24]||(t[24]=n()),t[25]||(t[25]=l("ul",null,[l("li",null,[l("code",null,'import "github.com/moxcomic/Archer/internal/platform/actions"')])],-1)),t[26]||(t[26]=n()),t[27]||(t[27]=l("h2",null,"接口方法",-1)),t[28]||(t[28]=n()),u(a,null,{default:i(()=>[...t[1]||(t[1]=[l("thead",null,[l("tr",null,[l("th",null,"名称"),n(),l("th",null,"参数"),n(),l("th",null,"返回值"),n(),l("th",null,"备注")])],-1),n(),l("tbody",null,[l("tr",null,[l("td",null,"NewRiichiCityActions"),n(),l("td",null,"无"),n(),l("td",null,[l("code",null,"*actions.RiichiCityActions")]),n(),l("td",null,"一番街接口实例")])],-1)])]),_:1}),t[29]||(t[29]=n()),t[30]||(t[30]=l("h2",null,"实例方法",-1)),t[31]||(t[31]=n()),u(a,null,{default:i(()=>[...t[2]||(t[2]=[l("thead",null,[l("tr",null,[l("th",null,"名称"),n(),l("th",null,"参数"),n(),l("th",null,"返回值"),n(),l("th",null,"备注")])],-1),n(),l("tbody",null,[l("tr",null,[l("td",null,"Discard"),n(),l("td",null,"tile: string, tsumogiri: bool"),n(),l("td",null,"无"),n(),l("td",null,"弃牌, tile为牌名, tsumogiri为是否为刚摸来的最后一张牌（摸切）")]),n(),l("tr",null,[l("td",null,"Riichi"),n(),l("td",null,"tile: string, tsumogiri: bool"),n(),l("td",null,"无"),n(),l("td",null,"立直, 即带立直声明的弃牌, tile为打出的牌, tsumogiri同上")]),n(),l("tr",null,[l("td",null,"Chii"),n(),l("td",null,"calledTile: string, consumed: []string"),n(),l("td",null,"无"),n(),l("td",null,"吃, calledTile为被吃的牌, consumed为手中组成顺子的两张牌")]),n(),l("tr",null,[l("td",null,"Pon"),n(),l("td",null,"calledTile: string, consumed: []string"),n(),l("td",null,"无"),n(),l("td",null,"碰, calledTile为被碰的牌, consumed为手中用来碰的两张牌")]),n(),l("tr",null,[l("td",null,"Daimingkan"),n(),l("td",null,"calledTile: string, consumed: []string"),n(),l("td",null,"无"),n(),l("td",null,"明杠, calledTile为被杠的牌, consumed为手中的三张牌")]),n(),l("tr",null,[l("td",null,"Ankan"),n(),l("td",null,"tile: string"),n(),l("td",null,"无"),n(),l("td",null,"暗杠, tile为牌名")]),n(),l("tr",null,[l("td",null,"Kakan"),n(),l("td",null,"tile: string"),n(),l("td",null,"无"),n(),l("td",null,"加杠, tile为新加入的牌名")]),n(),l("tr",null,[l("td",null,"Tsumo"),n(),l("td",null,"无"),n(),l("td",null,"无"),n(),l("td",null,"自摸")]),n(),l("tr",null,[l("td",null,"Ron"),n(),l("td",null,"无"),n(),l("td",null,"无"),n(),l("td",null,"荣和")]),n(),l("tr",null,[l("td",null,"Ryukyoku"),n(),l("td",null,"无"),n(),l("td",null,"无"),n(),l("td",null,"九种九牌（流局）")]),n(),l("tr",null,[l("td",null,"Babei"),n(),l("td",null,"无"),n(),l("td",null,"无"),n(),l("td",null,"拔北")]),n(),l("tr",null,[l("td",null,"Cancel"),n(),l("td",null,"无"),n(),l("td",null,"无"),n(),l("td",null,"取消、跳过（不鸣牌）")])],-1)])]),_:1}),t[32]||(t[32]=n()),t[33]||(t[33]=l("h2",null,"完整示例脚本",-1)),t[34]||(t[34]=n()),l("ul",null,[t[9]||(t[9]=l("li",null,[n(`
        与雀魂/天凤一致，在 `),l("code",null,"onExecute"),n(` 回调中拿到 AI
        的推荐结果，按动作类型分派到 `),l("code",null,"RiichiCityActions"),n(` 对应方法。
      `)],-1)),t[10]||(t[10]=n()),l("li",null,[t[4]||(t[4]=l("code",null,"lq.NotifyAIResult",-1)),t[5]||(t[5]=n(` 参考
        `,-1)),u(o,{to:"/zh/auto/majsoul/lq/basic-lq"},{default:i(()=>[...t[3]||(t[3]=[n("NotifyAIResult",-1)])]),_:1})]),t[11]||(t[11]=n()),l("li",null,[t[7]||(t[7]=l("code",null,"GetType",-1)),t[8]||(t[8]=n(` 参考
        `,-1)),u(o,{to:"/zh/auto/majsoul/action_type/basic-action-type"},{default:i(()=>[...t[6]||(t[6]=[n("动作类型",-1)])]),_:1})])]),t[35]||(t[35]=n()),u(e,{lang:"go",filename:"main.go"},{default:i(()=>[...t[12]||(t[12]=[n(`package main

import (
	"fmt"
	"math/rand"
	"time"

	"github.com/moxcomic/Archer/internal/platform/actions"
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
	E_PlayOperation_Ron            // 荣和
	E_PlayOperation_JiuZhongJiuPai // 九种九牌
	E_PlayOperation_Babei          // 拔北
)

func onExecute(result *lq.NotifyAIResult, risk []float64, r, m, f, t float64) {
	if len(result.GetResult()) == 0 {
		return
	}

	onExecuteTarget(result.GetResult()[0], result.GetShanten())
}

func onExecuteTarget(target *lq.AIResult, shanten uint32) {
	action := actions.NewRiichiCityActions()

	// 拟人延迟: 打牌(自己回合, 时间充裕)稍长; 鸣牌/和牌(服务器有应答时限)取短, 避免错过窗口。
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
		fmt.Println("RiichiCity 未处理的操作类型:", target.GetType())
	}
}`,-1)])]),_:1}),t[36]||(t[36]=n()),t[37]||(t[37]=l("h2",null,"示例代码",-1)),t[38]||(t[38]=n()),u(e,{lang:"go"},{default:i(()=>[...t[13]||(t[13]=[n('actions.NewRiichiCityActions().Discard("1m", true)',-1)])]),_:1})]),_:1})}}});export{k as default};
