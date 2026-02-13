import{_ as s,c as a,a as e,o as l}from"./app-DGjGYcEW.js";const i={};function c(d,n){return l(),a("div",null,[...n[0]||(n[0]=[e(`<h1 id="基础回顾" tabindex="-1"><a class="header-anchor" href="#基础回顾"><span>基础回顾</span></a></h1><p>上一节介绍了麻将事件的基础登入回调函数, 但是在实际的游戏中被调用时此时并不能确定是否已经进入了游戏大厅, 还需要进一步判断是否已经进入了游戏, 以及是否已经开始游戏</p><h1 id="如何判断" tabindex="-1"><a class="header-anchor" href="#如何判断"><span>如何判断</span></a></h1><p>在 <a href="/archer/zh/auto/majsoul/mgr/mgr-lobby">lobbymgr</a> 这个库中提供了一些游戏状态可以辅助你进行判断游戏当前的状态</p><h1 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码"><span>示例代码</span></a></h1><div class="language-golang line-numbers-mode" data-highlighter="prismjs" data-ext="golang"><pre><code class="language-golang"><span class="line">package main</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="进阶代码" tabindex="-1"><a class="header-anchor" href="#进阶代码"><span>进阶代码</span></a></h1><ul><li>上面的代码仅能判断一次是否在大厅页面, 但是进入大厅不是立刻完成的, 所以我们需要使用循环进行判断</li></ul><div class="language-golang line-numbers-mode" data-highlighter="prismjs" data-ext="golang"><pre><code class="language-golang"><span class="line">package main</span>
<span class="line"></span>
<span class="line">import (</span>
<span class="line">  &quot;github.com/moxcomic/Archer/mgr/lobbymgr&quot;</span>
<span class="line">)</span>
<span class="line"></span>
<span class="line">func onLogin() {</span>
<span class="line">  for range time.Tick(time.Second) {</span>
<span class="line">    if !lobbymgr.Inst().Enable() {</span>
<span class="line">      fmt.Println(&quot;正在等待进入大厅...&quot;)</span>
<span class="line">      continue</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    break</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>当然这只是一个例子, 具体的游戏逻辑需要根据实际情况进行判断</li></ul>`,10)])])}const p=s(i,[["render",c]]),v=JSON.parse('{"path":"/zh/auto/majsoul/event/advanced-event-login.html","title":"进阶：麻将事件登录","lang":"zh-CN","frontmatter":{"title":"进阶：麻将事件登录"},"git":{},"filePathRelative":"zh/auto/majsoul/event/advanced-event-login.md"}');export{p as comp,v as data};
