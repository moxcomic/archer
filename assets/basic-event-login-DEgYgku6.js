import{D as r}from"./DocLayout-Bev0WFn_.js";import{C as i}from"./CodeBlock-DodZ1y9S.js";import{d as s,c as u,w as t,o as m,a as o,b as l,e as p}from"./app-CORyS0x0.js";import"./SearchModal-Dkq8OtCg.js";const x=s({__name:"basic-event-login",setup(f){return(d,n)=>(m(),u(r,null,{default:t(()=>[n[1]||(n[1]=o("h1",null,"登录事件",-1)),n[2]||(n[2]=l()),n[3]||(n[3]=o("h2",null,"回调函数",-1)),n[4]||(n[4]=l()),n[5]||(n[5]=o("p",{class:"lead"},[l(`
      登录事件的回调函数是 `),o("code",null,"onLogin"),l(` ，它没有任何参数和返回值,
      它只会在用户登录成功时被调用。
    `)],-1)),n[6]||(n[6]=l()),n[7]||(n[7]=o("h2",null,"调用时机",-1)),n[8]||(n[8]=l()),n[9]||(n[9]=o("ul",null,[o("li",null,"在游戏登录成功时以及任意时刻游戏重连时调用"),l(),o("li",null,`
        如果是首次登入游戏, 调用时机会在未进入大厅时,
        需要注意这里未进入大厅不能操作大厅的任何功能
      `)],-1)),n[10]||(n[10]=l()),n[11]||(n[11]=o("h2",null,"示例代码",-1)),n[12]||(n[12]=l()),p(i,{lang:"go",filename:"main.go"},{default:t(()=>[...n[0]||(n[0]=[l(`package main

import (
  "fmt"
)

func onLogin() {
  fmt.Println("登入成功")
}`,-1)])]),_:1})]),_:1}))}});export{x as default};
