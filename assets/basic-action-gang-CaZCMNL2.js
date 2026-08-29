import{D as a}from"./DocLayout-B9X8T4JE.js";import{C as r}from"./CodeBlock-CqjZpoKk.js";import{d as u,c as s,w as l,r as p,o as m,a as t,b as o,e}from"./app-CfESw_46.js";import"./SearchModal-BmO6oIVG.js";const k=u({__name:"basic-action-gang",setup(d){return(y,n)=>{const i=p("router-link");return m(),s(a,null,{default:l(()=>[n[27]||(n[27]=t("h1",null,"Kong",-1)),n[28]||(n[28]=o()),n[29]||(n[29]=t("h2",null,"Calling the Interface",-1)),n[30]||(n[30]=o()),t("ul",null,[t("li",null,[n[1]||(n[1]=o(`
        Use the corresponding method from the
        `,-1)),e(i,{to:"/en/auto/majsoul/actions/basic-action-majsoul"},{default:l(()=>[...n[0]||(n[0]=[o("MajsoulActions",-1)])]),_:1}),n[2]||(n[2]=o(`
        package to perform a Kong.
      `,-1))])]),n[31]||(n[31]=o()),n[32]||(n[32]=t("h2",null,"Example Code",-1)),n[33]||(n[33]=o()),e(r,{lang:"go",filename:"main.go"},{default:l(()=>[...n[3]||(n[3]=[t("span",null,`package main

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
}`,-1)])]),_:1}),n[34]||(n[34]=o()),t("ul",null,[n[14]||(n[14]=t("li",null,[o("Call the "),t("code",null,"Daimingkan"),o(" method to perform a "),t("code",null,"Melded Kong"),o(".")],-1)),n[15]||(n[15]=o()),n[16]||(n[16]=t("li",null,[o("Call the "),t("code",null,"Kakan"),o(" method to perform a "),t("code",null,"Supplemental Kong"),o(".")],-1)),n[17]||(n[17]=o()),n[18]||(n[18]=t("li",null,[o("Call the "),t("code",null,"Ankan"),o(" method to perform a "),t("code",null,"Concealed Kong"),o(".")],-1)),n[19]||(n[19]=o()),n[20]||(n[20]=t("li",null,[o(`
        All three methods require a `),t("code",null,"Combination"),o(` type parameter, representing the tile being acted upon.
      `)],-1)),n[21]||(n[21]=o()),n[22]||(n[22]=t("li",null,[o(`
        In the example code, we use the `),t("code",null,"GetResult"),o(` method to retrieve the AI's action result and perform the corresponding operation based on the action type.
      `)],-1)),n[23]||(n[23]=o()),n[24]||(n[24]=t("li",null,`
        This is just an example. In actual usage, you may need to modify the code according to real-world scenarios.
      `,-1)),n[25]||(n[25]=o()),t("li",null,[n[5]||(n[5]=o(`
        For more on `,-1)),n[6]||(n[6]=t("code",null,"lq.NotifyAIResult",-1)),n[7]||(n[7]=o(`, refer to
        `,-1)),e(i,{to:"/en/auto/majsoul/lq/basic-lq"},{default:l(()=>[...n[4]||(n[4]=[o("NotifyAIResult",-1)])]),_:1}),n[8]||(n[8]=o(`.
      `,-1))]),n[26]||(n[26]=o()),t("li",null,[n[10]||(n[10]=o(`
        For `,-1)),n[11]||(n[11]=t("code",null,"GetType",-1)),n[12]||(n[12]=o(`, refer to
        `,-1)),e(i,{to:"/en/auto/majsoul/action_type/basic-action-type"},{default:l(()=>[...n[9]||(n[9]=[o("Action Types",-1)])]),_:1}),n[13]||(n[13]=o(`.
      `,-1))])])]),_:1})}}});export{k as default};
