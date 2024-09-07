package main

import (
  "github.com/moxcomic/Archer/mgr/lobbymgr"
)

func onLogin() {
  if lobbymgr.Inst.Enable() {
    // 在游戏大厅页面
    // On the game lobby page
  } else {
    // 不在游戏大厅页面
    // Not on the game lobby page
  }
}