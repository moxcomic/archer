import{_ as e,c as n,a as s,o as t}from"./app-B2JKC-rB.js";const l={};function i(d,a){return t(),n("div",null,a[0]||(a[0]=[s(`<h1 id="package-name" tabindex="-1"><a class="header-anchor" href="#package-name"><span>Package Name</span></a></h1><ul><li><code>lobbymgr</code></li></ul><h1 id="import" tabindex="-1"><a class="header-anchor" href="#import"><span>Import</span></a></h1><ul><li><code>import &quot;github.com/moxcomic/Archer/mgr/lobbymgr&quot;</code></li></ul><h1 id="method-list" tabindex="-1"><a class="header-anchor" href="#method-list"><span>Method List</span></a></h1><table><thead><tr><th>Name</th><th>Parameters</th><th>Return Value</th><th>Notes</th></tr></thead><tbody><tr><td>Inst</td><td>None</td><td>*lobbymgr.LobbyMgr</td><td>Lobby manager instance</td></tr></tbody></table><h1 id="instance-methods" tabindex="-1"><a class="header-anchor" href="#instance-methods"><span>Instance Methods</span></a></h1><table><thead><tr><th>Name</th><th>Parameters</th><th>Return Value</th><th>Notes</th></tr></thead><tbody><tr><td>Enable</td><td>None</td><td>bool</td><td>Returns whether the user is on the game lobby page</td></tr></tbody></table><h1 id="example-code" tabindex="-1"><a class="header-anchor" href="#example-code"><span>Example Code</span></a></h1><div class="language-golang line-numbers-mode" data-highlighter="prismjs" data-ext="golang" data-title="golang"><pre><code><span class="line">package main</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10)]))}const o=e(l,[["render",i],["__file","mgr-lobby.html.vue"]]),c=JSON.parse('{"path":"/en/auto/majsoul/mgr/mgr-lobby.html","title":"Lobby Manager","lang":"en-US","frontmatter":{"title":"Lobby Manager"},"headers":[],"git":{},"filePathRelative":"en/auto/majsoul/mgr/mgr-lobby.md"}');export{o as comp,c as data};
