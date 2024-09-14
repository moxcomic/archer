import{_ as a,c as n,a as s,o as i}from"./app-BwrdRBOG.js";const l={};function t(c,e){return i(),n("div",null,e[0]||(e[0]=[s(`<h1 id="review" tabindex="-1"><a class="header-anchor" href="#review"><span>Review</span></a></h1><p>In the previous section, we simply called the <a href="/en/auto/majsoul/actions/basic-action-majsoul" target="_blank" rel="noopener noreferrer">actions</a> interface to perform a discard operation. However, we know that in the game of <code>Majsoul</code>, after declaring Riichi, the server will automatically discard the last tile for the player. Therefore, we need to modify the code from the previous section to cancel this action when the player has already declared Riichi.</p><h1 id="how-to-determine-the-state" tabindex="-1"><a class="header-anchor" href="#how-to-determine-the-state"><span>How to Determine the State</span></a></h1><ul><li>The <a href="/en/auto/majsoul/gamestate/basic-gamestate" target="_blank" rel="noopener noreferrer">gamestate</a> library provides some game states that can help you determine the current status of the game.</li></ul><h1 id="example-code" tabindex="-1"><a class="header-anchor" href="#example-code"><span>Example Code</span></a></h1><div class="language-golang line-numbers-mode" data-highlighter="prismjs" data-ext="golang" data-title="golang"><pre><code><span class="line">package main</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>In the <code>onExecute</code> function, we check if the game is currently in a Riichi state. If so, and the current operation is <code>E_PlayOperation_Ankan</code>, the action will be canceled.</li><li>Otherwise, we call the <code>Discard</code> action interface to perform the discard operation.</li><li>Note: Since the <code>Discard</code> action interface requires passing in the tile and draw information, we need to retrieve the tile and draw-cut information from <code>result.GetResult()[0].GetTile()</code> and <code>result.GetResult()[0].GetMoqie()</code>.</li><li>For more information on <code>gamestate</code>, refer to <a href="/en/auto/majsoul/gamestate/basic-gamestate" target="_blank" rel="noopener noreferrer">gamestate</a>.</li></ul>`,7)]))}const o=a(l,[["render",t],["__file","advanced-action-discard.html.vue"]]),d=JSON.parse('{"path":"/en/auto/majsoul/action/advanced-action-discard.html","title":"Advanced","lang":"en-US","frontmatter":{"title":"Advanced"},"headers":[],"git":{},"filePathRelative":"en/auto/majsoul/action/advanced-action-discard.md"}');export{o as comp,d as data};
