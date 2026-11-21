import{D as u}from"./DocLayout-BdsujQDB.js";import{C as r}from"./CodeBlock-pjahngBj.js";import{A as s}from"./ApiTable-iM2U19hw.js";import{C as a}from"./Callout-C7ZiVbfO.js";import{d as p,c as m,w as l,o as y,a as t,b as e,e as o}from"./app-DUgjU9yL.js";import"./SearchModal-CNNu5HvE.js";const T=p({__name:"open-api",setup(f){const i=[["dahai","Discard the tile in pai. Red fives are 5mr, 5pr, 5sr"],["reach","Declare riichi"],["chi","Chi. kind is where the called tile sits in the run: low, mid or high"],["pon","Pon"],["kan","Kan"],["nuki","Declare the North tile (three-player)"],["hora","Win"],["ryukyoku","Abortive draw (nine terminals)"],["none","Pass (no chi, pon, kan or win)"]],d=[["400","bad_request","The JSON is malformed, a field is missing, or the events are not valid"],["401","invalid_key","No API key, or the key is wrong"],["402","insufficient_balance","The balance is too low"],["403","account_disabled","This account cannot use the API"],["404","unknown_model","No such model, or it is not open"],["413","too_large","The request is too large"],["422","engine_rejected","The engine could not process these events (their order breaks the rules of the game)"],["429","rate_limited","Too many requests, or too many at the same time"],["503","busy","Busy. The response carries Retry-After; retry later"],["504","engine_timeout","The engine did not answer in time; retry later"],["500","internal","Any other error"]];return(k,n)=>(y(),m(u,null,{default:l(()=>[n[8]||(n[8]=t("h1",null,"Open API",-1)),n[9]||(n[9]=e()),n[10]||(n[10]=t("p",{class:"lead"},`
      Call the AI from your own programs: each request carries the events of
      the current round so far, and the answer carries the AI's decision and a
      score for every legal action. Billed by tokens.
    `,-1)),n[11]||(n[11]=e()),n[12]||(n[12]=t("h2",null,"Getting a key",-1)),n[13]||(n[13]=e()),n[14]||(n[14]=t("ul",null,[t("li",null,`
        In Archer, open [Account Info], find the "API" row and click [Create
        key].
      `),e(),t("li",null,"You must bind and verify an email before you can create a key."),e(),t("li",null,`
        The key is shown only once, so copy and save it right away. If you
        lose it, click [Reset key] to get a new one; the old key stops working
        within 30 seconds.
      `)],-1)),n[15]||(n[15]=e()),n[16]||(n[16]=t("h2",null,"Topping up",-1)),n[17]||(n[17]=e()),n[18]||(n[18]=t("ul",null,[t("li",null,`
        Buy Token under [Account Info] → [Top up] in Archer. It is credited
        right after you pay. You can also buy an "API balance card" and redeem
        it under "Redeem Code".
      `),e(),t("li",null,"The balance is counted in tokens."),e(),t("li",null,`
        The API balance is separate from Archer's time and match count. They
        do not affect each other.
      `)],-1)),n[19]||(n[19]=e()),n[20]||(n[20]=t("h2",null,"Request",-1)),n[21]||(n[21]=e()),n[22]||(n[22]=t("p",null,[t("code",null,"POST <API address>/v1/decide"),e(` with the header
      `),t("code",null,"Authorization: Bearer <key>"),e(` and a JSON body. Use the
      API address you were given when you bought the card.
    `)],-1)),n[23]||(n[23]=e()),o(r,{lang:"json"},{default:l(()=>[...n[0]||(n[0]=[e(`{
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
}`,-1)])]),_:1}),n[24]||(n[24]=e()),n[25]||(n[25]=t("ul",null,[t("li",null,[t("code",null,"model"),e(": the model name. Use "),t("code",null,"GET /v1/models"),e(`
        below to list the models you can use.
      `)]),e(),t("li",null,[t("code",null,"seat"),e(`: your own seat, the same number as
        `),t("code",null,"actor"),e(` in the events. 0 to 3 for four-player, 0 to 2 for
        three-player.
      `)]),e(),t("li",null,[t("code",null,"events"),e(`: the mjai events of this round. The first must be
        `),t("code",null,"start_kyoku"),e(`, the last is the event that just happened.
        The server keeps no game state for you, so every request starts from
        `),t("code",null,"start_kyoku"),e(`.
      `)]),e(),t("li",null,[e(`
        Write other players' draws as `),t("code",null,'"?"'),e(`, and their hands in
        `),t("code",null,"start_kyoku"),e(" as 13 "),t("code",null,'"?"'),e(`.
      `)]),e(),t("li",null,[e(`
        Tiles: `),t("code",null,"1m"),e("–"),t("code",null,"9m"),e(", "),t("code",null,"1p"),e("–"),t("code",null,"9p"),e(`,
        `),t("code",null,"1s"),e("–"),t("code",null,"9s"),e("; red fives "),t("code",null,"5mr"),e(`,
        `),t("code",null,"5pr"),e(", "),t("code",null,"5sr"),e("; honors "),t("code",null,"E S W N P F C"),e(`
        (East, South, West, North, White, Green, Red). The North declaration in
        three-player games is a `),t("code",null,"nuki"),e(` event.
      `)]),e(),t("li",null,[e(`
        Limits: the whole request is at most 32 KB, and
        `),t("code",null,"events"),e(` has at most 400 entries.
      `)])],-1)),n[26]||(n[26]=e()),n[27]||(n[27]=t("h2",null,"When to ask",-1)),n[28]||(n[28]=e()),n[29]||(n[29]=t("p",null,"Ask once whenever it is your turn to decide:",-1)),n[30]||(n[30]=e()),n[31]||(n[31]=t("ul",null,[t("li",null,"After you draw a tile."),e(),t("li",null,`
        After another player discards, when you can chi, pon, kan or win.
      `),e(),t("li",null,`
        After your own chi or pon, when you must discard: append the chi or pon
        event and ask again.
      `)],-1)),n[32]||(n[32]=e()),n[33]||(n[33]=t("p",null,[e(`
      You do not need to ask twice for riichi: when the AI decides to declare
      riichi, the answer already carries the tile to discard. Append the real
      `),t("code",null,"reach"),e(", "),t("code",null,"dahai"),e(` and
      `),t("code",null,"reach_accepted"),e(` events as they happen.
    `)],-1)),n[34]||(n[34]=e()),n[35]||(n[35]=t("h2",null,"Answer",-1)),n[36]||(n[36]=e()),o(r,{lang:"json"},{default:l(()=>[...n[1]||(n[1]=[e(`{
  "action": {"type": "dahai", "actor": 0, "pai": "P", "tsumogiri": false},
  "candidates": [
    {"type": "dahai", "pai": "P", "q": 8.062},
    {"type": "dahai", "pai": "9p", "q": 7.921},
    {"type": "dahai", "pai": "4s", "q": 7.473}
  ],
  "usage": {"input_tokens": 102, "output_tokens": 42,
            "billed_tokens": 183, "balance": 9999817}
}`,-1)])]),_:1}),n[37]||(n[37]=e()),n[38]||(n[38]=t("ul",null,[t("li",null,[t("code",null,"action"),e(`: the AI's decision, one mjai action. It is
        `),t("code",null,"null"),e(` when the last event does not need a decision from
        you; then only the input part is deducted.
      `)]),e(),t("li",null,[t("code",null,"next"),e(": present only when "),t("code",null,"action"),e(` is
        `),t("code",null,"reach"),e(`. It is the tile to discard right after declaring.
      `)]),e(),t("li",null,[t("code",null,"candidates"),e(`: one entry per legal action, highest score
        first. `),t("code",null,"q"),e(` is only meaningful within one answer; scores from
        different models cannot be compared. The array is empty when there is
        only one legal action (for example a forced discard after riichi).
      `)]),e(),t("li",null,[t("code",null,"usage"),e(`: input and output tokens, what this request
        deducted (`),t("code",null,"billed_tokens"),e(`) and what is left
        (`),t("code",null,"balance"),e(`). All four are integers, in tokens. The examples
        here use an input rate of 0.8 and an output rate of 2.4: 102 × 0.8 +
        42 × 2.4 = 182.4, rounded up to 183.
      `)])],-1)),n[39]||(n[39]=e()),n[40]||(n[40]=t("p",null,"An answer that declares riichi:",-1)),n[41]||(n[41]=e()),o(r,{lang:"json"},{default:l(()=>[...n[2]||(n[2]=[e(`{
  "action": {"type": "reach", "actor": 0},
  "next": {"type": "dahai", "actor": 0, "pai": "9p", "tsumogiri": false},
  "candidates": [
    {"type": "reach", "q": 8.211},
    {"type": "dahai", "pai": "9p", "q": 7.804}
  ],
  "usage": {"input_tokens": 688, "output_tokens": 37,
            "billed_tokens": 640, "balance": 9999177}
}`,-1)])]),_:1}),n[42]||(n[42]=e()),n[43]||(n[43]=t("p",null,[e("The values of "),t("code",null,"type"),e(" in "),t("code",null,"candidates"),e(":")],-1)),n[44]||(n[44]=e()),o(s,{headers:["type","Meaning"],rows:i}),n[45]||(n[45]=e()),n[46]||(n[46]=t("h2",null,"How tokens are deducted",-1)),n[47]||(n[47]=e()),n[48]||(n[48]=t("ul",null,[t("li",null,[e(`
        Input tokens = the byte length of the compact
        `),t("code",null,"events"),e(` array ÷ 4, rounded up. Remove the extra whitespace
        from your own JSON and you get the same number.
      `)]),e(),t("li",null,[e(`
        Output tokens = the byte length of `),t("code",null,"action"),e(`,
        `),t("code",null,"next"),e(" (if present) and "),t("code",null,"candidates"),e(` in the
        answer ÷ 4, rounded up.
      `)]),e(),t("li",null,[e(`
        Deducted = input tokens × input rate + output tokens × output rate,
        rounded up. Rates differ per model; use
        `),t("code",null,"GET /v1/models"),e(` to read them. By default they are 0.8 and
        2.4 for four-player models, and 1.44 and 4.32 for three-player models.
      `)]),e(),t("li",null,`
        What a game takes depends on its length: more rounds and longer rounds
        take more. A full hanchan takes about 150,000 tokens per seat, for both
        four-player and three-player games.
      `)],-1)),n[49]||(n[49]=e()),o(a,{type:"tip"},{default:l(()=>[...n[3]||(n[3]=[e(`Only successful answers deduct tokens. Error responses never
      do.`,-1)])]),_:1}),n[50]||(n[50]=e()),n[51]||(n[51]=t("h2",null,"Other endpoints",-1)),n[52]||(n[52]=e()),n[53]||(n[53]=t("p",null,[t("code",null,"GET /v1/models"),e(": the models you can use and their rates.")],-1)),n[54]||(n[54]=e()),o(r,{lang:"json"},{default:l(()=>[...n[4]||(n[4]=[e(`{
  "models": [
    {"name": "model-name", "players": 4, "input_rate": "0.8", "output_rate": "2.4"}
  ]
}`,-1)])]),_:1}),n[55]||(n[55]=e()),n[56]||(n[56]=t("p",null,[t("code",null,"GET /v1/balance"),e(": your balance (tokens, an integer).")],-1)),n[57]||(n[57]=e()),o(r,{lang:"json"},{default:l(()=>[...n[5]||(n[5]=[e(`{
  "balance": 9999177
}`,-1)])]),_:1}),n[58]||(n[58]=e()),n[59]||(n[59]=t("p",null,[e("Both need the "),t("code",null,"Authorization"),e(" header as well.")],-1)),n[60]||(n[60]=e()),n[61]||(n[61]=t("h2",null,"Error responses",-1)),n[62]||(n[62]=e()),o(r,{lang:"json"},{default:l(()=>[...n[6]||(n[6]=[e(`{
  "error": {"code": "insufficient_balance", "message": "Insufficient balance"}
}`,-1)])]),_:1}),n[63]||(n[63]=e()),o(s,{headers:["HTTP status","code","Meaning"],rows:d}),n[64]||(n[64]=e()),n[65]||(n[65]=t("ul",null,[t("li",null,[e(`
        Use `),t("code",null,"code"),e(" to tell what happened; "),t("code",null,"message"),e(` is
        for people.
      `)]),e(),t("li",null,`
        You always get a response within 2 seconds: either a decision or one of
        the errors above. On 503 and 504 you can retry later.
      `),e(),t("li",null,[t("code",null,"message"),e(` is in Chinese by default; send
        `),t("code",null,"Accept-Language: en"),e(` to get English.
      `)])],-1)),n[66]||(n[66]=e()),n[67]||(n[67]=t("h2",null,"Example",-1)),n[68]||(n[68]=e()),n[69]||(n[69]=t("p",null,"Using only the Python standard library:",-1)),n[70]||(n[70]=e()),o(r,{lang:"python"},{default:l(()=>[...n[7]||(n[7]=[e(`import json
import os
import urllib.error
import urllib.request

API = os.environ["KAMI_API"]      # the API address
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
