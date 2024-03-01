package userinfo

import "sync"

type UserInfo struct{}

var (
	inst *UserInfo
	once = sync.OnceFunc(func() {
		inst = &UserInfo{}
	})
)

func Inst() *UserInfo {
	once()

	return inst
}

func (self *UserInfo) MatchCount() int { return 0 }
