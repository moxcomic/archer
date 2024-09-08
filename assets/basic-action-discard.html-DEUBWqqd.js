import{_ as a,c as e,a as s,o as i}from"./app-WiNin6DN.js";const l={};function c(t,n){return i(),e("div",null,n[0]||(n[0]=[s(`<h1 id="calling-the-interface" tabindex="-1"><a class="header-anchor" href="#calling-the-interface"><span>Calling the Interface</span></a></h1><ul><li>Use the <code>Discard</code> method from the <a href="/en/auto/majsoul/actions/basic-action-majsoul" target="_blank" rel="noopener noreferrer">MajsoulActions</a> package to perform a discard.</li></ul><h1 id="example-code" tabindex="-1"><a class="header-anchor" href="#example-code"><span>Example Code</span></a></h1><div class="language-golang line-numbers-mode" data-highlighter="prismjs" data-ext="golang" data-title="golang"><pre><code><span class="line">package main</span>
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
<span class="line">    actions.NewMajsoulActions().Discard(result.GetResult()[0].GetTile(), result.GetResult()[0].GetMoqie())</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>In the <code>onExecute</code> function, we use the <code>GetResult</code> method to retrieve the current action type. If it is a discard action, we call the <code>Discard</code> method to discard the corresponding tile.</li><li>This is just an example. In actual usage, you may need to modify the code based on real-world scenarios.</li><li>For more on <code>lq.NotifyAIResult</code>, refer to <a href="/en/auto/majsoul/lq/basic-lq" target="_blank" rel="noopener noreferrer">NotifyAIResult</a>.</li><li>For <code>GetType</code>, refer to <a href="/en/auto/majsoul/action_type/basic-action-type" target="_blank" rel="noopener noreferrer">Action Types</a>.</li></ul>`,5)]))}const o=a(l,[["render",c],["__file","basic-action-discard.html.vue"]]),d=JSON.parse('{"path":"/en/auto/majsoul/action/basic-action-discard.html","title":"Basics","lang":"en-US","frontmatter":{"title":"Basics"},"headers":[],"git":{},"filePathRelative":"en/auto/majsoul/action/basic-action-discard.md"}');export{o as comp,d as data};
