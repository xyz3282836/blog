import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,a as e,o as a}from"./app-ClpvnUK8.js";const h={};function l(n,i){return a(),t("div",null,i[0]||(i[0]=[e('<p>查询client的连接数</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">netstat</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -na</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">|</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">grep</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ESTABLISHED</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">|</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">grep</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> :9000</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">awk</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;{print $5}&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> |</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">awk</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -F:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;{print $1}&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">| </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sort</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">|</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">uniq</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -c</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> |</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sort</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -r</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> |</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">head</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -n</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 10</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>',2)]))}const k=s(h,[["render",l],["__file","base.html.vue"]]),o=JSON.parse('{"path":"/tech/bilibili/base.html","title":"grpc服务对于各个客户端host的连接数限制","lang":"zh-CN","frontmatter":{"title":"grpc服务对于各个客户端host的连接数限制","date":"2023-08-30T11:46:00.000Z","category":"linux","tag":["shell","netstat"],"description":"查询client的连接数","head":[["meta",{"property":"og:url","content":"https://blog.ruizhou.cf/tech/bilibili/base.html"}],["meta",{"property":"og:site_name","content":"rz blog"}],["meta",{"property":"og:title","content":"grpc服务对于各个客户端host的连接数限制"}],["meta",{"property":"og:description","content":"查询client的连接数"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"shell"}],["meta",{"property":"article:tag","content":"netstat"}],["meta",{"property":"article:published_time","content":"2023-08-30T11:46:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"grpc服务对于各个客户端host的连接数限制\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-08-30T11:46:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"ruizhou\\",\\"url\\":\\"https://blog.ruizhou.cf\\"}]}"]]},"headers":[],"readingTime":{"minutes":0.2,"words":60},"filePathRelative":"tech/bilibili/base.md","localizedDate":"2023年8月30日","excerpt":"","autoDesc":true}');export{k as comp,o as data};