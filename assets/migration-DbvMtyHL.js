import{D as d}from"./DocLayout-Z6fF55KA.js";import{C as i}from"./Callout-CuVa0Jv4.js";import{C as r}from"./CodeBlock-eokTsjGl.js";import{A as e}from"./ApiTable-LA1EB5s9.js";import{S as m}from"./Steps-BsE2Sbdf.js";import{d as s,c as g,w as t,o as c,a as l,b as n,e as u}from"./app-Br24ngHW.js";import"./SearchModal-DrGZg8Bd.js";const B=s({__name:"migration",setup(p){return(a,o)=>(c(),g(d,null,{default:t(()=>[o[11]||(o[11]=l("h1",null,"脚本包路径迁移指南",-1)),o[12]||(o[12]=n()),o[13]||(o[13]=l("p",{class:"lead"},[n(`
      通过 `),l("code",null,"/auto"),n(" 接口下发"),l("strong",null,"远端 Go 脚本"),n(`的开发者，以及维护本地
      `),l("code",null,"scripts/*.majsoul"),n(` 样本的人，都需要按本指南更新脚本里的 import 路径。
    `)],-1)),o[14]||(o[14]=n()),u(i,{type:"note"},{default:t(()=>[...o[0]||(o[0]=[l("p",null,[l("strong",null,"适用对象"),n("：通过 "),l("code",null,"/auto"),n(" 接口下发"),l("strong",null,`远端
        Go 脚本`),n("的开发者，以及维护本地 "),l("code",null,"scripts/*.majsoul"),n(`
        样本的人。
      `)],-1),n(),l("p",null,[n(`
        本次重构把脚本可见的 Go 包搬进了 `),l("code",null,"internal/"),n(" 分层目录。"),l("strong",null,`你脚本里的
        import 路径需要更新`),n(`，否则 Go 脚本在加载/运行时会报
        `),l("code",null,"unable to find source"),n(" / "),l("code",null,"undefined symbol"),n(`。
      `)],-1)])]),_:1}),o[15]||(o[15]=n()),u(i,{type:"warning"},{default:t(()=>[...o[1]||(o[1]=[n(`
      ⚠️ `,-1),l("strong",null,"2026 更新（雀魂 Unity 迁移）",-1),n(`：雀魂网页版改用 Unity + WASM
      后，所有查询 LayaBox UI 状态的“管理器”包已被`,-1),l("strong",null,"整体移除",-1),n("：",-1),l("code",null,"lobbymgr",-1),n("、",-1),l("code",null,"desktopmgr",-1),n("、",-1),l("code",null,"infomgr",-1),n("、",-1),l("code",null,"gameendmgr",-1),n("、",-1),l("code",null,"activitymgr",-1),n("、",-1),l("code",null,"activitysignmgr",-1),n("、",-1),l("code",null,"monthlymgr",-1),n("、",-1),l("code",null,"countdown",-1),n("、",-1),l("code",null,"playerinfo",-1),n(`。它们依赖的
      LayaBox 引擎 JS 全局对象在 Unity 下不存在。`,-1),l("strong",null,`下文 A 表中的这些 widget
      行、以及 B2 / B3 小节均已失效，请勿再使用`,-1),n(`；游戏状态判断请改为基于对局
      protobuf 事件流推导。其余包（`,-1),l("code",null,"gamestate",-1),n(" / ",-1),l("code",null,"userinfo",-1),n(` /
      `,-1),l("code",null,"variable",-1),n(" / ",-1),l("code",null,"actions",-1),n(" / ",-1),l("code",null,"pusher",-1),n(` 等）与
      `,-1),l("code",null,"utils",-1),n(` 拆分（B1）不受影响。
    `,-1)])]),_:1}),o[16]||(o[16]=n()),o[17]||(o[17]=l("h2",null,"一句话总结",-1)),o[18]||(o[18]=n()),o[19]||(o[19]=l("ul",null,[l("li",null,[l("strong",null,"绝大多数包：只改 import 路径"),n("，"),l("code",null,"包名.Inst().方法()"),n(`
        的调用写法`),l("strong",null,"完全不变"),n(`。
      `)]),n(),l("li",null,[l("strong",null,[l("code",null,"utils"),n(" 拆成 4 个包")]),n("（去掉 "),l("code",null,".Inst()"),n(`，改用包级函数，见
        B1）。（原先合并出的 `),l("code",null,"countdown"),n(" / "),l("code",null,"playerinfo"),n(` 等 UI
        状态查询包已随 Unity 迁移移除，见上方提示。）
      `)]),n(),l("li",null,[l("strong",null,"方法名一律不变"),n("。"),l("code",null,"config"),n(` 路径不变。引擎包
        `),l("code",null,"github.com/moxcomic/lq"),n("、"),l("code",null,"github.com/moxcomic/engine/tenhou_client"),n(`
        不受影响。
      `)])],-1)),o[20]||(o[20]=n()),o[21]||(o[21]=l("h2",null,"为什么会变",-1)),o[22]||(o[22]=n()),o[23]||(o[23]=l("p",null,[n(`
      Go 脚本解释器靠一张 symbols 符号表把脚本里的 import 路径映射到真实的 Go
      包。重构后这些包的物理位置（import 路径）变了，symbols 表已随之同步更新；但`),l("strong",null,`你脚本里写死的
      import 路径需要你手动改`),n(`——路径对不上，解释器
      找不到对应符号，就会在加载或运行时报错。
    `)],-1)),o[24]||(o[24]=n()),o[25]||(o[25]=l("h2",null,"A. 只改 import 路径（调用写法不变）",-1)),o[26]||(o[26]=n()),u(e,null,{default:t(()=>[...o[2]||(o[2]=[l("thead",null,[l("tr",null,[l("th",null,"旧 import"),n(),l("th",null,"新 import")])],-1),n(),l("tbody",null,[l("tr",null,[l("td",null,[l("code",null,"github.com/moxcomic/Archer/gamestate")]),n(),l("td",null,[l("code",null,"github.com/moxcomic/Archer/internal/domain/gamestate")])]),n(),l("tr",null,[l("td",null,[l("code",null,"github.com/moxcomic/Archer/userinfo")]),n(),l("td",null,[l("code",null,"github.com/moxcomic/Archer/internal/infra/userinfo")])]),n(),l("tr",null,[l("td",null,[l("code",null,"github.com/moxcomic/Archer/variable")]),n(),l("td",null,[l("code",null,"github.com/moxcomic/Archer/internal/infra/variable")])]),n(),l("tr",null,[l("td",null,[l("code",null,"github.com/moxcomic/Archer/actions")]),n(),l("td",null,[l("code",null,"github.com/moxcomic/Archer/internal/platform/actions")])]),n(),l("tr",null,[l("td",null,[l("code",null,"github.com/moxcomic/Archer/pusher")]),n(),l("td",null,[l("code",null,"github.com/moxcomic/Archer/internal/notify/pusher")])]),n(),l("tr",null,[l("td",null,[l("code",null,"github.com/moxcomic/Archer/audio")]),n(),l("td",null,[l("code",null,"github.com/moxcomic/Archer/internal/ui/audio")])]),n(),l("tr",null,[l("td",null,[l("code",null,"github.com/moxcomic/Archer/discord")]),n(),l("td",null,[l("code",null,"github.com/moxcomic/Archer/internal/notify/discord")])]),n(),l("tr",null,[l("td",null,[l("code",null,"github.com/moxcomic/Archer/telegram")]),n(),l("td",null,[l("code",null,"github.com/moxcomic/Archer/internal/notify/telegram")])]),n(),l("tr",null,[l("td",null,[l("code",null,"github.com/moxcomic/Archer/wechat")]),n(),l("td",null,[l("code",null,"github.com/moxcomic/Archer/internal/notify/wechat")])])],-1)])]),_:1}),o[27]||(o[27]=n()),u(i,{type:"note"},{default:t(()=>[...o[3]||(o[3]=[l("p",null,[l("code",null,"github.com/moxcomic/Archer/config"),n(),l("strong",null,"保持不变"),n(`（仍是顶层公开包）。
      `)],-1),n(),l("p",null,[n(`
        ⚠️ `),l("code",null,"userinfo"),n(" 的方法 "),l("code",null,"IsVaild"),n(` 已更名为
        `),l("code",null,"IsValid"),n(`（修正拼写）。如果你的脚本调用过
        `),l("code",null,".IsVaild()"),n("，请改为 "),l("code",null,".IsValid()"),n(`；其余方法名一律不变。
      `)],-1)])]),_:1}),o[28]||(o[28]=n()),o[29]||(o[29]=l("p",null,"调用写法不变，举例：",-1)),o[30]||(o[30]=n()),u(r,{lang:"golang"},{default:t(()=>[...o[4]||(o[4]=[n(`
// 只改了上面 import 的那一行，下面的调用一字不动
gamestate.Inst().GetHandTile()
variable.Inst().GetInt("ju")
actions.NewMajsoulActions()
pusher.Inst().SendMasterText("...")
    `,-1)])]),_:1}),o[31]||(o[31]=n()),o[32]||(o[32]=l("h2",null,"B. 调用写法也变了（拆包 / 合并）",-1)),o[33]||(o[33]=n()),o[34]||(o[34]=l("h3",null,[n("B1. "),l("code",null,"utils"),n(" 拆成 4 个包（去掉 "),l("code",null,".Inst()"),n("）")],-1)),o[35]||(o[35]=n()),o[36]||(o[36]=l("p",null,[n(`
      原来的 `),l("code",null,"utils.Inst().X(...)"),n(" 现在改成对应包的"),l("strong",null,"包级函数"),n(),l("code",null,"pkg.X(...)"),n(`：
    `)],-1)),o[37]||(o[37]=n()),u(e,null,{default:t(()=>[...o[5]||(o[5]=[l("thead",null,[l("tr",null,[l("th",null,"旧调用"),n(),l("th",null,"新 import"),n(),l("th",null,"新调用")])],-1),n(),l("tbody",null,[l("tr",null,[l("td",null,[l("code",null,"utils.Inst().ChangeEngine(...)"),l("br"),n(),l("code",null,"utils.Inst().ChangeMainIndex(...)")]),n(),l("td",null,[l("code",null,"github.com/moxcomic/Archer/internal/platformutil/engineswitch")]),n(),l("td",null,[l("code",null,"engineswitch.ChangeEngine(...)"),l("br"),n(),l("code",null,"engineswitch.ChangeMainIndex(...)")])]),n(),l("tr",null,[l("td",null,[l("code",null,"utils.Inst().DispatchBot(...)"),l("br"),n(),l("code",null,"utils.Inst().DispatchBotGateway(...)")]),n(),l("td",null,[l("code",null,"github.com/moxcomic/Archer/internal/platformutil/botdispatch")]),n(),l("td",null,[l("code",null,"botdispatch.DispatchBot(...)"),l("br"),n(),l("code",null,"botdispatch.DispatchBotGateway(...)")])]),n(),l("tr",null,[l("td",null,[l("code",null,"utils.Inst().MouseMove(...)"),n(" / "),l("code",null,"MouseClick()"),n(` /
            `),l("code",null,"Screenshot(...)"),n(" / "),l("code",null,"SetMarker(...)"),n(` /
            `),l("code",null,"SetMarkerForPage(...)"),n(" / "),l("code",null,"SetMouseMarker(...)")]),n(),l("td",null,[l("code",null,"github.com/moxcomic/Archer/internal/platformutil/pagecontrol")]),n(),l("td",null,[l("code",null,"pagecontrol.MouseMove(...)"),n(" 等（去掉 "),l("code",null,"Inst()."),n("）")])]),n(),l("tr",null,[l("td",null,[l("code",null,"utils.Inst().Polarity(...)")]),n(),l("td",null,[l("code",null,"github.com/moxcomic/Archer/internal/platformutil/extension")]),n(),l("td",null,[l("code",null,"extension.Polarity(...)")])])],-1)])]),_:1}),o[38]||(o[38]=n()),o[39]||(o[39]=l("h3",null,[n("B2 / B3. 倒计时（"),l("code",null,"countdown"),n("）与玩家信息（"),l("code",null,"playerinfo"),n("）—— 已移除")],-1)),o[40]||(o[40]=n()),u(i,{type:"warning"},{default:t(()=>[...o[6]||(o[6]=[n(`
      ⚠️ 这两套 UI 状态查询包随雀魂 Unity 迁移已被移除（见顶部说明），不再提供。原先的
      `,-1),l("code",null,"winmgr",-1),n(" / ",-1),l("code",null,"huleshowmgr",-1),n(" / ",-1),l("code",null,"scorechangemgr",-1),n(` /
      `,-1),l("code",null,"playerinfomgr",-1),n(" / ",-1),l("code",null,"otherplayerinfomgr",-1),n(`
      一并失效。请改为从对局 protobuf 事件流推导相应状态。
    `,-1)])]),_:1}),o[41]||(o[41]=n()),o[42]||(o[42]=l("h2",null,"完整示例：天凤个室脚本迁移前后",-1)),o[43]||(o[43]=n()),o[44]||(o[44]=l("p",null,[n("迁移前（旧路径 + 旧 "),l("code",null,"utils"),n(" 调用）：")],-1)),o[45]||(o[45]=n()),u(r,{lang:"golang"},{default:t(()=>[...o[7]||(o[7]=[n(`
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
    `,-1)])]),_:1}),o[46]||(o[46]=n()),o[47]||(o[47]=l("p",null,"迁移后：",-1)),o[48]||(o[48]=n()),u(r,{lang:"golang"},{default:t(()=>[...o[8]||(o[8]=[n(`
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
    `,-1)])]),_:1}),o[49]||(o[49]=n()),o[50]||(o[50]=l("p",null,[l("code",null,"gamestate.Inst()"),n(" / "),l("code",null,"userinfo.Inst()"),n(` /
      `),l("code",null,"variable.Inst()"),n(" / "),l("code",null,"tenhouclient.Inst()"),n(`
      等调用一字未动——只有 import 行和 `),l("code",null,"utils.Inst().DispatchBot"),n(`
      这一处调用变了。
    `)],-1)),o[51]||(o[51]=n()),o[52]||(o[52]=l("h2",null,"迁移检查清单",-1)),o[53]||(o[53]=n()),u(m,null,{default:t(()=>[...o[9]||(o[9]=[l("li",null,[n(`
        把脚本里所有 `),l("code",null,"github.com/moxcomic/Archer/<X>"),n(` 的 import 按
        `),l("strong",null,"A 表"),n("替换为 "),l("code",null,"internal/..."),n(` 路径。
      `)],-1),n(),l("li",null,[l("code",null,"utils.Inst().X()"),n(" → 按 "),l("strong",null,"B1"),n(` 改成
        `),l("code",null,"engineswitch"),n(" / "),l("code",null,"botdispatch"),n(` /
        `),l("code",null,"pagecontrol"),n(" / "),l("code",null,"extension"),n(` 对应的包级函数（去掉
        `),l("code",null,"Inst()."),n(`）。
      `)],-1),n(),l("li",null,[l("code",null,"winmgr"),n(" / "),l("code",null,"huleshowmgr"),n(" / "),l("code",null,"scorechangemgr"),n(` /
        `),l("code",null,"playerinfomgr"),n(" / "),l("code",null,"otherplayerinfomgr"),n(` 等 UI
        状态查询包 → `),l("strong",null,"已随 Unity 迁移移除"),n(`，请删除相关调用，改为基于对局事件流判断状态。
      `)],-1),n(),l("li",null,[l("code",null,"config"),n("、"),l("code",null,"github.com/moxcomic/lq"),n("、"),l("code",null,"github.com/moxcomic/engine/tenhou_client"),n(),l("strong",null,"保持不变"),n(`。
      `)],-1),n(),l("li",null,[n("若用过 "),l("code",null,"userinfo.Inst().IsVaild()"),n("，改为 "),l("code",null,"IsValid()"),n("。")],-1),n(),l("li",null,[n(`
        重新部署到 `),l("code",null,"/auto"),n(` 下发端。本地样本
        `),l("code",null,"scripts/auto.majsoul"),n(` 已同步更新，可作参考。
      `)],-1)])]),_:1}),o[54]||(o[54]=n()),u(i,{type:"note"},{default:t(()=>[...o[10]||(o[10]=[n(`
      本地实际加载的脚本 `,-1),l("code",null,"scripts/auto.go",-1),n(` 已随重构同步更新并通过 Go 脚本
      加载测试。远端 `,-1),l("code",null,"/auto",-1),n(` 下发的脚本需要你按本指南更新。
    `,-1)])]),_:1})]),_:1}))}});export{B as default};
