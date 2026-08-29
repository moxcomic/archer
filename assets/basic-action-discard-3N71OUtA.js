import{D as r}from"./DocLayout-B9X8T4JE.js";import{C as a}from"./CodeBlock-CqjZpoKk.js";import{d as s,c as u,w as l,r as p,o as d,a as t,b as o,e as i}from"./app-CfESw_46.js";import"./SearchModal-BmO6oIVG.js";const g=s({__name:"basic-action-discard",setup(m){return(y,n)=>{const e=p("router-link");return d(),u(r,null,{default:l(()=>[n[21]||(n[21]=t("h1",null,"Discard Basics",-1)),n[22]||(n[22]=o()),n[23]||(n[23]=t("h2",null,"Calling the Interface",-1)),n[24]||(n[24]=o()),t("ul",null,[t("li",null,[n[1]||(n[1]=o(`
        Use the `,-1)),n[2]||(n[2]=t("code",null,"Discard",-1)),n[3]||(n[3]=o(` method from the
        `,-1)),i(e,{to:"/en/auto/majsoul/actions/basic-action-majsoul"},{default:l(()=>[...n[0]||(n[0]=[o("MajsoulActions",-1)])]),_:1}),n[4]||(n[4]=o(`
        package to perform a discard.
      `,-1))])]),n[25]||(n[25]=o()),n[26]||(n[26]=t("h2",null,"Example Code",-1)),n[27]||(n[27]=o()),i(a,{lang:"go",filename:"main.go"},{default:l(()=>[...n[5]||(n[5]=[o(`package main

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
}`,-1)])]),_:1}),n[28]||(n[28]=o()),t("ul",null,[n[16]||(n[16]=t("li",null,[o(`
        In the `),t("code",null,"onExecute"),o(` function, we use the
        `),t("code",null,"GetResult"),o(` method to retrieve the current action type. If it
        is a discard action, we call the `),t("code",null,"Discard"),o(` method to discard
        the corresponding tile.
      `)],-1)),n[17]||(n[17]=o()),n[18]||(n[18]=t("li",null,`
        This is just an example. In actual usage, you may need to modify the code
        based on real-world scenarios.
      `,-1)),n[19]||(n[19]=o()),t("li",null,[n[7]||(n[7]=o(`
        For more on `,-1)),n[8]||(n[8]=t("code",null,"lq.NotifyAIResult",-1)),n[9]||(n[9]=o(`, refer to
        `,-1)),i(e,{to:"/en/auto/majsoul/lq/basic-lq"},{default:l(()=>[...n[6]||(n[6]=[o("NotifyAIResult",-1)])]),_:1}),n[10]||(n[10]=o(`.
      `,-1))]),n[20]||(n[20]=o()),t("li",null,[n[12]||(n[12]=o(`
        For `,-1)),n[13]||(n[13]=t("code",null,"GetType",-1)),n[14]||(n[14]=o(`, refer to
        `,-1)),i(e,{to:"/en/auto/majsoul/action_type/basic-action-type"},{default:l(()=>[...n[11]||(n[11]=[o("Action Types",-1)])]),_:1}),n[15]||(n[15]=o(`.
      `,-1))])])]),_:1})}}});export{g as default};
