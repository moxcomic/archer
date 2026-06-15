import{D as a}from"./DocLayout-Z6fF55KA.js";import{C as r}from"./Callout-CuVa0Jv4.js";import{C as u}from"./CodeBlock-eokTsjGl.js";import{d as s,c as p,w as t,r as m,o as y,a as l,b as o,e as i}from"./app-Br24ngHW.js";import"./SearchModal-DrGZg8Bd.js";const g=s({__name:"basic-action-cancel",setup(f){return(d,n)=>{const e=m("router-link");return y(),p(a,null,{default:t(()=>[n[16]||(n[16]=l("h1",null,"Cancel, Skip",-1)),n[17]||(n[17]=o()),n[18]||(n[18]=l("h2",null,"Calling the Interface",-1)),n[19]||(n[19]=o()),l("ul",null,[l("li",null,[n[1]||(n[1]=o(`
        Use the `,-1)),n[2]||(n[2]=l("code",null,"Cancel",-1)),n[3]||(n[3]=o(` method from the
        `,-1)),i(e,{to:"/en/auto/majsoul/actions/basic-action-majsoul"},{default:t(()=>[...n[0]||(n[0]=[o("MajsoulActions",-1)])]),_:1}),n[4]||(n[4]=o(`
        package to discard or skip an action.
      `,-1))])]),n[20]||(n[20]=o()),n[21]||(n[21]=l("h2",null,"Example Code",-1)),n[22]||(n[22]=o()),i(u,{lang:"go"},{default:t(()=>[...n[5]||(n[5]=[o(`package main

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
}`,-1)])]),_:1}),n[23]||(n[23]=o()),l("ul",null,[n[11]||(n[11]=l("li",null,[o(`
        In the `),l("code",null,"onExecute"),o(` function, we check if the current action is
        `),l("code",null,"Cancel"),o(` by calling
        `),l("code",null,"result.GetResult()[0].GetType()"),o(`. If it is, we call
        `),l("code",null,"actions.NewMajsoulActions().Cancel()"),o(` to skip the action.
      `)],-1)),n[12]||(n[12]=o()),n[13]||(n[13]=l("li",null,`
        This is just an example, and you may need to modify the code according to
        your specific use case.
      `,-1)),n[14]||(n[14]=o()),l("li",null,[n[7]||(n[7]=o(`
        For more information, refer to `,-1)),n[8]||(n[8]=l("code",null,"lq.NotifyAIResult",-1)),n[9]||(n[9]=o(` in
        `,-1)),i(e,{to:"/en/auto/majsoul/lq/basic-lq"},{default:t(()=>[...n[6]||(n[6]=[o("NotifyAIResult",-1)])]),_:1}),n[10]||(n[10]=o(`.
      `,-1))])]),n[24]||(n[24]=o()),i(r,{type:"note"},{default:t(()=>[...n[15]||(n[15]=[o(`
      The `,-1),l("code",null,"Type",-1),o(" for canceling is always ",-1),l("code",null,"321",-1),o(`.
    `,-1)])]),_:1})]),_:1})}}});export{g as default};
