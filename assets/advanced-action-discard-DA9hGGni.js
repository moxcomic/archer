import{D as e}from"./DocLayout-BYOw321f.js";import{C as s}from"./CodeBlock-DFlj0IVr.js";import{d as r,c as u,w as o,r as p,o as m,a as l,b as t,e as i}from"./app-CRYa8QI3.js";import"./SearchModal-CP152f7b.js";const d={class:"lead"},k=r({__name:"advanced-action-discard",setup(y){return(E,n)=>{const a=p("router-link");return m(),u(e,null,{default:o(()=>[n[18]||(n[18]=l("h1",null,"弃牌进阶",-1)),n[19]||(n[19]=t()),n[20]||(n[20]=l("h2",null,"回顾",-1)),n[21]||(n[21]=t()),l("p",d,[n[1]||(n[1]=t(`
      在上一节中, 我们只是简单的调用
      `,-1)),i(a,{to:"/zh/auto/majsoul/actions/basic-action-majsoul"},{default:o(()=>[...n[0]||(n[0]=[t("actions",-1)])]),_:1}),n[2]||(n[2]=t(`
      接口来进行出牌操作。但是我们知道在 `,-1)),n[3]||(n[3]=l("code",null,"雀魂",-1)),n[4]||(n[4]=t(` 游戏中在立直(Riichi)后全程由服务端自动丢弃最后一张牌,
      所以我们在上一章节的代码就要改一改, 在自己已经立直的情况下, 取消该动作。
    `,-1))]),n[22]||(n[22]=t()),n[23]||(n[23]=l("h2",null,"如何判断",-1)),n[24]||(n[24]=t()),l("ul",null,[l("li",null,[n[6]||(n[6]=t(`
        在
        `,-1)),i(a,{to:"/zh/auto/majsoul/gamestate/basic-gamestate"},{default:o(()=>[...n[5]||(n[5]=[t("gamestate",-1)])]),_:1}),n[7]||(n[7]=t(`
        这个库中提供了一些游戏状态可以辅助你进行判断游戏当前的状态
      `,-1))])]),n[25]||(n[25]=t()),n[26]||(n[26]=l("h2",null,"示例代码",-1)),n[27]||(n[27]=t()),i(s,{lang:"go"},{default:o(()=>[...n[8]||(n[8]=[t(`package main

import (
  "github.com/moxcomic/Archer/internal/platform/actions"
  "github.com/moxcomic/lq"
)

const (
  E_PlayOperation_None           = iota
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
}`,-1)])]),_:1}),n[28]||(n[28]=t()),l("ul",null,[n[12]||(n[12]=l("li",null,[t(`
        我们在 `),l("code",null,"onExecute"),t(` 函数中判断游戏当前是否处于立直状态, 如果是立直状态,
        并且当前动作是 `),l("code",null,"E_PlayOperation_Ankan"),t(`, 则取消该动作。
      `)],-1)),n[13]||(n[13]=t()),n[14]||(n[14]=l("li",null,[t("否则, 我们调用 "),l("code",null,"Discard"),t(" 动作接口来进行出牌操作。")],-1)),n[15]||(n[15]=t()),n[16]||(n[16]=l("li",null,[t(`
        注意: 由于 `),l("code",null,"Discard"),t(` 动作接口的调用需要传入牌和摸牌信息, 所以我们需要从
        `),l("code",null,"result.GetResult()[0].GetTile()"),t(` 和
        `),l("code",null,"result.GetResult()[0].GetMoqie()"),t(` 中获取牌和摸切信息。
      `)],-1)),n[17]||(n[17]=t()),l("li",null,[n[10]||(n[10]=l("code",null,"gamestate",-1)),n[11]||(n[11]=t(` 参考
        `,-1)),i(a,{to:"/zh/auto/majsoul/gamestate/basic-gamestate"},{default:o(()=>[...n[9]||(n[9]=[t("gamestate",-1)])]),_:1})])])]),_:1})}}});export{k as default};
