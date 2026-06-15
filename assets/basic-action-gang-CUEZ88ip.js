import{D as a}from"./DocLayout-Z6fF55KA.js";import{C as s}from"./CodeBlock-eokTsjGl.js";import{d as e,c as r,w as t,r as p,o as m,a as o,b as l,e as i}from"./app-Br24ngHW.js";import"./SearchModal-DrGZg8Bd.js";const k=e({__name:"basic-action-gang",setup(y){return(d,n)=>{const u=p("router-link");return m(),r(a,null,{default:t(()=>[n[25]||(n[25]=o("h1",null,"杠",-1)),n[26]||(n[26]=l()),n[27]||(n[27]=o("h2",null,"调用接口",-1)),n[28]||(n[28]=l()),o("ul",null,[o("li",null,[n[1]||(n[1]=l(`
        使用
        `,-1)),i(u,{to:"/zh/auto/majsoul/actions/basic-action-majsoul"},{default:t(()=>[...n[0]||(n[0]=[l("MajsoulActions",-1)])]),_:1}),n[2]||(n[2]=l(`
        包中的 `,-1)),n[3]||(n[3]=o("code",null,"对应动作",-1)),n[4]||(n[4]=l(` 方法来弃牌。
      `,-1))])]),n[29]||(n[29]=l()),n[30]||(n[30]=o("h2",null,"示例代码",-1)),n[31]||(n[31]=l()),i(s,{lang:"go",filename:"main.go"},{default:t(()=>[...n[5]||(n[5]=[o("span",null,`package main

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
  if result.GetResult()[0].GetType() == E_PlayOperation_Minkan {
    actions.NewMajsoulActions().Daimingkan(result.GetResult()[0].GetCombination()[0])
  }

  if result.GetResult()[0].GetType() == E_PlayOperation_Kakan {
    actions.NewMajsoulActions().Kakan(result.GetResult()[0].GetCombination()[0])
  }

  if result.GetResult()[0].GetType() == E_PlayOperation_Ankan {
    actions.NewMajsoulActions().Ankan(result.GetResult()[0].GetCombination()[0])
  }
}`,-1)])]),_:1}),n[32]||(n[32]=l()),o("ul",null,[n[12]||(n[12]=o("li",null,[l("调用 "),o("code",null,"Daimingkan"),l(" 方法进行 "),o("code",null,"明杠"),l(" 操作。")],-1)),n[13]||(n[13]=l()),n[14]||(n[14]=o("li",null,[l("调用 "),o("code",null,"Kakan"),l(" 方法进行 "),o("code",null,"加杠"),l(" 操作。")],-1)),n[15]||(n[15]=l()),n[16]||(n[16]=o("li",null,[l("调用 "),o("code",null,"Ankan"),l(" 方法进行 "),o("code",null,"暗杠"),l(" 操作。")],-1)),n[17]||(n[17]=l()),n[18]||(n[18]=o("li",null,[l(`
        以上三个方法均需要传入 `),o("code",null,"Combination"),l(` 类型参数，该参数代表了被操作的牌。
      `)],-1)),n[19]||(n[19]=l()),n[20]||(n[20]=o("li",null,[l(`
        示例代码中，我们通过 `),o("code",null,"GetResult"),l(` 方法获取了 AI 的出牌结果，并根据其类型进行相应的操作。
      `)],-1)),n[21]||(n[21]=l()),n[22]||(n[22]=o("li",null,"当然这里只是一个示例，实际使用时，你可能需要根据实际情况来修改代码。",-1)),n[23]||(n[23]=l()),o("li",null,[n[7]||(n[7]=o("code",null,"lq.NotifyAIResult",-1)),n[8]||(n[8]=l(` 参考
        `,-1)),i(u,{to:"/zh/auto/majsoul/lq/basic-lq"},{default:t(()=>[...n[6]||(n[6]=[l("NotifyAIResult",-1)])]),_:1})]),n[24]||(n[24]=l()),o("li",null,[n[10]||(n[10]=o("code",null,"GetType",-1)),n[11]||(n[11]=l(` 参考
        `,-1)),i(u,{to:"/zh/auto/majsoul/action_type/basic-action-type"},{default:t(()=>[...n[9]||(n[9]=[l("动作类型",-1)])]),_:1})])])]),_:1})}}});export{k as default};
