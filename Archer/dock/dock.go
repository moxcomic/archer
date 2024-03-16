package dock

import "sync"

type Dock struct{}

var (
	inst *Dock
	once = sync.OnceFunc(func() {
		inst = &Dock{}
	})
)

func Inst() *Dock {
	once()

	return inst
}

// Waiting for release
