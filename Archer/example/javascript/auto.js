const E_PlayOperation = {
    None: 0,
    Discard: 1,
    Chi: 2,
    Pon: 3,
    Ankan: 4,
    Minkan: 5,
    Kakan: 6,
    RiiChi: 7,
    Tsumo: 8,
    Ron: 9,
    JiuZhongJiuPai: 10,
    Babei: 11,
    HuanSanZhang: 12,
    DingQue: 13,
    Reveal: 14,
    Unveil: 15,
    LockTile: 16,
    Revealliqi: 17,
};

const platform = "majsoul";

const main = {
    onLogin: () => {},
    onRoomGameStart: () => {},
    onMatchGameStart: () => {},
    onNewRound: () => {},
    onRoundEnd: () => {},
    onPlayerLeaving: (seat) => {},
    onExecute: (result, risk, r, m, f, t) => {
        const hand = gamestate.Inst().HandTile();

        if (result[0].GetType() === E_PlayOperation.Discard) {
            setTimeout(() => {
                switch (platform) {
                    case "majsoul":
                        actions
                            .NewMajsoulActions()
                            .Discard(hand[hand.length - 1], true);
                        break;
                    case "tenhou":
                        tenhouclient
                            .Inst()
                            .ActionDiscard(
                                hand[hand.length - 1],
                                true,
                                gamestate.Riichi()[0]
                            );
                        break;
                    default:
                        break;
                }
            }, 1000);
        } else {
            // do nothing
        }
    },
    onGameEnd: () => {},
    onServerDisconnect: () => {},
};
