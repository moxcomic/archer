package variable

import "sync"

type Variable struct{}

var (
	inst *Variable
	once = sync.OnceFunc(func() {
		inst = &Variable{}
	})
)

func Inst() *Variable {
	once()

	return inst
}

func (self *Variable) GetVar(name string) any         { return nil }
func (self *Variable) GetBool(name string) bool       { return false }
func (self *Variable) GetString(name string) string   { return "" }
func (self *Variable) GetInt(name string) int         { return 0 }
func (self *Variable) GetFloat64(name string) float64 { return .0 }
func (self *Variable) GetByte(name string) []byte     { return make([]byte, 0) }
func (self *Variable) SetVar(name string, value any)  {}
func (self *Variable) DeleteVar(name string)          {}
