import{_ as e,c as a,a as i,o as s}from"./app-B2JKC-rB.js";const l={};function t(c,n){return s(),a("div",null,n[0]||(n[0]=[i(`<h1 id="calling-the-interface" tabindex="-1"><a class="header-anchor" href="#calling-the-interface"><span>Calling the Interface</span></a></h1><ul><li>Use the <code>Chii</code> method from the <a href="/archer/en/auto/majsoul/actions/basic-action-majsoul">MajsoulActions</a> package to perform a discard.</li></ul><h1 id="example-code" tabindex="-1"><a class="header-anchor" href="#example-code"><span>Example Code</span></a></h1><div class="language-golang line-numbers-mode" data-highlighter="prismjs" data-ext="golang" data-title="golang"><pre><code><span class="line">package main</span>
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
<span class="line">  if result.GetResult()[0].GetType() == E_PlayOperation_Chi {</span>
<span class="line">    if len(result.GetResult()[0].GetCombination()) != 2 {</span>
<span class="line">      fmt.Println(&quot;Unable to retrieve the &#39;Chii&#39; option&quot;)</span>
<span class="line">      return</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    actions.NewMajsoulActions().Chii(result.GetResult()[0].GetCombination()[0], result.GetResult()[0].GetCombination()[1])</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>In the <code>onExecute</code> function, we determine whether the current action is <code>Chii</code> by checking <code>result.GetResult()[0].GetType()</code>. If so, we retrieve the combination of tiles to perform the <code>Chii</code> from <code>result.GetResult()[0].GetCombination()</code> and call <code>actions.NewMajsoulActions().Chii(result.GetResult()[0].GetCombination()[0], result.GetResult()[0].GetCombination()[1])</code> to eat the two tiles.</li><li>This is just an example. In actual usage, you may need to modify the code according to the real scenario.</li><li>For more on <code>lq.NotifyAIResult</code>, refer to <a href="/archer/en/auto/majsoul/lq/basic-lq">NotifyAIResult</a>.</li><li>For <code>GetType</code>, refer to <a href="/archer/en/auto/majsoul/action_type/basic-action-type">Action Types</a>.</li></ul>`,5)]))}const r=e(l,[["render",t],["__file","basic-action-chii.html.vue"]]),d=JSON.parse('{"path":"/en/auto/majsoul/action/basic-action-chii.html","title":"Chii (Eat)","lang":"en-US","frontmatter":{"title":"Chii (Eat)"},"headers":[],"git":{},"filePathRelative":"en/auto/majsoul/action/basic-action-chii.md"}');export{r as comp,d as data};
