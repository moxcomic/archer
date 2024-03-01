package lq

type AIResult struct {
	Type        uint32
	Tile        string
	Moqie       bool
	Combination []string
	Score       float64
	Chong       float64
}

type NotifyAIResult struct {
	Result  []*AIResult
	Shanten int
	Rrrr    int
	Mmmm    int
}
