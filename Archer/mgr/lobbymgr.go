package lobbymgr

import (
	"sync"
)

type LobbyMgr struct{}

var (
	inst *LobbyMgr
	once = sync.OnceFunc(func() {
		inst = &LobbyMgr{}
	})
)

func Inst() *LobbyMgr {
	once()

	return inst
}

func (self *LobbyMgr) Enable() bool { return false }
