import{D as a}from"./DocLayout-DjDAgGHB.js";import{C as r}from"./CodeBlock-DowRAa96.js";import{A as s}from"./ApiTable-BJ99rfq5.js";import{C as u}from"./Callout-DDJu3J2u.js";import{d as p,c as m,w as l,o as y,a as o,b as e,e as t}from"./app-OIxFl2Zo.js";import"./SearchModal-F9XfAMpa.js";const T=p({__name:"open-api",setup(f){const d=[["dahai","Discard the tile in pai. Red fives are 5mr, 5pr, 5sr"],["reach","Declare riichi"],["chi","Chi. kind is where the called tile sits in the run: low, mid or high"],["pon","Pon"],["kan","Kan"],["nuki","Declare the North tile (three-player)"],["hora","Win"],["ryukyoku","Abortive draw (nine terminals)"],["none","Pass (no chi, pon, kan or win)"]],i=[["400","bad_request","The JSON is malformed, a field is missing, or the events are not valid"],["401","invalid_key","No API key, or the key is wrong"],["402","insufficient_balance","The balance is too low"],["403","account_disabled","This account cannot use the API"],["404","unknown_model","No such model, or it is not open"],["413","too_large","The request is too large"],["422","engine_rejected","The engine could not process these events (their order breaks the rules of the game)"],["429","rate_limited","Too many requests, or too many at the same time"],["503","loading","An on-demand model is loading (see Models below). The response carries Retry-After; retry in a few seconds"],["503","busy","Busy. The response carries Retry-After; retry later"],["504","engine_timeout","The engine did not answer in time; retry later"],["500","internal","Any other error"]];return(g,n)=>(y(),m(a,null,{default:l(()=>[n[8]||(n[8]=o("h1",null,"Open API",-1)),n[9]||(n[9]=e()),n[10]||(n[10]=o("p",{class:"lead"},`
      Call the AI from your own programs: each request carries the events of
      the current round so far, and the answer carries the AI's decision and a
      score for every legal action. Billed by tokens.
    `,-1)),n[11]||(n[11]=e()),n[12]||(n[12]=o("h2",null,"Getting a key",-1)),n[13]||(n[13]=e()),n[14]||(n[14]=o("ul",null,[o("li",null,`
        In Archer, open [Account Info], find the "API" row and click [Create
        key].
      `),e(),o("li",null,"You must bind and verify an email before you can create a key."),e(),o("li",null,`
        The key is shown only once, so copy and save it right away. If you
        lose it, click [Reset key] to get a new one; the old key stops working
        within 30 seconds.
      `)],-1)),n[15]||(n[15]=e()),n[16]||(n[16]=o("h2",null,"Topping up",-1)),n[17]||(n[17]=e()),n[18]||(n[18]=o("ul",null,[o("li",null,`
        Buy Token under [Account Info] → [Top up] in Archer. It is credited
        right after you pay. You can also buy an "API balance card" and redeem
        it under "Redeem Code".
      `),e(),o("li",null,"The balance is counted in tokens."),e(),o("li",null,`
        The API balance is separate from Archer's time and match count. They
        do not affect each other.
      `)],-1)),n[19]||(n[19]=e()),n[20]||(n[20]=o("h2",null,"Request",-1)),n[21]||(n[21]=e()),n[22]||(n[22]=o("p",null,[o("code",null,"POST https://la.moxcomic.com/v1/decide"),e(` with the header
      `),o("code",null,"Authorization: Bearer <key>"),e(` and a JSON body.
    `)],-1)),n[23]||(n[23]=e()),t(r,{lang:"json"},{default:l(()=>[...n[0]||(n[0]=[e(`{
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
}`,-1)])]),_:1}),n[24]||(n[24]=e()),n[25]||(n[25]=o("ul",null,[o("li",null,[o("code",null,"model"),e(": the model name. Use "),o("code",null,"GET /v1/models"),e(`
        below to list the models you can use.
      `)]),e(),o("li",null,[o("code",null,"seat"),e(`: your own seat, the same number as
        `),o("code",null,"actor"),e(` in the events. 0 to 3 for four-player, 0 to 2 for
        three-player.
      `)]),e(),o("li",null,[o("code",null,"events"),e(`: the mjai events of this round. The first must be
        `),o("code",null,"start_kyoku"),e(`, the last is the event that just happened.
        The server keeps no game state for you, so every request starts from
        `),o("code",null,"start_kyoku"),e(`.
      `)]),e(),o("li",null,[e(`
        Write other players' draws as `),o("code",null,'"?"'),e(`, and their hands in
        `),o("code",null,"start_kyoku"),e(" as 13 "),o("code",null,'"?"'),e(`.
      `)]),e(),o("li",null,[e(`
        Tiles: `),o("code",null,"1m"),e("–"),o("code",null,"9m"),e(", "),o("code",null,"1p"),e("–"),o("code",null,"9p"),e(`,
        `),o("code",null,"1s"),e("–"),o("code",null,"9s"),e("; red fives "),o("code",null,"5mr"),e(`,
        `),o("code",null,"5pr"),e(", "),o("code",null,"5sr"),e("; honors "),o("code",null,"E S W N P F C"),e(`
        (East, South, West, North, White, Green, Red). The North declaration in
        three-player games is a `),o("code",null,"nuki"),e(` event.
      `)]),e(),o("li",null,[e(`
        Limits: the whole request is at most 32 KB, and
        `),o("code",null,"events"),e(` has at most 400 entries.
      `)])],-1)),n[26]||(n[26]=e()),n[27]||(n[27]=o("h2",null,"When to ask",-1)),n[28]||(n[28]=e()),n[29]||(n[29]=o("p",null,"Ask once whenever it is your turn to decide:",-1)),n[30]||(n[30]=e()),n[31]||(n[31]=o("ul",null,[o("li",null,"After you draw a tile."),e(),o("li",null,`
        After another player discards, when you can chi, pon, kan or win.
      `),e(),o("li",null,`
        After your own chi or pon, when you must discard: append the chi or pon
        event and ask again.
      `)],-1)),n[32]||(n[32]=e()),n[33]||(n[33]=o("p",null,[e(`
      You do not need to ask twice for riichi: when the AI decides to declare
      riichi, the answer already carries the tile to discard. Append the real
      `),o("code",null,"reach"),e(", "),o("code",null,"dahai"),e(` and
      `),o("code",null,"reach_accepted"),e(` events as they happen.
    `)],-1)),n[34]||(n[34]=e()),n[35]||(n[35]=o("h2",null,"Answer",-1)),n[36]||(n[36]=e()),t(r,{lang:"json"},{default:l(()=>[...n[1]||(n[1]=[e(`{
  "action": {"type": "dahai", "actor": 0, "pai": "P", "tsumogiri": false},
  "candidates": [
    {"type": "dahai", "pai": "P", "q": 8.062},
    {"type": "dahai", "pai": "9p", "q": 7.921},
    {"type": "dahai", "pai": "4s", "q": 7.473}
  ],
  "usage": {"input_tokens": 102, "output_tokens": 42,
            "billed_tokens": 183, "balance": 9999817}
}`,-1)])]),_:1}),n[37]||(n[37]=e()),n[38]||(n[38]=o("ul",null,[o("li",null,[o("code",null,"action"),e(`: the AI's decision, one mjai action. It is
        `),o("code",null,"null"),e(` when the last event does not need a decision from
        you; then only the input part is deducted.
      `)]),e(),o("li",null,[o("code",null,"next"),e(": present only when "),o("code",null,"action"),e(` is
        `),o("code",null,"reach"),e(`. It is the tile to discard right after declaring.
      `)]),e(),o("li",null,[o("code",null,"candidates"),e(`: one entry per legal action, highest score
        first. `),o("code",null,"q"),e(` is only meaningful within one answer; scores from
        different models cannot be compared. The array is empty when there is
        only one legal action (for example a forced discard after riichi).
      `)]),e(),o("li",null,[o("code",null,"usage"),e(`: input and output tokens, what this request
        deducted (`),o("code",null,"billed_tokens"),e(`) and what is left
        (`),o("code",null,"balance"),e(`). All four are integers, in tokens. The examples
        here use an input rate of 0.8 and an output rate of 2.4: 102 × 0.8 +
        42 × 2.4 = 182.4, rounded up to 183.
      `)])],-1)),n[39]||(n[39]=e()),n[40]||(n[40]=o("p",null,"An answer that declares riichi:",-1)),n[41]||(n[41]=e()),t(r,{lang:"json"},{default:l(()=>[...n[2]||(n[2]=[e(`{
  "action": {"type": "reach", "actor": 0},
  "next": {"type": "dahai", "actor": 0, "pai": "9p", "tsumogiri": false},
  "candidates": [
    {"type": "reach", "q": 8.211},
    {"type": "dahai", "pai": "9p", "q": 7.804}
  ],
  "usage": {"input_tokens": 688, "output_tokens": 37,
            "billed_tokens": 640, "balance": 9999177}
}`,-1)])]),_:1}),n[42]||(n[42]=e()),n[43]||(n[43]=o("p",null,[e("The values of "),o("code",null,"type"),e(" in "),o("code",null,"candidates"),e(":")],-1)),n[44]||(n[44]=e()),t(s,{headers:["type","Meaning"],rows:d}),n[45]||(n[45]=e()),n[46]||(n[46]=o("h2",null,"How tokens are deducted",-1)),n[47]||(n[47]=e()),n[48]||(n[48]=o("ul",null,[o("li",null,[e(`
        Input tokens = the byte length of the compact
        `),o("code",null,"events"),e(` array ÷ 4, rounded up. Remove the extra whitespace
        from your own JSON and you get the same number.
      `)]),e(),o("li",null,[e(`
        Output tokens = the byte length of `),o("code",null,"action"),e(`,
        `),o("code",null,"next"),e(" (if present) and "),o("code",null,"candidates"),e(` in the
        answer ÷ 4, rounded up.
      `)]),e(),o("li",null,[e(`
        Deducted = input tokens × input rate + output tokens × output rate,
        rounded up. Rates differ per model; use
        `),o("code",null,"GET /v1/models"),e(` to read them. By default they are 0.8 and
        2.4 for four-player models, and 1.44 and 4.32 for three-player models.
      `)]),e(),o("li",null,`
        What a game takes depends on its length: more rounds and longer rounds
        take more. A full hanchan takes about 150,000 tokens per seat, for both
        four-player and three-player games.
      `)],-1)),n[49]||(n[49]=e()),t(u,{type:"tip"},{default:l(()=>[...n[3]||(n[3]=[e(`Only successful answers deduct tokens. Error responses never
      do.`,-1)])]),_:1}),n[50]||(n[50]=e()),n[51]||(n[51]=o("h2",null,"Models",-1)),n[52]||(n[52]=e()),n[53]||(n[53]=o("p",null,"Every model can be called. The most used ones are always loaded; the others load on demand:",-1)),n[54]||(n[54]=e()),n[55]||(n[55]=o("ul",null,[o("li",null,[e("A model that nobody has used for a while is not in memory. Calling it returns 503 "),o("code",null,"loading"),e(" at once (not charged); retry in a few seconds and you get a decision.")]),e(),o("li",null,"After 10 minutes without use, it is unloaded again."),e(),o("li",null,[e("In "),o("code",null,"GET /v1/models"),e(", the models with "),o("code",null,"on_demand"),e(" set to "),o("code",null,"true"),e(" load on demand.")])],-1)),n[56]||(n[56]=e()),n[57]||(n[57]=o("h2",null,"Other endpoints",-1)),n[58]||(n[58]=e()),n[59]||(n[59]=o("p",null,[o("code",null,"GET /v1/models"),e(": the models you can use, their rates, and whether they load on demand.")],-1)),n[60]||(n[60]=e()),t(r,{lang:"json"},{default:l(()=>[...n[4]||(n[4]=[e(`{
  "models": [
    {"name": "model-name", "players": 4, "input_rate": "0.8", "output_rate": "2.4", "on_demand": false}
  ]
}`,-1)])]),_:1}),n[61]||(n[61]=e()),n[62]||(n[62]=o("p",null,[o("code",null,"GET /v1/balance"),e(": your balance (tokens, an integer).")],-1)),n[63]||(n[63]=e()),t(r,{lang:"json"},{default:l(()=>[...n[5]||(n[5]=[e(`{
  "balance": 9999177
}`,-1)])]),_:1}),n[64]||(n[64]=e()),n[65]||(n[65]=o("p",null,[e("Both need the "),o("code",null,"Authorization"),e(" header as well.")],-1)),n[66]||(n[66]=e()),n[67]||(n[67]=o("h2",null,"Error responses",-1)),n[68]||(n[68]=e()),t(r,{lang:"json"},{default:l(()=>[...n[6]||(n[6]=[e(`{
  "error": {"code": "insufficient_balance", "message": "Insufficient balance"}
}`,-1)])]),_:1}),n[69]||(n[69]=e()),t(s,{headers:["HTTP status","code","Meaning"],rows:i}),n[70]||(n[70]=e()),n[71]||(n[71]=o("ul",null,[o("li",null,[e(`
        Use `),o("code",null,"code"),e(" to tell what happened; "),o("code",null,"message"),e(` is
        for people.
      `)]),e(),o("li",null,`
        You always get a response within 2 seconds: either a decision or one of
        the errors above. On 503 and 504 you can retry later.
      `),e(),o("li",null,[o("code",null,"message"),e(` is in Chinese by default; send
        `),o("code",null,"Accept-Language: en"),e(` to get English.
      `)])],-1)),n[72]||(n[72]=e()),n[73]||(n[73]=o("h2",null,"Example",-1)),n[74]||(n[74]=e()),n[75]||(n[75]=o("p",null,"Using only the Python standard library:",-1)),n[76]||(n[76]=e()),t(r,{lang:"python"},{default:l(()=>[...n[7]||(n[7]=[e(`import json
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
