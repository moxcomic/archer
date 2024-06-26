package actions

import "sync"

type MajsoulActions struct{}

var (
	inst *MajsoulActions
	once = sync.OnceFunc(func() {
		inst = &MajsoulActions{}
	})
)

func NewMajsoulActions() *MajsoulActions {
	once()

	return inst
}

func (self *MajsoulActions) Join(roomID int, roomType int)       {}
func (self *MajsoulActions) ReJoin()                             {}
func (self *MajsoulActions) CancelJoin()                         {}
func (self *MajsoulActions) Confirm()                            {}
func (self *MajsoulActions) EnterLobby()                         {}
func (self *MajsoulActions) Huansanzhang()                       {}
func (self *MajsoulActions) Babei()                              {}
func (self *MajsoulActions) Discard(tile string, tsumogiri bool) {}
func (self *MajsoulActions) Riichi(tile string, tsumogiri bool)  {}
func (self *MajsoulActions) Chii(tile0 string, tile1 string)     {}
func (self *MajsoulActions) Pon(tile0 string, tile1 string)      {}
func (self *MajsoulActions) Daimingkan(tile string)              {}
func (self *MajsoulActions) Kakan(tile string)                   {}
func (self *MajsoulActions) Ankan(tile string)                   {}
func (self *MajsoulActions) Ryukyoku()                           {}
func (self *MajsoulActions) Tsumo()                              {}
func (self *MajsoulActions) Ron()                                {}
func (self *MajsoulActions) Cancel()                             {}
func (self *MajsoulActions) ComeBack()                           {}
