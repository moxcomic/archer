import{D as l}from"./DocLayout-Z6fF55KA.js";import{C as i}from"./CodeBlock-eokTsjGl.js";import{d as s,c as r,w as o,o as a,a as t,b as e,e as u}from"./app-Br24ngHW.js";import"./SearchModal-DrGZg8Bd.js";const y=s({__name:"basic-event-login",setup(m){return(g,n)=>(a(),r(l,null,{default:o(()=>[n[1]||(n[1]=t("h1",null,"Login Event",-1)),n[2]||(n[2]=e()),n[3]||(n[3]=t("h2",null,"Callback Function",-1)),n[4]||(n[4]=e()),n[5]||(n[5]=t("p",{class:"lead"},[e(`
      The callback function for the login event is `),t("code",null,"onLogin"),e(`. It does
      not take any parameters or return any values and is called only when the
      user successfully logs in.
    `)],-1)),n[6]||(n[6]=e()),n[7]||(n[7]=t("h2",null,"Invocation Timing",-1)),n[8]||(n[8]=e()),n[9]||(n[9]=t("ul",null,[t("li",null,`
        It is invoked when the game login is successful and whenever the game
        reconnects at any time.
      `),e(),t("li",null,`
        If it is the first time logging into the game, the callback is triggered
        before entering the lobby. Please note that you cannot operate any lobby
        functions before entering the lobby.
      `)],-1)),n[10]||(n[10]=e()),n[11]||(n[11]=t("h2",null,"Example Code",-1)),n[12]||(n[12]=e()),u(i,{lang:"go",filename:"main.go"},{default:o(()=>[...n[0]||(n[0]=[e(`package main

import (
  "fmt"
)

func onLogin() {
  fmt.Println("Login successful")
}`,-1)])]),_:1})]),_:1}))}});export{y as default};
