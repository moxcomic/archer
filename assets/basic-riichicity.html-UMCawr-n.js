import{_ as s,c as a,a as i,o as e}from"./app-C3UIaQTF.js";const t={};function l(d,n){return e(),a("div",null,[...n[0]||(n[0]=[i(`<h1 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项"><span>注意事项</span></a></h1><ul><li>使用该包需要开启 <code>【自动设置】-&gt; 【内建模式】</code></li><li>麻雀一番街的立直并非独立动作，而是内嵌在打牌中（带立直声明的弃牌），因此立直通过 <code>Riichi</code> 方法发出。</li><li>牌名沿用与雀魂一致的字符串表示：<code>1m</code>-<code>9m</code>（万）、<code>1p</code>-<code>9p</code>（筒）、<code>1s</code>-<code>9s</code>（索）、<code>1z</code>-<code>7z</code>（字牌），赤五用 <code>0m</code> / <code>0p</code> / <code>0s</code>。</li></ul><h1 id="包名" tabindex="-1"><a class="header-anchor" href="#包名"><span>包名</span></a></h1><ul><li><code>actions</code></li></ul><h1 id="引用方式" tabindex="-1"><a class="header-anchor" href="#引用方式"><span>引用方式</span></a></h1><ul><li><code>import &quot;github.com/moxcomic/Archer/internal/platform/actions&quot;</code></li></ul><h1 id="接口方法" tabindex="-1"><a class="header-anchor" href="#接口方法"><span>接口方法</span></a></h1><table><thead><tr><th>名称</th><th>参数</th><th>返回值</th><th>备注</th></tr></thead><tbody><tr><td>NewRiichiCityActions</td><td>无</td><td>*actions.RiichiCityActions</td><td>一番街接口实例</td></tr></tbody></table><h1 id="实例方法" tabindex="-1"><a class="header-anchor" href="#实例方法"><span>实例方法</span></a></h1><table><thead><tr><th>名称</th><th>参数</th><th>返回值</th><th>备注</th></tr></thead><tbody><tr><td>Discard</td><td>tile: string, tsumogiri: bool</td><td>无</td><td>弃牌, tile为牌名, tsumogiri为是否为刚摸来的最后一张牌（摸切）</td></tr><tr><td>Riichi</td><td>tile: string, tsumogiri: bool</td><td>无</td><td>立直, 即带立直声明的弃牌, tile为打出的牌, tsumogiri同上</td></tr><tr><td>Chii</td><td>calledTile: string, consumed: []string</td><td>无</td><td>吃, calledTile为被吃的牌, consumed为手中组成顺子的两张牌</td></tr><tr><td>Pon</td><td>calledTile: string, consumed: []string</td><td>无</td><td>碰, calledTile为被碰的牌, consumed为手中用来碰的两张牌</td></tr><tr><td>Daimingkan</td><td>calledTile: string, consumed: []string</td><td>无</td><td>明杠, calledTile为被杠的牌, consumed为手中的三张牌</td></tr><tr><td>Ankan</td><td>tile: string</td><td>无</td><td>暗杠, tile为牌名</td></tr><tr><td>Kakan</td><td>tile: string</td><td>无</td><td>加杠, tile为新加入的牌名</td></tr><tr><td>Tsumo</td><td>无</td><td>无</td><td>自摸</td></tr><tr><td>Ron</td><td>无</td><td>无</td><td>荣和</td></tr><tr><td>Ryukyoku</td><td>无</td><td>无</td><td>九种九牌（流局）</td></tr><tr><td>Babei</td><td>无</td><td>无</td><td>拔北</td></tr><tr><td>Cancel</td><td>无</td><td>无</td><td>取消、跳过（不鸣牌）</td></tr></tbody></table><h1 id="完整示例脚本" tabindex="-1"><a class="header-anchor" href="#完整示例脚本"><span>完整示例脚本</span></a></h1><ul><li>与雀魂/天凤一致，在 <code>onExecute</code> 回调中拿到 AI 的推荐结果，按动作类型分派到 <code>RiichiCityActions</code> 对应方法。</li><li><code>lq.NotifyAIResult</code> 参考 <a href="/archer/zh/auto/majsoul/lq/basic-lq">NotifyAIResult</a></li><li><code>GetType</code> 参考 <a href="/archer/zh/auto/majsoul/action_type/basic-action-type">动作类型</a></li></ul><div class="language-golang line-numbers-mode" data-highlighter="prismjs" data-ext="golang"><pre><code class="language-golang"><span class="line">package main</span>
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
<span class="line">	E_PlayOperation_Discard        // 弃牌</span>
<span class="line">	E_PlayOperation_Chi            // 吃</span>
<span class="line">	E_PlayOperation_Pon            // 碰</span>
<span class="line">	E_PlayOperation_Ankan          // 暗杠</span>
<span class="line">	E_PlayOperation_Minkan         // 明杠</span>
<span class="line">	E_PlayOperation_Kakan          // 加杠</span>
<span class="line">	E_PlayOperation_RiiChi         // 立直</span>
<span class="line">	E_PlayOperation_Tsumo          // 自摸</span>
<span class="line">	E_PlayOperation_Ron            // 荣和</span>
<span class="line">	E_PlayOperation_JiuZhongJiuPai // 九种九牌</span>
<span class="line">	E_PlayOperation_Babei          // 拔北</span>
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
<span class="line">	// 拟人延迟: 打牌(自己回合, 时间充裕)稍长; 鸣牌/和牌(服务器有应答时限)取短, 避免错过窗口。</span>
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
<span class="line">		fmt.Println(&quot;RiichiCity 未处理的操作类型:&quot;, target.GetType())</span>
<span class="line">	}</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码"><span>示例代码</span></a></h1><div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go"><pre><code class="language-go"><span class="line">actions<span class="token punctuation">.</span><span class="token function">NewRiichiCityActions</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Discard</span><span class="token punctuation">(</span><span class="token string">&quot;1m&quot;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,15)])])}const r=s(t,[["render",l]]),p=JSON.parse('{"path":"/zh/auto/riichicity/basic-riichicity.html","title":"基础","lang":"zh-CN","frontmatter":{"title":"基础"},"git":{},"filePathRelative":"zh/auto/riichicity/basic-riichicity.md"}');export{r as comp,p as data};
