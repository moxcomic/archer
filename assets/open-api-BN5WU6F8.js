import{D as s}from"./DocLayout-BdsujQDB.js";import{C as e}from"./CodeBlock-pjahngBj.js";import{A as d}from"./ApiTable-iM2U19hw.js";import{C as p}from"./Callout-C7ZiVbfO.js";import{d as m,c as k,w as t,o as a,a as o,b as l,e as u}from"./app-DUgjU9yL.js";import"./SearchModal-CNNu5HvE.js";const T=m({__name:"open-api",setup(y){const r=[["dahai","打出 pai 这张牌。赤牌写 5mr、5pr、5sr"],["reach","立直"],["chi","吃。kind 是被吃的那张在顺子里的位置：low、mid、high"],["pon","碰"],["kan","杠"],["nuki","拔北（三麻）"],["hora","和"],["ryukyoku","九种九牌流局"],["none","不动（不吃、不碰、不杠、不和）"]],i=[["400","bad_request","请求的 JSON 不对、缺字段，或事件不合规矩"],["401","invalid_key","没带密钥，或密钥不对"],["402","insufficient_balance","余额不够"],["403","account_disabled","这个账号不能使用开放接口"],["404","unknown_model","没有这个引擎，或它没有开放"],["413","too_large","请求太大"],["422","engine_rejected","引擎处理不了这串事件（事件的先后不合麻将规则）"],["429","rate_limited","请求太频繁，或同时的请求太多"],["503","busy","现在忙。响应头里带 Retry-After，稍后重试"],["504","engine_timeout","引擎没有按时回答，稍后重试"],["500","internal","别的错误"]];return(f,n)=>(a(),k(s,null,{default:t(()=>[n[8]||(n[8]=o("h1",null,"开放接口",-1)),n[9]||(n[9]=l()),n[10]||(n[10]=o("p",{class:"lead"},`
      给自己写的程序调用 AI 用：每次请求带上这一小局到现在的事件，拿回 AI
      的决定和每个可选动作的评分。按 token 收费。
    `,-1)),n[11]||(n[11]=l()),n[12]||(n[12]=o("h2",null,"拿到密钥",-1)),n[13]||(n[13]=l()),n[14]||(n[14]=o("ul",null,[o("li",null,"在 Archer 的【账号信息】里找到「开放接口」一行，点【生成密钥】。"),l(),o("li",null,"要先绑定并验证邮箱，才能生成密钥。"),l(),o("li",null,`
        密钥只显示一次，请马上复制保存。遗失后只能点【重置密钥】换一把；重置之后旧的密钥最多
        30 秒失效。
      `)],-1)),n[15]||(n[15]=l()),n[16]||(n[16]=o("h2",null,"充值",-1)),n[17]||(n[17]=l()),n[18]||(n[18]=o("ul",null,[o("li",null,`
        在 Archer 的【账号信息】→【充值】里买 Token，付款后立即到账。也可以购买「接口余额卡」，在「兑换码」里兑换。
      `),l(),o("li",null,"余额的单位是 token。"),l(),o("li",null,"接口的余额和 Archer 的时长、场次是分开的，互不影响。")],-1)),n[19]||(n[19]=l()),n[20]||(n[20]=o("h2",null,"请求",-1)),n[21]||(n[21]=l()),n[22]||(n[22]=o("p",null,[o("code",null,"POST <接口地址>/v1/decide"),l(`，请求头带
      `),o("code",null,"Authorization: Bearer <密钥>"),l(`，正文是
      JSON。接口地址以购买时得到的为准。
    `)],-1)),n[23]||(n[23]=l()),u(e,{lang:"json"},{default:t(()=>[...n[0]||(n[0]=[l(`{
  "model": "引擎的名字",
  "seat": 0,
  "events": [
    {"type": "start_kyoku", "bakaze": "E", "dora_marker": "2s", "kyoku": 1,
     "honba": 0, "kyotaku": 0, "oya": 0, "scores": [25000, 25000, 25000, 25000],
     "tehais": [
       ["1m", "2m", "3m", "5m", "5mr", "7p", "8p", "9p", "2s", "3s", "E", "E", "P"],
       ["?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?"],
       ["?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?"],
       ["?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?"]
     ]},
    {"type": "tsumo", "actor": 0, "pai": "4s"}
  ]
}`,-1)])]),_:1}),n[24]||(n[24]=l()),n[25]||(n[25]=o("ul",null,[o("li",null,[o("code",null,"model"),l("：引擎的名字。能用哪些引擎，用下面的 "),o("code",null,"GET /v1/models"),l(" 查。")]),l(),o("li",null,[o("code",null,"seat"),l("：你自己的座位，也就是事件里的 "),o("code",null,"actor"),l(` 编号。四麻是 0 到
        3，三麻是 0 到 2。
      `)]),l(),o("li",null,[o("code",null,"events"),l(`：这一小局的 mjai 事件。第一条必须是
        `),o("code",null,"start_kyoku"),l(`，最后一条是刚发生的那一条。服务器不替你记牌局，每次都要从
        `),o("code",null,"start_kyoku"),l(` 发起。
      `)]),l(),o("li",null,[l(`
        别人摸的牌写 `),o("code",null,'"?"'),l("；"),o("code",null,"start_kyoku"),l(` 里别人的手牌写 13 个
        `),o("code",null,'"?"'),l(`。
      `)]),l(),o("li",null,[l(`
        牌的写法：数牌 `),o("code",null,"1m"),l("–"),o("code",null,"9m"),l("、"),o("code",null,"1p"),l("–"),o("code",null,"9p"),l("、"),o("code",null,"1s"),l("–"),o("code",null,"9s"),l("；赤牌 "),o("code",null,"5mr"),l("、"),o("code",null,"5pr"),l("、"),o("code",null,"5sr"),l(`；字牌
        `),o("code",null,"E S W N P F C"),l("（东南西北白发中）。三麻的拔北是 "),o("code",null,"nuki"),l(` 事件。
      `)]),l(),o("li",null,[l("限制：整个请求不超过 32 KB，"),o("code",null,"events"),l(" 不超过 400 条。")])],-1)),n[26]||(n[26]=l()),n[27]||(n[27]=o("h2",null,"什么时候问",-1)),n[28]||(n[28]=l()),n[29]||(n[29]=o("p",null,"轮到自己拿主意时问一次：",-1)),n[30]||(n[30]=l()),n[31]||(n[31]=o("ul",null,[o("li",null,"自家摸牌之后。"),l(),o("li",null,"别人打牌之后，自己能吃、碰、杠、和时。"),l(),o("li",null,"自己吃、碰之后要打牌时：把吃、碰这条事件接在后面再问。")],-1)),n[32]||(n[32]=l()),n[33]||(n[33]=o("p",null,[l(`
      立直不用问第二次：AI
      决定立直时，回答里已经带着要打出的宣言牌。之后真正发生的
      `),o("code",null,"reach"),l("、"),o("code",null,"dahai"),l("、"),o("code",null,"reach_accepted"),l(`，照常接进事件里。
    `)],-1)),n[34]||(n[34]=l()),n[35]||(n[35]=o("h2",null,"回答",-1)),n[36]||(n[36]=l()),u(e,{lang:"json"},{default:t(()=>[...n[1]||(n[1]=[l(`{
  "action": {"type": "dahai", "actor": 0, "pai": "P", "tsumogiri": false},
  "candidates": [
    {"type": "dahai", "pai": "P", "q": 8.062},
    {"type": "dahai", "pai": "9p", "q": 7.921},
    {"type": "dahai", "pai": "4s", "q": 7.473}
  ],
  "usage": {"input_tokens": 102, "output_tokens": 42,
            "billed_tokens": 183, "balance": 9999817}
}`,-1)])]),_:1}),n[37]||(n[37]=l()),n[38]||(n[38]=o("ul",null,[o("li",null,[o("code",null,"action"),l(`：AI 的决定，一条 mjai
        动作。最后一条事件不需要你拿主意时是 `),o("code",null,"null"),l(`，这时只扣输入的那一部分。
      `)]),l(),o("li",null,[o("code",null,"next"),l("：只在 "),o("code",null,"action"),l(" 是 "),o("code",null,"reach"),l(`
        时有，是紧接着要打出的宣言牌。
      `)]),l(),o("li",null,[o("code",null,"candidates"),l("：每个可选的动作一项，按评分从高到低。"),o("code",null,"q"),l(`
        只在同一次回答里比大小有意义，不同的引擎之间不能比。只有一个可选动作时（比如立直之后只能摸切）是空数组。
      `)]),l(),o("li",null,[o("code",null,"usage"),l("：这次的输入、输出 token 数，这次扣的（"),o("code",null,"billed_tokens"),l("）和剩下的余额（"),o("code",null,"balance"),l(`）。四个都是整数，单位是
        token。上面的例子按输入倍率 0.8、输出倍率 2.4 算：102 × 0.8 + 42 × 2.4 = 182.4，向上取整是 183。
      `)])],-1)),n[39]||(n[39]=l()),n[40]||(n[40]=o("p",null,"立直时的回答：",-1)),n[41]||(n[41]=l()),u(e,{lang:"json"},{default:t(()=>[...n[2]||(n[2]=[l(`{
  "action": {"type": "reach", "actor": 0},
  "next": {"type": "dahai", "actor": 0, "pai": "9p", "tsumogiri": false},
  "candidates": [
    {"type": "reach", "q": 8.211},
    {"type": "dahai", "pai": "9p", "q": 7.804}
  ],
  "usage": {"input_tokens": 688, "output_tokens": 37,
            "billed_tokens": 640, "balance": 9999177}
}`,-1)])]),_:1}),n[42]||(n[42]=l()),n[43]||(n[43]=o("p",null,[o("code",null,"candidates"),l(" 里 "),o("code",null,"type"),l(" 的含义：")],-1)),n[44]||(n[44]=l()),u(d,{headers:["type","含义"],rows:r}),n[45]||(n[45]=l()),n[46]||(n[46]=o("h2",null,"怎么扣",-1)),n[47]||(n[47]=l()),n[48]||(n[48]=o("ul",null,[o("li",null,[l(`
        输入 token = 压紧后的 `),o("code",null,"events"),l(` 数组的字节数 ÷
        4，向上取整。把你自己的 JSON 去掉多余的空白，就能算出同一个数。
      `)]),l(),o("li",null,[l(`
        输出 token = 回答里 `),o("code",null,"action"),l("、"),o("code",null,"next"),l(`（有的话）和
        `),o("code",null,"candidates"),l(` 三部分的字节数之和 ÷ 4，向上取整。
      `)]),l(),o("li",null,[l(`
        这次扣的 = 输入 token × 输入倍率 + 输出 token ×
        输出倍率，向上取整。倍率每个引擎各有各的，用
        `),o("code",null,"GET /v1/models"),l(` 查。四麻引擎默认是 0.8 和 2.4，三麻引擎默认是 1.44 和 4.32。
      `)]),l(),o("li",null,`
        一局扣多少跟这一局的长短有关：小局多、每小局打得久，就多一些。一个完整的半庄，一家大约 15 万
        token，四麻三麻差不多。
      `)],-1)),n[49]||(n[49]=l()),u(p,{type:"tip"},{default:t(()=>[...n[3]||(n[3]=[l("只有成功的回答才扣。出错的回答一律不扣。",-1)])]),_:1}),n[50]||(n[50]=l()),n[51]||(n[51]=o("h2",null,"别的接口",-1)),n[52]||(n[52]=l()),n[53]||(n[53]=o("p",null,[o("code",null,"GET /v1/models"),l("：能用的引擎和倍率。")],-1)),n[54]||(n[54]=l()),u(e,{lang:"json"},{default:t(()=>[...n[4]||(n[4]=[l(`{
  "models": [
    {"name": "引擎的名字", "players": 4, "input_rate": "0.8", "output_rate": "2.4"}
  ]
}`,-1)])]),_:1}),n[55]||(n[55]=l()),n[56]||(n[56]=o("p",null,[o("code",null,"GET /v1/balance"),l("：余额（token，整数）。")],-1)),n[57]||(n[57]=l()),u(e,{lang:"json"},{default:t(()=>[...n[5]||(n[5]=[l(`{
  "balance": 9999177
}`,-1)])]),_:1}),n[58]||(n[58]=l()),n[59]||(n[59]=o("p",null,[l("这两个接口同样要带 "),o("code",null,"Authorization"),l(" 请求头。")],-1)),n[60]||(n[60]=l()),n[61]||(n[61]=o("h2",null,"出错时的回答",-1)),n[62]||(n[62]=l()),u(e,{lang:"json"},{default:t(()=>[...n[6]||(n[6]=[l(`{
  "error": {"code": "insufficient_balance", "message": "余额不足"}
}`,-1)])]),_:1}),n[63]||(n[63]=l()),u(d,{headers:["HTTP 状态","code","含义"],rows:i}),n[64]||(n[64]=l()),n[65]||(n[65]=o("ul",null,[o("li",null,[l("请以 "),o("code",null,"code"),l(" 为准判断出了什么事；"),o("code",null,"message"),l(" 是给人看的。")]),l(),o("li",null,`
        2 秒内一定有回答：要么是决定，要么是上面的某一种错误。遇到 503、504
        可以稍后重试。
      `),l(),o("li",null,[o("code",null,"message"),l(" 默认是中文；请求头带 "),o("code",null,"Accept-Language: en"),l(`
        时是英文。
      `)])],-1)),n[66]||(n[66]=l()),n[67]||(n[67]=o("h2",null,"例子",-1)),n[68]||(n[68]=l()),n[69]||(n[69]=o("p",null,"只用 Python 标准库：",-1)),n[70]||(n[70]=l()),u(e,{lang:"python"},{default:t(()=>[...n[7]||(n[7]=[l(`import json
import os
import urllib.error
import urllib.request

API = os.environ["KAMI_API"]      # 接口地址
KEY = os.environ["KAMI_API_KEY"]  # 密钥


def decide(model, seat, events):
    payload = dict(model=model, seat=seat, events=events)
    body = json.dumps(payload, separators=(",", ":")).encode()
    req = urllib.request.Request(API + "/v1/decide", data=body, method="POST")
    req.add_header("Authorization", "Bearer " + KEY)
    req.add_header("Content-Type", "application/json")
    try:
        with urllib.request.urlopen(req, timeout=5) as resp:
            return json.load(resp)
    except urllib.error.HTTPError as e:
        return json.load(e)  # 出错时的回答也是 JSON


answer = decide("引擎的名字", 0, events)  # events: 这一小局到现在的事件
print(answer.get("action"), answer.get("usage"), answer.get("error"))`,-1)])]),_:1})]),_:1}))}});export{T as default};
