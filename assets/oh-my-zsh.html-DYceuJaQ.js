import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as h,o as e}from"./app-BNnaAp_K.js";const t={};function n(l,s){return e(),a("div",null,s[0]||(s[0]=[h(`<h2 id="zsh" tabindex="-1"><a class="header-anchor" href="#zsh"><span>zsh</span></a></h2><p>常规安装</p><h2 id="on-my-zsh" tabindex="-1"><a class="header-anchor" href="#on-my-zsh"><span>on my zsh</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sh</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -c</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;$(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">curl</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -fsSL</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="plugin" tabindex="-1"><a class="header-anchor" href="#plugin"><span>plugin</span></a></h3><h4 id="zsh-autosuggestions" tabindex="-1"><a class="header-anchor" href="#zsh-autosuggestions"><span>zsh-autosuggestions</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> clone</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> https://github.com/zsh-users/zsh-autosuggestions</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;"> \${</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">ZSH_CUSTOM</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:-~/.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">oh-my-zsh</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">custom</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">}</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">/plugins/zsh-autosuggestions</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>load zsh-autosuggestions</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">plugins</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    # other plugins...</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    zsh-autosuggestions</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="zsh-syntax-highlighting" tabindex="-1"><a class="header-anchor" href="#zsh-syntax-highlighting"><span>zsh-syntax-highlighting</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> clone</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> https://github.com/zsh-users/zsh-syntax-highlighting</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;"> \${</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">ZSH_CUSTOM</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:-~/.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">oh-my-zsh</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">custom</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">}</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">/plugins/zsh-syntax-highlighting</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>load zsh-autosuggestions</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">plugins</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    # other plugins...</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    zsh-syntax-highlighting</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="fzf-tab" tabindex="-1"><a class="header-anchor" href="#fzf-tab"><span>fzf-tab</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> clone</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> https://github.com/Aloxaf/fzf-tab</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;"> \${</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">ZSH_CUSTOM</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:-~/.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">oh-my-zsh</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">custom</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">}</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">/plugins/fzf-tab</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>load zsh-autosuggestions</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">plugins</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    # other plugins...</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    fzf-tab</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17)]))}const k=i(t,[["render",n],["__file","oh-my-zsh.html.vue"]]),p=JSON.parse('{"path":"/tech/sh/oh-my-zsh.html","title":"oh my zsh","lang":"zh-CN","frontmatter":{"title":"oh my zsh","date":"2023-05-25T01:00:00.000Z","category":"技术","tag":["sh"],"description":"zsh 常规安装 on my zsh plugin zsh-autosuggestions load zsh-autosuggestions zsh-syntax-highlighting load zsh-autosuggestions fzf-tab load zsh-autosuggestions","head":[["meta",{"property":"og:url","content":"https://blog.ruizhou.cf/tech/sh/oh-my-zsh.html"}],["meta",{"property":"og:site_name","content":"rz blog"}],["meta",{"property":"og:title","content":"oh my zsh"}],["meta",{"property":"og:description","content":"zsh 常规安装 on my zsh plugin zsh-autosuggestions load zsh-autosuggestions zsh-syntax-highlighting load zsh-autosuggestions fzf-tab load zsh-autosuggestions"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"sh"}],["meta",{"property":"article:published_time","content":"2023-05-25T01:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"oh my zsh\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-05-25T01:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"ruizhou\\",\\"url\\":\\"https://blog.ruizhou.cf\\"}]}"]]},"headers":[{"level":2,"title":"zsh","slug":"zsh","link":"#zsh","children":[]},{"level":2,"title":"on my zsh","slug":"on-my-zsh","link":"#on-my-zsh","children":[{"level":3,"title":"plugin","slug":"plugin","link":"#plugin","children":[{"level":4,"title":"zsh-autosuggestions","slug":"zsh-autosuggestions","link":"#zsh-autosuggestions","children":[]},{"level":4,"title":"zsh-syntax-highlighting","slug":"zsh-syntax-highlighting","link":"#zsh-syntax-highlighting","children":[]},{"level":4,"title":"fzf-tab","slug":"fzf-tab","link":"#fzf-tab","children":[]}]}]}],"readingTime":{"minutes":0.36,"words":108},"filePathRelative":"tech/sh/oh-my-zsh.md","localizedDate":"2023年5月25日","excerpt":"","autoDesc":true}');export{k as comp,p as data};