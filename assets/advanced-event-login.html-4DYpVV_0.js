import{_ as n,c as a,a as s,o as i}from"./app-Dr8EbGVP.js";const l={};function t(d,e){return i(),a("div",null,e[0]||(e[0]=[s(`<h1 id="basic-review" tabindex="-1"><a class="header-anchor" href="#basic-review"><span>Basic Review</span></a></h1><p>In the previous section, we introduced the basic callback function for Mahjong event login. However, in real game scenarios, when this is invoked, it is not certain whether the player has already entered the game lobby. Further checks are needed to determine whether the player has entered the game and if the game has started.</p><h1 id="how-to-determine" tabindex="-1"><a class="header-anchor" href="#how-to-determine"><span>How to Determine</span></a></h1><p>The <a href="/en/auto/majsoul/mgr/mgr-lobby" target="_blank" rel="noopener noreferrer">lobbymgr</a> library provides game status information that can help you determine the current state of the game.</p><h1 id="example-code" tabindex="-1"><a class="header-anchor" href="#example-code"><span>Example Code</span></a></h1><div class="language-golang line-numbers-mode" data-highlighter="prismjs" data-ext="golang" data-title="golang"><pre><code><span class="line">package main</span>
<span class="line"></span>
<span class="line">import (</span>
<span class="line">  &quot;github.com/moxcomic/Archer/mgr/lobbymgr&quot;</span>
<span class="line">)</span>
<span class="line"></span>
<span class="line">func onLogin() {</span>
<span class="line">  if lobbymgr.Inst.Enable() {</span>
<span class="line">    // 在游戏大厅页面</span>
<span class="line">    // On the game lobby page</span>
<span class="line">  } else {</span>
<span class="line">    // 不在游戏大厅页面</span>
<span class="line">    // Not on the game lobby page</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="advanced-code" tabindex="-1"><a class="header-anchor" href="#advanced-code"><span>Advanced Code</span></a></h1><ul><li>The code above only checks once whether the player is on the lobby page, but entering the lobby is not instantaneous. Therefore, we need to use a loop to continuously check.</li></ul><div class="language-golang line-numbers-mode" data-highlighter="prismjs" data-ext="golang" data-title="golang"><pre><code><span class="line">package main</span>
<span class="line"></span>
<span class="line">import (</span>
<span class="line">  &quot;github.com/moxcomic/Archer/mgr/lobbymgr&quot;</span>
<span class="line">)</span>
<span class="line"></span>
<span class="line">func onLogin() {</span>
<span class="line">  for range time.Tick(time.Second) {</span>
<span class="line">    if !lobbymgr.Inst().Enable() {</span>
<span class="line">      fmt.Println(&quot;Waiting to enter the lobby...&quot;)</span>
<span class="line">      continue</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    break</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Of course, this is just an example. The specific game logic needs to be determined based on the actual situation.</li></ul>`,10)]))}const r=n(l,[["render",t],["__file","advanced-event-login.html.vue"]]),o=JSON.parse('{"path":"/en/auto/majsoul/event/advanced-event-login.html","title":"Advanced - Mahjong Event Login","lang":"en-US","frontmatter":{"title":"Advanced - Mahjong Event Login"},"headers":[],"git":{},"filePathRelative":"en/auto/majsoul/event/advanced-event-login.md"}');export{r as comp,o as data};
