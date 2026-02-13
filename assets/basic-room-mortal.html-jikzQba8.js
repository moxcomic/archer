import{_ as s,c as a,a as i,o as e}from"./app-DiFr21go.js";const l={};function t(c,n){return e(),a("div",null,[...n[0]||(n[0]=[i(`<h1 id="code" tabindex="-1"><a class="header-anchor" href="#code"><span>Code</span></a></h1><div class="language-golang line-numbers-mode" data-highlighter="prismjs" data-ext="golang"><pre><code class="language-golang"><span class="line">package main</span>
<span class="line"></span>
<span class="line">import (</span>
<span class="line">	&quot;fmt&quot;</span>
<span class="line">	&quot;github.com/moxcomic/Archer/utils&quot;</span>
<span class="line">	&quot;os&quot;</span>
<span class="line">	&quot;strconv&quot;</span>
<span class="line">	&quot;time&quot;</span>
<span class="line"></span>
<span class="line">	&quot;github.com/moxcomic/Archer/gamestate&quot;</span>
<span class="line">	&quot;github.com/moxcomic/Archer/userinfo&quot;</span>
<span class="line">	&quot;github.com/moxcomic/Archer/variable&quot;</span>
<span class="line">	tenhouclient &quot;github.com/moxcomic/engine/tenhou_client&quot;</span>
<span class="line">	&quot;github.com/moxcomic/lq&quot;</span>
<span class="line">)</span>
<span class="line"></span>
<span class="line">const (</span>
<span class="line">	E_PlayOperation_None           = iota</span>
<span class="line">	E_PlayOperation_Discard        // Discard</span>
<span class="line">	E_PlayOperation_Chi            // Chii</span>
<span class="line">	E_PlayOperation_Pon            // Pon</span>
<span class="line">	E_PlayOperation_Ankan          // Concealed Kong</span>
<span class="line">	E_PlayOperation_Minkan         // Melded Kong</span>
<span class="line">	E_PlayOperation_Kakan          // Added Kong</span>
<span class="line">	E_PlayOperation_RiiChi         // Riichi</span>
<span class="line">	E_PlayOperation_Tsumo          // Tsumo</span>
<span class="line">	E_PlayOperation_Ron            // Ron</span>
<span class="line">	E_PlayOperation_JiuZhongJiuPai // Nine Terminals</span>
<span class="line">	E_PlayOperation_Babei          // Babei</span>
<span class="line">	E_PlayOperation_HuanSanZhang   // Exchange Three Tiles</span>
<span class="line">	E_PlayOperation_DingQue        // Set Suit</span>
<span class="line">	E_PlayOperation_Reveal</span>
<span class="line">	E_PlayOperation_Unveil</span>
<span class="line">	E_PlayOperation_LockTile</span>
<span class="line">	E_PlayOperation_Revealliqi</span>
<span class="line">)</span>
<span class="line"></span>
<span class="line">const ROOM_ID = 1253</span>
<span class="line"></span>
<span class="line">func dispatch() error {</span>
<span class="line">	return utils.Inst().DispatchBot(1000, 20, strconv.Itoa(ROOM_ID), &quot;high&quot;, &quot;4.1b&quot;, &quot;4.1b&quot;, &quot;4.1b&quot;)</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">func onLogin() {</span>
<span class="line">	if userinfo.Inst().ExpireTime().Before(time.Now()) &amp;&amp; userinfo.Inst().MatchCount() &lt;= 0 {</span>
<span class="line">		fmt.Println(&quot;Insufficient sessions remaining, match will not continue&quot;)</span>
<span class="line">		return</span>
<span class="line">	}</span>
<span class="line"></span>
<span class="line">	if variable.Inst().GetInt(&quot;ju&quot;) &gt;= 1 {</span>
<span class="line">		fmt.Println(&quot;End of session&quot;)</span>
<span class="line">		variable.Inst().SetVar(&quot;isEndMatch&quot;, true)</span>
<span class="line">		tenhouclient.Inst().Close()</span>
<span class="line">		return</span>
<span class="line">	}</span>
<span class="line"></span>
<span class="line">	if gamestate.Inst().IsInSyncGame() {</span>
<span class="line">		fmt.Println(&quot;Potential network instability, pausing&quot;)</span>
<span class="line">		tenhouclient.Inst().Close()</span>
<span class="line">		return</span>
<span class="line">	}</span>
<span class="line"></span>
<span class="line">	tenhouclient.Inst().Lobby(ROOM_ID)</span>
<span class="line">	fmt.Println(&quot;Entered lobby&quot;)</span>
<span class="line"></span>
<span class="line">	var err error</span>
<span class="line">	for err = dispatch(); err != nil; err = dispatch() {</span>
<span class="line">		fmt.Println(&quot;Summoning failed, retrying in 10 seconds:&quot;, err)</span>
<span class="line">		&lt;-time.After(time.Millisecond * 10e3)</span>
<span class="line">	}</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">func onTaikyoku() {</span>
<span class="line">	variable.Inst().SetVar(&quot;ju&quot;, variable.Inst().GetInt(&quot;ju&quot;)+1)</span>
<span class="line">	variable.Inst().SetVar(&quot;isEndGame&quot;, false)</span>
<span class="line">	variable.Inst().SetVar(&quot;isEndKyoku&quot;, false)</span>
<span class="line">	&lt;-time.After(time.Second)</span>
<span class="line">	tenhouclient.Inst().ConfirmNewRound()</span>
<span class="line"></span>
<span class="line">	if f, err := os.OpenFile(&quot;paipus.mortal.log&quot;, os.O_CREATE|os.O_WRONLY|os.O_APPEND, os.ModePerm); err == nil {</span>
<span class="line">		f.WriteString(fmt.Sprintf(&quot;https://tenhou.net/3/?log=%s&amp;tw=%d\\n&quot;, gamestate.Inst().Uuid(), gamestate.Inst().Tw()))</span>
<span class="line">		f.Close()</span>
<span class="line">	}</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">func onNewRound() {</span>
<span class="line">	variable.Inst().SetVar(&quot;isEndKyoku&quot;, false)</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">func onRoundEnd() {</span>
<span class="line">	variable.Inst().SetVar(&quot;isEndKyoku&quot;, true)</span>
<span class="line"></span>
<span class="line">	&lt;-time.After(time.Second)</span>
<span class="line">	tenhouclient.Inst().ConfirmNewRound()</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">func onExecute(result *lq.NotifyAIResult, risk []float64, r, m, f, t float64) {</span>
<span class="line">	fmt.Println(&quot;shanten:&quot;, result.GetShanten())</span>
<span class="line"></span>
<span class="line">	target := result.GetResult()[0]</span>
<span class="line">	if gamestate.Inst().IsLiqi3() &amp;&amp; (target.GetType() == E_PlayOperation_Tsumo || target.GetType() == E_PlayOperation_Ron) &amp;&amp; !gamestate.Inst().IsCanWin() {</span>
<span class="line">		target = result.GetResult()[1]</span>
<span class="line">		fmt.Println(&quot;Cannot win&quot;)</span>
<span class="line">	}</span>
<span class="line"></span>
<span class="line">	onExecuteTarget(target, result.GetShanten())</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">func onExecuteTarget(target *lq.AIResult, shanten uint32) {</span>
<span class="line">	if variable.Inst().GetBool(&quot;isEndKyoku&quot;) &amp;&amp; target.GetType() != E_PlayOperation_Ron {</span>
<span class="line">		fmt.Println(&quot;End of round, cancelling operation&quot;)</span>
<span class="line">		return</span>
<span class="line">	}</span>
<span class="line"></span>
<span class="line">	hand := gamestate.Inst().HandTile()</span>
<span class="line">	if len(hand) &gt; 0 &amp;&amp; target.GetTile() == hand[len(hand)-1] {</span>
<span class="line">		if !gamestate.Inst().IsSelfChiPon() {</span>
<span class="line">			target.Moqie = true</span>
<span class="line">		}</span>
<span class="line">	}</span>
<span class="line"></span>
<span class="line">	switch target.GetType() {</span>
<span class="line">	case E_PlayOperation_Discard:</span>
<span class="line">		tenhouclient.Inst().ActionDiscard(target.GetTile(), target.GetMoqie(), gamestate.Inst().Riichi()[0])</span>
<span class="line">	case E_PlayOperation_Chi:</span>
<span class="line">		tenhouclient.Inst().ActionChi(target.GetCombination()[0], target.GetCombination()[1])</span>
<span class="line">	case E_PlayOperation_Babei:</span>
<span class="line">		tenhouclient.Inst().ActionBabei()</span>
<span class="line">	case E_PlayOperation_Pon:</span>
<span class="line">		tenhouclient.Inst().ActionPon(target.GetCombination()[0], target.GetCombination()[1])</span>
<span class="line">	case E_PlayOperation_Ankan:</span>
<span class="line">		tenhouclient.Inst().ActionAnkan(target.GetCombination()[0])</span>
<span class="line">	case E_PlayOperation_Minkan:</span>
<span class="line">		tenhouclient.Inst().ActionMinkan()</span>
<span class="line">	case E_PlayOperation_Kakan:</span>
<span class="line">		tenhouclient.Inst().ActionKakan(target.GetCombination()[0])</span>
<span class="line">	case E_PlayOperation_RiiChi:</span>
<span class="line">		if gamestate.Inst().IsLiqi3() &amp;&amp; gamestate.Inst().LeftTileCount() &lt; 4 {</span>
<span class="line">			tenhouclient.Inst().ActionDiscard(target.GetTile(), target.GetMoqie(), gamestate.Inst().Riichi()[0])</span>
<span class="line">			return</span>
<span class="line">		}</span>
<span class="line"></span>
<span class="line">		tenhouclient.Inst().ActionReach()</span>
<span class="line">	case E_PlayOperation_Tsumo:</span>
<span class="line">		tenhouclient.Inst().ActionTsumo()</span>
<span class="line">	case E_PlayOperation_Ron:</span>
<span class="line">		switch {</span>
<span class="line">		case tenhouclient.Inst().State.IsTsumo():</span>
<span class="line">			tenhouclient.Inst().ActionTsumo()</span>
<span class="line">		default:</span>
<span class="line">			tenhouclient.Inst().ActionRon()</span>
<span class="line">		}</span>
<span class="line">	case E_PlayOperation_JiuZhongJiuPai:</span>
<span class="line">		tenhouclient.Inst().ActionRyuukyoku()</span>
<span class="line">	case E_PlayOperation_None, 321:</span>
<span class="line">		tenhouclient.Inst().ActionCancel()</span>
<span class="line">	}</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">func onLN(values ...int) {</span>
<span class="line">	fmt.Printf(&quot;values: %v\\n&quot;, values)</span>
<span class="line"></span>
<span class="line">	if ROOM_ID &gt; 0 &amp;&amp; len(values) &gt;= 3 {</span>
<span class="line">		once := variable.Inst().GetBool(&quot;OnceLobby&quot;)</span>
<span class="line">		if !once &amp;&amp; !variable.Inst().GetBool(&quot;isEndMatch&quot;) {</span>
<span class="line">			tenhouclient.Inst().ActionYuYue(ROOM_ID, 9)</span>
<span class="line">			variable.Inst().SetVar(&quot;OnceLobby&quot;, true)</span>
<span class="line">			fmt.Println(&quot;Reserved&quot;)</span>
<span class="line">		}</span>
<span class="line">	}</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">func onGameEnd() {</span>
<span class="line">    variable.Inst().SetVar(&quot;isEndGame&quot;, true)</span>
<span class="line">    variable.Inst().SetVar(&quot;OnceLobby&quot;, false)</span>
<span class="line">    fmt.Println(&quot;Ranking:&quot;, gamestate.Inst().GetRanking()+1)</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)])])}const d=s(l,[["render",t]]),r=JSON.parse('{"path":"/en/tenhou/basic-room-mortal.html","title":"Playing in Tenhou Private Room with Mortal Bot","lang":"en-US","frontmatter":{"title":"Playing in Tenhou Private Room with Mortal Bot"},"git":{},"filePathRelative":"en/tenhou/basic-room-mortal.md"}');export{d as comp,r as data};
