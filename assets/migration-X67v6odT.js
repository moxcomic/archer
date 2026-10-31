import{D as r}from"./DocLayout-DCnJ9sjz.js";import{C as i}from"./Callout-CcGAzHll.js";import{C as s}from"./CodeBlock-DOx508qx.js";import{A as u}from"./ApiTable-Dg9U0kVx.js";import{S as a}from"./Steps-DP4vELQf.js";import{d,c,w as t,o as m,a as n,b as l,e as o}from"./app-FxnaFETl.js";import"./SearchModal-C5ZwZiLQ.js";const k=d({__name:"migration",setup(g){return(p,e)=>(m(),c(r,null,{default:t(()=>[e[14]||(e[14]=n("h1",null,"Script Package Path Migration",-1)),e[15]||(e[15]=l()),e[16]||(e[16]=n("p",{class:"lead"},[l(`
      For developers who push `),n("strong",null,"remote Go scripts"),l(` through the
      `),n("code",null,"/auto"),l(` endpoint, and anyone maintaining local
      `),n("code",null,"scripts/*.majsoul"),l(` samples: update the import paths in your
      scripts per this guide.
    `)],-1)),e[17]||(e[17]=l()),o(i,{type:"note"},{default:t(()=>[...e[0]||(e[0]=[n("p",null,[n("strong",null,"Who this is for"),l(": developers who push "),n("strong",null,`remote
        Go scripts`),l(" through the "),n("code",null,"/auto"),l(` endpoint, and anyone
        maintaining local `),n("code",null,"scripts/*.majsoul"),l(` samples.
      `)],-1),l(),n("p",null,[l(`
        This refactor moved the script-visible Go packages into the layered
        `),n("code",null,"internal/"),l(" directory. "),n("strong",null,`The import paths in your scripts
        need updating`),l(`, otherwise the Go script will fail at load/runtime
        with `),n("code",null,"unable to find source"),l(" / "),n("code",null,"undefined symbol"),l(`.
      `)],-1)])]),_:1}),e[18]||(e[18]=l()),o(i,{type:"warning"},{default:t(()=>[...e[1]||(e[1]=[l(`
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
      `,-1),n("code",null,"actions",-1),l(`, etc.) and the
      `,-1),n("code",null,"utils",-1),l(` split (B1) are unaffected.
    `,-1)])]),_:1}),e[19]||(e[19]=l()),o(i,{type:"warning"},{default:t(()=>[...e[2]||(e[2]=[l(`
      ⚠️ `,-1),n("strong",null,"2026-10 update (notifications moved to nikoksr/notify)",-1),l(`: this applies to new
      Archer builds that include this change; if you are still on an older client, `,-1),n("code",null,"pusher",-1),l(` in
      your local scripts keeps working, while the rule for remote `,-1),n("code",null,"/auto",-1),l(` scripts applies to every
      version and must be done before the new release. In the new builds the `,-1),n("code",null,"pusher",-1),l(", ",-1),n("code",null,"discord",-1),l(`,
      `,-1),n("code",null,"telegram",-1),l(" and ",-1),n("code",null,"wechat",-1),l(` packages are gone: local scripts send notifications with
      `,-1),n("code",null,"notify.Inst().SendText(...)",-1),l(", while remote ",-1),n("code",null,"/auto",-1),l(` scripts drop the
      `,-1),n("code",null,"pusher",-1),l(" import and calls ",-1),n("strong",null,"without",-1),l(" switching to ",-1),n("code",null,"notify",-1),l(`. See
      `,-1),n("strong",null,"section C",-1),l(`.
    `,-1)])]),_:1}),e[20]||(e[20]=l()),e[21]||(e[21]=n("h2",null,"TL;DR",-1)),e[22]||(e[22]=l()),e[23]||(e[23]=n("ul",null,[n("li",null,[n("strong",null,`For the vast majority of packages: only the import path
        changes.`),l(" The "),n("code",null,"pkg.Inst().Method()"),l(` call style is
        `),n("strong",null,"completely unchanged"),l(`.
      `)]),l(),n("li",null,[n("strong",null,[n("code",null,"utils"),l(" was split into 4 packages")]),l(` (drop
        `),n("code",null,".Inst()"),l(`, call package-level functions instead — see B1). (The
        merged `),n("code",null,"countdown"),l(" / "),n("code",null,"playerinfo"),l(` UI-state packages
        have since been removed in the Unity migration — see the notice above.)
      `)]),l(),n("li",null,[n("strong",null,[l("Notifications now use "),n("code",null,"notify.Inst().SendText")]),l(` (see section C): the
        `),n("code",null,"pusher"),l(" / "),n("code",null,"discord"),l(" / "),n("code",null,"telegram"),l(" / "),n("code",null,"wechat"),l(` packages are
        gone, and remote `),n("code",null,"/auto"),l(` scripts must not import any package under
        `),n("code",null,"internal/notify"),l(`.
      `)]),l(),n("li",null,[n("strong",null,"Method names of the packages in table A never change."),l(" The "),n("code",null,"config"),l(` path
        is unchanged. The engine packages
        `),n("code",null,"github.com/moxcomic/lq"),l(` and
        `),n("code",null,"github.com/moxcomic/engine/tenhou_client"),l(` are unaffected.
      `)])],-1)),e[24]||(e[24]=l()),e[25]||(e[25]=n("h2",null,"Why it changed",-1)),e[26]||(e[26]=l()),e[27]||(e[27]=n("p",null,[l(`
      The Go script interpreter uses a symbols table to map the import paths in
      your script to the real Go packages. After the refactor these packages
      physically moved (new import paths), and the symbols table was updated to
      match. But `),n("strong",null,`the import paths hard-coded in your scripts must be
      changed by you`),l(` — if a path doesn't match, the interpreter can't
      resolve the symbol and errors out at load or runtime.
    `)],-1)),e[28]||(e[28]=l()),e[29]||(e[29]=n("h2",null,"A. Import path only (call style unchanged)",-1)),e[30]||(e[30]=l()),o(u,null,{default:t(()=>[...e[3]||(e[3]=[n("thead",null,[n("tr",null,[n("th",null,"Old import"),l(),n("th",null,"New import")])],-1),l(),n("tbody",null,[n("tr",null,[n("td",null,[n("code",null,"github.com/moxcomic/Archer/gamestate")]),l(),n("td",null,[n("code",null,"github.com/moxcomic/Archer/internal/domain/gamestate")])]),l(),n("tr",null,[n("td",null,[n("code",null,"github.com/moxcomic/Archer/userinfo")]),l(),n("td",null,[n("code",null,"github.com/moxcomic/Archer/internal/infra/userinfo")])]),l(),n("tr",null,[n("td",null,[n("code",null,"github.com/moxcomic/Archer/variable")]),l(),n("td",null,[n("code",null,"github.com/moxcomic/Archer/internal/infra/variable")])]),l(),n("tr",null,[n("td",null,[n("code",null,"github.com/moxcomic/Archer/actions")]),l(),n("td",null,[n("code",null,"github.com/moxcomic/Archer/internal/platform/actions")])]),l(),n("tr",null,[n("td",null,[n("code",null,"github.com/moxcomic/Archer/audio")]),l(),n("td",null,[n("code",null,"github.com/moxcomic/Archer/internal/ui/audio")])])],-1)])]),_:1}),e[31]||(e[31]=l()),o(i,{type:"note"},{default:t(()=>[...e[4]||(e[4]=[n("p",null,[n("code",null,"github.com/moxcomic/Archer/config"),l(` is
        `),n("strong",null,"unchanged"),l(` (still a top-level public package).
      `)],-1),l(),n("p",null,[l(`
        ⚠️ The `),n("code",null,"userinfo"),l(" method "),n("code",null,"IsVaild"),l(` was renamed to
        `),n("code",null,"IsValid"),l(` (typo fix). If your script called
        `),n("code",null,".IsVaild()"),l(", change it to "),n("code",null,".IsValid()"),l(`; every
        other method name is unchanged.
      `)],-1)])]),_:1}),e[32]||(e[32]=l()),e[33]||(e[33]=n("p",null,"Call style is unchanged, for example:",-1)),e[34]||(e[34]=l()),o(s,{lang:"golang"},{default:t(()=>[...e[5]||(e[5]=[l(`
// Only the import line above changes; the calls below stay exactly the same
gamestate.Inst().GetHandTile()
variable.Inst().GetInt("ju")
actions.NewMajsoulActions()
    `,-1)])]),_:1}),e[35]||(e[35]=l()),e[36]||(e[36]=n("h2",null,"B. Call style also changed (split / merge)",-1)),e[37]||(e[37]=l()),e[38]||(e[38]=n("h3",null,[l("B1. "),n("code",null,"utils"),l(" split into 4 packages (drop "),n("code",null,".Inst()"),l(")")],-1)),e[39]||(e[39]=l()),e[40]||(e[40]=n("p",null,[l(`
      The old `),n("code",null,"utils.Inst().X(...)"),l(` now becomes the matching
      package's `),n("strong",null,"package-level function"),l(),n("code",null,"pkg.X(...)"),l(`:
    `)],-1)),e[41]||(e[41]=l()),o(u,null,{default:t(()=>[...e[6]||(e[6]=[n("thead",null,[n("tr",null,[n("th",null,"Old call"),l(),n("th",null,"New import"),l(),n("th",null,"New call")])],-1),l(),n("tbody",null,[n("tr",null,[n("td",null,[n("code",null,"utils.Inst().ChangeEngine(...)"),n("br"),l(),n("code",null,"utils.Inst().ChangeMainIndex(...)")]),l(),n("td",null,[n("code",null,"github.com/moxcomic/Archer/internal/platformutil/engineswitch")]),l(),n("td",null,[n("code",null,"engineswitch.ChangeEngine(...)"),n("br"),l(),n("code",null,"engineswitch.ChangeMainIndex(...)")])]),l(),n("tr",null,[n("td",null,[n("code",null,"utils.Inst().DispatchBot(...)"),n("br"),l(),n("code",null,"utils.Inst().DispatchBotGateway(...)")]),l(),n("td",null,[n("code",null,"github.com/moxcomic/Archer/internal/platformutil/botdispatch")]),l(),n("td",null,[n("code",null,"botdispatch.DispatchBot(...)"),n("br"),l(),n("code",null,"botdispatch.DispatchBotGateway(...)")])]),l(),n("tr",null,[n("td",null,[n("code",null,"utils.Inst().MouseMove(...)"),l(" / "),n("code",null,"MouseClick()"),l(` /
            `),n("code",null,"Screenshot(...)"),l(" / "),n("code",null,"SetMarker(...)"),l(` /
            `),n("code",null,"SetMarkerForPage(...)"),l(" / "),n("code",null,"SetMouseMarker(...)")]),l(),n("td",null,[n("code",null,"github.com/moxcomic/Archer/internal/platformutil/pagecontrol")]),l(),n("td",null,[n("code",null,"pagecontrol.MouseMove(...)"),l(" etc. (drop "),n("code",null,"Inst()."),l(")")])]),l(),n("tr",null,[n("td",null,[n("code",null,"utils.Inst().Polarity(...)")]),l(),n("td",null,[n("code",null,"github.com/moxcomic/Archer/internal/platformutil/extension")]),l(),n("td",null,[n("code",null,"extension.Polarity(...)")])])],-1)])]),_:1}),e[42]||(e[42]=l()),e[43]||(e[43]=n("h3",null,[l("B2 / B3. Countdown ("),n("code",null,"countdown"),l(") and player info ("),n("code",null,"playerinfo"),l(") — removed")],-1)),e[44]||(e[44]=l()),o(i,{type:"warning"},{default:t(()=>[...e[7]||(e[7]=[l(`
      ⚠️ These two UI-state query packages were removed in the Majsoul Unity
      migration (see the notice at the top) and are no longer provided. The
      former `,-1),n("code",null,"winmgr",-1),l(" / ",-1),n("code",null,"huleshowmgr",-1),l(` /
      `,-1),n("code",null,"scorechangemgr",-1),l(" / ",-1),n("code",null,"playerinfomgr",-1),l(` /
      `,-1),n("code",null,"otherplayerinfomgr",-1),l(` are all gone. Derive the corresponding
      state from the in-game protobuf event stream instead.
    `,-1)])]),_:1}),e[45]||(e[45]=l()),e[46]||(e[46]=n("h2",null,"C. Notifications (since 2026-10, pusher removed)",-1)),e[47]||(e[47]=l()),e[48]||(e[48]=n("p",null,[l(`
      This section applies to new Archer builds that include this change; if you are still on an older
      client, `),n("code",null,"pusher"),l(` in your local scripts keeps working, while the rule for remote
      `),n("code",null,"/auto"),l(` scripts applies to every version and must be done before the new release.
    `)],-1)),e[49]||(e[49]=l()),e[50]||(e[50]=n("p",null,[l(`
      Archer now sends notifications through nikoksr/notify; the Notifications settings let you pick from
      30+ channels. Local client scripts use a single call (remote `),n("code",null,"/auto"),l(` scripts are handled
      differently; see the notes below the table):
    `)],-1)),e[51]||(e[51]=l()),o(u,null,{default:t(()=>[...e[8]||(e[8]=[n("thead",null,[n("tr",null,[n("th",null,"Old"),l(),n("th",null,"New")])],-1),l(),n("tbody",null,[n("tr",null,[n("td",null,[n("code",null,'import "github.com/moxcomic/Archer/internal/notify/pusher"'),n("br"),l(`
            (or the older `),n("code",null,"github.com/moxcomic/Archer/pusher"),l(`)
          `)]),l(),n("td",null,[n("code",null,'import "github.com/moxcomic/Archer/internal/notify"')])]),l(),n("tr",null,[n("td",null,[n("code",null,"pusher.Inst().SendMasterText(text)")]),l(),n("td",null,[n("code",null,"notify.Inst().SendText(text)")])]),l(),n("tr",null,[n("td",null,[n("code",null,"pusher.Inst().SendMasterImages(...)")]),l(),n("td",null,"Removed (sending images is no longer supported)")]),l(),n("tr",null,[n("td",null,[n("code",null,"func onWeChatMessage(value string)"),l(" / "),n("code",null,"onDingtalkMessage")]),l(),n("td",null,"No longer called by new builds; local scripts can delete them (personal WeChat and DingTalk Stream bot channels are gone)")]),l(),n("tr",null,[n("td",null,[n("code",null,"func onTelegramMessage(value string)"),l(" / "),n("code",null,"onDiscordMessage")]),l(),n("td",null,"Unchanged")])],-1)])]),_:1}),e[52]||(e[52]=l()),e[53]||(e[53]=n("ul",null,[n("li",null,[n("code",null,"SendText"),l(` goes to every channel selected in settings that has “Script messages” enabled;
        it returns immediately and sends in the background.
      `)]),l(),n("li",null,[l(`
        Phone commands work on Telegram and Discord only: send `),n("code",null,"ping"),l(` to the bot to bind the chat;
        after that only bound chats reach `),n("code",null,"onTelegramMessage"),l(" / "),n("code",null,"onDiscordMessage"),l(`.
        The `),n("code",null,"screenshot"),l(` command has been removed.
      `)]),l(),n("li",null,[l("After upgrading, send "),n("code",null,"ping"),l(" to the bot once more: older versions never saved the binding to disk.")]),l(),n("li",null,[n("code",null,"ping"),l(` binds a chat automatically only while the recipient list is empty; once the list is
        non-empty, `),n("code",null,"ping"),l(` from an unknown chat is ignored and you need to add the chat ID in settings.
      `)]),l(),n("li",null,`
        For Discord, enable Message Content Intent for the bot in the developer portal; otherwise the bot
        cannot connect to the gateway (it is closed with code 4014) and receives no commands at all. Sending
        notifications is not affected.
      `),l(),n("li",null,[l("The "),n("code",null,"discord"),l(", "),n("code",null,"telegram"),l(" and "),n("code",null,"wechat"),l(" packages are gone; scripts can no longer call them directly.")]),l(),n("li",null,[l(`
        Remote scripts served by `),n("code",null,"/auto"),l(" go to every client version, so they "),n("strong",null,[l(`must not import
        any package under `),n("code",null,"internal/notify")]),l(`: no notification package exists in both old and
        new clients (old clients provide `),n("code",null,"internal/notify/pusher"),l(`, new ones provide
        `),n("code",null,"internal/notify"),l(`), and a missing symbol on either side makes the whole script fail to load.
        The right fix: delete the `),n("code",null,"pusher"),l(" import and all its calls "),n("strong",null,"without"),l(` switching
        to `),n("code",null,"notify"),l(`. Server-side scripts no longer send command replies; put any notification logic
        in local client scripts.
      `)])],-1)),e[54]||(e[54]=l()),o(s,{lang:"golang"},{default:t(()=>[...e[9]||(e[9]=[l(`
// Local client scripts only (e.g. scripts/auto.go); do not write this in remote /auto scripts
import "github.com/moxcomic/Archer/internal/notify"

notify.Inst().SendText("start match.")
    `,-1)])]),_:1}),e[55]||(e[55]=l()),e[56]||(e[56]=n("h2",null,"Full example: a Tenhou room script before and after",-1)),e[57]||(e[57]=l()),e[58]||(e[58]=n("p",null,[l("Before (old paths + old "),n("code",null,"utils"),l(" call):")],-1)),e[59]||(e[59]=l()),o(s,{lang:"golang"},{default:t(()=>[...e[10]||(e[10]=[l(`
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
    `,-1)])]),_:1}),e[60]||(e[60]=l()),e[61]||(e[61]=n("p",null,"After:",-1)),e[62]||(e[62]=l()),o(s,{lang:"golang"},{default:t(()=>[...e[11]||(e[11]=[l(`
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
    `,-1)])]),_:1}),e[63]||(e[63]=l()),e[64]||(e[64]=n("p",null,[l(`
      The `),n("code",null,"gamestate.Inst()"),l(" / "),n("code",null,"userinfo.Inst()"),l(` /
      `),n("code",null,"variable.Inst()"),l(" / "),n("code",null,"tenhouclient.Inst()"),l(` calls are
      untouched — only the import lines and the single
      `),n("code",null,"utils.Inst().DispatchBot"),l(` call changed.
    `)],-1)),e[65]||(e[65]=l()),e[66]||(e[66]=n("h2",null,"Migration checklist",-1)),e[67]||(e[67]=l()),o(a,null,{default:t(()=>[...e[12]||(e[12]=[n("li",null,[l(`
        Replace every `),n("code",null,"github.com/moxcomic/Archer/<X>"),l(` import in
        your script with the `),n("code",null,"internal/..."),l(` path from
        `),n("strong",null,"table A"),l(`.
      `)],-1),l(),n("li",null,[l(`
        Local scripts (`),n("code",null,"scripts/auto.go"),l(` and other scripts the client loads locally; the
        `),n("code",null,"scripts/*.majsoul"),l(` samples are written this way too): replace
        `),n("code",null,"pusher.Inst().SendMasterText(...)"),l(" with "),n("code",null,"notify.Inst().SendText(...)"),l(` (section C),
        and delete `),n("code",null,"SendMasterImages"),l(" calls. New builds no longer call "),n("code",null,"onWeChatMessage"),l(` /
        `),n("code",null,"onDingtalkMessage"),l(`, so you can delete them too.
      `)],-1),l(),n("li",null,[l(`
        Remote `),n("code",null,"/auto"),l(" scripts: delete the "),n("code",null,"pusher"),l(` import and all its calls
        `),n("strong",null,"without"),l(" switching to "),n("code",null,"notify"),l(` (server-side scripts no longer send command
        replies; put notification logic in local scripts). `),n("code",null,"onWeChatMessage"),l(` /
        `),n("code",null,"onDingtalkMessage"),l(` can stay: new clients no longer call them, while old clients still rely
        on them for WeChat/DingTalk commands. The `),n("code",null,"scripts/*.majsoul"),l(` samples are references for
        `),n("code",null,"/auto"),l(" developers but use "),n("code",null,"notify"),l(` the local-script way; when you base an
        `),n("code",null,"/auto"),l(` script on them, you must remove the notification imports and calls.
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
        After making sure your `),n("code",null,"/auto"),l(" scripts import nothing under "),n("code",null,"internal/notify"),l(`,
        redeploy to the `),n("code",null,"/auto"),l(" push side. The "),n("code",null,"scripts/*.majsoul"),l(` samples use
        `),n("code",null,"notify"),l(" the local-script way; if you base an "),n("code",null,"/auto"),l(` script on them, you must
        remove the notification imports and calls.
      `)],-1)])]),_:1}),e[68]||(e[68]=l()),o(i,{type:"note"},{default:t(()=>[...e[13]||(e[13]=[l(`
      The script actually loaded locally, `,-1),n("code",null,"scripts/auto.go",-1),l(`, was
      updated alongside the refactor and passes the Go script load tests. The
      scripts you push via `,-1),n("code",null,"/auto",-1),l(` are yours to update per this guide.
    `,-1)])]),_:1})]),_:1}))}});export{k as default};
