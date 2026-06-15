import{D as r}from"./DocLayout-Z6fF55KA.js";import{C as a}from"./CodeBlock-eokTsjGl.js";import{d as u,c as s,w as l,r as m,o as p,a as o,b as t,e}from"./app-Br24ngHW.js";import"./SearchModal-DrGZg8Bd.js";const b=u({__name:"basic-action-pon",setup(f){return(y,n)=>{const i=m("router-link");return p(),s(r,null,{default:l(()=>[n[21]||(n[21]=o("h1",null,"Pon",-1)),n[22]||(n[22]=t()),n[23]||(n[23]=o("h2",null,"Calling the Interface",-1)),n[24]||(n[24]=t()),o("ul",null,[o("li",null,[n[1]||(n[1]=t(`
        Use the `,-1)),n[2]||(n[2]=o("code",null,"Pon",-1)),n[3]||(n[3]=t(` method from the
        `,-1)),e(i,{to:"/en/auto/majsoul/actions/basic-action-majsoul"},{default:l(()=>[...n[0]||(n[0]=[t("MajsoulActions",-1)])]),_:1}),n[4]||(n[4]=t(`
        package to perform a Pon (meld).
      `,-1))])]),n[25]||(n[25]=t()),n[26]||(n[26]=o("h2",null,"Example Code",-1)),n[27]||(n[27]=t()),e(a,{lang:"golang",filename:"main.go"},{default:l(()=>[...n[5]||(n[5]=[t(`
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
      fmt.Println("Unable to retrieve the 'Pon' option")
      return
    }

    actions.NewMajsoulActions().Pon(result.GetResult()[0].GetCombination()[0], result.GetResult()[0].GetCombination()[1])
  }
}
`,-1)])]),_:1}),n[28]||(n[28]=t()),o("ul",null,[n[16]||(n[16]=o("li",null,[t(`
        In the `),o("code",null,"onExecute"),t(` function, we check if the current operation
        is a `),o("code",null,"Pon"),t(` by calling
        `),o("code",null,"result.GetResult()[0].GetType()"),t(`. If it is, we retrieve the
        Pon tile combination from
        `),o("code",null,"result.GetResult()[0].GetCombination()"),t(` and call
        `),o("code",null,`actions.NewMajsoulActions().Pon(result.GetResult()[0].GetCombination()[0],
          result.GetResult()[0].GetCombination()[1])`),t(`
        to execute the meld.
      `)],-1)),n[17]||(n[17]=t()),n[18]||(n[18]=o("li",null,`
        This is just an example. In actual usage, you may need to modify the code
        according to real-world scenarios.
      `,-1)),n[19]||(n[19]=t()),o("li",null,[n[7]||(n[7]=t(`
        For more on `,-1)),n[8]||(n[8]=o("code",null,"lq.NotifyAIResult",-1)),n[9]||(n[9]=t(`, refer to
        `,-1)),e(i,{to:"/en/auto/majsoul/lq/basic-lq"},{default:l(()=>[...n[6]||(n[6]=[t("NotifyAIResult",-1)])]),_:1}),n[10]||(n[10]=t(`.
      `,-1))]),n[20]||(n[20]=t()),o("li",null,[n[12]||(n[12]=t(`
        For `,-1)),n[13]||(n[13]=o("code",null,"GetType",-1)),n[14]||(n[14]=t(`, refer to
        `,-1)),e(i,{to:"/en/auto/majsoul/action_type/basic-action-type"},{default:l(()=>[...n[11]||(n[11]=[t("Action Types",-1)])]),_:1}),n[15]||(n[15]=t(`.
      `,-1))])])]),_:1})}}});export{b as default};
