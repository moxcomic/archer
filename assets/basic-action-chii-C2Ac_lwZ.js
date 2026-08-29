import{D as r}from"./DocLayout-B9X8T4JE.js";import{C as a}from"./CodeBlock-CqjZpoKk.js";import{d as u,c as s,w as l,r as m,o as p,a as n,b as o,e as i}from"./app-CfESw_46.js";import"./SearchModal-BmO6oIVG.js";const O=u({__name:"basic-action-chii",setup(f){return(y,t)=>{const e=m("router-link");return p(),s(r,null,{default:l(()=>[t[21]||(t[21]=n("h1",null,"Chii (Eat)",-1)),t[22]||(t[22]=o()),t[23]||(t[23]=n("h2",null,"Calling the Interface",-1)),t[24]||(t[24]=o()),n("ul",null,[n("li",null,[t[1]||(t[1]=o(`
        Use the `,-1)),t[2]||(t[2]=n("code",null,"Chii",-1)),t[3]||(t[3]=o(` method from the
        `,-1)),i(e,{to:"/en/auto/majsoul/actions/basic-action-majsoul"},{default:l(()=>[...t[0]||(t[0]=[o("MajsoulActions",-1)])]),_:1}),t[4]||(t[4]=o(`
        package to perform a discard.
      `,-1))])]),t[25]||(t[25]=o()),t[26]||(t[26]=n("h2",null,"Example Code",-1)),t[27]||(t[27]=o()),i(a,{lang:"go",filename:"main.go"},{default:l(()=>[...t[5]||(t[5]=[o(`package main

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
      fmt.Println("Unable to retrieve the 'Chii' option")
      return
    }

    actions.NewMajsoulActions().Chii(result.GetResult()[0].GetCombination()[0], result.GetResult()[0].GetCombination()[1])
  }
}`,-1)])]),_:1}),t[28]||(t[28]=o()),n("ul",null,[t[16]||(t[16]=n("li",null,[o(`
        In the `),n("code",null,"onExecute"),o(` function, we determine whether the current
        action is `),n("code",null,"Chii"),o(` by checking
        `),n("code",null,"result.GetResult()[0].GetType()"),o(`. If so, we retrieve the
        combination of tiles to perform the `),n("code",null,"Chii"),o(` from
        `),n("code",null,"result.GetResult()[0].GetCombination()"),o(` and call
        `),n("code",null,`actions.NewMajsoulActions().Chii(result.GetResult()[0].GetCombination()[0],
          result.GetResult()[0].GetCombination()[1])`),o(`
        to eat the two tiles.
      `)],-1)),t[17]||(t[17]=o()),t[18]||(t[18]=n("li",null,`
        This is just an example. In actual usage, you may need to modify the code
        according to the real scenario.
      `,-1)),t[19]||(t[19]=o()),n("li",null,[t[7]||(t[7]=o(`
        For more on `,-1)),t[8]||(t[8]=n("code",null,"lq.NotifyAIResult",-1)),t[9]||(t[9]=o(`, refer to
        `,-1)),i(e,{to:"/en/auto/majsoul/lq/basic-lq"},{default:l(()=>[...t[6]||(t[6]=[o("NotifyAIResult",-1)])]),_:1}),t[10]||(t[10]=o(`.
      `,-1))]),t[20]||(t[20]=o()),n("li",null,[t[12]||(t[12]=o(`
        For `,-1)),t[13]||(t[13]=n("code",null,"GetType",-1)),t[14]||(t[14]=o(`, refer to
        `,-1)),i(e,{to:"/en/auto/majsoul/action_type/basic-action-type"},{default:l(()=>[...t[11]||(t[11]=[o("Action Types",-1)])]),_:1}),t[15]||(t[15]=o(`.
      `,-1))])])]),_:1})}}});export{O as default};
