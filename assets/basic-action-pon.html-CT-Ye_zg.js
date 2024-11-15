import{_ as s,c as a,a as i,o as e}from"./app-BNdnfgRb.js";const l={};function c(t,n){return e(),a("div",null,n[0]||(n[0]=[i(`<h1 id="调用接口" tabindex="-1"><a class="header-anchor" href="#调用接口"><span>调用接口</span></a></h1><ul><li>使用 <a href="/archer/zh/auto/majsoul/actions/basic-action-majsoul">MajsoulActions</a> 包中的 <code>Pon</code> 方法来弃牌。</li></ul><h1 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码"><span>示例代码</span></a></h1><div class="language-golang line-numbers-mode" data-highlighter="prismjs" data-ext="golang" data-title="golang"><pre><code><span class="line">package main</span>
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
<span class="line">      fmt.Println(&quot;无法获取【碰】选项&quot;)</span>
<span class="line">      return</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    actions.NewMajsoulActions().Pon(result.GetResult()[0].GetCombination()[0], result.GetResult()[0].GetCombination()[1])</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>在 <code>onExecute</code> 函数中，我们通过 <code>result.GetResult()[0].GetType()</code> 来判断当前操作是否为【碰】，如果是，我们通过 <code>result.GetResult()[0].GetCombination()</code> 来获取碰牌的组合，并调用 <code>actions.NewMajsoulActions().Pon(result.GetResult()[0].GetCombination()[0], result.GetResult()[0].GetCombination()[1])</code> 来碰掉这两张牌。</li><li>当然这里只是一个示例，实际使用时，你可能需要根据实际情况来修改代码。</li><li><code>lq.NotifyAIResult</code> 参考 <a href="/archer/zh/auto/majsoul/lq/basic-lq">NotifyAIResult</a></li><li><code>GetType</code> 参考 <a href="/archer/zh/auto/majsoul/action_type/basic-action-type">动作类型</a></li></ul>`,5)]))}const p=s(l,[["render",c],["__file","basic-action-pon.html.vue"]]),r=JSON.parse('{"path":"/zh/auto/majsoul/action/basic-action-pon.html","title":"碰","lang":"zh-CN","frontmatter":{"title":"碰"},"headers":[],"git":{},"filePathRelative":"zh/auto/majsoul/action/basic-action-pon.md"}');export{p as comp,r as data};
