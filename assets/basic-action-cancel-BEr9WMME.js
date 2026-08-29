import{D as e}from"./DocLayout-B9X8T4JE.js";import{C as a}from"./Callout-C1QiowI3.js";import{C as r}from"./CodeBlock-CqjZpoKk.js";import{d as s,c as p,w as t,r as m,o as y,a as o,b as l,e as i}from"./app-CfESw_46.js";import"./SearchModal-BmO6oIVG.js";const b=s({__name:"basic-action-cancel",setup(d){return(f,n)=>{const u=m("router-link");return y(),p(e,null,{default:t(()=>[n[18]||(n[18]=o("h1",null,"取消、跳过",-1)),n[19]||(n[19]=l()),n[20]||(n[20]=o("h2",null,"调用接口",-1)),n[21]||(n[21]=l()),o("ul",null,[o("li",null,[n[1]||(n[1]=l(`
        使用
        `,-1)),i(u,{to:"/zh/auto/majsoul/actions/basic-action-majsoul"},{default:t(()=>[...n[0]||(n[0]=[l("MajsoulActions",-1)])]),_:1}),n[2]||(n[2]=l(`
        包中的 `,-1)),n[3]||(n[3]=o("code",null,"Cancel",-1)),n[4]||(n[4]=l(` 方法来弃牌。
      `,-1))])]),n[22]||(n[22]=l()),n[23]||(n[23]=o("h2",null,"示例代码",-1)),n[24]||(n[24]=l()),i(r,{lang:"go"},{default:t(()=>[...n[5]||(n[5]=[l(`package main

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
  if result.GetResult()[0].GetType() == 321 {
    actions.NewMajsoulActions().Cancel()
  }
}`,-1)])]),_:1}),n[25]||(n[25]=l()),o("ul",null,[n[12]||(n[12]=o("li",null,[l(`
        在 `),o("code",null,"onExecute"),l(` 函数中，我们通过
        `),o("code",null,"result.GetResult()[0].GetType()"),l(`
        来判断当前操作是否为【吃】，如果是，我们通过
        `),o("code",null,"result.GetResult()[0].GetCombination()"),l(`
        来获取吃牌的组合，并调用
        `),o("code",null,`actions.NewMajsoulActions().Chii(result.GetResult()[0].GetCombination()[0],
          result.GetResult()[0].GetCombination()[1])`),l(`
        来吃掉这两张牌。
      `)],-1)),n[13]||(n[13]=l()),n[14]||(n[14]=o("li",null,"当然这里只是一个示例，实际使用时，你可能需要根据实际情况来修改代码。",-1)),n[15]||(n[15]=l()),o("li",null,[n[7]||(n[7]=o("code",null,"lq.NotifyAIResult",-1)),n[8]||(n[8]=l(` 参考
        `,-1)),i(u,{to:"/zh/auto/majsoul/lq/basic-lq"},{default:t(()=>[...n[6]||(n[6]=[l("NotifyAIResult",-1)])]),_:1})]),n[16]||(n[16]=l()),o("li",null,[n[10]||(n[10]=o("code",null,"GetType",-1)),n[11]||(n[11]=l(` 参考
        `,-1)),i(u,{to:"/zh/auto/majsoul/action_type/basic-action-type"},{default:t(()=>[...n[9]||(n[9]=[l("动作类型",-1)])]),_:1})])]),n[26]||(n[26]=l()),i(a,{type:"note"},{default:t(()=>[...n[17]||(n[17]=[l(`
      取消的 `,-1),o("code",null,"Type",-1),l(" 固定为 ",-1),o("code",null,"321",-1)])]),_:1})]),_:1})}}});export{b as default};
