import{_ as s,c as a,a as i,o as e}from"./app-DiFr21go.js";const l={};function t(c,n){return e(),a("div",null,[...n[0]||(n[0]=[i(`<h1 id="代码" tabindex="-1"><a class="header-anchor" href="#代码"><span>代码</span></a></h1><div class="language-golang line-numbers-mode" data-highlighter="prismjs" data-ext="golang"><pre><code class="language-golang"><span class="line">package main</span>
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
<span class="line">	E_PlayOperation_Discard        // 弃牌</span>
<span class="line">	E_PlayOperation_Chi            // 吃</span>
<span class="line">	E_PlayOperation_Pon            // 碰</span>
<span class="line">	E_PlayOperation_Ankan          // 暗杠</span>
<span class="line">	E_PlayOperation_Minkan         // 明杠</span>
<span class="line">	E_PlayOperation_Kakan          // 加杠</span>
<span class="line">	E_PlayOperation_RiiChi         // 立直</span>
<span class="line">	E_PlayOperation_Tsumo          // 自摸</span>
<span class="line">	E_PlayOperation_Ron            // 和</span>
<span class="line">	E_PlayOperation_JiuZhongJiuPai // 九种九牌</span>
<span class="line">	E_PlayOperation_Babei          // 拔北</span>
<span class="line">	E_PlayOperation_HuanSanZhang   // 换三张</span>
<span class="line">	E_PlayOperation_DingQue        // 定缺</span>
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
<span class="line">		fmt.Println(&quot;剩余场次不足, 不再进行匹配&quot;)</span>
<span class="line">		return</span>
<span class="line">	}</span>
<span class="line"></span>
<span class="line">	if variable.Inst().GetInt(&quot;ju&quot;) &gt;= 1 {</span>
<span class="line">		fmt.Println(&quot;结束&quot;)</span>
<span class="line">		variable.Inst().SetVar(&quot;isEndMatch&quot;, true)</span>
<span class="line">		tenhouclient.Inst().Close()</span>
<span class="line">		return</span>
<span class="line">	}</span>
<span class="line"></span>
<span class="line">	if gamestate.Inst().IsInSyncGame() {</span>
<span class="line">		fmt.Println(&quot;可能网络不太稳定, 暂停&quot;)</span>
<span class="line">		tenhouclient.Inst().Close()</span>
<span class="line">		return</span>
<span class="line">	}</span>
<span class="line"></span>
<span class="line">	tenhouclient.Inst().Lobby(ROOM_ID)</span>
<span class="line">	fmt.Println(&quot;进入大厅&quot;)</span>
<span class="line"></span>
<span class="line">	var err error</span>
<span class="line">	for err = dispatch(); err != nil; err = dispatch() {</span>
<span class="line">		fmt.Println(&quot;召唤失败, 10秒后重试:&quot;, err)</span>
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
<span class="line">		fmt.Println(&quot;不能和&quot;)</span>
<span class="line">	}</span>
<span class="line"></span>
<span class="line">	onExecuteTarget(target, result.GetShanten())</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">func onExecuteTarget(target *lq.AIResult, shanten uint32) {</span>
<span class="line">	if variable.Inst().GetBool(&quot;isEndKyoku&quot;) &amp;&amp; target.GetType() != E_PlayOperation_Ron {</span>
<span class="line">		fmt.Println(&quot;对局结束, 取消操作&quot;)</span>
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
<span class="line">			fmt.Println(&quot;预约&quot;)</span>
<span class="line">		}</span>
<span class="line">	}</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">func onGameEnd() {</span>
<span class="line">    variable.Inst().SetVar(&quot;isEndGame&quot;, true)</span>
<span class="line">    variable.Inst().SetVar(&quot;OnceLobby&quot;, false)</span>
<span class="line">    fmt.Println(&quot;顺位:&quot;, gamestate.Inst().GetRanking()+1)</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)])])}const d=s(l,[["render",t]]),v=JSON.parse('{"path":"/zh/tenhou/basic-room-mortal.html","title":"在天凤个室与Mortal对局","lang":"zh-CN","frontmatter":{"title":"在天凤个室与Mortal对局"},"git":{},"filePathRelative":"zh/tenhou/basic-room-mortal.md"}');export{d as comp,v as data};
