import{D as d}from"./DocLayout-DCnJ9sjz.js";import{C as e}from"./Callout-CcGAzHll.js";import{C as i}from"./CodeBlock-DOx508qx.js";import{A as r}from"./ApiTable-Dg9U0kVx.js";import{S as s}from"./Steps-DP4vELQf.js";import{d as m,c as g,w as t,o as c,a as l,b as n,e as u}from"./app-FxnaFETl.js";import"./SearchModal-C5ZwZiLQ.js";const w=m({__name:"migration",setup(p){return(a,o)=>(c(),g(d,null,{default:t(()=>[o[14]||(o[14]=l("h1",null,"脚本包路径迁移指南",-1)),o[15]||(o[15]=n()),o[16]||(o[16]=l("p",{class:"lead"},[n(`
      通过 `),l("code",null,"/auto"),n(" 接口下发"),l("strong",null,"远端 Go 脚本"),n(`的开发者，以及维护本地
      `),l("code",null,"scripts/*.majsoul"),n(` 样本的人，都需要按本指南更新脚本里的 import 路径。
    `)],-1)),o[17]||(o[17]=n()),u(e,{type:"note"},{default:t(()=>[...o[0]||(o[0]=[l("p",null,[l("strong",null,"适用对象"),n("：通过 "),l("code",null,"/auto"),n(" 接口下发"),l("strong",null,`远端
        Go 脚本`),n("的开发者，以及维护本地 "),l("code",null,"scripts/*.majsoul"),n(`
        样本的人。
      `)],-1),n(),l("p",null,[n(`
        本次重构把脚本可见的 Go 包搬进了 `),l("code",null,"internal/"),n(" 分层目录。"),l("strong",null,`你脚本里的
        import 路径需要更新`),n(`，否则 Go 脚本在加载/运行时会报
        `),l("code",null,"unable to find source"),n(" / "),l("code",null,"undefined symbol"),n(`。
      `)],-1)])]),_:1}),o[18]||(o[18]=n()),u(e,{type:"warning"},{default:t(()=>[...o[1]||(o[1]=[n(`
      ⚠️ `,-1),l("strong",null,"2026 更新（雀魂 Unity 迁移）",-1),n(`：雀魂网页版改用 Unity + WASM
      后，所有查询 LayaBox UI 状态的“管理器”包已被`,-1),l("strong",null,"整体移除",-1),n("：",-1),l("code",null,"lobbymgr",-1),n("、",-1),l("code",null,"desktopmgr",-1),n("、",-1),l("code",null,"infomgr",-1),n("、",-1),l("code",null,"gameendmgr",-1),n("、",-1),l("code",null,"activitymgr",-1),n("、",-1),l("code",null,"activitysignmgr",-1),n("、",-1),l("code",null,"monthlymgr",-1),n("、",-1),l("code",null,"countdown",-1),n("、",-1),l("code",null,"playerinfo",-1),n(`。它们依赖的
      LayaBox 引擎 JS 全局对象在 Unity 下不存在。`,-1),l("strong",null,`下文 A 表中的这些 widget
      行、以及 B2 / B3 小节均已失效，请勿再使用`,-1),n(`；游戏状态判断请改为基于对局
      protobuf 事件流推导。其余包（`,-1),l("code",null,"gamestate",-1),n(" / ",-1),l("code",null,"userinfo",-1),n(` /
      `,-1),l("code",null,"variable",-1),n(" / ",-1),l("code",null,"actions",-1),n(` 等）与
      `,-1),l("code",null,"utils",-1),n(` 拆分（B1）不受影响。
    `,-1)])]),_:1}),o[19]||(o[19]=n()),u(e,{type:"warning"},{default:t(()=>[...o[2]||(o[2]=[n(`
      ⚠️ `,-1),l("strong",null,"2026-10 更新（通知改用 nikoksr/notify）",-1),n(`：适用于包含本次改动的新版
      Archer；仍在使用旧版客户端的，本地脚本里的 `,-1),l("code",null,"pusher",-1),n(" 照旧可用；",-1),l("code",null,"/auto",-1),n(`
      远端脚本的规则不分版本，需要在新版发布之前完成。新版中 `,-1),l("code",null,"pusher",-1),n(` 以及
      `,-1),l("code",null,"discord",-1),n(" / ",-1),l("code",null,"telegram",-1),n(" / ",-1),l("code",null,"wechat",-1),n(` 包已删除：本地脚本发通知改用
      `,-1),l("code",null,"notify.Inst().SendText(...)",-1),n("；",-1),l("code",null,"/auto",-1),n(" 远端脚本删除 ",-1),l("code",null,"pusher",-1),n(` 的 import
      和调用，`,-1),l("strong",null,"不要",-1),n("换成 ",-1),l("code",null,"notify",-1),n("。详见下文 ",-1),l("strong",null,"C 节",-1),n(`。
    `,-1)])]),_:1}),o[20]||(o[20]=n()),o[21]||(o[21]=l("h2",null,"一句话总结",-1)),o[22]||(o[22]=n()),o[23]||(o[23]=l("ul",null,[l("li",null,[l("strong",null,"绝大多数包：只改 import 路径"),n("，"),l("code",null,"包名.Inst().方法()"),n(`
        的调用写法`),l("strong",null,"完全不变"),n(`。
      `)]),n(),l("li",null,[l("strong",null,[l("code",null,"utils"),n(" 拆成 4 个包")]),n("（去掉 "),l("code",null,".Inst()"),n(`，改用包级函数，见
        B1）。（原先合并出的 `),l("code",null,"countdown"),n(" / "),l("code",null,"playerinfo"),n(` 等 UI
        状态查询包已随 Unity 迁移移除，见上方提示。）
      `)]),n(),l("li",null,[l("strong",null,[n("通知改用 "),l("code",null,"notify.Inst().SendText")]),n("（见 C 节）："),l("code",null,"pusher"),n(` /
        `),l("code",null,"discord"),n(" / "),l("code",null,"telegram"),n(" / "),l("code",null,"wechat"),n(" 包已删除；"),l("code",null,"/auto"),n(`
        远端脚本不得 import `),l("code",null,"internal/notify"),n(` 下的任何包。
      `)]),n(),l("li",null,[l("strong",null,"A 表里的包方法名一律不变"),n("。"),l("code",null,"config"),n(` 路径不变。引擎包
        `),l("code",null,"github.com/moxcomic/lq"),n("、"),l("code",null,"github.com/moxcomic/engine/tenhou_client"),n(`
        不受影响。
      `)])],-1)),o[24]||(o[24]=n()),o[25]||(o[25]=l("h2",null,"为什么会变",-1)),o[26]||(o[26]=n()),o[27]||(o[27]=l("p",null,[n(`
      Go 脚本解释器靠一张 symbols 符号表把脚本里的 import 路径映射到真实的 Go
      包。重构后这些包的物理位置（import 路径）变了，symbols 表已随之同步更新；但`),l("strong",null,`你脚本里写死的
      import 路径需要你手动改`),n(`——路径对不上，解释器
      找不到对应符号，就会在加载或运行时报错。
    `)],-1)),o[28]||(o[28]=n()),o[29]||(o[29]=l("h2",null,"A. 只改 import 路径（调用写法不变）",-1)),o[30]||(o[30]=n()),u(r,null,{default:t(()=>[...o[3]||(o[3]=[l("thead",null,[l("tr",null,[l("th",null,"旧 import"),n(),l("th",null,"新 import")])],-1),n(),l("tbody",null,[l("tr",null,[l("td",null,[l("code",null,"github.com/moxcomic/Archer/gamestate")]),n(),l("td",null,[l("code",null,"github.com/moxcomic/Archer/internal/domain/gamestate")])]),n(),l("tr",null,[l("td",null,[l("code",null,"github.com/moxcomic/Archer/userinfo")]),n(),l("td",null,[l("code",null,"github.com/moxcomic/Archer/internal/infra/userinfo")])]),n(),l("tr",null,[l("td",null,[l("code",null,"github.com/moxcomic/Archer/variable")]),n(),l("td",null,[l("code",null,"github.com/moxcomic/Archer/internal/infra/variable")])]),n(),l("tr",null,[l("td",null,[l("code",null,"github.com/moxcomic/Archer/actions")]),n(),l("td",null,[l("code",null,"github.com/moxcomic/Archer/internal/platform/actions")])]),n(),l("tr",null,[l("td",null,[l("code",null,"github.com/moxcomic/Archer/audio")]),n(),l("td",null,[l("code",null,"github.com/moxcomic/Archer/internal/ui/audio")])])],-1)])]),_:1}),o[31]||(o[31]=n()),u(e,{type:"note"},{default:t(()=>[...o[4]||(o[4]=[l("p",null,[l("code",null,"github.com/moxcomic/Archer/config"),n(),l("strong",null,"保持不变"),n(`（仍是顶层公开包）。
      `)],-1),n(),l("p",null,[n(`
        ⚠️ `),l("code",null,"userinfo"),n(" 的方法 "),l("code",null,"IsVaild"),n(` 已更名为
        `),l("code",null,"IsValid"),n(`（修正拼写）。如果你的脚本调用过
        `),l("code",null,".IsVaild()"),n("，请改为 "),l("code",null,".IsValid()"),n(`；其余方法名一律不变。
      `)],-1)])]),_:1}),o[32]||(o[32]=n()),o[33]||(o[33]=l("p",null,"调用写法不变，举例：",-1)),o[34]||(o[34]=n()),u(i,{lang:"golang"},{default:t(()=>[...o[5]||(o[5]=[n(`
// 只改了上面 import 的那一行，下面的调用一字不动
gamestate.Inst().GetHandTile()
variable.Inst().GetInt("ju")
actions.NewMajsoulActions()
    `,-1)])]),_:1}),o[35]||(o[35]=n()),o[36]||(o[36]=l("h2",null,"B. 调用写法也变了（拆包 / 合并）",-1)),o[37]||(o[37]=n()),o[38]||(o[38]=l("h3",null,[n("B1. "),l("code",null,"utils"),n(" 拆成 4 个包（去掉 "),l("code",null,".Inst()"),n("）")],-1)),o[39]||(o[39]=n()),o[40]||(o[40]=l("p",null,[n(`
      原来的 `),l("code",null,"utils.Inst().X(...)"),n(" 现在改成对应包的"),l("strong",null,"包级函数"),n(),l("code",null,"pkg.X(...)"),n(`：
    `)],-1)),o[41]||(o[41]=n()),u(r,null,{default:t(()=>[...o[6]||(o[6]=[l("thead",null,[l("tr",null,[l("th",null,"旧调用"),n(),l("th",null,"新 import"),n(),l("th",null,"新调用")])],-1),n(),l("tbody",null,[l("tr",null,[l("td",null,[l("code",null,"utils.Inst().ChangeEngine(...)"),l("br"),n(),l("code",null,"utils.Inst().ChangeMainIndex(...)")]),n(),l("td",null,[l("code",null,"github.com/moxcomic/Archer/internal/platformutil/engineswitch")]),n(),l("td",null,[l("code",null,"engineswitch.ChangeEngine(...)"),l("br"),n(),l("code",null,"engineswitch.ChangeMainIndex(...)")])]),n(),l("tr",null,[l("td",null,[l("code",null,"utils.Inst().DispatchBot(...)"),l("br"),n(),l("code",null,"utils.Inst().DispatchBotGateway(...)")]),n(),l("td",null,[l("code",null,"github.com/moxcomic/Archer/internal/platformutil/botdispatch")]),n(),l("td",null,[l("code",null,"botdispatch.DispatchBot(...)"),l("br"),n(),l("code",null,"botdispatch.DispatchBotGateway(...)")])]),n(),l("tr",null,[l("td",null,[l("code",null,"utils.Inst().MouseMove(...)"),n(" / "),l("code",null,"MouseClick()"),n(` /
            `),l("code",null,"Screenshot(...)"),n(" / "),l("code",null,"SetMarker(...)"),n(` /
            `),l("code",null,"SetMarkerForPage(...)"),n(" / "),l("code",null,"SetMouseMarker(...)")]),n(),l("td",null,[l("code",null,"github.com/moxcomic/Archer/internal/platformutil/pagecontrol")]),n(),l("td",null,[l("code",null,"pagecontrol.MouseMove(...)"),n(" 等（去掉 "),l("code",null,"Inst()."),n("）")])]),n(),l("tr",null,[l("td",null,[l("code",null,"utils.Inst().Polarity(...)")]),n(),l("td",null,[l("code",null,"github.com/moxcomic/Archer/internal/platformutil/extension")]),n(),l("td",null,[l("code",null,"extension.Polarity(...)")])])],-1)])]),_:1}),o[42]||(o[42]=n()),o[43]||(o[43]=l("h3",null,[n("B2 / B3. 倒计时（"),l("code",null,"countdown"),n("）与玩家信息（"),l("code",null,"playerinfo"),n("）—— 已移除")],-1)),o[44]||(o[44]=n()),u(e,{type:"warning"},{default:t(()=>[...o[7]||(o[7]=[n(`
      ⚠️ 这两套 UI 状态查询包随雀魂 Unity 迁移已被移除（见顶部说明），不再提供。原先的
      `,-1),l("code",null,"winmgr",-1),n(" / ",-1),l("code",null,"huleshowmgr",-1),n(" / ",-1),l("code",null,"scorechangemgr",-1),n(` /
      `,-1),l("code",null,"playerinfomgr",-1),n(" / ",-1),l("code",null,"otherplayerinfomgr",-1),n(`
      一并失效。请改为从对局 protobuf 事件流推导相应状态。
    `,-1)])]),_:1}),o[45]||(o[45]=n()),o[46]||(o[46]=l("h2",null,"C. 通知接口（2026-10 起，pusher 已删除）",-1)),o[47]||(o[47]=n()),o[48]||(o[48]=l("p",null,[n(`
      本节适用于包含本次改动的新版 Archer；仍在使用旧版客户端的，本地脚本里的 `),l("code",null,"pusher"),n(" 照旧可用；"),l("code",null,"/auto"),n(` 远端脚本的规则不分版本，需要在新版发布之前完成。
    `)],-1)),o[49]||(o[49]=n()),o[50]||(o[50]=l("p",null,[n(`
      Archer 的推送改用 nikoksr/notify，设置页的“通知”里可以勾选 30 多个渠道。客户端本地脚本里发通知只用一个接口
      （`),l("code",null,"/auto"),n(` 远端脚本的改法不同，见表下说明）：
    `)],-1)),o[51]||(o[51]=n()),u(r,null,{default:t(()=>[...o[8]||(o[8]=[l("thead",null,[l("tr",null,[l("th",null,"旧写法"),n(),l("th",null,"新写法")])],-1),n(),l("tbody",null,[l("tr",null,[l("td",null,[l("code",null,'import "github.com/moxcomic/Archer/internal/notify/pusher"'),l("br"),n(`
            （或更早的 `),l("code",null,"github.com/moxcomic/Archer/pusher"),n(`）
          `)]),n(),l("td",null,[l("code",null,'import "github.com/moxcomic/Archer/internal/notify"')])]),n(),l("tr",null,[l("td",null,[l("code",null,"pusher.Inst().SendMasterText(text)")]),n(),l("td",null,[l("code",null,"notify.Inst().SendText(text)")])]),n(),l("tr",null,[l("td",null,[l("code",null,"pusher.Inst().SendMasterImages(...)")]),n(),l("td",null,"删除（不再支持发图）")]),n(),l("tr",null,[l("td",null,[l("code",null,"func onWeChatMessage(value string)"),n(" / "),l("code",null,"onDingtalkMessage")]),n(),l("td",null,"新版不再调用，本地脚本可删除（个人微信、钉钉 Stream 机器人渠道已移除）")]),n(),l("tr",null,[l("td",null,[l("code",null,"func onTelegramMessage(value string)"),n(" / "),l("code",null,"onDiscordMessage")]),n(),l("td",null,"不变")])],-1)])]),_:1}),o[52]||(o[52]=n()),o[53]||(o[53]=l("ul",null,[l("li",null,[l("code",null,"SendText"),n(` 发给设置页里勾选、并且勾了“脚本消息”的渠道；调用立即返回，后台发送。
      `)]),n(),l("li",null,[n(`
        手机指令只在 Telegram、Discord 上可用：先给机器人发 `),l("code",null,"ping"),n(` 绑定会话，之后只有已绑定的会话发来的文字才会交给
        `),l("code",null,"onTelegramMessage"),n(" / "),l("code",null,"onDiscordMessage"),n("。"),l("code",null,"screenshot"),n(` 指令已移除。
      `)]),n(),l("li",null,[n("升级到新版后需要重新给机器人发一次 "),l("code",null,"ping"),n("：旧版的绑定从未保存到磁盘。")]),n(),l("li",null,[n(`
        只有接收人列表为空时，`),l("code",null,"ping"),n(" 才会自动绑定；列表非空时，陌生会话发来的 "),l("code",null,"ping"),n(`
        会被忽略，需要在设置页手动添加会话 ID。
      `)]),n(),l("li",null,`
        Discord 需要在开发者后台为机器人打开 Message Content Intent，否则机器人连不上网关（会被以 4014 关闭），收不到任何指令；发送通知不受影响。
      `),n(),l("li",null,[l("code",null,"discord"),n("、"),l("code",null,"telegram"),n("、"),l("code",null,"wechat"),n(" 包已删除，脚本不能再直接调用它们。")]),n(),l("li",null,[l("code",null,"/auto"),n(" 下发的远端脚本不分客户端版本，"),l("strong",null,[n("不得 import "),l("code",null,"internal/notify"),n(`
        下的任何包`)]),n("：新旧客户端没有一个同时都有的通知包（旧版提供的是 "),l("code",null,"internal/notify/pusher"),n(`，新版提供的是
        `),l("code",null,"internal/notify"),n("），哪一边缺符号都会让整份脚本加载失败。正确改法：删除 "),l("code",null,"pusher"),n(` 的
        import 和全部调用，`),l("strong",null,"不要"),n("换成 "),l("code",null,"notify"),n(`；服务端脚本不再发送指令回执，需要发通知的逻辑放到客户端本地脚本里。
      `)])],-1)),o[54]||(o[54]=n()),u(i,{lang:"golang"},{default:t(()=>[...o[9]||(o[9]=[n(`
// 仅限客户端本地脚本（如 scripts/auto.go）；/auto 远端脚本不要这样写
import "github.com/moxcomic/Archer/internal/notify"

notify.Inst().SendText("start match.")
    `,-1)])]),_:1}),o[55]||(o[55]=n()),o[56]||(o[56]=l("h2",null,"完整示例：天凤个室脚本迁移前后",-1)),o[57]||(o[57]=n()),o[58]||(o[58]=l("p",null,[n("迁移前（旧路径 + 旧 "),l("code",null,"utils"),n(" 调用）：")],-1)),o[59]||(o[59]=n()),u(i,{lang:"golang"},{default:t(()=>[...o[10]||(o[10]=[n(`
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
    `,-1)])]),_:1}),o[60]||(o[60]=n()),o[61]||(o[61]=l("p",null,"迁移后：",-1)),o[62]||(o[62]=n()),u(i,{lang:"golang"},{default:t(()=>[...o[11]||(o[11]=[n(`
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
    `,-1)])]),_:1}),o[63]||(o[63]=n()),o[64]||(o[64]=l("p",null,[l("code",null,"gamestate.Inst()"),n(" / "),l("code",null,"userinfo.Inst()"),n(` /
      `),l("code",null,"variable.Inst()"),n(" / "),l("code",null,"tenhouclient.Inst()"),n(`
      等调用一字未动——只有 import 行和 `),l("code",null,"utils.Inst().DispatchBot"),n(`
      这一处调用变了。
    `)],-1)),o[65]||(o[65]=n()),o[66]||(o[66]=l("h2",null,"迁移检查清单",-1)),o[67]||(o[67]=n()),u(s,null,{default:t(()=>[...o[12]||(o[12]=[l("li",null,[n(`
        把脚本里所有 `),l("code",null,"github.com/moxcomic/Archer/<X>"),n(` 的 import 按
        `),l("strong",null,"A 表"),n("替换为 "),l("code",null,"internal/..."),n(` 路径。
      `)],-1),n(),l("li",null,[n(`
        本地脚本（`),l("code",null,"scripts/auto.go"),n(" 等客户端本地加载的脚本；"),l("code",null,"scripts/*.majsoul"),n(`
        样本的内容也按这种写法）：把 `),l("code",null,"pusher.Inst().SendMasterText(...)"),n(` 改成
        `),l("code",null,"notify.Inst().SendText(...)"),n("（见 C 节），删除 "),l("code",null,"SendMasterImages"),n(` 调用；新版不再调用
        `),l("code",null,"onWeChatMessage"),n(" / "),l("code",null,"onDingtalkMessage"),n(`，可一并删除。
      `)],-1),n(),l("li",null,[l("code",null,"/auto"),n(" 远端脚本：删除 "),l("code",null,"pusher"),n(" 的 import 和全部调用，"),l("strong",null,"不要"),n(`换成
        `),l("code",null,"notify"),n(`（服务端脚本不再发送指令回执，需要发通知的逻辑放到本地脚本）。
        `),l("code",null,"onWeChatMessage"),n(" / "),l("code",null,"onDingtalkMessage"),n(` 可保留：新版客户端不再调用，旧版客户端仍靠它们响应微信/钉钉指令。
        `),l("code",null,"scripts/*.majsoul"),n(" 样本是给 "),l("code",null,"/auto"),n(` 开发者参考的，但内容按本地脚本写法使用
        `),l("code",null,"notify"),n("，照着它写 "),l("code",null,"/auto"),n(` 脚本时必须删掉通知相关的 import 与调用。
      `)],-1),n(),l("li",null,[l("code",null,"utils.Inst().X()"),n(" → 按 "),l("strong",null,"B1"),n(` 改成
        `),l("code",null,"engineswitch"),n(" / "),l("code",null,"botdispatch"),n(` /
        `),l("code",null,"pagecontrol"),n(" / "),l("code",null,"extension"),n(` 对应的包级函数（去掉
        `),l("code",null,"Inst()."),n(`）。
      `)],-1),n(),l("li",null,[l("code",null,"winmgr"),n(" / "),l("code",null,"huleshowmgr"),n(" / "),l("code",null,"scorechangemgr"),n(` /
        `),l("code",null,"playerinfomgr"),n(" / "),l("code",null,"otherplayerinfomgr"),n(` 等 UI
        状态查询包 → `),l("strong",null,"已随 Unity 迁移移除"),n(`，请删除相关调用，改为基于对局事件流判断状态。
      `)],-1),n(),l("li",null,[l("code",null,"config"),n("、"),l("code",null,"github.com/moxcomic/lq"),n("、"),l("code",null,"github.com/moxcomic/engine/tenhou_client"),n(),l("strong",null,"保持不变"),n(`。
      `)],-1),n(),l("li",null,[n("若用过 "),l("code",null,"userinfo.Inst().IsVaild()"),n("，改为 "),l("code",null,"IsValid()"),n("。")],-1),n(),l("li",null,[n(`
        确认 `),l("code",null,"/auto"),n(" 脚本里没有 import "),l("code",null,"internal/notify"),n(` 下的任何包后，重新部署到
        `),l("code",null,"/auto"),n(" 下发端。"),l("code",null,"scripts/*.majsoul"),n(` 样本按本地脚本写法使用
        `),l("code",null,"notify"),n("，参考它写 "),l("code",null,"/auto"),n(` 脚本时必须删掉通知相关的 import 与调用。
      `)],-1)])]),_:1}),o[68]||(o[68]=n()),u(e,{type:"note"},{default:t(()=>[...o[13]||(o[13]=[n(`
      本地实际加载的脚本 `,-1),l("code",null,"scripts/auto.go",-1),n(` 已随重构同步更新并通过 Go 脚本
      加载测试。远端 `,-1),l("code",null,"/auto",-1),n(` 下发的脚本需要你按本指南更新。
    `,-1)])]),_:1})]),_:1}))}});export{w as default};
