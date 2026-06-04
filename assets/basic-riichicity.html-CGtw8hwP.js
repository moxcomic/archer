import{_ as e,c as a,a as s,o as i}from"./app-C3UIaQTF.js";const t={};function l(d,n){return i(),a("div",null,[...n[0]||(n[0]=[s(`<h1 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h1><ul><li>To use this package, you need to enable <code>【Auto Settings】-&gt; 【Built-in Mode】</code>.</li><li>In Riichi City, declaring Riichi is not a standalone action; it is embedded in the discard (a discard with a Riichi declaration), so use the <code>Riichi</code> method.</li><li>Tile names use the same string representation as Majsoul: <code>1m</code>-<code>9m</code> (man), <code>1p</code>-<code>9p</code> (pin), <code>1s</code>-<code>9s</code> (sou), <code>1z</code>-<code>7z</code> (honors); red fives are <code>0m</code> / <code>0p</code> / <code>0s</code>.</li></ul><h1 id="package-name" tabindex="-1"><a class="header-anchor" href="#package-name"><span>Package Name</span></a></h1><ul><li><code>actions</code></li></ul><h1 id="import" tabindex="-1"><a class="header-anchor" href="#import"><span>Import</span></a></h1><ul><li><code>import &quot;github.com/moxcomic/Archer/internal/platform/actions&quot;</code></li></ul><h1 id="interface-methods" tabindex="-1"><a class="header-anchor" href="#interface-methods"><span>Interface Methods</span></a></h1><table><thead><tr><th>Name</th><th>Parameters</th><th>Return Value</th><th>Notes</th></tr></thead><tbody><tr><td>NewRiichiCityActions</td><td>None</td><td>*actions.RiichiCityActions</td><td>Riichi City interface instance</td></tr></tbody></table><h1 id="instance-methods" tabindex="-1"><a class="header-anchor" href="#instance-methods"><span>Instance Methods</span></a></h1><table><thead><tr><th>Name</th><th>Parameters</th><th>Return Value</th><th>Notes</th></tr></thead><tbody><tr><td>Discard</td><td>tile: string, tsumogiri: bool</td><td>None</td><td>Discard a tile, <code>tile</code> is the tile name, <code>tsumogiri</code> indicates if it&#39;s the last drawn tile</td></tr><tr><td>Riichi</td><td>tile: string, tsumogiri: bool</td><td>None</td><td>Declare Riichi (a discard with a Riichi declaration), <code>tile</code> is the discarded tile, <code>tsumogiri</code> as above</td></tr><tr><td>Chii</td><td>calledTile: string, consumed: []string</td><td>None</td><td>Chii, <code>calledTile</code> is the called tile, <code>consumed</code> are the two hand tiles forming the run</td></tr><tr><td>Pon</td><td>calledTile: string, consumed: []string</td><td>None</td><td>Pon, <code>calledTile</code> is the called tile, <code>consumed</code> are the two hand tiles used for Pon</td></tr><tr><td>Daimingkan</td><td>calledTile: string, consumed: []string</td><td>None</td><td>Daimingkan, <code>calledTile</code> is the called tile, <code>consumed</code> are the three hand tiles</td></tr><tr><td>Ankan</td><td>tile: string</td><td>None</td><td>Ankan, <code>tile</code> is the tile name</td></tr><tr><td>Kakan</td><td>tile: string</td><td>None</td><td>Kakan, <code>tile</code> is the newly added tile name</td></tr><tr><td>Tsumo</td><td>None</td><td>None</td><td>Tsumo (Self-draw win)</td></tr><tr><td>Ron</td><td>None</td><td>None</td><td>Ron (Win by discard)</td></tr><tr><td>Ryukyoku</td><td>None</td><td>None</td><td>Nine Terminal Tiles (abortive draw)</td></tr><tr><td>Babei</td><td>None</td><td>None</td><td>Execute Babei</td></tr><tr><td>Cancel</td><td>None</td><td>None</td><td>Cancel or skip (do not call)</td></tr></tbody></table><h1 id="full-example-script" tabindex="-1"><a class="header-anchor" href="#full-example-script"><span>Full Example Script</span></a></h1><ul><li>Consistent with Majsoul/Tenhou: in the <code>onExecute</code> callback you receive the AI&#39;s recommended result and dispatch by action type to the corresponding <code>RiichiCityActions</code> method.</li><li>For <code>lq.NotifyAIResult</code>, see <a href="/archer/en/auto/majsoul/lq/basic-lq">NotifyAIResult</a></li><li>For <code>GetType</code>, see <a href="/archer/en/auto/majsoul/action_type/basic-action-type">Action Types</a></li></ul><div class="language-golang line-numbers-mode" data-highlighter="prismjs" data-ext="golang"><pre><code class="language-golang"><span class="line">package main</span>
<span class="line"></span>
<span class="line">import (</span>
<span class="line">	&quot;fmt&quot;</span>
<span class="line">	&quot;math/rand&quot;</span>
<span class="line">	&quot;time&quot;</span>
<span class="line"></span>
<span class="line">	&quot;github.com/moxcomic/Archer/internal/platform/actions&quot;</span>
<span class="line">	&quot;github.com/moxcomic/lq&quot;</span>
<span class="line">)</span>
<span class="line"></span>
<span class="line">const (</span>
<span class="line">	E_PlayOperation_None           = iota</span>
<span class="line">	E_PlayOperation_Discard        // Discard</span>
<span class="line">	E_PlayOperation_Chi            // Chii</span>
<span class="line">	E_PlayOperation_Pon            // Pon</span>
<span class="line">	E_PlayOperation_Ankan          // Ankan</span>
<span class="line">	E_PlayOperation_Minkan         // Daimingkan</span>
<span class="line">	E_PlayOperation_Kakan          // Kakan</span>
<span class="line">	E_PlayOperation_RiiChi         // Riichi</span>
<span class="line">	E_PlayOperation_Tsumo          // Tsumo</span>
<span class="line">	E_PlayOperation_Ron            // Ron</span>
<span class="line">	E_PlayOperation_JiuZhongJiuPai // Nine Terminal Tiles</span>
<span class="line">	E_PlayOperation_Babei          // Babei</span>
<span class="line">)</span>
<span class="line"></span>
<span class="line">func onExecute(result *lq.NotifyAIResult, risk []float64, r, m, f, t float64) {</span>
<span class="line">	if len(result.GetResult()) == 0 {</span>
<span class="line">		return</span>
<span class="line">	}</span>
<span class="line"></span>
<span class="line">	onExecuteTarget(result.GetResult()[0], result.GetShanten())</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">func onExecuteTarget(target *lq.AIResult, shanten uint32) {</span>
<span class="line">	action := actions.NewRiichiCityActions()</span>
<span class="line"></span>
<span class="line">	// Human-like delay: discard (your own turn, plenty of time) is longer; calls/wins</span>
<span class="line">	// (the server has a response time limit) are shorter to avoid missing the window.</span>
<span class="line">	delay := 250 + rand.Intn(350)</span>
<span class="line">	switch target.GetType() {</span>
<span class="line">	case E_PlayOperation_Discard, E_PlayOperation_RiiChi:</span>
<span class="line">		delay = 700 + rand.Intn(900)</span>
<span class="line">	}</span>
<span class="line">	time.Sleep(time.Millisecond * time.Duration(delay))</span>
<span class="line"></span>
<span class="line">	switch target.GetType() {</span>
<span class="line">	case E_PlayOperation_Discard:</span>
<span class="line">		action.Discard(target.GetTile(), target.GetMoqie())</span>
<span class="line">	case E_PlayOperation_RiiChi:</span>
<span class="line">		action.Riichi(target.GetTile(), target.GetMoqie())</span>
<span class="line">	case E_PlayOperation_Chi:</span>
<span class="line">		action.Chii(target.GetTile(), target.GetCombination())</span>
<span class="line">	case E_PlayOperation_Pon:</span>
<span class="line">		action.Pon(target.GetTile(), target.GetCombination())</span>
<span class="line">	case E_PlayOperation_Minkan:</span>
<span class="line">		action.Daimingkan(target.GetTile(), target.GetCombination())</span>
<span class="line">	case E_PlayOperation_Ankan:</span>
<span class="line">		if len(target.GetCombination()) &gt; 0 {</span>
<span class="line">			action.Ankan(target.GetCombination()[0])</span>
<span class="line">		}</span>
<span class="line">	case E_PlayOperation_Kakan:</span>
<span class="line">		action.Kakan(target.GetTile())</span>
<span class="line">	case E_PlayOperation_Tsumo:</span>
<span class="line">		action.Tsumo()</span>
<span class="line">	case E_PlayOperation_Ron:</span>
<span class="line">		action.Ron()</span>
<span class="line">	case E_PlayOperation_JiuZhongJiuPai:</span>
<span class="line">		action.Ryukyoku()</span>
<span class="line">	case E_PlayOperation_Babei:</span>
<span class="line">		action.Babei()</span>
<span class="line">	case E_PlayOperation_None, 321:</span>
<span class="line">		action.Cancel()</span>
<span class="line">	default:</span>
<span class="line">		fmt.Println(&quot;RiichiCity: unhandled action type:&quot;, target.GetType())</span>
<span class="line">	}</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="example-code" tabindex="-1"><a class="header-anchor" href="#example-code"><span>Example Code</span></a></h1><div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go"><pre><code class="language-go"><span class="line">actions<span class="token punctuation">.</span><span class="token function">NewRiichiCityActions</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Discard</span><span class="token punctuation">(</span><span class="token string">&quot;1m&quot;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,15)])])}const o=e(t,[["render",l]]),r=JSON.parse('{"path":"/en/auto/riichicity/basic-riichicity.html","title":"Basic","lang":"en-US","frontmatter":{"title":"Basic"},"git":{},"filePathRelative":"en/auto/riichicity/basic-riichicity.md"}');export{o as comp,r as data};
