import{D as u}from"./DocLayout-BWtZdPNT.js";import{C as r}from"./CodeBlock-B6bXE-tO.js";import{d as e,c as s,w as t,r as p,o as m,a as o,b as l,e as i}from"./app-KoIiIABH.js";import"./SearchModal-DjHfjCML.js";const k=e({__name:"basic-action-discard",setup(y){return(d,n)=>{const a=p("router-link");return m(),s(u,null,{default:t(()=>[n[17]||(n[17]=o("h1",null,"弃牌基础",-1)),n[18]||(n[18]=l()),n[19]||(n[19]=o("h2",null,"调用接口",-1)),n[20]||(n[20]=l()),o("ul",null,[o("li",null,[n[1]||(n[1]=l(`
        使用
        `,-1)),i(a,{to:"/zh/auto/majsoul/actions/basic-action-majsoul"},{default:t(()=>[...n[0]||(n[0]=[l("MajsoulActions",-1)])]),_:1}),n[2]||(n[2]=l(`
        包中的 `,-1)),n[3]||(n[3]=o("code",null,"Discard",-1)),n[4]||(n[4]=l(` 方法来弃牌。
      `,-1))])]),n[21]||(n[21]=l()),n[22]||(n[22]=o("h2",null,"示例代码",-1)),n[23]||(n[23]=l()),i(r,{lang:"go",filename:"main.go"},{default:t(()=>[...n[5]||(n[5]=[l(`package main

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
    actions.NewMajsoulActions().Discard(result.GetResult()[0].GetTile(), result.GetResult()[0].GetMoqie())
  }
}`,-1)])]),_:1}),n[24]||(n[24]=l()),o("ul",null,[n[12]||(n[12]=o("li",null,[l(`
        在 `),o("code",null,"onExecute"),l(" 函数中，我们通过 "),o("code",null,"GetResult"),l(`
        方法获取到当前出牌的类型，如果是弃牌，我们调用 `),o("code",null,"Discard"),l(`
        方法来弃掉相应的牌。
      `)],-1)),n[13]||(n[13]=l()),n[14]||(n[14]=o("li",null,"当然这里只是一个示例，实际使用时，你可能需要根据实际情况来修改代码。",-1)),n[15]||(n[15]=l()),o("li",null,[n[7]||(n[7]=o("code",null,"lq.NotifyAIResult",-1)),n[8]||(n[8]=l(` 参考
        `,-1)),i(a,{to:"/zh/auto/majsoul/lq/basic-lq"},{default:t(()=>[...n[6]||(n[6]=[l("NotifyAIResult",-1)])]),_:1})]),n[16]||(n[16]=l()),o("li",null,[n[10]||(n[10]=o("code",null,"GetType",-1)),n[11]||(n[11]=l(` 参考
        `,-1)),i(a,{to:"/zh/auto/majsoul/action_type/basic-action-type"},{default:t(()=>[...n[9]||(n[9]=[l("动作类型",-1)])]),_:1})])])]),_:1})}}});export{k as default};
