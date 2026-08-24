import{D as r}from"./DocLayout-BWtZdPNT.js";import{C as s}from"./Callout-tD8tdAOg.js";import{d as u,c as p,w as t,o as d,a as o,b as l,e}from"./app-KoIiIABH.js";import"./SearchModal-DjHfjCML.js";const g=u({__name:"advanced-event-login",setup(i){return(m,n)=>(d(),p(r,null,{default:t(()=>[n[1]||(n[1]=o("h1",null,"进阶：麻将事件登录",-1)),n[2]||(n[2]=l()),n[3]||(n[3]=o("h2",null,"基础回顾",-1)),n[4]||(n[4]=l()),n[5]||(n[5]=o("p",{class:"lead"},`
      上一节介绍了麻将事件的基础登入回调函数, 但是在实际的游戏中被调用时此时并不能确定是否已经进入了游戏大厅,
      还需要进一步判断是否已经进入了游戏, 以及是否已经开始游戏
    `,-1)),n[6]||(n[6]=l()),n[7]||(n[7]=o("h2",null,"如何判断",-1)),n[8]||(n[8]=l()),e(s,{type:"warning"},{default:t(()=>[...n[0]||(n[0]=[o("p",null,[o("strong",null,"更新（雀魂 Unity 迁移）"),l(`：雀魂网页版改用 Unity + WASM 后，原先用于查询游戏 UI 状态的
        `),o("code",null,"lobbymgr"),l(` 等“管理器”包已被移除——它们依赖的 LayaBox 引擎 JS
        全局对象在 Unity 下不再存在，因此`),o("strong",null,[l(`无法再通过
        `),o("code",null,"lobbymgr.Inst().Enable()"),l(" 这类方式判断是否在大厅")]),l(`。
      `)],-1)])]),_:1}),n[9]||(n[9]=l()),n[10]||(n[10]=o("p",null,[l(`
      请改为依据`),o("strong",null,"对局事件（protobuf 消息流）"),l(`判断游戏阶段：在登录、进入房间、对局开始等事件回调里，
      根据收到的协议消息推导当前状态，而不是查询前端 UI。具体的游戏逻辑需要根据实际收到的事件进行判断。
    `)],-1))]),_:1}))}});export{g as default};
