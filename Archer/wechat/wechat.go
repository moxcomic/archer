package wechat

import (
	"io"
	"sync"
)

type WeChat struct{}

var (
	inst *WeChat
	once = sync.OnceFunc(func() {
		inst = &WeChat{}
	})
)

func Inst() *WeChat {
	once()

	return inst
}

func (self *WeChat) SendMasterText(text string) {}

func (self *WeChat) SendMasterImages(img io.Reader) {}
