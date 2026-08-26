import{D as s}from"./DocLayout-BYOw321f.js";import{C as u}from"./Callout-B0wlvBI4.js";import{C as i}from"./CodeBlock-DFlj0IVr.js";import{A as r}from"./ApiTable-Da2aDdkf.js";import{S as d}from"./Steps-DMoPr0Pa.js";import{d as a,c as m,w as e,o as c,a as n,b as l,e as o}from"./app-CRYa8QI3.js";import"./SearchModal-CP152f7b.js";const I=a({__name:"migration",setup(g){return(p,t)=>(c(),m(s,null,{default:e(()=>[t[11]||(t[11]=n("h1",null,"Script Package Path Migration",-1)),t[12]||(t[12]=l()),t[13]||(t[13]=n("p",{class:"lead"},[l(`
      For developers who push `),n("strong",null,"remote Go scripts"),l(` through the
      `),n("code",null,"/auto"),l(` endpoint, and anyone maintaining local
      `),n("code",null,"scripts/*.majsoul"),l(` samples: update the import paths in your
      scripts per this guide.
    `)],-1)),t[14]||(t[14]=l()),o(u,{type:"note"},{default:e(()=>[...t[0]||(t[0]=[n("p",null,[n("strong",null,"Who this is for"),l(": developers who push "),n("strong",null,`remote
        Go scripts`),l(" through the "),n("code",null,"/auto"),l(` endpoint, and anyone
        maintaining local `),n("code",null,"scripts/*.majsoul"),l(` samples.
      `)],-1),l(),n("p",null,[l(`
        This refactor moved the script-visible Go packages into the layered
        `),n("code",null,"internal/"),l(" directory. "),n("strong",null,`The import paths in your scripts
        need updating`),l(`, otherwise the Go script will fail at load/runtime
        with `),n("code",null,"unable to find source"),l(" / "),n("code",null,"undefined symbol"),l(`.
      `)],-1)])]),_:1}),t[15]||(t[15]=l()),o(u,{type:"warning"},{default:e(()=>[...t[1]||(t[1]=[l(`
      ⚠️ `,-1),n("strong",null,"2026 update (Majsoul Unity migration)",-1),l(`: After Majsoul's
      web client moved to Unity + WASM, all the UI-state “manager” packages have
      been `,-1),n("strong",null,"removed entirely",-1),l(": ",-1),n("code",null,"lobbymgr",-1),l(`,
      `,-1),n("code",null,"desktopmgr",-1),l(", ",-1),n("code",null,"infomgr",-1),l(", ",-1),n("code",null,"gameendmgr",-1),l(`,
      `,-1),n("code",null,"activitymgr",-1),l(", ",-1),n("code",null,"activitysignmgr",-1),l(`,
      `,-1),n("code",null,"monthlymgr",-1),l(", ",-1),n("code",null,"countdown",-1),l(", ",-1),n("code",null,"playerinfo",-1),l(`.
      They relied on LayaBox engine JS globals that no longer exist under Unity.
      `,-1),n("strong",null,`The widget rows in table A below, and sections B2 / B3, are
      obsolete — do not use them`,-1),l(`; derive game state from the in-game
      protobuf event stream instead. The other packages
      (`,-1),n("code",null,"gamestate",-1),l(" / ",-1),n("code",null,"userinfo",-1),l(" / ",-1),n("code",null,"variable",-1),l(` /
      `,-1),n("code",null,"actions",-1),l(" / ",-1),n("code",null,"pusher",-1),l(`, etc.) and the
      `,-1),n("code",null,"utils",-1),l(` split (B1) are unaffected.
    `,-1)])]),_:1}),t[16]||(t[16]=l()),t[17]||(t[17]=n("h2",null,"TL;DR",-1)),t[18]||(t[18]=l()),t[19]||(t[19]=n("ul",null,[n("li",null,[n("strong",null,`For the vast majority of packages: only the import path
        changes.`),l(" The "),n("code",null,"pkg.Inst().Method()"),l(` call style is
        `),n("strong",null,"completely unchanged"),l(`.
      `)]),l(),n("li",null,[n("strong",null,[n("code",null,"utils"),l(" was split into 4 packages")]),l(` (drop
        `),n("code",null,".Inst()"),l(`, call package-level functions instead — see B1). (The
        merged `),n("code",null,"countdown"),l(" / "),n("code",null,"playerinfo"),l(` UI-state packages
        have since been removed in the Unity migration — see the notice above.)
      `)]),l(),n("li",null,[n("strong",null,"Method names never change."),l(" The "),n("code",null,"config"),l(` path
        is unchanged. The engine packages
        `),n("code",null,"github.com/moxcomic/lq"),l(` and
        `),n("code",null,"github.com/moxcomic/engine/tenhou_client"),l(` are unaffected.
      `)])],-1)),t[20]||(t[20]=l()),t[21]||(t[21]=n("h2",null,"Why it changed",-1)),t[22]||(t[22]=l()),t[23]||(t[23]=n("p",null,[l(`
      The Go script interpreter uses a symbols table to map the import paths in
      your script to the real Go packages. After the refactor these packages
      physically moved (new import paths), and the symbols table was updated to
      match. But `),n("strong",null,`the import paths hard-coded in your scripts must be
      changed by you`),l(` — if a path doesn't match, the interpreter can't
      resolve the symbol and errors out at load or runtime.
    `)],-1)),t[24]||(t[24]=l()),t[25]||(t[25]=n("h2",null,"A. Import path only (call style unchanged)",-1)),t[26]||(t[26]=l()),o(r,null,{default:e(()=>[...t[2]||(t[2]=[n("thead",null,[n("tr",null,[n("th",null,"Old import"),l(),n("th",null,"New import")])],-1),l(),n("tbody",null,[n("tr",null,[n("td",null,[n("code",null,"github.com/moxcomic/Archer/gamestate")]),l(),n("td",null,[n("code",null,"github.com/moxcomic/Archer/internal/domain/gamestate")])]),l(),n("tr",null,[n("td",null,[n("code",null,"github.com/moxcomic/Archer/userinfo")]),l(),n("td",null,[n("code",null,"github.com/moxcomic/Archer/internal/infra/userinfo")])]),l(),n("tr",null,[n("td",null,[n("code",null,"github.com/moxcomic/Archer/variable")]),l(),n("td",null,[n("code",null,"github.com/moxcomic/Archer/internal/infra/variable")])]),l(),n("tr",null,[n("td",null,[n("code",null,"github.com/moxcomic/Archer/actions")]),l(),n("td",null,[n("code",null,"github.com/moxcomic/Archer/internal/platform/actions")])]),l(),n("tr",null,[n("td",null,[n("code",null,"github.com/moxcomic/Archer/pusher")]),l(),n("td",null,[n("code",null,"github.com/moxcomic/Archer/internal/notify/pusher")])]),l(),n("tr",null,[n("td",null,[n("code",null,"github.com/moxcomic/Archer/audio")]),l(),n("td",null,[n("code",null,"github.com/moxcomic/Archer/internal/ui/audio")])]),l(),n("tr",null,[n("td",null,[n("code",null,"github.com/moxcomic/Archer/discord")]),l(),n("td",null,[n("code",null,"github.com/moxcomic/Archer/internal/notify/discord")])]),l(),n("tr",null,[n("td",null,[n("code",null,"github.com/moxcomic/Archer/telegram")]),l(),n("td",null,[n("code",null,"github.com/moxcomic/Archer/internal/notify/telegram")])]),l(),n("tr",null,[n("td",null,[n("code",null,"github.com/moxcomic/Archer/wechat")]),l(),n("td",null,[n("code",null,"github.com/moxcomic/Archer/internal/notify/wechat")])])],-1)])]),_:1}),t[27]||(t[27]=l()),o(u,{type:"note"},{default:e(()=>[...t[3]||(t[3]=[n("p",null,[n("code",null,"github.com/moxcomic/Archer/config"),l(` is
        `),n("strong",null,"unchanged"),l(` (still a top-level public package).
      `)],-1),l(),n("p",null,[l(`
        ⚠️ The `),n("code",null,"userinfo"),l(" method "),n("code",null,"IsVaild"),l(` was renamed to
        `),n("code",null,"IsValid"),l(` (typo fix). If your script called
        `),n("code",null,".IsVaild()"),l(", change it to "),n("code",null,".IsValid()"),l(`; every
        other method name is unchanged.
      `)],-1)])]),_:1}),t[28]||(t[28]=l()),t[29]||(t[29]=n("p",null,"Call style is unchanged, for example:",-1)),t[30]||(t[30]=l()),o(i,{lang:"golang"},{default:e(()=>[...t[4]||(t[4]=[l(`
// Only the import line above changes; the calls below stay exactly the same
gamestate.Inst().GetHandTile()
variable.Inst().GetInt("ju")
actions.NewMajsoulActions()
pusher.Inst().SendMasterText("...")
    `,-1)])]),_:1}),t[31]||(t[31]=l()),t[32]||(t[32]=n("h2",null,"B. Call style also changed (split / merge)",-1)),t[33]||(t[33]=l()),t[34]||(t[34]=n("h3",null,[l("B1. "),n("code",null,"utils"),l(" split into 4 packages (drop "),n("code",null,".Inst()"),l(")")],-1)),t[35]||(t[35]=l()),t[36]||(t[36]=n("p",null,[l(`
      The old `),n("code",null,"utils.Inst().X(...)"),l(` now becomes the matching
      package's `),n("strong",null,"package-level function"),l(),n("code",null,"pkg.X(...)"),l(`:
    `)],-1)),t[37]||(t[37]=l()),o(r,null,{default:e(()=>[...t[5]||(t[5]=[n("thead",null,[n("tr",null,[n("th",null,"Old call"),l(),n("th",null,"New import"),l(),n("th",null,"New call")])],-1),l(),n("tbody",null,[n("tr",null,[n("td",null,[n("code",null,"utils.Inst().ChangeEngine(...)"),n("br"),l(),n("code",null,"utils.Inst().ChangeMainIndex(...)")]),l(),n("td",null,[n("code",null,"github.com/moxcomic/Archer/internal/platformutil/engineswitch")]),l(),n("td",null,[n("code",null,"engineswitch.ChangeEngine(...)"),n("br"),l(),n("code",null,"engineswitch.ChangeMainIndex(...)")])]),l(),n("tr",null,[n("td",null,[n("code",null,"utils.Inst().DispatchBot(...)"),n("br"),l(),n("code",null,"utils.Inst().DispatchBotGateway(...)")]),l(),n("td",null,[n("code",null,"github.com/moxcomic/Archer/internal/platformutil/botdispatch")]),l(),n("td",null,[n("code",null,"botdispatch.DispatchBot(...)"),n("br"),l(),n("code",null,"botdispatch.DispatchBotGateway(...)")])]),l(),n("tr",null,[n("td",null,[n("code",null,"utils.Inst().MouseMove(...)"),l(" / "),n("code",null,"MouseClick()"),l(` /
            `),n("code",null,"Screenshot(...)"),l(" / "),n("code",null,"SetMarker(...)"),l(` /
            `),n("code",null,"SetMarkerForPage(...)"),l(" / "),n("code",null,"SetMouseMarker(...)")]),l(),n("td",null,[n("code",null,"github.com/moxcomic/Archer/internal/platformutil/pagecontrol")]),l(),n("td",null,[n("code",null,"pagecontrol.MouseMove(...)"),l(" etc. (drop "),n("code",null,"Inst()."),l(")")])]),l(),n("tr",null,[n("td",null,[n("code",null,"utils.Inst().Polarity(...)")]),l(),n("td",null,[n("code",null,"github.com/moxcomic/Archer/internal/platformutil/extension")]),l(),n("td",null,[n("code",null,"extension.Polarity(...)")])])],-1)])]),_:1}),t[38]||(t[38]=l()),t[39]||(t[39]=n("h3",null,[l("B2 / B3. Countdown ("),n("code",null,"countdown"),l(") and player info ("),n("code",null,"playerinfo"),l(") — removed")],-1)),t[40]||(t[40]=l()),o(u,{type:"warning"},{default:e(()=>[...t[6]||(t[6]=[l(`
      ⚠️ These two UI-state query packages were removed in the Majsoul Unity
      migration (see the notice at the top) and are no longer provided. The
      former `,-1),n("code",null,"winmgr",-1),l(" / ",-1),n("code",null,"huleshowmgr",-1),l(` /
      `,-1),n("code",null,"scorechangemgr",-1),l(" / ",-1),n("code",null,"playerinfomgr",-1),l(` /
      `,-1),n("code",null,"otherplayerinfomgr",-1),l(` are all gone. Derive the corresponding
      state from the in-game protobuf event stream instead.
    `,-1)])]),_:1}),t[41]||(t[41]=l()),t[42]||(t[42]=n("h2",null,"Full example: a Tenhou room script before and after",-1)),t[43]||(t[43]=l()),t[44]||(t[44]=n("p",null,[l("Before (old paths + old "),n("code",null,"utils"),l(" call):")],-1)),t[45]||(t[45]=l()),o(i,{lang:"golang"},{default:e(()=>[...t[7]||(t[7]=[l(`
import (
	"github.com/moxcomic/Archer/utils"
	"github.com/moxcomic/Archer/gamestate"
	"github.com/moxcomic/Archer/userinfo"
	"github.com/moxcomic/Archer/variable"
	tenhouclient "github.com/moxcomic/engine/tenhou_client"
	"github.com/moxcomic/lq"
)

func dispatch() error {
	return utils.Inst().DispatchBot(1000, 20, strconv.Itoa(ROOM_ID), "high", "4.1b", "4.1b", "4.1b")
}
    `,-1)])]),_:1}),t[46]||(t[46]=l()),t[47]||(t[47]=n("p",null,"After:",-1)),t[48]||(t[48]=l()),o(i,{lang:"golang"},{default:e(()=>[...t[8]||(t[8]=[l(`
import (
	"github.com/moxcomic/Archer/internal/platformutil/botdispatch"
	"github.com/moxcomic/Archer/internal/domain/gamestate"
	"github.com/moxcomic/Archer/internal/infra/userinfo"
	"github.com/moxcomic/Archer/internal/infra/variable"
	tenhouclient "github.com/moxcomic/engine/tenhou_client"
	"github.com/moxcomic/lq"
)

func dispatch() error {
	return botdispatch.DispatchBot(1000, 20, strconv.Itoa(ROOM_ID), "high", "4.1b", "4.1b", "4.1b")
}
    `,-1)])]),_:1}),t[49]||(t[49]=l()),t[50]||(t[50]=n("p",null,[l(`
      The `),n("code",null,"gamestate.Inst()"),l(" / "),n("code",null,"userinfo.Inst()"),l(` /
      `),n("code",null,"variable.Inst()"),l(" / "),n("code",null,"tenhouclient.Inst()"),l(` calls are
      untouched — only the import lines and the single
      `),n("code",null,"utils.Inst().DispatchBot"),l(` call changed.
    `)],-1)),t[51]||(t[51]=l()),t[52]||(t[52]=n("h2",null,"Migration checklist",-1)),t[53]||(t[53]=l()),o(d,null,{default:e(()=>[...t[9]||(t[9]=[n("li",null,[l(`
        Replace every `),n("code",null,"github.com/moxcomic/Archer/<X>"),l(` import in
        your script with the `),n("code",null,"internal/..."),l(` path from
        `),n("strong",null,"table A"),l(`.
      `)],-1),l(),n("li",null,[n("code",null,"utils.Inst().X()"),l(" → per "),n("strong",null,"B1"),l(`, change to the
        package-level function in `),n("code",null,"engineswitch"),l(` /
        `),n("code",null,"botdispatch"),l(" / "),n("code",null,"pagecontrol"),l(` /
        `),n("code",null,"extension"),l(" (drop "),n("code",null,"Inst()."),l(`).
      `)],-1),l(),n("li",null,[n("code",null,"winmgr"),l(" / "),n("code",null,"huleshowmgr"),l(` /
        `),n("code",null,"scorechangemgr"),l(" / "),n("code",null,"playerinfomgr"),l(` /
        `),n("code",null,"otherplayerinfomgr"),l(` and other UI-state query packages →
        `),n("strong",null,"removed in the Unity migration"),l(`; delete those calls and
        derive state from the in-game event stream instead.
      `)],-1),l(),n("li",null,[n("code",null,"config"),l(", "),n("code",null,"github.com/moxcomic/lq"),l(`, and
        `),n("code",null,"github.com/moxcomic/engine/tenhou_client"),l(` stay
        `),n("strong",null,"unchanged"),l(`.
      `)],-1),l(),n("li",null,[l(`
        If you used `),n("code",null,"userinfo.Inst().IsVaild()"),l(`, change it to
        `),n("code",null,"IsValid()"),l(`.
      `)],-1),l(),n("li",null,[l(`
        Redeploy to the `),n("code",null,"/auto"),l(` push side. The local sample
        `),n("code",null,"scripts/auto.majsoul"),l(` has been updated and can be used as a
        reference.
      `)],-1)])]),_:1}),t[54]||(t[54]=l()),o(u,{type:"note"},{default:e(()=>[...t[10]||(t[10]=[l(`
      The script actually loaded locally, `,-1),n("code",null,"scripts/auto.go",-1),l(`, was
      updated alongside the refactor and passes the Go script load tests. The
      scripts you push via `,-1),n("code",null,"/auto",-1),l(` are yours to update per this guide.
    `,-1)])]),_:1})]),_:1}))}});export{I as default};
