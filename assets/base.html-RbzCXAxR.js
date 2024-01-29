import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as s,a as e}from"./app-F3T2sEmd.js";const t={},p=e(`<h2 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令"><span>常用命令</span></a></h2><h3 id="run" tabindex="-1"><a class="header-anchor" href="#run"><span>run</span></a></h3><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token punctuation">\\</span>
  <span class="token parameter variable">-it</span> <span class="token punctuation">\\</span>
  <span class="token parameter variable">--rm</span> <span class="token punctuation">\\</span>
  <span class="token parameter variable">--name</span><span class="token operator">=</span>tork-web <span class="token punctuation">\\</span>
  <span class="token parameter variable">-p</span> <span class="token number">3000</span>:3000 <span class="token punctuation">\\</span>
  <span class="token parameter variable">-e</span> <span class="token assign-left variable">BACKEND_URL</span><span class="token operator">=</span>http://my.tork.host:8000 <span class="token punctuation">\\</span>
  runabol/tork-web
</code></pre></div><h2 id="坑" tabindex="-1"><a class="header-anchor" href="#坑"><span>坑</span></a></h2><h3 id="命令" tabindex="-1"><a class="header-anchor" href="#命令"><span>命令</span></a></h3><p><code>COPY</code> param1 param2</p><p>param1 是宿主机的路径，param2是docker镜像内的路径</p>`,7),r=[p];function o(c,l){return n(),s("div",null,r)}const d=a(t,[["render",o],["__file","base.html.vue"]]);export{d as default};
