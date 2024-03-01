package tenhouclient

import "sync"

type Client struct{}

var (
	inst *Client
	once = sync.OnceFunc(func() {
		inst = &Client{}
	})
)

func Inst() *Client {
	once()

	return inst
}

func (self *Client) GOK()                                                     {}
func (self *Client) ActionYuYue(roomId int, roomType int)                     {}
func (self *Client) ActionReJoin()                                            {}
func (self *Client) ActionCancelYuYue()                                       {}
func (self *Client) Lobby(roomID int)                                         {}
func (self *Client) ConfirmNewRound()                                         {}
func (self *Client) ActionBabei()                                             {}
func (self *Client) ActionDiscard(tile string, tsumogiri bool, isRiichi bool) {}
func (self *Client) ActionReach()                                             {}
func (self *Client) ActionChi(tile0 string, tile1 string)                     {}
func (self *Client) ActionPon(tile0 string, tile1 string)                     {}
func (self *Client) ActionMinkan(tile string)                                 {}
func (self *Client) ActionKakan(tile string)                                  {}
func (self *Client) ActionAnkan(tile string)                                  {}
func (self *Client) ActionRyuukyoku()                                         {}
func (self *Client) ActionTsumo()                                             {}
func (self *Client) ActionRon()                                               {}
func (self *Client) ActionCancel()                                            {}
