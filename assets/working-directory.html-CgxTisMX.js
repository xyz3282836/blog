import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as t,f as e,e as n,o as l}from"./app-DRGQ8W9R.js";const h="/assets/git3-63iS0-9E.jpg",k="/assets/git4-d8P-6ksl.jpg",p={};function r(d,i){return l(),a("div",null,[i[0]||(i[0]=t("p",null,"Git 和其他版本控制系统如 SVN 的一个不同之处就是有暂存区的概念。",-1)),e(" more "),i[1]||(i[1]=n('<h2 id="工作区-working-directory" tabindex="-1"><a class="header-anchor" href="#工作区-working-directory"><span>工作区(Working Directory)</span></a></h2><p>就是您在电脑里能看到的目录，比如 learngit 文件夹就是一个工作区:</p><h2 id="版本库-repository" tabindex="-1"><a class="header-anchor" href="#版本库-repository"><span>版本库(Repository)</span></a></h2><p>工作区有一个隐藏目录.git，这个不算工作区，而是 Git 的版本库。</p><p>Git 的版本库里存了很多东西，其中最重要的就是称为 stage(或者叫 index)的暂存区，还有 Git 为我们自动创建的第一个分支 <code>master</code>，以及指向 master 的一个指针叫 <code>HEAD</code>。</p><figure><img src="'+h+`" alt="版本库图例" tabindex="0" loading="lazy"><figcaption>版本库图例</figcaption></figure><p>前面讲了我们把文件往 Git 版本库里添加的时候，提交更改，实际上就是把暂存区的所有内容提交到当前分支。我们创建 Git 版本库时，Git 自动为我们创建了唯一一个 <code>master</code> 分支，所以，现在，<code>git commit</code> 就是往 master 分支上提交更改。</p><p>您可以简单理解为，需要提交的文件修改通通放到暂存区，然后，一次性提交暂存区的所有修改。</p><p>先对 readme.txt 做个修改，比如加上一行内容:</p><div class="language-md line-numbers-mode" data-highlighter="shiki" data-ext="md" data-title="md" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">Git is a distributed version control system.</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">Git is free software distributed under the GPL.</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">Git has a mutable index called stage.</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，在工作区新增一个 LICENSE 文本文件(内容随便写)。</p><p>先用 <code>git status</code> 查看一下状态:</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> status</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">On</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> branch</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> master</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Changes</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> not</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> staged</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> for</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> commit:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">use</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;git add &lt;file&gt;...&quot;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> to</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> update</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> what</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> will</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> be</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> committed</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">use</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;git checkout -- &lt;file&gt;...&quot;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> to</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> discard</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> changes</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> in</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> working</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> directory</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    modified:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">   readme.txt</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Untracked</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> files:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">use</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;git add &lt;file&gt;...&quot;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> to</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> include</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> in</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> what</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> will</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> be</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> committed</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    LICENSE</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">no</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> changes</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> added</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> to</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> commit</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (use </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;git add&quot;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> and/or</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;git commit -a&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Git 非常清楚地告诉我们，readme.txt 被修改了，而 LICENSE 还从来没有被添加过，所以它的状态是 <code>Untracked</code>。</p><p>现在，使用两次命令 <code>git add</code>，把 readme.txt 和 LICENSE 都添加后，用 <code>git status</code> 再查看一下:</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> status</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">On</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> branch</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> master</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Changes</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> to</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> be</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> committed:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">use</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;git reset HEAD &lt;file&gt;...&quot;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> to</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> unstage</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    new</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> file:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">   LICENSE</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    modified:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">   readme.txt</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在，暂存区的状态就变成这样了:</p><figure><img src="`+k+`" alt="状态示意图" tabindex="0" loading="lazy"><figcaption>状态示意图</figcaption></figure><p>所以，<code>git add</code> 命令实际上就是把要提交的所有修改放到暂存区(Stage)，然后，执行 <code>git commit</code> 就可以一次性把暂存区的所有修改提交到分支。</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> commit</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -m</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;understand how stage works&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[master e43a48b] understand how stage works</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> 2</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> files</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> changed,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 2</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> insertions</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">+</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> create</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mode</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 100644</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> LICENSE</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一旦提交后，如果您又没有对工作区做任何修改，那么工作区就是“干净”的:</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> status</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">On</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> branch</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> master</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">nothing</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> to</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> commit,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> working</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> tree</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> clean</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22))])}const c=s(p,[["render",r],["__file","working-directory.html.vue"]]),F=JSON.parse('{"path":"/software/git/working-directory.html","title":"工作区和暂存区","lang":"zh-CN","frontmatter":{"date":"2024-01-27T00:00:00.000Z","title":"工作区和暂存区","icon":"workingDirectory","order":7,"author":"廖雪峰","category":"Git","tag":["Git","软件"],"copyright":"Copyright by 廖雪峰 Edited by Mr.Hope","description":"Git 和其他版本控制系统如 SVN 的一个不同之处就是有暂存区的概念。","head":[["meta",{"property":"og:url","content":"https://blog.ruizhou.cf/software/git/working-directory.html"}],["meta",{"property":"og:site_name","content":"rz blog"}],["meta",{"property":"og:title","content":"工作区和暂存区"}],["meta",{"property":"og:description","content":"Git 和其他版本控制系统如 SVN 的一个不同之处就是有暂存区的概念。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-28T08:14:42.000Z"}],["meta",{"property":"article:author","content":"廖雪峰"}],["meta",{"property":"article:tag","content":"Git"}],["meta",{"property":"article:tag","content":"软件"}],["meta",{"property":"article:published_time","content":"2024-01-27T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-28T08:14:42.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"工作区和暂存区\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-01-27T00:00:00.000Z\\",\\"dateModified\\":\\"2024-01-28T08:14:42.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"廖雪峰\\"}]}"]]},"headers":[{"level":2,"title":"工作区(Working Directory)","slug":"工作区-working-directory","link":"#工作区-working-directory","children":[]},{"level":2,"title":"版本库(Repository)","slug":"版本库-repository","link":"#版本库-repository","children":[]}],"git":{"createdTime":1677700395000,"updatedTime":1706429682000,"contributors":[{"name":"liuruizhou","email":"liuruizhou@bilibili.com","commits":5},{"name":"zhou","email":"liuruizhou@bilibili.com","commits":1},{"name":"zhou","email":"ruizhouliu@163.com","commits":1}]},"readingTime":{"minutes":2.22,"words":666},"filePathRelative":"software/git/working-directory.md","localizedDate":"2024年1月27日","excerpt":"<p>Git 和其他版本控制系统如 SVN 的一个不同之处就是有暂存区的概念。</p>\\n","copyright":{"author":"廖雪峰"},"autoDesc":true}');export{c as comp,F as data};