import{D as r}from"./DocLayout-Bev0WFn_.js";import{C as a}from"./Callout-Brn7c2si.js";import{d as l,c as s,w as o,o as i,a as t,b as n,e as u}from"./app-CORyS0x0.js";import"./SearchModal-Dkq8OtCg.js";const b=l({__name:"advanced-event-login",setup(d){return(m,e)=>(i(),s(r,null,{default:o(()=>[e[1]||(e[1]=t("h1",null,"Advanced - Mahjong Event Login",-1)),e[2]||(e[2]=n()),e[3]||(e[3]=t("h2",null,"Basic Review",-1)),e[4]||(e[4]=n()),e[5]||(e[5]=t("p",{class:"lead"},`
      In the previous section, we introduced the basic callback function for Mahjong
      event login. However, in real game scenarios, when this is invoked, it is not
      certain whether the player has already entered the game lobby. Further checks are
      needed to determine whether the player has entered the game and if the game has
      started.
    `,-1)),e[6]||(e[6]=n()),e[7]||(e[7]=t("h2",null,"How to Determine",-1)),e[8]||(e[8]=n()),u(a,{type:"warning"},{default:o(()=>[...e[0]||(e[0]=[t("p",null,[t("strong",null,"Update (Majsoul Unity migration)"),n(`: After Majsoul's web client
        moved to Unity + WASM, the UI-state "manager" packages such as
        `),t("code",null,"lobbymgr"),n(" have been "),t("strong",null,"removed"),n(` — they relied on
        LayaBox engine JS globals that no longer exist under Unity. As a result, `),t("strong",null,[n(`you
        can no longer use `),t("code",null,"lobbymgr.Inst().Enable()"),n(` (or similar) to tell
        whether you are in the lobby`)]),n(`.
      `)],-1)])]),_:1}),e[9]||(e[9]=n()),e[10]||(e[10]=t("p",null,[n(`
      Determine the game phase from the `),t("strong",null,`in-game event stream (protobuf
      messages)`),n(` instead: in the login / enter-room / game-start event
      callbacks, infer the current state from the protocol messages you receive,
      rather than querying the front-end UI. The exact logic depends on the events you
      actually receive.
    `)],-1))]),_:1}))}});export{b as default};
