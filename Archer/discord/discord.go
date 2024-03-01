package discord

import (
	"io"
	"sync"
)

type Discord struct{}

var (
	inst *Discord
	once = sync.OnceFunc(func() {
		inst = &Discord{}
	})
)

func Inst() *Discord {
	once()

	return inst
}

func (self *Discord) SendMasterText(text string) {}

func (self *Discord) SendMasterImages(img io.Reader) {}
