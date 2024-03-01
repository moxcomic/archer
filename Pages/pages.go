package pages

import (
	"sync"
)

type Page struct{}

type Mouse struct{}

var (
	inst *Page
	once = sync.OnceFunc(func() {
		inst = &Page{}
	})
)

func Inst() *Page {
	once()

	return inst
}

func (self *Page) Get(index int) *Page {
	return self
}
func (self *Page) Reload()                      {}
func (self *Page) Mouse() *Mouse                { return nil }
func (self *Page) MustScreenshot(toFile string) {}
