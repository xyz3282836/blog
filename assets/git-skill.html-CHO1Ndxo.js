import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as e,d as a}from"./app-CFIOrZJq.js";const t={},h=a(`<h5 id="_1-进入仓库-拉一个分支比如名为-latest-branch" tabindex="-1"><a class="header-anchor" href="#_1-进入仓库-拉一个分支比如名为-latest-branch"><span>1. 进入仓库，拉一个分支比如名为 latest_branch</span></a></h5><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> checkout</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --orphan</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> latest_branch</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>–orphan 创建一个无任何历史记录的孤儿分支</li></ul><h5 id="_2-添加所有文件到上述分支并提交一次" tabindex="-1"><a class="header-anchor" href="#_2-添加所有文件到上述分支并提交一次"><span>2. 添加所有文件到上述分支并提交一次</span></a></h5><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> add</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -A</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> commit</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -am</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;initial commit&#39;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_3-删除-master-分支" tabindex="-1"><a class="header-anchor" href="#_3-删除-master-分支"><span>3. 删除 master 分支</span></a></h5><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> branch</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -D</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> master</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h5 id="_4-更改当前分支为-master-分支" tabindex="-1"><a class="header-anchor" href="#_4-更改当前分支为-master-分支"><span>4. 更改当前分支为 master 分支</span></a></h5><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> branch</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -m</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> master</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h5 id="_5-将本地所有更改-push-到远程仓库" tabindex="-1"><a class="header-anchor" href="#_5-将本地所有更改-push-到远程仓库"><span>5. 将本地所有更改 push 到远程仓库</span></a></h5><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> push</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -f</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> origin</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> master</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>-f 强制push</li></ul><h5 id="_6-关联本地-master-到远程-master" tabindex="-1"><a class="header-anchor" href="#_6-关联本地-master-到远程-master"><span>6. 关联本地 master 到远程 master</span></a></h5><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> branch</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --set-upstream-to=origin/master</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>对 gitee 用户，因为 gitee 目前限制单个仓库大小为 1024 MB，清除完历史记录后，还要去项目主页 设置下做一下存储库GC</p>`,15),l=[h];function r(n,d){return s(),e("div",null,l)}const k=i(t,[["render",r],["__file","git-skill.html.vue"]]),o=JSON.parse('{"path":"/tech/git/git-skill.html","title":"Git 清除所有历史记录","lang":"zh-CN","frontmatter":{"title":"Git 清除所有历史记录","date":"2023-12-08T05:14:00.000Z","category":"git","tag":["git","branch","orphan"],"description":"1. 进入仓库，拉一个分支比如名为 latest_branch –orphan 创建一个无任何历史记录的孤儿分支 2. 添加所有文件到上述分支并提交一次 3. 删除 master 分支 4. 更改当前分支为 master 分支 5. 将本地所有更改 push 到远程仓库 -f 强制push 6. 关联本地 master 到远程 master 对 git...","head":[["meta",{"property":"og:url","content":"https://blog.ruizhou.cf/tech/git/git-skill.html"}],["meta",{"property":"og:site_name","content":"rz blog"}],["meta",{"property":"og:title","content":"Git 清除所有历史记录"}],["meta",{"property":"og:description","content":"1. 进入仓库，拉一个分支比如名为 latest_branch –orphan 创建一个无任何历史记录的孤儿分支 2. 添加所有文件到上述分支并提交一次 3. 删除 master 分支 4. 更改当前分支为 master 分支 5. 将本地所有更改 push 到远程仓库 -f 强制push 6. 关联本地 master 到远程 master 对 git..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-17T07:46:27.000Z"}],["meta",{"property":"article:author","content":"ruizhou"}],["meta",{"property":"article:tag","content":"git"}],["meta",{"property":"article:tag","content":"branch"}],["meta",{"property":"article:tag","content":"orphan"}],["meta",{"property":"article:published_time","content":"2023-12-08T05:14:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-17T07:46:27.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Git 清除所有历史记录\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-12-08T05:14:00.000Z\\",\\"dateModified\\":\\"2024-01-17T07:46:27.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"ruizhou\\",\\"url\\":\\"https://blog.ruizhou.cf\\"}]}"]]},"headers":[{"level":5,"title":"1. 进入仓库，拉一个分支比如名为 latest_branch","slug":"_1-进入仓库-拉一个分支比如名为-latest-branch","link":"#_1-进入仓库-拉一个分支比如名为-latest-branch","children":[]},{"level":5,"title":"2. 添加所有文件到上述分支并提交一次","slug":"_2-添加所有文件到上述分支并提交一次","link":"#_2-添加所有文件到上述分支并提交一次","children":[]},{"level":5,"title":"3. 删除 master 分支","slug":"_3-删除-master-分支","link":"#_3-删除-master-分支","children":[]},{"level":5,"title":"4. 更改当前分支为 master 分支","slug":"_4-更改当前分支为-master-分支","link":"#_4-更改当前分支为-master-分支","children":[]},{"level":5,"title":"5. 将本地所有更改 push 到远程仓库","slug":"_5-将本地所有更改-push-到远程仓库","link":"#_5-将本地所有更改-push-到远程仓库","children":[]},{"level":5,"title":"6. 关联本地 master 到远程 master","slug":"_6-关联本地-master-到远程-master","link":"#_6-关联本地-master-到远程-master","children":[]}],"git":{"createdTime":1705477587000,"updatedTime":1705477587000,"contributors":[{"name":"liuruizhou","email":"liuruizhou@bilibili.com","commits":1}]},"readingTime":{"minutes":0.67,"words":200},"filePathRelative":"tech/git/git-skill.md","localizedDate":"2023年12月8日","excerpt":"","autoDesc":true}');export{k as comp,o as data};