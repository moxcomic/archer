package mouse

import "github.com/moxcomic/Archer/Mouse/proto"

func MoveLinear(to *proto.Point, steps int)
func Click(button proto.ButtonType, count int)
