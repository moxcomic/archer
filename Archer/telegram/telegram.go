package telegram

import (
	"io"
	"sync"
)

type Telegram struct{}

var (
	inst *Telegram
	once = sync.OnceFunc(func() {
		inst = &Telegram{}
	})
)

func Inst() *Telegram {
	once()

	return inst
}

func (self *Telegram) SendMasterText(text string) {}

func (self *Telegram) SendMasterImages(img io.Reader) {}
