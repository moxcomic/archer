import{D as a}from"./DocLayout-Cy023TMr.js";import{C as r}from"./CodeBlock-D7cm0o65.js";import{A as s}from"./ApiTable-b32vfFf1.js";import{C as u}from"./Callout-B5WvqD2r.js";import{d as p,c as m,w as l,o as y,a as o,b as n,e as t}from"./app-BvQ_gCmN.js";import"./SearchModal-BjwB1Ld2.js";const T=p({__name:"open-api",setup(f){const d=[["dahai","Discard the tile in pai. Red fives are 5mr, 5pr, 5sr"],["reach","Declare riichi"],["chi","Chi. kind is where the called tile sits in the run: low, mid or high"],["pon","Pon"],["kan","Kan"],["nuki","Declare the North tile (three-player)"],["hora","Win"],["ryukyoku","Abortive draw (nine terminals)"],["none","Pass (no chi, pon, kan or win)"]],i=[["400","bad_request","The JSON is malformed, a field is missing, or the events are not valid"],["401","invalid_key","No API key, or the key is wrong"],["402","insufficient_balance","The balance is too low"],["403","account_disabled","This account cannot use the API"],["404","unknown_model","No such model, or it is not open"],["413","too_large","The request is too large"],["422","engine_rejected","The engine could not process these events (their order breaks the rules of the game)"],["429","rate_limited","Too many requests, or too many at the same time"],["429","cold_start_limited","Too many offline models woken up in the last minute (at most 3 per key per minute). The response carries Retry-After; retry later"],["503","loading","An on-demand model is loading (see Models below). The response carries Retry-After; retry in a few seconds"],["503","busy","Busy. The response carries Retry-After; retry later"],["504","engine_timeout","The engine did not answer in time; retry later"],["500","internal","Any other error"]];return(g,e)=>(y(),m(a,null,{default:l(()=>[e[8]||(e[8]=o("h1",null,"Open API",-1)),e[9]||(e[9]=n()),e[10]||(e[10]=o("p",{class:"lead"},`
      Call the AI from your own programs: each request carries the events of
      the current round so far, and the answer carries the AI's decision and a
      score for every legal action. Billed by tokens.
    `,-1)),e[11]||(e[11]=n()),e[12]||(e[12]=o("h2",null,"Getting a key",-1)),e[13]||(e[13]=n()),e[14]||(e[14]=o("ul",null,[o("li",null,`
        In Archer, open [Account Info], find the "API" row and click [Create
        key].
      `),n(),o("li",null,"You must bind and verify an email before you can create a key."),n(),o("li",null,`
        The key is shown only once, so copy and save it right away. If you
        lose it, click [Reset key] to get a new one; the old key stops working
        within 30 seconds.
      `)],-1)),e[15]||(e[15]=n()),e[16]||(e[16]=o("h2",null,"Topping up",-1)),e[17]||(e[17]=n()),e[18]||(e[18]=o("ul",null,[o("li",null,`
        Buy Token under [Account Info] → [Top up] in Archer. It is credited
        right after you pay. You can also buy an "API balance card" and redeem
        it under "Redeem Code".
      `),n(),o("li",null,"The balance is counted in tokens."),n(),o("li",null,`
        The API balance is separate from Archer's time and match count. They
        do not affect each other.
      `)],-1)),e[19]||(e[19]=n()),e[20]||(e[20]=o("h2",null,"Request",-1)),e[21]||(e[21]=n()),e[22]||(e[22]=o("p",null,[o("code",null,"POST https://la.moxcomic.com/v1/decide"),n(` with the header
      `),o("code",null,"Authorization: Bearer <key>"),n(` and a JSON body.
    `)],-1)),e[23]||(e[23]=n()),t(r,{lang:"json"},{default:l(()=>[...e[0]||(e[0]=[n(`{
  "model": "model-name",
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
}`,-1)])]),_:1}),e[24]||(e[24]=n()),e[25]||(e[25]=o("ul",null,[o("li",null,[o("code",null,"model"),n(": the model name. Use "),o("code",null,"GET /v1/models"),n(`
        below to list the models you can use.
      `)]),n(),o("li",null,[o("code",null,"seat"),n(`: your own seat, the same number as
        `),o("code",null,"actor"),n(` in the events. 0 to 3 for four-player, 0 to 2 for
        three-player.
      `)]),n(),o("li",null,[o("code",null,"events"),n(`: the mjai events of this round. The first must be
        `),o("code",null,"start_kyoku"),n(`, the last is the event that just happened.
        The server keeps no game state for you, so every request starts from
        `),o("code",null,"start_kyoku"),n(`.
      `)]),n(),o("li",null,[n(`
        Write other players' draws as `),o("code",null,'"?"'),n(`, and their hands in
        `),o("code",null,"start_kyoku"),n(" as 13 "),o("code",null,'"?"'),n(`.
      `)]),n(),o("li",null,[n(`
        Tiles: `),o("code",null,"1m"),n("–"),o("code",null,"9m"),n(", "),o("code",null,"1p"),n("–"),o("code",null,"9p"),n(`,
        `),o("code",null,"1s"),n("–"),o("code",null,"9s"),n("; red fives "),o("code",null,"5mr"),n(`,
        `),o("code",null,"5pr"),n(", "),o("code",null,"5sr"),n("; honors "),o("code",null,"E S W N P F C"),n(`
        (East, South, West, North, White, Green, Red). The North declaration in
        three-player games is a `),o("code",null,"nuki"),n(` event.
      `)]),n(),o("li",null,[n(`
        Limits: the whole request is at most 32 KB, and
        `),o("code",null,"events"),n(` has at most 400 entries.
      `)])],-1)),e[26]||(e[26]=n()),e[27]||(e[27]=o("h2",null,"When to ask",-1)),e[28]||(e[28]=n()),e[29]||(e[29]=o("p",null,"Ask once whenever it is your turn to decide:",-1)),e[30]||(e[30]=n()),e[31]||(e[31]=o("ul",null,[o("li",null,"After you draw a tile."),n(),o("li",null,`
        After another player discards, when you can chi, pon, kan or win.
      `),n(),o("li",null,`
        After your own chi or pon, when you must discard: append the chi or pon
        event and ask again.
      `)],-1)),e[32]||(e[32]=n()),e[33]||(e[33]=o("p",null,[n(`
      You do not need to ask twice for riichi: when the AI decides to declare
      riichi, the answer already carries the tile to discard. Append the real
      `),o("code",null,"reach"),n(", "),o("code",null,"dahai"),n(` and
      `),o("code",null,"reach_accepted"),n(` events as they happen.
    `)],-1)),e[34]||(e[34]=n()),e[35]||(e[35]=o("h2",null,"Answer",-1)),e[36]||(e[36]=n()),t(r,{lang:"json"},{default:l(()=>[...e[1]||(e[1]=[n(`{
  "action": {"type": "dahai", "actor": 0, "pai": "P", "tsumogiri": false},
  "candidates": [
    {"type": "dahai", "pai": "P", "q": 8.062},
    {"type": "dahai", "pai": "9p", "q": 7.921},
    {"type": "dahai", "pai": "4s", "q": 7.473}
  ],
  "usage": {"input_tokens": 102, "output_tokens": 42,
            "billed_tokens": 183, "balance": 9999817}
}`,-1)])]),_:1}),e[37]||(e[37]=n()),e[38]||(e[38]=o("ul",null,[o("li",null,[o("code",null,"action"),n(`: the AI's decision, one mjai action. It is
        `),o("code",null,"null"),n(` when the last event does not need a decision from
        you; then only the input part is deducted.
      `)]),n(),o("li",null,[o("code",null,"next"),n(": present only when "),o("code",null,"action"),n(` is
        `),o("code",null,"reach"),n(`. It is the tile to discard right after declaring.
      `)]),n(),o("li",null,[o("code",null,"candidates"),n(`: one entry per legal action, highest score
        first. `),o("code",null,"q"),n(` is only meaningful within one answer; scores from
        different models cannot be compared. The array is empty when there is
        only one legal action (for example a forced discard after riichi).
      `)]),n(),o("li",null,[o("code",null,"usage"),n(`: input and output tokens, what this request
        deducted (`),o("code",null,"billed_tokens"),n(`) and what is left
        (`),o("code",null,"balance"),n(`). All four are integers, in tokens. The examples
        here use an input rate of 0.8 and an output rate of 2.4: 102 × 0.8 +
        42 × 2.4 = 182.4, rounded up to 183.
      `)])],-1)),e[39]||(e[39]=n()),e[40]||(e[40]=o("p",null,"An answer that declares riichi:",-1)),e[41]||(e[41]=n()),t(r,{lang:"json"},{default:l(()=>[...e[2]||(e[2]=[n(`{
  "action": {"type": "reach", "actor": 0},
  "next": {"type": "dahai", "actor": 0, "pai": "9p", "tsumogiri": false},
  "candidates": [
    {"type": "reach", "q": 8.211},
    {"type": "dahai", "pai": "9p", "q": 7.804}
  ],
  "usage": {"input_tokens": 688, "output_tokens": 37,
            "billed_tokens": 640, "balance": 9999177}
}`,-1)])]),_:1}),e[42]||(e[42]=n()),e[43]||(e[43]=o("p",null,[n("The values of "),o("code",null,"type"),n(" in "),o("code",null,"candidates"),n(":")],-1)),e[44]||(e[44]=n()),t(s,{headers:["type","Meaning"],rows:d}),e[45]||(e[45]=n()),e[46]||(e[46]=o("h2",null,"How tokens are deducted",-1)),e[47]||(e[47]=n()),e[48]||(e[48]=o("ul",null,[o("li",null,[n(`
        Input tokens = the byte length of the compact
        `),o("code",null,"events"),n(` array ÷ 4, rounded up. Remove the extra whitespace
        from your own JSON and you get the same number.
      `)]),n(),o("li",null,[n(`
        Output tokens = the byte length of `),o("code",null,"action"),n(`,
        `),o("code",null,"next"),n(" (if present) and "),o("code",null,"candidates"),n(` in the
        answer ÷ 4, rounded up.
      `)]),n(),o("li",null,[n(`
        Deducted = input tokens × input rate + output tokens × output rate,
        rounded up. Rates differ per model; use
        `),o("code",null,"GET /v1/models"),n(` to read them. By default they are 0.8 and
        2.4 for four-player models, and 1.44 and 4.32 for three-player models.
      `)]),n(),o("li",null,`
        What a game takes depends on its length: more rounds and longer rounds
        take more. A full hanchan takes about 150,000 tokens per seat, for both
        four-player and three-player games.
      `)],-1)),e[49]||(e[49]=n()),t(u,{type:"tip"},{default:l(()=>[...e[3]||(e[3]=[n(`Only successful answers deduct tokens. Error responses never
      do.`,-1)])]),_:1}),e[50]||(e[50]=n()),e[51]||(e[51]=o("h2",null,"Models",-1)),e[52]||(e[52]=n()),e[53]||(e[53]=o("p",null,"Every model can be called. The most used ones are always loaded; the others load on demand:",-1)),e[54]||(e[54]=n()),e[55]||(e[55]=o("ul",null,[o("li",null,[n("A model that nobody has used for a while is not in memory. Calling it returns 503 "),o("code",null,"loading"),n(" at once (not charged). Usually a retry a few seconds later gets a decision; when many rarely used models are in use at once, or the server is short of memory, it can take longer.")]),n(),o("li",null,"A model nobody uses is unloaded after at most 10 minutes; when the server is short of memory, or room is needed for another model, it is unloaded sooner."),n(),o("li",null,[n("Each key can wake up at most 3 different offline models per minute (retrying the same model does not count again). Beyond that you get 429 "),o("code",null,"cold_start_limited"),n(" (not charged); retry later.")]),n(),o("li",null,[n("In "),o("code",null,"GET /v1/models"),n(", the models with "),o("code",null,"on_demand"),n(" set to "),o("code",null,"true"),n(" load on demand.")])],-1)),e[56]||(e[56]=n()),e[57]||(e[57]=o("h2",null,"Other endpoints",-1)),e[58]||(e[58]=n()),e[59]||(e[59]=o("p",null,[o("code",null,"GET /v1/models"),n(": the models you can use, their rates, and whether they load on demand.")],-1)),e[60]||(e[60]=n()),t(r,{lang:"json"},{default:l(()=>[...e[4]||(e[4]=[n(`{
  "models": [
    {"name": "model-name", "players": 4, "input_rate": "0.8", "output_rate": "2.4", "on_demand": false}
  ]
}`,-1)])]),_:1}),e[61]||(e[61]=n()),e[62]||(e[62]=o("p",null,[o("code",null,"GET /v1/balance"),n(": your balance (tokens, an integer).")],-1)),e[63]||(e[63]=n()),t(r,{lang:"json"},{default:l(()=>[...e[5]||(e[5]=[n(`{
  "balance": 9999177
}`,-1)])]),_:1}),e[64]||(e[64]=n()),e[65]||(e[65]=o("p",null,[n("Both need the "),o("code",null,"Authorization"),n(" header as well.")],-1)),e[66]||(e[66]=n()),e[67]||(e[67]=o("h2",null,"Error responses",-1)),e[68]||(e[68]=n()),t(r,{lang:"json"},{default:l(()=>[...e[6]||(e[6]=[n(`{
  "error": {"code": "insufficient_balance", "message": "Insufficient balance"}
}`,-1)])]),_:1}),e[69]||(e[69]=n()),t(s,{headers:["HTTP status","code","Meaning"],rows:i}),e[70]||(e[70]=n()),e[71]||(e[71]=o("ul",null,[o("li",null,[n(`
        Use `),o("code",null,"code"),n(" to tell what happened; "),o("code",null,"message"),n(` is
        for people.
      `)]),n(),o("li",null,`
        You always get a response within 2 seconds: either a decision or one of
        the errors above. On 503 and 504 you can retry later.
      `),n(),o("li",null,[o("code",null,"message"),n(` is in Chinese by default; send
        `),o("code",null,"Accept-Language: en"),n(` to get English.
      `)])],-1)),e[72]||(e[72]=n()),e[73]||(e[73]=o("h2",null,"Example",-1)),e[74]||(e[74]=n()),e[75]||(e[75]=o("p",null,"Using only the Python standard library:",-1)),e[76]||(e[76]=n()),t(r,{lang:"python"},{default:l(()=>[...e[7]||(e[7]=[n(`import json
import os
import urllib.error
import urllib.request

API = os.environ.get("KAMI_API", "https://la.moxcomic.com")  # the API address
KEY = os.environ["KAMI_API_KEY"]  # your key


def decide(model, seat, events):
    payload = dict(model=model, seat=seat, events=events)
    body = json.dumps(payload, separators=(",", ":")).encode()
    req = urllib.request.Request(API + "/v1/decide", data=body, method="POST")
    req.add_header("Authorization", "Bearer " + KEY)
    req.add_header("Content-Type", "application/json")
    req.add_header("Accept-Language", "en")
    try:
        with urllib.request.urlopen(req, timeout=5) as resp:
            return json.load(resp)
    except urllib.error.HTTPError as e:
        return json.load(e)  # error responses are JSON too


answer = decide("model-name", 0, events)  # events: this round so far
print(answer.get("action"), answer.get("usage"), answer.get("error"))`,-1)])]),_:1})]),_:1}))}});export{T as default};
