import{D as u}from"./DocLayout-BYOw321f.js";import{C as a}from"./CodeBlock-DFlj0IVr.js";import{d as r,c as s,w as o,r as p,o as m,a as l,b as t,e as i}from"./app-CRYa8QI3.js";import"./SearchModal-CP152f7b.js";const C=r({__name:"basic-action-chii",setup(y){return(f,n)=>{const e=p("router-link");return m(),s(u,null,{default:o(()=>[n[17]||(n[17]=l("h1",null,"吃",-1)),n[18]||(n[18]=t()),n[19]||(n[19]=l("h2",null,"调用接口",-1)),n[20]||(n[20]=t()),l("ul",null,[l("li",null,[n[1]||(n[1]=t(`
        使用
        `,-1)),i(e,{to:"/zh/auto/majsoul/actions/basic-action-majsoul"},{default:o(()=>[...n[0]||(n[0]=[t("MajsoulActions",-1)])]),_:1}),n[2]||(n[2]=t(`
        包中的 `,-1)),n[3]||(n[3]=l("code",null,"Chii",-1)),n[4]||(n[4]=t(` 方法来弃牌。
      `,-1))])]),n[21]||(n[21]=t()),n[22]||(n[22]=l("h2",null,"示例代码",-1)),n[23]||(n[23]=t()),i(a,{lang:"go",filename:"main.go"},{default:o(()=>[...n[5]||(n[5]=[t(`package main

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
  if result.GetResult()[0].GetType() == E_PlayOperation_Chi {
    if len(result.GetResult()[0].GetCombination()) != 2 {
      fmt.Println("无法获取【吃】选项")
      return
    }

    actions.NewMajsoulActions().Chii(result.GetResult()[0].GetCombination()[0], result.GetResult()[0].GetCombination()[1])
  }
}`,-1)])]),_:1}),n[24]||(n[24]=t()),l("ul",null,[n[12]||(n[12]=l("li",null,[t(`
        在 `),l("code",null,"onExecute"),t(` 函数中，我们通过
        `),l("code",null,"result.GetResult()[0].GetType()"),t(`
        来判断当前操作是否为【吃】，如果是，我们通过
        `),l("code",null,"result.GetResult()[0].GetCombination()"),t(`
        来获取吃牌的组合，并调用
        `),l("code",null,`actions.NewMajsoulActions().Chii(result.GetResult()[0].GetCombination()[0],
          result.GetResult()[0].GetCombination()[1])`),t(`
        来吃掉这两张牌。
      `)],-1)),n[13]||(n[13]=t()),n[14]||(n[14]=l("li",null,"当然这里只是一个示例，实际使用时，你可能需要根据实际情况来修改代码。",-1)),n[15]||(n[15]=t()),l("li",null,[n[7]||(n[7]=l("code",null,"lq.NotifyAIResult",-1)),n[8]||(n[8]=t(` 参考
        `,-1)),i(e,{to:"/zh/auto/majsoul/lq/basic-lq"},{default:o(()=>[...n[6]||(n[6]=[t("NotifyAIResult",-1)])]),_:1})]),n[16]||(n[16]=t()),l("li",null,[n[10]||(n[10]=l("code",null,"GetType",-1)),n[11]||(n[11]=t(` 参考
        `,-1)),i(e,{to:"/zh/auto/majsoul/action_type/basic-action-type"},{default:o(()=>[...n[9]||(n[9]=[t("动作类型",-1)])]),_:1})])])]),_:1})}}});export{C as default};
