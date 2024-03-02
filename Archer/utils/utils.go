package utils

import "sync"

type Utils struct{}

var (
	inst *Utils
	once = sync.OnceFunc(func() {
		inst = &Utils{}
	})
)

func Inst() *Utils {
	once()

	return inst
}

func (self *Utils) ChangeEngine(engine string) {}
func (self *Utils) Polarity(polarity bool)     {}
func (self *Utils) Review(distance float64, retryCount, reviewRetryCount int, model string) (rating, matches, reviewUrl, result string, err error) {
	return "", "", "", "", nil
}
func (self *Utils) DispatchBot(distance float64, retryCount int, lobby, speed string, model ...string) error {
	return nil
}
func (self *Utils) MouseClick(count int)     {}
func (self *Utils) Screenshot(toFile string) {}
