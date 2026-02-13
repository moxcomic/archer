import{_ as n,c as s,a as e,o as i}from"./app-DGjGYcEW.js";const l={};function c(d,a){return i(),s("div",null,[...a[0]||(a[0]=[e(`<h1 id="回顾" tabindex="-1"><a class="header-anchor" href="#回顾"><span>回顾</span></a></h1><p>在上一节中, 我们只是简单的调用 <a href="/archer/zh/auto/majsoul/actions/basic-action-majsoul">actions</a> 接口来进行出牌操作。但是我们知道在 <code>雀魂</code> 游戏中在立直(Riichi)后全程由服务端自动丢弃最后一张牌, 所以我们在上一章节的代码就要改一改, 在自己已经立直的情况下, 取消该动作。</p><h1 id="如何判断" tabindex="-1"><a class="header-anchor" href="#如何判断"><span>如何判断</span></a></h1><ul><li>在 <a href="/archer/zh/auto/majsoul/gamestate/basic-gamestate">gamestate</a> 这个库中提供了一些游戏状态可以辅助你进行判断游戏当前的状态</li></ul><h1 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码"><span>示例代码</span></a></h1><div class="language-golang line-numbers-mode" data-highlighter="prismjs" data-ext="golang"><pre><code class="language-golang"><span class="line">package main</span>
<span class="line"></span>
<span class="line">import (</span>
<span class="line">  &quot;github.com/moxcomic/Archer/actions&quot;</span>
<span class="line">  &quot;github.com/moxcomic/lq&quot;</span>
<span class="line">)</span>
<span class="line"></span>
<span class="line">const (</span>
<span class="line">  E_PlayOperation_None           = iota</span>
<span class="line">  E_PlayOperation_Discard</span>
<span class="line">  E_PlayOperation_Chi</span>
<span class="line">  E_PlayOperation_Pon</span>
<span class="line">  E_PlayOperation_Ankan</span>
<span class="line">  E_PlayOperation_Minkan</span>
<span class="line">  E_PlayOperation_Kakan</span>
<span class="line">  E_PlayOperation_RiiChi</span>
<span class="line">  E_PlayOperation_Tsumo</span>
<span class="line">  E_PlayOperation_Ron</span>
<span class="line">  E_PlayOperation_JiuZhongJiuPai</span>
<span class="line">  E_PlayOperation_Babei</span>
<span class="line">  E_PlayOperation_HuanSanZhang</span>
<span class="line">  E_PlayOperation_DingQue</span>
<span class="line">  E_PlayOperation_Reveal</span>
<span class="line">  E_PlayOperation_Unveil</span>
<span class="line">  E_PlayOperation_LockTile</span>
<span class="line">  E_PlayOperation_Revealliqi</span>
<span class="line">)</span>
<span class="line"></span>
<span class="line">func onExecute(result *lq.NotifyAIResult, risk []float64, r, m, f, t float64) {</span>
<span class="line">  if result.GetResult()[0].GetType() == E_PlayOperation_Discard {</span>
<span class="line">    if gamestate.Inst().Riichi()[0] {</span>
<span class="line">      if gamestate.Inst().IsOperation(E_PlayOperation_Ankan) {</span>
<span class="line">        actions.NewMajsoulActions().Cancel()</span>
<span class="line">      }</span>
<span class="line">      </span>
<span class="line">      return</span>
<span class="line">    }</span>
<span class="line">    </span>
<span class="line">    actions.NewMajsoulActions().Discard(result.GetResult()[0].GetTile(), result.GetResult()[0].GetMoqie())</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>我们在 <code>onExecute</code> 函数中判断游戏当前是否处于立直状态, 如果是立直状态, 并且当前动作是 <code>E_PlayOperation_Ankan</code>, 则取消该动作。</li><li>否则, 我们调用 <code>Discard</code> 动作接口来进行出牌操作。</li><li>注意: 由于 <code>Discard</code> 动作接口的调用需要传入牌和摸牌信息, 所以我们需要从 <code>result.GetResult()[0].GetTile()</code> 和 <code>result.GetResult()[0].GetMoqie()</code> 中获取牌和摸切信息。</li><li><code>gamestate</code> 参考 <a href="/archer/zh/auto/majsoul/gamestate/basic-gamestate">gamestate</a></li></ul>`,7)])])}const r=n(l,[["render",c]]),p=JSON.parse('{"path":"/zh/auto/majsoul/action/advanced-action-discard.html","title":"进阶","lang":"zh-CN","frontmatter":{"title":"进阶"},"git":{},"filePathRelative":"zh/auto/majsoul/action/advanced-action-discard.md"}');export{r as comp,p as data};
