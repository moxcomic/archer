import{_ as e,c as a,a as s,o as i}from"./app-D5IplOGW.js";const l={};function t(o,n){return i(),a("div",null,n[0]||(n[0]=[s(`<h1 id="calling-the-interface" tabindex="-1"><a class="header-anchor" href="#calling-the-interface"><span>Calling the Interface</span></a></h1><ul><li>Use the <code>Pon</code> method from the <a href="/en/auto/majsoul/actions/basic-action-majsoul" target="_blank" rel="noopener noreferrer">MajsoulActions</a> package to perform a Pon (meld).</li></ul><h1 id="example-code" tabindex="-1"><a class="header-anchor" href="#example-code"><span>Example Code</span></a></h1><div class="language-golang line-numbers-mode" data-highlighter="prismjs" data-ext="golang" data-title="golang"><pre><code><span class="line">package main</span>
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
<span class="line">  if result.GetResult()[0].GetType() == E_PlayOperation_Pon {</span>
<span class="line">    if len(result.GetResult()[0].GetCombination()) != 2 {</span>
<span class="line">      fmt.Println(&quot;Unable to retrieve the &#39;Pon&#39; option&quot;)</span>
<span class="line">      return</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    actions.NewMajsoulActions().Pon(result.GetResult()[0].GetCombination()[0], result.GetResult()[0].GetCombination()[1])</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>In the <code>onExecute</code> function, we check if the current operation is a <code>Pon</code> by calling <code>result.GetResult()[0].GetType()</code>. If it is, we retrieve the Pon tile combination from <code>result.GetResult()[0].GetCombination()</code> and call <code>actions.NewMajsoulActions().Pon(result.GetResult()[0].GetCombination()[0], result.GetResult()[0].GetCombination()[1])</code> to execute the meld.</li><li>This is just an example. In actual usage, you may need to modify the code according to real-world scenarios.</li><li>For more on <code>lq.NotifyAIResult</code>, refer to <a href="/en/auto/majsoul/lq/basic-lq" target="_blank" rel="noopener noreferrer">NotifyAIResult</a>.</li><li>For <code>GetType</code>, refer to <a href="/en/auto/majsoul/action_type/basic-action-type" target="_blank" rel="noopener noreferrer">Action Types</a>.</li></ul>`,5)]))}const r=e(l,[["render",t],["__file","basic-action-pon.html.vue"]]),p=JSON.parse('{"path":"/en/auto/majsoul/action/basic-action-pon.html","title":"Pon","lang":"en-US","frontmatter":{"title":"Pon"},"headers":[],"git":{},"filePathRelative":"en/auto/majsoul/action/basic-action-pon.md"}');export{r as comp,p as data};
