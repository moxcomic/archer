import{_ as n,c as s,a as e,o as l}from"./app-B2JKC-rB.js";const t={};function i(d,a){return l(),s("div",null,a[0]||(a[0]=[e(`<h1 id="包名" tabindex="-1"><a class="header-anchor" href="#包名"><span>包名</span></a></h1><ul><li><code>lobbymgr</code></li></ul><h1 id="引用方式" tabindex="-1"><a class="header-anchor" href="#引用方式"><span>引用方式</span></a></h1><ul><li><code>import &quot;github.com/moxcomic/Archer/mgr/lobbymgr&quot;</code></li></ul><h1 id="方法列表" tabindex="-1"><a class="header-anchor" href="#方法列表"><span>方法列表</span></a></h1><table><thead><tr><th>名称</th><th>参数</th><th>返回值</th><th>备注</th></tr></thead><tbody><tr><td>Inst</td><td>无</td><td>*lobbymgr.LobbyMgr</td><td>大厅管理器实例</td></tr></tbody></table><h1 id="实例方法" tabindex="-1"><a class="header-anchor" href="#实例方法"><span>实例方法</span></a></h1><table><thead><tr><th>名称</th><th>参数</th><th>返回值</th><th>备注</th></tr></thead><tbody><tr><td>Enable</td><td>无</td><td>bool</td><td>返回是否在游戏大厅页面</td></tr></tbody></table><h1 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码"><span>示例代码</span></a></h1><div class="language-golang line-numbers-mode" data-highlighter="prismjs" data-ext="golang" data-title="golang"><pre><code><span class="line">package main</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10)]))}const c=n(t,[["render",i],["__file","mgr-lobby.html.vue"]]),o=JSON.parse('{"path":"/zh/auto/majsoul/mgr/mgr-lobby.html","title":"大厅管理器","lang":"zh-CN","frontmatter":{"title":"大厅管理器"},"headers":[],"git":{},"filePathRelative":"zh/auto/majsoul/mgr/mgr-lobby.md"}');export{c as comp,o as data};
