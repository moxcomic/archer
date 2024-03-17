E_PlayOperation = {
    'None': 0,
    'Discard': 1,
    'Chi': 2,
    'Pon': 3,
    'Ankan': 4,
    'Minkan': 5,
    'Kakan': 6,
    'RiiChi': 7,
    'Tsumo': 8,
    'Ron': 9,
    'JiuZhongJiuPai': 10,
    'Babei': 11,
    'HuanSanZhang': 12,
    'DingQue': 13,
    'Reveal': 14,
    'Unveil': 15,
    'LockTile': 16,
    'Revealliqi': 17,
}

platform = "majsoul"


def onLogin():
    pass


def onRoomGameStart():
    pass


def onMatchGameStart():
    pass


def onNewRound():
    pass


def onRoundEnd():
    pass


def onPlayerLeaving(seat):
    pass


def onExecute(result, risk, r, m, f, t):
    hand = gamestate.Inst().HandTile()

    if result[0].GetType() == E_PlayOperation["Discard"]:
        time.Inst().Sleep(1000)

        if platform == "majsoul":
            actions.NewMajsoulActions().Discard(hand[-1], True)
        elif platform == "tenhou":
            tenhouclient.Inst().ActionDiscard(
                hand[-1], True, gamestate.Inst().Riichi()[0])
    else:
        # do nothing
        pass


def onGameEnd():
    pass


def onServerDisconnect():
    pass
