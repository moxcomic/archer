import{_ as a,c as e,a as s,o as i}from"./app-Cy-9OEeS.js";const l={};function t(c,n){return i(),e("div",null,n[0]||(n[0]=[s(`<h1 id="回调函数" tabindex="-1"><a class="header-anchor" href="#回调函数"><span>回调函数</span></a></h1><p>登录事件的回调函数是 <code>onLogin</code> ，它没有任何参数和返回值, 它只会在用户登录成功时被调用。</p><h1 id="调用时机" tabindex="-1"><a class="header-anchor" href="#调用时机"><span>调用时机</span></a></h1><ul><li>在游戏登录成功时以及任意时刻游戏重连时调用</li><li>如果是首次登入游戏, 调用时机会在未进入大厅时, 需要注意这里未进入大厅不能操作大厅的任何功能</li></ul><h1 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码"><span>示例代码</span></a></h1><div class="language-golang line-numbers-mode" data-highlighter="prismjs" data-ext="golang" data-title="golang"><pre><code><span class="line">package main</span>
<span class="line"></span>
<span class="line">import (</span>
<span class="line">  &quot;fmt&quot;</span>
<span class="line">)</span>
<span class="line"></span>
<span class="line">func onLogin() {</span>
<span class="line">  fmt.Println(&quot;登入成功&quot;)</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6)]))}const r=a(l,[["render",t],["__file","basic-event-login.html.vue"]]),o=JSON.parse('{"path":"/zh/auto/majsoul/event/basic-event-login.html","title":"登录事件","lang":"zh-CN","frontmatter":{"title":"登录事件"},"headers":[],"git":{},"filePathRelative":"zh/auto/majsoul/event/basic-event-login.md"}');export{r as comp,o as data};
