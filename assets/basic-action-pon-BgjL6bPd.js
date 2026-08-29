import{D as u}from"./DocLayout-B9X8T4JE.js";import{C as a}from"./CodeBlock-CqjZpoKk.js";import{d as r,c as s,w as l,r as p,o as m,a as o,b as t,e as i}from"./app-CfESw_46.js";import"./SearchModal-BmO6oIVG.js";const G=r({__name:"basic-action-pon",setup(y){return(P,n)=>{const e=p("router-link");return m(),s(u,null,{default:l(()=>[n[17]||(n[17]=o("h1",null,"碰",-1)),n[18]||(n[18]=t()),n[19]||(n[19]=o("h2",null,"调用接口",-1)),n[20]||(n[20]=t()),o("ul",null,[o("li",null,[n[1]||(n[1]=t(`
        使用
        `,-1)),i(e,{to:"/zh/auto/majsoul/actions/basic-action-majsoul"},{default:l(()=>[...n[0]||(n[0]=[t("MajsoulActions",-1)])]),_:1}),n[2]||(n[2]=t(`
        包中的 `,-1)),n[3]||(n[3]=o("code",null,"Pon",-1)),n[4]||(n[4]=t(` 方法来弃牌。
      `,-1))])]),n[21]||(n[21]=t()),n[22]||(n[22]=o("h2",null,"示例代码",-1)),n[23]||(n[23]=t()),i(a,{lang:"golang",filename:"main.go"},{default:l(()=>[...n[5]||(n[5]=[t(`
package main

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
  if result.GetResult()[0].GetType() == E_PlayOperation_Pon {
    if len(result.GetResult()[0].GetCombination()) != 2 {
      fmt.Println("无法获取【碰】选项")
      return
    }

    actions.NewMajsoulActions().Pon(result.GetResult()[0].GetCombination()[0], result.GetResult()[0].GetCombination()[1])
  }
}
`,-1)])]),_:1}),n[24]||(n[24]=t()),o("ul",null,[n[12]||(n[12]=o("li",null,[t(`
        在 `),o("code",null,"onExecute"),t(` 函数中，我们通过
        `),o("code",null,"result.GetResult()[0].GetType()"),t(`
        来判断当前操作是否为【碰】，如果是，我们通过
        `),o("code",null,"result.GetResult()[0].GetCombination()"),t(`
        来获取碰牌的组合，并调用
        `),o("code",null,`actions.NewMajsoulActions().Pon(result.GetResult()[0].GetCombination()[0],
          result.GetResult()[0].GetCombination()[1])`),t(`
        来碰掉这两张牌。
      `)],-1)),n[13]||(n[13]=t()),n[14]||(n[14]=o("li",null,"当然这里只是一个示例，实际使用时，你可能需要根据实际情况来修改代码。",-1)),n[15]||(n[15]=t()),o("li",null,[n[7]||(n[7]=o("code",null,"lq.NotifyAIResult",-1)),n[8]||(n[8]=t(` 参考
        `,-1)),i(e,{to:"/zh/auto/majsoul/lq/basic-lq"},{default:l(()=>[...n[6]||(n[6]=[t("NotifyAIResult",-1)])]),_:1})]),n[16]||(n[16]=t()),o("li",null,[n[10]||(n[10]=o("code",null,"GetType",-1)),n[11]||(n[11]=t(` 参考
        `,-1)),i(e,{to:"/zh/auto/majsoul/action_type/basic-action-type"},{default:l(()=>[...n[9]||(n[9]=[t("动作类型",-1)])]),_:1})])])]),_:1})}}});export{G as default};
