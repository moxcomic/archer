import{D as a}from"./DocLayout-B9X8T4JE.js";import{C as r}from"./CodeBlock-CqjZpoKk.js";import{d as s,c as u,w as o,r as d,o as m,a as e,b as t,e as i}from"./app-CfESw_46.js";import"./SearchModal-BmO6oIVG.js";const p={class:"lead"},w=s({__name:"advanced-action-discard",setup(f){return(y,n)=>{const l=d("router-link");return m(),u(a,null,{default:o(()=>[n[20]||(n[20]=e("h1",null,"Discard Advanced",-1)),n[21]||(n[21]=t()),n[22]||(n[22]=e("h2",null,"Review",-1)),n[23]||(n[23]=t()),e("p",p,[n[1]||(n[1]=t(`
      In the previous section, we simply called the
      `,-1)),i(l,{to:"/en/auto/majsoul/actions/basic-action-majsoul"},{default:o(()=>[...n[0]||(n[0]=[t("actions",-1)])]),_:1}),n[2]||(n[2]=t(`
      interface to perform a discard operation. However, we know that in the game
      of `,-1)),n[3]||(n[3]=e("code",null,"Majsoul",-1)),n[4]||(n[4]=t(`, after declaring Riichi, the server will
      automatically discard the last tile for the player. Therefore, we need to
      modify the code from the previous section to cancel this action when the
      player has already declared Riichi.
    `,-1))]),n[24]||(n[24]=t()),n[25]||(n[25]=e("h2",null,"How to Determine the State",-1)),n[26]||(n[26]=t()),e("ul",null,[e("li",null,[n[6]||(n[6]=t(`
        The
        `,-1)),i(l,{to:"/en/auto/majsoul/gamestate/basic-gamestate"},{default:o(()=>[...n[5]||(n[5]=[t("gamestate",-1)])]),_:1}),n[7]||(n[7]=t(`
        library provides some game states that can help you determine the current
        status of the game.
      `,-1))])]),n[27]||(n[27]=t()),n[28]||(n[28]=e("h2",null,"Example Code",-1)),n[29]||(n[29]=t()),i(r,{lang:"go"},{default:o(()=>[...n[8]||(n[8]=[t(`package main

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
}`,-1)])]),_:1}),n[30]||(n[30]=t()),e("ul",null,[n[14]||(n[14]=e("li",null,[t(`
        In the `),e("code",null,"onExecute"),t(` function, we check if the game is currently
        in a Riichi state. If so, and the current operation is
        `),e("code",null,"E_PlayOperation_Ankan"),t(`, the action will be canceled.
      `)],-1)),n[15]||(n[15]=t()),n[16]||(n[16]=e("li",null,[t(`
        Otherwise, we call the `),e("code",null,"Discard"),t(` action interface to perform the
        discard operation.
      `)],-1)),n[17]||(n[17]=t()),n[18]||(n[18]=e("li",null,[t(`
        Note: Since the `),e("code",null,"Discard"),t(` action interface requires passing in
        the tile and draw information, we need to retrieve the tile and draw-cut
        information from `),e("code",null,"result.GetResult()[0].GetTile()"),t(` and
        `),e("code",null,"result.GetResult()[0].GetMoqie()"),t(`.
      `)],-1)),n[19]||(n[19]=t()),e("li",null,[n[10]||(n[10]=t(`
        For more information on `,-1)),n[11]||(n[11]=e("code",null,"gamestate",-1)),n[12]||(n[12]=t(`, refer to
        `,-1)),i(l,{to:"/en/auto/majsoul/gamestate/basic-gamestate"},{default:o(()=>[...n[9]||(n[9]=[t("gamestate",-1)])]),_:1}),n[13]||(n[13]=t(`.
      `,-1))])])]),_:1})}}});export{w as default};
